# Prototyp Authentifizierung

## Nutzerregistrierung

Um später die Zwei-Faktor-Authentifizierung mittels Hardwareschlüssel zu ermöglichen, muss sich der Schlüssel und der Server zunächst auf ein Geheimnis einigen, mit dem dann die HMACs erzeugt werden können. Dieses Geheimnis ist äußerst diskret zu behandeln. Eine Veröffentlichung könnte zur Folge haben, dass externe Parteien HMACs erzeugen und sich somit als Schlüssel ausgeben könnten. Um die Sicherheit zu steigern, sollte die App, durch die diese Daten geleitet werden, niemals Zugriff auf dieses Geheimnis haben. Um das zu ermöglichen, erstellt der Hardware Schlüssel ein RSA Schlüsselpaar und überträgt den öffentlichen Schlüssel zur App. Diese sendet dann den öffentlichen Schlüssel mit eingegeben Nutzerdaten wie Email Adresse und Passwort zum Server. Der Server kann dann ohne Probleme ein Geheimnis erstellen, mit dem später HMACS signiert werden können. Dieses kann der server einfach mit dem öffentlichen Schlüssel des Hardware Schlüssels verschlüsseln, und and die App übertragen. Somit kann ein sicherer Transport des HMAC Geheimnisses garantiert werden. Der Schlüssel persistiert nun das Geheimnis und kann in folgenden Authentifizierungsschritten diesen nutzen, um HMACS zu erzeugen, genau wie der Server.

