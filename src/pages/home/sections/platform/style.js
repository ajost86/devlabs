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
