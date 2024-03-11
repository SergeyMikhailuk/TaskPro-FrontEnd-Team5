import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { RegisterSchema } from '../../Register/RegisterSchema';
import { getThemeName } from 'store/themeSlice';

import {
  AuthFormWrapper,
  ErrorSection,
  AuthForm,
  AuthFormField,
  AuthFormPasswordIcon,
  AuthFormSubmitButton,
  EditWrapper,
  ImageWrapper,
  CustomButton,
  UserImage,
  HiddenInput,
  AddPhoto,
  ThirdPasswordField,
} from './styled';

import userDark from 'images/user-dark.svg';
import userLight from 'images/user-light.svg';
import userViolet from 'images/user-violet.svg';

const userImages = {
  light: userLight,
  dark: userDark,
  violet: userViolet,
};

const UserModal = ({ closeModal, user }) => {
  const theme = useSelector(getThemeName);
  const [showPassword, setShowPassword] = useState(false);
  const [fileImage, setFileImage] = useState(null);
  const [currentImageUrl, setCurrentImageUrl] = useState('');

  const initialValues = {
    image: currentImageUrl,
    name: user.name,
    email: user.email,
    password: '',
    showPassword: false,
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];

    setFileImage(file);

    const reader = new FileReader();

    reader.onload = upload => {
      setCurrentImageUrl(upload.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const setDefaultAvatar = () => {
    return userImages[theme] || userDark;
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const onSubmit = values => {
    const { name, email, password } = values;

    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    if (fileImage) {
      formData.append('avatarURL', fileImage);
    }

    closeModal();
  };

  const changeImage = () => {
    if (currentImageUrl === '') {
      return setDefaultAvatar(); // Возвращаем стандартное изображение аватара
    }

    return currentImageUrl;
  };

  return (
    <EditWrapper>
      <ImageWrapper url={!currentImageUrl ? setDefaultAvatar() : undefined}>
        {currentImageUrl && <UserImage src={changeImage()} alt="user" />}
        <CustomButton
          onClick={() => document.querySelector('.input-field').click()}
        >
          <AddPhoto />
          <HiddenInput
            className="input-field"
            type="file"
            accept="image/*"
            name="imageURL"
            onChange={handleImageUpload}
          />
        </CustomButton>
      </ImageWrapper>

      <Formik
        id="formform"
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        <AuthForm>
          <AuthFormWrapper>
            <AuthFormField
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorSection name="name" component="div" />
          </AuthFormWrapper>

          <AuthFormWrapper>
            <AuthFormField
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorSection name="email" component="div" />
          </AuthFormWrapper>

          <AuthFormWrapper>
            <ThirdPasswordField
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter your password"
            />

            <AuthFormPasswordIcon onClick={handleTogglePassword}>
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </AuthFormPasswordIcon>
            <ErrorSection name="password" component="div" />
          </AuthFormWrapper>

          <AuthFormSubmitButton type="submit">Send</AuthFormSubmitButton>
        </AuthForm>
      </Formik>
    </EditWrapper>
  );
};

export default UserModal;
