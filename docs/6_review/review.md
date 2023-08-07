# Review

## 1. Ziel und Umfang

Das Ziel des Review des KBA Projektes ist es, die mit dem Stakeholdern beschriebenen technischen und nicht technischen Anforderungen, sowie die methodische und qualitativen Dokumentation des Pflichtenheft zu überprüfen, Probleme zu identifizieren und Verbesserungsvorschläge zu geben.

Das Review bildet den Abschluss des KBA Projekt für den SS2023 ab.

## 2. Review Teilnehmer

Tran Anh Hoang wird als Reviewer fungieren und ein Review der Dokumentationsgruppe, bestehend aus Helen Laible, Duc Nguyen Duong, Lino Becht, Antonia Geschke, durchführen.

## 3. Verwendete Review-Methoden

In diesen Review werden folgende Methoden verwendet:

- Dokumentations-Review: Überprüfung aller relevanten Dokumentationen wie Projektbeschreibung, Glossar, technische Dokumentationen usw.

- Anforderungs-Review: Überprüfung der Anforderungsdokumente, um sicherzustellen, dass sie vollständig, eindeutig, konsistent und nachvollziehbar sind.

- Architektur-Review: Hier wird die Gesamtarchitektur des Systems überprüft, um sicherzustellen, dass sie die funktionalen und nicht-funktionalen Anforderungen erfüllt und konsistent und logisch aufgebaut ist.

## 4. Dokumentationsanalyse

### 4.1. Gliederung und Aufbau

Zunächst ist die Dokumentation des Projektes in 7 Punkten untergegliedert, diese sind:

1. Einleitung
2. Glossar
3. Initiale Systemanalyse
4. Refinement
5. ER-Diagramm
6. Prototyp
7. Systemarchitektur

Aus der Gliederung kann man sehr gut den logischen Aufbau des Pflichtenheftes vom Dokumentations- und Entwicklerteam erkennen.

### 4.2. Dokumentationsvollständigkeit und -verständlichkeit

Aus den einzelnen Überschriften der Gliederungen kann man ohne Kontext sofort erkennen, um welches Thema es sich dabei handelt. 

Durch die *Einleitung*, das *Glossars* und die *initiale Systemanalyse* werden sowohl technische als auch nicht technische Leser über das Projekt, die Stakeholder, den Kontext und die Fachbegriffe aufgeklärt und informiert.

Im Segment *Refinement* werden die technischen Anforderungen dokumentiert und spezifiziert.

Im Teil *ER-Diagramm* wurde zunächst eine vorläufige ER-Diagramm vorgestellt und anschließend eine erste finale ER-Diagramm Version für das Projekt vorgestellt. 

Im 6. Punkt setzt sich das Entwicklerteam ein Prototypen für die Authentifizierung für das System um.

im 7. Punkt wird im Allgemeinen über verschiedene Systemarchitekturen diskutiert und argumentiert. Anschließend wurde eine Systemarchitektur für das Projekt festgelegt. Um die ausgewählte Systemarchitektur besser verstehen und erklären zu können, wurde ein Systemarchitektur-Diagramm erstellt.

### 4.3. Fazit Dokumentationsanalyse

Meines Erachtens nach wurde in der Dokumentationsanalyse alle wichtigen Punkte für eine vorläufige und erste Dokumentation zum Projekt vollständig und logisch dargestellt. 

## 5. Anforderungserfüllung

Anhand der beschriebenen Informationen und Absprache mit dem Auftraggeber wurde vom Dokumentationsteam ein Refinement der Anforderungen mittels Business Use Case, System Use Case, Aktivitätsdiagramm Diagramm erstellt, welche die technischen Funktionalitäten darstellen soll. Im folgenden wird über eine tabellarische Darstellung überprüft, ob die aus den Business Use Case (BUC) definierten Sichten und Funktionalitäten in ihrer Vollständigkeit & Konsistenz sowohl im System Use Case (SUC) als auch Aktivitätsdiagramm definiert und spezifiziert wurde.

| Sichten/Stakeholder                       | Business Use Case  | System Use Case    | Aktivitätsdiagramm | Vollständigkeit & Konsistenz | Kommentar                                                                                                                                                                                |
| ----------------------------------------- | ------------------ | ------------------ | ------------------ | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ärzt:innen (Externe, Interne)             | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| Krankenpfleger:innen                      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| Rettungskräfte                            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| Datenschutz- und Rechtsbeauftragte        | :x:                | :x:                | :x:                | :x:                          | Sicht entfällt, auch wenn diese noch in der Dokumentation enthalten ist                                                                                                                  |
| Patient:innen                             | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| Systemadministrator:innen                 | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                          | Installation von Hardware wurde zwar im BUC, SUC definiert aber nicht in Aktivitätsdiagramm weiter spezifiziert.                                                                         |
| Sekretär:innen                            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                          | Funktionalität: "Formulare/Berichte einsehen", wurde in BUC beschrieben aber im SUC vernachlässigt, jedoch wurde Stackholder Sekretär:innen angelegt und weiter in SUC spezifiziert |
| Geschäftsführer:innen                     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| Krankenkasse                              | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :x:                          | inkonsistente Definition der Funktionalität zwischen BUC, SUC und Aktivitätsdiagramm, Stackholder Krankenkasse wurde berücksichtigt                                                       |
| Laborpersonal                             | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| (interne) Systemtechniker:innen           | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |
| Externe Medizintechnikern/Systemtechniker | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:           |

