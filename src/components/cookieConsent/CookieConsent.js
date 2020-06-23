import React, { useState } from 'react';
import Cookies from 'js-cookie';

import { Paragraph } from 'assets/styles/typography';
import { SolidButton } from 'assets/styles/buttons';
import Link from 'components/link';
import { Wrapper, Container } from './styled';

function CookieNotice() {
  const [fadeOut, setFadeOut] = useState(false);
  const [cookie, setCookie] = useState(Cookies.get('cookie-consent'));

  if (cookie) return null;

  return (
    <Wrapper className={fadeOut ? 'fade-out' : ''}>
      <Container>
        <Paragraph color="inherit">
          Developer Lab verwendet Cookies, um Dir den bestmöglichen Service zu gewährleisten. Wenn Du auf der Seite weiter surfst, stimmst Du der <Link to="/datenschutzerklärung">Cookie-Nutzung</Link> zu.
        </Paragraph>
        <SolidButton
          onClick={() => {
            setFadeOut(true);
            setTimeout(() => {
              setCookie(Cookies.set('cookie-consent', true, { expires: 365 }));
            }, 300);
          }}
        >
          ICH STIMME ZU
        </SolidButton>
      </Container>
    </Wrapper>
  );
}

export default CookieNotice;
