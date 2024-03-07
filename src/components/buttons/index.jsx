import React from 'react';
import { ReactComponent as CloseIcon } from 'images/svg/close.svg';
import {
  ButtonClose,
  ButtonCloseIcon,
  } from './buttons.styled';
import { useTheme } from '@mui/material';

export const BtnClose = () => {
  const theme = useTheme();

  return (
    <ButtonClose>
      <ButtonCloseIcon theme={theme}>
        <CloseIcon />
      </ButtonCloseIcon>
    </ButtonClose>
  );
};
