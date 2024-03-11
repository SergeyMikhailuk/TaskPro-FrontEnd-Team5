import React from 'react';
import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';
import { Formik } from 'formik';
import { useCreateColumnMutation } from 'store/columnsSlice';

const ModalAddColumn = ({ isOpen, closeModal, activeBoardId }) => {
  const initialValues = {
    title: '',
  };

  const [createColumn] = useCreateColumnMutation();
  const handleSubmit = async values => {
    try {
      await createColumn({ boardId: activeBoardId, column: values });
    } catch (error) {
      console.error('Error creating column:', error);
    }
  };

  return (
    <ModalContainer>
      <Formik
        id="formEditColumn"
        initialValues={initialValues}
        onSubmit={handleSubmit}

        // validationSchema={ModalSchema}
      >
        {formik => (
          <>
            <ModalFormikBox>
              <ModalFormikBoxInput
                type="text"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                placeholder="Title"
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

export default ModalAddColumn;
