import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ErrorText, SubmitForm, InputBox, Input, InputName, SubmitBtn } from './ContactForms';

const initialValues = {
  name: '',
  number: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(10, 'Too Short!')
    .max(14, 'Too Long!')
    .required('Required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = ({ onSubmit }) => {
  
  const onSubmitInner = (value, {resetForm}) => { 
    onSubmit(value);
    resetForm();
  };
  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitInner}
      validationSchema={validationSchema}
    >
      <SubmitForm>
        <InputName>Name: </InputName>
        <InputBox>          
          <Input type="text" name="name" required></Input>
          <FormError name="name" />
        </InputBox>
        <InputName>Number: </InputName>
        <InputBox>          
          <Input
            type="tel"
            name="number"
            placeholder="Enter phone number"
            required
          ></Input>
          <FormError name="number" />
        </InputBox>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </SubmitForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
