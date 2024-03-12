// import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
// import { deleteColumn } from 'store/dashboards/dashboardsOperations';
import Card from '../Cards/Cards';
import { ModalColumn } from 'components/ModalWindows/ColumnModals';
import AddCardModal from 'components/ModalWindows/CardModals/AddCardModal/AddCardModal';
import { ReactModal } from '../../ModalWindows/Modal/Modal';
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
  // const dispatch = useDispatch();

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
                <CardsBtnDelete />
              </ButtonDelete>
            </ButtonWrapper>
          </Header>

          {/* <TaskList length={condition}> */}
          <TaskList>
            <Card />
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
        <AddCardModal closeModal={handleCloseCardModal} />
      </ReactModal>
    </Wrapper>
  );
};
