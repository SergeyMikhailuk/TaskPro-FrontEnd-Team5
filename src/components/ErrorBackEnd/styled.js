import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #9dc888;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const OverlayTitleError = styled.h1`
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 38px;
  }
`;

export const OverlayTitleErrorAccent = styled.span`
  color: red;
  text-decoration-line: underline;
`;

export const OverlayLinks = styled.div`
  font-size: 15px;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(1%, 50%);
  transition: border-color 0.3s ease;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
    top: 70%;
  }
`;
