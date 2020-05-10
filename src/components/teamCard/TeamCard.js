import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { rgba } from 'polished';
import FacebookIcon from 'assets/img/team/facebook.svg';
import TwitterIcon from 'assets/img/team/twitter.svg';
import InstagramIcon from 'assets/img/team/instagram.svg';

import { Heading5, Paragraph } from 'assets/styles/typography';
import { SliderCard, CardAvatar, SocialIcons, SocialIcon } from './style';

function TeamCard({
  cardAvatar,
  cardTitle,
  cardSubtitle,
  facebook,
  twitter,
  instagram,
  small,
  theme,
  ...props
}) {
  return (
    <SliderCard {...props}>
      <CardAvatar src={cardAvatar} alt="" />
      <Heading5>{cardTitle}</Heading5>
      <Paragraph color={rgba(theme.palette.primary.dark, 0.6)}>{cardSubtitle}</Paragraph>
      <SocialIcons>
        <SocialIcon href={facebook} aria-label="Facebook">
          <FacebookIcon width="18px" />
        </SocialIcon>
        <SocialIcon href={twitter} aria-label="Twitter">
          <TwitterIcon width="18px" />
        </SocialIcon>
        <SocialIcon href={twitter} aria-label="Instagram">
          <InstagramIcon width="18px" />
        </SocialIcon>
      </SocialIcons>
    </SliderCard>
  );
}

TeamCard.propTypes = {
  cardAvatar: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  small: PropTypes.bool,
  theme: PropTypes.object,
};

export default withTheme(TeamCard);
