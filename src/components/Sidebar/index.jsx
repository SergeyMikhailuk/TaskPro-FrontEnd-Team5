import React from 'react';
import imgDecor from '../../images/sidebar/aside-img.png';
import imgDecor2x from '../../images/sidebar/aside-img-2x.png';
// Импортировать nanoid
import {
  Aside,
  LogoBox,
  AppLogo,
  LogoBoxTitle,
  AddBoards,
  AddBoardsTitle,
  AddBoardsCreateBox,
  AddBoardsCreateText,
  AddBoardsCreateBtnWrap,
  AddBoardsCreateBtn,
  Boards,
  BoxHelps,
  BoxHelpsText,
  BoxHelpsSelectedText,
  BoxHelpsBtn,
  BoxHelpsBtnIcon,
  BoxHelpsBtnText,
  LogOut,
  LogOutIcon,
  LogOutIconBtnWrap,
  LogOutText,
} from './styled';

const Sidebar = ({ cards }) => {
  const isRetina = window.devicePixelRatio > 1;
  const imgSrc = isRetina ? imgDecor2x : imgDecor;
  console.log(cards);
  return (
    <Aside>
      <LogoBox>
        <a href="/">
          <AppLogo />
        </a>
        <LogoBoxTitle>Task Pro</LogoBoxTitle>
      </LogoBox>
      <AddBoards>
        <AddBoardsTitle>My boards</AddBoardsTitle>
        <AddBoardsCreateBox>
          <AddBoardsCreateText>Create a new board</AddBoardsCreateText>
          <AddBoardsCreateBtnWrap>
            <AddBoardsCreateBtn />
          </AddBoardsCreateBtnWrap>
        </AddBoardsCreateBox>
      </AddBoards>
      <Boards>{/* <ul>{cardsList}</ul> */}</Boards>
      <BoxHelps>
        <img
          src={imgSrc}
          alt="flower in a flowerpot"
          width="54px"
          height="78px"
        />
        <BoxHelpsText>
          If you need help with
          <BoxHelpsSelectedText> TaskPro</BoxHelpsSelectedText>, check out our
          support resources or reach out to our customer support team.
        </BoxHelpsText>
        <BoxHelpsBtn>
          <BoxHelpsBtnIcon />
          <BoxHelpsBtnText>Need help?</BoxHelpsBtnText>
        </BoxHelpsBtn>
      </BoxHelps>
      <LogOut>
        <LogOutIconBtnWrap>
          <LogOutIcon />
        </LogOutIconBtnWrap>
        <LogOutText>Log out</LogOutText>
      </LogOut>
    </Aside>
  );
};
export default Sidebar;
