import React from 'react';
import Select from 'react-select';

import userDark from 'images/user-dark.svg';
import userLight from 'images/user-light.svg';
import userViolet from 'images/user-violet.svg';

import {
  AppHeader,
  Wrap,
  Burger,
  Info,
  selectStyles,
  ButtonMenu,
  ButtonProfile,
} from './styled';

const userImages = {
  light: userLight,
  dark: userDark,
  violet: userViolet,
};

const options = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'violet', label: 'Violet' },
];

// поки ручний перехід
const selectedOption = null;
const optionValue = 'dark';
const themeSelectStyles = selectStyles(selectedOption, optionValue);

const Header = () => {
  return (
    <AppHeader>
      <ButtonMenu>
        <Burger />
      </ButtonMenu>
      <Info>
        <Select
          name="theme"
          options={options}
          styles={themeSelectStyles}
          placeholder="Theme"
        />
        <Wrap>
          <p>Name</p>
          <ButtonProfile>
            <img src={userImages[optionValue]} alt="" />
          </ButtonProfile>
        </Wrap>
      </Info>
    </AppHeader>
  );
};

export default Header;
