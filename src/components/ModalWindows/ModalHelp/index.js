import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseBtnIcon,
  ModalTitle,
  ModalFormikBox,
  ModalFormikBoxInputEmail,
  ModalFormikBoxInputComment,
  ModalFormikBoxBtn,
} from './styled';
import { Formik, Form, Field, ErrorMessage } from 'formik';

Modal.setAppElement('#root');

const ModalHelp = ({ isOpen, closeModal }) => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      await axios.post('/api/users/need-help', values);
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
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={closeModal}>
              <ModalCloseBtnIcon />
            </button>
          </div>
          <ModalTitle>Need help</ModalTitle>
          <Formik
            initialValues={{ email: '', message: '' }}
            onSubmit={handleSubmit}
          >
            <Form>
              <ModalFormikBox>
                <Field
                  type="text"
                  name="email"
                  placeholder="Email address"
                  as={ModalFormikBoxInputEmail}
                  required
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="text"
                  name="message"
                  placeholder="Comment"
                  as={ModalFormikBoxInputComment}
                  required
                />
                <ErrorMessage name="comment" component="div" />
              </ModalFormikBox>
              <ModalFormikBoxBtn type="submit">Send</ModalFormikBoxBtn>
            </Form>
          </Formik>
        </ModalContainer>
      </ModalOverlay>
    </Modal>
  );
};

export default ModalHelp;
