import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from 'constants/theme';
import { ModalOverlay, ModalContent, CloseButton, StyledInput, NewBoardText, Container, TextOne, Text, IconList, Icon, ButtonModal } from './NewBoardForm.styled.jsx';
import { Field, ErrorMessage, Formik } from 'formik';
import { ReactComponent as Hexagon } from 'images/svg/NewBoard/hexagon.svg';
import { ReactComponent as Colors } from 'images/svg/NewBoard/colors.svg';
import { ReactComponent as Containers } from 'images/svg/NewBoard/container.svg';
import { ReactComponent as Lightning } from 'images/svg/NewBoard/lightning.svg';
import { ReactComponent as Loading } from 'images/svg/NewBoard/loading.svg';
import { ReactComponent as Project } from 'images/svg/NewBoard/Project.svg';
import { ReactComponent as Puzzle } from 'images/svg/NewBoard/puzzle.svg';
import { ReactComponent as Star } from 'images/svg/NewBoard/star.svg';
import * as Yup from 'yup';


const NewBoardForm = ({ closeModal }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');
  const themeObj = themes[0];

  const handleSubmit = (values, { setSubmitting }) => {
    const { title } = values;
    const isValid = validationSchema.isValidSync({ title });

    if (!isValid) {
      setError('Title must be at least 3 characters long');
      return;
    }
   
    setTitle('');
    setError('');
    closeModal();
  };

  return (
    <ThemeProvider theme={themeObj}>
      <div>
        {isOpen && (
          <ModalOverlay>
            <ModalContent>
              <CloseButton onClick={() => { setIsOpen(false); closeModal(); }}>&times;</CloseButton>
              <NewBoardText>New board</NewBoardText>
              <Formik
                initialValues={{ title: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <form>
                    <Container>
                      <Field as={StyledInput} type="text" name="title" placeholder="Title" />
                      <ErrorMessage name="title" component="div" />
                    </Container>

                    <Text>Icons</Text>
                    <IconList>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Project />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Star />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Loading />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Puzzle />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Containers />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Lightning />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Colors />
                          </Icon>
                        </label>
                      </li>
                      <li>
                        <label>
                          <Icon theme={themeObj}>
                            <Hexagon />
                          </Icon>
                        </label>
                      </li>
                    </IconList>

                    <TextOne>Background</TextOne>
                    
                      <ButtonModal type="submit" id="createBtn" disabled={isSubmitting}>
                      <img src="plus_icon.png" alt="Create" />
                    </ButtonModal>
                    
                  </form>
                )}
              </Formik>
            </ModalContent>
          </ModalOverlay>
        )}
      </div>
    </ThemeProvider>
  );
}

const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title must be at least 3 characters long')
    .required('Title is required'),
});

export default NewBoardForm;