import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import {
  useCreateColumnMutation,
  useUpdateColumnMutation,
} from 'store/columnsSlice';

import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';

const ModalColumn = ({ typeModal, closeModal, activeBoardId, columnId }) => {
  const initialValues = {
    title: '',
  };

  const [createColumn] = useCreateColumnMutation();
  const [updateColumn] = useUpdateColumnMutation();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      if (typeModal === 'add') {
        await createColumn({ boardId: activeBoardId, column: values });
      } else if (typeModal === 'edit') {
        await updateColumn({ columnId, column: values });
      }
      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error:', error);
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
              {typeModal === 'add' ? 'Add' : 'Edit'}
            </ModalFormikBoxBtn>
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export { ModalColumn };
