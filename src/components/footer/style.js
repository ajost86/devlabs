import styled from 'styled-components';
import { rgba, darken } from 'polished';

import { Heading6, Paragraph } from 'assets/styles/typography';
import Link from 'components/link';

export const Section = styled.section`
  background: ${({ theme }) => darken(0.1, theme.palette.primary.dark)};
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px 0px 15px;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px 0px 15px;
    flex-direction: column;
  }
`;

export const Separator = styled.hr`
  border: none;
  border-top: 1px solid hsla(0, 0%, 92.9%, 0.1);
  margin: 0;
`;

export const Info = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 300px;
  padding: 87px 0 90px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }
`;

export const Logo = styled.img`
  margin-bottom: 30px;
`;

export const FooterLink = styled(Link)`
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > ${FooterLink}, > ${Paragraph} {
    margin-bottom: 10px;
  }

  ${Heading6} {
    margin-bottom: 20px;
  }
`;

export const Copyright = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
`;

export const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => rgba(theme.palette.neutral.white, 1)};
  margin: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.neutral.white};
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.default};
    border: 1px solid ${({ theme }) => theme.palette.primary.default};
    color: ${({ theme }) => theme.palette.neutral.white};
  }
`;

export const Tweet = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;
`;

export const TweetBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.palette.neutral.white};
  padding: 19px 20px 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25px;
  font-size: 14px;
  min-width: 250px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    transform: rotate(45deg);
    left: 30px;
    bottom: -12px;
    border-color: transparent ${({ theme }) => theme.palette.neutral.white} transparent transparent;
    border-width: 12px;
  }
`;

export const TweetLink = styled(Link)`
  font-weight: 400;
  transition: color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;

  &:after {
    content: none;
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary.default};
  }
`;

export const TweetInfo = styled.div`
  display: flex;
  align-items: flex-start;

  ${Column} {
    margin-left: 14px;
  }

  img {
    margin-top: 3px;
    max-width: 50px;
  }
`;

export const TweetUser = styled.span`
  color: ${({ theme }) => theme.palette.neutral.white};
  font-size: 14px;
  font-weight: 500;
`;

export const TweetDate = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
`;
