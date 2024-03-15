import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';

import { useGetBoardByIdQuery, useGetBoardsQuery } from 'store/boardsSlice';
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

const BoardPage = () => {
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const { data: boardsData } = useGetBoardsQuery();
  const currentId = boardsData[0]?._id;
  const activeBoardId = useSelector(store => store.activeBoardId) || currentId;

  const { data: boardData } = useGetBoardByIdQuery(activeBoardId);
  console.log('boardData: ', boardData);
  const scrollRef = useRef(null);

  const handleOpenColumnModal = () => {
    setIsOpenColumnModal(true);
  };

  const handleCloseColumnModal = () => {
    setIsOpenColumnModal(false);
  };

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
          <AddButton
            onClick={handleOpenColumnModal}
            $length={boardData?.columns?.length}
            type="button"
          >
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

export default BoardPage;
