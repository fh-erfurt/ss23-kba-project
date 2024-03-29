# System architecture

** Welche Systemarchitektur stehen zur Auswahl?**


** Monolithisches Architekturmodell: **
Das monolithische Architekturmodell ist ein traditioneller Ansatz zur Entwicklung von Softwareanwendungen. 
Hierbei wird das gesamte Krankenhaussystem als eine einzige, zusammenhängende Anwendung entwickelt und bereitgestellt. 
Alle Funktionen und Komponenten sind in ein einzigen Systemabbild integriert. 
Die monolithische Architektur hat eine geringere Komplexität, da alle Funktionen in einer Anwendung zusammengefasst sind.

Vorteile:
- Geringere Komplexität: Da alle Komponenten und Funktionen unter einem Dach vereint sind, haben Entwickler eine einheitliche Sicht auf das Gesamtsystem. Die Entwicklung und Bereitstellung von Anwendungen wird dadurch in vielen Fällen vereinfacht.
- Kommunikation: Da alle Teile der Anwendung innerhalb des gleichen Systems laufen, können sie ohne den Einsatz von Netzwerkprotokollen effizient kommunizieren. Dies kann zu einer geringeren internen Netzwerklatenz führen und somit die Gesamtleistung der Anwendung verbessern.

Herausforderungen:
- Skalierbarkeit: Eine der größten Herausforderungen monolithischer Architekturen ist die Skalierbarkeit. Um die Leistung zu verbessern oder mehr Benutzer zu bedienen, muss das gesamte System skaliert werden und nicht nur die Komponenten, die die größte Last tragen. Dies kann zu einer Verschwendung von Ressourcen und damit zu höheren Kosten führen.
- Wartung und Erweiterung: Da sich jede Änderung an einer Komponente auf das gesamte System auswirken kann, kann die Wartung und Erweiterung einer monolithischen Anwendung komplex und zeitaufwändig sein. Außerdem ist die Gefahr größer, dass eine kleine Änderung unerwartete Auswirkungen auf andere Teile des Systems hat.
- Code-Wiederverwendung: In einer monolithischen Architektur kann es schwierig sein, Code wiederzuverwenden oder Module zu erstellen, die in anderen Projekten verwendet werden können. Die Anwendung ist so eng miteinander verknüpft, dass es oft schwierig ist, Komponenten zu entfernen oder hinzuzufügen.

** Microservices-Architektur: **
Die Microservice-Architektur ist ein Ansatz für die Entwicklung von Softwaresystemen, bei dem die Anwendung als eine Sammlung kleiner, autonomer und modularer Dienste konzipiert wird, von denen jeder einen bestimmten Geschäftsprozess abdeckt. Jeder dieser Dienste kann unabhängig von den anderen entwickelt,
bereitgestellt, skaliert und gewartet werden. Jeder Microservice läuft in seinem eigenen Prozess und kommuniziert typischerweise mit anderen Services über definierte APIs und Protokolle, meist HTTP/REST oder asynchrone Messaging-Protokolle.

Im Kontext eines Krankenhaussystems könnte es beispielsweise separate Microservices für die Patientenaufnahme, die Diagnose und die Abrechnung geben. Jeder dieser Dienste hätte seine eigene Datenbank und Geschäftslogik und könnte unabhängig aktualisiert und skaliert werden.

Vorteile:
- Skalierbarkeit: Da jeder Dienst unabhängig skaliert werden kann, kann das System effizienter genutzt und angepasst werden. Beispielsweise könnte ein Krankenhaussystem mehr Ressourcen für den Abrechnungsdienst bereitstellen, wenn das Monatsende naht, ohne dass andere Dienste skaliert werden müssen.
- Unabhängige Entwicklung und Bereitstellung: Da jeder Dienst unabhängig ist, können Teams an verschiedenen Diensten gleichzeitig arbeiten, und Updates können ohne Beeinträchtigung der gesamten Anwendung durchgeführt werden.
- Technologievielfalt: Verschiedene Services können mit verschiedenen Technologien entwickelt werden, was die Flexibilität erhöht.
- Fehlerisolierung: Da jeder Dienst in einem eigenen Prozess abläuft, kann sich ein Fehler in einem Dienst nicht direkt auf andere Dienste auswirken. Dies kann die Ausfallsicherheit und Zuverlässigkeit des Systems erhöhen.

