import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import { register } from '../../store/auth/authOperations';
import { RegisterSchema } from './RegisterSchema';
import {
  AuthForm,
  AuthNav,
  RegisterLink,
  LoginLink,
  AuthInput,
  AuthField,
  AuthError,
  EyeSvg,
  EyeSvgDark,
  AuthButton,
} from './styled';

  const RegisterForm = () => {
  // const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    // dispatch(register(values));
    resetForm();
  };

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
              <AuthError name="name" component="div" />
            </AuthInput>
            <AuthInput>
              <AuthField
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <AuthError name="email" component="div" />
            </AuthInput>
            <AuthInput>
              <AuthField
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Create a password"
              />
              <AuthError name="password" component="div" />
              <span onClick={togglePasswordVisibility}>
                {passwordVisible ? (
                  <EyeSvg width="18" height="18" />
                ) : (
                  <EyeSvgDark width="18" height="18" />
                )}
              </span>
            </AuthInput>
            <AuthButton type="submit">Register Now</AuthButton>
          </AuthForm>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
