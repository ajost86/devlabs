import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import { useWindowSize } from '@reach/window-size';

import Menu from 'assets/img/hero/menu.svg';
import { LinkButton } from 'assets/styles/typography';
import LightLogo from 'assets/img/hero/light-logo.png';
import DarkLogo from 'assets/img/hero/dark-logo.png';
import WhatsappIcon from 'assets/img/hero/whatsapp-icon.svg';
import { Nav, MenuItems, HamburgerMenu, ScrollLink } from './style';

function Navbar({ theme }) {
  const { width } = useWindowSize();
  const [scrollStarted, setScrollStarted] = useState(window.scrollY > 10);
  const [heightMenu, setHeightMenu] = useState(0);
  const menuItemsEl = useRef(null);

  useEffect(() => {
    const checkScrollStarted = () => {
      setScrollStarted((prevScrollStarted) => {
        if (!prevScrollStarted) {
          if (window.scrollY > 10) {
            return true;
          }
        } else if (window.scrollY < 11) {
          return false;
        }

        return prevScrollStarted;
      });
    };

    window.addEventListener('scroll', checkScrollStarted);
    return () => window.removeEventListener('scroll', checkScrollStarted);
  }, []);

  useEffect(() => {
    let { hash } = window.location;
    hash = hash?.substr(1);

    scroller.scrollTo(hash);
  }, []);

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
      <Nav className={`${scrollStarted || width < 1200 ? 'scrolledNavbar' : ''}`}>
        <Link to="/">
          <img src={!scrollStarted && width > 1200 ? LightLogo : DarkLogo} alt="" />
        </Link>

        <MenuItems ref={menuItemsEl} heightMenu={heightMenu}>
          <ScrollLink to="hero" smooth color="inherit" fontSize="14px">
            START
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            ANGEBOT
          </ScrollLink>
          <ScrollLink
            to="platform"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            ZUSAMMENARBEIT
          </ScrollLink>
          <ScrollLink to="team" smooth activeClass="activeLink" spy color="inherit" fontSize="14px">
            TEAM
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            activeClass="activeLink"
            spy
            color="inherit"
            fontSize="14px"
          >
            ANFRAGE
          </ScrollLink>
        </MenuItems>
        <LinkButton
          className="hire-us"
          target="_blank"
          href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren."
          color={
            !scrollStarted && width >= 1200
              ? theme.palette.primary.default
              : theme.palette.neutral.white
          }
          backgroundColor={
            !scrollStarted && width >= 1200 ? theme.palette.neutral.white : theme.palette.accent
          }
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