Herausforderungen:

- Komplexität: Die Verwaltung einer Vielzahl von Diensten kann komplex sein, und Themen wie Diensterkennung, verteilte Datenverwaltung und Kommunikation zwischen Diensten erfordern sorgfältige Planung und Koordination.
- Netzwerklatenz und -overhead: Da die Dienste miteinander kommunizieren müssen, oft über das Netzwerk, kann dies zu einer erhöhten Latenz und einem erhöhten Overhead führen.
- Datenintegrität: Da jeder Dienst seine eigene Datenbank hat, kann es eine Herausforderung sein, die Konsistenz der Daten im gesamten System zu gewährleisten.


** Schichtenarchitektur: ** 
Die Schichtenarchitektur ist ein gängiger Ansatz in der Softwareentwicklung, um die Struktur und die Komponenten einer Anwendung zu organisieren.
In einer Schichtenarchitektur ist die Anwendung in horizontale Ebenen oder "Schichten" unterteilt, wobei jede Schicht eine bestimmte Art von Aufgabe
ausführt und Dienste für die darüber liegenden Schichten bereitstellt. Jede Schicht kommuniziert nur mit der darunter- und darüberliegenden Schicht, was zur Entkopplung und Modularität der Komponenten beiträgt. Dies ermöglicht eine flexiblere Entwicklung und Wartung, da Änderungen in einer Schicht die anderen Schichten nicht direkt beeinflussen.

Vorteile:
- Trennung der Verantwortlichkeiten: Jede Schicht hat eine klare und spezifische Aufgabe. Dies erleichtert das Verständnis und die Wartung der Anwendung.
- Wartbarkeit: Änderungen in einer Schicht beeinträchtigen nicht die anderen Schichten, was die Wartung und Erweiterung erleichtert.
- Modularität: Die Schichtenarchitektur ermöglicht eine klare Trennung von Funktionen und erleichtert die Wiederverwendung von Code.
- Einfachheit der Entwicklung: Die Entwickler können sich auf eine bestimmte Schicht konzentrieren, ohne sich um die Details der anderen Schichten kümmern zu müssen.
- Wiederverwendbarkeit und Erstezbarkeit: Da jede Schicht unabhängig von den anderen ist, können Teile der Anwendung wiederverwendet oder ausgetauscht werden, ohne dass die gesamte Anwendung neu geschrieben werden muss.

Herausforderungen:
- Abstraktionskosten: Da jede Anforderung mehrere Schichten durchlaufen muss, kann dies die Gesamtleistung der Anwendung beeinflussen.
- Über-Engineering: Obwohl das Schichtenmodell die Komplexität innerhalb jeder Schicht reduziert, kann die Gesamtkomplexität der Anwendung durch die Anzahl der Schichten und die Notwendigkeit der Kommunikation zwischen den Schichten erhöht werden.


** Warum haben wir uns für Microservices entschieden **
Die Entscheidung für ein Microservices-System in einem Krankenhaus-IT-System bietet eine Reihe von Vorteilen,
die mit den spezifischen und komplexen Anforderungen eines solchen Umfelds zusammenhängen. Die Skalierbarkeit,
die durch die Möglichkeit, jede Komponente des Systems unabhängig zu skalieren, gewährleistet wird,
ermöglicht eine effiziente Ressourcennutzung für verschiedene Dienste wie Patientenaktenverwaltung,
Terminplanung und medizinische Bildgebung.
Die Unabhängigkeit der Microservices erleichtert auch die parallele Entwicklung, was die unabhängige Arbeit verschiedener Teams fördert.
Diese Unabhängigkeit trägt auch zur Fehlertoleranz bei, da der Ausfall eines Dienstes nicht notwendigerweise die anderen beeinträchtigt, was in einem Krankenhaus ein kritischer Aspekt ist.
Die technologische Flexibilität, die sich aus der Möglichkeit ergibt, für jeden Service die am besten geeignete Technologie zu wählen, bietet in einem komplexen System erhebliche Vorteile. Die schnelle Einführung neuer Funktionen und Verbesserungen wird durch die Unabhängigkeit
der Microservices in Entwicklung, Test und Bereitstellung ermöglicht.
Die Integration mit Drittanbietern wird vereinfacht, da jeder Microservice als unabhängige Schnittstelle zu externen Systemen fungieren kann. Gezielte Compliance erleichtert die Anpassung an strenge gesetzliche Vorschriften im Gesundheitswesen.
Die Isolierung von Microservices kann auch die Sicherheit verbessern, da sich eine Sicherheitsverletzung in einem Bereich des Systems nicht auf andere Bereiche ausbreitet - ein entscheidender Vorteil, wenn der Datenschutz von höchster Bedeutung ist.
Eine einfache Migration und Modernisierung wird durch die Unabhängigkeit der Microservices unterstützt, die es ermöglicht, Teile des Systems zu aktualisieren oder zu migrieren, ohne das gesamte System neu entwerfen zu müssen.
Insgesamt bieten Microservices somit ein hohes Maß an Flexibilität, Skalierbarkeit, Robustheit und Anpassbarkeit, was sie zu einer idealen Architektur für ein Krankenhaus-IT-System macht, das eine Vielzahl komplexer, interagierender Anforderungen effizient erfüllen muss.

