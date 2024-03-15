import styled from 'styled-components';

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
