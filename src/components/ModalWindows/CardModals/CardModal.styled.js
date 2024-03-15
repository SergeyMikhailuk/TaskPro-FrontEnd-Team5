import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { ReactComponent as AppBtnSvg } from 'images/svg/plus28.svg';

export const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 154px;
  padding: 14px 18px;

  font-size: 14px;
  letter-spacing: -0.28px;

  margin-top: 14px;
  box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);

  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid ${props => props.theme.modal.buttonBackground};
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.modal.textMain};
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const AuthError = styled(ErrorMessage)`
  text-align: left;
  color: #ff0000;
  font-size: 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 10px;
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 14px;

  &:last-of-type {
    margin-bottom: 14px;
  }
`;

export const TitleInput = styled(Field)`
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  letter-spacing: -0.28px;

  background-color: ${props => props.theme.modal.backgroundMain};
  border: 1px solid ${props => props.theme.modal.buttonBackground};
  box-shadow: 0 4px 16px rgba(22, 22, 22, 0.08);
  outline: none;
  border-radius: 8px;

  color: ${props => props.theme.modal.textMain};
  transition: all 250ms ease;
  opacity: 0.4;

  &::placeholder {
    color: ${props => props.theme.modal.textMain};
    font-size: 14px;
    letter-spacing: -0.28px;
  }

  &:focus {
    opacity: 1;
  }
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  background: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;
  max-width: 287px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: ${props => props.theme.modal.buttonText};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.modal.btnHover};
  }

  &:hover svg {
    transform: scale(1.1);
  }

  @media screen and (min-width: 345px) {
    width: 287px;
  }
  @media screen and (min-width: 768px) {
    width: 302px;
  }
`;

export const DefaultRadioBtn = styled(Field)`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const FormTitle = styled.h3`
  color: ${props => props.theme.modal.textSecondary};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.24px;
  margin-bottom: 4px;
`;

export const RadioBtnWrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

`;

export const Label = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    transform: scale(1.2);
  }

  &.active {
    border: ${({$value}) =>
      $value === 'Without priority' && '2px solid rgb(128,128,128)'};
    border: ${({$value}) =>
      $value === 'Low' && '2px solid rgba(143, 161, 208, 1)'};
    border: ${({$value}) =>
      $value === 'Medium' && '2px solid rgba(224, 156, 181, 1)'};
    border: ${({$value}) =>
      $value === 'High' && '2px solid rgba(190, 219, 176, 1)'};
  }
`;

export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props =>
    props.value === 'Without priority' && 'rgb(128,128,128,1)'};
  background-color: ${props =>
    props.value === 'Low' && 'rgba(143, 161, 208, 1)'};
  background-color: ${props =>
    props.value === 'Medium' && 'rgba(224, 156, 181, 1)'};
  background-color: ${props =>
    props.value === 'High' && 'rgba(190, 219, 176, 1)'};

  transition: all 250ms linear;

  &.active {
    width: 6px;
    height: 6px;
  }
`;

export const ButtonPlus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  background-color: transparent;
  margin-right: 8px;
`;

export const PlusIcon = styled(AppBtnSvg)`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  & .plus {
    color: ${props => props.theme.modal.plusColor};
  }

  & .backgr {
    color: ${props => props.theme.modal.buttonText};
  }
`;

export const ModalForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 233px;

  .react-datepicker {
    overflow: hidden;

    margin-top: -28px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.modal.buttonBackground};

    background: ${props => props.theme.modal.backgroundMain};
    outline: none;
    width: 233px;
    position: absolute;
    right: -307px;
    top: -190px;

    &__input-container {
      appearance: none;
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      border: 0;
      padding: 0;

      white-space: nowrap;
      clip-path: inset(100%);
      clip: rect(0 0 0 0);
      overflow: hidden;
    }

    &__navigation {
      position: absolute;
      top: 8px;
    }

    &__navigation-icon {
      width: 4px;
      height: 8px;
      color: ${props => props.theme.modal.textAccent};
    }

    &__month {
      margin: 0;
    }

    &__week {
      color: ${props => props.theme.modal.unactiveDay};
      font-size: 14px;
      line-height: 18px;
      letter-spacing: -0.28px;

      &:last-of-type {
        margin-bottom: 18px;
      }
    }

    &__day {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.modal.textMain};
      font-size: 14px;

      transition: all 250ms ease;

      &--today {
        color: ${props => props.theme.modal.today};
        background: ${props => props.theme.modal.buttonBackground};
        border-radius: 50%;
      }

      &--outside-month {
        width: 24px;
        height: 24px;
        color: ${props => props.theme.modal.unactiveDay};
      }

      &--keyboard-selected {
        border-radius: 24px;
        background: ${props => props.theme.modal.buttonBackground};
        color: ${props => props.theme.modal.today};
      }

      &:hover {
        border-radius: 24px;
        background: ${props => props.theme.modal.buttonBackground};
        color: ${props => props.theme.modal.today};
      }
    }

    &__day--disabled {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.modal.unactiveDay};
    }

    &__day--selected {
      border-radius: 24px;
      background: ${props => props.theme.modal.buttonBackground};
      color: ${props => props.theme.modal.today};
    }

    &__triangle {
      display: none;
    }

    &__header {
      background-color: ${props => props.theme.modal.backgroundMain};
      width: 231px;
      border-bottom: none;
      padding: 18px 18px 14px;
    }

    &__day-names {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border-top: 1px solid ${props => props.theme.modal.unactiveDay};
      padding-top: 14px;
    }

    &__day-name {
      color: ${props => props.theme.modal.textSecondary};
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    &__current-month {
      color: ${props => props.theme.modal.textMain};
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.32px;
      margin-bottom: 14px;
    }
  }
`;

export const DateTitle = styled.div`
  color: ${props => props.theme.modal.buttonBackground};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    opacity: 0.8;
  }
`;
