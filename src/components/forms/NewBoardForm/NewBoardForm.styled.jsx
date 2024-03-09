import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 350%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: ${props => props.theme.themePopup.background};
  color: ${props => props.theme.themePopup.textSecondary};
  border-radius: 8px;
  width: 100vw;
  max-width: 350px;
`;

const Title = styled.h2`
  font-style: medium;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-family: 'Poppins';
  margin: 0;
   color: ${props => props.theme.themePopup.textSecondary};
`;

const FormikContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const NewBoardText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgba(22, 22, 22, 1);
`;

const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  padding: 18px 14px;
  color: ${props => props.theme.themePopup.textAccent};
  border: 1px solid
  ${props => props.theme.themePopup.border};
  border-radius: 8px;
  &:placeholder-shown {
  color: ${props => props.theme.themePopup.textSecondary};
  font-size: 14px;
  }
  &:focus {
    border-color: ${props => props.theme.themePopup.border};
  }
`;

const Error = styled(ErrorMessage)`
  padding-left: 14px;
  margin: 0;
  color: var(--color-pastel);
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

const Text = styled.p`
  font-family: 'Poppins';
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.svg`
  height: 18px;
  width: 18px;
  stroke: ${props => props.theme.themePopup.boxShadow};
`;

const BgList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  max-width: 256px;
`;

const Img = styled.img`
  border-radius: 6px;
`;

const BgColor = styled.li`
  display: inline-block;
  padding: 0px;
  height: 28px;
  width: 28px;
  margin: 2px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const RadioField = styled(Field)`
  appearance: none;
  position: absolute;

  &:checked + ${Icon} {
    stroke: ${props => props.theme.themePopup.boxShadow};
  }
`;

const RadioFieldBg = styled.input`
  appearance: none;
  position: absolute;
  &:checked + ${Img} {
    transform: scale(0.95);
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export {
  FormContainer,
  Container,
  Input,
  Error,
  Title,
  Text,
  Icon,
  Img,
  BgColor,
  IconList,
  BgList,
  RadioField,
  FormikContainer,
  RadioFieldBg,
  CloseButton,
  NewBoardText,
};
