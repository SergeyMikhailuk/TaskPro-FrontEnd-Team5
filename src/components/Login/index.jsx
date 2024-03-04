import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
// import { logIn } from '../../store/auth/authOperations';
import { LoginSchema } from './LoginSchema';
import {
  AuthForm,
  AuthNav,
  RegisterLinkLog,
  LoginLinkLog,
  AuthInput,
  AuthField,
  AuthError,
  EyeSvg,
  EyeSvgDark,
  AuthButton,
} from '../Register/styled';

  const LoginForm = () => {
//   const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    // dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
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
              <AuthError name="email" component="div" />
            </AuthInput>
            <AuthInput>
              <AuthField
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Confirm a password"
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
            <AuthButton type="submit">Logi In Now</AuthButton>
          </AuthForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm