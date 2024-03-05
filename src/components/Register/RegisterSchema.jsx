import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Username must be at least 2 characters')
    .max(32, 'Username can be at most 32 characters')
    .matches(/^[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~-]+$/, 'Invalid name format')
    .trim(),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'Email error',
      excludeEmptyString: true,
    }),
  password: Yup.string()

    .min(8, 'Password must be at least 8 characters')
    .max(64, 'Password is too long')
    .required('Password is required')
    .matches(/^[a-zA-Z0-9]+$/, {
      message:
        'Password must contain Latin letters and numbers, without spaces in different case, from 8 to 64 characters',
      excludeEmptyString: true,
    }),
});
