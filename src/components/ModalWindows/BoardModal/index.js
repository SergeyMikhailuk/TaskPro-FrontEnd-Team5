import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import data from 'components/ModalWindows/background.json';
import sprite from 'images/sprite.svg';

import {
  useCreateBoardMutation,
  useGetBoardsQuery,
  useUpdateBoardMutation,
} from 'store/boardsSlice';
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
} from './styled';

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

const BoardModal = ({ closeModal, item, typeModal }) => {
  const [selectedBg, setSelectedBg] = useState('');
  const [setIcon, setSetIcon] = useState(options[0]);
  const [initialValues, setInitialValues] = useState({
    title: '',
    iconURL: setIcon,
    backgroundURL: '',
  });

  const [createBoard] = useCreateBoardMutation();
  const [updateBoard] = useUpdateBoardMutation();
  const { data: boardsData } = useGetBoardsQuery();

  console.log(item);
  useEffect(() => {
    if (typeModal === 'edit' && item) {
      setInitialValues({
        title: item.title,
        iconURL: item.iconURL,
        backgroundURL: item.backgroundURL,
      });
    }
  }, [typeModal, item]);

  const handleSubmit = async values => {
    const { title } = values;

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
          if (typeModal === 'edit' && item) {
            await updateBoard({
              boardId: item._id,
              updatedBoard: {
                title,
                iconURL: setIcon,
                backgroundURL: selectedBg,
              },
            });
          } else {
            await createBoard({
              title,
              iconURL: setIcon,
              backgroundURL: selectedBg,
            });
          }
          console.log('Board', typeModal === 'edit' ? 'updated' : 'created');
          closeModal();
        } catch (error) {
          console.error(
            'Error',
            typeModal === 'edit' ? 'updating board:' : 'creating board:',
            error
          );
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
            {typeModal === 'edit' ? 'Edit' : 'Create'}
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default BoardModal;
