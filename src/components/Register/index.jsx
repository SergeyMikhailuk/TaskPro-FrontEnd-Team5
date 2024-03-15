import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import { register } from 'store/auth/authOperations';

import { RegisterSchema } from './RegisterSchema';

import {
  AuthForm,
  AuthNav,
  RegisterLink,
  LoginLink,
  AuthInput,
  AuthField,
  AuthError,
  AuthFormPasswordIcon,
  AuthButton,
  ThirdPasswordField,
} from './styled';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  const handleTogglePassword = () => setShowPassword(!showPassword);

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <AuthForm>
            <AuthNav>
              <RegisterLink to="/auth/register" underline="none">
                Registration
              </RegisterLink>
              <LoginLink to="/auth/login" underline="none">
                Log In
              </LoginLink>
            </AuthNav>
            <AuthInput>
              <AuthField
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </AuthInput>
            <AuthError name="name" component="div" />
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
                placeholder="Create a password"
              />
              <AuthFormPasswordIcon onClick={handleTogglePassword}>
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </AuthFormPasswordIcon>
            </AuthInput>
            <AuthError name="password" component="div" />
            <AuthButton type="submit">Register Now</AuthButton>
          </AuthForm>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
