import React, { useState } from 'react';
import data from 'components/ModalWindows/background.json';
import sprite from 'images/sprite.svg';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useUpdateBoardMutation, useGetBoardByIdQuery, } from 'store/boardsSlice';


import {
  DefaultRadioBtn,
  CustomRadioBtn,
  BgcItem,
  FormWrapper,
  RadioBtnWrapper,
  FormTitle,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  Icon,
  IconWrapper,
  ButtonPlus,
  ErrorSection,
  ModalForm,
} from '../styled';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required!'),
});

const options = [
  '#icon-Project',
  '#icon-star',
  '#icon-loading',
  '#icon-puzzle-piece',
  '#icon-container',
  '#icon-lightning',
  '#icon-colors',
  '#icon-hexagon',
];

const EditBoardModal = ({ closeModal, item}) => {
  // const dispatch = useDispatch();
  const { _id, title, iconURL, backgroundURL } = item;
  const [selectedBg, setSelectedBg] = useState(backgroundURL);
  const [setIcon, setSetIcon] = useState(iconURL);
 
  const initialValues = {
    title: title,
    iconURL: setIcon,
    backgroundURL: selectedBg,
  };
  const [updateBoard] = useUpdateBoardMutation(_id);
  const { data: boardsData } = useGetBoardByIdQuery(_id);
  console.log('boardsData', boardsData);

  const handleSubmit = async values => {
    const { title, iconURL, backgroundURL } = values;
    const updatedData = {_id, title, iconURL, backgroundURL };
    console.log('updatedData', updatedData);

    

     
        try {
          const response = await updateBoard({
            _id,
            title,
            iconURL: setIcon,
            backgroundURL: selectedBg,
          });

          console.log('Board edited:', response);
          closeModal();
        } catch (error) {
          console.error('Error edited board:', error);
        }
      
    
  };

  const handleBgSelection = url => {
    setSelectedBg(url);
  };

  const handleIconSelection = el => {
    setSetIcon(el);
  };


  
  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="title" component="div" />
            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              autoComplete="off"
            />
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Icons </FormTitle>
            <RadioBtnWrapper>
              {options.map((el, idx) => (
                <IconWrapper key={idx}>
                  <Icon
                    className={setIcon === el ? 'active' : ''}
                    onClick={() => handleIconSelection(el)}
                    width={18}
                    height={18}
                  >
                    <use href={sprite + el} width={18} height={18} />
                  </Icon>

                  <DefaultRadioBtn type="radio" value={el} name="icon" />
                </IconWrapper>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <FormWrapper>
            <FormTitle>Backgrounds </FormTitle>
            <RadioBtnWrapper>
              {data.map((el, idx) => (
                <label key={idx}>
                  <BgcItem
                    className={selectedBg === el.url ? 'active' : ''}
                    onClick={() => handleBgSelection(el.url)}
                  >
                    {el.url !== '' && (
                      <CustomRadioBtn
                        $url={el.url}
                        onClick={() => handleBgSelection(el.url)}
                        className={selectedBg === el.url ? 'active' : ''}
                      />
                    )}
                  </BgcItem>

                  <DefaultRadioBtn type="radio" value={el.url} name="bg" />
                </label>
              ))}
            </RadioBtnWrapper>
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                <use href={sprite + '#icon-plus'} />
              </PlusIcon>
            </ButtonPlus>
            Edit
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};


export default EditBoardModal;
