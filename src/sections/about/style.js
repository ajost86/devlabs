import styled from 'styled-components';

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
    padding: 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0px 15px;
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

  .aboutCard {
    width: calc(33.333% - 30px);
    margin: 15px;

    @media screen and (max-width: 992px) {
      width: calc(50% - 30px);
    }
    @media screen and (max-width: 768px) {
      width: calc(100% - 30px);
    }
  }
`;

export const VideoButton = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  margin: 40px 0px;
  .videoButtonText {
    text-transform: uppercase;
    color: inherit;
    margin-left: 10px;
    letter-spacing: 3px;
    font-weight: 500;
    position: relative;

    &::after {
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      content: '';
      position: absolute;
      bottom: -2px;
      right: 0;
      width: 0;
      height: 1px;
      background-color: inherit;
    }
  }

  &:hover {
    cursor: pointer;
    .videoButtonText::after {
      width: 100%;
      right: auto;
      left: 0;
    }
  }
`;
