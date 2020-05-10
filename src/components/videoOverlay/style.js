import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;
`;

export const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 12;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: white;
  transition: background-color 200ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const VideoYoutube = styled.div`
  width: 75%;
  height: 80%;
  z-index: 13;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.45);
`;
