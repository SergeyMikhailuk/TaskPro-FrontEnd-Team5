import React from 'react';
import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from '../buttons.styled';
import { useTheme } from '@mui/material';
import { ReactComponent as Plus } from 'images/svg/plus28.svg'; // Импорт иконки плюсика

const BtnAdd = ({ btnTitle, onClick, isDisabled = false }) => { 
  const theme = useTheme();
  
  return (
    <Container theme={theme} onClick={onClick} disabled={isDisabled}>
      <ButtonPlus theme={theme}>
        <PlusIcon theme={theme}>
          <Plus/>
        </PlusIcon>
      </ButtonPlus>
      <TitleButton theme={theme}>Create</TitleButton> 
    </Container>
  );
};

export default BtnAdd;