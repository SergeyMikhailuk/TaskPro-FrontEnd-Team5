import React, { useState } from 'react';
import { Formik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
} from 'store/cardsSlice';
import { useSelector } from 'react-redux';

const options = ['Low', 'Medium', 'High', 'Without priority'];

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
  description: Yup.string()
    .min(1, 'Minimum 1 characters')
    .max(230, 'Maximum 230 characters'),
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
  const [startDate, setStartDate] = useState(
    card.deadline ? new Date(card.deadline) : new Date()
  );

  const initialValues = {
    title: typeModal === 'edit' ? card.title : 'Title',
    description: card.description || '',
    priority: card.priority || 'Low',
    deadline: card.deadline,
  };

  const [createCard] = useCreateTodosMutation();
  const [editCard] = useUpdateTodosMutation();
  const activeBoardId = useSelector(state => state.activeBoardId);
  const customDate = startDate.toLocaleString('en-GB', dateOptions);

  const handleSubmit = async (values, { resetForm }) => {
    const { title, description, priority } = values;

    if (!description) {
      toast.error('Description is required!');
      return;
    }

    let deadline = startDate;

    if (!deadline) {
      deadline = new Date().toISOString();
    }

    try {
      const todoData = { title, description, priority, deadline };
      if (typeModal === 'add') {
        await createCard({ columnId, todo: todoData, activeBoardId });
      } else if (typeModal === 'edit' && card) {
        await editCard({ todoId: card._id, ...todoData });
      }
      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ModalSection>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formikProps => (
          <ModalForm onSubmit={formikProps.handleSubmit}>
            <FormWrapper>
              <TitleInput
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
              <AuthError name="title" component="div" />

              <Textarea
                as="textarea"
                name="description"
                id="description"
                type="text"
                placeholder="Description"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                value={formikProps.values.description}
              />
              <AuthError name="description" component="div" />
            </FormWrapper>

            <FormWrapper>
              <FormTitle>Icons</FormTitle>
              <RadioBtnWrapper>
                {options.map((el, idx) => (
                  <Label
                    key={idx}
                    $value={el}
                    className={
                      formikProps.values.priority === el ? 'active' : ''
                    }
                    id="labelOut"
                  >
                    <LabelItem
                      value={el}
                      className={
                        formikProps.values.priority === el ? 'active' : ''
                      }
                      id="labelIn"
                    />

                    <DefaultRadioBtn
                      type="radio"
                      value={el}
                      name="priority"
                      checked={formikProps.values.priority === el}
                      onChange={formikProps.handleChange}
                    />
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
