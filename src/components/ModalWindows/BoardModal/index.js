import { Formik } from 'formik';
import * as Yup from 'yup';
import data from 'components/ModalWindows/background.json';
import {setActiveBoardId } from 'store/activeBoardSlice';
import sprite from 'images/sprite.svg';

import {
  useCreateBoardMutation,
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
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

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
  const initialValues = {
    title: typeModal === 'edit' ? item.title : 'Title',
    iconURL: typeModal === 'edit' ? item.iconURL : options[0],
    backgroundURL: typeModal === 'edit' ? item.backgroundURL : ' ',
  };
  const [createBoard] = useCreateBoardMutation();
  const [updateBoard] = useUpdateBoardMutation();
  const dispatch = useDispatch();
  const activeBoardId = useSelector(state => state.activeBoardId);

  console.log(activeBoardId);

  const handleSubmit = async values => {
    const { title, iconURL, backgroundURL } = values;

    try {
      if (typeModal === 'edit' && item) {
        await updateBoard({
          boardId: item._id,
          updatedBoard: {
            title,
            iconURL,
            backgroundURL,
          },
        });
        closeModal();
      } else {
        const boardResp = await createBoard({
          title,
          iconURL,
          backgroundURL,
        });
        console.log(boardResp?.data?._id);
        dispatch(setActiveBoardId(boardResp?.data?._id));
      }
      closeModal();
    } catch (error) {
      console.error(
        'Error',
        typeModal === 'edit' ? 'updating board:' : 'creating board:',
        error
      );
      closeModal();
    }
  };
  // console.log(item);
  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formikProps => (
          <ModalForm onSubmit={formikProps.handleSubmit}>
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
              <FormTitle>Icons</FormTitle>
              <RadioBtnWrapper>
                {options.map((el, idx) => (
                  <IconWrapper key={idx}>
                    <Icon
                      width={18}
                      height={18}
                      className={
                        formikProps.values.iconURL === el ? 'active' : ''
                      }
                      onClick={() => formikProps.setFieldValue('iconURL', el)}
                    >
                      <use href={sprite + el} width={18} height={18} />
                    </Icon>

                    <DefaultRadioBtn
                      type="radio"
                      value={el}
                      name="iconURL"
                      checked={formikProps.values.iconURL === el}
                      onChange={() => formikProps.setFieldValue('iconURL', el)}
                    />
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
                      className={
                        formikProps.values.backgroundURL === el.url
                          ? 'active'
                          : ''
                      }
                      onClick={() =>
                        formikProps.setFieldValue('backgroundURL', el.url)
                      }
                    >
                      {el.url && (
                        <CustomRadioBtn
                          style={{ backgroundImage: `url(${el.url})` }}
                        />
                      )}
                    </BgcItem>
                    <DefaultRadioBtn
                      type="radio"
                      value={el.url}
                      name="backgroundURL"
                      checked={formikProps.values.backgroundURL === el.url}
                      onChange={() =>
                        formikProps.setFieldValue('backgroundURL', el.url)
                      }
                    />
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
        )}
      </Formik>
    </Section>
  );
};

export default BoardModal;
