# Initiale Systemarchitektur

Das System soll auf allen gängigen Computern sowie auf Mobilgeräten bzw. Tablets lauffähig sein. Aus diesem Grund wurde sich entschieden, das Systen als Webapplikation umzusetzen. Dadurch wird garantiert, dass es nur eine zu pfelgende Codebasis gibt und keine Installationsprobleme, Versionskonflikte oder sonstige Probleme auftreten können. Das System muss somit lediglich auf verschiedenen Geräten und Internetbrowsern getestet und für dise optimiert werden, um vollste Kompatibilität und Responsiveness zu gewährleisten.

**Frontend**

Für das Frontend wird ein modernes JavaScript-Framework wie Angular, React, Vue.js oder Svelte verwendet. Diese Frameworks ermöglichen die Entwicklung einer ansprechenden und interaktiven Benutzeroberfläche, die Benutzerfreundlichkeit und eine nahtlose Benutzererfahrung gewährleistet.

Da Skalierbarkeit und Performance eine wichtige Rolle spielen, sollte das ausgewählte Framework Server-Side-Rendering unterstüzen. Dadurch wird ein schneller Zugriff von allen Geräten aus, auch wenn diese wenig Leistung besitzen, garantiert.

Der Argumentation zu Grunde liegend kommen folgende Frameworks in Frage. Die eigentliche Entscheidung der Technologien erfolgt sobald genauere Anforderungen an das System spezifiziert wurden: **Sveltekit (Svelte), Nuxt (Vue.js), Next.js (React)**

SvelteKit (Svelte):

- Svelte ist ein kompakteres Framework im Vergleich zu Vue.js und React, da es keinen Virtual DOM verwendet.
- Es ermöglicht eine effiziente und performante Ausführung, da der Code zur Laufzeit in optimierten JavaScript-Code umgewandelt wird.
- SvelteKit bietet eine gute Unterstützung für Server-Side Rendering (SSR) und Single-Page Applications (SPA).
- Es hat eine einfach zu erlernende Syntax und bietet eine reibungslose Integration mit anderen JavaScript-Bibliotheken.

Nuxt (Vue.js):

- Nuxt ist ein Framework, das auf Vue.js basiert und viele vorkonfigurierte Features für die Entwicklung von SSR und SPA bietet.
- Es bietet eine umfangreiche Dokumentation und eine große Community, was die Unterstützung und das Lernen erleichtert.
- Nuxt hat eine einfache und intuitive Syntax und ermöglicht eine schnelle Entwicklung von ansprechenden Benutzeroberflächen.
- Es unterstützt Server-Side Rendering, statische Site-Generierung und Client-Side Rendering.

Next.js (React):

- Next.js ist ein Framework für React und bietet eine umfangreiche Funktionalität für SSR und SPA.
- Es hat eine aktive und wachsende Community mit vielen Ressourcen und Erweiterungen.
- Next.js ermöglicht eine einfache und effiziente Server-Side Rendering-Implementierung und bietet eine gute Performance.
- Es hat eine flexible Konfiguration und unterstützt statische Site-Generierung sowie Client-Side Rendering.

Basierend auf den Anforderungen des Projektes, würde Next.js am bestens als Frontend-Framework passen. Next.js bietet eine solide Unterstützung für Server-Side Rendering, um die Performance zu optimieren. React und Next.js haben beide eine der größten Communities hinter sich und haben sich schon viele Jahre in der Branche etabliert. Es ist demnach ein stabiles und ausgereiftes Framework.

**Backend**

Für das Backend wird eine Microservices-Architektur konzipiert, bei der das System in verschiedene unabhängige Dienste aufgeteilt wird, die jeweils spezifische Funktionen abdecken. Jeder Dienst kann dabei eine klar definierte Aufgabe haben, wie zum Beispiel Benutzerauthentifizierung, Datenbankzugriff oder Integration von Diagnosesystemen. Dies ermöglicht eine bessere Skalierbarkeit, Wartbarkeit und Flexibilität des Systems.

Implementiert werden dabei mehrere RESTful APIs, um die Kommunikation zwischen dem Frontend und den Backend-Services zu ermöglichen. Die Sprache und das Framework sollte dabei mit Hinsicht auf Performance und Sicherheit gewählt werden.

