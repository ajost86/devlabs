import React, { useEffect } from 'react';

import Footer from 'components/footer';
import NavbarInner from 'components/navbar_inner';
import { Heading2, Heading4, Paragraph } from 'assets/styles/typography';

import { Section, Container } from './style';

function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarInner />
      <Section id="terms-and-conditions">
        <Container>
          <Heading2 textAlign="left">AGB</Heading2>
          <Heading4>Allgemeine Geschäfts­bedingungen und Widerrufs­belehrung</Heading4>

          <Paragraph>
            Die eFab UG (haftungsbeschränkt), vertreten durch Christoph Lange und Erik Waldeck,
            Unterherrnhauserstraße 3a, 82547 Eurasburg (nachfolgend &quot;eFab&quot;) bietet ein
            Portal für Vermittlungsleistungen an.
          </Paragraph>
          <Paragraph>
            Nutzer (nachfolgend “Kunde”) können Vermittlungsleistungen für Produkte aufgeben. eFab
            ermittelt anschließend auf Grundlage der Produktanfragen den passenden Anbieter
            (nachfolgend “Anbieter” oder “Partner”) aus und vermittelt den Kunden an den Anbieter.
          </Paragraph>
          <Paragraph>
            Die nachfolgenden Allgemeinen Geschäftsbedingufngen (nachfolgend “AGB”) gelten für das
            Vertragsverhältnis zwischen eFab und den Kunden. Die AGB gelten ferner für das
            Vertragsverhältnis zwischen dem Kunden und dem Partner von eFab
          </Paragraph>
          <Paragraph>
            Alle verwendeten Begriffe gelten unabhängig von der Sprachform sowohl für weibliche,
            männliche oder diverse Kunden.
          </Paragraph>
          <Paragraph>
            <strong>Inhaltsverzeichnis</strong>
            <br />
            2. Stellen der Vergleichsanfrage
            <br />
            3. Erhalt der Angebote
            <br />
            4. Weitergabe von Daten
            <br />
            5. Pflichten des Kunden
            <br />
            6. Gewährleistung und Leistungseinschränkungen
            <br />
            7. Haftungsbeschränkung
            <br />
            8. Datenschutz
            <br />
            9. Schlussbestimmungen
          </Paragraph>
          <Paragraph>
            <strong>1. Allgemeine Bestimmungen der AGB</strong>
            <br />
            1. Geltungsbereich
            <br />
            1.1. Es gelten ausschließlich die nachfolgenden Allgemeinen Geschäftsbedingungen in
            ihrer zum Zeitpunkt der Anfrage gültigen Fassung. Abweichende Bedingungen des Kunden
            werden nicht anerkannt, es sei denn, eFab stimmt ihrer Geltung ausdrücklich zu. Ein
            fehlender Widerspruch fremder AGB stellt keine Zustimmung dar.
            <br />
            1.2. Verbraucher im Sinne dieser AGB und der Widerrufsbelehrung ist jede natürliche
            Person, die ein Rechtsgeschäft zu einem Zwecke abschließt, der überwiegend weder ihrer
            gewerblichen noch ihrer selbstständigen beruflichen Tätigkeit zugerechnet werden kann (§
            13 BGB). Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige
            Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer
            gewerblichen oder selbständigen beruflichen Tätigkeit handelt (§14 I BGB).
          </Paragraph>
          <Paragraph>
            <strong>2. Stellen der Vermittlungsanfrage</strong>
            <br />
            2.1.&nbsp; Stellt der Kunde bei eFab eine Anfrage nach einem Produkt oder einer
            Dienstleistung, kommt ein Vertrag über die Vermittlung von Partnern zustande. Das
            Stellen der Anfrage ist kostenlos und unverbindlich. Etwaige Provisionen für die
            Vermittlung werden ausschließlich von den Partnern getragen.
            <br />
            2.2. Nach dem Stellen der Anfrage kontaktieren Produktberater von eFab (variiert in
            Abhängigkeit zu dem Produkt) den Kunden telefonisch, per E-Mail, per WhatsApp oder ein
            anderes vom Kunden gewähltes Medium um mit ihm gemeinsam die Anfrage zu spezifizieren
            und ihm passende Partner vorzustellen. Die Anfrage wird anschließend nur nach
            Einwilligung des Kunden an den ausgewählten Partner weitergeleitet.
            <br />
            2.3. Bei ausgewählten Produkten und Dienstleistungen bietet eFab die Möglichkeit, im
            Rahmen der Spezifizierung der Anfrage durch den Produktberater einen Termin mit einem
            ausgewählten Partner zu vereinbaren. Die Terminabsprache erfolgt unter Berücksichtigung
            der zeitlichen Verfügbarkeit des Kunden und des ausgewählten Partners. Ziel dieses
            Services von eFab ist es, den Kunden mit dessen vorheriger Zustimmung und ohne weitere
            Ansprache effektiver mit den ausgewählten Partnern in Kontakt zu bringen.
          </Paragraph>
          <Paragraph>
            <strong>3. Erhalt des Angebots</strong>
            <br />
            3.1. Nach&nbsp;der Anfrage des Kunden,&nbsp;kontaktiert eFab den ausgewählten Partner um
            ein maßgeschneidertes Angebot erstellen zu lassen. eFab möchte damit gewährleisten, dass
            dem Kunden ausschließlich Angebote zugehen, die seinem Budget entsprechen und
            individuell auf seine Bedürfnisse abgestimmt sind.
            <br />
            3.3. Nachdem der Kunde das&nbsp;Angebot&nbsp;erhalten hat, entscheidet er selbst,
            ob&nbsp;er das Angebot annimmt. eFab ist hierbei weder als Vertragspartner beteiligt,
            noch tritt es als Vertreter oder Erfüllungsgehilfe der Vertragsparteien in Erscheinung.
          </Paragraph>

          <Paragraph>
            <strong>4. Weitergabe von Daten</strong>
            <br />
            4.1. Die personenbezogenen Daten des Kunden (Angaben zur Anfrage und Kontaktdaten)
            werden nur an die Partner weitergeleitet, wenn der Kunde hierzu seine Zustimmung erteilt
            hat. Eine Weitergabe der Daten an sonstige Dritte ist ausgeschlossen.
            <br />
            4.2. Die Erhebung, Verarbeitung und Speicherung von Daten erfolgt ausschließlich nach
            den Vorgaben des deutschen Datenschutzrechts sowie der EU-Datenschutz-Grundverordnung.
            Die Datenschutzerklärung finden Sie auf www.developer-lab.de/datenschutzerklärung
          </Paragraph>

          <Paragraph>
            <strong>5. Pflichten des Interessenten</strong>
            <br />
            5.1. Die Vermittlungsleistung von eFab ist für den Kunden kostenlos.
            <br />
            5.2. Der Service von eFab kann von allen natürlichen und juristischen Personen genutzt
            werden, die unbeschränkt geschäftsfähig sind. Natürlichen Personen, die nicht das 18.
            Lebensjahr vollendet haben, ist dies nicht gestattet. Stellt der Kunde für eine
            juristische Person eine Anfrage, versichert er zugleich seine Vertretungsberechtigung
            für diese.
          </Paragraph>

          <Paragraph>
            <strong>6. Gewährleistung und Leistungseinschränkungen</strong>
            <br />
            6.1. eFab kann nicht gewährleisten, dass für jede Anfrage eines Kunden passende Partner
            gefunden und diese zu einer Abgabe entsprechender Angebote veranlasst werden können. Von
            eFab wird weder das Zustandekommen eines Vertragsschlusses, noch die erfolgreiche
            Vertragsdurchführung geschuldet. Die Gewährleistung von eFab ist diesbezüglich
            ausgeschlossen.
            <br />
            6.2. Für Pflichtverletzungen, die sich im Rahmen eines etwaigen zustande gekommenen
            Schuldverhältnisses zwischen Kunde und Partner ergeben, ist eFab nicht verantwortlich.
          </Paragraph>

          <Paragraph>
            <strong>7. Haftungsbeschränkung</strong>
            <br />
            7.1. Für Pflichtverletzungen, die sich im Rahmen eines etwaigen zustande gekommenen
            Schuldverhältnisses zwischen Kunde und Partner ergeben, ist eFab nicht verantwortlich.
            <br />
            7.2. eFab haftet, soweit die Schadensursache auf Vorsatz oder grober Fahrlässigkeit
            beruht.
            <br />
            Ferner haftet eFab für die leicht fahrlässige Verletzung von wesentlichen Pflichten,
            deren Verletzung die Erreichung des Vertragszwecks gefährdet, oder für die Verletzung
            von Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrages überhaupt
            erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertraut. In diesem Fall
            haftet eFab jedoch nur für den vorhersehbaren, vertragstypischen Schaden. eFab haftet
            nicht für die leicht fahrlässige Verletzung anderer als der in den vorstehenden Sätzen
            genannten Pflichten.
            <br />
            7.3. Die vorstehenden Haftungsbeschränkungen gelten nicht bei Verletzung von Leben,
            Körper und Gesundheit, für einen Mangel nach Übernahme einer Garantie für die
            Beschaffenheit des Produktes und bei arglistig verschwiegenen Mängeln. Die Haftung nach
            dem Produkthaftungsgesetz bleibt unberührt.
            <br />
            7.4. Soweit die Haftung von eFab ausgeschlossen oder beschränkt ist, gilt dies auch für
            die persönliche Haftung von Arbeitnehmern, Vertretern und Erfüllungsgehilfen.
          </Paragraph>

          <Paragraph>
            <strong>8. Datenschutz</strong>
            <br />
            8.1. eFab verarbeitet personenbezogene Daten der Kunden zweckgebunden und gemäß den
            gesetzlichen Bestimmungen. Nähere Informationen über die Art, den Umfang und Zweck der
            Verarbeitung von personenbezogenen Daten innerhalb unserer Website finden Sie in unserer
            Datenschutzerklärung unter:
            <br />
            https://www.developer-lab.de/datenschutzerklärung/.
            <br />
            8.2. Dem Kunden stehen als Betroffenem i. S. d. DSGVO folgende Rechte zu:
            <br />
            8.2.1. Auskunftsrecht
            <br />
            Der Kunde hat das Recht, von eFab jederzeit auf Antrag eine Auskunft über die von eFab
            verarbeiteten, ihn betreffenden personenbezogenen Daten im Umfang des Art. 15 DSGVO zu
            erhalten.
            <br />
            8.2.2. Recht zur Berichtigung unrichtiger Daten
            <br />
            Der Kunde hat das Recht, von eFab die unverzügliche Berichtigung der ihn betreffenden
            personenbezogenen Daten zu verlangen, sofern diese unrichtig sein sollten.
            <br />
            8.2.3. Recht auf Löschung
            <br />
            Der Kunde hat das Recht, unter den in Art. 17 DSGVO beschriebenen Voraussetzungen von
            eFab die Löschung der ihn betreffenden personenbezogenen Daten zu verlangen. Diese
            Voraussetzungen sehen insbesondere ein Löschungsrecht vor, wenn die personenbezogenen
            Daten für die Zwecke, für die sie erhoben oder auf sonstige Weise verarbeitet wurden,
            nicht mehr notwendig sind, sowie in Fällen der unrechtmäßigen Verarbeitung, des
            Vorliegens eines Widerspruchs oder des Bestehens einer Löschungspflicht nach Unionsrecht
            oder dem Recht des Mitgliedstaats, dem eFab unterliegt.
            <br />
            8.2.4. Recht auf Einschränkung der Verarbeitung
            <br />
            Der Kunde hat das Recht, von eFab die Einschränkung der Verarbeitung nach Maßgabe des
            Art. 18 DSGVO zu verlangen. Dieses Recht besteht insbesondere, wenn die Richtigkeit der
            personenbezogenen Daten zwischen dem Kunden und eFab umstritten ist, für die Dauer,
            welche die Überprüfung der Richtigkeit erfordert, sowie im Fall, dass der Kunde bei
            einem bestehenden Recht auf Löschung anstelle der Löschung eine eingeschränkte
            Verarbeitung verlangt; ferner für den Fall, dass die Daten für die von eFab verfolgten
            Zwecke nicht länger erforderlich sind, der Kunde sie jedoch zur Geltendmachung, Ausübung
            oder Verteidigung von Rechtsansprüchen benötigt sowie, wenn die erfolgreiche Ausübung
            eines Widerspruchs zwischen eFab und dem Kunden noch umstritten ist.
            <br />
            8.2.5. Recht auf Unterrichtung
            <br />
            Hat der Kunde das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung
            gegenüber eFab geltend gemacht, ist eFab nach Maßgabe des Art. 19 DSGVO dazu
            verpflichtet, allen Empfängern, denen die den Kunden betreffenden personenbezogenen
            Daten offengelegt wurden, diese Berichtigung oder Löschung der Daten oder Einschränkung
            der Verarbeitung mitzuteilen, es sei denn, dies erweist sich als unmöglich oder ist mit
            einem unverhältnismäßigen Aufwand verbunden.
            <br />
            Dem Kunden steht gegenüber eFab das Recht zu, über diese Empfänger unterrichtet zu
            werden.
            <br />
            8.2.6. Recht auf Datenübertragbarkeit
            <br />
            Der Kunde hat das Recht, von eFab die ihn betreffenden personenbezogenen Daten, die er
            eFab bereitgestellt habt, in einem strukturierten, gängigen, maschinenlesbaren Format
            nach Maßgabe des Art. 20 DSGVO zu erhalten.
            <br />
            8.2.7. Widerrufsrecht
            <br />
            Der Kunde hat gemäß Art. 7 Abs. 3 DSGVO das Recht, seine einmal erteilte Einwilligung
            jederzeit gegenüber eFab zu widerrufen. Dies hat zur Folge, dass die Datenverarbeitung,
            die auf dieser Einwilligung beruhte, für die Zukunft nicht mehr fortgeführt werden darf.
            Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung
            wird durch den Widerruf der Einwilligung nicht berührt.
            <br />
            8.2.8. Widerspruchsrecht
            <br />
            Der Kunde hat das Recht, aus Gründen, die sich aus seiner besonderen Situation ergeben,
            jederzeit gegen die Verarbeitung ihn betreffender personenbezogener Daten, die u.a.
            aufgrund von Art. 6 Abs. 1 lit. e) oder f) DSGVO erfolgt, Widerspruch nach Art. 21 DSGVO
            einzulegen. be Around wird die Verarbeitung der personenbezogenen Daten des Kunden
            einstellen, es sei denn, eFab kann zwingende schutzwürdige Gründe für die Verarbeitung
            nachweisen, die die Interessen, Rechte und Freiheiten des Kunden überwiegen, oder wenn
            die Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            dient.
            <br />
            8.3. Falls der Kunde eines seiner Rechte geltend machen und/oder nähere Informationen
            hierüber erhalten möchte, kann er sich per E-Mail an die folgende Adresse wenden:
            <br />
            E-Mail:&nbsp; hello@developer-lab.de
          </Paragraph>

          <Paragraph>
            <strong>9. Schlussbestimmungen</strong>
            <br />
            9.1. Gerichtsstand und Erfüllungsort ist der Sitz von eFab, wenn der Kunde Kaufmann,
            juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen
            ist.
            <br />
            9.2. Es gilt das Recht der Bundesrepublik Deutschland, solange dem keine zwingenden
            Verbraucherschutzvorschriften entgegenstehen.
          </Paragraph>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

export default TermsAndConditions;
