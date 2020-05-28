import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { Heading2, Heading4, Paragraph, NavLinkButton } from 'assets/styles/typography';
import Firefox from 'assets/img/clients/firefox.png';
import Bullfit from 'assets/img/clients/bullfit.png';
import Adroll from 'assets/img/clients/adroll.png';
import Eventbrite from 'assets/img/clients/eventbrite.png';
import Aqua from 'assets/img/clients/aqua.png';
import Pencil from 'assets/img/clients/pencil.png';
import Sixbase from 'assets/img/clients/sixbase.png';
import MackbookDownload from 'assets/img/platform/macbook-download.png';
import {
  Section,
  Container,
  CenteredTitle,
  DownloadSection,
  DownloadCard,
  MacbookImage,
} from './style';

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
            <Heading2>Unsere Kunden sprechen für sich</Heading2>
          </CenteredTitle>
          <Paragraph
            color="inherit"
            textAlign="center"
            margin="15px 0px 45px 0px"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            Ob etabliertes Unternehmen oder Startup, seit über 10 Jahren arbeiten wir mit den
            Technologie-Führern weltweit zusammen.
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
          <DownloadSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            <DownloadCard>
              <Heading4 data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                Unsere Kunden lieben uns!
              </Heading4>
              <Paragraph
                margin="0px 0px 20px 0px"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="350"
              >
                Lad dir jetzt unsere Case-Studies runter und überzeuge dich selbst von der Qualität
                unserer Arbeit.
              </Paragraph>
              <NavLinkButton
                to="/case-studies"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                Get AeroLand
              </NavLinkButton>
            </DownloadCard>

            <MacbookImage
              src={MackbookDownload}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="300"
            />
          </DownloadSection>
        </Container>
      </Section>
    </>
  );
}

export default Clients;
