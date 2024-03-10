import React, { useState } from 'react';
import { logOut } from '../../store/auth/authOperations';
import ModalHelp from '../ModalWindows/ModalHelp/index';
import ModalAdd from '../ModalWindows/ModalAdd/index';
import NewBoardModal from '../forms/NewBoardForm/index'; 
import { toggleSidebar } from 'store/sidebarSlice';
import { useSelector, useDispatch } from 'react-redux';
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

  const [isModalOpenHelp, setIsModalOpenHelp] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const [isNewBoardModalOpen, setIsNewBoardModalOpen] = useState(false); 

  const openNewBoardModal = () => {
    setIsNewBoardModalOpen(true);
  };

  const openModalHelp = () => {
    setIsModalOpenHelp(true);
  };

  const openModalAdd = () => {
    setIsModalOpenAdd(true);
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
          <img
            src={imgSrc}
            alt="flower in a flowerpot"
            width="54px"
            height="78px"
          />
          <BoxHelpText>
            If you need help with
            <BoxHelpSelectedText> TaskPro</BoxHelpSelectedText>, check out our
            support resources or reach out to our customer support team.
          </BoxHelpText>
          <BoxHelpBtnOpenModal onClick={openModalHelp}>
            <BoxHelpBtnIcon />
            <BoxHelpBtnText>Need help?</BoxHelpBtnText>
          </BoxHelpBtnOpenModal>
          {
            isNewBoardModalOpen &&
            <NewBoardModal
              closeModal={() => setIsNewBoardModalOpen(false)}
            />
          }
          {
            isModalOpenHelp &&
            <ModalHelp
              closeModal={() => setIsModalOpenHelp(false)}
            />
          }
          {
            isModalOpenAdd &&
            <ModalAdd
              closeModal={() => setIsModalOpenAdd(false)}
            />
          }
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