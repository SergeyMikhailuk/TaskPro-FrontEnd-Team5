// import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
// import { selectIsMenuOpen } from 'store/modeMenu/modeMenuSelectors';
// import { closeMenuMode } from 'store/modeMenu/modeMenuSlice';
import Filter from '../Filter/Filter';
// import { selectColumns,  selectCurrentDashboard, } from 'store/dashboards/dashboardsSelectors';
// import {  selectColumnsLength } from 'store/dashboards/dashboardsSelectors';
import { Column } from '../Board/Column/Column';
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
import ModalAdd from '../ModalWindows/ColumnModals/ModalAddColumn/index';

import { ReactModal } from '../ModalWindows/Modal/Modal';

const MainPart = ({ children }) => {
  // const dispatch = useDispatch();
  // const columnsLength = useSelector(selectColumnsLength);
  // const menuMode = useSelector(selectIsMenuOpen);
  console.log(children);
  //Временно:
  // const menuMode = true;
  // const currentBg = useSelector(state => state?.dashboards?.currentBg);
  // const currentName = useSelector(state => state?.dashboards?.currentName);
  // const currentDashboard = useSelector(selectCurrentDashboard);
  // const columns = useSelector(selectColumns);

  // const [open, setOpen] = useState(false);
  // const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  // const [startX, setStartX] = useState(0);

  // const handleScreenClick = () => {
  //   if (menuMode) {
  //     dispatch(closeMenuMode());
  //   }
  // };

  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);

  const handleOpenColumnModal = () => {
    setIsOpenColumnModal(true);
    // setIsDragging(false);
  };

  const handleCloseColumnModal = () => {
    setIsOpenColumnModal(false);
    // setIsDragging(true);
  };

  // const handleMouseDown = e => {
  //   if (e.button === 0) {
  //     const target = e.target.tagName.toLowerCase();
  //     if (target !== 'input' && target !== 'textarea') {
  //       setIsDragging(true);
  //       setStartX(e.pageX - scrollRef.current.offsetLeft);
  //     }
  //   }
  // };

  // const handleMouseMove = e => {
  //   if (!isDragging || open) return;
  //   const x = e.pageX - scrollRef.current.offsetLeft;
  //   const walk = (x - startX) * 0.05;
  //   scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
  // };

  // const handleMouseUp = e => {
  //   if (e.button === 0) {
  //     setIsDragging(false);
  //   }
  // };

  return (
    // <WrapperMain onClick={handleScreenClick} bgcUrl={currentBg} isOpen={menuMode}>
    <WrapperMain>
      {/* <Header children={currentName}>
        <Title>{children}</Title> */}
      <Header>
        <Title>Project office</Title>

        <Filter />
      </Header>

      {/* <Wrapper length={columnsLength} ref={scrollRef}> */}
      <Wrapper ref={scrollRef}>
        <ContentWrapper
        // onMouseDown={handleMouseDown}
        // onMouseMove={handleMouseMove}
        // onMouseUp={handleMouseUp}
        >
          {/* {columns &&
            columns.map(item => <Column key={item._id} item={item} />)} */}
          <Column />
          <AddButton
            // length={columnsLength}
            onClick={handleOpenColumnModal}
            type="button"
          >
            <IconWrapper>
              <AddIcon />
            </IconWrapper>

            <Text>Add another column</Text>
          </AddButton>
        </ContentWrapper>

        {/* <ModalAdd dashboardId={currentDashboard?._id} closeModal={handleCloseModal} />           */}

        <ReactModal
          isOpen={isOpenColumnModal}
          title="Add Column"
          closeModal={handleCloseColumnModal}
          onRequestClose={handleCloseColumnModal}
        >
          <ModalAdd />
        </ReactModal>
      </Wrapper>
    </WrapperMain>
  );
};

export default MainPart;
