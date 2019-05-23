import React, { useState, useEffect, useContext } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import * as Yup from "yup";

import { Store } from "./../Store";
import lang from "./language";

import { Checkbox }from "./Checkbox";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/





const ContactForm = () => {
  const { state } = useContext(Store);

  const [isError, setIsError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [isNumberError, setIsNumberError] = useState(false);
  const [isMessageError, setIsMessageError] = useState(false);
  
  const SingupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, lang[state.lang]["contact-form-schema-name"])
      .required(lang[state.lang]["contact-form-schema-required"]),
    email: Yup.string()
      .email(lang[state.lang]["contact-form-schema-mail"])
      .required(lang[state.lang]["contact-form-schema-required"]),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, lang[state.lang]["contact-form-schema-number"]) 
  })
  
  
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
    alert(lang[state.lang]["contact-form-submitted"]);
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
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-1"]} id="checkbox-1" />
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-2"]} id="checkbox-2"/> 
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-3"]} id="checkbox-3"/>
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-4"]} id="checkbox-4"/>
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-5"]} id="checkbox-5"/>
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-6"]} id="checkbox-6"/>
            <Checkbox name="category" value={lang[state.lang]["contact-form-checkbox-7"]} id="checkbox-7"/>
            </div>
            <div className="form__inputs">
            
              <Field
                className="input__email input"
                type="text"
                name="email"
                placeholder="Email"
              />
              { formProps.errors.email ? setIsEmailError(true) : setIsEmailError(false) }

              <Field
              className="input__name input"
                type="text"
                name="name"
                placeholder={lang[state.lang]["contact-form-name"]}
              />
              {formProps.errors.name ? setIsNameError(true) : setIsNameError(false)}
              <Field
              className="input__phone-number input"
                type="text"
                name="phoneNumber"
                placeholder={lang[state.lang]["contact-form-number"]}
              />
              {formProps.errors.phoneNumber ? setIsNumberError(true) : setIsNumberError(false)}
              <ErrorMessage component="div" name="phoneNumber input" className="error-message" />
              <Field
                className="input__message input"
                type="textarea"
                name="message"
                placeholder={lang[state.lang]["contact-form-area"]}
              />
              {formProps.errors.message ? setIsMessageError(true) : setIsMessageError(false)}
              <ErrorMessage component="div" name="message" className="error-message" />

              <button
                type="submit"
                disabled={formProps.isSubmitting}>
                {lang[state.lang]["contact-form-submit"]}
                    </button>
            </div>
            {isError && <p>{lang[state.lang]["contact-form-error-message"]}</p>}
          </Form>

        );
      }}
    />);

}


export default ContactForm;