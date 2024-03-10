import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseBox,
  ModalCloseBtnWrap,
  ModalCloseBtnIcon,
  ModalTitle,
  ModalFormikBox,
  ModalFormikBoxInputEmail,
  ModalFormikBoxInputComment,
  ModalFormikBoxBtn,
} from './styled';
import { Formik } from 'formik';

const ModalHelp = ({ isOpen, closeModal }) => {
  const initialValues = {
    email: '',
    comment: '',
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log('Form submitted!');
    try {
      await axios.post('/api/need-help', values);

      resetForm();
      closeModal();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <ModalOverlay>
        <ModalContainer>
          <ModalCloseBox>
            <ModalCloseBtnWrap onClick={closeModal}>
              <ModalCloseBtnIcon />
            </ModalCloseBtnWrap>
          </ModalCloseBox>
          <ModalTitle>Need help</ModalTitle>
          <Formik
            id="formHelp"
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {formik => (
              <>
                <ModalFormikBox>
                  <ModalFormikBoxInputEmail
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Email address"
                    required
                  />
                  <ModalFormikBoxInputComment
                    type="text"
                    name="comment"
                    value={formik.values.comment}
                    onChange={formik.handleChange}
                    placeholder="Comment"
                    required
                  />
                </ModalFormikBox>
                <ModalFormikBoxBtn type="submit">Send</ModalFormikBoxBtn>
              </>
            )}
          </Formik>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};

export default ModalHelp;
