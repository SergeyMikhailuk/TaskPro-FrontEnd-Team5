import styled from 'styled-components';
import { ReactComponent as AppBtnSvg } from 'images/svg/plus28.svg';

export const AddIcon = styled(AppBtnSvg)`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  & .plus {
    color: ${props => props.theme.addColumnButton.plusColor};
  }

  & .backgr {
    color: ${props => props.theme.addColumnButton.plusBackground};
  }
`;

export const WrapperMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  background-image: url(${({ $url }) => $url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 14px 20px 14px 20px;

  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 39px;

  div {
    background-color: ${props => props.theme.header.background};
    padding: 4px 6px;
    border-radius: 6px;
    border: 1px solid ${props => props.theme.addColumnButton.color};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1044px) {
    margin-bottom: 10px;
  }
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
  right: ${({ $length }) => ($length === 0 ? '-334px' : '-368px')};
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
  font-weight: 500;
  letter-spacing: -0.28px;
  width: 150px;
`;

export const Wrapper = styled.div`
  display: flex;
  overflow-x: auto;
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
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 34px;
`;
