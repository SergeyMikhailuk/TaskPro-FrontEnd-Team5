import styled from 'styled-components';
import { ReactComponent as IconInButtonSvg } from 'images/svg/plus28.svg'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 30%;
  left: 280%; 
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: ${props => props.theme.modal.backgroundMain};
  color: ${props => props.theme.themePopup.textSecondary};
  border-radius: 8px;
  width: 350px;
  height: 433px;
`;
export const ModalContent = styled.div`
  color: ${props => props.theme.themePopup.textMain};
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 14px;
  right: 14px;
  font-size: 24px;
  cursor: pointer;
  color: ${props => props.theme.themePopup.icon};
`;

export const NewBoardText = styled.h2`
  font-style: medium;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-family: 'Poppins';
  margin: 0;
   color: ${props => props.theme.themePopup.textSecondary};
   margin-bottom: 24px;
`;
export const StyledInput = styled.input`
  width: 100%;
  padding: 18px;
  border: 1px solid ${props => props.theme.themePopup.border};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;

  &:focus {
    border-color: ${props => props.theme.themePopup.boxShadow};
  }
`;


export const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;


export const Text = styled.p`
  font-family: 'Poppins';
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-top: 24px;
  margin-bottom: 14px;
`;

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 8px;
  margin-bottom:24px;
`;

export const Icon = styled.svg`
  height: 18px;
  width: 18px;
  stroke: ${props => props.theme.themePopup.icon};
`;

export const TextOne = styled.p`
  font-family: 'Poppins';
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-top: 24px;
  margin-bottom: 14px;
`;



export const ButtonModal = styled.button`
  background: ${props => props.theme.themePopup.backgroundBell};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.themePopup.border};
  border-radius: 8px;
  position: absolute;
  bottom: 24px;
  min-width: 302px;
  height: 49px; 
`;
export const IconInButton = styled(IconInButtonSvg)`
  width: 28px;
  height: 28px;
  margin-right: 3.5px;
  color: ${props => props.theme.themePopup.icon};
  fill: black;
`;
