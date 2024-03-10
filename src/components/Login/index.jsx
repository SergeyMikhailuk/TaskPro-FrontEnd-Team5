import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { logIn } from '../../store/auth/authOperations';
import { ToastContainer } from 'react-toastify';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { LoginSchema } from './LoginSchema';
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
} from '../Register/styled';

const LoginForm = () => {
    const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => setShowPassword(!showPassword);

  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <>
      <ToastContainer/>
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
          </AuthForm>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
