import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Paragraph, Heading6 } from 'assets/styles/typography';
import FacebookIcon from 'assets/img/team/facebook.svg';
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
            <Paragraph color="rgba(255, 255, 255, 0.7)">
              E-mail: <FooterLink href="mailto:hello@developer-lab.de">hello@developer-lab.de</FooterLink>
            </Paragraph>
            <FooterLink to="/abg">AGB</FooterLink>
            <FooterLink to="/datenschutzerklärung">Datenschutzerklärung</FooterLink>
            <FooterLink to="/impressum">Impressum</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Mehr über uns</Heading6>
            <FooterLink to="/case-studies">Case-Studies</FooterLink>
          </Column>
          <Column>
            <Heading6 color={theme.palette.neutral.white}>Wir sind mehrsprachig</Heading6>
            <Paragraph color="rgba(255, 255, 255, 0.7)">
              Frontend: Angular, React, Vue JS, HTML, CSS
            </Paragraph>
            <Paragraph color="rgba(255, 255, 255, 0.7)">
              Backend: PHP, JAVA, Dot.Net, Node.js, Python, Laravel
            </Paragraph>
            <Paragraph color="rgba(255, 255, 255, 0.7)">
              Mobile: Android, iOS, React Native, Flutter, Swift
            </Paragraph>
            <Paragraph color="rgba(255, 255, 255, 0.7)">
              Shop Systeme: Magento, shopify, shopware, WooCommerce
            </Paragraph>
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
