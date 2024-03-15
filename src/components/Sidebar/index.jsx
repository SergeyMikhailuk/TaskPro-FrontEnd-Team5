import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useDeleteBoardMutation, useGetBoardsQuery } from 'store/boardsSlice';
import { logOut } from 'store/auth/authOperations';
import { toggleSidebar } from 'store/sidebarSlice';
import { setActiveBoardId } from 'store/activeBoardSlice';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import BoardModal from 'components/ModalWindows/BoardModal';
import HelpModal from 'components/ModalWindows/HelpModal/index';

import imgDecor from 'images/sidebar/aside-img.png';
import imgDecor2x from 'images/sidebar/aside-img-2x.png';

import Board from './BoardItem/index.js';
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
  BoardsList,
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

  const { data: boards } = useGetBoardsQuery();
  const [deleteBoard] = useDeleteBoardMutation();
  const isOpen = useSelector(state => state.sidebar.isOpen);
  const activeBoardId = useSelector(state => state.activeBoard);

  useEffect(() => {
    if (boards?.length > 0) {
      dispatch(setActiveBoardId(boards[0]._id));
    }
  }, [boards, dispatch]);

  const isRetina = window.devicePixelRatio > 1;
  const imgSrc = isRetina ? imgDecor2x : imgDecor;

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const [isModalOpenHelp, setIsModalOpenHelp] = useState(false);
  const [isOpenBoardModal, setIsOpenBoardModal] = useState(false);

  const handleOpenBoardModal = () => {
    setIsOpenBoardModal(true);
  };

  const handleCloseBoardModal = () => {
    setIsOpenBoardModal(false);
  };
  const handleCloseHelpModal = () => {
    setIsModalOpenHelp(false);
  };

  const openModalHelp = () => {
    setIsModalOpenHelp(true);
  };

  const deleteBoardHandler = async boardId => {
    try {
      await deleteBoard({ boardId });
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
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
              <AddBoardsCreateBtn onClick={handleOpenBoardModal} />
            </AddBoardsCreateBtnWrap>
          </AddBoardsCreateBox>
        </AddBoards>
        <BoardsList>
          {boards?.map(board => (
            <Board
              key={board._id}
              board={board}
              deleteBoard={deleteBoardHandler}
              activeBoardId={activeBoardId}
            />
          ))}
        </BoardsList>
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
          <ReactModal
            isOpen={isModalOpenHelp}
            title="Need help"
            closeModal={handleCloseHelpModal}
            onRequestClose={handleCloseHelpModal}
          >
            <HelpModal closeModal={handleCloseBoardModal} />
          </ReactModal>
        </BoxHelp>
        <LogOut>
          <LogOutIconBtnWrap onClick={handleLogout}>
            <LogOutIcon />
            <LogOutText>LogOut</LogOutText>
          </LogOutIconBtnWrap>
        </LogOut>
      </Aside>
      <ReactModal
        isOpen={isOpenBoardModal}
        title="New board"
        closeModal={handleCloseBoardModal}
        onRequestClose={handleCloseBoardModal}
      >
        <BoardModal closeModal={handleCloseBoardModal} typeModal={'create'} />
      </ReactModal>
    </>
  );
};
export default Sidebar;
