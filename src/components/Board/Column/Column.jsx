import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteColumn } from 'store/dashboards/dashboardsOperations';
import Card from 'components/Cards/Card';
import ModalAdd from 'components/ModalWindows/ModalAdd/index';
import ModalEdit from 'components/ModalWindows/ModalEdit/index';
import AddCardModal from 'components/ModalWindows/CardModal/AddCardModal';

import {
  Wrapper,
  Header,
  Button,
  ButtonPlus,
  TaskList,
  IconWrapper,
  Content,
  Title,
  ContentWrapper,
  CardsBtnDelete,
  CardstBtnEdit,
  AddCardCreateBtn,
} from './styled';



export const ColumnTask = ({ item }) => {
  const dispatch = useDispatch();

  const [openColumnModal, setOpenColumnModal] = useState(false);
  const [openCardModal, setOpenCardModal] = useState(false);

  const selectedPriority = useSelector(
    state => state.dashboards.selectedPriority
  );

  const handleOpenColumnModal = () => setOpenColumnModal(true);
  const handleCloseColumnModal = () => setOpenColumnModal(false);

  const handleOpenCardModal = () => setOpenCardModal(true);
  const handleCloseCardModal = () => setOpenCardModal(false);

  const filteredColumn =
    item.cards && item.cards.filter(item => item.priority === selectedPriority);

  const columnLength = item.cards && item.cards.length;
  const fileteredColumnLength = filteredColumn && filteredColumn.length;

  const condition =
    selectedPriority === 'show all' ? columnLength : fileteredColumnLength;

  return (
    <Wrapper>
      <ContentWrapper>
        <Content>
          <Header>
            <Title>{item.title}</Title>

            <IconWrapper>
              <CardstBtnEdit onClick={handleOpenColumnModal} />

              <CardsBtnDelete onClick={() => dispatch(deleteColumn(item._id))} />
            </IconWrapper>
          </Header>

          <TaskList length={condition}>
            {selectedPriority === 'show all'
              ? item.cards &&
                item.cards.map(el => (
                  <Card key={el._id} item={el} columnName={item.title} />
                ))
              : filteredColumn &&
                filteredColumn.map(el => (
                  <Card key={el._id} item={el} columnName={item.title} />
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
      <ModalAdd
        open={openColumnModal}
        closeModal={handleCloseColumnModal}
        children={
          <ModalEdit
            title={item.title}
            columnId={item._id}
            closeModal={handleCloseColumnModal}
          />
        }
      />

      <ModalAdd
        open={openCardModal}
        closeModal={handleCloseCardModal}
        children={
          <AddCardModal columnId={item._id} closeModal={handleCloseCardModal} />
        }
      />
    </Wrapper>
  );
};