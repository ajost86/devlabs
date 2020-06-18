import styled from 'styled-components';
import replaceImageFormat from 'helpers/replaceImageFormat';

import DownloadSectionBackground from 'assets/img/platform/download-section-bg.png';

export const Section = styled.section`
  padding-top: 100px;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 0 15px 0px 15px;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 60px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DownloadSection = styled.div`
  margin: 120px 0px 80px 0;
  position: relative;
  background: url(${replaceImageFormat(DownloadSectionBackground)}) 55% 100%,
    ${({ theme }) => theme.palette.gradients.background};
  background-repeat: no-repeat;
  border-radius: 5px;
  height: 305px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    align-self: flex-start;
  }

  @media screen and (max-width: 1200px) {
    height: auto;
    padding-top: 80px;
    flex-direction: row;
    margin: 0px 15px;
  }
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column-reverse;
    padding-bottom: 80px;
    margin: 0px 15px;
  }
`;

export const DownloadCard = styled.div`
  padding-left: 70px;
  width: 50%;

  @media screen and (max-width: 768px) {
    padding: 0px 15px;
    width: 100%;
  }
`;

export const MacbookImage = styled.img`
  position: absolute;
  top: -50px;
  right: -70px;

  @media screen and (max-width: 1200px) {
    position: relative;
    width: 50%;
    top: 0px;
    right: 0px;
    order: 0;
  }
  @media screen and (max-width: 768px) {
    position: relative;
    align-self: center;
    order: 0;
    width: calc(100% - 60px);
    margin: 0px 30px;
  }
`;
