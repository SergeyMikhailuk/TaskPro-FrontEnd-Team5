import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'store/sidebarSlice';
import { getThemeName, setTheme } from 'store/themeSlice';

import { selectIsLoading } from 'store/auth/authSelectors';

import UserModal from 'components/ModalWindows/UserModal/UserModal';
import userDark from 'images/user-dark.svg';
import userLight from 'images/user-light.svg';
import userViolet from 'images/user-violet.svg';

import { ReactModal } from 'components/ModalWindows/Modal/Modal';

import Loader from 'components/Loader/Loader';

import {
  AppHeader,
  Burger,
  Info,
  ButtonMenu,
  StyledSelectWrapper,
  StyledList,
  StyledItem,
  StyledTitle,
  Down,
  UserAvatar,
  UserName,
  Wrapper,
} from './styled';

const themes = [
  { name: 'Light', value: 'light' },
  { name: 'Dark', value: 'dark' },
  { name: 'Violet', value: 'violet' },
];

const Header = () => {
  const dispatch = useDispatch();
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false); // Додаємо стейт для модального вікна
  const user = useSelector(state => state.auth.user);

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
  const isLoading = useSelector(selectIsLoading);

  const activeUserTheme = useSelector(getThemeName);

  const setDefaultAvatar = () => {
    if (activeUserTheme === 'dark') {
      return userDark;
    } else if (activeUserTheme === 'light') {
      return userLight;
    } else if (activeUserTheme === 'violet') {
      return userViolet;
    }
  };

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
            <StyledList $isOpen={isThemeOpen}>
              {themes.map(({ value, name }) => (
                <StyledItem
                  key={value}
                  onClick={() => selectHandler({ value })}
                >
                  {name}
                </StyledItem>
              ))}
            </StyledList>
          )}
        </StyledSelectWrapper>

        <Wrapper>
          <UserName>{user.name}</UserName>

          {isLoading ? (
            <Loader />
          ) : (
            <UserAvatar
              src={user.avatarURL || setDefaultAvatar()}
              alt="user name"
              onClick={handleOpenEditProfileModal}
            />
          )}
        </Wrapper>
      </Info>

      <ReactModal
        isOpen={isEditProfileModalOpen}
        title="Edit Profile"
        closeModal={handleCloseEditProfileModal}
        onRequestClose={handleCloseEditProfileModal}
      >
        <UserModal user={user} closeModal={handleCloseEditProfileModal} />
      </ReactModal>
    </AppHeader>
  );
};

export default Header;
