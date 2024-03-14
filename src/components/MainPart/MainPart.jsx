import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetBoardByIdQuery } from 'store/boardsSlice';
import { Column } from 'components/Board/Column/Column';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import { ModalColumn } from 'components/ModalWindows/ColumnModals';
import { Filter } from 'components/Filter/Filter';

import {
  WrapperMain,
  Header,
  AddIcon,
  Title,
  AddButton,
  IconWrapper,
  Text,
  ContentWrapper,
  Wrapper,
} from './styled';

const MainPart = ({ children }) => {
  const activeBoardId = useSelector(store => store.activeBoardId);
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  console.log('activeBoardId: ', activeBoardId);
  const { data: boardData } = useGetBoardByIdQuery(activeBoardId);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!activeBoardId) return;
  }, [activeBoardId]);

  const handleOpenColumnModal = () => {
    setIsOpenColumnModal(true);
  };

  const handleCloseColumnModal = () => {
    setIsOpenColumnModal(false);
  };

  const filter = useSelector(state => state.filter);
  const filterCards = () => {
    return boardData?.columns?.map(column => {
      return column?.todos?.filter(card =>
        card.priority.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };
  console.log('filterCards(): ', filterCards());
  console.log(boardData);
  return (
    <WrapperMain $url={boardData?.board?.backgroundURL}>
      <Filter />
      <Header>
        <Title>{boardData?.board?.title}</Title>
      </Header>

      <Wrapper ref={scrollRef}>
        <ContentWrapper>
          {boardData?.columns?.map(column => (
            <Column key={column._id} item={column} />
          ))}
          <AddButton onClick={handleOpenColumnModal} type="button">
            <IconWrapper>
              <AddIcon />
            </IconWrapper>
            <Text>Add another column</Text>
          </AddButton>
        </ContentWrapper>
        <Filter></Filter>
        <ReactModal
          isOpen={isOpenColumnModal}
          title="Add Column"
          closeModal={handleCloseColumnModal}
          onRequestClose={handleCloseColumnModal}
        >
          <ModalColumn
            typeModal={'add'}
            activeBoardId={activeBoardId}
            closeModal={handleCloseColumnModal}
          />
        </ReactModal>
      </Wrapper>
    </WrapperMain>
  );
};

export default MainPart;
