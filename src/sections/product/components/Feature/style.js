import styled from 'styled-components';

import { Heading5, Paragraph } from 'assets/styles/typography';

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  ${Heading5} {
    margin: 0;
    margin-left: 30px;
    max-width: 185px;

    @media screen and (max-width: 768px) {
      margin-top: 26px;
    }
  }

  ${Paragraph} {
    margin-top: 12px;
  }
`;

export const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background-image: ${({ theme }) => theme.palette.gradients.secondary};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
`;
