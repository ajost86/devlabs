import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Element } from 'react-scroll';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import { Heading2, Paragraph } from 'assets/styles/typography';
import Avatar1 from 'assets/img/team/avatar1.png';
import Avatar2 from 'assets/img/team/avatar2.png';
import Avatar3 from 'assets/img/team/avatar3.png';
import Avatar4 from 'assets/img/team/avatar4.png';
import TeamCard from 'components/teamCard';
import { Section, Container, CenteredTitle } from './style';

function Team({ theme }) {
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1199: {
        slidesPerView: 4,
      },

      991: {
        slidesPerView: 3,
      },

      767: {
        slidesPerView: 2,
      },

      320: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <>
      <Element name="team">
        <Section id="team">
          <Container>
            <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <Heading2 color={theme.palette.neutral.white}>Our experience experts</Heading2>
            </CenteredTitle>
            <Paragraph
              textAlign="center"
              margin="15px 0px 60px 0px"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="150"
            >
              We’ll help you achieve your marketing & business goals
            </Paragraph>

            <Swiper {...params}>
              <TeamCard
                cardAvatar={Avatar1}
                cardTitle="Chad Brewer"
                cardSubtitle="Director"
                facebook="#"
                twitter="#"
                instagram="#"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              />
              <TeamCard
                cardAvatar={Avatar2}
                cardTitle="Eric Smith"
                cardSubtitle="CEO Founder"
                facebook="#"
                twitter="#"
                instagram="#"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="250"
              />
              <TeamCard
                cardAvatar={Avatar3}
                cardTitle="Erik Murray"
                cardSubtitle="Founder"
                facebook="#"
                twitter="#"
                instagram="#"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />
              <TeamCard
                cardAvatar={Avatar4}
                cardTitle="Cynthia Casey"
                cardSubtitle="Designer"
                facebook="#"
                twitter="#"
                instagram="#"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="350"
              />
              <TeamCard
                cardAvatar={Avatar1}
                cardTitle="Chad Brewer"
                cardSubtitle="Director"
                facebook="#"
                twitter="#"
                instagram="#"
              />
              <TeamCard
                cardAvatar={Avatar2}
                cardTitle="Chad Brewer"
                cardSubtitle="Director"
                facebook="#"
                twitter="#"
                instagram="#"
              />
              <TeamCard
                cardAvatar={Avatar3}
                cardTitle="Eric Smith"
                cardSubtitle="CEO Founder"
                facebook="#"
                twitter="#"
                instagram="#"
              />
              <TeamCard
                cardAvatar={Avatar4}
                cardTitle="Erik Murray"
                cardSubtitle="Founder"
                facebook="#"
                twitter="#"
                instagram="#"
              />
            </Swiper>
          </Container>
        </Section>
      </Element>
    </>
  );
}

Team.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(Team);
