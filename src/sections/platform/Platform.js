import React from 'react';
import { Element } from 'react-scroll';

import { Heading2, Heading4, Paragraph } from 'assets/styles/typography';
import { SolidButton } from 'assets/styles/buttons';
import ReactLogo from 'assets/img/platform/react.svg';
import MicrosoftLogo from 'assets/img/platform/microsoft.svg';
import AppleLogo from 'assets/img/platform/apple.svg';
import JavaLogo from 'assets/img/platform/java.svg';
import AndroidLogo from 'assets/img/platform/android.svg';
import PHPLogo from 'assets/img/platform/php.svg';
import MackbookDownload from 'assets/img/platform/macbook-download.png';

import Card from 'components/card';
import {
  Section,
  Container,
  CenteredTitle,
  CardGrid,
  DownloadSection,
  DownloadCard,
  MacbookImage,
} from './style';

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
              Sowohl die Arbeit an bestehenden Systemen oder die Integration neuster Technologien stellen für unser Software-Entwickler-Team kein Problem dar.
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

            <DownloadSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <DownloadCard>
                <Heading4 data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                  Unsere Kunden lieben uns!
                </Heading4>
                <Paragraph
                  margin="0px 0px 20px 0px"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="350"
                >
                  Lad dir jetzt unsere Case-Studies runter und überzeuge dich selbst von der Qualität unserer Arbeit.
                </Paragraph>
                <SolidButton data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                  Get AeroLand
                </SolidButton>
              </DownloadCard>

              <MacbookImage
                src={MackbookDownload}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />
            </DownloadSection>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default Platform;
