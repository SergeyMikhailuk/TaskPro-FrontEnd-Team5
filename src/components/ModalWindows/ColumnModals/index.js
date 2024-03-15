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
  ErrorText,
} from './styled';

const ModalColumn = ({ typeModal, closeModal, activeBoardId, columnId, column }) => {
  const initialValues = {
    title: typeModal === 'edit' ? column.title : 'Title',
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
        {formikProps => (
          <Form onSubmit={formikProps.handleSubmit}>
            {' '}
            <ModalFormikBox>
              <Field
                type="text"
                name="title"
                as={ModalFormikBoxInput}
                placeholder="Title"
                required
              />
              <ErrorMessage name="title" component={ErrorText} />{' '}
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
