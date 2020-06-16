import React from 'react';
import { Element } from 'react-scroll';

import replaceImageFormat from 'helpers/replaceImageFormat';

import { Heading2 } from 'assets/styles/typography';
import BoxIcon1 from 'assets/img/about/box-icon1.png';
import BoxIcon2 from 'assets/img/about/box-icon2.png';
import BoxIcon3 from 'assets/img/about/box-icon3.png';
import BoxIcon4 from 'assets/img/about/box-icon4.png';
import BoxIcon5 from 'assets/img/about/box-icon5.png';
import BoxIcon6 from 'assets/img/about/box-icon6.png';

import Card from 'components/card';
import { Section, Container, CenteredTitle, CardGrid } from './style';

function About() {
  return (
    <>
      <Element name="about">
        <Section id="about">
          <Container>
            <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <Heading2>
                Software-Entwickler für nur 300€ pro Tag
              </Heading2>
            </CenteredTitle>

            <CardGrid>
              <Card
                className="aboutCard"
                cardIcon={<img src={replaceImageFormat(BoxIcon1)} alt="" />}
                cardTitle="Web Development"
                cardParagraph="Aufbau, Maintenance & Konzeption von Web Projekten."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={replaceImageFormat(BoxIcon2)} alt="" />}
                cardTitle="Mobile Apps"
                cardParagraph="Native Mobile Apps in allen gängigen Programmiersprachen."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={replaceImageFormat(BoxIcon3)} alt="" />}
                cardTitle="Ecommerce & Marketplaces"
                cardParagraph="Breite Erfahrung mit Magento, Shopify & anderen Shopystemen."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />

              <Card
                className="aboutCard"
                cardIcon={<img src={replaceImageFormat(BoxIcon4)} alt="" />}
                cardTitle="Cyber Security"
                cardParagraph="Penetration Tests, DSGVO Konformitätsprüfungen und Cyber Security Audits."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={replaceImageFormat(BoxIcon5)} alt="" />}
                cardTitle="SEO Projekte"
                cardParagraph="Page Speed Verbesserungen & technische Umsetzung Eurer SEO Projekte."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={replaceImageFormat(BoxIcon6)} alt="" />}
                cardTitle="Email Templates"
                cardParagraph="Aufbau von Newsletter und Transaktions-Email Tempates für Mailchimp & andere Systeme."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              />
            </CardGrid>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default About;
