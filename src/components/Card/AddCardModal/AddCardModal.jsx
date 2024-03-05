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
import { useDispatch } from 'react-redux';

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

const AddCardModal = ({ columnId, closeModal }) => {
  const dispatch = useDispatch();
  const [selectedLabel, setSelectedLabel] = useState(options[3]);
  const [startDate, setStartDate] = useState('');
  const customDate =
    startDate !== '' ? startDate.toLocaleString('en-GB', dateOptions) : null;

  let deadline = startDate;

  const initialValues = {
    title,
    description,
    priority: selectedLabel,
  };

  const handleSubmit = () => {};

  return (
    <ModalSection>
      <Title>Add Card</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            />
            <AuthError name="title" component="div" />

            <Textarea
              component="textarea"
              name="description"
              id="description"
              type="text"
              placeholder="Description"
            />
            <AuthError name="description" component="div" />
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

export default AddCardModal;
