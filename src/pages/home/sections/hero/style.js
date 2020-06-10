import styled, { keyframes } from 'styled-components';

import HeroBackground from 'assets/img/hero/startup-bg.jpg';

const moveLeft = keyframes`
  from {
    left: 0%
  }

  to {
    left: -100%;
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.gradients.background};
  background: url(${HeroBackground});
  background-repeat: none;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0px 150px;
  display: flex;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1600px) {
    padding: 0px 50px;
  }

  @media screen and (max-width: 1200px) {
    padding: 15px 15px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 1023px) and (orientation: portrait) {
    min-height: 900px;
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 30px;

  button {
    align-self: flex-start;
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    padding-top: 120px;
    min-height: auto;
    margin-bottom: 50px;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: auto;
  }

  @media screen and (min-width: 1023px) and (orientation: portrait) {
    min-height: 900px;
    justify-content: center;
  }
`;

export const CTARow = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WhatsappButtonIcon = styled.div`
  margin-right: 8px;
  display: flex;
`;

export const QuestionsText = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 1024px) {
    height: auto;
    margin-top: auto;
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }

  @media screen and (min-width: 1023px) and (orientation: portrait) {
    min-height: 900px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 856px;
  position: relative;
  bottom: -32px;
`;

export const WaveAnimation = styled.svg`
  width: 200%;
  position: absolute;
  bottom: 0;
  left: 0;

  animation: ${moveLeft} 6s linear infinite;
`;
