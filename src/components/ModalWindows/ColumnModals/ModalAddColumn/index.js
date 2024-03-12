import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useCreateColumnMutation } from 'store/columnsSlice';
import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';

const ModalAddColumn = ({ isOpen, closeModal, activeBoardId }) => {
  const initialValues = {
    title: '',
  };

  const [createColumn] = useCreateColumnMutation();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
  });

  const handleSubmit = async (values, { resetForm, closeModal }) => {
    try {
      await createColumn({ boardId: activeBoardId, column: values });
      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error creating column:', error);
    }
  };

  return (
    <ModalContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            {' '}
            <ModalFormikBox>
              <Field
                type="text"
                name="title"
                as={ModalFormikBoxInput}
                placeholder="Title"
                required
              />
              <ErrorMessage name="title" component="div" className="error" />{' '}
            </ModalFormikBox>
            <ModalFormikBoxBtn type="submit">
              <ModalFormikBoxBtnIcon />
              Add
            </ModalFormikBoxBtn>
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default ModalAddColumn;
