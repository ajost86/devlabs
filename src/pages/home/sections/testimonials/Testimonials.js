import React from 'react';
import Swiper from 'react-id-swiper';
import replaceImageFormat from 'helpers/replaceImageFormat';
import 'swiper/css/swiper.css';

import Avatar1 from 'assets/img/testimonials/avatar1.png';
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
                <Avatar src={replaceImageFormat(Avatar1)} alt="Avatar" />
                <Text>
                  “Dank Developer Lab können wir kurzfristig externe Entwickler beschaffen, die uns bei der Umsetzung unterstützen.”
                </Text>
                <Author>
                  <Name>Henrik Schäfer</Name>
                  <Role> / Geschäftsführer Solution25, E-Commerce Agentur</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar3)} alt="Avatar" />
                <Text>
                  “Wir erhalten zahlreiche Anfragen zu neuen Projekten. Mit Developer Lab können wir diese umsetzen.”
                </Text>
                <Author>
                  <Name>Johannes Berr</Name>
                  <Role> / Geschäftsführer Elements Webdesign, Agentur für Websiteentwicklung</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar1)} alt="Avatar" />
                <Text>
                  “Developer Lab ist unser #1 Partner für sämtliche IT Projekte”
                </Text>
                <Author>
                  <Name>Alexander Jost</Name>
                  <Role> / CEO Health Tech Media GmbH, Heathcare Agency</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar4)} alt="Avatar" />
                <Text>
                  “Wir kümmern uns um das perfekte Marketing, Developer Lab um die dafür passende technische Lösung.”
                </Text>
                <Author>
                  <Name>Sergej Etkov</Name>
                  <Role> / CEO TAKEOVER MARKETING, Onlinemarketing Agentur</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar4)} alt="Avatar" />
                <Text>
                  “Unsere Großkunden haben höchste Ansprüche, die White Label Lösung von Developer Lab hilft uns kurfristig unsere Ressourcen zu erweitern”
                </Text>
                <Author>
                  <Name>Günter Dechmann</Name>
                  <Role> / Geschäftsführer DATORA WEBSYSTEMS, Agentur für Websiteentwicklung</Role>
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
