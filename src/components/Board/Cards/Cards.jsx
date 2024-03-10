import { useState, useRef, useEffect } from 'react';
import CardMovePopUp from './CardMovePopUp';
import { useDispatch } from 'react-redux';

import {
  DelayIcon,
  Title,
  CardWrapper,
  Text,
  IconsGroup,
  Bell,
  TopWrapper,
  BottomWrapper,
  Stats,
  Priority,
  Deadline,
  ArrowCircle,
  MoverWrapper,
  IconBellWrapper,
  PopupWrapper,
  PopupItem,
  PopupText,
  Pencil,
  Trash,
  ModalWindow
} from './styled';
import EditCardModal from '../../ModalWindows/CardModal/EditCardModal/EditCardModal';
import { deleteCard, editCard } from 'store/dashboards/dashboardsOperations';


// const Card = ({ item, columnName }) => {
  const Card = () => {
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [delayPopup, setDelayPopup] = useState(false);
  const moveIconRef = useRef();
  const [openCardModal, setOpenCardModal] = useState(false);
  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  // const { title, _id, deadline, description, priority } = item;

  const delayOptions = [1, 3, 5, 7];

  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  const today = new Date().toLocaleString('en-GB', options);
  // const parsedDate = new Date(deadline);

  // const formatedDeadline =
  //   parsedDate && parsedDate.toLocaleString('en-GB', options);

  const handleIconMoveClick = () => setIsPopupOpen(!isPopupOpen);

  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 80) {
      return str.join('');
    }
    return str.splice(0, 80).join('') + '...';
  };

  const handleOutsideClick = event => {
    const path = event.composedPath();

    if (!path.includes(moveIconRef.current)) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // const expiredCard = today > formatedDeadline;

  const handleDelayPopup = () => {
    setDelayPopup(prev => !prev);
  };

  const handleDeadline = (deadline, delay) => {
    const date = new Date(deadline);
    date.setDate(date.getDate() + delay);

    // dispatch(
    //   editCard({ cardId: _id, title, description, priority, deadline: date })
    // );

    setDelayPopup(prev => !prev);
  };

  return (
    <>
      {/* <CardWrapper priority={priority} expired={expiredCard}> */}
      <CardWrapper>
        <TopWrapper>
          {/* <Title>{title}</Title> */}
          <Title />
          {/* <Text>{checkTextLength(description)}</Text> */}
          <Text />
        </TopWrapper>

        <BottomWrapper>
          <Stats>
            {/* <Priority priority={priority}>{priority}</Priority> */}
            <Priority/>
            {/* <Deadline>{formatedDeadline}</Deadline> */}
            <Deadline />
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
                <DelayIcon onClick={handleDelayPopup} />
              </>
            )} */}
            <DelayIcon onClick={handleDelayPopup} />
            <MoverWrapper>
              <ArrowCircle
                ref={moveIconRef}
                aria-label="move card icon"
                onClick={handleIconMoveClick}
              />

              {delayPopup && (
                <PopupWrapper>
                  {/* {delayOptions.map((item, idx) => (
                    <PopupItem
                      onClick={() => handleDeadline(deadline, item)}
                      key={idx}
                    >
                      <PopupText>
                        {item > 1 ? `${item} days delay` : `${item} day delay`}{' '}
                      </PopupText>
                    </PopupItem>
                  ))} */}
                </PopupWrapper>
              )}

              {/* {isPopupOpen && (
                <CardMovePopUp card={item} columnName={columnName} />
              )} */}
              <CardMovePopUp/>
            </MoverWrapper>
            <Pencil onClick={handleOpenCardModal} aria-label="edit icon" />
            <Trash
              aria-label="edit icon"
              // onClick={() => dispatch(deleteCard(_id))}
            />
          </IconsGroup>
        </BottomWrapper>
      </CardWrapper>
      <ModalWindow
        open={openCardModal}
        closeModal={handleCloseCardModal}
        >
          {/* <EditCardModal card={item} closeModal={handleCloseCardModal} /> */}
          <EditCardModal closeModal={handleCloseCardModal} />
        
      </ModalWindow>
    </>
  );
};

export default Card;