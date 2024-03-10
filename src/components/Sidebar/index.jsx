import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { logOut } from '../../store/auth/authOperations';
import ModalHelp from '../ModalWindows/ModalHelp/index';
import ModalAdd from '../ModalWindows/ColumnModals/ModalAddColumn/index';
import { toggleSidebar } from 'store/sidebarSlice';
import imgDecor from 'images/sidebar/aside-img.png';
import imgDecor2x from 'images/sidebar/aside-img-2x.png';
import Board from './Board/index.js';
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
import { deleteBoard } from 'Services/api';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const isOpen = useSelector(state => state.sidebar.isOpen);
  const token = useSelector(state => state.auth.token);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const { data } = await axios.get('/api/users/current');

        setBoards(data.boards);
      } catch (error) {
        console.error('Error fetching boards:', error);
      }
    };
    fetchBoards();
  }, [token]);

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
  };

  const openModalAdd = () => {
    setIsModalOpenAdd(false);
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
              key={board.id}
              board={board}
              deleteBoard={deleteBoard}
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
            <ModalHelp
              isOpen={isModalOpenHelp}
              closeModal={() => setIsModalOpenHelp(false)}
            />
          }
          {
            <ModalAdd
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
