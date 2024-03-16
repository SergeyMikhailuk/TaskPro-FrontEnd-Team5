import { useState } from 'react';
import { useSelector } from 'react-redux';
import { format, differenceInDays } from 'date-fns';

import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import CardModal from 'components/ModalWindows/CardModals/CardModal';
import { useChangeTodosColumnMutation } from 'store/cardsSlice';
import { useGetBoardByIdQuery } from 'store/boardsSlice';
import {
  Title,
  CardWrapper,
  Text,
  IconsGroup,
  Bell,
  TopWrapper,
  BottomWrapper,
  Stats,
  SubTitle,
  PriorityWrapper,
  PriorityIndicator,
  SubText,
  ArrowCircle,
  Pencil,
  Trash,
  MoveCardContainer,
} from './styled';

const Card = ({ item, onDeleteCard }) => {
  const { title, _id, deadline, description, priority } = item;
  const [isMoveCardOpen, setIsMoveCardOpen] = useState(false);
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [changeColumnMutation] = useChangeTodosColumnMutation();
  const activeBoardId = useSelector(state => state.activeBoardId);
  const { data: boardsData } = useGetBoardByIdQuery(activeBoardId);
  const handleOpenCardModal = () => {
    setIsOpenCardModal(true);
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

  const handleCloseCardModal = () => {
    setIsOpenCardModal(false);
  };

  const handleDelete = () => {
    onDeleteCard(_id);
  };
  const handleToggleMoveCard = cardId => {
    setActiveCard(cardId);
    setIsMoveCardOpen(prevState => !prevState);
  };
  const handleSelectForMove = () => {
    handleToggleMoveCard(item._id);
  };

  const formatedDeadline = format(new Date(deadline), 'dd/MM/yyyy');
  const difference = differenceInDays(new Date(deadline), new Date());

  const isOneDayLeft = difference < 1;

  return (
    <>
      <CardWrapper $priority={priority}>
        <TopWrapper>
          <Title>{title}</Title>
          <Text>{description}</Text>
        </TopWrapper>

        <BottomWrapper>
          <Stats>
            <div>
              <SubTitle>Priority</SubTitle>
              <PriorityWrapper>
                <PriorityIndicator $priority={priority} />
                <SubText>{priority} </SubText>
              </PriorityWrapper>
            </div>
            <div>
              <SubTitle>Deadline</SubTitle>
              <SubText>{formatedDeadline}</SubText>
            </div>
          </Stats>

          <IconsGroup>
            <Bell aria-label="bell icon" $isActive={isOneDayLeft} />

            <ArrowCircle onClick={handleSelectForMove} />
            {isMoveCardOpen && boardsData?.columns?.length >= 2 && (
              <MoveCardContainer>
                {boardsData?.columns?.map(column => {
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
            <Pencil onClick={handleOpenCardModal} aria-label="edit icon" />
            <Trash aria-label="edit icon" onClick={handleDelete} />
          </IconsGroup>
        </BottomWrapper>
      </CardWrapper>
      <ReactModal
        isOpen={isOpenCardModal}
        title="Edit Card"
        closeModal={handleCloseCardModal}
        onRequestClose={handleCloseCardModal}
      >
        <CardModal
          typeModal={'edit'}
          card={item}
          closeModal={handleCloseCardModal}
        />
      </ReactModal>
    </>
  );
};

export default Card;
