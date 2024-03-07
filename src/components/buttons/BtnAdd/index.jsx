import { ReactComponent as Plus } from 'images/svg/plus28.svg';
import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from '../buttons.styled';
import { useTheme } from '@mui/material';

const BtnAdd = ({ data, btnTitle, btnColor, onClick, isDisabled = false }) => {
  
  const theme = useTheme();
  
  return (
    <Container theme={theme} onClick={onClick} disabled={isDisabled}>
      <ButtonPlus theme={theme}>
        <PlusIcon theme={theme}>
          <Plus/>
        </PlusIcon>
      </ButtonPlus>
      <TitleButton theme={theme}>{btnTitle}</TitleButton>
    </Container>
  );
};

export default BtnAdd;