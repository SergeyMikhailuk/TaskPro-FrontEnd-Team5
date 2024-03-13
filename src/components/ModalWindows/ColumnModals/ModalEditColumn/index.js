import React from 'react';

import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';
import { Formik } from 'formik';
import { useUpdateColumnMutation } from 'store/columnsSlice';

const ModalEditColumn = ({ isOpen, closeModal, columnId }) => {
  const initialValues = {
    title: '',
  };
  const [updateColumn] = useUpdateColumnMutation();

  const handleSubmit = async (values, { resetForm, closeModal }) => {
    try {
      await updateColumn({ columnId, column: values });
      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error updating column:', error);
    }
  };

  return (
    <ModalContainer>
      <Formik id="formEditColumn" initialValues={initialValues}>
        {formik => (
          <>
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
          </>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default ModalEditColumn;
