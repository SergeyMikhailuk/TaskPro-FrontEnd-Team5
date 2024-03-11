import React from 'react';

import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';
import { Formik } from 'formik';

const ModalEditColumn = ({ isOpen, closeModal }) => {
  const initialValues = {
    title: '',
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
