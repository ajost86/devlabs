import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
  background: ${({ theme }) => theme.palette.gradients.background};
`;

export const Container = styled.div`
  max-width: 1200px;
  position: relative;
  margin: 0 auto;
  padding: 120px 0px;

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 120px 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 120px 15px;
  }

  .swiper-pagination {
    position: static;
    margin-top: 50px;
    height: 60px;
  }

  .swiper-pagination.swiper-pagination-bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet {
    --swiper-pagination-color: ${({ theme }) => theme.palette.neutral.white};
    margin: 8px;
    display: inline-block;
    background-color: ${({ theme }) => rgba(theme.palette.neutral.white, 0.6)};
    opacity: 1;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);

    &:not(.swiper-pagination-bullet-active):hover {
      width: 12px;
      height: 12px;
      margin: 6px;
      background-color: ${({ theme }) => theme.palette.neutral.white};
    }
  }

  .swiper-container-horizontal .swiper-pagination-bullets .swiper-pagination-bullet-active {
    width: 16px;
    height: 16px;
    box-shadow: 0 0 9px ${({ theme }) => rgba(theme.palette.neutral.black, 0.1)};
    opacity: 1;
    background-color: ${({ theme }) => theme.palette.neutral.white};
    margin: 4px;
  }
`;

export const CenteredTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TeamCard = styled.div``;
