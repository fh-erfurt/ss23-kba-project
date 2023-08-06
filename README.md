# SS23 KBA Projekt

## Dokumentation

Die Dokumentation nutzt [Docusaurus 2](https://docusaurus.io/) um die Inhalte schöner darzustellen. Die Website wird automatisch mit vercel gebaut und ist hier zu finden: https://ss23-kba-project.vercel.app.

Die Dokumentation kann aber auch ganz einfach lokal gestartet werden. Als erstes müssen alle dependencies installiert werden mit:

```
$ yarn
```

und danach kann die Website mit 

```
$ yarn start
```

in der Entwicklungsumgebung gestartet werden.

## Backend Prototyp

Um das backend zu starten, müssen zu erst folgende Programme installiert werden: [nodejs](https://nodejs.org/de), [docker](https://www.docker.com/) und [Taskfile](https://taskfile.dev/). Letzteres ist optional und verbessert lediglich die Entwicklungsumgebung. Möchte man dies nicht extra installieren, kann man sich das Kommando einfach aus der entsprechenden `Taskfile.yml` kopieren und manuell in die Konsole packen.

Danach kann man mit `cd backend` in das backend Verzeichnis navigieren und alle dependencies installieren mit `yarn`.

Nun muss man einmalig die Datenbank mittels docker erstellen. Dafür wurde bereits ein Skript hinterlegt: `task backend -- up`. 

Jetzt muss die frisch erstelle Datenbank noch migriert werden. Dafür im `backend` Verzeichnis einfach `yarn turbo init` in die Konsole geben.

Die Entwicklungsumgebung des backends sollte nun bereit sein um sie mit `yarn turbo dev` zu starten.

Da dies nur ein Prototyp ist, und kein richtiger Hardwareschlüssel existiert, wurde ein `client` hinterlegt, welcher das Verhalten des Schlüssels imitieren soll. Dieser registriert einen Nutzer mit zufälligen Daten und autorisiert diesen im Anschluss um seine Daten aus der Datenbank auszulesen. Dieser kann einfach mit `yarn client` aus dem `backend/app` Verzeichnis heraus gestartet werden. Natürlich muss dabei der Server im Hintergrund laufen.

### API Definition

**POST /auth/signup**
```json
{
    "email": "string",
    "username": "string",
    "password": "string"
}
```

Request Headers:
```json
  Content-Type: "application/json"
```

**POST /auth/signin**
```json
{
    "identifier": "string",
    "password": "string",
    "hmac": "string"
}
```

Request Headers:
```json
  Content-Type: "application/json"
```

**POST /auth/signout**

Request Headers:
```json
  Authorization: "Bearer <ACCESS_TOKEN>"
```

**POST /auth/refresh**

Needs the REFRESH Cookie set by the sign in route.

**GET /user**

Request Headers:
```json
  Authorization: "Bearer <ACCESS_TOKEN>"
```
