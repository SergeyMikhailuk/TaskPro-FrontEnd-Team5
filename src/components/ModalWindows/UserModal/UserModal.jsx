import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { editProfileSchema } from './editProfileSchema';
import { getThemeName } from 'store/themeSlice';
import { useDispatch } from 'react-redux';
import { editProfile } from 'store/auth/authOperations';

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
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const avatarURL = useSelector(state => state.auth.user.avatarURL);
  const initialValues = {
    image: currentImageUrl,
    name: user.name || '',
    email: user.email || '',
    password: user.password || '',
    showPassword: false,
  };
 
  useEffect(() => {
    if (avatarURL) {
      setCurrentImageUrl(avatarURL);
    }
  }, [avatarURL]);


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

  const onSubmit = (values, { resetForm }) => {
    const formData = new FormData();

    formData.append('name', values.name ? values.name : user.name);
    formData.append('email', values.email ? values.email : user.email);
    formData.append('password', values.password ? values.password : user.password);
    
    if (fileImage) {
      formData.append('avatar', fileImage);
    }

    formData.forEach((value, key) => {
      if (Array.isArray(value)) {
        formData.set(key, value.toString());
      }
    });
    dispatch(editProfile({ formData, token }));
    resetForm();
    closeModal();
  };

  const changeImage = () => {
    if (currentImageUrl === '') {
      return setDefaultAvatar();
    }

    return currentImageUrl;
  };

  return (
    <EditWrapper>
      <ImageWrapper $url={!currentImageUrl ? setDefaultAvatar() : undefined}>
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
        validationSchema={editProfileSchema}
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
