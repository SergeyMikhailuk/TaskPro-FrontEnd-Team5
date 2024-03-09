import styled from 'styled-components';
import Modal from 'react-modal';

import { ReactComponent as FilterImage } from 'images/svg/filter.svg';
import { ReactComponent as CloseBtn } from 'images/svg/close.svg';

export const ModalWindow = styled(Modal)`
& {
  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px; 
    height: 234px;
    overflow-y: auto; 
    padding: 24px;
    background-color: ${props => props.theme.modal.backgroundMain};
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  },
`;
export const CloseModal = styled(CloseBtn)`
  width: 18px;
  height: 18px;
  color: ${props => props.theme.modal.textMain};
`;

export const ClosedButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
`;

export const FilterBtn = styled.button`
  position: absolute;
  top: 74px;
  right: 20px;
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.addColumnButton.color};
  background-color: transparent;
  border: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    top: 88px;
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
    top: 88px;
    right: 24px;
  }
`;

export const FilterIcon = styled(FilterImage)`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  color: ${props => props.theme.addColumnButton.color};
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Title = styled.p`
  margin-bottom: 14px;
  color: ${props => props.theme.header.userName};
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
`;

export const Label = styled.div`
  width: 252px;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid ${props => props.theme.column.borderColor};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LabelColors = styled.p`
  margin-top: 14px;
  margin-bottom: 16px;
  color: ${props => props.theme.header.userName};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.28px;
  font-family: 'Poppins', sans-serif;
`;

export const ShowAllBtn = styled.button`
  font-size: 12px;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  text-decoration: underline;
  color: ${props => props.theme.modal.textSecondary};
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
  border: none;
`;

export const RadioLabel = styled.label`
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.modal.textSecondary};
  display: flex;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  & input:checked + span::before {
    opacity: 1; 
`;

export const CustomRadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const RadioItem = styled.li`
  display: flex;
`;
export const Marker = styled.span`
  margin-right: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: inline-block;
  opacity: 1;
  transition: opacity 0.25s ease;
  position: relative;
  background-color: ${props => {
    if (props.value === 'without') {
      return props.theme.modal.radioGray;
    } else if (props.value === 'low') {
      return '#8fa1d0';
    } else if (props.value === 'medium') {
      return '#e09cb5';
    } else if (props.value === 'high') {
      return '#bedbb0';
    }
  }};

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.container.background};
    opacity: 0;
  }
`;

export const RadioInput = styled.input`
  display: none;
  &:checked + ${Marker} + span {
    color: ${props => props.theme.header.userName};
  }
`;
