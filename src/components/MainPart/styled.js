import styled from 'styled-components';
import Modal from 'react-modal';
import { ReactComponent as AppBtnSvg } from 'images/svg/plus28.svg';



export const AddIcon = styled(AppBtnSvg)`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  & .plus{
    color: ${props => props.theme.addColumnButton.plusColor};  
  }

  & .backgr{
    color: ${props => props.theme.addColumnButton.plusBackground};
    }
`;


export const ModalWindow = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 335px;
  max-height: 80vh;
  min-height: 200px;
  overflow-y: auto;
  padding: 24px;
  background-color: ${props => props.theme.modal.backgroundMain};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

`
export const WrapperMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: calc(100vh - 60px);

  background-image: url(${props => props.bgcUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 14px 20px 14px 20px;

  transition: all 250ms linear;

  

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    padding: 20x 32px 20x 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 14px 24px 14px 24px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.header.userName};
  font-size: 14px;
  letter-spacing: -0.02em;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 0;
  right: ${props => (props.length === 0 ? '-334px' : '-368px')};
  width: 334px;
  height: 56px;
  padding: 14px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 8px;
  background: ${props => props.theme.addColumnButton.background};
  outline: none;
  border: none;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover svg {
    transform: scale(1.1);
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => props.theme.addColumnButton.plusBackground};

  transition: all 250ms linear;

  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;


export const Text = styled.p`
  color: ${props => props.theme.addColumnButton.color};
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  overflow: auto;
  width: 100%;
  height: 100%;
  

  &::-webkit-scrollbar {
    height: 12px;
    width: calc(100% - 24px);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.column.scrollThumb};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.column.scrollTrack};
    border-radius: 12px;
    border: 1px solid ${props => props.theme.column.scrollBorder};
  }

  @media screen and (min-width: 768px) {
    /* overflow-x: ${props => (props.length < 2 ? 'hidden' : 'scroll')}; */
    overflow-x: scroll;
  }

  @media screen and (min-width: 1280px) {
    /* overflow-x: ${props => (props.length < 3 ? 'hidden' : 'scroll')}; */
    overflow-x: scroll;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 34px;
`;