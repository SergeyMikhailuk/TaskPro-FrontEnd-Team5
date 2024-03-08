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

const ModalEdit = ({ handleModal }) => {
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
          <ModalTitle>Edit column</ModalTitle>
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
      </ModalOverlay>
    </>
  );
};

export default ModalEdit;
