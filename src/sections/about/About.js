import React, { useState } from 'react';
import { Element } from 'react-scroll';

import { Heading2 } from 'assets/styles/typography';
import BoxIcon1 from 'assets/img/about/box-icon1.png';
import BoxIcon2 from 'assets/img/about/box-icon2.png';
import BoxIcon3 from 'assets/img/about/box-icon3.png';
import BoxIcon4 from 'assets/img/about/box-icon4.png';
import BoxIcon5 from 'assets/img/about/box-icon5.png';
import BoxIcon6 from 'assets/img/about/box-icon6.png';
import PlayCircle from 'assets/img/about/play-circle.svg';

import Card from 'components/card';
import VideoOverlay from 'components/videoOverlay';
import { Section, Container, CenteredTitle, CardGrid, VideoButton } from './style';

function About() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      {showVideo && (
        <VideoOverlay
          onClose={() => {
            setShowVideo(false);
            document.body.classList.remove('video-open');
          }}
        />
      )}

      <Element name="about">
        <Section id="about">
          <Container>
            <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
              <Heading2>
                We’ve created enticing designs for <br /> startups and new businesses
              </Heading2>
            </CenteredTitle>

            <VideoButton
              onClick={() => {
                setShowVideo(true);
                document.body.classList.add('video-open');
              }}
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
            >
              <PlayCircle />
              <span className="videoButtonText">Intro & Demo Video</span>
            </VideoButton>

            <CardGrid>
              <Card
                className="aboutCard"
                cardIcon={<img src={BoxIcon1} alt="" />}
                cardTitle="Web Development"
                cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={BoxIcon2} alt="" />}
                cardTitle="Social Media"
                cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={BoxIcon3} alt="" />}
                cardTitle="SEO Marketing"
                cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              />

              <Card
                className="aboutCard"
                cardIcon={<img src={BoxIcon4} alt="" />}
                cardTitle="Keywords Search"
                cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={BoxIcon5} alt="" />}
                cardTitle="Email optimization"
                cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              />
              <Card
                className="aboutCard"
                cardIcon={<img src={BoxIcon6} alt="" />}
                cardTitle="Web Design"
                cardParagraph="Consider this app a platform for connecting people from everywhere based on their preferences."
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="400"
              />
            </CardGrid>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default About;
