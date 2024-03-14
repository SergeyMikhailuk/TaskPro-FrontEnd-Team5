import React, { useState } from 'react';
import { Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';

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
  TitleInput,
  Wrapper,
} from './CardModal.styled';

import {
  useCreateTodosMutation,
  useUpdateTodosMutation,
} from 'store/todosSlice';

const options = ['Low', 'Medium', 'High', 'Without priority'];

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  description: Yup.string()
    .min(1, 'Minimum 1 characters')
    .max(230, 'Maximum 230 characters'),
  // .required('Description is required'),
});
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const today = new Date();
const month = months[today.getMonth()];
const day = today.getDate();
const formattedDate = `${month} ${day}`;

const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
};
const CardModal = ({ typeModal, closeModal, columnId, card }) => {
  const [selectedLabel, setSelectedLabel] = useState(options[3]);
  const [startDate, setStartDate] = useState('');

  const initialValues = {
    title: 'description',
    description: 'description',
    priority: selectedLabel,
  };
  if (card) {
    initialValues.title = card.title;
    initialValues.description = card.description;
    initialValues.priority = card.priority;
  }

  const [createCard] = useCreateTodosMutation();
  const [editCard] = useUpdateTodosMutation();

  const customDate =
    startDate !== '' ? startDate.toLocaleString('en-GB', dateOptions) : null;

  const handleSubmit = async (values, { resetForm }) => {
    const { title, description, priority } = values;
    let deadline = startDate;

    if (deadline === '') {
      deadline = new Date().toISOString();
    }

    try {
      if (typeModal === 'add') {
        await createCard({
          columnId: columnId,
          todo: { title, description, priority, deadline },
        });
      } else if (typeModal === 'edit' && card) {
        await editCard({
          todoId: card._id,
          title,
          description,
          priority,
          deadline,
        });
      }

      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ModalSection>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
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
              <FormTitle>Icons</FormTitle>
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
                {startDate !== '' ? customDate : `Today, ${formattedDate}`}
              </DateTitle>
              <Wrapper>
                <DatePicker
                  className="input-ref"
                  minDate={new Date()}
                  selected={startDate}
                  onChange={date => setStartDate(date)}
                  id="datePicker"
                  calendarStartDay={1}
                />
              </Wrapper>
            </FormWrapper>
            <AuthFormSubmitButton type="submit">
              <ButtonPlus>
                <PlusIcon />
              </ButtonPlus>
              {typeModal === 'add' ? 'Add' : 'Edit'}
            </AuthFormSubmitButton>
          </ModalForm>
        )}
      </Formik>
    </ModalSection>
  );
};

export default CardModal;
