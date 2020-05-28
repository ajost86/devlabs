import React, { useEffect } from 'react';

import { Heading2, Heading6, Paragraph } from 'assets/styles/typography';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';

import cs1 from 'assets/img/case-studies/cs1.jpg';
import cs2 from 'assets/img/case-studies/cs2.jpg';
import cs3 from 'assets/img/case-studies/cs3.jpg';
import cs4 from 'assets/img/case-studies/cs4.jpg';

import NavbarInner from '../../components/navbar_inner';
import Footer from '../../components/footer';

import { Section, Container, CenteredTitle, CardSection, Card, Image } from './style';

function CaseStudies({ theme }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavbarInner />
      <Section margin="80px 0px 0px 0px">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Web Apps</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <Image src={cs1} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Manage Time
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Controlling your daily tasks, assign and discuss on projects, checking deadlines and
                set time to relax.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs2} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Connect Ideas
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Consider this app a platform for connecting people from everywhere based on their
                preferences.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs3} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Make Schedules
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                An app that is designed for making plans, writing notes, record ideas and remind of
                your schedules.
              </Paragraph>
            </Card>
          </CardSection>

          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Mobile Apps</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <Image src={cs4} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Manage Time
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Controlling your daily tasks, assign and discuss on projects, checking deadlines and
                set time to relax.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs1} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Connect Ideas
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Consider this app a platform for connecting people from everywhere based on their
                preferences.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs2} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Make Schedules
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                An app that is designed for making plans, writing notes, record ideas and remind of
                your schedules.
              </Paragraph>
            </Card>
          </CardSection>

          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>SEO</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <Image src={cs3} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Manage Time
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Controlling your daily tasks, assign and discuss on projects, checking deadlines and
                set time to relax.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs4} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Connect Ideas
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Consider this app a platform for connecting people from everywhere based on their
                preferences.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs1} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Make Schedules
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                An app that is designed for making plans, writing notes, record ideas and remind of
                your schedules.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs1} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Manage Time
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Controlling your daily tasks, assign and discuss on projects, checking deadlines and
                set time to relax.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs2} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Connect Ideas
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                Consider this app a platform for connecting people from everywhere based on their
                preferences.
              </Paragraph>
            </Card>

            <Card>
              <Image src={cs3} />
              <Heading6 margin="10px 0px" color={theme.palette.primary.dark}>
                Make Schedules
              </Heading6>
              <Paragraph color="inherit" textAlign="center">
                An app that is designed for making plans, writing notes, record ideas and remind of
                your schedules.
              </Paragraph>
            </Card>
          </CardSection>
        </Container>
      </Section>
      <Footer />
    </>
  );
}

CaseStudies.propTypes = {
  theme: PropTypes.object,
};

export default withTheme(CaseStudies);