[![](https://mermaid.ink/img/pako:eNqNkstuwyAQRX9lxLbpD7CI1KqLSl12y2YC0xi5YDqAIivKv3cc26lRHyoLxOOeeVw4Kzs4Ulpl-qgULT15PDIGE0HGM7I7IRO80Hi_399t9xqOFImxEHBGKENPERJ6_hl9SElDYYz5jRhSPbx7Cz2NMMvlelI9opUwTkOWGWoWqcOCcPKl20Azs4gbzjJdK8LohgBdQCuh5LD8jji5H1NZdP9PlYizzzcO14J9vNZ8wEzf4NaFr_4mWNzf1NHY0vp-4xeCXMP8_Whrt1PGtYONTWqnAnFA7-RPnKeARpWOAhmlZemQe6NMvIgOaxlex2iVLlxpp2qSVtb_Mx9ePgE-A8-x?type=png)](https://mermaid.live/edit#pako:eNqNkstuwyAQRX9lxLbpD7CI1KqLSl12y2YC0xi5YDqAIivKv3cc26lRHyoLxOOeeVw4Kzs4Ulpl-qgULT15PDIGE0HGM7I7IRO80Hi_399t9xqOFImxEHBGKENPERJ6_hl9SElDYYz5jRhSPbx7Cz2NMMvlelI9opUwTkOWGWoWqcOCcPKl20Azs4gbzjJdK8LohgBdQCuh5LD8jji5H1NZdP9PlYizzzcO14J9vNZ8wEzf4NaFr_4mWNzf1NHY0vp-4xeCXMP8_Whrt1PGtYONTWqnAnFA7-RPnKeARpWOAhmlZemQe6NMvIgOaxlex2iVLlxpp2qSVtb_Mx9ePgE-A8-x)

Eine Implementierung des Registrierungsprozesses seitens client, also dem Hardwareschlüssel könnte dementsprechend so aussehen.

```typescript
// Create rsa keys for the server. The public key gets sent to the server in the sign up process.
// The server then creates the hmac secret, encrypts it with the clients public key and sends the
// encrypted hmac secret back.
const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
const publicString = publicKey.export({ type: 'pkcs1', format: 'pem' }).toString();

// Try to register the user with its credentials and the public key
const signUpResponse = await signUp({ ...user, publicKey: publicString });

// Decrypt the servers hmac secret with the matching client private key and persist it
persist(privateDecrypt({ key: privateKey }, Buffer.from(signUpResponse.hmacSecret, 'base64')).toString());
```

Dazu muss gesagt werden, dass Methoden wie `signUp` lediglich die Kommunikation zwischen Hardware Schlüssel und Website abstrahieren.

## Nutzerauthentifizierung (einfach)

Die Nutzerauthentifizierung im allgemeinen wird durch die Verwendung von JsonWebTokens implementiert. Der Kerngedanke dahinter ist es, dass der Server, und ausschließlich der Server solche Tokens erstellen kann. Gibt ein Nutzer also ein Benutzername mit zugehörigen Passwort ein, dann stellt der Server einen `access token` aus, mit dem der Nutzer sich bei allen zugehörigen Servern einfach autorisieren kann.

Dadurch kann garantiert werden, dass jedes Subsystem bzw. jeder Microservice selbst den Token verifizieren kann, mit dem öffentlichen Schlüssel das Auth Servers. Hierbei merkt man, dass der Token keine sensiblen Daten beinhalten sollte, da jeder die Inhalte entschlüsseln kann. Es kann aber niemand außer der Server den Inhalt manipulieren, da nur dieser den privaten Schlüssel kennt.

## Nutzerauthentifizierung (2FA)

Möchte sich der Nutzer nun in das System einloggen, benötigt er neben seinem Benutzernamen und seinem Passwort auch noch seinen Hardwareschlüssel. Um die Authentifizierung zu optimieren, könnte der Benutzername sogar auf diesem Schlüssel gespeichert sein. Ein Passwort ist jedoch dringend notwendig, selbst wenn dieses kurz ist, damit bei Verlust / Diebstahl des Schlüssels, dieser deaktiviert werden kann bevor Daten geklaut werden könnten.

Die App schickt ein Signal inklusive Einlogdaten an den Hardware Schlüssel. Jeder Authentifizierungsversuch sorgt dafür, dass ein Zähler erhöht wird. Dann wird mit diesen Daten und dem Zähler mittels dem vorher persistieren Geheimnisses, das Einmalpasswort erstellt. Der Zähler sorgt dafür, dass jeder HMAC individuell ist. Dieser wird dann an den Server übermittelt, der dann nicht nur die Einlogdaten überprüft, sondern den gleichen Prozess der HMAC Erzeugung auch durchführt. Der Benutzer gilt nur dann als authentifiziert, wenn die Einlogdaten mit dem im System gespeicherten übereinstimmen, und die erzeugten HMACS identisch sind. 

[![](https://mermaid.ink/img/pako:eNqVkjFrwzAQhf_KobUu3T0EWjoUOnb1ckhnWyQ6uScpwYT8957TFNvEhVaDkcz7nvSedDY2OjK1SfRZiC29euwEQ8Og43kYHne7hzcUd0IheKexhizIqSWBkvRjhRxx9nhI38xSfA97ViAoADYWziR_gTpiEswEfUALJ5_7H7pa7g-txACJ9FfettU8i_NPbqucL2j3xK5WD3YrZ9T1LL_pVsgvwbakRxLfjvfNbWnn6Py_6FtmNoZhasMe_HTQuU29yOOqkAV97exaCIlEgUApYUegU7RWF09CrVDqIUdlNIupTCAJ6J2-q_Nk2JjcazmNqXXqUPaNafiiOiw5foxsTZ2lUGXK4DTs7Q2autVodPkCwKDpHA?type=png)](https://mermaid.live/edit#pako:eNqVkjFrwzAQhf_KobUu3T0EWjoUOnb1ckhnWyQ6uScpwYT8957TFNvEhVaDkcz7nvSedDY2OjK1SfRZiC29euwEQ8Og43kYHne7hzcUd0IheKexhizIqSWBkvRjhRxx9nhI38xSfA97ViAoADYWziR_gTpiEswEfUALJ5_7H7pa7g-txACJ9FfettU8i_NPbqucL2j3xK5WD3YrZ9T1LL_pVsgvwbakRxLfjvfNbWnn6Py_6FtmNoZhasMe_HTQuU29yOOqkAV97exaCIlEgUApYUegU7RWF09CrVDqIUdlNIupTCAJ6J2-q_Nk2JjcazmNqXXqUPaNafiiOiw5foxsTZ2lUGXK4DTs7Q2autVodPkCwKDpHA)

Eine Implementierung des Authentifizierungsprozesses seitens client, also dem Hardwareschlüssel könnte dementsprechend so aussehen.

```typescript
// Create a hmac with the counter and credentials, encode it and send it to the server for every sign in
// requests. The server then does the same thing with the persisted secret. If the hmacs match, the client
// is authenticated.
const clientHmac = createHmac('sha256', hmacSecret).update(`${counter}${user.email}${user.password}`).digest('hex');
const signInResponse = await signIn({ hmac: clientHmac, identifier: user.email, password: user.password });

// With the authentication being done, the client can now access its user information.
const remoteUser = await getUserInformation(signInResponse.accessToken);
```

## Fehlerbehandlung

Sowohl der Hardwareschlüssel, als auch der Server verwalten eigenständig ihren Zählerwert unabhängig vom Ergebnis der Authentifizierung. Existiert nun z.B. kein Kommunikationskanal (Internet) zwischen Client und Server, so erhöht der Client den Zählerwert, der Server jedoch nicht. Somit sind die beiden Zählerwerte desynchronisiert und eine Authentifizierung ist nicht mehr möglich. Da die Website lediglich auf den in den Krankenhäusern verwalteten Geräten läuft, sollte ein Internetabbruch nur selten vorkommen. In diesem Fall können die Zählerwerte schnell mit einem sicheren und einmalig verwendbaren Passwort erneut synchronisiert werden.
