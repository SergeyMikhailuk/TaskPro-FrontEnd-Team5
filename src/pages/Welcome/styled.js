import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as LogoSvg } from 'images/logo-icon.svg';

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 40px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;

  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 310px;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    width: 473px;
  }
`;

export const WelcomeIcon = styled.img`
  width: 124px;
  height: 124px;

  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`;

export const WelcomeLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;

  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`;

export const WelcomeLogoTitle = styled.h1`
  color: #161616;
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1.12px;

  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`;

export const WelcomeDescription = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: #161616;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;

export const WelcomeRegisterButton = styled(NavLink)`
  width: calc(100% - 40px);
  padding: 14px;
  margin-bottom: 14px;
  text-decoration: none;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  border-radius: 8px;
  background: #161616;

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    width: 344px;
  }
`;

export const WelcomeLoginButton = styled(NavLink)`
  text-decoration: none;
  color: #161616;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  width: 344px;
  height: 41px;
  cursor: pointer;
  display: flex;
  align-items: center ;
  justify-content: center;
  border-radius: 8px;   
  transition: all 150ms linear;

  &:hover, &:focus {
    opacity: 0.8;    
    background: #161616;
    color: #ffffff;
  }
`;
