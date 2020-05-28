import { hot } from 'react-hot-loader/root';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import theme from './config/theme.config';
import GlobalStyle from './assets/styles/globalStyles';

import Home from './pages/home';
import CaseStudies from './pages/case_studies';
import DataProtection from './pages/data-protection';
import Contact from './pages/contact';
import TermsAndConditions from './pages/terms-and-conditions';

AOS.init({
  once: true,
  offset: 0,
});

document.addEventListener('aos:in', ({ detail }) => {
  const duration = detail.getAttribute('data-aos-duration') || 0;

  setTimeout(() => {
    detail.classList.add('aos-finished');
  }, duration);
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/case-studies">
            <CaseStudies />
          </Route>
          <Route exact path="/data-protections">
            <DataProtection />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/terms-and-conditions">
            <TermsAndConditions />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
