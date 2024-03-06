import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../images/sprite.svg';

import {
  AuthError,
  AuthFormSubmitButton,
  ButtonPlus,
  CloseModal,
  ClosedButton,
  DateTitle,
  DefaultRadioBtn,
  FormTitle,
  FormWrapper,
  Label,
  LabelItem,
  ModalForm,
  ModalSection,
  PlusIcon,
  RadioBtnWrapper,
  Textarea,
  Title,
  TitleInput,
  Wrapper,
} from '../AddCardModal/CardModal.styled';

const options = ['low', 'medium', 'high', 'without priority'];

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  description: Yup.string()
    .max(230, 'Maximum 230 characters')
    .required('Description is required'),
});
const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};

const EditCardModal = ({ card, closeModal }) => {
  const { id = 12546, title, deadline, description, priority } = card;

  const [selectedLabel, setSelectedLabel] = useState(priority);
  const [startDate, setStartDate] = useState('');
  const customDate =
    startDate !== '' ? startDate.toLocaleString('en-GB', dateOptions) : null;

  const dateForEdit = new Date(deadline);
  const dateLabel = dateForEdit.toLocaleString('en-GB', dateOptions);

  const initialValues = {
    title,
    description,
    priority: selectedLabel,
  };

  const handleSubmit = () => {};

  return (
    <ModalSection>
      <Title>Edit Card</Title>
      <ClosedButton>
        <CloseModal onClick={closeModal} />
      </ClosedButton>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <AuthError name="title" component="div" />

            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            />
            <AuthError name="description" component="div" />

            <Textarea
              component="textarea"
              name="description"
              id="description"
              type="text"
              placeholder="Description"
            />
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Icons </FormTitle>
            <RadioBtnWrapper>
              {options.map((el, idx) => (
                <Label
                  key={idx}
                  value={el}
                  className={selectedLabel === el ? 'active' : ''}
                  id="labelOut"
                >
                  <LabelItem
                    onClick={() => setSelectedLabel(el)}
                    value={el}
                    className={selectedLabel === el ? 'active' : ''}
                    id="labelIn"
                  />

                  <DefaultRadioBtn type="radio" value={el} name="priority" />
                </Label>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Deadline </FormTitle>
            <DateTitle
              onClick={() => document.querySelector('.input-ref').click()}
            >
              {startDate !== '' ? customDate : dateLabel}
            </DateTitle>
            <Wrapper>
              <DatePicker
                className="input-ref"
                minDate={new Date()}
                timeFormat="dd/MM/yyyy"
                selected={startDate}
                onChange={date => setStartDate(date)}
                id="datePicker"
              />
            </Wrapper>
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                <use href={sprite} />
              </PlusIcon>
            </ButtonPlus>
            Edit
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </ModalSection>
  );
};

export default EditCardModal;
