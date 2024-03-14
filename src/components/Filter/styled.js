import styled from 'styled-components';

import { ReactComponent as FilterImage } from 'images/svg/filter.svg';


export const FilterBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 20px;
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.addColumnButton.color};
  background-color: ${props => props.theme.header.background};
  border: 1px solid ${props => props.theme.addColumnButton.color};
  border-radius: 4px;
  padding: 4px 6px;
  z-index: 1;
  cursor: pointer;
  transition: all 250ms linear;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    
    right: 32px;
  }

  @media screen and (min-width: 1440px) {
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

export const Label = styled.div`
  width: 160px;  

  @media screen and (min-width: 345px) {
    width: 252px; 
    }
`;



export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  margin-bottom: 16px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 140px;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.column.borderColor};
  }
`;

export const LabelColors = styled.p`
  
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
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    transform: scale(1.1);
  }
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
  transition: all 150ms linear;
  & input:checked + span::before {
    opacity: 1; 
  }  

  &:hover {
    transform: scale(1.1);
  }
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
