import React, { useEffect } from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import replaceImageFormat from 'helpers/replaceImageFormat';

import cs1 from 'assets/img/case-studies/c_1.png';
import cs2 from 'assets/img/case-studies/c_2.png';
import cs3 from 'assets/img/case-studies/c_3.png';
import cs4 from 'assets/img/case-studies/c_4.png';
import cs5 from 'assets/img/case-studies/c_5.png';
import cs6 from 'assets/img/case-studies/c_6.png';
import cs7 from 'assets/img/case-studies/c_7.png';
import cs8 from 'assets/img/case-studies/c_8.png';
import cs9 from 'assets/img/case-studies/c_9.png';
import cs10 from 'assets/img/case-studies/c_10.png';
import cs11 from 'assets/img/case-studies/c_11.png';
import cs12 from 'assets/img/case-studies/c_12.png';
import cs13 from 'assets/img/case-studies/c_13.png';
import cs14 from 'assets/img/case-studies/c_14.png';
import cs15 from 'assets/img/case-studies/c_15.png';
import cs16 from 'assets/img/case-studies/c_16.png';
import cs17 from 'assets/img/case-studies/c_17.png';
import cs18 from 'assets/img/case-studies/c_18.png';
import cs19 from 'assets/img/case-studies/c_19.png';
import cs20 from 'assets/img/case-studies/c_20.png';
import cs22 from 'assets/img/case-studies/c_22.png';
import cs23 from 'assets/img/case-studies/c_23.png';
import cs24 from 'assets/img/case-studies/c_24.png';
import cs25 from 'assets/img/case-studies/c_25.png';
import cs26 from 'assets/img/case-studies/c_26.png';

import NavbarInner from 'components/navbar_inner';
import Footer from 'components/footer';
import LazyImage from 'components/lazy-image';

import { Section, Container, CenteredTitle, CardSection, Card, CardTitle } from './style';

