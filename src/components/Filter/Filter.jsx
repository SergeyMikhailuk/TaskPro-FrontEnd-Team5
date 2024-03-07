import { useState } from 'react';

import { useDispatch} from 'react-redux';


import { setFilter } from 'store/filterSlice';

import {
  FilterBtn,
  FilterIcon,
  Wrapper,
  Title,
  Label,
  CustomRadioContainer,
  LabelColors,
  RadioItem,
  Marker,
  RadioLabel,
  Container,
  ShowAllBtn,
  ModalWindow,
  Line,
  CloseModal,
  ClosedButton,
  RadioInput,
} from './styled';

const Filter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const changeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterBtn type="button" onClick={handleOpenModal}>
        <FilterIcon />
        <span>Filters</span>
      </FilterBtn>

      {isModalOpen && (
        <ModalWindow isOpen={isModalOpen} onRequestClose={handleCloseModal}>
          <Wrapper closeModal={handleCloseModal}>
            <ClosedButton>
              <CloseModal onClick={handleCloseModal} />
            </ClosedButton>
            <Title>Filters</Title>
            <Line />
            <Label>
              <Container>
                <LabelColors>Label colors</LabelColors>
                <ShowAllBtn type="button">Show all</ShowAllBtn>
              </Container>
              <CustomRadioContainer>
                <RadioItem>
                  <RadioLabel>
                    <RadioInput
                      name="labelColor"
                      type="radio"
                      value="without"
                      onChange={changeFilter}
                    />
                    <Marker value="without"></Marker>
                    <span>Without priority</span>
                  </RadioLabel>
                </RadioItem>

                <RadioItem>
                  <RadioLabel>
                    <RadioInput
                      name="labelColor"
                      type="radio"
                      value="low"
                      onChange={changeFilter}
                    />
                    <Marker value="low"></Marker>
                    <span>Low</span>
                  </RadioLabel>
                </RadioItem>

                <RadioItem>
                  <RadioLabel>
                    <RadioInput
                      name="labelColor"
                      type="radio"
                      value="medium"
                      onChange={changeFilter}
                    />
                    <Marker value="medium"></Marker>
                    <span>Medium</span>
                  </RadioLabel>
                </RadioItem>

                <RadioItem>
                  <RadioLabel>
                    <RadioInput
                      name="labelColor"
                      type="radio"
                      value="high"
                      onChange={changeFilter}
                    />
                    <Marker value="high"></Marker>
                    <span>High</span>
                  </RadioLabel>
                </RadioItem>
              </CustomRadioContainer>
            </Label>
          </Wrapper>
        </ModalWindow>
      )}
    </>
  );
};

export default Filter;
