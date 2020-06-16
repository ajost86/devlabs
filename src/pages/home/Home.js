import React, { useEffect, lazy, Suspense } from 'react';
import Helmet from 'react-helmet';

import Navbar from 'components/navbar';
import Hero from './sections/hero';

const About = lazy(() => import('./sections/about'));
const Platform = lazy(() => import('./sections/platform'));
const ContactDirector = lazy(() => import('./sections/contact-director'));
const Pricing = lazy(() => import('./sections/pricing'));
const Testimonials = lazy(() => import('./sections/testimonials'));
const Faq = lazy(() => import('./sections/faq'));
const Clients = lazy(() => import('./sections/clients'));
const Contact = lazy(() => import('./sections/contact'));
const Footer = lazy(() => import('components/footer'));

function Home() {
  useEffect(() => {
    const { hash } = window.location;
    !hash && window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://developer-lab.de" />
      </Helmet>
      <Navbar />
      <Hero />
      <Suspense fallback="">
        <Clients />
        <About />
        <Platform />
        <ContactDirector />
        <Pricing />
        <Testimonials />
        <Faq />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
