import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import Menu from 'assets/img/hero/menu.svg';
import { LinkButton } from 'assets/styles/typography';
import DarkLogo from 'assets/img/hero/dark-logo.png';
import WhatsappIcon from 'assets/img/hero/whatsapp-icon.svg';
import { Nav, MenuItems, HamburgerMenu, MenuLink } from './style';

function Navbar({ theme }) {
  const [heightMenu, setHeightMenu] = useState(0);
  const menuItemsEl = useRef(null);

  const calcHeight = () => {
    const nrOfNodes = menuItemsEl.current.childNodes.length;
    const [firstNode] = menuItemsEl.current.childNodes;
    const nodeHeight = firstNode.offsetHeight;
    const nodeMT = +window.getComputedStyle(firstNode).marginTop.replace('px', '');
    const nodeMB = +window.getComputedStyle(firstNode).marginBottom.replace('px', '');

    const nodeTotalHeight = nodeHeight + nodeMT + nodeMB;

    return nrOfNodes * nodeTotalHeight;
  };

  return (
    <>
      <Nav>
        <Link to="/">
          <img src={DarkLogo} alt="" />
        </Link>

        <MenuItems ref={menuItemsEl} heightMenu={heightMenu}>
          <MenuLink to="/#hero" color="inherit" fontSize="14px">
            START
          </MenuLink>
          <MenuLink to="/#about" color="inherit" fontSize="14px">
            ANGEBOT
          </MenuLink>
          <MenuLink to="/#platform" color="inherit" fontSize="14px">
            ZUSAMMENARBEIT
          </MenuLink>
          <MenuLink to="/case-studies" color="inherit" fontSize="14px">
            CASE STUDIES
          </MenuLink>
          <MenuLink to="/#contact" color="inherit" fontSize="14px">
            ANFRAGE
          </MenuLink>
        </MenuItems>
        <LinkButton
          className="hire-us"
          target="_blank"
          href="https://wa.me/491702988400?text=Hi%20there!"
          color={theme.palette.neutral.white}
          backgroundColor={theme.palette.accent}
        >
          <WhatsappIcon width="24px" height="24px" />
        </LinkButton>

        <HamburgerMenu
          className="hamburger-menu"
          onClick={() => setHeightMenu(heightMenu ? 0 : calcHeight())}
        >
          <Menu color={theme.palette.primary.default} width="20px" />
        </HamburgerMenu>
      </Nav>
    </>
  );
}

Navbar.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(Navbar);