Es müssen noch geeignete Datenbanktechnologien für die Speicherung und Verwaltung von Patientendaten ermittelt werden. Je nach spezifischen Anforderungen des Systems können relationale Datenbanken wie MySQL oder PostgreSQL, NoSQL-Datenbanken wie MongoDB oder eine Kombination verschiedener Datenbanktypen in Betracht gezogen werden. Dies ist Abhängig von den konkreten Anforderungen und Datenmodellen. Falls diese ermittelt wurden, kann eine Aussage über die Datenbank getroffen werden.

Eine sichere Authentifizierung und Zugriffskontrolle, um den Zugriff auf Patientendaten zu kontrollieren sollte oberste Priorität haben. Da es in diesem System um persönliche und gesundheitlich kritische Daten geht, muss ein DSGVO konformer Authentifizierungsdienst nach neusten OAuth 2.0 Standards eingekauft oder selbst implementiert werden. In jedem Fall muss eine sichere und skalierbare Authentifizierungslösung bereitgestellt werden.

Für eine Microservice-Architektur gibt es verschiedene Backend-Frameworks, die sich gut eignen:

- Spring Boot (Java): Spring Boot ist ein Framework für die Entwicklung von Java-basierten Microservices. Es bietet umfangreiche Unterstützung für die Erstellung von Microservices mit einfachen Konfigurationen, integrierter Dependency Injection und einem großen Ökosystem an Bibliotheken und Werkzeugen.

- Fastify (Node.js): Fastify ist ein leichtgewichtiges und flexibles Backend-Framework für Node.js. Es ermöglicht die schnelle Entwicklung von Microservices mit einer einfachen und intuitiven Syntax. Es bietet auch Middleware-Funktionen, die die Erstellung von RESTful APIs erleichtern.

- Flask (Python): Flask ist ein minimalistisches und erweiterbares Framework für die Entwicklung von Python-basierten Microservices. Es ist bekannt für seine einfache und intuitive API und bietet eine gute Unterstützung für die Integration mit anderen Python-Bibliotheken.

- ASP.NET Core (C#): ASP.NET Core ist ein Cross-Plattform-Framework für die Entwicklung von Microservices mit C#. Es bietet eine leistungsfähige und flexible Plattform für die Erstellung von skalierbaren und hochleistungsfähigen Backend-Services. ASP.NET Core unterstützt auch verschiedene Protokolle und bietet umfangreiche Tools und Bibliotheken.

- Ruby on Rails (Ruby): Ruby on Rails ist ein beliebtes Backend-Framework für die Ruby-Programmiersprache. Es bietet eine konventionenbasierte Entwicklungsumgebung und ermöglicht eine schnelle Entwicklung von Microservices. Ruby on Rails unterstützt auch eine Vielzahl von Bibliotheken und bietet eine gute Unterstützung für die Integration von Datenbanken.

- Django (Python): Django ist ein leistungsfähiges und vielseitiges Webframework. Es zielt darauf ab, die Entwicklung von Webanwendungen zu vereinfachen, indem es eine solide Grundlage für das Datenbankmanagement, die URL-Routing, das Templating und vieles mehr bietet. Obwohl es ursprünglich als monolithisches Webframework entwickelt wurde, kann Django durch die Verwendung von RESTful APIs, die Einhaltung der Prinzipien von Microservices und die Aufteilung der Funktionalität in separate Apps den Aufbau und die Verwaltung von Microservices unterstützen.

**Deployment**

Da es sich um sensible Patientendaten handelt, muss hier besonders Acht auf Datenschutz gelegt werden. Ein Deployment auf den gängigen Cloud-Plattformen wie AWS, Microsoft Azure oder Google Cloud kommen demnach nicht in Frage. Andere Dienstleister wie IONOS Cloud besitzen DSGVO Zertifizierungen und kommen somit eher in Frage.

Da die vorherige Frage schwer zu beantworten ist und sich die Entscheidung bis zum Release ändern kann, muss dafür gesorgt werden, dass das System in jede Architektur eingepflegt werden kann. Alle Dienste werden somit isoliert unter Verwendung von Container-Technologien wie Docker bereitgestellt. Für die Orchestrierung der Container können Tools wie Kubernetes benutzt werden, um eine skalierbare und zuverlässige Infrastruktur bereitzustellen. Diese kann sowohl auf gängigen Cloud Plattformen, als auch in ein eigenes Servernetzwerk integriert werden.
