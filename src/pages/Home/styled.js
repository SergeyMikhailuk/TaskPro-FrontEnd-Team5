import styled from 'styled-components';

export const HomeWrapper = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 20px;

@media screen and (min-width: 768px) {
  height: calc(100vh - 68px);
  padding: 0;
}
`;

export const HomeWrapperBoard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;
