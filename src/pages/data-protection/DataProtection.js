import React, { useEffect } from 'react';

import Footer from 'components/footer';
import NavbarInner from 'components/navbar_inner';
import { Heading2, Heading4, Paragraph } from 'assets/styles/typography';

import { Section, Container } from './style';

function DataProtection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarInner />
      <Section id="data-protection">
        <Container>
          <Heading2 textAlign="left">Datenschutzerklärung</Heading2>
          <Paragraph>Stand der Datenschutzerklärung: August 2019</Paragraph>
          <Heading4>Einleitung</Heading4>
          <Paragraph>
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung
            von personenbezogenen Daten (nachfolgend kurz „Daten“) innerhalb unseres Onlineangebotes
            und der mit ihm verbundenen Angebote, Vertragsleistungen, Webseiten, mobiler
            Applikationen, Funktionen und Inhalte sowie externen Onlinepräsenzen auf (nachfolgend
            gemeinsam bezeichnet als „Onlineangebot“):
          </Paragraph>
          <Paragraph>
            Im ersten Abschnitt der Datenschutzerklärung erhalten Sie Angaben zum Verantwortlichen
            der Verarbeitung sowie eine Übersicht unserer Verarbeitungsvorgänge.
            <br />
            Im zweiten Abschnitt erhalten Sie Hinweise zu Ihren Rechten, den einschlägigen
            Rechtsnormen und generelle Hinweise zu unserer Verarbeitung von Daten.
            <br />
            Der dritte Abschnitt beinhaltet Angaben zu den einzelnen Verarbeitungsvorgängen. Dieser
            Abschnitt unterteilt sich in weitere Bereiche, wie z.B. unsere die Kernleistungen,
            Reichweitenmessung oder Marketing.
            <br />
            Der vierte Abschnitt enthält Erläuterungen und Beschreibungen der im Rahmen der
            Datenschutzerklärung verwendeten Begriffe. D.h. wenn Ihnen die verwendeten Begriffe (wie
            z.B. „Personenbezug“ oder „Cookie“ unbekannt sind, schlagen Sie diese bitte im vierten
            Abschnitt nach. Im Übrigen sind alle verwendeten Begrifflichkeiten (z.B.
            „Verantwortlicher“ oder „Nutzer“) geschlechtsneutral zu verstehen.
            <br />
            Im letzten Abschnitt erhalten Sie abschließende Hinweise.
            <br />
            Inhaltsverzeichnis
          </Paragraph>
          <Paragraph>
            Abschnitt I – Verantwortlicher und übersicht der Datenverarbeitungen
            <br />
            Verantwortlicher
            <br />
            Kontaktangaben Datenschutzbeauftragter
            <br />
            Einverständnis
            <br />
            Widerrufsmöglichkeit:
            <br />
            Arten der verarbeiteten Daten:
            <br />
            Verarbeitung besonderer Kategorien von Daten (Art. 9 Abs. 1 DSGVO):
            <br />
            Kategorien der von der Verarbeitung betroffenen Personen:
            <br />
            Zweck der Verarbeitung:
            <br />
            Automatisierte Entscheidung im Einzelfall (Art. 22 DSGVO):
            <br />
            Abschnitt II – Betroffenenrechte, Rechtsgrundlagen und generelle Hinweise
            <br />
            Rechte der betroffenen Personen
            <br />
            Widerrufsrecht
            <br />
            Widerspruchsrecht
            <br />
            Cookies und Widerspruchsrecht im Direktmarketing
            <br />
            Ausschließlich automatisierte Datenverarbeitung
            <br />
            Löschung von Daten und Archivierungspflichten
            <br />
            Änderungen und Aktualisierungen der Datenschutzerklärung
            <br />
            Maßgebliche Rechtsgrundlagen
            <br />
            Sicherheit der Datenverarbeitung
            <br />
            Offenlegung und übermittlung von Daten
            <br />
            Übermittlungen in Drittländer
            <br />
            Abschnitt III – Verarbeitungsprozesse
            <br />
            Kernbereich der Datenverarbeitung
            <br />
            Vergleichs- und Vermittlungsleistungen
            <br />
            Registrierungsbereich (Kundenbereich)
            <br />
            Telefonische Qualifizierung
            <br />
            Beantwortung von Anfragen
            <br />
            Externe Onlinepräsenzen
            <br />
            Onlinepräsenzen in sozialen Medien
            <br />
            Webserver und Sicherheit
            <br />
            Hosting
            <br />
            Server-Logs
            <br />
            Content Delivery Network (CDN)
            <br />
            Eingebettete Inhalte und Funktionen
            <br />
            Dienste und Inhalte von Google
            <br />
            Funktionen und Inhalte von Facebook
            <br />
            Funktionen und Inhalte von Instagram
            <br />
            Marketing
            <br />
            Informationsversand durch personalisierten Newsletter
            <br />
            Kommunikation via Messenger
            <br />
            Kommunikation via Post, E-Mail, Fax oder Telefon
            <br />
            Optimierung und Sicherheit
            <br />
            Reichweitenmessung, Onlinemarketing und Technologiepartner
            <br />
            Facebook-Pixel
            <br />
            Google Tag Manager
            <br />
            Google Analytics
            <br />
            Google AdWords
            <br />
            Abschnitt IV – Begriffsdefinitionen
            <br />
            Abschnitt V – Weitere Informationen
          </Paragraph>
          <Paragraph>
            Abschnitt I – Verantwortlicher und Übersicht der Datenverarbeitungen
            <br />
            VERANTWORTLICHER
            <br />
            eFab GmbH
            <br />
            Unterherrnhauserstraße 3a
            <br />
            82547 Eurasburg
            <br />
            Deutschland
          </Paragraph>
          <Paragraph>Geschäftsführer: Christoph Lange und Erik Waldeck</Paragraph>
          <Paragraph>Tel: 01702988400</Paragraph>
          <Paragraph>Impressum: https://www.developer-lab.de/impressum/</Paragraph>
          <Paragraph>
            Der Verantwortliche wird nachfolgend auch bezeichnet als „wir“ oder „uns“.
          </Paragraph>
          <Heading4>KONTAKTANGABEN:</Heading4>
          <Paragraph>E-Mail: hello@developer-lab.de</Paragraph>
          <Heading4>BESCHREIBUNG UNSERER KERNLEISTUNGEN:</Heading4>
          <Paragraph>
            eFab bietet Vermittlungsleistungen im Internet an. Interessenten können
            Vermittlungsanfragen zu bestimmten Produkten und Leistungen stellen. Die
            Vermittlungsanfragen werden anschließend an Unternehmen, Vermittler oder andere Anbieter
            dieser Produkte oder Leistungen (zusammenfassend bezeichnet als “Anbieter”)
            weitergeleitet, die wiederum den Interessenten Angebote unterbreiten können.
          </Paragraph>
          <Paragraph>
            Mit dem Absenden der Anfrage, erklären sich die Interessenten damit einverstanden, dass
            wir ihren Namen sowie ihre Kontakt- und Anfragedaten verarbeiten dürfen, um ihre Anfrage
            zu bearbeiten, zur Angebotserstellung vorzubereiten und an ausgewählte Anbieter zu
            übermitteln.
          </Paragraph>
          <Heading4>WIDERRUFSMÖGLICHKEIT:</Heading4>
          <Paragraph>
            Die Einwilligung kann jederzeit formlos, z.B. per E-Mail an hello@developer-lab.de
          </Paragraph>
          <Heading4>ARTEN DER VERARBEITETEN DATEN:</Heading4>
          <Paragraph>
            Bestandsdaten (z.B., Namen, Adressen).
            <br />
            Kontaktdaten (z.B., E-Mail-Adressen, Telefonnummern).
            <br />
            Inhaltsdaten (z.B., Angaben zu Anfragen).
            <br />
            Vertragsdaten (z.B., Inhalt der Anfragen, vermittelte Anbieter).
            <br />
            Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten).
            <br />
            Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen).
            <br />
            Bewerberdaten (z.B., Namen, Kontaktdaten, Qualifikationen, Bewerbungsunterlagen).
            <br />
            VERARBEITUNG BESONDERER KATEGORIEN VON DATEN (ART. 9 ABS. 1 DSGVO):
            <br />
          </Paragraph>
          <Paragraph>
            Es werden grundsätzlich keine besonderen Kategorien von Daten verarbeitet, außer
            Gesundheitsdaten, wenn diese durch die Nutzer der Verarbeitung, z.B. mit Angaben zu
            gewünschten Vergleichsangeboten, zugeführt werden (z.B. Angaben zu Mobilitätshilfen).
          </Paragraph>
          <Heading4>KATEGORIEN DER VON DER VERARBEITUNG BETROFFENEN PERSONEN:</Heading4>
          <Paragraph>
            Interessenten.
            <br />
            Anbieter, Geschäftspartner.
            <br />
            Besucher und Nutzer des Onlineangebotes.
            <br />
            Bewerber.
          </Paragraph>
          <Paragraph>
            Nachfolgend bezeichnen wir die Betroffenen zusammenfassend auch als „Nutzer“.
          </Paragraph>
          <Heading4>ZWECK DER VERARBEITUNG:</Heading4>
          <Paragraph>
            Zurverfügungstellung und Durchführung von Vergleichs- und Vermittlungsleistungen.
            <br />
            Zurverfügungstellung des Onlineangebotes, seiner Inhalte und Funktionen.
            <br />
            Erbringung vertraglicher Leistungen, Service und Kundenpflege.
            <br />
            Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern.
            <br />
            Marketing, Werbung und Marktforschung.
            <br />
            Sicherheitsmaßnahmen.
            <br />
            <br />
            <strong>AUTOMATISIERTE ENTSCHEIDUNG IM EINZELFALL (ART. 22 DSGVO):</strong>
            <br />
          </Paragraph>
          <Paragraph>Wir nehmen keine automatisierten Entscheidungen im Einzelfall vor.</Paragraph>
          <Paragraph>
            Abschnitt II – Betroffenenrechte, Rechtsgrundlagen und generelle Hinweise
            <br />
            Rechte der betroffenen Personen
          </Paragraph>
          <Paragraph>
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten
            verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und
            Kopie der Daten entsprechend Art. 15 DSGVO.
          </Paragraph>
          <Paragraph>
            Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung der Sie
            betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu
            verlangen.
          </Paragraph>
          <Paragraph>
            Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass betreffende Daten
            unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe des Art. 18 DSGVO eine
            Einschränkung der Verarbeitung der Daten zu verlangen.
          </Paragraph>
          <Paragraph>
            Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns
            bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten und deren Übermittlung
            an andere Verantwortliche zu fordern.
          </Paragraph>
          <Paragraph>
            Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der zuständigen
            Aufsichtsbehörde einzureichen.
          </Paragraph>
          <Paragraph>Widerrufsrecht</Paragraph>
          <Paragraph>
            Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für
            die Zukunft zu widerrufen.
          </Paragraph>
          <Paragraph>Widerspruchsrecht</Paragraph>
          <Paragraph>
            Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe des Art.
            21 DSGVO jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die
            Verarbeitung für Zwecke der Direktwerbung erfolgen.
          </Paragraph>
          <Paragraph>Cookies und Widerspruchsrecht im Direktmarketing</Paragraph>
          <Paragraph>
            Wir setzen temporäre und permanente Cookies, d.h. kleine Dateien, die auf den Geräten
            der Nutzer gespeichert werden ein (Erklärung des Begriffs und der Funktion, siehe
            Abschnitt „Begriffsdefinitionen“ dieser Datenschutzerklärung). Zum Teil dienen die
            Cookies der Sicherheit oder sind zum Betrieb unseres Onlineangebotes erforderlich (z.B.,
            für die Darstellung der Website) oder um die Nutzerentscheidung bei der Bestätigung des
            Cookie-Banners zu speichern. Daneben setzen wir oder unsere Technologiepartner Cookies
            zur Reichweitenmessung und Marketingzwecken ein, worüber die Nutzer im Laufe der
            Datenschutzerklärung informiert werden.
          </Paragraph>
          <Paragraph>
            Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden,
            werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu
            deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers
            gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses
            Onlineangebotes führen.
          </Paragraph>
          <Paragraph>
            Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing
            eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des
            Trackings, über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die
            EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die
            Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers
            erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen
            dieses Onlineangebotes genutzt werden können.
          </Paragraph>
          <Paragraph>Ausschließlich automatisierte Datenverarbeitung</Paragraph>
          <Paragraph>
            Sie haben nach Maßgabe des Art. 22 DSGVO das Recht, nicht einer ausschließlich auf einer
            automatisierten Verarbeitung – einschließlich Profiling – beruhenden Entscheidung
            unterworfen zu werden, die Ihnen gegenüber rechtliche Wirkung entfaltet oder Sie in
            ähnlicher Weise erheblich beeinträchtigt.
          </Paragraph>
          <Paragraph>
            Wir teilen mit, dass wir keine ausschließlich automatisierten Datenverarbeitungen
            durchführen.
          </Paragraph>
          <Paragraph>Löschung von Daten und Archivierungspflichten</Paragraph>
          <Paragraph>
            Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 DSGVO gelöscht
            oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser
            Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten
            gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der
            Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten
            nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich
            sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht
            für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder
            steuerrechtlichen Gründen aufbewahrt werden müssen.
          </Paragraph>
          <Paragraph>
            Nach gesetzlichen Vorgaben erfolgt die Aufbewahrung insbesondere für 6 Jahre gemäß § 257
            Abs. 1 HGB (Handelsbücher, Inventare, Eröffnungsbilanzen, Jahresabschlüsse,
            Handelsbriefe, Buchungsbelege, etc.) sowie für 10 Jahre gemäß § 147 Abs. 1 AO (Bücher,
            Aufzeichnungen, Lageberichte, Buchungsbelege, Handels- und Geschäftsbriefe, Für
            Besteuerung relevante Unterlagen, etc.)
          </Paragraph>
          <Paragraph>Änderungen und Aktualisierungen der Datenschutzerklärung</Paragraph>
          <Paragraph>
            Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu
            informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns
            durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald
            durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine
            sonstige individuelle Benachrichtigung erforderlich wird.
          </Paragraph>
          <Paragraph>Maßgebliche Rechtsgrundlagen</Paragraph>
          <Paragraph>
            Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer
            Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der Datenschutzerklärung nicht
            genannt wird, gilt Folgendes: Die Rechtsgrundlage für die Einholung von Einwilligungen
            ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur
            Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung
            von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die Rechtsgrundlage für die Verarbeitung
            zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und
            die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist
            Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen der betroffenen
            Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten
            erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
          </Paragraph>
          <Paragraph>
            Die Grundlagen für kommerzielle Kommunikationen außerhalb von Geschäftsbeziehungen,
            insbesondere via Post, Telefon, Fax und E-Mail sind im § 7 UWG enthalten.
          </Paragraph>
          <Paragraph>Sicherheit der Datenverarbeitung</Paragraph>
          <Paragraph>
            Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des Stands der
            Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der
            Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und
            Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete
            technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
            zu gewährleisten; Zu den Maßnahmen gehören insbesondere die Sicherung der
            Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen
            Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe,
            der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren
            eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und
            Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz
            personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software
            sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und
            durch datenschutzfreundliche Voreinstellungen berücksichtigt (Art. 25 DSGVO).
          </Paragraph>
          <Paragraph>
            Zu den Sicherheitsmaßnahmen gehört insbesondere die verschlüsselte Übertragung von Daten
            zwischen Ihrem Browser und unserem Server.
          </Paragraph>
          <Paragraph>
            Mitarbeiter werden im Hinblick auf den Datenschutz auf Verschwiegenheit verpflichtet,
            belehrt und instruiert, als auch auf mögliche Haftungsfolgen hingewiesen.
          </Paragraph>
          <Paragraph>Offenlegung und Übermittlung von Daten</Paragraph>
          <Paragraph>
            Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und
            Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, sie an diese übermitteln
            oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer
            gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an
            Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung
            erforderlich ist), Sie eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht
            oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten,
            Webhostern, etc.).
          </Paragraph>
          <Paragraph>
            Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines sog.
            „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf Grundlage des Art. 28
            DSGVO.
          </Paragraph>
          <Paragraph>
            Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln
            oder ihnen sonst den Zugriff gewähren, erfolgt dies insbesondere zu administrativen
            Zwecken als berechtigtes Interesse und darüberhinausgehend auf Grundlage eines
            Auftragsverarbeitungsvertrages.
          </Paragraph>
          <Paragraph>Übermittlungen in Drittländer</Paragraph>
          <Paragraph>
            Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU) oder des
            Europäischen Wirtschaftsraums (EWR)) verarbeiten oder dies im Rahmen der Inanspruchnahme
            von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht,
            erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf
            Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf
            Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich gesetzlicher oder
            vertraglicher Erlaubnisse, verarbeiten oder lassen wir die Daten in einem Drittland nur
            beim Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO verarbeiten. D.h.
            die Verarbeitung erfolgt z.B. auf Grundlage besonderer Garantien, wie der offiziell
            anerkannten Feststellung eines der EU entsprechenden Datenschutzniveaus (z.B. für die
            USA durch das „Privacy Shield“) oder Beachtung offiziell anerkannter spezieller
            vertraglicher Verpflichtungen (so genannte „Standardvertragsklauseln“).
          </Paragraph>
          <Paragraph>
            Abschnitt III – Verarbeitungsprozesse
            <br />
            In der nachfolgenden Darstellung erhalten Sie eine Übersicht der von uns vorgenommenen
            Verarbeitungstätigkeiten, die wir in weitere Tätigkeitsbereiche untergliedert haben.
            Bitte beachten Sie, dass die Tätigkeitsbereiche nur der Orientierung dienen, und dass
            die Verarbeitungstätigkeiten sich überschneiden können (z.B. können dieselben Daten in
            mehreren Verfahren verarbeitet werden).
          </Paragraph>
          <Paragraph>
            Aus Gründen der Übersichtlichkeit und Verständlichkeit finden Sie die sich häufig
            wiederholenden Begrifflichkeiten im Abschnitt IV dieser Datenschutzerklärung.
          </Paragraph>
          <Paragraph>
            Kernbereich der Datenverarbeitung
            <br />
            In diesem Bereich erhalten Sie Informationen zu unseren Kernleistungen und Aufgaben, wie
            z.B. Beantwortung von Anfragen und Erbringung unserer vertraglichen Leistungen sowie der
            mit ihnen verbundenen Nebenaufgaben.
          </Paragraph>
          <Paragraph>
            Vergleichs- und Vermittlungsleistungen
            <br />
            Wir verarbeiten die von den Interessenten im Rahmen der Vergleichsanfrage gemachten
            Angaben für Zwecke der Begründung, Durchführung und ggf. Beendigung eines Vertrages zur
            Vermittlung von bis zu drei Angeboten von Anbietern der von Ihnen angefragten Produkte
            oder Dienstleistungen. Die Angebotsvermittlung ist kostenlos und unverbindlich.
          </Paragraph>
          <Paragraph>
            Die Kontaktdaten der Interessenten nutzen wir, um mit ihnen Ihre Anfrage telefonisch zu
            spezifizieren und um ihnen auf Grundlage der spezifizierten Anfrage passende Anbieter
            vorzuschlagen. Zudem fragen wir bei Interessenten zu einem späteren Zeitpunkt nach, ob
            sie bereits drei Angebote von den ausgewählten Anbietern erhalten haben.
          </Paragraph>
          <Paragraph>
            Mit dem Absenden der Vergleichsanfrage (per Klick auf den „Angebote
            Vergleichen“-Button), erklären sich die Interessenten damit einverstanden, dass wir
            ihren Namen sowie ihre Kontakt- und Anfragedaten verarbeiten dürfen, um ihre Anfrage zu
            bearbeiten, zur Angebotserstellung vorzubereiten und an ausgewählte Anbieter zu
            übermitteln.
          </Paragraph>
          <Paragraph>
            Je nach Verfügbarkeit stellen wir unseren Interessenten (bzw. Kunden) im jeweiligen
            Produktbereich einen kostenlosen Terminvereinbarungs-Service (Dates) zur Verfügung, der
            ihnen eine effektive Kontaktaufnahme mit den Anbietern (bzw. Partnern) ermöglicht.
            Hierbei werden durch uns konkrete Termine zwischen Interessenten und Anbietern
            festgelegt. Basis hierfür ist ein für Zwecke der Vertragsdurchführung erforderlicher
            Abgleich der Terminwünsche (Eingaben) des Interessenten mit den Terminverfügbarkeiten
            der jeweils ausgewählten Anbieter, sowie im Falle nicht zustande gekommener Termine
            einer diesbezüglichen Rückmeldung inklusive Angabe zur Ursache (z. B: Absage und
            Absagegrund) durch die Anbieter.
          </Paragraph>
          <Paragraph>
            Die Einwilligung kann jederzeit formlos, z.B. per E-Mail an hello@developer-lab.de, mit
            Wirkung für die Zukunft widerrufen werden.
          </Paragraph>
          <Paragraph>
            Wir protokollieren die Eingaben in das Vergleichsformular, um das Bestehen des
            Vertragsverhältnisses und Einverständnisse der Interessenten entsprechend den
            gesetzlichen Rechenschaftspflichten (Art. 5 Abs. 2 DSGVO) nachweisen zu können.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Inhaltsdaten,
            Nutzungs-/Metadaten; Im Rahmen der Protokollierung wird der Zeitpunkt des Anforderns der
            Vergleichsanfrage, sowie der Zeitpunkt des Betätigens des Bestätigungslinks und die
            IP-Adresse gespeichert.
            <br />
            Besondere Kategorien personenbezogener Daten: Gesundheitsdaten, sofern diese für die
            Vermittlung erforderlich sind.
            <br />
            Betroffene: Interessenten, Online-User bzw. Website-Besucher.
            <br />
            Zweck der Verarbeitung: Erbringung von Vertragsleistungen, Kundenservice,
            Protokollierung.
            <br />
            Verarbeitungsgrundlagen: Art. 6 Abs. 1 lit. b (Vertrag zur Vermittlung von
            Vergleichsanfragen) und c (Gesetzlich erforderliche Protokollierung/ Archivierung)
            DSGVO.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Die Daten sind zur Begründung und
            Erfüllung der vertraglichen Leistungen sowie Erfüllung gesetzlicher Nachweispflichten
            erforderlich.
            <br />
            Offenlegung extern und Zweck: Anbieter, Zwecks Unterbreitung von Angeboten gegenüber den
            Interessenten im Rahmen des Vergleichs.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Daten werden entsprechend den gesetzlichen Vorgaben und
            vertraglichen Vereinbarungen aufbewahrt (§ 35 BDSG i.V.m. Art. 18 DSGVO). Die Daten
            werden zunächst nur so lange aufbewahrt, wie sie für die Erfüllung der Vertragszwecke
            erforderlich sind. Die Daten werden insbesondere benötigt, um im Rahmen der
            geschäftlichen Tätigkeit übliche und regelmäßig vorkommende Serviceanfragen oder
            Auskünfte zum Vertragsstand zu bearbeiten, zu deren Zwecken die Daten im aktiven System
            für bis zu sechs Monate aufbewahrt werden. Darüber hinaus erfolgt eine Aufbewahrung der
            Daten innerhalb der regelmäßigen gesetzlichen Verjährungsfrist (§§ 195,199 BGB)
            innerhalb eines Zeitraums von drei Jahren ab Ende des Vertragsverhältnisses, sofern
            diese Daten auf Grundlage der bisherigen geschäftlichen Erfahrung und branchenüblicher
            Geschäftsverläufe erforderlich werden könnten, um etwaige Gewährleistung und
            Schadensersatzansprüche oder vergleichbare Beanstandungen sowie Rückfragen bearbeiten
            und erforderliche Nachweise, insbesondere auch im Hinblick auf datenschutzrechtliche
            Zulässigkeit der Verarbeitung der Daten, erbringen zu können. In diesem Fall wird die
            Verarbeitung der Daten alleine auf die vorgenannten Zwecke gemäß § 35 BDSG i.V.m. Art.
            18 DSGVO eingeschränkt. Darüber hinaus erfolgt eine Aufbewahrung der Daten entsprechend
            den gesetzlichen Archivierungsvorgaben im Sinne des Art. 6 Abs. 1 lit. c. DSGVO, d.h.
            für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und 4, Abs. 4 HGB (Bücher,
            Aufzeichnungen, Lageberichte, Buchungsbelege, Handelsbücher, für Besteuerung relevanter
            Unterlagen, etc.) und 6 Jahre gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB
            (Handelsbriefe). Auch im Fall der gesetzlich vorgegebenen Archivierung wird die
            Verarbeitung alleine auf diesen Zweck eingeschränkt. Die Erforderlichkeit der
            Speicherung der Daten ist in laufende Prozesse implementiert und wird regelmäßig
            überprüft.
            <br />
            Registrierungsbereich (Kundenbereich)
            <br />
            Wir bieten einen geschlossenen Bereich für Nutzer an, der eine verifizierte
            Registrierung voraussetzt und den Nutzern die Verwaltung ihrer Anfragen, sowie ihrer
            Daten im Rahmen der zur Verfügung stehenden technischen Funktionen ermöglicht.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Inhaltsdaten,
            Nutzungsdaten, Metadaten
            <br />
            Betroffene: Interessenten, Bestandskunden, Dritte.
            <br />
            Zweck der Verarbeitung: Erbringung von Vertragsleistungen, Kundenservice,
            Verfügbarmachung eines geschlossenen Bereichs.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit. a, Art 6 Abs. 1 lit. b. DSGVO.
            <br />
            Erforderlichkeit / Interesse an der Verarbeitung: Die Daten sind zur Begründung und
            Erfüllung der vertraglichen Leistungen erforderlich.
            <br />
            Offenlegung extern und Zweck: Nein.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Wir bewahren die Daten so lange auf, bis der Nutzer der Verwendung
            seiner Daten innerhalb des Kundenbereichs widerspricht; im Fall der gesetzlichen
            Archivierungspflichten erfolgt die Löschung nach deren Ablauf.
            <br />
            Telefonische Qualifizierung
            <br />
            Wir verarbeiten die von den Interessenten und Kunden im Rahmen der Vergleichsanfrage
            gemachten Angaben für Zwecke der Begründung, Durchführung eines Vertrages zur
            Vermittlung von Angeboten von Anbietern der von Ihnen angefragten Produkte oder
            Dienstleistungen. Es kann hierbei notwendig sein, dass eine telefonische Kontaktaufnahme
            unsererseits erfolgt, um produkt- und dienstleistungsspezifische Besonderheiten mit dem
            Interessenten oder Kunden zu erörtern.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Kommunikations-/Kontaktdaten, Metadaten
            <br />
            Betroffene: Interessenten, Bestandskunden
            <br />
            Zweck der Verarbeitung: Erbringung von Vertragsleistungen, Kundenservice.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit. b. DSGVO.
            <br />
            Erforderlichkeit / Interesse an der Verarbeitung: Die Daten sind zur Begründung und
            Erfüllung der vertraglichen Leistungen sowie Erfüllung erforderlich.
            <br />
            Offenlegung extern und Zweck: Twilio Ireland Limited, 25-28 North Wall Quay Dublin 1,
            Irland; Erbringung und Durchführung der Vertragsleistung.
            <br />
            Besondere Schutzmaßnahmen: Auftragsverarbeitungsvertrag.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Aufbewahrung von Daten der Interessenten entspricht den Angaben
            zur Löschung der Daten im Rahmen der o.a. Verarbeitungstätigkeit “Vergleichs- und
            Vermittlungsleistungen”; im Übrigen löschen wir die Kontaktdaten, sofern deren
            Aufbewahrung nicht mehr erforderlich ist, was im Regelfall 6 Monate nach dem letzten
            Kontakt der Fall ist; im Fall der gesetzlichen Archivierungspflichten erfolgt die
            Löschung nach deren Ablauf.
            <br />
            Beantwortung von Anfragen
            <br />
            Die Angaben in den Anfragen, die wir über unser Kontaktformular und auf anderen Wegen,
            z.B. via E-Mail erhalten, verarbeiten wir, um die Anfragen zu beantworten. Zu diesen
            Zwecken können die Anfragen in unserem Kundenbeziehungsmanagement-System (engl.
            Customer-Relationship-Management, CRM-System) oder in ähnliche Verfahren, die uns zur
            Verwaltung von Anfragen dienen, gespeichert werden.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Inhaltsdaten,
            Nutzungsdaten, Metadaten
            <br />
            Betroffene: Interessenten, Online-User bzw. Website-Besucher, Geschäftspartner, Dritte.
            <br />
            Zweck der Verarbeitung: Beantwortung von Anfragen.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit. b. DSGVO.
            <br />
            Erforderlichkeit / Interesse an der Verarbeitung: Notwendig zur Beantwortung der
            Anfragen.
            <br />
            Offenlegung extern und Zweck: Nein.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Aufbewahrung von Daten der Interessenten entspricht den Angaben
            zur Löschung der Daten im Rahmen der o.a. Verarbeitungstätigkeit “Vergleichs- und
            Vermittlungsleistungen”; im Übrigen löschen wir die Anfragen, sofern deren Aufbewahrung
            nicht mehr erforderlich ist, was im Regelfall 6 Monate nach dem letzten Kontakt der Fall
            ist; im Fall der gesetzlichen Archivierungspflichten erfolgt die Löschung nach deren
            Ablauf.
            <br />
            Betriebswirtschaftliche Analysen und Marktforschung
          </Paragraph>
          <Paragraph>
            Um unser Geschäft wirtschaftlich betreiben, Markttendenzen, Interessenten- und
            Nutzerwünsche erkennen zu können, analysieren wir die uns vorliegenden Daten zu
            Geschäftsvorgängen, Verträgen, Anfragen, etc.
          </Paragraph>
          <Paragraph>
            Zu diesem Zweck führen wir die personenbezogenen Daten der Interessenten aus Anmeldungen
            und Vergleichsanfragen mit den Nutzungsdaten der Kunden zusammen.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Inhaltsdaten,
            Nutzungsdaten, Metadaten.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit. f. DSGVO.
            <br />
            Betroffene: Kunden, Interessenten, Geschäftspartner, Besucher und Nutzer des
            Onlineangebotes.
            <br />
            Zweck der Verarbeitung: Betriebswirtschaftliche Analyse, Marketing, Werbung,
            Marktforschung.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Profilerstellung, First-Party-Cookies.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Steigerung Nutzerfreundlichkeit,
            Optimierung des Angebotes, Betriebswirtschaftlichkeit.
            <br />
            Offenlegung extern und Zweck: Die Analysen dienen alleine uns und werden nicht extern
            offenbart, sofern es sich nicht um anonyme Analysen mit zusammengefassten Werten
            handelt.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Aufbewahrung von Daten der Interessenten entspricht den Angaben
            zur Löschung der Daten im Rahmen der o.a. Verarbeitungstätigkeit “Vergleichs- und
            Vermittlungsleistungen”; im übrigen werden die gesamtbetriebswirtschaftlichen Analysen
            und allgemeine Tendenzbestimmungen nach Möglichkeit anonym erstellt.
            <br />
            Datenschutzhinweise für Bewerber
            <br />
            Dieser Abschnitt klärt die Bewerber über die Verarbeitung Ihrer Daten im Rahmen des
            Bewerbungsverfahrens auf
          </Paragraph>
          <Paragraph>
            Externe Onlinepräsenzen
            <br />
            In diesem Bereich erhalten Sie Informationen zu unseren Datenverarbeitungen im Rahmen
            des Betriebs externer Onlinepräsenzen, z.B. in sozialen Medien.
          </Paragraph>
          <Paragraph>
            ONLINEPRÄSENZEN IN SOZIALEN MEDIEN
            <br />
            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den
            dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere
            Leistungen informieren zu können. Beim Aufruf der jeweiligen Netzwerke und Plattformen
            gelten die Geschäftsbedingungen und die Datenverarbeitungsrichtlinien der jeweiligen
            Betreiber. Soweit nicht anders im Rahmen unserer Datenschutzerklärung angegeben,
            verarbeiten wir die Daten der Nutzer sofern diese mit uns innerhalb der sozialen
            Netzwerke und Plattformen kommunizieren, z.B. Beiträge auf unseren Onlinepräsenzen
            verfassen oder uns Nachrichten zusenden.
          </Paragraph>
          <Paragraph>
            Die innerhalb unseres Onlineangebotes eingesetzten Links/Schaltflächen zu sozialen
            Netzwerken und Plattformen (nachfolgend bezeichnet als &quot;Social-Media&quot;) stellen
            grundsätzlich erst dann einen Kontakt zwischen sozialen Netzwerken und den Nutzern her,
            wenn Nutzer die Links/Schaltflächen anklicken und die jeweiligen Netzwerke, bzw. deren
            Webseiten aufgerufen werden. Diese Funktion entspricht der Wirkungsweise eines regulären
            Online-Links. Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes
            der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer
            Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden
            könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind,
            weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU
            einzuhalten.
          </Paragraph>
          <Paragraph>
            Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke
            verarbeitet. So können z.B. aus dem Nutzungsverhalten und sich daraus ergebenden
            Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können
            wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen
            zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken
            werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das
            Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den
            Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte
            gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen
            sind und bei diesen eingeloggt sind).
          </Paragraph>
          <Paragraph>
            Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer
            berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit
            den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen
            Anbietern um eine Einwilligung in die Datenverarbeitung gebeten werden (d.h. ihr
            Einverständnis z.B. über das Anhaken eines Kontrollkästchens oder Bestätigung einer
            Schaltfläche erklären) ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a.,
            Art. 7 DSGVO.
          </Paragraph>
          <Paragraph>
            Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der
            Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend verlinkten
            Angaben der Anbieter.
          </Paragraph>
          <Paragraph>
            Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir
            darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können.
            Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt
            entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe
            benötigen, dann können Sie sich an uns wenden.
          </Paragraph>
          <Paragraph>Von uns genutzte soziale Netzwerke/ Plattformen:</Paragraph>
          <Paragraph>
            Facebook (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
            Irland) - Datenschutzerklärung: https://www.facebook.com/about/privacy/, Opt-Out:
            https://www.facebook.com/settings?tab=ads und http://www.youronlinechoices.com.
            <br />
            Google/ YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland)
            – Datenschutzerklärung: https://policies.google.com/privacy, Opt-Out:
            https://adssettings.google.com/authenticated.
            <br />
            Instagram (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
            Irland) – Datenschutzerklärung/ Opt-Out: http://instagram.com/about/legal/privacy/.
          </Paragraph>
          <Paragraph>
            Übersicht der Verarbeitung:
            <br />
            Verarbeitete Daten: Bestandsdaten, Kommunikationsdaten, Inhaltsdaten, Nutzungsdaten,
            Metadaten.
            <br />
            Besondere Kategorien personenbezogener Daten: Grundsätzlich nein, außer von Nutzern
            angegeben.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit f. DSGVO.
            <br />
            Betroffene: Nutzer der Social Media Präsenzen (hierzu können Interessenten und
            Geschäftspartner gehören).
            <br />
            Zweck der Verarbeitung: Information und Kommunikation.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Durch Betreiber der jeweiligen Plattformen
            in der Regel: Permanent-Cookies, Tracking, Targeting, Remarketing, Inhalts- und
            verhaltensbezogene Werbung.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Erwartungshaltung der Nutzer, die auf den
            Plattformen aktiv sind, betriebswirtschaftliche Interessen.
            <br />
            Offenlegung extern und Zweck: Gegenüber den sozialen Netzwerken/ Plattformen.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Es gelten die Löschungsregeln der jeweiligen Plattformen.
            <br />
            Webserver und Sicherheit
            <br />
            HOSTING
            <br />
            Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung
            der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität,
            Speicherplatz und Datenbankdienste, Sicherheitsleistungen, technische
            Wartungsleistungen.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten,
            Nutzungsdaten, Meta-/Kommunikationsdaten.
            <br />
            Besondere Kategorien personenbezogener Daten: nein.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            <br />
            Betroffene: Kunden, Interessenten, Besucher des Onlineangebotes.
            <br />
            Besondere Schutzmaßnahmen: Auftragsverarbeitungsvertrag.
            <br />
            Verarbeitung in Drittländern: nein.
            <br />
            Offenlegung extern und Zweck: Name, Adresse, Webhoster.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Sicherheit, betriebswirtschaftliche
            Interessen.
            <br />
            Löschung der Daten: Die Aufbewahrung von Daten der Interessenten entspricht den Angaben
            zur Löschung der Daten im Rahmen der o.a. Verarbeitungstätigkeit “Vergleichs- und
            Vermittlungsleistungen”.
            <br />
            SERVER-LOGS
            <br />
            Der Server auf dem sich dieses Onlineangebot befindet, erhebt bei jedem Zugriff auf das
            Onlineangebot sog. Logfiles, in denen Daten der Nutzer gespeichert werden. Die Daten
            dienen zum einen der statistischen Analyse zur Aufrechterhaltung und Optimierung des
            Serverbetriebs und zum anderen zur Sicherheitszwecken, z.B. um potentielle unbefugte
            Zugriffsversuche zu erkennen.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Nutzungsdaten und Metadaten (Name der abgerufenen Webseite, Datei,
            Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf,
            Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor
            besuchte Seite), IP-Adresse und der anfragende Provider).
            <br />
            Besondere Kategorien personenbezogener Daten: nein.
            <br />
            Verarbeitungsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            <br />
            Betroffene: Kunden, Interessenten, Besucher des Onlineangebotes.
            <br />
            Zweck der Verarbeitung: Optimierung Serverbetrieb und Sicherheitsmonitoring.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Sicherheit, betriebswirtschaftliche
            Interessen.
            <br />
            Verarbeitung in Drittländern: nein.
            <br />
            Löschung von Daten: Nach 7 Tagen ab Erhebung.
            <br />
            CONTENT DELIVERY NETWORK (CDN)
            <br />
            Ein Content Delivery Network ist ein Dienst, mit dessen Hilfe Inhalte unseres
            Onlineangebotes, insbesondere große Mediendateien, wie Grafiken oder Skripte mit Hilfe
            regional verteilter und über das Internet verbundener Server, schneller ausgeliefert
            werden.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Der Datenfluss zwischen Webserver und dem Browser der Nutzer,
            IP-Adresse.
            <br />
            Besondere Kategorien personenbezogener Daten: nein.
            <br />
            Verarbeitungsgrundlagen: Art. 6 Abs. 1 lit. f DSGVO, Art. 28 Abs. 3 S. 1 DSGVO.
            <br />
            Betroffene: Kunden, Interessenten, Geschäftspartner, Beschäftigte und sonstige
            Mitarbeiter, Websitebesucher.
            <br />
            Besondere Schutzmaßnahmen: Auftragsverarbeitungsvertrag.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Nutzerfreundlichkeit,
            Betriebswirtschaftliche Interessen.
            <br />
            Offenlegung extern und Zweck: Cloudflare, Inc., 101 Townsend St, San Francisco, CA
            94107, USA.
            <br />
            Verarbeitung in Drittländern: USA.
            <br />
            Garantie bei Verarbeitung in Drittländern:
            https://www.privacyshield.gov/participant?id=a2zt0000000TTozAAG&amp;status=Active
            <br />
            Löschung der Daten: Nur kurze Zwischenspeicherung im Rahmen der Auslieferung.
            <br />
            Eingebettete Inhalte und Funktionen
            <br />
            In diesem Abschnitt informieren wir Sie, welche Inhalte, Software oder Funktionen (kurz
            „Inhalte“) anderer Anbieter wir im Rahmen unseres Onlineangebotes auf Grundlage des Art.
            6 Abs. 1 lit. f DSGVO einbetten (sog. „Embedding“). Die Einbettung erfolgt, um unser
            Onlineangebot für unsere Nutzer interessanter zu gestalten oder aus rechtlichen Gründen,
            um z.B. Videos oder Social-Media-Beiträge überhaupt innerhalb unseres Onlineangebotes
            präsentieren zu können. Die Einbettung kann ebenfalls dazu dienen, um die
            Geschwindigkeit oder Sicherheit des Onlineangebotes zu verbessern, z.B. wenn
            Softwareelemente oder Schriftarten von anderen Quellen bezogen werden. Zu den
            verarbeiteten Daten gehören in allen Fällen die Nutzungs- und die Metadaten der Nutzer
            und auch die zur Einbettung der Inhalte notwendigerweise an den Anbieter übermittelte
            IP-Adresse, zu den betroffenen Personen die Besucher unseres Onlineangebotes. Zu den
            Kategorien Betroffener gehören die Nutzer unseres Onlineangebotes, Kunden und
            Interessenten. Weitere Erläuterungen sind in den Begriffsdefinitionen, insbesondere zu
            den Funktionsweisen und Schutzmaßnahmen, sind am Ende dieser Datenschutzerklärung zu
            finden. Die Löschung der Daten bestimmt sich nach den Datenschutzbedingungen der
            Anbieter der eingebetteten Inhalte.
          </Paragraph>
          <Paragraph>
            DIENSTE UND INHALTE VON GOOGLE
            <br />
            Wir setzen die folgenden Dienste und Inhalte des Anbieters Google ein: YouTube – Videos;
            Google Maps – Landkarten; Google Fonts – Schriftarten; Google – Recaptcha (Erkennung von
            Bots bei Formulareingaben).
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Nutzungsdaten, Metadaten.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Permanent-Cookies, Third-Party-Cookies,
            interessenbasiertes Marketing, Tracking.
            <br />
            Besondere Schutzmaßnahmen: Pseudonymisierung, Opt-Out.
            <br />
            Opt-Out: http://tools.google.com/dlpage/gaoptout?hl=de,
            https://adssettings.google.com/authenticated.
            <br />
            Offenlegung extern: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland.
            <br />
            Datenschutzerklärung: https://www.google.com/policies/privacy/.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Daten werden entsprechend den Bestimmungen von Google gelöscht.
            <br />
            FUNKTIONEN UND INHALTE VON FACEBOOK
            <br />
            Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Facebook
            eingebunden sein. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und
            Schaltflächen gehören, mit denen Nutzer Ihr Gefallen betreffend die Inhalte kundtun, den
            Verfassern der Inhalte oder unsere Beiträge abonnieren können.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Nutzungsdaten, Metadaten; sofern Nutzer bei dem Dienst registriert
            sind, können die vorstehenden Daten mit deren Profilen und zu diesen bei dem Dienst
            gespeicherten Daten (insbesondere Bestandsdaten) verknüpft werden.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Social Plugins, Permanent-Cookies,
            Third-Party-Cookies, interessenbasiertes Marketing, Tracking, Remarketing.
            <br />
            Opt-Out: https://www.facebook.com/settings?tab=ads,
            http://www.youronlinechoices.com/uk/your-ad-choices/ (EU),
            http://www.aboutads.info/choices (US).
            <br />
            Offenlegung extern: Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
            Dublin 2, Irland.
            <br />
            Datenschutzerklärung: https://www.facebook.com/policy.php.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Daten werden entsprechend den Bestimmungen von Facebook
            gelöscht.
            <br />
            FUNKTIONEN UND INHALTE VON INSTAGRAM
            <br />
            Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Instagram
            eingebunden sein. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und
            Schaltflächen gehören, mit denen Nutzer Ihr Gefallen betreffend die Inhalte kundtun, den
            Verfassern der Inhalte oder unsere Beiträge abonnieren können.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Nutzungsdaten, Metadaten; sofern Nutzer bei dem Dienst registriert
            sind, können die vorstehenden Daten mit deren Profilen und zu diesen bei dem Dienst
            gespeicherten Daten (insbesondere Bestandsdaten) verknüpft werden.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Social Plugins, Permanent-Cookies,
            Third-Party-Cookies, interessenbasiertes Marketing, Tracking, Remarketing.
            <br />
            Offenlegung extern: Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
            Dublin 2 Irland.
            <br />
            Datenschutzerklärung: http://instagram.com/about/legal/privacy/.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Die Daten werden entsprechend den Bestimmungen von Instagram
            gelöscht.
          </Paragraph>
          <Paragraph>
            INFORMATIONSVERSAND DURCH PERSONALISIERTEN NEWSLETTER
            <br />
            Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen mit
            werblichen Informationen (nachfolgend „Newsletter“) nur mit der Einwilligung der
            Empfänger oder einer gesetzlichen Erlaubnis. Die Daten der Abonnenten werden
            protokolliert, da wir dazu verpflichtet sind, Anmeldungen nachzuweisen. Sofern im Rahmen
            der Anmeldung zum Newsletter dessen Inhalte nicht ausdrücklich beschrieben werden,
            enthalten die Newsletter Informationen betreffend unseres Unternehmens sowie unserer
            Leistungen und Angebote, insbesondere für Leistungsbereiche, die der Empfänger als zu
            seinen Interessen gehörend erklärt hat (z.B. wenn ein Nutzer im Rahmen eines
            Einwilligungsvorgangs ein Interesse für Küchen darlegt). Nicht zu werblichen
            Informationen gehören dagegen Benachrichtigungen, die im Rahmen von Vertrags- oder
            Geschäftsbeziehungen versendet werden. Dazu gehört z.B. der Versand von Servicemails mit
            angefragten Vergleichsangeboten oder vergleichbaren Leistungen, technischen oder
            organisatorischen Hinweisen im Rahmen unserer Leistungserbringung, Hinweisen zu
            technischen und rechtlichen Änderungen, Rückfragen zu Aufträgen, etc. Sofern wir Ihre
            Einwilligung zu personalisierten Informationen erhalten haben, werden wir Ihr
            Nutzerverhalten auf unserer Internetpräsenz sowie innerhalb der von uns versendeten
            Newsletter auswerten und Ihrem bei uns geführten Nutzerprofil zuordnen. Wir speichern
            weiterhin Informationen über verwendete Devices, Öffnungs-, Klick- &amp; Leseverhalten
            in E-Mails, sowie Themen-Bereiche, die innerhalb der Internetpräsenz besucht worden
            sind. Diese Informationen werden aus technischen Gründen personenbezogen pro Nutzer
            gespeichert, jedoch nicht genutzt um einzelne Nutzer zu beobachten, sondern um z.B.
            Inhalte und Angebote auf die Nutzer anzupassen. Angaben die wir zusätzlich zu der
            E-Mailadresse erheben sollten (z.B. Name), dienen der persönlichen Ansprache der Nutzer
            oder Anpassung der Inhalte der Newsletter auf die Nutzer.
          </Paragraph>
          <Paragraph>
            Inhalt des Newsletters: Wie im Anmeldeformular angegeben, ansonsten Informationen zu
            unseren Leistungen und unserem Unternehmen.
            <br />
            Verarbeitete Daten: Bestandsdaten (E-Mailadresse), Nutzungsdaten (Anmeldezeitpunkt,
            Bestätigungszeitpunkt Double-Opt-In, IP-Adresse, Öffnung der E-Mail, Zeitpunkt und Ort,
            Zeitpunkt und Klick auf einen Link im Newsletter).
            <br />
            Besondere Kategorien personenbezogener Daten: nein
            <br />
            Verarbeitungsgrundlagen: Art. 6 Abs. 1 lit. a, Art. 7 DSGVO und § 7 Abs. 2 Nr. 3 UWG,
            Abs. 3 (Versand &amp; Erfolgsmessung), Art. 6 Abs. 1 lit. c i.V.m. Art. 7 Abs. 1 DSGVO
            (Protokollierung, Erfolgsmessung, falls kein Teil der Einwilligung)
            <br />
            Betroffene: E-Mailempfänger
            <br />
            Zweck der Verarbeitung: Newsletterversand, Optimierung, Nachweis Einwilligung.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Web-Beacon.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Nur die E-Mailangabe ist für den Versand
            erforderlich, die anderen Angaben sind freiwillig und dienen der Personalisierung und
            Optimierung der Inhalte anhand der Interessen der Nutzer; die Pflicht zum Nachweis der
            Einwilligung ist der Grund für die Protokollierung; Die Erfolgsmessung erfolgt bei
            Nutzern, deren Einwilligung die Erfolgsmessung umfasst, auf Grundlage der Einwilligung
            und sonst auf Grundlage berechtigter Interessen an der Optimierung der Inhalte für die
            Nutzer und auf Grundlage betriebswirtschaftlicher Interessen
            <br />
            Opt-Out: Ein Kündigungslink steht in jedem Newsletter.
          </Paragraph>
          <Paragraph>
            KOMMUNIKATION VIA MESSENGER
            <br />
            Wir setzen zu Zwecken der Kommunikation Messenger-Dienste ein und bitten daher die
            nachfolgenden Hinweise zu der Funktionsfähigkeit der Messenger, der Verschlüsselung,
            Nutzung der Metadaten der Kommunikation und Ihren Widerspruchsmöglichkeiten zu beachten.
            Sie können uns auch auf alternativen Wegen, z.B. via Telefon oder E-Mail kontaktieren.
            Bitte nutzen Sie die Ihnen mitgeteilten Kontaktmöglichkeiten oder nutzen die angegebenen
            Kontaktmöglichkeiten innerhalb unseres Onlineangebotes. Im Fall der Verschlüsselung,
            Ende-zu-Ende von Inhalten (d.h. der Inhalt Ihrer Nachricht und Anhänge), weisen wir
            darauf hin, dass die Kommunikationsinhalte (d.h. der Inhalt der Nachricht und angehängte
            Bilder) Ende-zu-Ende verschlüsselt werden. Das bedeutet, dass der Inhalt der Nachrichten
            nicht einsehbar ist, nicht einmal durch die Messenger-Anbieter selbst. Sie sollten immer
            eine aktuelle Version der Messenger mit aktivierter Verschlüsselung nutzen, damit die
            Verschlüsselung der Nachrichteninhalte sichergestellt ist. Wir weisen unsere
            Kommunikationspartner jedoch zusätzlich darauf hin, dass die Anbieter der Messenger zwar
            nicht den Inhalt sehen, aber in Erfahrung bringen können, dass und wann
            Kommunikationspartner mit uns kommunizieren sowie technische Informationen zum
            verwendeten Gerät der Kommunikationspartner und je nach Einstellungen ihres Gerätes auch
            Standortinformationen (sog. Metadaten) verarbeitet.
          </Paragraph>
          <Paragraph>
            Hinweise zu Rechtsgrundlagen - Sofern wir Kommunikationspartner um eine Erlaubnis vor
            der Kommunikation mit ihnen via Messenger bitten, ist die Rechtsgrundlage unserer
            Verarbeitung ihrer Daten deren Einwilligung. Im Übrigen, falls wir nicht um eine
            Einwilligung bitten und sie z.B. von sich aus Kontakt mit uns aufnehmen, nutzen wir
            Messenger im Verhältnis zu unseren Vertragspartnern sowie im Rahmen der
            Vertragsanbahnung als eine vertragliche Maßnahme und im Fall anderer Interessenten und
            Kommunikationspartner auf Grundlage unserer berechtigten Interessen an einer schnellen
            und effizienten Kommunikation und Erfüllung der Bedürfnisse unser Kommunikationspartner
            an der Kommunikation via Messengern. Ferner weisen wir Sie darauf hin, dass wir die uns
            mitgeteilten Kontaktdaten ohne Ihre Einwilligung nicht erstmalig an die Messenger
            übermitteln.
          </Paragraph>
          <Paragraph>
            Widerruf, Widerspruch und Löschung - Sie können jederzeit eine erteilte Einwilligung
            widerrufen oder der Kommunikation mit uns via Messenger jederzeit widersprechen. Im Fall
            der Kommunikation via Messenger löschen wir die Nachrichten entsprechend unseren
            generellen Löschrichtlinie (d.h. z.B. wie oben beschrieben nach Ende vertraglicher
            Beziehungen, Archivierungsvorgaben, etc.) und sonst sobald wir davon ausgehen können,
            etwaige Auskünfte der Kommunikationspartner beantwortet zu haben, wenn kein Rückbezug
            auf eine vorhergehende Konversation zu erwarten ist und der Löschung keine gesetzlichen
            Aufbewahrungspflichten entgegenstehen.
          </Paragraph>
          <Paragraph>
            Verarbeitete Daten: Bestandsdaten, Kontaktdaten, Nutzungsdaten, Vertragsdaten,
            Inhaltsdaten
            <br />
            Verarbeitungsgrundlagen: Art. 6 Abs. 1 lit. a, Art. 7 DSGVO bei Einwilligung, Art. 6
            Abs. 1 lit. b DSGVO bei Kontaktaufnahme im Rahmen der Vertragsabwicklung, Art. 6 Abs. 1
            lit. f DSGVO in Verbindung mit gesetzlichen Vorgaben für werbliche Kommunikationen.
            <br />
            Betroffene: Interessenten, Geschäftspartner.
            <br />
            Zweck der Verarbeitung: Werbliche Kommunikation.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Die Kontaktaufnahme erfolgt nur mit
            Einwilligung der Kontaktpartner oder im Rahmen der gesetzlichen Erlaubnisse.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Information und betriebswirtschaftliche
            Interessen.
            <br />
            Offenlegung extern und Zweck: Facebook-Messenger: Facebook-Messenger mit Ende-zu-Ende
            Verschlüsselung; Dienstanbieter: https://www.facebook.com., Facebook Ireland Ltd., 4
            Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland, Mutterunternehmen: Facebook,
            1 Hacker Way, Menlo Park, CA 94025, USA; Website: https://www.facebook.com.;
            Datenschutzerklärung: https://www.facebook.com/about/privacy.; Privacy Shield
            (Gewährleistung Datenschutzniveau bei Verarbeitung von Daten in den USA):
            https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&amp;status=Active.;
            Widerspruchsmöglichkeit (Opt-Out): https://www.facebook.com/settings?tab=ads... Hinweis:
            Die Ende-zu-Ende-Verschlüsselung des Facebook-Messengers setzt eine Aktivierung voraus.
            <br />
            Verarbeitung in Drittländern: USA.
            <br />
            Löschung der Daten: Mit Widerspruch/ Widerruf oder Wegfall der Berechtigungsgrundlagen
            der Kontaktaufnahme; die Aufbewahrung von Daten der Interessenten entspricht den Angaben
            zur Löschung der Daten im Rahmen der o.a. Verarbeitungstätigkeit “Vergleichs- und
            Vermittlungsleistungen”.
          </Paragraph>
          <Paragraph>
            KOMMUNIKATION VIA POST, E-MAIL, FAX ODER TELEFON
            <br />
            Versand von Informationsmaterial, telefonische Kontaktaufnahme zur Abwicklung von
            Vergleichs- und Vermittlungsverträgen.
            <br />
            Verarbeitete Daten: Bestandsdaten, Kontaktdaten, Vertragsdaten, Inhaltsdaten.
            <br />
            Besondere Kategorien personenbezogener Daten: nein, außer Gesundheitsdaten, die Teil der
            Vergleichs- und Vermittlungsleistung sind.
            <br />
            Verarbeitungsgrundlagen: Art. 6 Abs. 1 lit. a, Art. 7 DSGVO bei Einwilligung, Art. 6
            Abs. 1 lit. b DSGVO bei Kontaktaufnahme im Rahmen der Vertragsabwicklung, Art. 6 Abs. 1
            lit. f DSGVO in Verbindung mit gesetzlichen Vorgaben für werbliche Kommunikationen.
            <br />
            Betroffene: Interessenten, Geschäftspartner.
            <br />
            Zweck der Verarbeitung: Werbliche Kommunikation.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Die Kontaktaufnahme erfolgt nur mit
            Einwilligung der Kontaktpartner oder im Rahmen der gesetzlichen Erlaubnisse.
            <br />
            Erforderlichkeit / Interesse an Verarbeitung: Information und betriebswirtschaftliche
            Interessen.
            <br />
            Offenlegung extern und Zweck: Nein.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: Mit Widerspruch/ Widerruf oder Wegfall der Berechtigungsgrundlagen
            der Kontaktaufnahme; die Aufbewahrung von Daten der Interessenten entspricht den Angaben
            zur Löschung der Daten im Rahmen der o.a. Verarbeitungstätigkeit “Vergleichs- und
            Vermittlungsleistungen”.
            <br />
            Optimierung und Sicherheit
            <br />
            In diesem Abschnitt erhalten Sie Informationen zu der von uns zu Zwecken der Optimierung
            unseres Onlineangebotes durchgeführten Datenverarbeitung. Sie dient uns vor allem dazu,
            die Nutzerfreundlichkeit und die Funktionsfähigkeit unseres Onlineangebotes zu
            verbessern.
          </Paragraph>
          <Paragraph>
            <br />
            FACEBOOK PIXEL
            <br />
            Wir setzen das Facebook-Pixel zur Zielgruppenbildung und Erfolgsmessung der von uns bei
            Facebook geschalteten Werbeanzeigen ein.
            <br />
            Verarbeitete Daten: Nutzungsdaten, Metadaten; sofern Nutzer bei Facebook registriert
            sind, werden die Daten mit deren Facebook-Profilen und zu diesen gehörenden Daten
            (insbesondere Bestandsdaten) verknüpft.
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Permanent-Cookies, Third-Party-Cookies,
            Tracking, Conversion-Messung, Interessensbasiertes Marketing, Profiling, Custom
            Audiences from Website.
            <br />
            Besondere Schutzmaßnahmen: Verschlüsselte Kommunikation zwischen Facebook und unserem
            Onlineangebot.
            <br />
            Opt-Out: https://www.facebook.com/settings?tab=ads,
            http://www.youronlinechoices.com/uk/your-ad-choices/ (EU),
            http://www.aboutads.info/choices (US).
            <br />
            Offenlegung extern: Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour,
            Dublin 2, Irland.
            <br />
            Datenschutzerklärung: https://www.facebook.com/policy.php.
            <br />
            Verarbeitung in Drittländern: Nein
            <br />
            Löschung der Daten: Die Löschung der Daten wird durch Facebook vorgenommen und erfolgt,
            wenn die Daten der Kunden im Rahmen der Kündigung gelöscht werden.
            <br />
            GOOGLE TAG MANAGER
            <br />
            Google Tag Manager ist eine Lösung, mit der wir sog. Website-Tags über eine Oberfläche
            verwalten können (und so z.B. Google Analytics sowie andere Google-Marketing-Dienste in
            unser Onlineangebot einbinden). Der Tag Manager selbst (welches die Tags implementiert)
            verarbeitet keine personenbezogenen Daten der Nutzer. Im Hinblick auf die Verarbeitung
            der personenbezogenen Daten der Nutzer wird auf die folgenden Angaben zu den
            Google-Diensten verwiesen. Nutzungsrichtlinien:
            https://www.google.com/intl/de/tagmanager/use-policy.html.
          </Paragraph>
          <Paragraph>
            GOOGLE ANALYTICS
            <br />
            Wir setzen Google Analytics zu Zwecken der Reichweitenmessung und Zielgruppenbildung
            ein.
            <br />
            Verarbeitete Daten: Nutzungsdaten, Metadaten, Kunden-ID bei uns (Google erhält die
            Kunden-ID nur als ein pseudonymes Datum ohne die dazu gehörenden Bestandsdaten, wie
            Namen, Adresse oder E-Mail des Kunden).
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Permanent-Cookies, Third-Party-Cookies,
            Tracking, interessenbasiertes Marketing, Profiling, Custom Audiences, Remarketing.
            <br />
            Besondere Schutzmaßnahmen: Pseudonymisierung, IP-Masking, Abschluss
            Auftragsverarbeitungsvertrag, Opt-Out.
            <br />
            Opt-Out: http://tools.google.com/dlpage/gaoptout?hl=de (Browser-Add-On Google
            Analytics), https://adssettings.google.com/,
            https://adssettings.google.com/authenticated (Einstellung für Werbeanzeigen).
            <br />
            Offenlegung extern: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland.
            <br />
            Datenschutzerklärung: https://www.google.com/policies/privacy/
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: 14 Monate.
          </Paragraph>
          <Paragraph>
            GOOGLE ADWORDS
            <br />
            Wir setzen Google AdWords ein, um den Erfolg der von uns bei Google geschalteten
            Werbeanzeigen zu messen.
            <br />
            Verarbeitete Daten: Nutzungsdaten, Metadaten, Kunden-ID bei uns (Google erhält die
            Kunden-ID nur als ein pseudonymes Datum ohne die dazu gehörenden Bestandsdaten, wie
            Namen, Adresse oder E-Mail des Kunden).
            <br />
            Art, Umfang, Funktionsweise der Verarbeitung: Permanent-Cookies, Third-Party-Cookies,
            Tracking, Conversion-Messung, Interessensbasiertes Marketing, Profiling.
            <br />
            Besondere Schutzmaßnahmen: Pseudonymisierung, IP-Masking, Abschluss
            Auftragsverarbeitungsvertrag, Opt-Out.
            <br />
            Opt-Out: http://tools.google.com/dlpage/gaoptout?hl=de (Browser-Add-On Google
            Analytics), https://adssettings.google.com/,
            https://adssettings.google.com/authenticated (Einstellung für Werbeanzeigen).
            <br />
            Offenlegung extern: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Irland.
            <br />
            Datenschutzerklärung: https://www.google.com/policies/privacy/.
            <br />
            Verarbeitung in Drittländern: Nein.
            <br />
            Löschung der Daten: 14 Monate.
          </Paragraph>
          <Paragraph>
            Aggregierte Daten – Aggregierte Daten sind zusammengefasste Daten, die keinen
            Rückschluss auf eine Person erlauben und daher nicht personenbezogen sind. Zum Beispiel
            können die Besuchszeiten auf einer Website als Durchschnittswerte gespeichert werden.
            <br />
            Anonyme Daten – Anonymität liegt vor, wenn eine Person anhand eines Datums durch den
            Verantwortlichen mit den ihm zur Verfügung stehenden Mitteln nicht zumindest
            identifizierbar ist. Insbesondere können aggregierte Daten anonym sein.
            <br />
            Auftragsverarbeitung/-Auftragsverarbeiter – Als „Auftragsverarbeiter“ wird eine
            natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die
            personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet, bezeichnet.
            <br />
            Besondere Kategorien personenbezogener Daten – Als solche werden Daten bezeichnet, aus
            denen die rassische und ethnische Herkunft, politische Meinungen, religiöse oder
            weltanschauliche Überzeugungen oder die Gewerkschaftszugehörigkeit hervorgehen, sowie
            genetische Daten, biometrische Daten zur eindeutigen Identifizierung einer natürlichen
            Person, Gesundheitsdaten oder Daten zum Sexualleben oder der sexuellen Orientierung
            einer natürlichen Person.
            <br />
            Betroffene Person/ Betroffene – Siehe „personenbezogenes Datum“.
            <br />
            Clicktracking – „Clicktracking“ erlaubt es die Bewegungen der Nutzer innerhalb eines
            gesamten Onlineangebotes zu überblicken. Da die Ergebnisse dieser Tests genauer sind,
            wenn die Interaktion der Nutzer über einen gewissen Zeitraum verfolgt werden kann (z.B.
            schauen können, ob ein Nutzer gerne wiederkehrt), werden für diese Test-Zwecke im
            Regelfall Cookies auf den Rechnern der Nutzer gespeichert.
            <br />
            Conversion – „Conversion “, bzw. “Conversion Messung” bezeichnet ein Verfahren, mit dem
            die Wirksamkeit von Marketingmaßnahmen festgestellt werden kann. Dazu wird im Regelfall
            ein Cookie auf den Geräten der Nutzer innerhalb der Websites, auf denen die
            Marketingmaßnahmen erfolgen gespeichert und dann erneut auf der Zielwebsite abgerufen
            (z.B. können wir so nachvollziehen, ob die von uns auf anderen Webseiten geschalteten
            Anzeigen erfolgreich waren).
            <br />
            Cookies – Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer
            gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert
            werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf
            dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines
            Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder
            „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer
            ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann
            z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status innerhalb
            einer Community gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies
            bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B.
            der Login-Status in einer Community gespeichert werden, wenn die Nutzer diese nach
            mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der
            Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke (s. z.B.
            Remarketing) verwendet werden. Als „Third-Party-Cookie“ werden Cookies von anderen
            Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden
            (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).
          </Paragraph>
          <Paragraph>
            Custom Audiences – Von „Custom Audiences“ (bzw. „benutzerdefinierten Zielgruppen“)
            spricht man, wenn Zielgruppen für Werbezwecke, z.B. Einblendung von Werbeanzeigen
            bestimmt werden. So kann z.B. anhand des Interesses eines Nutzers an bestimmten
            Produkten oder Themen im Internet geschlussfolgert werden, dass dieser Nutzer sich für
            Werbeanzeigen für ähnliche Produkte oder den Onlineshop, in dem er die Produkte
            betrachtet hat, interessiert. Von „Lookalike Audiences“ (bzw. ähnlichen Zielgruppen)
            spricht man wiederum, wenn die als geeignet eingeschätzten Inhalte Nutzern angezeigt
            werden, deren Profile, bzw. Interessen mutmaßlich den Nutzern zu denen die Profile
            gebildet wurden, entsprechen. Zur Zwecken der Bildung von Custom Audiences und Lookalike
            Audiences werden im Regelfall Cookies und Web-Beacons eingesetzt. „Custom Audiences from
            Website“ bedeutet, dass die Zielgruppen anhand der Besucher der eigenen Webseite
            gebildet werden. „Custom Audiences from File“ bedeutet, dass z.B. eine Liste mit
            E-Mailadressen bei dem jeweiligen Werbenetzwerk oder Plattform hochgeladen werden, um
            die Zielgruppen zu bilden.
            <br />
            Demografische Daten – Demografische Daten sind allgemeine Informationen über
            Personengruppen oder Personen, z.B. Merkmale wie Alter, Geschlecht, Wohnort und soziale
            Merkmale wie Beruf, Familienstand oder Einkommen. Demografische Daten werden im Rahmen
            der Reichweitenmessung und im Online-Marketing für Zwecke des interessenbasierten
            Marketings erhoben oder für betriebswirtschaftliche Analysen, die z.B. zur Bestimmung
            der Zielgruppen verwendet werden.
            <br />
            Dritte/r&nbsp; – Als „Dritter“ wird eine natürliche oder juristische Person, Behörde,
            Einrichtung oder andere Stelle, außer der betroffenen Person, dem Verantwortlichen, dem
            Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des
            Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten
            zu verarbeiten, bezeichnet.
            <br />
            Drittland – Als Drittländer sind Staaten zu verstehen, in denen die DSGVO kein
            unmittelbar geltendes Recht ist, d.h. grundsätzlich Staaten, die nicht der Europäischen
            Union (EU) oder dem Europäischen Wirtschaftsraum (EWR) angehören.
            <br />
            Einwilligung – Eine „Einwilligung“ der betroffenen Person ist jede freiwillig für den
            bestimmten Fall, in informierter Weise und unmissverständlich abgegebene
            Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden
            Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung
            der sie betreffenden personenbezogenen Daten einverstanden ist.
            <br />
            Einbettung – Siehe „Embedding“.
            <br />
            Embedding – Beim Embedding (auch „Einbettung“) werden fremde Inhalte oder
            Software-Funktionen (siehe Plugins) in die eigene Onlinepräsenz so eingebunden, dass sie
            auf dieser Onlinepräsenz dargestellt, bzw. ausgeführt werden. Dabei wird keine Kopie des
            Inhalts erstellt, da er von dem ursprünglichen Server aufgerufen wird (z.B. Videos,
            Bilder, Beiträge auf sozialen Netzwerken, Widgets mit Bewertungen). Beim Embedding ist
            es technisch notwendig, dass der Anbieter der Inhalte die IP-Adresse der Nutzer erhebt,
            um den eingebetteten Inhalt im Browser der Nutzer auszugeben. Ferner können durch den
            Inhaltsanbieter z.B. Cookies auf den Geräten der Nutzer gespeichert werden.
            <br />
            Erweiterter Abgleich – Der „erweiterte Abgleich“ ist eine Option des Facebook-Pixels,
            die bedeutet, dass Bestandsdaten wie Telefonnummern, E-Mailadressen oder Facebook-IDs
            der Nutzer zur Bildung von Zielgruppen für Facebook-Ads an Facebook verschlüsselt
            übermittelt und nur zu diesem Zweck verwendet werden.
            <br />
            Fehler-Tracking – Beim Fehlertracking wird z.B. fehlerhaft ausgeführter Programmcode
            erkannt, um diesen zu beseitigen und so die Funktionsfähigkeit und Sicherheit von
            Onlineangeboten zu gewährleisten.
            <br />
            First-Party Cookies – Siehe „Cookies”.
            <br />
            Heatmaps – &quot;Heatmaps&quot; sind Mausbewegungen der Nutzer, die zu einem Gesamtbild
            zusammengefasst werden, mit dessen Hilfe z.B. erkannt werden kann, welche
            Webseitenelemente bevorzugt angesteuert werden und welche Webseitenelemente Nutzer
            weniger bevorzugen.
            <br />
            IP-Adresse&nbsp; – Die IP-Adresse („IP“ steht für Internetprotokoll) ist eine
            Zahlenfolge anhand der mit dem Internet verbundene Geräte identifiziert werden können.
            Wenn ein Nutzer eine Website auf einem Server aufruft, dann teilt er dem Server seine
            IP-Adresse mit. Der Server weiß dann, dass er die Datenpakete mit dem Inhalt der Website
            an diese Adresse schicken muss.
            <br />
            IP-Masking – Als „IP-Masking” wird eine Methode bezeichnet, bei der das letzte Oktett,
            d.h. die letzten beiden Zahlen einer IP-Adresse gelöscht werden, damit die IP-Adresse
            nicht mehr der eindeutigen Identifizierung einer Person dienen können. Daher ist das
            IP-Masking ein Mittel zur Pseudonymisierung von Verarbeitungsverfahren, insbesondere im
            Onlinemarketing.
            <br />
            Interessenbasiertes Marketing bzw. Interessens und verhaltensbezogene Werbung – Von
            interessens- und/oder verhaltensbezogener Werbung spricht man, wenn Profiling eingesetzt
            wird, um das potentielle Interesse von Nutzern an Werbeanzeigen zu bestimmen (englisch
            „Online Behavioral Advertising“, kurz OBA). Zu diesen Zwecken werden im Regelfall
            Cookies und Web-Beacons eingesetzt.
            <br />
            Lookalike Audiences – Siehe Custom Audiences.
            <br />
            Opt-in – Der Begriff „Opt-in“ bedeutet so viel wie Anmeldung. Wird eine Anmeldung (z.B.
            durch Eingabe einer E-Mailadresse in ein Onlineformular-Feld) durch die Zusendung einer
            Bestätigungsmail an den Inhaber der E-Mailadresse bestätigt, spricht man von einem
            Double-Opt-In (DOI).
            <br />
            Opt-Ou – Der Begriff Opt-Out bedeutet so viel wie Abmeldung und kann z.B. einen
            Widerspruch (z.B. gegen Tracking) oder eine Kündigung (z.B. bei Newsletterabonnements)
            darstellen.
            <br />
            Opt-Out-Cookie – Ein “Opt-Out-Cookie” ist eine kleine Datei (siehe „Cookies“) die in
            Ihrem Browser gespeichert wird und in der vermerkt wird, dass Sie z.B. ein
            Tracking-Dienst Ihre Daten nicht verarbeiten soll. Das „Opt-Out-Cookie“ gilt nur für den
            Browser, in dem es gespeichert wurde, also in dem Sie den Opt-Out-Link geklickt haben.
            Werden Cookies in diesem Browser gelöscht, dann müssen Sie den Opt-Out-Link erneut
            klicken. Ferner kann ein Opt-Out-Link nur auf die Domain beschränkt sein, auf der der
            Opt-Out-Link klickt wurde.
            <br />
            Permanent Cookies – Siehe „Cookies”.
            <br />
            Personenbezogenes Datum/ Personenbezug – „Personenbezogene Daten“ sind alle
            Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person
            (im Folgenden „betroffene Person“) beziehen; als identifizierbar wird eine natürliche
            Person angesehen, die direkt oder indirekt, insbesondere mittels Zuordnung zu einer
            Kennung wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer Online-Kennung
            (z.B. Cookie) oder zu einem oder mehreren besonderen Merkmalen identifiziert werden
            kann, die Ausdruck der physischen, physiologischen, genetischen, psychischen,
            wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen Person sind.
            <br />
            Plugins/ Social Plugins – Als Plugins (bzw. „Social Plugins“ im Fall von sozialen
            Funktionen) werden fremde Software-Funktionen bezeichnet, die in das Onlineangebot
            eingebunden werden. Sie können z.B. der Ausgabe von Interaktionselementen (z.B., einer
            „Gefällt mir“-Schaltfläche) oder von Inhalten (z.B. externe Kommentierfunktion oder
            Beiträge in sozialen Netzwerken) dienen.
            <br />
            Profiling – Als „Profiling“ wird jede Art der automatisierten Verarbeitung
            personenbezogener Daten bezeichnet, die darin besteht, dass diese personenbezogenen
            Daten verwendet werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche
            Person beziehen (je nach Art des Profilings gehören dazu Informationen betreffend das
            Alter, das Geschlecht, Standortdaten und Bewegungsdaten, Interaktion mit Webseiten und
            deren Inhalten, Einkaufsverhalten, sozialen Interaktionen mit anderen Menschen), zu
            analysieren, zu bewerten oder um sie vorherzusagen (z.B. die Interessen an bestimmten
            Inhalten oder Produkten, das Klickverhalten auf einer Webseite oder den Aufenthaltsort).
            Zu Zwecken des Profilings werden häufig Cookies und Web-Beacons eingesetzt.
            <br />
            Privacy Shield – Der EU-US Privacy Shield ist eine informelle Absprache auf dem Gebiet
            des Datenschutzrechts, die zwischen der Europäischen Union und den Vereinigten Staaten
            von Amerika ausgehandelt wurde. Sie besteht aus einer Reihe von Zusicherungen der
            US-amerikanischen Regierung und einem Beschluss der EU-Kommission. Unternehmen, die
            unter dem Privacy Shield zertifiziert sind, bietet eine Garantie, das europäische
            Datenschutzrecht einzuhalten (https://www.privacyshield.gov).
            <br />
            Pseudonymisierung/ Pseudonyme – Als „Pseudonymisierung“ wird bezeichnet, dass die
            Verarbeitung personenbezogener Daten in einer Weise gewährleistet ist, dass die
            personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen nicht mehr einer
            spezifischen betroffenen Person zugeordnet werden können, sofern diese zusätzlichen
            Informationen gesondert aufbewahrt werden bzw. gewährleistet ist, dass die
            personenbezogenen Daten nicht einer identifizierten oder identifizierbaren natürlichen
            Person zugewiesen werden; D.h. wenn in einem Cookie zwar ein genaues Interessensprofil
            des Computernutzers gespeichert wird (quasi ein „Marketing-Avatar“), aber nicht der Name
            des Nutzers, dann werden seine Daten pseudonym verarbeitet. Werden sein Name, z.B. als
            Teil seiner E-Mailadresse oder seine IP-Adresse gespeichert, dann ist die Verarbeitung
            grundsätzlich nicht mehr pseudonym.
            <br />
            Reichweitenmessung – Die Reichweitenmessung dient der Auswertung der Besucherströme
            eines Onlineangebotes und kann deren Verhalten, Interessen oder demographische
            Informationen, wie z.B. das Alter oder das Geschlecht umfassen. Mit Hilfe der
            Reichweitenanalyse können z.B. Websiteinhaber erkennen, welche Arten von Menschen zu
            welcher Zeit ihre Webseite besuchen und für welche Inhalte sie sich interessieren.
            Dadurch können sie z.B. die Inhalte der Webseite besser auf die Bedürfnisse ihrer
            Besucher optimieren. Zu Zwecken der Reichweitenanalyse werden häufig Cookies und
            Web-Beacons eingesetzt.
            <br />
            Remarketing/ Retargeting – Vom „Remarketing“, bzw. „Retargeting“ spricht man, wenn z.B.
            zu Werbezwecken vermerkt wird, für welche Produkte sich ein Nutzer auf einer Webseite
            interessiert hat, um den Nutzer auf anderen Webseiten an diese Produkte, z.B. in
            Werbeanzeigen, zu erinnern. Zu Zwecken des Profilings werden im Regelfall Cookies
            eingesetzt.
            <br />
            Session Cookies – Siehe „Cookies”.
            <br />
            Single-Sign-On – Als „Single-Sign-On“ oder „Single-Sign-On-Authentifizierung“ wird ein
            Verfahren bezeichnet, dass es den Nutzern erlaubt, sich mit Hilfe eines Nutzerkontos bei
            einem Onlineangebot, auch bei anderen Onlineangeboten anzumelden. Voraussetzung der
            Single-Sign-On-Authentifizierung ist, dass Nutzer bei dem jeweiligen
            Single-Sign-On-Anbieter registriert sind und die erforderlichen Zugangsdaten auf dem
            dafür vorgesehenen Webformular eingeben. Die Authentifizierung erfolgt direkt bei dem
            jeweiligen Single-Sign-On-Anbieter. Im Rahmen einer solchen Authentifizierung erhalten
            wir eine Nutzer-ID mit der Information, dass der Nutzer unter dieser Nutzer-ID beim
            jeweiligen Single-Sign-On-Anbieter eingeloggt ist und eine für uns nicht weiter nutzbare
            ID (sog „User Handle“). Ob wir weitere Daten übermittelt erhalten, hängt allein von dem
            genutzten Single-Sign-On-Verfahren ab, den gewählten Datenfreigaben im Rahmen der
            Authentifizierung und zudem, welche Daten Nutzer in den Privatsphäre- oder sonstigen
            Einstellungen des Nutzerkontos beim Single-Sign-On-Anbieter freigegeben haben. Es können
            je nach Single-Sign-On-Anbieter und der Wahl der Nutzer verschiedene Daten sein, in der
            Regel sind es die E-Mail-Adresse und der Benutzername. Das im Rahmen des
            Single-Sign-On-Verfahrens eingegebene Passwort ist für uns weder einsehbar, noch wird es
            von uns gespeichert. Nutzer werden gebeten zu beachten, dass deren, bei uns gespeicherte
            Angaben automatisch mit ihrem Nutzerkonto beim Single-Sign-On-Anbieter abgeglichen
            werden können, dies jedoch nicht immer möglich ist oder tatsächlich erfolgt. Ändern sich
            z.B. die E-Mailadressen der Nutzer, müssen Nutzer diese manuell in Ihrem Nutzerkonto bei
            uns ändern. Sollten Nutzer sich einmal entscheiden, die Verknüpfung ihres Nutzerkontos
            beim Single-Sign-On-Anbieter nicht mehr für das Single-Sign-On-Verfahren nutzen zu
            wollen, müssen Sie diese Verbindung innerhalb ihres Nutzerkontos beim
            Single-Sign-On-Anbieter aufheben. Möchten Nutzer deren Daten bei uns löschen, müssen sie
            Ihre Registrierung bei uns kündigen.
            <br />
            Third-Party Cookies – Siehe „Cookies”.
            <br />
            Tracking – Vom „Tracking“ spricht man, wenn das Verhalten von Nutzern über mehrere
            Onlineangebote hinweg nachvollzogen werden kann, z.B. zu Zwecken des Remarketings. Die
            im Hinblick auf die genutzten Onlineangebote gesammelten Verhaltens- und
            Interessensinformationen werden als Nutzer-Profile in Cookies oder auf Servern der
            Marketingdienstleister (z.B. Google oder Facebook) gespeichert.
            <br />
            Verantwortlicher – Als „Verantwortlicher“ wird die natürliche oder juristische Person,
            Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die
            Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet, bezeichnet.
            <br />
            Verarbeitung – „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren
            ausgeführten Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
            personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch jeden Umgang mit
            Daten.
            <br />
            Web-Beacons – Als „Web Beacons“ (bzw. als „Pixel“, „Messpixel“ oder „Zählpixel“
            bezeichnet) werden kleine, pixelgroße Grafiken bezeichnet, die in Webseiten oder
            HTML-E-Mails eingebunden werden. Derart erlauben Sie z.B. festzustellen, ob eine E-Mail
            geöffnet wurde (zumindest, wenn die Bilddarstellung in E-Mails aktiviert ist) oder wie
            oft eine Website von einem Nutzer aufgerufen wird.
            <br />
            Widgets – Siehe Embedding.
            <br />
            Zählpixel – Siehe Web-Beacons.
            <br />
            Abschnitt V – Weitere Informationen
            <br />
            Bitte beachten Sie, dass diese Datenschutzerklärung ausschließlich für Internetseiten
            von eFab gilt. Soweit unsere Seiten Links auf Internetseiten Dritter enthalten, gilt
            unsere Datenschutzerklärung nicht für diese. Bitte informieren Sie sich auf den
            jeweiligen Seiten über die dort geltenden Datenschutzbestimmungen.
          </Paragraph>
          <Paragraph>
            Weitere Angaben zu uns finden Sie in unserem Impressum: www.developer-lab.de/impressum/.
          </Paragraph>
          <Paragraph>
            Falls noch Fragen offen sind oder Sie Anregungen und Wünsche haben, können Sie sich
            jederzeit mit einer E-Mail hello@developer-lab.de wenden.
          </Paragraph>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

export default DataProtection;
