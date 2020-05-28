import styled from 'styled-components';

export const SolidButton = styled.button`
  padding: 18px 36px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color}`}
  background-color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor}`};
  border: none;
  ${(props) => props.border && 'border: 2px solid currentColor'};
  border-radius: 5px;
  cursor: pointer;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;

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
`;

export const BorderButton = styled.button`
  padding: 18px 36px;
  font-family: inherit;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.default};
  background-color: ${({ theme }) => theme.palette.neutral.white};
  background-size: 200% auto;
  background-position: 0;
  border: 1px solid ${({ theme }) => theme.palette.primary.default};
  border-radius: 5px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &&.aos-finished[data-aos^='fade'][data-aos^='fade'] {
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: all;
  }

  &:hover {
    transform: translateY(-3px);
    background-image: ${({ theme }) => theme.palette.gradients.primary};
    background-size: 200% auto;
    color: ${({ theme }) => theme.palette.neutral.white};
    border: none;
    background-position: 100%;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
