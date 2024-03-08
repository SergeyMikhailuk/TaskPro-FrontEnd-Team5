import LoginForm from '../../components/Login';
import RegisterForm from '../../components/Register';
import React from 'react';
import { Container } from './styled'
import { useParams } from 'react-router-dom';

const AuthPage = () => {
  const { id } = useParams();

  return (
    <Container>
      {id === 'login' ? <LoginForm /> : <RegisterForm />}
    </Container>
  );
};

export default AuthPage;
