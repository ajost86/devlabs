import styled from 'styled-components';

import DownloadSectionBackground from 'assets/img/platform/download-section-bg.png';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.neutral.white};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 60px 100px;

  @media screen and (max-width: 768px) {
    margin: 30px 15px;
  }

  .platformCard {
    width: 16.666%;

    @media screen and (max-width: 1200px) {
      width: 33.333%;
    }
    @media screen and (max-width: 768px) {
      width: 50%;
    }
  }
`;

export const DownloadSection = styled.div`
  margin: 80px 0px;
  position: relative;
  background: url(${DownloadSectionBackground}) 55% 100%,
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

  @media screen and (max-width: 768px) {
    padding: 0px 15px;
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
