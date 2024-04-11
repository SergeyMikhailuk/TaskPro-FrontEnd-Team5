import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { logIn } from 'store/auth/authOperations';
import { LoginSchema } from './LoginSchema';

import { FcGoogle } from 'react-icons/fc';
import {
  AuthForm,
  AuthNav,
  RegisterLinkLog,
  LoginLinkLog,
  AuthInput,
  AuthField,
  AuthError,
  AuthFormPasswordIcon,
  ThirdPasswordField,
  AuthButton,
  GoogleAuthButton,
} from 'components/Register/styled';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = async (values, { resetForm }) => {
    await dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <AuthForm>
            <AuthNav>
              <RegisterLinkLog to="/auth/register" underline="none">
                Registration
              </RegisterLinkLog>
              <LoginLinkLog to="/auth/login" underline="none">
                Log In
              </LoginLinkLog>
            </AuthNav>
            <AuthInput>
              <AuthField
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </AuthInput>
            <AuthError name="email" component="div" />
            <AuthInput>
              <ThirdPasswordField
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
              />

              <AuthFormPasswordIcon onClick={handleTogglePassword}>
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </AuthFormPasswordIcon>
            </AuthInput>
            <AuthError name="password" component="div" />
            <AuthButton type="submit">Log In Now</AuthButton>
            <GoogleAuthButton
              to={'https://taskpro-backend-uiwy.onrender.com/api/users/google'}
            >
              <FcGoogle style={{ width: '28px', height: '28px' }} />
              <span>Log In with Google</span>
            </GoogleAuthButton>
          </AuthForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
