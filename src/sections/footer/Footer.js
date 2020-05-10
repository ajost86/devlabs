import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Paragraph, Heading6 } from 'assets/styles/typography';
import FacebookIcon from 'assets/img/team/facebook.svg';
import TwitterIcon from 'assets/img/team/twitter.svg';
import InstagramIcon from 'assets/img/team/instagram.svg';
import LogoImg from 'assets/img/hero/light-logo.png';
import {
  Section,
  Container,
  Separator,
  Copyright,
  SocialIcons,
  SocialIcon,
  Info,
  Column,
  Logo,
  FooterLink,
  Tweet,
  TweetBox,
  TweetLink,
  TweetInfo,
  TweetUser,
  TweetDate,
} from './style';

function Footer({ theme }) {
  return (
    <Section id="footer">
      <Container>
        <Info>
          <Column>
            <Logo src={LogoImg} alt="" />
            <Paragraph color="rgba(255, 255, 255, 0.7)">
              58 Howard Street #2 San Francisco, CA 941
            </Paragraph>
            <FooterLink href="http://google.com">contact@aereland.com</FooterLink>
            <FooterLink href="http://google.com">SEO seite</FooterLink>
            <FooterLink href="http://google.com">Mobile app</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Who we are</Heading6>
            <FooterLink href="http://google.com">About us</FooterLink>
            <FooterLink href="http://google.com">Before you go</FooterLink>
            <FooterLink href="http://google.com">Online check in</FooterLink>
            <FooterLink href="http://google.com">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Quick links</Heading6>
            <FooterLink href="http://google.com">Pick up locations</FooterLink>
            <FooterLink href="http://google.com">Terms of Payment</FooterLink>
            <FooterLink href="http://google.com">Privacy Policy</FooterLink>
            <FooterLink href="http://google.com">Where to find us</FooterLink>
          </Column>
          <Column>
            <Tweet>
              <TweetBox>
                <Paragraph color="inherit">
                  &quot;The ocean never ceases to amaze! Feature: Ben Klea
                </Paragraph>
                <TweetLink href="https://t.co/jSRMsZAdPW">https://t.co/jSRMsZAdPW</TweetLink>
                <TweetLink href="https://t.co/jSRMsZAdPW">https://t.co/jSRMsZAdPW</TweetLink>
              </TweetBox>
              <TweetInfo>
                <TwitterIcon width="18" color={theme.palette.primary.default} />
                <Column>
                  <TweetUser>Unsplash</TweetUser>
                  <TweetDate>May 07, 2020</TweetDate>
                </Column>
              </TweetInfo>
            </Tweet>
          </Column>
        </Info>
      </Container>

      <Separator />

      <Container>
        <Copyright>
          <Paragraph color="rgba(255, 255, 255, 0.7)">
            © 2020 AeroLand. All Rights Reserved.
          </Paragraph>

          <SocialIcons>
            <SocialIcon target="_blank" href="http://facebook.com">
              <FacebookIcon width="18px" />
            </SocialIcon>
            <SocialIcon target="_blank" href="https://twitter.com">
              <TwitterIcon width="18px" />
            </SocialIcon>
            <SocialIcon target="_blank" href="https://www.instagram.com">
              <InstagramIcon width="18px" />
            </SocialIcon>
          </SocialIcons>
        </Copyright>
      </Container>
    </Section>
  );
}

Footer.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(Footer);
