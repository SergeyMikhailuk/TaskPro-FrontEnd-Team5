import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  useChangeTodosColumnMutation,
  useDeleteTodosMutation,
} from 'store/cardsSlice';
import Card from 'components/Board/Cards/Cards';
import { ModalColumn } from 'components/ModalWindows/ColumnModals';
import CardModal from 'components/ModalWindows/CardModals/CardModal';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import { useDeleteColumnMutation } from 'store/columnsSlice';
import { useGetBoardByIdQuery } from 'store/boardsSlice';

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
  MoveCardContainer,
  ArrowCircle,
} from './styled';

export const Column = ({ item }) => {
  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [isMoveCardOpen, setIsMoveCardOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [deleteCard] = useDeleteTodosMutation();
  const [deleteColumn] = useDeleteColumnMutation();
  const activeBoardId = useSelector(state => state.activeBoardId);
  const { data: boardsData } = useGetBoardByIdQuery(activeBoardId);
  const [changeColumnMutation] = useChangeTodosColumnMutation();

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

  const handleToggleMoveCard = cardId => {
    setActiveCard(cardId);
    setIsMoveCardOpen(prevState => !prevState);
  };

  const handleMoveCard = async (todoId, columnId) => {
    try {
      await changeColumnMutation({
        todoId: todoId,
        columnId: columnId,
      });
      setIsMoveCardOpen(false);
    } catch (error) {
      console.error('Error moving card:', error);
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
                onSelectForMove={() => handleToggleMoveCard(todo._id)}
              />
            ))}
            {isMoveCardOpen && (
              <MoveCardContainer>
                {boardsData.columns.map(column => {
                  if (column.title !== item.title) {
                    return (
                      <button
                        key={column._id}
                        type="button"
                        onClick={() => handleMoveCard(activeCard, column._id)}
                      >
                        <span> {column.title} </span>
                        <ArrowCircle />
                      </button>
                    );
                  }
                  return null;
                })}
              </MoveCardContainer>
            )}
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
