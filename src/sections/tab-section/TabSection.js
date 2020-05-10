import React, { useState } from 'react';
import { withTheme } from 'styled-components';
import { rgba } from 'polished';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { Heading2, Heading4, Heading6, Paragraph, Link } from 'assets/styles/typography';
import { GradientButton } from 'assets/styles/buttons';

import CheckList from 'assets/img/tab-section/check.svg';
import FeaturedImage from 'assets/img/tab-section/featured-image.png';
import MissionImage from 'assets/img/tab-section/mission-image.png';
import SupportImage from 'assets/img/tab-section/support-image.png';
import HotlineImage from 'assets/img/tab-section/hotline.png';
import EmailImage from 'assets/img/tab-section/email.png';
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
  SupportCard,
  CardImage,
  CardContent,
  TabList,
  Tab,
} from './style';

const tabs = [
  {
    name: 'Featured',
    content: (theme) => (
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
              Meeting all of your requirements for SEO & branding
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
                  Receive real-time business analytics
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
                  Cross-browser Compatible Design
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
                  Completely Gutenberg Ready
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
                  Highly Responsive Tools
                </Paragraph>
              </FeaturedListItem>
            </FeaturedList>
            <GradientButton
              color="inherit"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="350"
            >
              Learn mode
            </GradientButton>
            <LearnMoreRow
              color="inherit"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <Heading6>What’s next in AeroLand?</Heading6>
              <Link href="www.google.com" fontSize="18px" margin="0px 0px 0px 5px">
                Learn more
              </Link>
            </LearnMoreRow>
          </CenteredContent>
        </RightSection>
      </TabContent>
    ),
  },
  {
    name: 'Mission',
    content: (theme) => (
      <TabContent data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
        <LeftSection>
          <TabImage src={MissionImage} alt="" />
        </LeftSection>
        <RightSection>
          <CenteredContent>
            <Heading4
              color={theme.palette.primary.dark}
              fontWeight="400"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              The best ways to create websites
            </Heading4>
            <Paragraph
              color="inherit"
              margin="40px 0px"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="340"
            >
              We bring on like-minded and talented members to help you grow a stronger business for
              fiercely reaching towards higher goals every day.
            </Paragraph>
            <GradientButton data-aos="fade-up" data-aos-duration="600" data-aos-delay="340">
              Learn mode
            </GradientButton>
            <LearnMoreRow data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
              <Heading6>What’s next in AeroLand?</Heading6>
              <Link href="www.google.com" fontSize="18px" margin="0px 0px 0px 5px">
                Learn more
              </Link>
            </LearnMoreRow>
          </CenteredContent>
        </RightSection>
      </TabContent>
    ),
  },
  {
    name: 'New Friendly Support',
    content: (theme) => (
      <TabContent data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
        <LeftSection>
          <TabImage src={SupportImage} alt="" />
        </LeftSection>
        <RightSection>
          <CenteredContent>
            <SupportCard data-aos="fade-up" data-aos-duration="600" data-aos-delay="320">
              <CardImage src={HotlineImage} alt="" />
              <CardContent>
                <Heading6 color={rgba(theme.palette.neutral.black, 0.4)} textAlign="left">
                  HOTLINE
                </Heading6>
                <a href="tel:">
                  <Heading4
                    color={rgba(theme.palette.neutral.black, 0.8)}
                    margin="10px 0px 20px 0px"
                  >
                    0122 8899900
                  </Heading4>
                </a>
                <Paragraph color="inherit">24/7 phone and email support</Paragraph>
              </CardContent>
            </SupportCard>

            <SupportCard data-aos="fade-up" data-aos-duration="600" data-aos-delay="360">
              <CardImage src={EmailImage} alt="" />
              <CardContent>
                <Heading6 color={rgba(theme.palette.neutrla.black, 0.4)} textAlign="left">
                  GIVE YOUR FEEDBACK
                </Heading6>
                <a href="mailto:">
                  <Heading4
                    color={rgba(theme.palette.neutral.black, 0.8)}
                    margin="10px 0px 20px 0px"
                  >
                    hello@seopro.com
                  </Heading4>
                </a>
                <Paragraph color="inherit">24/7 phone and email support</Paragraph>
              </CardContent>
            </SupportCard>
          </CenteredContent>
        </RightSection>
      </TabContent>
    ),
  },
];

function TabSection({ theme }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <Section>
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>
              We design powerful websites for <br /> landing your success.
            </Heading2>
          </CenteredTitle>

          <TabList data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            {tabs.map((tab, index) => (
              <Tab
                key={tab.name}
                className={index === activeTab ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>
          <TransitionGroup className="transition-group">
            {tabs.map((tab, index) =>
              index === activeTab ? (
                <CSSTransition
                  in={index === activeTab}
                  key={tab.name}
                  timeout={300}
                  classNames="fade"
                  unmountOnExit
                  appear
                >
                  {tabs[activeTab].content(theme)}
                </CSSTransition>
              ) : null
            )}
          </TransitionGroup>
        </Container>
      </Section>
    </>
  );
}

TabSection.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(TabSection);
