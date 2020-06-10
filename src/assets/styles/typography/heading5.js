import styled from 'styled-components';
import { rgba } from 'polished';

export const Heading5 = styled.h5`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.23;
  margin: 24px 0px 12px 0px;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.8)};
  ${(props) => props.color && `color: ${props.color}`};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
