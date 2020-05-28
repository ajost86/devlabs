import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import Avatar1 from 'assets/img/testimonials/avatar1.png';
import Avatar2 from 'assets/img/testimonials/avatar2.png';
import Avatar3 from 'assets/img/testimonials/avatar3.png';
import Avatar4 from 'assets/img/testimonials/avatar4.png';
import {
  Section,
  Container,
  SwiperContainer,
  Testimonial,
  Avatar,
  Text,
  Author,
  Name,
  Role,
} from './style';

function Testimonials() {
  const params = {
    speed: 800,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <>
      <Section id="testimonials">
        <Container>
          <SwiperContainer data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <Swiper {...params}>
              <Testimonial>
                <Avatar src={Avatar1} alt="Avatar" />
                <Text>
                  “Working with Aeroland is like having a family member who can fix everything!”
                </Text>
                <Author>
                  <Name>Colin</Name>
                  <Role> / Web designer</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={Avatar2} alt="Avatar" />
                <Text>
                  “Theme is straightforward to use and works great. It offers enough options for a
                  quick and clean setup”
                </Text>
                <Author>
                  <Name>Barney Smith</Name>
                  <Role>/ Marketing</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={Avatar3} alt="Avatar" />
                <Text>
                  “Great theme, just what we were looking for. Easy to install, easy to navigate.
                  Well-documented. Really enjoyed their support.”
                </Text>
                <Author>
                  <Name>Cassie Ventura</Name>
                  <Role> / Marketing</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={Avatar4} alt="Avatar" />
                <Text>
                  “Great template with many predefined and options that comes along with great
                  support by the theme developers.”
                </Text>
                <Author>
                  <Name>Rex Watson</Name>
                  <Role> / Marketing</Role>
                </Author>
              </Testimonial>
            </Swiper>
          </SwiperContainer>
        </Container>
      </Section>
    </>
  );
}

export default Testimonials;
