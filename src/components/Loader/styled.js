import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const LoaderSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;

  @media screen and (min-width: 768px) {
    width: 50px;
  }

  @media screen and (min-width: 1440px) {
    width: 80px;
  }
`;
