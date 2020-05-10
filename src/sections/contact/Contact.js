import React from 'react';
import { Element } from 'react-scroll';

import { Heading2, Paragraph } from 'assets/styles/typography';
import { GradientButton } from 'assets/styles/buttons';
import ContactImage from 'assets/img/contact/contact-image.png';

import { Section, Container, LeftSection, RightSection, Image, Input, TextArea } from './style';

function Contact() {
  return (
    <>
      <Element name="contact">
        <Section id="contact">
          <Container>
            <LeftSection>
              <Heading2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                Let’s cooperate!
              </Heading2>
              <Paragraph
                color="inherit"
                margin="0px 0px 60px 0px"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="150"
              >
                Let’s become partners to build a better future for today.
              </Paragraph>
              <form data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <Input type="text" placeholder="Name *" name="name" width="calc(50% - 20px)" />
                <Input
                  type="email"
                  placeholder="Email *"
                  name="email"
                  marginLeft="20px"
                  width="50%"
                />
                <Input type="text" placeholder="Subject *" name="subject" />

                <TextArea placeholder="Message *" />

                <GradientButton data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                  Send Message
                </GradientButton>
              </form>
            </LeftSection>

            <RightSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <Image src={ContactImage} />
            </RightSection>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default Contact;
