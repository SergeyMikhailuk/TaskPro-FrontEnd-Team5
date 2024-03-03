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
  CardsBoard,
  CardsBoardList,
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

  /*const cardsList = cards.map(card => (
    <li key={card.id} icon={card.icon} title={card.title}>
       <button type="button" onClick={() => editCard(card.id)}></button>
      <button type="button" onClick={() => deleteCard(card.id)}></button> 
    </li>
  ));*/

  const cardsList = [
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
    <li>ПРИЛИТЕЛА КАРТОЧКА</li>,
  ];

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
          <AddBoardsCreateText>
            Create a <br /> new board
          </AddBoardsCreateText>
          <AddBoardsCreateBtnWrap>
            <AddBoardsCreateBtn />
          </AddBoardsCreateBtnWrap>
        </AddBoardsCreateBox>
      </AddBoards>
      <CardsBoard>
        <CardsBoardList>{cardsList}</CardsBoardList>
      </CardsBoard>
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
