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
              developer-lab.de
            </Paragraph>
            <FooterLink to="mailto:hello@developer-lab.de">hello@developer-lab.de</FooterLink>
            <FooterLink to="/terms-and-conditions">AGB</FooterLink>
            <FooterLink to="/data-protections">Datenschutzerklärung</FooterLink>
            <FooterLink to="/contact">Impressum</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Mehr über uns</Heading6>
            <FooterLink to="/case-studies">Case-Studies</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Quick links</Heading6>
          </Column>
          <Column>
            <Tweet>
              <TweetBox>
                <Paragraph color="inherit">Lass uns chatten!</Paragraph>
                <TweetLink href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren.">
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
            © 2020 developer-lab.de. All Rights Reserved.
          </Paragraph>

          <SocialIcons>
            <SocialIcon
              target="_blank"
              href="https://www.facebook.com/Rent-A-Developer-108237200556773/"
            >
              <FacebookIcon width="18px" />
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
