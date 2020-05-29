import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';

import Accordion from 'components/accordion/Accordion';
import { Section, Container, CenteredTitle, Content } from './style';

const accordionItems = [
  {
    id: 0,
    title: 'Completely responsive',
    content: (
      <Paragraph color="inherit">
        AeroLand appears professional in design and responsive in performance. It proves to be
        highly customizable and efficient for landing site building. Engage yourself in the most
        effortless and well-appointed process with AeroLand.
      </Paragraph>
    ),
  },
  {
    id: 3,
    title: 'Completely responsive',
    content: (
      <Paragraph color="inherit">
        AeroLand appears professional in design and responsive in performance. It proves to be
        highly customizable and efficient for landing site building. Engage yourself in the most
        effortless and well-appointed process with AeroLand.
      </Paragraph>
    ),
  },
  {
    id: 2,
    title: 'Completely responsive',
    content: (
      <Paragraph color="inherit">
        AeroLand appears professional in design and responsive in performance. It proves to be
        highly customizable and efficient for landing site building. Engage yourself in the most
        effortless and well-appointed process with AeroLand.
      </Paragraph>
    ),
  },
];

function Seo() {
  return (
    <>
      <Section id="seo">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Entwickler für Agenturen</Heading2>
          </CenteredTitle>
          <Content data-aos-duration="600" data-aos-delay="200">
            <Accordion accordionItems={accordionItems} allowMultiple />
          </Content>
        </Container>
      </Section>
    </>
  );
}

export default Seo;
