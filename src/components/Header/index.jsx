import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import userDark from 'images/user-dark.svg';
import userLight from 'images/user-light.svg';
import userViolet from 'images/user-violet.svg';

import { getThemeName, setTheme } from 'store/themeSlice';

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

const Header = () => {
  const dispatch = useDispatch();
  const selectHandler = ({ value }) => dispatch(setTheme(value));
  const themeName = useSelector(getThemeName);

  const themeSelectStyles = selectStyles(themeName);

  return (
    <AppHeader>
      <ButtonMenu>
        <Burger />
      </ButtonMenu>
      <Info>
        <Select
          options={options}
          styles={themeSelectStyles}
          placeholder={options.find(o => o.value === themeName).label}
          onChange={selectHandler}
        />
        <Wrap>
          <p>Name</p>
          <ButtonProfile>
            <img src={userImages[themeName]} alt="" />
          </ButtonProfile>
        </Wrap>
      </Info>
    </AppHeader>
  );
};

export default Header;
