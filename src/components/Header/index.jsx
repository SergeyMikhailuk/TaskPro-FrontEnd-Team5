import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import userDark from 'images/user-dark.svg';
import userLight from 'images/user-light.svg';
import userViolet from 'images/user-violet.svg';

import { getThemeName, setTheme } from 'store/themeSlice';

import {
  AppHeader,
  Wrap,
  Burger,
  Info,
  ButtonMenu,
  ButtonProfile,
  StyledSelectWrapper,
  StyledList,
  StyledItem,
  StyledTitle,
  Down,
} from './styled';

const userImages = {
  light: userLight,
  dark: userDark,
  violet: userViolet,
};

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Violet', value: 'violet' },
];

const Header = () => {
  const dispatch = useDispatch();
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const selectHandler = ({ value }) => {
    dispatch(setTheme(value));
    setIsThemeOpen(false); 
  };

  const themeName = useSelector(getThemeName);

  return (
    <AppHeader>
      <ButtonMenu>
        <Burger />
      </ButtonMenu>
      <Info>
        <StyledSelectWrapper onClick={() => setIsThemeOpen(!isThemeOpen)}>
          <StyledTitle>Theme</StyledTitle>
          <Down />
          {isThemeOpen && (
            <StyledList isOpen={isThemeOpen}>
              {themes.map(({ value, name }) => (
                <StyledItem key={value} onClick={() => selectHandler({ value })}>
                  {name}
                </StyledItem>
              ))}
            </StyledList>
          )}
        </StyledSelectWrapper>
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