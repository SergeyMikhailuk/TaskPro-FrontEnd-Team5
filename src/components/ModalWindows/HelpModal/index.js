import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInputEmail,
  ModalFormikBoxInputComment,
  ModalFormikBoxBtn,
} from './styled';

const HelpModal = ({ closeModal }) => {
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
    <ModalContainer>
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
  );
};

export default HelpModal;
