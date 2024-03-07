import * as Yup from 'yup';
import React, { useState } from 'react';
import BtnAdd from 'components/buttons/BtnAdd';
import { ReactComponent as Hexagon } from 'images/svg/NewBoard/hexagon.svg';
import { ReactComponent as Colors } from 'images/svg/NewBoard/colors.svg';
import { ReactComponent as Containers } from 'images/svg/NewBoard/container.svg';
import { ReactComponent as Lightning } from 'images/svg/NewBoard/lightning.svg';
import { ReactComponent as Loading } from 'images/svg/NewBoard/loading.svg';
import { ReactComponent as Project } from 'images/svg/NewBoard/Project.svg';
import { ReactComponent as Puzzle } from 'images/svg/NewBoard/puzzle.svg';
import { ReactComponent as Star } from 'images/svg/NewBoard/star.svg';
import { toast } from 'react-hot-toast';
import { Formik } from 'formik';
import { BtnCloseBlack } from 'components/buttons/dropDownMoveRight';
import { useTheme } from '@mui/material';
import {
  FormContainer,
  Title,
  Container,
  Error,
  Input,
  Text,
  Icon,
  BgColor,
  IconList,
  BgList,
  RadioField,
  RadioFieldBg,
  FormikContainer,
  CloseButton,
} from './NewBoardForm.styled.jsx'

const NewBoardForm = ({
  formTitle,
  boardTitle,
  boardIcon = '#icon-Project',
  btnText,
  handleSubmit,
  closeModal,
}) => {
  const [background, setbackground] = useState();


  const themeObj = useTheme();

  const formSubmit = values => {
    const title = values.title.trim();

    if (!title || title.length < 3) {
      toast.error('Title must be at least 3 characters long');
      return;
    }
    const data = { ...values, background };

    handleSubmit(data, formTitle);
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(3, 'Title must be at least 3 characters long')
      .required('Title is required'),
  });

  const initialValues = {
    title: boardTitle || '',
    icon: boardIcon,
    background: null,
  };

  const BgImageChangeHandler = data => {
    setbackground(data);
  };

  return (
    <FormContainer theme={themeObj}>
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <Title>{formTitle}</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={formSubmit}
      >
        {formik => (
          <FormikContainer>
            <Container>
              <Input
                theme={themeObj}
                type="text"
                placeholder="Title"
                name="title"
              />
              <Error name="title" component="div" />
            </Container>
            <Text>Icons</Text>
            <IconList>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-Project"
                  />
                  <Icon theme={themeObj}>
                    <Project/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-star-04"
                  />
                  <Icon theme={themeObj}>
                    <Star/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-loading-03"
                  />
                  <Icon theme={themeObj}>
                    <Loading/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-puzzle-piece-02"
                  />
                  <Icon theme={themeObj}>
                    <Puzzle/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-container"
                  />
                  <Icon theme={themeObj}>
                    <Containers/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-lightning-02"
                  />
                  <Icon theme={themeObj}>
                    <Lightning/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-colors"
                  />
                  <Icon theme={themeObj}>
                    <Colors/>
                  </Icon>
                </label>
              </li>
              <li>
                <label>
                  <RadioField
                    theme={themeObj}
                    type="radio"
                    name="icon"
                    value="#icon-hexagon-01"
                  />
                  <Icon theme={themeObj}>
                    <Hexagon/>
                  </Icon>
                </label>
              </li>
            </IconList>

            <Text>Background</Text>
            <BgList>
              <BgColor>
                <label>
                  <RadioFieldBg
                    type="radio"
                    name="background"
                    onChange={() =>
                      BgImageChangeHandler({
                        min: ' ',
                        desktop: ' ',
                        tablet: ' ',
                        mobile: ' ',
                      })
                    }
                  />
                </label>
              </BgColor>
              {/* {images.map(image => (
                <BgColor key={image.min}>
                  <label>
                    <RadioFieldBg
                      type="radio"
                      name="background"
                      onChange={() => BgImageChangeHandler(image)}
                    />
                    <Img src={image.min} alt="bgImage" />
                  </label>
                </BgColor>
              ))} */}
            </BgList>
            <BtnAdd btnTitle={btnText} />
          </FormikContainer>
        )}
      </Formik>
    </FormContainer>
  );
};

export default NewBoardForm;