function CaseStudies({ theme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarInner />
      <Section margin="80px 0px 0px 0px">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Web Apps</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a
                href="https://developer-lab.de/assets/cases/Car-Configurator-Peugeot-Citroen.pdf"
                rel="noopener noreferrer"
                target="_blank"
                style={{ width: '100%' }}
              >
                <LazyImage src={replaceImageFormat(cs1)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/Car-Configurator-Peugeot-Citroen.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Renault & Citroen
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Entwicklung einer eine Omichannel-Lösung zur Personalisierung von Fahrzeugen und
                Angebotserstellung.
              </Paragraph>
            </Card>

            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/philips.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs2)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/philips.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Philips
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Aufbau der Philips Produktseiten für die Produktlinien Sonicare & LatteGo.
              </Paragraph>
            </Card>

            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/bnp-paribas-online-banking.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs3)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/bnp-paribas-online-banking.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                BNP Paribas Online Banking
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Konzeption und Umsetzung des Online Banking Portals der BNP Paribas für Endkunden.
              </Paragraph>
            </Card>

            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/vw.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs4)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/vw.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                VW
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Digitale Produkteinführung des T-Roc von Volkswagen und Umsetzung von Volkswagen
                Home.
              </Paragraph>
            </Card>

            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/bnp-paribas-corporate-banking.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs5)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/bnp-paribas-corporate-banking.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                BNP Paribas Corporate Banking
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Aufbau der BNP Paribas B2B Online Banking Applikation.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://medistoric.ro/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs6)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://medistoric.ro/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Medistoric
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Deine medizinischen Daten als App immer griffbereit, damit im Notfall alles schnell
                gehen kann.
              </Paragraph>
            </Card>
          </CardSection>

          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Mobile Apps</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/bnp-paribas-mobile-banking.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs7)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/bnp-paribas-mobile-banking.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                BNP Paribas Mobile Banking
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Online Banking Mobile App mit höchsten Sicherheitsstandards für die BNP Paribas.
              </Paragraph>
            </Card>

            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/raiffeisen.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs8)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/raiffeisen.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Raiffeisen Mobile Banking
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Online Banking Mobile App mit höchsten Sicherheitsstandards für die Raiffeisen Bank.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://runlive.fit/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs9)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://runlive.fit/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                RunLive
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Run Live ist eine erfolgreiche Fitness Tracker App mit der man sich mit Mitstreitern
                im Laufen messen kann.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://heriapro.com/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs10)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://heriapro.com/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Heria Pro
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Fitness App mit Kursen und Trainingsprogrammen.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://www.nickis.com" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs11)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.nickis.com"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                NICKIS.com
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Umsetzung der Mobile App des führenden Anbieters für Luxus-Kindermode.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://www.askdata.com" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs12)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.askdata.com"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                AskData
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Umsetzung einer Big Data Mobile App für einen der führenden BI Anbietern.
              </Paragraph>
            </Card>
          </CardSection>

          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Shopify</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a target="_blank" href="https://www.ohhluilu.com/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs13)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.ohhluilu.com/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Ohh Luilu
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Schmuck Online Shop auf Shopify Basis.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://www.nberg.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs14)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.nberg.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                NBERG
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Online Shop für hochwertige Lederwaren auf Spotify Basis.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://www.doersoflondon.com/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs15)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.doersoflondon.com/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Doers of London
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Online Shop für Männer Kosmetik auf Spotify Basis.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://ernestleoty.com/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs16)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://ernestleoty.com/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Ernest Leoty
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Damen Fashion Online Shop auf Spotify Basis.
              </Paragraph>
            </Card>
          </CardSection>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Magento</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a target="_blank" href="https://trinkform.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs17)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://trinkform.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                trinkForm
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Getränke Online Shop auf Magento Basis.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://www.vidima.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs18)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.vidima.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                vidima
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Online Sanitätshaus auf Magento Basis.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://www.agent25.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs19)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.agent25.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Agent25
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Online Shop für Workwear auf Magento Basis.
              </Paragraph>
            </Card>
          </CardSection>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Shopware</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a target="_blank" href="https://waffen-baumgartner.com/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs20)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://waffen-baumgartner.com/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Waffen Baumgartner
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Waffen Online Shop auf Shopware Basis.
              </Paragraph>
            </Card>

            <Card>
              <a target="_blank" href="https://shop.3d-model.com/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs22)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://shop.3d-model.com/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                3D-Model
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                3D Drucker Online Shop auf Shopware Basis.
              </Paragraph>
            </Card>
          </CardSection>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Wordpress</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a target="_blank" href="https://www.sportcenter-hahn.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs25)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://www.sportcenter-hahn.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Sportcenter Hahn
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Website des Sportcenter Hahn auf Wordpress.
              </Paragraph>
            </Card>
            <Card>
              <a target="_blank" href="https://autopflege-gruenwald.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs26)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://autopflege-gruenwald.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Autopflege Grünwald
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Website der Autopflege Grünwald auf Wordpress.
              </Paragraph>
            </Card>
            <Card>
              <a target="_blank" href="https://karolinwappler.de/" rel="noopener noreferrer">
                <LazyImage src={replaceImageFormat(cs23)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://karolinwappler.de/"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Digital Communication by K.Wappler
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Corporate Identity auf Wordpress.
              </Paragraph>
            </Card>
          </CardSection>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Cyber Security</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/Cyber-Security.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs24)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/Cyber-Security.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Cyber Security Cases
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Beispiel eines Security Audits
              </Paragraph>
            </Card>
            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/Penetration-testing-report.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs24)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/Penetration-testing-report.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Penetration Test Report
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Beispiel eines Penetration Tests
              </Paragraph>
            </Card>
            <Card>
              <a
                target="_blank"
                href="https://developer-lab.de/assets/cases/Cyber-security-services.pdf"
                rel="noopener noreferrer"
              >
                <LazyImage src={replaceImageFormat(cs24)} />
              </a>
              <CardTitle
                target="_blank"
                href="https://developer-lab.de/assets/cases/Cyber-security-services.pdf"
                margin="10px 0px"
                color={theme.palette.primary.dark}
              >
                Cyber Security Services
              </CardTitle>
              <Paragraph color="inherit" textAlign="center">
                Übersicht der angebotenen Cyber Security Services
              </Paragraph>
            </Card>
          </CardSection>
        </Container>
      </Section>
      <Footer />
    </>
  );
}

CaseStudies.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(CaseStudies);
