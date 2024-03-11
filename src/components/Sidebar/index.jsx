import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useDeleteBoardMutation, useGetBoardsQuery } from 'store/boardsSlice';
import { logOut } from '../../store/auth/authOperations';
import HelpModal from '../ModalWindows/HelpModal/index';
import NewBoardForm from '../forms/NewBoardForm/index';
import { toggleSidebar } from 'store/sidebarSlice';
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

  const handleLogout = () => {
    dispatch(logOut());
  };

  const isOpen = useSelector(state => state.sidebar.isOpen);
  const token = useSelector(state => state.auth.token);
  const [boards, setBoards] = useState([]);

  const { data } = useGetBoardsQuery();
  const deleteBoard = useDeleteBoardMutation();

  useEffect(() => {
    setBoards(data || []);
  }, [data]);

  const updateBoardsList = async () => {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      const { data } = await axios.get('/api/boards');
      setBoards(data);
    } catch (error) {
      console.error('Error updating board list:', error);
    }
  };

  const isRetina = window.devicePixelRatio > 1;
  const imgSrc = isRetina ? imgDecor2x : imgDecor;

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };

  const [isModalOpenHelp, setIsModalOpenHelp] = useState(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);

  const openModalHelp = () => {
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
            <Board
              key={board._id}
              board={board}
              deleteBoard={deleteBoardHandler}
              updateBoardsList={updateBoardsList}
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
