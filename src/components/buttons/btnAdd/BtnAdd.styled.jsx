import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 334px;
  height: 56px;
  border-radius: 8px;
  padding: 20px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 200ms linear;
  &:hover,
  &:focus {
  background-color: ${props => props.theme.themePopup.background};
  }
  background-color: ${props => props.theme.themePopup.textAccent};
`;
export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.themePopup.textSecondary};
`;

export const TitleButton = styled.p`
  color: ${props => props.theme.themePopup.textSecondary};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;

export const ContainerColumn = styled.button`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 334px;
  height: 56px;
  border-radius: 8px;
  padding: 20px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
 background-color: ${props => props.theme.themePopup.background};
`;
export const PlusIconColumn = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.themePopup.background};
`;

export const TitleButtonColumn = styled.p`
  color: ${props => props.theme.themePopup.backgroundBell};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;
