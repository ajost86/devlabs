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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  justify-self: flex-start;

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

export const TextBlock = styled.div`
  padding-top: 30px;
  width: 540px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    align-self: flex-start;
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

  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
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
