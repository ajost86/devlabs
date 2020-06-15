import { hot } from 'react-hot-loader/root';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Helmet from 'react-helmet';

import theme from './config/theme.config';
import GlobalStyle from './assets/styles/globalStyles';

const CookieConsent = lazy(() =>
  import(/* webpackChunkName: "CookieConsent" */ 'components/cookieConsent')
);
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/home'));
const CaseStudies = lazy(() =>
  import(/* webpackChunkName: "CaseStudies" */ './pages/case_studies')
);
const DataProtection = lazy(() =>
  import(/* webpackChunkName: "DataProtection" */ './pages/data-protection')
);
const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ './pages/contact'));
const TermsAndConditions = lazy(() =>
  import(/* webpackChunkName: "TermsAndConditions" */ './pages/terms-and-conditions')
);

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
      <Helmet>
        <title>Software Entwicklung für 300€ pro Tag | Developer Lab</title>
        <meta name="description" content="Ob neue Idee oder Skalierung. Entwickler für 300€ am Tag, die exklusiv für Dich und Dein Projekt arbeiten.">
      </Helmet>
      <GlobalStyle />
      <Router>
        <Suspense fallback="">
          <CookieConsent />
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
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default hot(App);
