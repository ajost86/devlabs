import React from 'react';

import PropTypes from 'prop-types';

import { Heading6, Paragraph } from 'assets/styles/typography';
import { StyleCard } from './style';

function Card({ cardTitle, cardIcon, cardParagraph, small, ...props }) {
  return (
    <StyleCard {...props} small={small}>
      {cardIcon}
      <Heading6 className={small ? 'smallCardTitle' : 'cardTitle'}>{cardTitle}</Heading6>
      <Paragraph color="inherit" textAlign="center">
        {cardParagraph}
      </Paragraph>
    </StyleCard>
  );
}

Card.propTypes = {
  cardTitle: PropTypes.string,
  cardIcon: PropTypes.node,
  cardParagraph: PropTypes.string,
  small: PropTypes.bool,
};

export default Card;
