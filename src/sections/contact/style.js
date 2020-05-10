import styled from 'styled-components';
import { rgba } from 'polished';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.palette.neutral.white};
  padding: 120px 0;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  ${(props) => props.display && `display: ${props.display}`}

  @media screen and (max-width: 1200px) {
    max-width: 992px;
    padding: 0 15px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
    padding: 0 15px;
    flex-direction: column-reverse;
  }
`;

export const LeftSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: auto;
  align-self: flex-start;
  margin-left: 120px;

  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.4)};
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.024)};
  font-size: 15px;
  letter-spacing: 0;
  width: 100%;
  ${(props) => props.width && `width: ${props.width}`};
  border: 1px solid ${({ theme }) => rgba(theme.palette.neutral.black, 0.04)};
  border-radius: 5px;
  padding: 3px 20px;
  height: 56px;
  margin-bottom: 20px;
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft}`}
`;

export const TextArea = styled.textarea`
  color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.4)};
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: ${({ theme }) => rgba(theme.palette.neutral.black, 0.024)};
  font-size: 15px;
  letter-spacing: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => rgba(theme.palette.neutral.black, 0.04)};
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 20px;
  height: 136px;
  resize: vertical;
`;
