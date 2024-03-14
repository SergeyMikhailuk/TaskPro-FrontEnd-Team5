import React from 'react';
import { Formik } from 'formik';

import { useUpdateColumnMutation } from 'store/columnsSlice';

import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';

const ModalEditColumn = ({ closeModal, columnId }) => {
  const initialValues = {
    title: '',
  };
  const [updateColumn] = useUpdateColumnMutation();

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(columnId);
      await updateColumn({ columnId, column: values });
      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error updating column:', error);
    }
  };

  return (
    <ModalContainer>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {formik => (
          <form onSubmit={formik.handleSubmit}>
            <ModalFormikBox>
              <ModalFormikBoxInput
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Rename"
                required
              />
            </ModalFormikBox>
            <ModalFormikBoxBtn type="submit">
              <ModalFormikBoxBtnIcon />
              Add
            </ModalFormikBoxBtn>
          </form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default ModalEditColumn;
