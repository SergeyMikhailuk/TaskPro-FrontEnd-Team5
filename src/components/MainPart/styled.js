import styled from 'styled-components';

export const WrapperMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  height: calc(100vh - 60px);

  background-image: url(${props => props.bgcUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 14px 20px 0 20px;

  margin-left: ${props => (props.isOpen ? '225px' : '0')};
  opacity: ${props => (props.isOpen ? '0.6' : '1')};
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    height: calc(100vh - 68px);
    padding: 26px 32px 0 32px;

    margin-left: ${props => (props.isOpen ? '260px' : '0')};
  }

  @media screen and (min-width: 1280px) {
    padding: 10px 24px 0 24px;
    margin-left: 260px;
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
`;

export const Title = styled.h2`
  color: ${props => props.theme.header.userName};
  font-size: 20px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const AddButton = styled.button`
  position: absolute;
  top: 0;

  right: ${props => (props.length === 0 ? '-334px' : '-368px')};
  width: 334px;
  height: 56px;
  padding: 14px 79px;

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

  &:hover {
    opacity: 0.9;
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

export const AddIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.addColumnButton.plusColor};
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

  overflow-x: scroll;
  width: 100%;
  height: 100%;
  margin-bottom: 8px;

  user-select: none;

  ::-webkit-scrollbar {
    height: 12px;
    width: calc(100% - 24px);
  }

  ::-webkit-scrollbar-track {
    background-color: ${props => props.theme.column.scrollTrack};
    border: 1px solid ${props => props.theme.column.scrollBorder};
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${props => props.theme.column.scrollThumb};
  }

  @media screen and (min-width: 768px) {
    overflow-x: ${props => (props.length < 2 ? 'hidden' : 'scroll')};
  }

  @media screen and (min-width: 1280px) {
    overflow-x: ${props => (props.length < 3 ? 'hidden' : 'scroll')};
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 34px;
`;