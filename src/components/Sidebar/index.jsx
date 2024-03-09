import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/auth/authOperations';
import { toggleSidebar } from 'store/sidebarSlice';
import NewBoardForm from '../forms/NewBoardForm/index';
import ModalHelp from '../ModalWindows/ModalHelp/index';
import imgDecor from 'images/sidebar/aside-img.png';
import imgDecor2x from 'images/sidebar/aside-img-2x.png';
import cards from './todo.json';
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
  BoxHelp,
  BoxHelpText,
  BoxHelpSelectedText,
  BoxHelpBtnOpenModal,
  BoxHelpBtnIcon,
  BoxHelpBtnText,
  LogOut,
  LogOutIcon,
  LogOutIconBtnWrap,
  LogOutText,
  StyledOverlay,
} from './styled';

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const isOpen = useSelector(state => state.sidebar.isOpen);

  const isRetina = window.devicePixelRatio > 1;
  const imgSrc = isRetina ? imgDecor2x : imgDecor;

  const cardsList = cards.map(card => <Cards key={card.id} cards={card} />);

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const [isNewBoardModalOpen, setIsNewBoardModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const openNewBoardModal = () => {
    setIsNewBoardModalOpen(true);
  };

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeModals = () => {
    setIsNewBoardModalOpen(false);
    setIsHelpModalOpen(false);
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
              <AddBoardsCreateBtn onClick={openNewBoardModal} />
            </AddBoardsCreateBtnWrap>
          </AddBoardsCreateBox>
        </AddBoards>
        <CardsBoard>{cardsList}</CardsBoard>
        <BoxHelp>
          <img src={imgSrc} alt="flower in a flowerpot" width="54px" height="78px" />
          <BoxHelpText>
            If you need help with
            <BoxHelpSelectedText> TaskPro</BoxHelpSelectedText>, check out our support resources or reach out to our
            customer support team.
          </BoxHelpText>
          <BoxHelpBtnOpenModal onClick={openHelpModal}>
            <BoxHelpBtnIcon />
            <BoxHelpBtnText>Need help?</BoxHelpBtnText>
          </BoxHelpBtnOpenModal>
          {isNewBoardModalOpen && <NewBoardForm closeModal={closeModals} />}
          {isHelpModalOpen && <ModalHelp handleModal={closeModals} />}
        </BoxHelp>
        <LogOut>
          <LogOutIconBtnWrap onClick={handleLogout}>
            <LogOutIcon />
            <LogOutText>LogOut</LogOutText>
          </LogOutIconBtnWrap>
        </LogOut>
      </Aside>
    </>
  );
};

export default Sidebar;