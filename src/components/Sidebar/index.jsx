import React from 'react';
import { toggleSidebar } from 'store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';

import imgDecor from 'images/sidebar/aside-img.png';
import imgDecor2x from 'images/sidebar/aside-img-2x.png';
import cards from './todo.json'; // тестовые карточки, удалить, когда подключить бэк и активировать пропс в сайтбаре!!!
import Cards from './Cards/index.js';
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
  CardsBoard,
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
  StyledOverlay,
} from './styled';

const Sidebar = () => {
  const isOpen = useSelector(state => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const isRetina = window.devicePixelRatio > 1;
  const imgSrc = isRetina ? imgDecor2x : imgDecor;

  const cardsList = cards.map(card => <Cards key={cards.id} cards={card} />);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  return (
    <>
      {isOpen && <StyledOverlay onClick={handleToggleSidebar} />}
      <Aside className={isOpen ? 'open' : ''}>
        <LogoBox>
          <a href="/">
            <AppLogo />

            <LogoBoxTitle>Task Pro</LogoBoxTitle>
          </a>
        </LogoBox>
        <AddBoards>
          <AddBoardsTitle>My boards</AddBoardsTitle>
          <AddBoardsCreateBox>
            <AddBoardsCreateText>
              Create a <br /> new board
            </AddBoardsCreateText>
            <AddBoardsCreateBtnWrap>
              <AddBoardsCreateBtn />
            </AddBoardsCreateBtnWrap>
          </AddBoardsCreateBox>
        </AddBoards>
        <CardsBoard>{cardsList}</CardsBoard>
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
            <LogOutText>Log out</LogOutText>
          </LogOutIconBtnWrap>
        </LogOut>
      </Aside>
    </>
  );
};
export default Sidebar;
