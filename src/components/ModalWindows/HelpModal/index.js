import React from 'react';
// import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { needHelp } from 'store/auth/authOperations';
import {
  ModalContainer,
  ModalFormikBox,
  ModalFormikBoxInputEmail,
  ModalFormikBoxInputComment,
  ModalFormikBoxBtn,
} from './styled';

// await axios.post('/api/users/need-help', values);

const HelpModal = ({ closeModal }) => {
    const dispatch = useDispatch();
  const handleSubmit =  (values, { resetForm }) => {
    try {
      const { email, message } = values;
      const updateDate = { email, message };
      dispatch(needHelp(updateDate));
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
                  id="email"
                  name="email"
                  placeholder="Email address"
                  as={ModalFormikBoxInputEmail}
                  required
                />
                <ErrorMessage name="email" component="div" />
                <Field
                  type="text"
                  id="message"
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
