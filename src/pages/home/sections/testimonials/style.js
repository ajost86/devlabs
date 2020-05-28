import styled from 'styled-components';
import { rgba, lighten } from 'polished';

import TestimonialsBackground from 'assets/img/testimonials/testimonials-bg.jpg';

export const Section = styled.section`
  padding: 100px 0;
  background: url(${TestimonialsBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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

export const SwiperContainer = styled.div`
  .swiper-button-next,
  .swiper-button-prev {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.palette.neutral.white};
    transition: background-color 200ms, opacity 600ms cubic-bezier(0.4, 0, 0.2, 1);
    --swiper-navigation-color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.8)};
    opacity: 0;

    &:after {
      --swiper-navigation-size: 12px;
    }

    &:hover {
      background-color: ${({ theme }) => theme.palette.primary.light};
      --swiper-navigation-color: ${({ theme }) => theme.palette.neutral.white};
    }
  }

  .swiper-button-next {
    &:after {
      margin-left: 2px;
    }
  }

  .swiper-button-prev {
    &:after {
      margin-right: 2px;
    }
  }

  &:hover {
    .swiper-button-next,
    .swiper-button-prev {
      opacity: 1;
    }
  }
`;

export const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 90px;
  margin-bottom: 33px;
  background: ${({ theme }) => lighten(0.3, theme.palette.neutral.grey)};
  border-radius: 50%;
`;

export const Text = styled.p`
  font-size: 34px;
  color: ${({ theme }) => theme.palette.neutral.white};
  width: 800px;
  max-width: 90%;
  text-align: center;
  line-height: 1.42;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
`;

export const Author = styled.div`
  margin-top: 45px;
  line-height: 2;
`;

export const Name = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.palette.neutral.white};
  font-weight: 500;
`;

export const Role = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.neutral.white};
`;
