import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import data from '../../background.json';
import sprite from '../../../../images/sprite.svg';
import { useCreateBoardMutation, useGetBoardsQuery } from 'store/boardsSlice';
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
  SectionTitle,
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

const AddBoardModal = () => {
  const [selectedBg, setSelectedBg] = useState('');
  const [setIcon, setSetIcon] = useState(options[0]);

  const initialValues = {
    title: '',
    iconURL: setIcon,
    backgroundURL: selectedBg,
  };
  const [createBoard] = useCreateBoardMutation();
  const { data: boardsData } = useGetBoardsQuery();

  const handleSubmit = async values => {
    const { backgroundURL, iconURL, title } = values;

    if (boardsData) {
      const alreadyExists = boardsData.some(board => {
        const name = board.title.toLowerCase();
        const newName = title.toLowerCase();
        return name === newName;
      });

      if (alreadyExists) {
        console.log(`${title} already exists`);
      } else {
        try {
          const response = await createBoard({
            title,
            iconURL,
            backgroundURL,
          });

          console.log('Board created:', response);
        } catch (error) {
          console.error('Error creating board:', error);
        }
      }
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
      <SectionTitle>New board</SectionTitle>

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
                    onClick={() => handleBgSelection(el.url)}
                    className={selectedBg === el.url ? 'active' : ''}
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
            Create
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default AddBoardModal;
