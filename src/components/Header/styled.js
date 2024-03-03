import styled from 'styled-components';

import { ReactComponent as BurgerImage } from './menu.svg';

export const Burger = styled(BurgerImage)`
  width: 24px;
  height: 24px;
  stroke: white;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const AppHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
  background-color: #161616;

  @media screen and (min-width: 768px) {
    padding: 18px 32px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    padding: 18px 24px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: #fff;
  }
`;

export const Image = styled.div`
  svg {
    width: 32px;
    height: 32px;
    stroke: white;
  }
`;

export const ButtonMenu = styled.button`
  background-color: transparent;
  border: none;
`;

export const ButtonProfile = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  img {
    width: 32px;
  }
`;

export const selectStyles = (selectedOption, optionValue) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    borderRadius: '4px',
    outline: 'none',
    padding: '0px',
    fontSize: '14px',
    fontWeight: '500',
    letterSpacing: '-0.28px',
    cursor: 'pointer',
    boxShadow: 'none',
    width: '80px',
  }),

  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),

  placeholder: provided => ({
    ...provided,
    margin: '0',
    color:
      optionValue === 'dark'
        ? 'rgba(255, 255, 255, 0.5)'
        : 'rgba(255, 255, 255, 0.8)',
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  dropdownIndicator: provided => ({
    ...provided,
    padding: '4px',
    color:
      optionValue === 'dark'
        ? 'rgba(255, 255, 255, 0.5)'
        : 'rgba(22, 22, 22, 0.8)',
    '&:hover': {
      color:
        optionValue === 'dark'
          ? 'rgba(255, 255, 255, 0.7)'
          : 'rgba(22, 22, 22, 0.5)',
    },
    '& > svg': {
      padding: '0',
      fill: 'rgba(255, 255, 255, 0.5)',
    },
  }),

  menu: (provided, state) => ({
    ...provided,
    width: '102px',
    padding: '18px 40px 18px 18px',
    fontSize: '14px',
    letterSspacing: '-0.28px',
    borderRadius: '8px',

    border:
      optionValue === 'light' || optionValue === 'dark'
        ? '1px solid #BEDBB0'
        : '1px solid #ECEDFD',
    backgroundColor:
      optionValue === 'light' || optionValue === 'violet' ? '#fff' : '#151515',
    boxShadow: '0px 4px 16px 0px rgba(17, 17, 17, 0.10)',
  }),

  menuList: (provided, state) => ({
    ...provided,
    '& > div': {
      padding: '0',
      backgroundColor:
        optionValue === 'light' || optionValue === 'violet'
          ? '#fff'
          : '#151515',

      color: state.isSelected
        ? '#BEDBB0'
        : optionValue === 'light' || optionValue === 'violet'
          ? '#151515'
          : 'rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
    },
    '& > div:not(:last-child)': {
      marginBottom: '5px',
    },
    '& > div:hover': {
      color:
        optionValue === 'dark' || optionValue === 'light'
          ? '#bedbb0'
          : '#5255bc',
      cursor: 'pointer',
    },
  }),
  
});
