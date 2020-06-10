import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const shine = keyframes`
  0% {
    background-position: -140px
  }

  40%, 100% {
    background-position: 360px
  }
`;

export const Image = styled.img`
  width: 100%;
  align-self: center;
  margin-bottom: 10px;
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${({ theme }) => rgba(theme.palette.neutral.grey, 0.1)};
  background-image: ${({ theme }) =>
    `linear-gradient(90deg, ${rgba(theme.palette.neutral.grey, 0.2)} 0px, ${rgba(
      theme.palette.neutral.grey,
      0.1
    )} 100px, ${rgba(theme.palette.neutral.grey, 0.2)} 200px)`};
  background-size: 1200px;
  animation: ${shine} 1.6s infinite cubic-bezier(0.4, 0, 0.2, 1);
`;