### 5.1 Fazit Anforderungserfüllung

Im Allgemeinen werden die Stakeholder, welche vom Kunden definiert wurden, in der Anforderungserfüllung des Systems berücksichtigt. Die Anforderungsanalyse sowie Dokumentation aller vom Auftraggeber beschriebene Stakeholder sind in BUC, SUC, Aktivitätsdiagramm eindeutig und nachvollziehbar dargestellt.

Jedoch fand ich bei meiner Review der Dokumentation verschieden Inkonsistenz der funktionalen Anforderungen. Bei den Sichten der Krankenkassen und Sekretär:innen wurde funktionalen Anforderungen, welche im BUC definiert wurden, in der SUC nicht ausgearbeitet. Im SUC wurden zwar teileweise diese funktionalen Anforderungen dargestellt, aber nicht konkret und explizit beschrieben0. Stattdessen wurden neue Funktionalitäten hinzugefügt. Das Aktivitätsdiagramm lehnt sich dabei auf das SUC an.

Zusätzlich wurde beim Review eine weitere Inkonsistenz in der Sicht der Systemadministrator:innen festgestellt. Dabei wurde die Funktionalitäten "Installation von Hardware" zwar im BUC, SUC definiert aber nicht in Aktivitätsdiagramm weiter spezifiziert. Möglicherweise wurde mit dem Kunden über eine Überspringung des Aktivitätsdiagramms festgelegt, da dieses Aktivitätsdiagramm zu allgemein in seiner Funktionalität ist. Dies müsste aber vom Auftraggeber und vom Dokumentationsteam bestätigt und dokumentiert werden, um Missverständnisse zu vermeiden.

Auffallend ist auch das nur einige Diagramme im BUC mit Kommentaren hinterlegt wurde, aber alle anderen wiederum nicht. Im SUC wurde einzig die Beschreibung für UseCase "Patientendaten pflegen" mit einer zusätzlichen Beschreibungstext versehen.
 
## 6. Architekturanalyse

### 6.1. Architekturauswahl

Das Dokumentationsteam hat sich zunächst eine Diskussion über die Vor- und Nachteilen verschiedener Architekturen debattiert und sich schlussendlich für eine *Microservices-Architektur entschieden*. Aus der Begründung und Berücksichtigung der Diskussion der Architekturen ist die Entscheidung eine Microservices-Architektur auszuwählen logisch und nachvollziehbar.

### 6.2. Architekturaufbau und -definition 

Zunächst muss angemerkt werden, dass man die detaillierten Darstellungen der einzelnen Microservices mittels Plant UML nicht gut abgebildet werden. Die einzelnen Diagramme der verschiedene Bearbeiter sind kaum zu erkennen. Jedoch wurde das Gesamtarchitekturdiagramm, auch wenn es nicht so detailliert ist wie die Darstellungen der einzelnen Microservices, übersichtlich präsentiert und gut verständlich dargestellt.

Hinsichtlich des Architekturaufbau ist festzustellen, dass es sich hierbei um eine RESTfull Microservices API handelt. Die HTTP anfragen werden meiner Interpretation nach zunächst an die API-Schnittstelle gesendet, diese Anfragen werden über einen API-Gateway je nach Anfrage und Befugnis dann an die einzelnen Services weitergeleitet. Auch die Antworten der Anfragen werde über das API-Gateway gesteuert. Die einzelnen Microservices-Module stellen die Business Logik der einzelnen Services der technischen Funktionalitäten dar.

Im folgenden werden die positiven und negativen der Architekturdefinition diskutiert:

__Positive Aspekte__:

 * Aufbau und Definition der API-Schnittstelle, Gateway-Lösung und Microservices sind transparent und logisch aufgebaut
 * Abbildung der im SUC definierten Sichten und technischen Funktionalitäten auf Microservices-Module
 * nachvollziehbarer Datenfluss in den einzelnen Microservices-Module  
 * detaillierte Abbildung der einzelne Microservice und Gesamtarchitekturdiagramm  
    
__Negative Aspekte__:
 
