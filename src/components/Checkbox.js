import React from "react";
import { Field } from 'formik';

const Checkbox = (props) => {
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
          <label htmlFor={props.id}>
          </label>
          </div>
        )}
      </Field>
    );
  };


export { Checkbox };