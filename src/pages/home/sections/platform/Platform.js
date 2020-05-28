import React from 'react';
import { Element } from 'react-scroll';

import { Heading2, Paragraph } from 'assets/styles/typography';
import ReactLogo from 'assets/img/platform/react.svg';
import MicrosoftLogo from 'assets/img/platform/microsoft.svg';
import AppleLogo from 'assets/img/platform/apple.svg';
import JavaLogo from 'assets/img/platform/java.svg';
import AndroidLogo from 'assets/img/platform/android.svg';
import PHPLogo from 'assets/img/platform/php.svg';

import Card from 'components/card';
import { Section, Container, CenteredTitle, CardGrid } from './style';

function Platform() {
  return (
    <>
      <Element name="platform">
        <Section id="platform">
          <Container>
            <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <Heading2>Neuste Technologie Standards</Heading2>
            </CenteredTitle>

            <Paragraph
              color="inherit"
              textAlign="center"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
            >
              Sowohl die Arbeit an bestehenden Systemen oder die Integration neuster Technologien
              stellen für unser Software-Entwickler-Team kein Problem dar.
            </Paragraph>

            <CardGrid data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <Card
                small
                className="platformCard"
                cardIcon={<ReactLogo />}
                cardTitle="React Native"
              />
              <Card
                small
                className="platformCard"
                cardIcon={<MicrosoftLogo />}
                cardTitle="Windows"
              />
              <Card small className="platformCard" cardIcon={<AppleLogo />} cardTitle="MacOS" />
              <Card small className="platformCard" cardIcon={<JavaLogo />} cardTitle="Java" />
              <Card small className="platformCard" cardIcon={<AndroidLogo />} cardTitle="Android" />
              <Card small className="platformCard" cardIcon={<PHPLogo />} cardTitle="PHP" />
            </CardGrid>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default Platform;
