// import { useState, useRef, useEffect } from 'react';
import { useState } from 'react';
import { ReactModal } from 'components/ModalWindows/Modal/Modal';
import EditCardModal from 'components/ModalWindows/CardModals/EditCardModal/EditCardModal';
// import CardMovePopUp from './CardMovePopUp';
// import { useDispatch } from 'react-redux';

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
  // MoverWrapper,
  IconBellWrapper,
  // PopupWrapper,
  // PopupItem,
  // PopupText,
  Pencil,
  Trash,
} from './styled';

// import { deleteCard, editCard } from 'store/dashboards/dashboardsOperations';

// const Card = ({ item, columnName }) => {
const Card = ({ item }) => {
  // const dispatch = useDispatch();
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [delayPopup, setDelayPopup] = useState(false);
  // const moveIconRef = useRef();
  // const [openCardModal, setOpenCardModal] = useState(false);

  const [isOpenCardModal, setIsOpenCardModal] = useState(false);

  const handleOpenCardModal = () => {
    setIsOpenCardModal(true);
  };

  const handleCloseCardModal = () => {
    setIsOpenCardModal(false);
  };

  // const { title, _id, deadline, description, priority } = item;

  // const delayOptions = [1, 3, 5, 7];

  // const options = {
  //   year: 'numeric',
  //   month: '2-digit',
  //   day: '2-digit',
  // };

  // const today = new Date().toLocaleString('en-GB', options);
  // const parsedDate = new Date(deadline);

  // const formatedDeadline = format(new Date(deadline), 'dd/MM/yyyy');

  // const handleIconMoveClick = () => setIsPopupOpen(!isPopupOpen);

  // const checkTextLength = text => {
  //   const str = text.split('');

  //   if (str.length <= 80) {
  //     return str.join('');
  //   }
  //   return str.splice(0, 80).join('') + '...';
  // };

  // const handleOutsideClick = event => {
  //   const path = event.composedPath();

  //   if (!path.includes(moveIconRef.current)) {
  //     setIsPopupOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.body.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.body.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);

  // const expiredCard = today > formatedDeadline;

  // const handleDelayPopup = () => {
  //   setDelayPopup(prev => !prev);
  // };

  // const handleDeadline = (deadline, delay) => {
  //   const date = new Date(deadline);
  //   date.setDate(date.getDate() + delay);

  //   dispatch(
  //     editCard({ cardId: _id, title, description, priority, deadline: date })
  //   );

  //   setDelayPopup(prev => !prev);
  // };

  return (
    <>
      {/* <CardWrapper priority={priority} expired={expiredCard}> */}
      <CardWrapper>
        <TopWrapper>
          {/* <Title>{title}</Title> */}
          <Title>{item.title} </Title>
          {/* <Text>{checkTextLength(description)}</Text> */}
          <Text>{item.description}</Text>
        </TopWrapper>

        <BottomWrapper>
          <Stats>
            <div>
              <SubTitle>Priority</SubTitle>
              <PriorityWrapper>
                {/* <PriorityIndicator color={priorityStyles.color} /> */}

                <PriorityIndicator />
                {/* <SubText>{priorityStyles.labelText}</SubText> */}
                <SubText>{item.priority} </SubText>
              </PriorityWrapper>
            </div>
            <div>
              <SubTitle>Deadline</SubTitle>
              {/* <SubText>{formatedDeadline}</SubText> */}
              <SubText>12/05/2023</SubText>
            </div>
          </Stats>

          <IconsGroup>
            {/* {today === formatedDeadline && (
              <>
                <Bell aria-label="bell icon" />
                <IconBellWrapper></IconBellWrapper>
              </>
            )} */}
            <Bell aria-label="bell icon" />
            <IconBellWrapper></IconBellWrapper>

            {/* {today > formatedDeadline && (
              <>
                <ArrowCircle onClick={handleDelayPopup} />
              </>
            )} */}
            {/* <ArrowCircle onClick={handleDelayPopup} /> */}
            <ArrowCircle />

            {/* Окно с дедлайном */}

            {/* <MoverWrapper>
              <ArrowCircle
                ref={moveIconRef}
                aria-label="move card icon"
                onClick={handleIconMoveClick}
              />

              {delayPopup && (
                <PopupWrapper>
                  {delayOptions.map((item, idx) => (
                    <PopupItem
                      onClick={() => handleDeadline(deadline, item)}
                      key={idx}
                    >
                      <PopupText>
                        {item > 1 ? `${item} days delay` : `${item} day delay`}{' '}
                      </PopupText>
                    </PopupItem>
                  ))}
                </PopupWrapper>
              )}

              {isPopupOpen && (
                <CardMovePopUp card={item} columnName={columnName} />
              )}
              <CardMovePopUp />
            </MoverWrapper> */}

            <Pencil onClick={handleOpenCardModal} aria-label="edit icon" />
            <Trash
              aria-label="edit icon"
              // onClick={() => dispatch(deleteCard(_id))}
            />
          </IconsGroup>
        </BottomWrapper>
      </CardWrapper>
      <ReactModal
        isOpen={isOpenCardModal}
        title="Edit Card"
        closeModal={handleCloseCardModal}
        onRequestClose={handleCloseCardModal}
      >
        <EditCardModal closeModal={handleCloseCardModal}/>
      </ReactModal>
    </>
  );
};

export default Card;
