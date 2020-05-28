import React, { useEffect } from 'react';

import Footer from 'components/footer';
import NavbarInner from 'components/navbar_inner';
import { Heading2, Heading4, Paragraph } from 'assets/styles/typography';

import { Section, Container } from './style';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarInner />
      <Section id="contact">
        <Container>
          <Heading2 textAlign="left">Impressum</Heading2>
          <Heading4>Angaben gemäß § 5 TMG:</Heading4>

          <Paragraph>
            eFab UG (haftungsbeschränkt)
            <br />
            Unterherrnhauserstraße 3a
            <br />
            82547 Eurasburg
            <br />
            Deutschland
          </Paragraph>
          <Paragraph>
            E-Mail: hello@developer-lab.de
            <br />
            Handelsregisternummer: HRB 211450
          </Paragraph>

          <Paragraph>Umsatzsteuer-Identifikationsnummer: DE294807806</Paragraph>

          <Paragraph>Bildnachweise:</Paragraph>

          <Paragraph>
            https://themeforest.net/
            <br />
            https://www.iconfinder.com/
            <br />
            ovesenterprise
            <br />
            artegence
            <br />
            efigence
            <br />
            zipperstudios
            <br />
            solution25
          </Paragraph>

          <Paragraph>
            Die Europäische Kommission stellt eine Plattform für die außergerichtliche
            Online-Streitbeilegung (OS-Plattform) bereit, aufrufbar unter https://ec.europa.eu/odr.
          </Paragraph>

          <Paragraph>
            Rechtliche Hinweise zur Webseite
            <br />
            Alle Texte, Bilder und weiter hier veröffentlichten Informationen unterliegen dem
            Urheberrecht des Anbieters, soweit nicht Urheberrechte Dritter bestehen. In jedem Fall
            ist eine Vervielfältigung, Verbreitung oder öffentliche Wiedergabe ausschließlich im
            Falle einer widerruflichen und nicht übertragbaren Zustimmung des Anbieters gestattet.
          </Paragraph>

          <Paragraph>
            Für alle mittels Querverweis (Link) verbundenen Webinhalte übernimmt der Anbieter keine
            Verantwortung, da es sich hierbei nicht um eigene Inhalte handelt. Die verlinkten Seiten
            wurden auf rechtswidrige Inhalte überprüft, zum Zeitpunkt der Verlinkung waren solche
            nicht erkennbar. Verantwortlich für den Inhalt der verlinkten Seiten ist deren
            Betreiber. Der Anbieter hat hierzu keine allgemeine Überwachungs- und Prüfungspflicht.
            Bei Bekanntwerden einer Rechtsverletzung wird der entsprechende Link jedoch umgehend
            entfernt.
          </Paragraph>
        </Container>
      </Section>

      <Footer />
    </>
  );
}

export default Contact;
