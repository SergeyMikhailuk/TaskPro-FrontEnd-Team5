import React from 'react';

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

const ModalHelp = ({ handleModal }) => {
  const initialValues = {
    email: '',
    comment: '',
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
          <ModalTitle>Need help</ModalTitle>
          <Formik
            id="formHelp"
            initialValues={initialValues}
            // validationSchema={ModalSchema}
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
    </>
  );
};

export default ModalHelp;
