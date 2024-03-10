import React from 'react';
import Modal from 'react-modal';

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

const ModalEdit = ({ isOpen, closeModal }) => {
  const initialValues = {
    title: '',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      //overlayClassName="standartOverlayNone"
    >
      <ModalOverlay>
        <ModalContainer>
          <ModalCloseBox>
            <ModalCloseBtnWrap onClick={closeModal}>
              <ModalCloseBtnIcon />
            </ModalCloseBtnWrap>
          </ModalCloseBox>
          <ModalTitle>Edit column</ModalTitle>
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
      </ModalOverlay>
    </Modal>
  );
};

export default ModalEdit;
