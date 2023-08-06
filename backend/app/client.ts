/* eslint-disable no-console */

import axios from 'axios';
import { createHmac, generateKeyPairSync, privateDecrypt, randomBytes } from 'crypto';
import { SignInInterface, SignUpInterface } from '$domain/interface/auth.interface';

type User = { email: string; username: string; id: string; createdAt: string; hmacSecret: string };
type SignInResponse = { accessToken: string; refreshToken: string; user: User };

const client = axios.create({ baseURL: 'http://localhost:8080' });

// Create a counter for the client which increments if a sign in attempt is being made
let counter = 0;

export const signUp = async (user: SignUpInterface) => {
  return (await client.post('/auth/signup', user)).data as User;
};

export const signIn = async (payload: SignInInterface) => {
  counter += 1;
  return (await client.post('/auth/signin', payload)).data as SignInResponse;
};

export const getUserInformation = async (accessToken: string) => {
  return (await client.get('/user', { headers: { Authorization: `Bearer ${accessToken}` } })).data as User;
};

(async () => {
  // Initialize data for random user
  const id = randomBytes(4).toString('hex');
  const user = { email: `${id}@kba.de`, username: id, password: id };

  // Create rsa keys for the server. The public key gets sent to the server in the sign up process.
  // The server then creates the hmac secret, encrypts it with the clients public key and sends the
  // encrypted hmac secret back.
  const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const publicString = publicKey.export({ type: 'pkcs1', format: 'pem' }).toString();

  // Try to register the user with its credentials and the public key
  const signUpResponse = await signUp({ ...user, publicKey: publicString });

  // Decrypt the servers hmac secret with the matching client private key
  const hmacSecret = privateDecrypt({ key: privateKey }, Buffer.from(signUpResponse.hmacSecret, 'base64')).toString();

  // Create a hmac with the counter and credentials, encode it and send it to the server for every sign in
  // requests. The server then does the same thing with the persisted secret. If the hmacs match, the client
  // is authenticated.
  const clientHmac = createHmac('sha256', hmacSecret).update(`${counter}${user.email}${user.password}`).digest('hex');
  const signInResponse = await signIn({ hmac: clientHmac, identifier: user.email, password: user.password });

  // With the authentication being done, the client can now access its user information.
  const remoteUser = await getUserInformation(signInResponse.accessToken);
  console.log(remoteUser);
})();
