import styled from 'styled-components';
import { rgba } from 'polished';

export const GradientButton = styled.button`
  padding: 18px 36px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.neutral.white};
  background-image: ${({ theme }) => theme.palette.gradients.primary};
  background-size: 200% auto;
  background-position: 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &&.aos-finished[data-aos^='fade'][data-aos^='fade'] {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: all;
  }

  &:hover {
    transform: translateY(-3px);
    background-position: 100%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }

  &[disabled] {
    background-color: ${({ theme }) => rgba(theme.palette.neutral.grey, 0.2)};
    color: ${({ theme }) => rgba(theme.palette.neutral.grey, 0.4)};
    background-image: none;
    cursor: wait;
  }
`;