* Datenfluss zwischen API-Schnittstelle, Gateway-Lösung und Microservices Module im gesamt Architekturdiagramm schwer auseinander zuhalten und undurchsichtig 
* keine Spezifikation mit welchen Endgeräte/Portalen, welche User und auch welche Systeme jeweils auf die API __*genau*__ zu greifen   
* API Gateway behandelt sowohl interne als auch externe Schnittstellen, dies führt:
  * Skalierbarkeitsprobleme (hoher Last)
  * Performance Verlust bei hoher Anfrage
  * Latenzproblem
  * höhere Ausfallrisiko
  * Engere Kopplung
  * Single Point of Failure (sehr starke Abhängigkeit des System an API Gateway)
  * (IT-)Sicherheitsrisiko

* ER-Modell ist veraltet und passt dementsprechend nicht zum Micro-Service Architektur und die dazugehörigen Datenbanken, welchen in der Architekturabbildungen angegebena 

## 7. Identifizierte Probleme und Fehler

In den vorherigen Punkten wurden die identifizierte Probleme und Fehler bereits detailliert beschrieben und erläutert. Hier werden die Probleme nochmal zusammengefasst:

1. Inkonsistente Dokumentation der technischen Anforderungen in den BUC, SUC und Aktivitätsdiagramm bei de Sichten und Funktionalität:
   * *_Krankenkassen und Sekretär:innen_* 
   * *_Systemadministrator:innen_*

2. Probleme bei der Sichtbarkeit und Erkennung der Darstellung der Architekturaufbau der einzelnen Microservices  
3. Probleme bei Nutzung einer einzelnen API Gateway für interne als auch externe Schnittstellen

## 8. Risikobewertung
Aus den vorgelegten Dokumentation zum Projekt sehe ich ein __*geringes Risiko*__ für den weiteren Verlauf des Projektes. Jedoch ist die Dokumentation noch nicht auf ein reife Stand für die Produktion der Software. Da das Projekt sich noch in der Anfangsphase des Projektes sich befindet, ist es meines Erachtens nach __*noch nicht kritisch*__.

Aus dem __*jetzigen Stand (07.08.2023)*__ kann dieses Dokument als Pflichtenheft an den Kunden abgegeben und durch ein Kundenreview fortgeführt werden. Dadurch kann auch nochmal die Ungenauigkeit der technischen Anforderungen in den BUC, SUC und Aktivitätsdiagramm mit dem Kunden kontrolliert, korrigiert und verfeinert werden. Zusätzlich kann auch das ER-Modell mit den Auftraggeber neu ausgehandelt werden, da diese nicht mehr auf den aktuellen Architekturstand angelehnt ist.

Für eine __*vollständige und finale Version*__ der Ausarbeitung der Dokumentation sehe ich aber ein __*erhöhtes Risiko*__ für: 
* __*unklare Anforderungen*__ durch weitere Iteration mit dem Kunden als auch dem Stand der Technologien
* __*Fehlende Nachverfolgbarkeit*__
* __*Fehlende Validierung*__ durch Kunden und das Umsetzungsteam
* __*Streitigkeiten und Konflikte*__ der verschiedenen Stakeholdern, Umsetzungsteam und das Management 

## 9. Empfehlungen und Vorschläge

Aus dem Review kann ich folgende Empfehlungen und Vorschläge für das weitere Vorgehen an das Umsetzungsteam geben:
* konsistente, genaue und saubere Beschreibungen der technischen Anforderungen in den BUC, SUC sowie Aktivitätsdiagramm --> Gewährleistung einer professionellen Dokumentation und Absicherung gegenüber Missverständnissen und rechtlichen bzw. vertraglichen Folgen
* Einhaltung einer Dokumentationsform (einige BUC beinhalten Kommentare andere wiederum nicht, eine SUC hat eine zusätzlich textuelle Beschreibung) 
* Nummerierung der BUC, SUC und Aktivitätsdiagramme für eine bessere Nachvollziehbarkeit der Dokumentation
* lesbare und sauberere Diagramme 
* Neuentwicklung der Datenbank ER-Modelle für die einzelnen Microservices Module
* Kopplung Microservice-Module an den mehrere API-Gateways
* sauberere und feinere Definition der Anbindung zwischen internen und externen Schnittstellen 
* spezifische Diskussion über Verantwortungen der Rollen im Umsetzungsteam, Tech-Stack, Qualitätsmanagement, Software-Testing, IT-Sicherheit, Datenschutz , Deployment und Infrastruktur für das Projekt 

## 10. Review-Zusammenfassung

Zusammenfassend lässt sich aus der Überprüfung festhalten, dass die Dokumentation im Verhältnis zu den definierten Projektanforderungen gute Fortschritte gemacht hat. Die Dokumentation ist logisch und nachvollziehbar aufgebaut. Die wichtigsten Punkten wurden alle angesprochen und ausformuliert. Der jetzige Dokumentationsstand kann für den ersten Anlauf an den Auftraggeber für einen Kundenreview übergeben werden. Jedoch müssen die identifizierten Probleme und Fehler angesprochen und im nächsten Schritt durch den Auftraggeber und das Umsetzungsteam entschieden, bereinigt und dokumentiert werden um den weiteren Projektverlauf besser steuern und adjustieren zu können.