# Microservices

**Backlog,Fehlerbericht,Medizinisches_Gerät - Lino Becht**

```plantuml Microservices 
@startuml

package "Microservices" {
  node "Backlog" {
    [Auftrag bearbeiten]
    [Auftrag ansehen]

    database "Database1"{
      [Auftrag ansehen] <-- Database1 : Datenfluss
      [Auftrag bearbeiten] <-> Database1: Datenfluss
    }
  }

  node "Untersuchungen medizinisches Gerät" {
    [Untersuchungsergebnisse anzeigen]
    [Untersuchungseinstellungen verwalten]

    database "Database2"{
      [Untersuchungsergebnisse anzeigen] <-- Database2 : Datenfluss
      [Untersuchungseinstellungen verwalten] <-> Database2 : Datenfluss
    }
  }

  node "Fehlerbericht medizinisches Gerät"{
    [Fehlerbericht verwalten]
    [Fehlerbericht anzeigen]
    [Fehlerbericht an externe Systemtechniker senden]

    database "Database3"{
      [Fehlerbericht anzeigen] <-- Database3 : Datenfluss
      [Fehlerbericht an externe Systemtechniker senden] <-- Database3 : Datenfluss
      [Fehlerbericht verwalten] <-> Database3 : Datenfluss
    }
  }

  cloud "API-Gateway"

  package "API"{
    [Input(medizinisches Gerät)]
    [Output(medizinisches Gerät)]
    [Output(Fehlerbericht)]
    [Input(Fehlerbericht)]
    [Output(Laborergebnis)]
    [Input(Backlogauftrag)]
  }
}


[Untersuchungsergebnisse anzeigen] -down- "API-Gateway"
[Untersuchungseinstellungen verwalten] -down- "API-Gateway"
[Fehlerbericht anzeigen] -down- "API-Gateway"
[Fehlerbericht verwalten] -down- "API-Gateway"
[Fehlerbericht an externe Systemtechniker senden] -down- "API-Gateway"
[Auftrag bearbeiten] -down- "API-Gateway"
[Auftrag ansehen] -down- "API-Gateway"

"API-Gateway" -- [Input(medizinisches Gerät)]
"API-Gateway" -- [Output(medizinisches Gerät)]
"API-Gateway" -- [Output(Fehlerbericht)]
"API-Gateway" -- [Input(Fehlerbericht)]
"API-Gateway" -- [Output(Laborergebnis)]
"API-Gateway" -- [Input(Backlogauftrag)]



@enduml
```

