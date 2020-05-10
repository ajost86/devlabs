import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Heading2, Paragraph } from 'assets/styles/typography';

import EffectPhoto from 'assets/img/product/effect.jpg';
import MarketingPhoto from 'assets/img/product/marketing.jpg';
import SEOPhoto from 'assets/img/product/seo.jpg';
import Feature from './components/Feature';
import { Section, Container, CenteredTitle, Column, FeaturesGrid, FeatureImage } from './style';

const features = [
  {
    name: 'Page Change Effect',
    description:
      'The transition between pages is made to provide convenience for users while navigating.',
    image: EffectPhoto,
  },
  {
    name: 'New Marketing Plan',
    description:
      "We are capable of sketching out competitive marketing plans that's efficiency proven.",
    image: MarketingPhoto,
  },
  {
    name: 'SEO Analytic Tool',
    description:
      'Promote your sales and increase the ROI with the help from built-in SEO analytics tools.',
    image: SEOPhoto,
  },
];

function Product() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      <Section id="product">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Developed for Business Growth</Heading2>
          </CenteredTitle>

          <Paragraph
            className="section-description"
            color="inherit"
            textAlign="center"
            margin="15px 0 0 0"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            Offer your business with the best assistance for growth.
          </Paragraph>

          <FeaturesGrid>
            <Column data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              {features.map((feature, index) => (
                <Feature
                  name={feature.name}
                  key={feature.name}
                  description={feature.description}
                  className={`feature ${activeFeature === index ? 'active' : ''}`}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </Column>
            <Column data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
              <TransitionGroup>
                {features.map((feature, index) =>
                  index === activeFeature ? (
                    <CSSTransition
                      in={index === activeFeature}
                      key={feature.name}
                      timeout={300}
                      classNames="fade"
                      unmountOnExit
                      appear
                    >
                      <FeatureImage src={features[activeFeature].image} alt="" />
                    </CSSTransition>
                  ) : null
                )}
              </TransitionGroup>
            </Column>
          </FeaturesGrid>
        </Container>
      </Section>
    </>
  );
}

export default Product;
