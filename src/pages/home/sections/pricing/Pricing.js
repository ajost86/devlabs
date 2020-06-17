import React from 'react';

import { Heading2, Paragraph, LinkButton } from 'assets/styles/typography';

import PricingCard from 'components/pricingCard';
import { BorderButton } from 'assets/styles/buttons';
import { Section, Container, CenteredTitle, PricingCardGrid } from './style';

function Pricing() {
  return (
    <>
      <Section id="pricing">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Für jeden Bedarf den passenden Entwickler!</Heading2>
          </CenteredTitle>
          <PricingCardGrid>
            <PricingCard
              className="pricingCard"
              cardEmoji="🥑"
              cardTitle="Junior"
              currency="€"
              price="250"
              frequency="Tag"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                1-2 Jahre Berufserfahrung
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                ideal für Mini-Projekte
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Wordpress, HTML, ...
              </Paragraph>
              <Paragraph color="inherit" fontWeight="500" margin="10px 0px 40px 0px">
                Auch zur Teamergänzung
              </Paragraph>
              <BorderButton href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren.">Jetzt anfragen</BorderButton>
            </PricingCard>
            <PricingCard
              className="pricingCard isPopular"
              cardEmoji="🚀"
              cardTitle="Senior"
              currency="€"
              price="300"
              frequency="Tag"
              isPopular
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="250"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                3+ Jahre Berufserfahrung
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Allrounder
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Höchste Qualitätsstandards
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 40px 0px">
                Für alle Projekte einsetzbar
              </Paragraph>
              <LinkButton href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren.">Jetzt anfragen</LinkButton>
            </PricingCard>
            <PricingCard
              className="pricingCard"
              cardEmoji="🌵"
              cardTitle="Team Lead"
              currency="€"
              price="350"
              frequency="Tag"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                5+ Jahre Berufserfahrung
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Agiles Projektmanagement
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Team- & Mitarbeiterführung
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 40px 0px">
                Empfohlen ab 3 Entwicklern
              </Paragraph>
              <BorderButton href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren.">Jetzt anfragen</BorderButton>
            </PricingCard>
            <PricingCard
              className="pricingCard"
              cardEmoji="🔥"
              cardTitle="Guru"
              currency="€"
              price="400"
              frequency="Tag"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="350"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                Min. 10 Jahre Erfahrung
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Verschiedene Spezialgebiete
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                inkl. IT Architektur Beratung
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 40px 0px">
                Flexibel buchbar
              </Paragraph>
              <BorderButton href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren.">Jetzt anfragen</BorderButton>
            </PricingCard>
          </PricingCardGrid>
        </Container>
      </Section>
    </>
  );
}

export default Pricing;
