import styled from 'styled-components';
import { rgba } from 'polished';
import { Link as RouterLink } from 'react-router-dom';

export const Heading1 = styled.h1`
  font-size: 56px;
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color};`}

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.23;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: ${({ theme }) => theme.palette.primary.dark};
  ${(props) => props.color && `color: ${props.color}`};
  text-align: center;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`}
  
  @media screen and (max-width: 768px) {
    font-size: 34px;
  }
`;

export const Heading4 = styled.h4`
  font-size: 34px;
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  line-height: 1.23;
  margin: 0px 0px 20px 0px;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color}`};

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

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

export const Heading6 = styled.h6`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.23;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  color: ${({ theme }) => rgba(theme.palette.primary.dark, 0.6)};
  ${(props) => props.color && `color: ${props.color}`};
  text-align: center;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Paragraph = styled.p`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 400;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color};`}
  line-height: 1.8;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  text-align: left;
  ${(props) => props.textAlign && `text-align: ${props.textAlign}`}
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;

  &::after {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
  }

  &:hover {
    &::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;

export const NavLink = styled(RouterLink)`
  color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;

  &::after {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
  }

  &:hover {
    &::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;

export const LinkButton = styled.a`
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;

  background-color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}

  padding: 14px 36px;
  border-radius: 5px;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
  }
`;

export const NavLinkButton = styled(RouterLink)`
  color: ${({ theme }) => theme.palette.neutral.white};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;

  background-color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.backgroundColor && `background-color: ${props.backgroundColor};`}

  padding: 14px 36px;
  border-radius: 5px;

  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px);
  }
`;
