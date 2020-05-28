import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Paragraph, Heading6 } from 'assets/styles/typography';
import FacebookIcon from 'assets/img/team/facebook.svg';
import TwitterIcon from 'assets/img/team/twitter.svg';
import InstagramIcon from 'assets/img/team/instagram.svg';
import LogoImg from 'assets/img/hero/light-logo.png';
import Avatar1 from 'assets/img/team/avatar1.png';
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
            <FooterLink to="http://google.com">contact@aereland.com</FooterLink>
            <FooterLink to="/terms-and-conditions">AGB</FooterLink>
            <FooterLink to="/data-protections">Datenschutzerklärung</FooterLink>
            <FooterLink to="/contact">Impressum</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Mehr über uns</Heading6>
            <FooterLink to="http://google.com">About us</FooterLink>
            <FooterLink to="http://google.com">Before you go</FooterLink>
            <FooterLink to="http://google.com">Online check in</FooterLink>
            <FooterLink to="http://google.com">FAQ</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Quick links</Heading6>
            <FooterLink to="http://google.com">Pick up locations</FooterLink>
            <FooterLink to="/terms-and-conditions">Terms of Payment</FooterLink>
            <FooterLink to="/terms-and-conditions">Privacy Policy</FooterLink>
            <FooterLink to="http://google.com">Where to find us</FooterLink>
          </Column>
          <Column>
            <Tweet>
              <TweetBox>
                <Paragraph color="inherit">&quot;Want to meet us?</Paragraph>
                <TweetLink href="https://wa.me/491702988400?text=Hi%20there!">
                  Whatsapp Chat Starten
                </TweetLink>
              </TweetBox>
              <TweetInfo>
                {/* <TwitterIcon width="18" color={theme.palette.primary.default} /> */}
                <img src={Avatar1} alt="christoph" />
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
            <SocialIcon
              target="_blank"
              href="https://www.facebook.com/Rent-A-Developer-108237200556773/"
            >
              <FacebookIcon width="18px" />
            </SocialIcon>
            <SocialIcon target="_blank" href="https://twitter.com">
              <TwitterIcon width="18px" />
            </SocialIcon>
            <SocialIcon target="_blank" href="https://www.instagram.com/rent_a_developer/">
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
