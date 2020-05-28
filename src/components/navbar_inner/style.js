import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.palette.neutral.white};
  box-shadow: 0 18px 40px 5px rgba(51, 51, 51, 0.1);
  height: 80px;
  color: ${({ theme }) => theme.palette.neutral.black};
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 150px;
  z-index: 10;
  top: 0px;
  left: 0;

  @media screen and (max-width: 1600px) {
    padding: 0px 50px;
  }

  @media screen and (max-width: 1200px) {
    padding: 15px 15px;
    flex-wrap: wrap;
    height: auto;
  }
`;
