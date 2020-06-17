import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';

import Accordion from 'components/accordion/Accordion';
import { Section, Container, CenteredTitle, Content } from './style';

const accordionItems = [
  {
    id: 0,
    title: <h6>Wie funktioniert Developer Lab?</h6>,
    content: (
      <Paragraph color="inherit">
        300,00€ pro Tag für einen exzellent ausgebildeten Entwickler klingt zu schön um wahr zu
        sein? Das haben wir uns auch gedacht! Und deshalb haben wir für Dich unsere jahrelange
        Erfahrung in der Startup-Szene genutzt um etwas Licht in den Freelancer-Dschungel zu
        bringen. Denn wir haben festgestellt, dass die Suche nach qualifizierten und zuverlässigen
        Freelancern im Ausland sehr zeitintensiv sein kann. Deshalb treffen wir bei Developer Lab
        die Entscheidung für Dich! Ausgehend von Deinen Anforderungen, stellen wir Dir Dein Team von
        Spezialisten zusammen und beraten Dich wie Du dein Projekt am besten umsetzt.
      </Paragraph>
    ),
  },
  {
    id: 1,
    title: <h6>Wieso sind die Kosten so niedrig?</h6>,
    content: (
      <Paragraph color="inherit">
        Der durchschnittliche Stundensatz bei IT Freelancern liegt in Deutschland bei 93,89€
        (Quelle: t3n). Das entspricht einen Tagessatz von 751,12€. Wie ist es also möglich, dass wir
        bei Developer Lab Entwickler für 300,00€ am Tag anbieten können? Unser Geschäftsgeheimnis
        lautet: Exklusive Verträge mit den besten „Entwicklerwerkstätten“ Osteuropas. Unser größter
        Partner sitzt dabei in Rumänien.
      </Paragraph>
    ),
  },
  {
    id: 2,
    title: <h6>Ist das denn seriös?</h6>,
    content: (
      <Paragraph color="inherit">
        Laut der Rumänischen Nationalbank wurden im Jahr 2018, IT-Dienstleistungen in Höhe von. 4,5
        Milliarden Euro umgesetzt. Das entsprach seiner Zeit einer Steigerung von 15 Prozent im
        Verglich zum Vorjahr. IT-Dienstleistungen stellen damit die zweitgrößte Kategorie an
        Dienstleistungsexporten in Rumänien dar. Das ist vor allem auf die exzellenten Ausbildung
        der Fachkräfte und die relativ niedrigen Personalkosten zurückzuführen.
      </Paragraph>
    ),
  },
  {
    id: 3,
    title: <h6>Können die Entwickler bei mir vor Ort arbeiten?</h6>,
    content: (
      <Paragraph color="inherit">
        Unsere Kunden schätzen den persönlichen Kontakt zu ihren Teams sehr. Wir erleben oft, dass
        die verantwortlichen Entwickler nicht als externe Dienstleister, sondern viel mehr als
        Teammitglieder in den einzelnen Unternehmen angesehen werden. Deshalb können in regelmäßigen
        Zeitabständen Workshops zu neuen oder erfolgreich abgeschlossenen Projekten stattfinden.
        Dazu werden alle Teammitglieder eingeladen, um mit dem Kunden vor Ort gemeinsam zu arbeiten.
        Dauer und Kostenübernahme sind dabei im Einzelfall separat zu verhandeln.
      </Paragraph>
    ),
  },
  {
    id: 4,
    title: <h6>Ist Whitelabeling möglich?</h6>,
    content: (
      <Paragraph color="inherit">
        Natürlich! Wir entwickeln in Deinem Namen, sodass für Deine Kunden und Partnern Du und Deine
        Agentur im Vordergrund bleibt.
      </Paragraph>
    ),
  },
  {
    id: 5,
    title: <h6>Wie funktionieren Retainer Modelle?</h6>,
    content: (
      <Paragraph color="inherit">
        Wir können dir jederzeit mit einem Retainer Modell monatliche Resourcen garantieren – Egal
        ob 1 Tag die Woche oder Vollzeit.
      </Paragraph>
    ),
  },
  {
    id: 6,
    title: <h6>Wie stelle Developer Lab Vertraulichkeit und Datenschutz sicher?</h6>,
    content: (
      <Paragraph color="inherit">
        Wir arbeiten mit standardisierten NDA-Vereinbarungen (non-disclosure agreement). Damit
        verpflichten sich beide Parteien zur Geheimhaltung projektinterner Details.
      </Paragraph>
    ),
  },
];

function Faq() {
  return (
    <>
      <Section id="faq">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>FAQ</Heading2>
          </CenteredTitle>
          <Content data-aos-duration="600" data-aos-delay="200">
            <Accordion accordionItems={accordionItems} />
          </Content>
        </Container>
      </Section>
    </>
  );
}

export default Faq;
