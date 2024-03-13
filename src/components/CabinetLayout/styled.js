import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.container.background};

  @media screen and (min-width: 1440px) {
    width: calc(100% - 260px);
  }
`;
