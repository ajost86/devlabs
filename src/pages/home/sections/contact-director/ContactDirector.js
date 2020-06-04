import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Heading2, Heading6, Paragraph, Link, LinkButton } from 'assets/styles/typography';
import { GradientButton } from 'assets/styles/buttons';

import CheckList from 'assets/img/tab-section/check.svg';
import FeaturedImage from 'assets/img/tab-section/featured-image.png';
import {
  Section,
  Container,
  CenteredTitle,
  TabContent,
  LeftSection,
  RightSection,
  TabImage,
  CenteredContent,
  FeaturedList,
  FeaturedListItem,
  LearnMoreRow,
} from './style';

function ContactDirector({ theme }) {
  return (
    <>
      <Section>
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Direkter Ansprechpartner in München</Heading2>
          </CenteredTitle>
          <TabContent
            className="active-tab"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <LeftSection>
              <TabImage src={FeaturedImage} alt="" />
            </LeftSection>
            <RightSection>
              <CenteredContent>
                <Paragraph
                  color="inherit"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  300€ / Tag bedeutet bei uns <strong>all-inclusive</strong> :
                </Paragraph>
                <FeaturedList>
                  <FeaturedListItem
                    color="inherit"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    <CheckList width="16px" color={theme.palette.accent} />
                    <Paragraph color="inherit" margin="0px 0px 0px 20px">
                      Volle Transparenz der Kosten
                    </Paragraph>
                  </FeaturedListItem>
                  <FeaturedListItem
                    color="inherit"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    <CheckList width="16px" color={theme.palette.accent} />
                    <Paragraph color="inherit" margin="0px 0px 0px 20px">
                      keine Berechnung von Urlaub & Krankheitstagen
                    </Paragraph>
                  </FeaturedListItem>
                  <FeaturedListItem
                    color="inherit"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    <CheckList width="16px" color={theme.palette.accent} />
                    <Paragraph color="inherit" margin="0px 0px 0px 20px">
                      inkl. dedizierter Ansprechpartner in München
                    </Paragraph>
                  </FeaturedListItem>
                  <FeaturedListItem
                    color="inherit"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    <CheckList width="16px" color={theme.palette.accent} />
                    <Paragraph color="inherit" margin="0px 0px 0px 20px">
                      keine Vertragsbindung
                    </Paragraph>
                  </FeaturedListItem>
                </FeaturedList>
                <LinkButton
                  target="_blank"
                  href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren."
                  color="white"
                >
                  Whatsapp Chat Starten
                </LinkButton>
              </CenteredContent>
            </RightSection>
          </TabContent>
        </Container>
      </Section>
    </>
  );
}

ContactDirector.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(ContactDirector);
