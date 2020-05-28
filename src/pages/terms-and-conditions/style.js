import styled from 'styled-components';
import { lighten } from 'polished';

import { Heading2, Heading4, Paragraph } from 'assets/styles/typography';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.neutral.white};
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;
  margin: 120px auto;

  ${Heading2} {
    color: ${({ theme }) => lighten(0.2, theme.palette.neutral.black)};
    margin-bottom: 20px;
  }

  ${Heading4} {
    color: ${({ theme }) => lighten(0.2, theme.palette.neutral.black)};
    margin-bottom: 45px;
  }

  ${Paragraph} {
    color: ${({ theme }) => lighten(0.33, theme.palette.neutral.black)};
    font-size: 18px;
    margin-bottom: 16px;
  }

  strong {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
