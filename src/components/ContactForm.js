import React, { useState, useEffect } from "react";
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
          <div className="button-holder">
          <div className="tag">{props.value}</div>
            <input
              type="checkbox"
              className="checkbox"
              id={props.id}
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
          <label for={props.id}>
          </label>
          </div>
        )}
      </Field>
    );
  }



const ContactForm = () => {
  const [isError, setIsError] = useState(false);

  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isNumberError, setIsNumberError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  
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

  useEffect(() => {
    isEmailError ? addErrorClass('email') : removeErrorClass('email');
    isNameError ? addErrorClass('name') : removeErrorClass('name');
    isNumberError ? addErrorClass('phone-number') : removeErrorClass('phone-number');
    isMessageError ? addErrorClass('message') : removeErrorClass('message');
  })

  const addErrorClass = (e) => {
   
    let element = document.querySelector(`.input__${e}`);
    element.classList.add('err');
  }

  const removeErrorClass = (e) => {
   
    let element = document.querySelector(`.input__${e}`);
    element.classList.remove('err');
  }

  

  return (
    <Formik
      initialValues={{
        name: '',
        message: '',
        email: '',
        phoneNumber: '',
        category: []

      }}
      validationSchema={SingupSchema}
      onSubmit={handleSubmit}
      render={formProps => {
        return (
          <Form className="form-wrapper margin-top-s">
            <div className="form__checkboxes">
            <Checkbox name="category" value="grafika wydawnicza" id="checkbox-1" />
            <Checkbox name="category" value="okładka" id="checkbox-2"/> 
            <Checkbox name="category" value="layout" id="checkbox-3"/>
            <Checkbox name="category" value="skład" id="checkbox-4"/>
            <Checkbox name="category" value="ilustracja" id="checkbox-5"/>
            <Checkbox name="category" value="fotografia" id="checkbox-6"/>
            <Checkbox name="category" value="web design" id="checkbox-7"/>
            </div>
            <div className="form__inputs">
            
              <Field
                className="input__email input"
                type="text"
                name="email"
                placeholder="Email"
              />
              { formProps.errors.email ? setIsEmailError(true) : setIsEmailError(false) }
              {/* <ErrorMessage component="div" name="email" className="error-message" /> */}

              <Field
              className="input__name input"
                type="text"
                name="name"
                placeholder="Imię"
              />
              {formProps.errors.name ? setIsNameError(true) : setIsNameError(false)}
              {/* <ErrorMessage  component="div"name="name" className="error-message" /> */}



             

              <Field
              className="input__phone-number input"
                type="text"
                name="phoneNumber"
                placeholder="tel"
              />
              {/* {formProps.errors.phoneNumber && handleError('phoneNumber')} */}
              {formProps.errors.phoneNumber ? setIsNumberError(true) : setIsNumberError(false)}

              <ErrorMessage component="div" name="phoneNumber input" className="error-message" />

              <Field
                className="input__message input"
                type="textarea"
                name="message"
                placeholder="W czym możemy pomóc?"
              />
              {formProps.errors.message ? setIsMessageError(true) : setIsMessageError(false)}
              <ErrorMessage component="div" name="message" className="error-message" />

              <button
                type="submit"
                disabled={formProps.isSubmitting}>
                Submit Form
                    </button>
            </div>
            {isError && <p>There is something wrong with the form. Please contact us via email or call us.</p>}
          </Form>

        );
      }}
    />);

}


export default ContactForm;