**Systemadministration - Jann Lucas Pischke**
```plantuml Microservices
@startuml

package "Microservices" {
  node "Systemüberwachung" {
    database "Database" as db1
    [Ressourcen überwachen] <-down- db1 : Datenfluss
    [Benachrichtigungen senden] <-down- db1 : Datenfluss
  }
  node "Benutzerverwaltung" {
    database "Datenbank" as db2
    [Kontoverwaltung] <-down-> db2 : Datenfluss
    [Passwortverwaltung] <-down-> db2 : Datenfluss
    [Richtlinienverwaltung] <-down-> db2 : Datenfluss
    [Rechteverwaltung] <-down-> db2 : Datenfluss
  }
  node "Konfigurationsdatenverwaltung" {
    database "Datenbank" as db3
    [Konfigurationsdaten bearbeiten] <-down-> db3 : Datenfluss
    [Konfigurationsdaten einsehen] <-down- db3 : Datenfluss
  }
  node "Dokumentationsverwaltung" {
    database "Datenbank" as db4
    [Dokumente bearbeiten] <-down-> db4 : Datenfluss
    [Dokumente einsehen]  <-down- db4 : Datenfluss
  }
  cloud "API-Gateway"

  package "API" {
    [Input(Systemüberwachung)]
    [Output(Systemüberwachung)]
    [Input(Benutzerverwaltung)]
    [Output(Benutzerverwaltung)]
    [Input(Konfigurationsdatenverwaltung)]
    [Output(Konfigurationsdatenverwaltung)]
    [Input(Dokumentationsverwaltung)]
    [Output(Dokumentationsverwaltung)]
  }

  [Ressourcen überwachen]  -down- "API-Gateway" 
  [Benachrichtigungen senden] -down- "API-Gateway"
  [Kontoverwaltung] -down- "API-Gateway"
  [Passwortverwaltung] -down- "API-Gateway"
  [Richtlinienverwaltung] -down- "API-Gateway"
  [Rechteverwaltung] -down- "API-Gateway"
  [Konfigurationsdaten bearbeiten] -down- "API-Gateway"
  [Dokumente bearbeiten] -down- "API-Gateway"

  "API-Gateway" -- [Input(Systemüberwachung)]
  "API-Gateway" -- [Output(Systemüberwachung)]
  "API-Gateway" -- [Input(Benutzerverwaltung)]
  "API-Gateway" -- [Output(Benutzerverwaltung)]
  "API-Gateway" -- [Input(Konfigurationsdatenverwaltung)]
  "API-Gateway" -- [Output(Konfigurationsdatenverwaltung)]
  "API-Gateway" -- [Input(Dokumentationsverwaltung)]
  "API-Gateway" -- [Output(Dokumentationsverwaltung)]

}

@enduml
```

**Patiententransportdienst - Helen Laible**
```plantuml Microservices

@startuml
package "Microservices" {

   node "Zugriffsmöglichkeiten_eingeschränkt" {
    [Termine als erledigt markieren]
    [Termine einsehen]
    database "Database1"{
      [Termine einsehen] <-- Database1 : Datenfluss
      [Termine als erledigt markieren] <--> Database1 : Datenfluss
    }
  }

  node "Zugriffsmöglichkeiten_erweitert"{
    [Patiententermine in Transportpläne eintragen]
    [Patiententermine bearbeiten/löschen]
    database "Database2"{
      [Patiententermine in Transportpläne eintragen] --> Database2 : Datenfluss
      [Patiententermine bearbeiten/löschen] <--> Database2 : Datenfluss
    }
  }

cloud "API-Gateway"

  package "API"{
    [Input(Patiententermine in Transportpläne)]
    [Output(Patiententermine in Transportpläne)]
    [Input(Termine)]
    [Output(Termine)]
  }
}

[Termine einsehen] -down- "API-Gateway"
[Termine als erledigt markieren] -down- "API-Gateway"
[Patiententermine in Transportpläne eintragen] -down- "API-Gateway"
[Patiententermine bearbeiten/löschen] -down- "API-Gateway"

"API-Gateway" -- [Input(Patiententermine in Transportpläne)]
"API-Gateway" -- [Input(Termine)]
"API-Gateway" -- [Output(Termine)]
"API-Gateway" -- [Output(Patiententermine in Transportpläne)]

@enduml
```

**Patienten - Antonia Geschke**
```plantuml Microservices - Antonia Geschke
@startuml
package "Microservices" {

  node "Patienten" {
    [Patientendaten anzeigen]
    [Patientendaten verwalten]

    database "Database4"{
      [Patientendaten anzeigen] <-- Database4 : Datenfluss
      [Patientendaten verwalten] <-> Database4 : Datenfluss
    }
  }


  cloud "API-Gateway"

  package "API"{
    [Input(Patientendaten)]
    [Output(Patientendaten)]
  }
}


[Patientendaten anzeigen] -down- "API-Gateway"
[Patientendaten verwalten] -down- "API-Gateway"

"API-Gateway" -- [Input(Patientendaten)]
"API-Gateway" -- [Output(Patientendaten)]
@enduml
```

