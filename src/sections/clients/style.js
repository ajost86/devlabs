import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
  background: ${({ theme }) => rgba(theme.palette.primary.light, 0.064)};
  padding-top: 100px;
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 0 15px 75px 15px;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 75px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 75px 15px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
