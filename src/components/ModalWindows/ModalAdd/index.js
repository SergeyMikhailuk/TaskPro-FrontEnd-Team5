import React from 'react';

import {
  ModalOverlay,
  ModalContainer,
  ModalCloseBox,
  ModalCloseBtnWrap,
  ModalCloseBtnIcon,
  ModalTitle,
  ModalFormikBox,
  ModalFormikBoxInput,
  ModalFormikBoxBtn,
  ModalFormikBoxBtnIcon,
} from './styled';
import { Formik } from 'formik';

const ModalAdd = ({ handleModal }) => {
  const initialValues = {
    title: '',
  };

  return (
    <>
      <ModalOverlay>
        <ModalContainer>
          <ModalCloseBox>
            <ModalCloseBtnWrap onClick={handleModal}>
              <ModalCloseBtnIcon />
            </ModalCloseBtnWrap>
          </ModalCloseBox>
          <ModalTitle>Add column</ModalTitle>
          <Formik
            id="formEditColumn"
            initialValues={initialValues}
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
      </ModalOverlay>
    </>
  );
};

export default ModalAdd;