**Abteilungsanalyse, Datenanfrage Krankenkasse - Duc Duong Nguyen**

```plantuml Microservices 
@startuml
package "Microservices" {

node "Abteilungsanalyse" {
    [Abteilungsanalysenbericht anzeigen] 
    [Abteilungsanalysbenricht erstellen] 
    [Abteilungsanalysenbericht versenden] 
   
    database "Database1"{
      [Abteilungsanalysenbericht anzeigen] <-- Database1 : Datenfluss
      [Abteilungsanalysbenricht erstellen] --> Database1 : Datenfluss
      [Abteilungsanalysenbericht versenden] <-- Database1 : Datenfluss
    }
  }

 node "Datenanfrage Krankenkasse"{
    [Patientenakteanforderung empfangen] 
    [Patientenakteanforderung versenden]

    database "Database2"{
      [Patientenakteanforderung versenden] <-- Database2 : Datenfluss
    }
  }

  cloud "API-Gateway"

package "API"{
  [Input (Abteilungsanalysendaten)]
  [Output (Abteilungsanalysenbericht)]
 }
}

  [Abteilungsanalysbenricht erstellen] -down- "API-Gateway"
  [Abteilungsanalysenbericht anzeigen] -down- "API-Gateway"
  [Abteilungsanalysenbericht versenden] -down- "API-Gateway"

  "API-Gateway" -- [Input (Abteilungsanalysendaten)]
  "API-Gateway" -- [Output (Abteilungsanalysenbericht)]
@enduml
```

**Leistungsüberprüfung, Auslastungsanalyse - Duc Duong Nguyen**

```plantuml Microservices 
@startuml
package "Microservices" {

   node "Leistungsüberprüfung" {
    [Leistungsanalyse anzeigen] 
    [Leistungsbericht erstellen] 
    [Leistungsbericht versenden] 

    database "Database1"{
      [Leistungsbericht erstellen] --> Database1 : Datenfluss
      [Leistungsanalyse anzeigen] <-- Database1 : Datenfluss
      [Leistungsbericht versenden] <-- Database1 : Datenfluss
    }
  }

   node "Auslastungsanalyse"{
    [Auslastungsüberblick anzeigen] 
    [Auslastungsbericht erstellen] 
    [Auslastungsbericht versenden] 
    [Bett-Kapazität anzeigen] 

    database "Database2"{
      [Auslastungsüberblick anzeigen] <-- Database2 : Datenfluss 
      [Auslastungsbericht erstellen] --> Database2 : Datenfluss
      [Bett-Kapazität anzeigen] <-- Database2 : Datenfluss
      [Auslastungsbericht versenden] <-- Database2 : Datenfluss
    }
  }


  cloud "API-Gateway"

package "API"{
  [Input (Leistungsdaten)]
  [Output (Leistungsbericht)]
  [Input (Auslastungsdaten)]
  [Output (Auslastungsbericht)]
 }
}
  [Leistungsbericht erstellen] -down- "API-Gateway"
  [Leistungsanalyse anzeigen] -down- "API-Gateway"
  [Leistungsbericht versenden] -down- "API-Gateway"
  [Bett-Kapazität anzeigen] -down- "API-Gateway"
  [Auslastungsbericht erstellen] -down- "API-Gateway"
  [Auslastungsüberblick anzeigen] -down- "API-Gateway"
  [Auslastungsbericht versenden] -down- "API-Gateway"

  "API-Gateway" -- [Input (Leistungsdaten)]
  "API-Gateway" -- [Output (Leistungsbericht)]
  "API-Gateway" -- [Input (Auslastungsdaten)]
  "API-Gateway" -- [Output (Auslastungsbericht)]
@enduml
```

