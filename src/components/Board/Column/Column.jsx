// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { deleteColumn } from 'store/dashboards/dashboardsOperations';
import Card from '../Cards/Cards';
import ModalEdit from 'components/ModalWindows/ColumnModals/ModalEditColumn/index';
import AddCardModal from 'components/ModalWindows/CardModals/AddCardModal/AddCardModal';
import Modal from 'react-modal'
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
  ModalWindow,
  AddCardCreateBtn,
} from './styled';



export const Column = ({ item }) => {
  // const dispatch = useDispatch();

  Modal.setAppElement('#root');

  const [isOpenColumnModal, setIsOpenColumnModal] = useState(false);
  const [isOpenCardModal, setIsOpenCardModal] = useState(false);

  // const selectedPriority = useSelector(
  //   state => state.dashboards.selectedPriority
  // );



  
  
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


  // const filteredColumn =
  //   item.cards && item.cards.filter(item => item.priority === selectedPriority);

  // const columnLength = item.cards && item.cards.length;
  // const fileteredColumnLength = filteredColumn && filteredColumn.length;

  // const condition =
  //   selectedPriority === 'show all' ? columnLength : fileteredColumnLength;

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Header>
            {/* <Title>{item.title}</Title> */}
            <Title>NameColumn </Title>


            <ButtonWrapper>

              <ButtonEdit>
              <CardstBtnEdit onClick={handleOpenColumnModal} />
              </ButtonEdit>

              {/* <CardsBtnDelete onClick={() => dispatch(deleteColumn(item._id))} /> */}
              <ButtonDelete>
              <CardsBtnDelete/>
              </ButtonDelete>
            </ButtonWrapper>
          </Header>

          {/* <TaskList length={condition}> */}
          <TaskList>
            <Card/>
            {/* {selectedPriority === 'show all'
              ? item.cards &&
                item.cards.map(el => (
                  <Card key={el._id} item={el} columnName={item.title} />
                ))
              : filteredColumn &&
                filteredColumn.map(el => (
                  <Card key={el._id} item={el} columnName={item.title} />
                ))} */}
          </TaskList>
        </Content>

        <Button onClick={handleOpenCardModal}>
          <ButtonPlus>
            <AddCardCreateBtn />
          </ButtonPlus>
          Add another card
        </Button>
      </ContentWrapper>
      {/* <ModalWindowFirst isOpen={isOpenColumnModal} onRequestClose={handleCloseColumnModal}> */}
        
          <ModalEdit
            // title={item.title}
            // columnId={item._id}
            closeModal={handleCloseColumnModal} isOpen={isOpenColumnModal} onRequestClose={handleCloseColumnModal}
          />
        {/* </ModalWindowFirst> */}
        

      <ModalWindow isOpen={isOpenCardModal} onRequestClose={handleCloseCardModal} >
          {/* <AddCardModal columnId={item._id} closeModal={handleCloseCardModal} /> */}
          <AddCardModal closeModal={handleCloseCardModal} />
        </ModalWindow>
    </Wrapper>
  );
};