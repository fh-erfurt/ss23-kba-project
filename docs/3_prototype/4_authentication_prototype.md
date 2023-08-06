# Prototyp Authentifizierung

## Nutzerregistrierung

Um später die Zwei-Faktor-Authentifizierung mittels Hardwareschlüssel zu ermöglichen, muss sich der Schlüssel und der Server zunächst auf ein Geheimnis einigen, mit dem dann die HMACs erzeugt werden können. Dieses Geheimnis ist äußerst diskret zu behandeln. Eine Veröffentlichung könnte zur Folge haben, dass externe Parteien HMACs erzeugen und sich somit als Schlüssel ausgeben könnten. Um die Sicherheit zu steigern, sollte die App, durch die diese Daten geleitet werden, niemals Zugriff auf dieses Geheimnis haben. Um das zu ermöglichen, erstellt der Hardware Schlüssel ein RSA Schlüsselpaar und überträgt den öffentlichen Schlüssel zur App. Diese sendet dann den öffentlichen Schlüssel mit eingegeben Nutzerdaten wie Email Adresse und Passwort zum Server. Der Server kann dann ohne Probleme ein Geheminis erstellen, mit dem später HMACS signiert werden können. Dieses kann der server einfach mit dem öffentlichen Schlüssel des Hardware Schlüssels verschlüsseln, und and die App übertragen. Somit kann ein sicherer Transport des HMAC Geheimnisses garantiert werden. Der Schlüssel persistiert nun das Geheminis und kann in folgenden Authentifizierungsschritten diesen nutzen, um HMACS zu erzeugen, genau wie der Server.

