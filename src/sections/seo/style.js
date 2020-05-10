import styled from 'styled-components';

import SeoBackground from 'assets/img/seo/seo-bg.png';

export const Section = styled.section`
  background: url(${SeoBackground}) top right 170px no-repeat,
    ${({ theme }) => theme.palette.gradients.background};
  padding: 120px 0;

  @media screen and (max-width: 960px) {
    padding: 60px 15px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Stores = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  a {
    margin-right: 10px;
    display: inline-block;

    &:last-child {
      margin-right: 0;
    }
  }

  img {
    display: block;
    border-radius: 5px;
    max-width: 100%;
    height: auto;
  }
`;
