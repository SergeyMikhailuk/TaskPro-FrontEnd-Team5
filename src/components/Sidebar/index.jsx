import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../store/auth/authOperations';
import HelpModal from '../ModalWindows/HelpModal/index';
import NewBoardForm from '../forms/NewBoardForm/index';
import BoardItem from './BoardItem/index.js';
import { toggleSidebar } from 'store/sidebarSlice';
import { useDeleteBoardMutation, useGetBoardsQuery } from 'store/boardsSlice';

import imgDecor from 'images/sidebar/aside-img.png';
import imgDecor2x from 'images/sidebar/aside-img-2x.png';

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

  const handleLogout = () => {
    dispatch(logOut());
  };

  const isOpen = useSelector(state => state.sidebar.isOpen);
  const [boards, setBoards] = useState([]);

  const { data } = useGetBoardsQuery();
  const deleteBoard = useDeleteBoardMutation();

  useEffect(() => {
    setBoards(data || []);
  }, [data]);

  const isRetina = window.devicePixelRatio > 1;
  const imgSrc = isRetina ? imgDecor2x : imgDecor;

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const [isModalOpenHelp, setIsModalOpenHelp] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const openHelpModal = () => {
    setIsModalOpenHelp(true);
    setIsModalOpenAdd(false);
  };

  const openModalAdd = () => {
    setIsModalOpenAdd(true);
    setIsModalOpenHelp(false);
  };

  const deleteBoardHandler = async boardId => {
    try {
      await deleteBoard({ boardId });
    } catch (error) {
      console.error('Error deleting board:', error);
    }
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
              <AddBoardsCreateBtn onClick={openModalAdd} />
            </AddBoardsCreateBtnWrap>
          </AddBoardsCreateBox>
        </AddBoards>
        <BoardsList>
          {boards.map(board => (
            <BoardItem
              key={board.id}
              board={board}
              deleteBoard={deleteBoardHandler}
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
          <BoxHelpBtnOpenModal onClick={openHelpModal}>
            <BoxHelpBtnIcon />
            <BoxHelpBtnText>Need help?</BoxHelpBtnText>
          </BoxHelpBtnOpenModal>
          {
            <HelpModal
              isOpen={isModalOpenHelp}
              closeModal={() => setIsModalOpenHelp(false)}
            />
          }
          {
            <NewBoardForm
              isOpen={isModalOpenAdd}
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
