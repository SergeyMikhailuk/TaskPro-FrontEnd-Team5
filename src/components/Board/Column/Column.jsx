// import { useDispatch, useSelector } from 'react-redux';
// import { deleteColumn } from 'store/dashboards/dashboardsOperations';
import React, { useState } from 'react';

import Card from 'components/Board/Cards/Cards';
import { ModalColumn } from 'components/ModalWindows/ColumnModals';
import CardModal from "components/ModalWindows/CardModals/CardModal";
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
// import { useDispatch, useSelector } from 'react-redux';
// import { deleteColumn } from 'store/dashboards/dashboardsOperations';
import {
  Wrapper,
  Header,
  Button,
  ButtonPlus,
  TaskList,
  ButtonWrapper,
  Content,
  Title,
  ContentWrapper,
  ButtonEdit,
  ButtonDelete,
  CardsBtnDelete,
  CardstBtnEdit,
  AddCardCreateBtn,
} from './styled';

export const Column = ({ item }) => {
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);

  const handleOpenColumnModal = () => {
    setIsOpenColumnModal(true);
  };

  const handleCloseColumnModal = () => {
    setIsOpenColumnModal(false);
  };

  const handleOpenCardModal = () => {
    setIsOpenCardModal(true);
  };

  const handleCloseCardModal = () => {
    setIsOpenCardModal(false);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Header>
            <Title>{item.title}</Title>
            <ButtonWrapper>
              <ButtonEdit>
                <CardstBtnEdit onClick={handleOpenColumnModal} />
              </ButtonEdit>
              <ButtonDelete>
                <CardsBtnDelete />
              </ButtonDelete>
            </ButtonWrapper>
          </Header>

          <TaskList>
            {item.todos.map(todo => (
              <Card key={todo._id} item={todo} columnName={item.title} />
            ))}
          </TaskList>
        </Content>

        <Button onClick={handleOpenCardModal}>
          <ButtonPlus>
            <AddCardCreateBtn />
          </ButtonPlus>
          Add another card
        </Button>
      </ContentWrapper>

      <ReactModal
        isOpen={isOpenColumnModal}
        title="Edit Column"
        closeModal={handleCloseColumnModal}
        onRequestClose={handleCloseColumnModal}
      >
        <ModalColumn typeModal={'edit'} closeModal={handleCloseColumnModal} />
      </ReactModal>

      <ReactModal
        isOpen={isOpenCardModal}
        title="Add Card"
        closeModal={handleCloseCardModal}
        onRequestClose={handleCloseCardModal}
      >
        <CardModal typeModal={'add'} closeModal={handleCloseCardModal} />

      </ReactModal>
    </Wrapper>
  );
};
