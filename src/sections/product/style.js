import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.neutral.white};
  padding: 120px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}
  flex-direction: column;

  .section-description {
    line-height: 2.14;
  }

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 0px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  position: relative;

  flex-grow: 1;

  &:first-child {
    width: calc(33.333% - 30px);
    margin-right: 45px;
    flex-grow: 0;

    @media screen and (max-width: 960px) {
      width: 100%;
    }
  }
`;

export const FeaturesGrid = styled.div`
  display: flex;
  margin-top: 60px;

  .feature {
    margin-bottom: 50px;
    opacity: 0.6;
    cursor: pointer;
    transition: opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:last-child {
      margin-bottom: 0;
    }

    &:hover,
    &.active {
      opacity: 1;
    }
  }

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FeatureImage = styled.img`
  border-radius: 20px;
  position: absolute;
  width: 100%;

  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &.fade-appear,
  &.fade-enter {
    opacity: 0;
  }

  &.fade-appear-active,
  &.fade-appear-done,
  &.fade-enter-active,
  &.fade-enter-done {
    opacity: 1;
  }

  &.fade-exit {
    opacity: 0;
  }

  @media screen and (max-width: 960px) {
    position: relative;
    width: 100%;
    margin-top: 20px;

    &.fade-exit {
      display: none;
    }
  }
`;
