import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'store/sidebarSlice';
import { getThemeName, setTheme } from 'store/themeSlice';

import UserModal from '../ModalWindows/UserModal/userModal/UserModal'; // Імпортуємо EditProfileModal
import userDark from 'images/user-dark.svg';
import userLight from 'images/user-light.svg';
import userViolet from 'images/user-violet.svg';
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
  ModalWindow,
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
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false); // Додаємо стейт для модального вікна

  const selectHandler = ({ value }) => {
    dispatch(setTheme(value));
    setIsThemeOpen(false); 
  };

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const handleOpenEditProfileModal = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleCloseEditProfileModal = () => {
    setIsEditProfileModalOpen(false);
  };

  const themeName = useSelector(getThemeName);

  return (
    <AppHeader>
      <ButtonMenu onClick={handleToggleSidebar}>
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
          <ButtonProfile onClick={handleOpenEditProfileModal}> {/* Додаємо onClick для відкриття модального вікна */}
            <img src={userImages[themeName]} alt="" />
          </ButtonProfile>
        </Wrap>
      </Info>
      <ModalWindow isOpen={isEditProfileModalOpen} onRequestClose={handleCloseEditProfileModal}>
        <UserModal closeModal={handleCloseEditProfileModal} />
      </ModalWindow>
    </AppHeader>
  );
};

export default Header;