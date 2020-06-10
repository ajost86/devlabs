import styled from 'styled-components';

import Link from 'components/link';

export const Section = styled.section`
  padding: 60px 0;
  margin: 0;
  ${(props) => props.margin && `margin: ${props.margin}`}
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

export const CardSection = styled.div`
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;

  a {
    width: 100%;
  }
`;

export const Card = styled.div`
  width: calc(33.333% - 30px);
  margin: 15px 15px 30px 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 992px) {
    width: calc(50% - 30px);
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 30px);
  }
`;

export const CardTitle = styled(Link)`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.23;
  color: ${({ theme }) => theme.palette.primary.dark};
  text-align: center;
  && {
    width: auto;
  }
`;
