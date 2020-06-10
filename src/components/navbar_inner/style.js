import styled from 'styled-components';

import Link from 'components/link';

export const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.palette.accent};
  ${(props) => props.color && `color: ${props.color};`}
  font-size: 15px;
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`}
  font-weight: 500;
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`}
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
  position: relative;
  cursor: pointer;
  opacity: 1;
  transition: opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);

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

  &.activeLink {
    opacity: 0.5;
  }
`;

export const MenuItems = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${MenuLink} {
    margin: 0px 26px;
  }

  transition: height 400ms cubic-bezier(0.4, 0, 0.2, 1);
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 1200px) {
    height: ${(props) => `${props.heightMenu}px`};
    position: relative;
    transform: translateX(0);
    left: 0;
  }
`;

export const HamburgerMenu = styled.button`
  padding: 8px 12px;
  background-color: ${({ theme }) => theme.palette.neutral.white};
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 5px;
  -webkit-appearance: none;
  cursor: pointer;
  display: none;
`;

export const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 150px;
  z-index: 10;
  top: 0px;
  left: 0;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({ theme }) => theme.palette.neutral.white};
  box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
  height: 80px;
  color: ${({ theme }) => theme.palette.neutral.black};

  ${HamburgerMenu} {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  a.hire-us {
    margin-left: auto;
    border-radius: 50px;
  }

  @media screen and (max-width: 1600px) {
    padding: 0px 50px;
  }

  @media screen and (max-width: 1200px) {
    padding: 15px 15px;
    flex-wrap: wrap;
    height: auto;

    &.scrolledNavbar {
      height: auto;
    }

    ${MenuItems} {
      display: flex;
      flex-direction: column;
      background-color: ${({ theme }) => theme.palette.neutral.white};
      color: ${({ theme }) => theme.palette.primary.default};
      width: 100%;
      padding: 0 0px;
      margin-top: 4px;
      order: 3;

      ${MenuLink} {
        margin: 10px 14px;
        color: ${({ theme }) => theme.palette.neutral.black};
      }

      &.open-on-mobile {
        display: flex;
      }

      &.closed-on-mobile {
        display: none;
      }
    }

    a.hire-us {
      margin: 0 auto;
    }

    button.hamburger-menu {
      display: flex;
    }
  }
`;
