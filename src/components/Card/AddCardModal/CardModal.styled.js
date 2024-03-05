import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
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

export const AuthError = styled(ErrorMessage)`
  display: block;
  position: absolute;
  top: 0;
  right: 8px;
  font-size: 12px;
  border: none;
  margin-bottom: 20px;
  color: white;
`;

export const ModalSection = styled.div``;

export const Title = styled.h2``;

export const FormWrapper = styled.div``;

export const LabelInput = styled.label`
  width: 100%;
`;

export const TitleInput = styled(Field)``;

export const AuthFormSubmitButton = styled.button``;

export const DefaultRadioBtn = styled(Field)``;

export const FormTitle = styled.h3``;

export const RadioBtnWrapper = styled.ul``;

export const Label = styled.label``;

export const LabelItem = styled.div``;

export const ButtonPlus = styled.div``;

export const PlusIcon = styled.svg``;

export const ModalForm = styled(Form)``;

export const Wrapper = styled.div``;

export const DateTitle = styled.div``;
