import React, { useState } from 'react';
import { Element } from 'react-scroll';
import replaceImageFormat from 'helpers/replaceImageFormat';

import { Heading2, Paragraph } from 'assets/styles/typography';
import { GradientButton } from 'assets/styles/buttons';
import ContactImage from 'assets/img/contact/contact-image.png';

import {
  Section,
  Container,
  LeftSection,
  RightSection,
  Image,
  Input,
  TextArea,
  SuccessMessage,
} from './style';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const onInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) return;

    const payload = { ...formData };

    const encoded = Object.keys(payload)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(payload[k])}`)
      .join('&');

    setIsLoading(true);

    fetch(
      'https://script.google.com/macros/s/AKfycby5oi2fCfMfuTL-9a0_AcfosgJt4EHbL2wD_gywM-ng0ud6O24/exec',
      {
        method: 'POST',
        body: encoded,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    )
      .then(() => {
        setIsLoading(false);
        setShowSuccess(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Element name="contact">
        <Section id="contact">
          <Container>
            <LeftSection>
              <Heading2 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                Lass uns sprechen!
              </Heading2>
              <Paragraph
                color="inherit"
                margin="0px 0px 60px 0px"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="150"
              >
                Wenn du heute schon Unterstützung brauchst, oder doch vielleicht erst morgen:
                Schreib uns eine kurze Nachricht, damit wir in Kontakt bleiben können.
              </Paragraph>
              {!showSuccess && (
                <form
                  onSubmit={onSubmit}
                  className="form-elements"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <Input
                    type="text"
                    placeholder="Name *"
                    name="name"
                    value={formData.name}
                    onChange={onInputChange}
                    width="calc(50% - 20px)"
                    required
                  />
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={onInputChange}
                    placeholder="Email *"
                    name="email"
                    marginLeft="20px"
                    width="50%"
                  />
                  <Input
                    type="text"
                    required
                    placeholder="Betreff *"
                    name="subject"
                    value={formData.subject}
                    onChange={onInputChange}
                  />

                  <TextArea
                    name="message"
                    required
                    placeholder="Nachricht *"
                    value={formData.message}
                    onChange={onInputChange}
                  />

                  <GradientButton
                    type="submit"
                    disabled={isLoading}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="200"
                  >
                    Nachricht senden
                  </GradientButton>
                </form>
              )}

              {showSuccess && <SuccessMessage>Message was sent successfully!</SuccessMessage>}
            </LeftSection>

            <RightSection data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
              <Image src={replaceImageFormat(ContactImage)} />
            </RightSection>
          </Container>
        </Section>
      </Element>
    </>
  );
}

export default Contact;