**Gesamte Architektur**
```plantuml Microservices
@startuml
left to right direction

!define coral #FF6F61
!define teal #008080

package "Microservices" {

'-----------Lino-----------
  node "Backlog" {
    [Auftrag bearbeiten]
    [Auftrag ansehen]

    database "Datenbank1"{
      [Auftrag ansehen] <-[#607B8B]- Datenbank1 : Datenfluss
      [Auftrag bearbeiten] <-[#607B8B]> Datenbank1: Datenfluss
    }
  }

  node "Untersuchungen medizinisches Gerät" {
    [Untersuchungsergebnisse anzeigen]
    [Untersuchungseinstellungen verwalten]

    database "Datenbank2"{
      [Untersuchungsergebnisse anzeigen] <-[#8470FF]- Datenbank2 : Datenfluss
      [Untersuchungseinstellungen verwalten] <-[#8470FF]-> Datenbank2 : Datenfluss
    }
  }

  node "Fehlerbericht"{
    [Fehlerbericht verwalten]
    [Fehlerbericht anzeigen]
    [Fehlerbericht an externe Systemtechniker senden]

    database "Datenbank3"{
      [Fehlerbericht anzeigen] <-[#00CED1]- Datenbank3 : Datenfluss
      [Fehlerbericht an externe Systemtechniker senden] <-[#00CED1]- Datenbank3 : Datenfluss
      [Fehlerbericht verwalten] <-[#00CED1]-> Datenbank3 : Datenfluss
    }
  }

'-----------Helen-----------
   node "Zugriffsmöglichkeiten eingeschränkt" {
    [Termine als erledigt markieren]
    [Termine einsehen]
    database "Datenbank4"{
      [Termine einsehen] -[#0000FF]- Datenbank4 : Datenfluss
      [Termine als erledigt markieren] <-[#0000FF]-> Datenbank4 : Datenfluss
    }
  }

  node "Zugriffsmöglichkeiten erweitert"{
    [Patiententermine in Transportpläne eintragen]
    [Patiententermine bearbeiten/löschen]
    database "Datenbank5"{
      [Patiententermine in Transportpläne eintragen] -[#FFFF00]-> Datenbank5 : Datenfluss
      [Patiententermine bearbeiten/löschen] <-[#FFFF00]-> Datenbank5 : Datenfluss
    }
  }

'-----------Antonia-----------
  node "Patienten" {
    [Patientendaten anzeigen]
    [Patientendaten verwalten]

    database "Datenbank6"{
      [Patientendaten anzeigen] <-- Datenbank6 : Datenfluss
      [Patientendaten verwalten] <-> Datenbank6 : Datenfluss
    }
  }

'-----------Duong-----------
node "Abteilungsanalyse" {
    [Abteilungsanalysenbericht anzeigen] 
    [Abteilungsanalysbenricht erstellen] 
    [Abteilungsanalysenbericht versenden] 
   
    database "Datenbank7"{
      [Abteilungsanalysenbericht anzeigen] <-[#FF6F61]- Datenbank7 : Datenfluss
      [Abteilungsanalysbenricht erstellen] -[#FF6F61]-> Datenbank7 : Datenfluss
      [Abteilungsanalysenbericht versenden] <-[#FF6F61]- Datenbank7 : Datenfluss
    }
  }

 node "Datenanfrage Krankenkasse"{
    [Patientenakteanforderung empfangen] 
    [Patientenakteanforderung versenden]

    database "Datenbank8"{
      [Patientenakteanforderung versenden] <-[#8A2BE2]- Datenbank8 : Datenfluss
      [Patientenakteanforderung empfangen] -[#8A2BE2]-> Datenbank8 : Datenfluss
    }
  }
   node "Leistungsüberprüfung" {
    [Leistungsanalyse anzeigen] 
    [Leistungsbericht erstellen] 
    [Leistungsbericht versenden] 

    database "Datenbank9"{
      [Leistungsbericht erstellen] -[#DarkOliveGreen]-> Datenbank9 : Datenfluss
      [Leistungsanalyse anzeigen] <-[#DarkOliveGreen]- Datenbank9 : Datenfluss
      [Leistungsbericht versenden] <-[#DarkOliveGreen]- Datenbank9 : Datenfluss
    }
  }

   node "Auslastungsanalyse"{
    [Auslastungsüberblick anzeigen] 
    [Auslastungsbericht erstellen] 
    [Auslastungsbericht versenden] 
    [Bett-Kapazität anzeigen] 

    database "Datenbank10"{
      [Auslastungsüberblick anzeigen] <-[#FF1493]- Datenbank10 : Datenfluss 
      [Auslastungsbericht erstellen] -[#FF1493]-> Datenbank10 : Datenfluss
      [Bett-Kapazität anzeigen] <-[#FF1493]- Datenbank10 : Datenfluss
      [Auslastungsbericht versenden] <-[#FF1493]- Datenbank10 : Datenfluss
    }
  }
'-----------Jann-----------
  node "Systemüberwachung" {
    database "Datenbank11" as db11
    [Ressourcen überwachen] <-down[#Darkorange]- db11 : Datenfluss
    [Benachrichtigungen senden] <-down[#Darkorange]- db11 : Datenfluss
  }
  node "Benutzerverwaltung" {
    database "Datenbank12" as db12
    [Kontoverwaltung] <-down[#97FFFF]-> db12 : Datenfluss
    [Passwortverwaltung] <-down[#97FFFF]-> db12 : Datenfluss
    [Richtlinienverwaltung] <-down[#97FFFF]-> db12 : Datenfluss
    [Rechteverwaltung] <-down[#97FFFF]-> db12 : Datenfluss
  }
  node "Konfigurationsdatenverwaltung" {
    database "Datenbank13" as db13
    [Konfigurationsdaten bearbeiten] <-down[#FFF68F]-> db13 : Datenfluss
    [Konfigurationsdaten einsehen] <-down[#FFF68F]- db13 : Datenfluss
  }
  node "Dokumentationsverwaltung" {
    database "Datenbank14" as db14
    [Dokumente bearbeiten] <-down[#7CFC00]-> db14 : Datenfluss
    [Dokumente einsehen]  <-down[#7CFC00]- db14 : Datenfluss
  }


  cloud "API-Gateway"

  package "API"{
'-----------Lino-----------
    [Input(medizinisches Gerät)]
    [Output(medizinisches Gerät)]
    [Output(Fehlerbericht)]
    [Input(Fehlerbericht)]
    [Output(Laborergebnis)]
    [Input(Backlogauftrag)]

'-----------Helen-----------
    [Input(Patiententermine in Transportpläne)]
    [Output(Patiententermine in Transportpläne)]
    [Input(Termine)]
    [Output(Termine)]

'-----------Antonia-----------
    [Input(Patientendaten)]
    [Output(Patientendaten)]

'-----------Duong-----------
  [Input (Abteilungsanalysendaten)]
  [Output (Abteilungsanalysenbericht)]
  [Input (Patientenakte)]
  [Output (Patientenakten)]   
  [Input (Leistungsdaten)]
  [Output (Leistungsbericht)]
  [Input (Auslastungsdaten)]
  [Output (Auslastungsbericht)]

  '-----------Jann-----------
  [Input(Systemüberwachung)]
  [Output(Systemüberwachung)]
  [Input(Benutzerverwaltung)]
  [Output(Benutzerverwaltung)]
  [Input(Konfigurationsdatenverwaltung)]
  [Output(Konfigurationsdatenverwaltung)]
  [Input(Dokumentationsverwaltung)]
  [Output(Dokumentationsverwaltung)]
  }
}

'-----------Lino-----------
[Untersuchungsergebnisse anzeigen] -up[#8470FF]- "API-Gateway"
[Untersuchungseinstellungen verwalten] -up[#8470FF]- "API-Gateway"
[Fehlerbericht anzeigen] -up[#00CED1]- "API-Gateway"
[Fehlerbericht verwalten] -up[#00CED1]- "API-Gateway"
[Fehlerbericht an externe Systemtechniker senden] -up[#00CED1]- "API-Gateway"
[Auftrag bearbeiten] -up[#607B8B]- "API-Gateway"
[Auftrag ansehen] -up[#607B8B]- "API-Gateway"

"API-Gateway" -[#8470FF]- [Input(medizinisches Gerät)]
"API-Gateway" -[#8470FF]- [Output(medizinisches Gerät)]
"API-Gateway" -[#00CED1]- [Output(Fehlerbericht)]
"API-Gateway" -[#00CED1]- [Input(Fehlerbericht)]
"API-Gateway" -[#607B8B]- [Output(Laborergebnis)]
"API-Gateway" -[#607B8B]- [Input(Backlogauftrag)]

'-----------Helen-----------
[Termine einsehen] -up[#0000FF]- "API-Gateway"
[Termine als erledigt markieren] -up[#0000FF]- "API-Gateway"
[Patiententermine in Transportpläne eintragen] -up[#FFFF00]- "API-Gateway"
[Patiententermine bearbeiten/löschen] -up[#FFFF00]- "API-Gateway"

"API-Gateway" -[#FFFF00]- [Input(Patiententermine in Transportpläne)]
"API-Gateway" -[#0000FF]- [Input(Termine)]
"API-Gateway" -[#0000FF]- [Output(Termine)]
"API-Gateway" -[#FFFF00]- [Output(Patiententermine in Transportpläne)]

'-----------Antonia-----------
[Patientendaten anzeigen] -up- "API-Gateway"
[Patientendaten verwalten] -up- "API-Gateway"

"API-Gateway" -- [Input(Patientendaten)]
"API-Gateway" -- [Output(Patientendaten)]

'-----------Duong-----------
[Abteilungsanalysbenricht erstellen] -up[#FF6F61]- "API-Gateway"
[Abteilungsanalysenbericht anzeigen] -up[#FF6F61]- "API-Gateway"
[Abteilungsanalysenbericht versenden] -up[#FF6F61]- "API-Gateway"
[Patientenakteanforderung empfangen] -up[#8A2BE2]- "API-Gateway"
[Patientenakteanforderung versenden] -up[#8A2BE2]- "API-Gateway"
[Leistungsbericht erstellen] -up[#DarkOliveGreen]- "API-Gateway"
[Leistungsanalyse anzeigen] -up[#DarkOliveGreen]- "API-Gateway"
[Leistungsbericht versenden] -up[#DarkOliveGreen]- "API-Gateway"
[Bett-Kapazität anzeigen] -up[#FF1493]- "API-Gateway"
[Auslastungsbericht erstellen] -up[#FF1493]- "API-Gateway"
[Auslastungsüberblick anzeigen] -up[#FF1493]- "API-Gateway"
[Auslastungsbericht versenden] -up[#FF1493]- "API-Gateway"

"API-Gateway" -[#FF6F61]- [Input (Abteilungsanalysendaten)]
"API-Gateway" -[#FF6F61]- [Output (Abteilungsanalysenbericht)]
"API-Gateway" -[#8A2BE2]- [Input (Patientenakte)]
"API-Gateway" -[#8A2BE2]- [Output (Patientenakten)]
"API-Gateway" -[#DarkOliveGreen]- [Input (Leistungsdaten)]
"API-Gateway" -[#DarkOliveGreen]- [Output (Leistungsbericht)]
"API-Gateway" -[#Sienna]- [Input (Auslastungsdaten)]
"API-Gateway" -[#Sienna]- [Output (Auslastungsbericht)]

'-----------Jann-----------

[Ressourcen überwachen]  -up[#Darkorange]- "API-Gateway" 
[Benachrichtigungen senden] -up[#Darkorange]- "API-Gateway"
[Kontoverwaltung] -up[#97FFFF]- "API-Gateway"
[Passwortverwaltung] -up[#97FFFF]- "API-Gateway"
[Richtlinienverwaltung] -up[#97FFFF]- "API-Gateway"
[Rechteverwaltung] -up[#97FFFF]- "API-Gateway"
[Konfigurationsdaten bearbeiten] -up[#FFF68F]- "API-Gateway"
[Dokumente bearbeiten] -up[#7CFC00]- "API-Gateway"

"API-Gateway" -[#Darkorange]- [Input(Systemüberwachung)]
"API-Gateway" -[#Darkorange]- [Output(Systemüberwachung)]
"API-Gateway" -[#97FFFF]- [Input(Benutzerverwaltung)]
"API-Gateway" -[#97FFFF]- [Output(Benutzerverwaltung)]
"API-Gateway" -[#FFF68F]- [Input(Konfigurationsdatenverwaltung)]
"API-Gateway" -[#FFF68F]- [Output(Konfigurationsdatenverwaltung)]
"API-Gateway" -[#7CFC00]- [Input(Dokumentationsverwaltung)]
"API-Gateway" -[#7CFC00]- [Output(Dokumentationsverwaltung)]

'----------------------
"Patienten" <|.[#FFFFFF]. Datenbank2

"Datenanfrage Krankenkasse" <|.[#8A2BE2]. Datenbank6

"Auslastungsanalyse" <|.[#FF1493]. Datenbank4
"Auslastungsanalyse" <|.[#FF1493]. Datenbank1

"Systemüberwachung" <|.[#Darkorange]. Datenbank3

"Leistungsüberprüfung" <|.[#DarkOliveGreen]. Datenbank10

"Abteilungsanalyse" <|.[#FF6F61]. Datenbank10

@enduml
```
