import React, { useState, useRef } from 'react';
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
  const { data: boardData } = useGetBoardByIdQuery(activeBoardId);
  const scrollRef = useRef(null);

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

  return (
    <WrapperMain $url={boardData?.board?.backgroundURL}>
      <Filter />
      <Header>
        <div>
          <Title>{boardData?.board?.title}</Title>
        </div>
      </Header>

      <Wrapper ref={scrollRef}>
        <ContentWrapper>
          {boardData?.columns?.map(column => (
            <Column
              key={column._id}
              item={column}
              activeBoardId={activeBoardId}
            />
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
