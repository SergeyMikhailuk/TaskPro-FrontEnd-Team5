import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

import { ReactComponent as AddBtn } from 'images/sidebar/add-btn.svg';
import { ReactComponent as CloseBtn } from 'images/svg/close.svg';

export const CloseModal = styled(CloseBtn)`
  width: 18px;
  height: 18px;  
  color: ${props => props.theme.modal.textMain};
`;

export const ClosedButton = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
`;


export const AddPhoto = styled(AddBtn)`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  & .plus-back {
    color: ${props => props.theme.editProfileModal.iconPlusBackground};

    &:hover {
      color: ${props => props.theme.modal.plusHover};
    }
  }
  & .plus {
    color: #161616;
  }
`;

export const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: baseline;
  background-color: ${props => props.theme.modal.backgroundMain};
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  margin: 0;
  font-weight: 500;
  letter-spacing: -0.36px;
  color: ${props => props.theme.modal.textMain};
`;

export const ImageWrapper = styled.div`
  position: relative;
  margin: 24px auto 25px;
  border-radius: 8px;
  width: 68px;
  height: 68px;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
`;

export const CustomButton = styled.button`
  position: absolute;
  bottom: -20%;
  left: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: transparent;
  padding: 0;
  width: 28px;
  height: 28px;
  border: none;
  transition: all 150ms linear;
  cursor: pointer;
  svg {
    color: ${props => props.theme.sidebar.addButtonHover};
  }
  svg:hover {
    color: ${props => props.theme.sidebar.iconLogoutHover};
  }
`;

export const UserImage = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  object-fit: cover;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const AuthFormWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const ErrorSection = styled(ErrorMessage)`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding-left: 14px;
  color: #ff0000;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const AuthForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AuthFormField = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  background-color: ${props => props.theme.editProfileModal.background};
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.editProfileModal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.editProfileModal.textMain};
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const AuthFormPasswordIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 18px;
  color: ${props => props.theme.editProfileModal.textMain};
  opacity: 0.4;

  cursor: pointer;
`;

export const AuthFormSubmitButton = styled.button`
  margin-top: 10px;
  padding: 14px;
  border: none;
  background: ${props => props.theme.editProfileModal.buttonBackground};
  border-radius: 8px;

  font-family: 'Poppins';
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${props => props.theme.editProfileModal.buttonColor};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.modal.btnHover};
  }
`;
