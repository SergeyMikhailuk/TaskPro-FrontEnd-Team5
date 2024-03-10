import styled from 'styled-components';

// export const HomeWrapper = styled.h1`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
// `;

export const HomeWrapperBoard = styled.div`
display: flex;
align-items: center;
width: 100%;
height: 100%;
`;

export const Description = styled.p`
  max-width: 486px;
  color: ${props => props.theme.themePopup.textSecondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const Accent = styled.span`
  color: ${props => props.theme.themePopup.textAccent};
`;
