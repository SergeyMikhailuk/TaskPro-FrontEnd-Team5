import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { useDeleteTodosMutation } from 'store/cardsSlice';
import Card from 'components/Board/Cards/Cards';
import { ModalColumn } from 'components/ModalWindows/ColumnModals';
import CardModal from 'components/ModalWindows/CardModals/CardModal';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';

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
import { useDeleteColumnMutation } from 'store/columnsSlice';

export const Column = ({ item }) => {
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [deleteCard] = useDeleteTodosMutation();
  const [deleteColumn] = useDeleteColumnMutation();

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

  const handleDeleteCard = async cardId => {
    try {
      await deleteCard({ todoId: cardId });
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleDeleteColumn = async () => {
    try {
      await deleteColumn({ columnId: item._id });
    } catch (error) {
      console.error('Error deleting column:', error);
    }
  };

  const filter = useSelector(state => state.filter);

  const filterCards = () => {
    const sortedTodos = [...item?.todos]?.sort(
      (a, b) => new Date(a?.deadline) - new Date(b?.deadline)
    );

    return sortedTodos?.filter(card => {
      if (filter === 'all') {
        return card;
      }
      return card.priority.toLowerCase() === filter;
    });
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
                <CardsBtnDelete onClick={handleDeleteColumn} />
              </ButtonDelete>
            </ButtonWrapper>
          </Header>

          <TaskList>
            {filterCards().map(todo => (
              <Card
                key={todo._id}
                item={todo}
                columnName={item.title}
                onDeleteCard={handleDeleteCard}
              />
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
        <ModalColumn
          typeModal={'edit'}
          closeModal={handleCloseColumnModal}
          columnId={item._id}
          column={item}
        />
      </ReactModal>

      <ReactModal
        isOpen={isOpenCardModal}
        title="Add Card"
        closeModal={handleCloseCardModal}
        onRequestClose={handleCloseCardModal}
      >
        <CardModal
          typeModal={'add'}
          card={item}
          columnId={item._id}
          closeModal={handleCloseCardModal}
        />
      </ReactModal>
    </Wrapper>
  );
};
