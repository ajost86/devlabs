import styled from 'styled-components';
import { rgba } from 'polished';

export const SliderCard = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.neutral.white};
  align-items: center;
  padding: 30px;
  min-height: 380px;
  ${(props) => props.small && 'padding: 30px'};
  box-shadow: 0 4px 20px rgba(51, 51, 51, 0.1);
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CardAvatar = styled.img`
  width: 140px;
`;

export const SocialIcons = styled.div`
  display: flex;
`;

export const SocialIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => rgba(theme.palette.neutral.black, 0.1)};
  margin: 20px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.6)};
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  ::after {
    background-color: ${({ theme }) => theme.palette.primary.default};
    color: ${({ theme }) => theme.palette.neutral.white};
    line-height: 1.2;
    content: attr(aria-label);
    position: absolute;
    padding: 10px 8px;
    top: -42px;
    border-radius: 5px;
    min-width: 30px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
    visibility: hidden;
    opacity: 0;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  ::before {
    width: 0px;
    height: 0px;
    z-index: 1;
    border: 6px solid ${({ theme }) => theme.palette.primary.default};
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    content: '';
    position: absolute;
    top: -4px;
    visibility: hidden;
    opacity: 0;
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.default};
    border: 1px solid ${({ theme }) => theme.palette.primary.default};
    color: ${({ theme }) => theme.palette.neutral.white};
    ::after,
    ::before {
      visibility: visible;
      opacity: 1;
    }

    ::after {
      top: -46px;
    }

    ::before {
      top: -8px;
    }
  }
`;