[![](https://mermaid.ink/img/pako:eNqNkstuwyAQRX9lxLbpD7CI1KqLSl12y2YC0xi5YDqAIivKv3cc26lRHyoLxOOeeVw4Kzs4Ulpl-qgULT15PDIGE0HGM7I7IRO80Hi_399t9xqOFImxEHBGKENPERJ6_hl9SElDYYz5jRhSPbx7Cz2NMMvlelI9opUwTkOWGWoWqcOCcPKl20Azs4gbzjJdK8LohgBdQCuh5LD8jji5H1NZdP9PlYizzzcO14J9vNZ8wEzf4NaFr_4mWNzf1NHY0vp-4xeCXMP8_Whrt1PGtYONTWqnAnFA7-RPnKeARpWOAhmlZemQe6NMvIgOaxlex2iVLlxpp2qSVtb_Mx9ePgE-A8-x?type=png)](https://mermaid.live/edit#pako:eNqNkstuwyAQRX9lxLbpD7CI1KqLSl12y2YC0xi5YDqAIivKv3cc26lRHyoLxOOeeVw4Kzs4Ulpl-qgULT15PDIGE0HGM7I7IRO80Hi_399t9xqOFImxEHBGKENPERJ6_hl9SElDYYz5jRhSPbx7Cz2NMMvlelI9opUwTkOWGWoWqcOCcPKl20Azs4gbzjJdK8LohgBdQCuh5LD8jji5H1NZdP9PlYizzzcO14J9vNZ8wEzf4NaFr_4mWNzf1NHY0vp-4xeCXMP8_Whrt1PGtYONTWqnAnFA7-RPnKeARpWOAhmlZemQe6NMvIgOaxlex2iVLlxpp2qSVtb_Mx9ePgE-A8-x)

Eine Implementierung des Registrierungsprozesses seitens client, also dem Harwareschlüssel könnte dementsprechend so aussehen.

```typescript
const { privateKey, publicKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });

const publicString = publicKey.export({ type: 'pkcs1', format: 'pem' }).toString();

const signUpResponse = await signUp({ ...user, publicKey: publicString });

const hmacSecret = privateDecrypt({ key: privateKey }, Buffer.from(signUpResponse.hmacSecret, 'base64')).toString();

await persist(hmacSecret)
```

Dazu muss gesagt werden, dass Methoden wie `signUp` lediglich die Kommunikation zwischen Hardware Schlüssel und Website abstrahieren.

## Nutzerauthentifizierung (einfach)

Die Nutzerauthentifizierung wird für den Prototypen mittels JWT`s mit Refresh Token Paradigma implkementiert

## Nutzerauthentifizierung (2FA)

Möchte sich der Nutzer nun in das System einloggen, benötigt er neben seinem Benutzernamen und seinem Passwort auch noch seinen Hardwareschlüssel. Um die Authentifizierung zu verschnellern, könnte der Benutzername sogar auf diesem Schlüssel gespeichert sein. Ein Passwort ist jedoch dringend notwendig, selbst wenn dieses kurz ist, damit bei Verlust / Diebstahl des Schlüssels, dieser deaktiviert werden kann bevor Daten geklaut werden könnten.

Die App schickt ein Signal inklusive Einloggdaten an den Hardware Schlüssel. Jeder Authentifizierungsversuch sorgt dafür, dass ein Zähler erhöht wird. Dann wird mit diesen Daten und dem Zähler mittels dem vorher persistieren Geheimnisses, das Einmalpasswort erstellt. Der Zähler sorgt dafür, dass jeder HMAC individuell ist. Dieser wird dann an den Server übermittelt, der dann nicht nur die Einloggdaten überprüft, sondern den gleichen Prozess der HMAC Erzeugung auch durchführt. Der Benutzer gilt nur dann als authentifiziert, wenn die Einloggdaten mit dem im System gespeicherten übereinstimmen, und die erzeugten HMACS identisch sind. 

[![](https://mermaid.ink/img/pako:eNqVkjFrwzAQhf_KobUu3T0EWjoUOnb1ckhnWyQ6uScpwYT8957TFNvEhVaDkcz7nvSedDY2OjK1SfRZiC29euwEQ8Og43kYHne7hzcUd0IheKexhizIqSWBkvRjhRxx9nhI38xSfA97ViAoADYWziR_gTpiEswEfUALJ5_7H7pa7g-txACJ9FfettU8i_NPbqucL2j3xK5WD3YrZ9T1LL_pVsgvwbakRxLfjvfNbWnn6Py_6FtmNoZhasMe_HTQuU29yOOqkAV97exaCIlEgUApYUegU7RWF09CrVDqIUdlNIupTCAJ6J2-q_Nk2JjcazmNqXXqUPaNafiiOiw5foxsTZ2lUGXK4DTs7Q2autVodPkCwKDpHA?type=png)](https://mermaid.live/edit#pako:eNqVkjFrwzAQhf_KobUu3T0EWjoUOnb1ckhnWyQ6uScpwYT8957TFNvEhVaDkcz7nvSedDY2OjK1SfRZiC29euwEQ8Og43kYHne7hzcUd0IheKexhizIqSWBkvRjhRxx9nhI38xSfA97ViAoADYWziR_gTpiEswEfUALJ5_7H7pa7g-txACJ9FfettU8i_NPbqucL2j3xK5WD3YrZ9T1LL_pVsgvwbakRxLfjvfNbWnn6Py_6FtmNoZhasMe_HTQuU29yOOqkAV97exaCIlEgUApYUegU7RWF09CrVDqIUdlNIupTCAJ6J2-q_Nk2JjcazmNqXXqUPaNafiiOiw5foxsTZ2lUGXK4DTs7Q2autVodPkCwKDpHA)

## Fehlerbehandlung

Sowohl der Hardwareschlüssel, als auch der Server verwalten eigenständig ihren Zählerwert unabhängig vom Ergebnis der Authentifizierung. Existiert nun z.B. kein Kommunikationskanal (Internet) zwischen Client und Server, so erhöht der Client den Zählerwert, der Server jedoch nicht. Somit sind die beiden Zählerwerte desynchronisiert und eine Authentifizierung ist nicht mehr möglich. Da die Website lediglich auf den in den Krankenhäusern verwalteten Geräten läuft, sollte ein Internetabbruch nur selten vorkommen. In diesem Fall können die Zählerwerte schnell mit einem sicheren und einmalig verwendbaren Passwort erneut synchronisiert werden.
