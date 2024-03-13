import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useGetBoardByIdQuery } from 'store/boardsSlice';
import { Column } from 'components/Board/Column/Column';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import { ModalColumn } from 'components/ModalWindows/ColumnModals';

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

  useEffect(() => {
    if (!activeBoardId) return;
  }, [activeBoardId]);

  const handleOpenColumnModal = () => {
    setIsOpenColumnModal(true);
  };

  const handleCloseColumnModal = () => {
    setIsOpenColumnModal(false);
  };
 
  return (
    <WrapperMain $url={boardData?.board?.backgroundURL}>
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
