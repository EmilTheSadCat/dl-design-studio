import React, { useState } from "react";
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


// instructions and placeholder text will be variables to change 
// depending on chosen language

const SingupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Za mało znaków!')
    .required('Wymagane'),
  email: Yup.string()
    .email('Nieprawidłowy adres email')
    .required('Wymagane'),
  phoneNumber: Yup.string()
    .matches(phoneRegExp, "Nieprawidłowy numer telefonu") 
})



function Checkbox(props) {
    return (
      <Field name={props.name}>
        {({ field, form }) => (
          <label>
            <input
              type="checkbox"
              {...props}
              checked={field.value.includes(props.value)}
              onChange={() => {
                if (field.value.includes(props.value)) {
                  const nextValue = field.value.filter(
                    value => value !== props.value
                  );
                  form.setFieldValue(props.name, nextValue);
                } else {
                  const nextValue = field.value.concat(props.value);
                  form.setFieldValue(props.name, nextValue);
                }
              }}
            />
            {props.value}
          </label>
        )}
      </Field>
    );
  }



const ContactForm = () => {
  const [isError, setIsError] = useState(false);
  
  const handleSubmit = (values, {
    setSubmitting,
    resetForm
  }) => {
    axios.post('/send', values)
      .then(function (response) {
        if(response.status !== 200) {
          console.log('Something went wrong')
        } else {
          response.data.responseCode ? setIsError(true) : setIsError(false);
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
    alert('Form Submitted');
    setSubmitting(false);
    resetForm({
      name: '',
      email: '',
      phoneNumber: '',
      category: []

    });
    return;
  };

  const handleError = (e) => {
    // TODO: adding class based on e value to the invalid elements. change border to red or sth.
    console.log('I am an error.');
    // console.log(e);
  }

  return (
    <Formik
      initialValues={{
        name: '',
        content: '',
        email: '',
        phoneNumber: '',
        category: []

      }}
      validationSchema={SingupSchema}
      onSubmit={handleSubmit}
      render={formProps => {
        return (
          <Form>
            <Checkbox name="category" value="logo" />
            <Checkbox name="category" value="okładka" />
            <Field
              type="text"
              name="name"
              placeholder="Imię"
            />
            {formProps.errors.name && handleError('name')}
            <ErrorMessage name="name" />

            <Field
              type="text"
              name="email"
              placeholder="Email"
            />
            {formProps.errors.email && handleError('email')}
            <ErrorMessage name="email" />

            <Field
              type="textarea"
              name="content"
              placeholder="W czym możemy pomóc?"
            />
            {formProps.errors.content && handleError('content')}
            <ErrorMessage name="content" />

            <Field
              type="text"
              name="phoneNumber"
              placeholder="tel"
            />
            {formProps.errors.phoneNumber && handleError('phoneNumber')}

            <ErrorMessage name="phoneNumber" />

            <button
              type="submit"
              disabled={formProps.isSubmitting}>
              Submit Form
                   </button>
            {isError && <p>There is something wrong with the form. Please contact us via email or call us.</p>}
          </Form>

        );
      }}
    />);

}


export default ContactForm;