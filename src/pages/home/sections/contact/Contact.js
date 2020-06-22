import React, {
  // useState
} from 'react';
import { Element } from 'react-scroll';
import replaceImageFormat from 'helpers/replaceImageFormat';

import { Heading2, Paragraph } from 'assets/styles/typography';
// import { GradientButton } from 'assets/styles/buttons';
import Link from 'components/link';
import ContactImage from 'assets/img/contact/contact-image.png';
import WhatsappIcon from 'assets/img/hero/whatsapp-icon.svg';

import {
  Section,
  Container,
  LeftSection,
  RightSection,
  Image,
  // Input,
  // TextArea,
  // SuccessMessage,
  CTARow,
  WhatsappButtonIcon,
  QuestionsText,
} from './style';

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   subject: '',
  //   message: '',
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [showSuccess, setShowSuccess] = useState(false);

  // const onInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   const { name, email, subject, message } = formData;
  //   if (!name || !email || !subject || !message) return;

  //   const payload = { ...formData };

  //   const encoded = Object.keys(payload)
  //     .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(payload[k])}`)
  //     .join('&');

  //   setIsLoading(true);

  //   fetch(
  //     'https://script.google.com/macros/s/AKfycby5oi2fCfMfuTL-9a0_AcfosgJt4EHbL2wD_gywM-ng0ud6O24/exec',
  //     {
  //       method: 'POST',
  //       body: encoded,
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //     }
  //   )
  //     .then(() => {
  //       setIsLoading(false);
  //       setShowSuccess(true);
  //     })
  //     .catch(() => {
  //       setIsLoading(false);
  //     });
  // };

  return (
    <>
      <Element name="contact">
        <Section id="contact">
          <Container>
            <LeftSection>
              <Heading2 className="left-section-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
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
              <CTARow
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="200"
              >
                <Link
                  button
                  target="_blank"
                  href="https://wa.me/491702988400?text=Hallo,%20ich%20würde%20gerne%20mehr%20über%20die%20Teamerweiterung%20von%20Developer%20Lab%20erfahren."
                  color="white"
                >
                  <WhatsappButtonIcon>
                    <WhatsappIcon width="24px" height="24px" />
                  </WhatsappButtonIcon>
                  Whatsapp Chat Starten
                </Link>
                <QuestionsText>
                  <Paragraph fontWeight="500" color="#2e3280">
                    Lieber per Email?
                  </Paragraph>
                  <Link href="mailto:hello@developer-lab.de">Hier kontaktieren</Link>
                </QuestionsText>
              </CTARow>
              {
              /*
              !showSuccess && (
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
              )
              */
              }
              {
              /*
              showSuccess && <SuccessMessage>Deine Nachricht wurde erfolgreich versendet. Wir melden uns in Kürze bei Dir.</SuccessMessage>
              */
              }
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
