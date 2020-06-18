import React from 'react';
import Swiper from 'react-id-swiper';
import replaceImageFormat from 'helpers/replaceImageFormat';
import 'swiper/css/swiper.css';

import { Heading2, Heading4, Paragraph } from 'assets/styles/typography';
import Link from 'components/link';

import Bayer from 'assets/img/clients/bayer.png';
import Nike from 'assets/img/clients/nike.png';
import Pepsi from 'assets/img/clients/pepsi.png';
import Philips from 'assets/img/clients/philips.png';
import Tmobile from 'assets/img/clients/t-mobile.png';
import Unilever from 'assets/img/clients/unilever.png';
import Vw from 'assets/img/clients/vw.png';
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
              <img src={replaceImageFormat(Bayer)} alt="" />
              <img src={replaceImageFormat(Nike)} alt="" />
              <img src={replaceImageFormat(Pepsi)} alt="" />
              <img src={replaceImageFormat(Philips)} alt="" />
              <img src={replaceImageFormat(Tmobile)} alt="" />
              <img src={replaceImageFormat(Unilever)} alt="" />
              <img src={replaceImageFormat(Vw)} alt="" />
            </Swiper>
          </div>
          <DownloadSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
            <DownloadCard>
              <Heading4 data-aos="fade-up" data-aos-duration="600" data-aos-delay="400">
                Beispiele unserer Projekte!
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
              <Link
                to="/case-studies"
                button
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              >
                Zu den Case-Studies
              </Link>
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
