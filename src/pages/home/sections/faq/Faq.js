import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';

import Accordion from 'components/accordion/Accordion';
import { Section, Container, CenteredTitle, Content } from './style';

const accordionItems = [
  {
    id: 0,
    title: 'Wieso sind die Kosten so niedrig?',
    content: (
      <Paragraph color="inherit">
        Das entspricht einen Tagessatz von 751,12€. Wie ist es also möglich, dass wir bei Developer
        Lab Entwickler für 300,00€ am Tag anbieten können? Unser Geschäftsgeheimnis lautet:
        Exklusive Verträge mit den besten „Entwicklerwerkstätten“ Osteuropas. Unser größter Partner
        sitzt dabei in Rumänien.
      </Paragraph>
    ),
  },
  {
    id: 1,
    title: 'Das kommt dir unseriös vor?',
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
    id: 2,
    title: 'Immer noch nicht überzeugt?',
    content: (
      <Paragraph color="inherit">
        Unsere Entwickler haben mindestens 3 Jahre Berufserfahrung und beherrschen alle gängigen
        Programmiersprachen. Es fallen keine Kosten für Urlaubs- & Krankheitstage an.
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
