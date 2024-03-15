import React from 'react';

import iconImage from 'images/welcome-icon.png';

import {
  WelcomeWrapper,
  WelcomeIcon,
  WelcomeLogo,
  WelcomeContainer,
  WelcomeDescription,
  WelcomeLoginButton,
  WelcomeRegisterButton,
  WelcomeLogoTitle,
  Logo,
} from './styled';

const WelcomePage = () => {
  return (
    <WelcomeWrapper>
      <WelcomeContainer>
        <WelcomeIcon src={iconImage} alt="man with macbook" />

        <WelcomeLogo>
          <Logo />

          <WelcomeLogoTitle>Task Pro</WelcomeLogoTitle>
        </WelcomeLogo>

        <WelcomeDescription>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </WelcomeDescription>

        <WelcomeRegisterButton to="/auth/register">
          Registration
        </WelcomeRegisterButton>
        <WelcomeLoginButton to="/auth/login">Log In</WelcomeLoginButton>
      </WelcomeContainer>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
