import { useState } from 'react';
import { format, differenceInDays } from 'date-fns';

import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import CardModal from 'components/ModalWindows/CardModals/CardModal';

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
} from './styled';

const Card = ({ item, onDeleteCard, onSelectForMove }) => {
  const { title, _id, deadline, description, priority } = item;
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);
  const handleOpenCardModal = () => {
    setIsOpenCardModal(true);
  };

  const handleCloseCardModal = () => {
    setIsOpenCardModal(false);
  };

  const handleDelete = () => {
    onDeleteCard(_id);
  };

  const handleSelectForMove = () => {
    onSelectForMove(item._id);
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
