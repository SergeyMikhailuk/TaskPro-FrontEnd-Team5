import React from 'react';


import { ReactComponent as PresentIcon } from 'images/present-icon.svg';

import { AppHeader } from './styled';


import { Formik } from 'formik';
import * as yup from 'yup';
import 'yup-phone-lite';
import {
  Button,
  ErrorMessageStyled,
  FieldsWrapper,
  FormStyled,
  Input,
  Label,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const initialValues = {
  name: '',
  phone: '',
};

const validationSchema = yup.object().shape({
  name: yup.string().min(3).max(30).required('A name is required'),
  phone: yup
    .string()
    .phone(
      'UK',
      'Phone number is invalid. Please follow example: +38-093-333-33-33'
    )
    .required('A phone number is required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addNewContact = newContact => {
    const isExist = contacts.find(
      contact =>
        contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
    );

    if (isExist) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    dispatch(addContact(newContact));
  };

  const handleSubmit = (values, { resetForm }) => {
    addNewContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <FormStyled>
        <FieldsWrapper>
          <Label htmlFor="name">
            Name
            <Input type="text" name="name" />
          </Label>
          <Label htmlFor="number">
            Number
            <Input type="tel" name="phone" />
          </Label>
          <Button type="submit" aria-label="add contact">
            Add contact
          </Button>
        </FieldsWrapper>

        <ErrorMessageStyled name="name" component="div" />
        <ErrorMessageStyled name="phone" component="div" />
      </FormStyled>
    </Formik>
  );
};


const Header = () => {
  return (
    <AppHeader>
      <h2>Header</h2>
      <PresentIcon />
    </AppHeader>
  );
};

export default Header;
