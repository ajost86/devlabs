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
                <Text>“Dev Lab ist unser #1 Partner für sämtliche IT-Projekte!”</Text>
                <Author>
                  <Name>Alexander Jost</Name>
                  <Role> / CEO Health Tech Media GmbH</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar3)} alt="Avatar" />
                <Text>
                  “Developer Lab hat gemeinsam mit uns einen einzigartigen Onlineshop erstellt, der
                  die Branche revolutioniert. Wir konnten zahlreiche Sonderfeatures umsetzen, von
                  denen unsere Kunden profitieren.”
                </Text>
                <Author>
                  <Name>Host Baumgartner</Name>
                  <Role>/ CEO Waffen Baumgartner</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar1)} alt="Avatar" />
                <Text>
                  “Dank Developer Lab können wir uns kurzfristig externe Entwickler beschaffen, die
                  uns bei der Umsetzung unterstützen.”
                </Text>
                <Author>
                  <Name>Henrik Schäfer</Name>
                  <Role> / CEO Solution25</Role>
                </Author>
              </Testimonial>
              <Testimonial>
                <Avatar src={replaceImageFormat(Avatar4)} alt="Avatar" />
                <Text>
                  “Die Teamerweiterung von Developer-Lab hat die perfekte Alternative geschaffen..”
                </Text>
                <Author>
                  <Name>Erik Waldeck</Name>
                  <Role> / CEO eFab</Role>
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
