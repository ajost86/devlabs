import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Heading2, Paragraph, LinkButton } from 'assets/styles/typography';

import CheckList from 'assets/img/tab-section/check.svg';
import WhatsappIcon from 'assets/img/hero/whatsapp-icon.svg';

import FeaturedImage from 'assets/img/tab-section/featured-image.png';
import {
  Section,
  Container,
  CenteredTitle,
  TabContent,
  LeftSection,
  RightSection,
  WhatsappButtonIcon,
  TabImage,
  CenteredContent,
  FeaturedList,
  FeaturedListItem,
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
                  href="https://wa.me/491702988400?text=Hi%20there!"
                  color="white"
                >
                  <WhatsappButtonIcon>
                    <WhatsappIcon width="24px" height="24px" />
                  </WhatsappButtonIcon>
                  Chat Starten
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
