import React from 'react';

import { Heading2, Paragraph } from 'assets/styles/typography';

import PricingCard from 'components/pricingCard';
import { GradientButton, BorderButton } from 'assets/styles/buttons';
import { Section, Container, CenteredTitle, PricingCardGrid } from './style';

function Pricing() {
  return (
    <>
      <Section id="pricing">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Affordable for everyone!</Heading2>
          </CenteredTitle>
          <PricingCardGrid>
            <PricingCard
              className="pricingCard"
              cardEmoji="🥑"
              cardTitle="Free"
              currency="$"
              price="0"
              frequency="mo"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                03 projects
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Power And Predictive Dialing
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Quality & Customer Experience
              </Paragraph>
              <Paragraph color="inherit" fontWeight="500" margin="10px 0px 40px 0px">
                Try for free, forever!
              </Paragraph>

              <BorderButton>Get started</BorderButton>
            </PricingCard>
            <PricingCard
              className="pricingCard isPopular"
              cardEmoji="🚀"
              cardTitle="Started"
              currency="$"
              price="19"
              frequency="mo"
              isPopular
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="250"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                10 projects
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Power And Predictive Dialing
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Quality & Customer Experience
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 40px 0px">
                24/7 phone and email support
              </Paragraph>
              <GradientButton>Get started</GradientButton>
            </PricingCard>
            <PricingCard
              className="pricingCard"
              cardEmoji="🌵"
              cardTitle="Team"
              currency="$"
              price="29"
              frequency="mo"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                50 projects
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Power And Predictive Dialing
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Quality & Customer Experience
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 40px 0px">
                24/7 phone and email support
              </Paragraph>
              <BorderButton>Get started</BorderButton>
            </PricingCard>
            <PricingCard
              className="pricingCard"
              cardEmoji="🔥"
              cardTitle="Enterprise"
              currency="$"
              price="49"
              frequency="mo"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="350"
            >
              <Paragraph color="inherit" margin="20px 0px 0px 0px">
                Unlimited projects
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Power And Predictive Dialing
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 0px 0px">
                Quality & Customer Experience
              </Paragraph>
              <Paragraph color="inherit" margin="10px 0px 40px 0px">
                24/7 phone and email support
              </Paragraph>
              <BorderButton>Get started</BorderButton>
            </PricingCard>
          </PricingCardGrid>
        </Container>
      </Section>
    </>
  );
}

export default Pricing;
