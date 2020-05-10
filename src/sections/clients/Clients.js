import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { Heading2, Paragraph } from 'assets/styles/typography';
import Firefox from 'assets/img/clients/firefox.png';
import Bullfit from 'assets/img/clients/bullfit.png';
import Adroll from 'assets/img/clients/adroll.png';
import Eventbrite from 'assets/img/clients/eventbrite.png';
import Aqua from 'assets/img/clients/aqua.png';
import Pencil from 'assets/img/clients/pencil.png';
import Sixbase from 'assets/img/clients/sixbase.png';
import { Section, Container, CenteredTitle } from './style';

function Clients() {
  const params = {
    speed: 800,
    loop: true,
    autoplay: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1199: {
        slidesPerView: 5,
      },

      991: {
        slidesPerView: 5,
      },

      767: {
        slidesPerView: 4,
      },

      320: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <Section id="clients">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>A reliable top-rated company</Heading2>
          </CenteredTitle>
          <Paragraph
            color="inherit"
            textAlign="center"
            margin="15px 0px 45px 0px"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            We deliver the best services for app design and coding
          </Paragraph>
          <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <Swiper {...params}>
              <img src={Firefox} alt="" />
              <img src={Bullfit} alt="" />
              <img src={Adroll} alt="" />
              <img src={Eventbrite} alt="" />
              <img src={Aqua} alt="" />
              <img src={Pencil} alt="" />
              <img src={Sixbase} alt="" />
            </Swiper>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default Clients;
