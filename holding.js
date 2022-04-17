import React from "react";

const FormField = (props) => {
  return (
    <div className="mb-3">
      <label className="form-label" for={props.fieldName}>
        {props.fieldName}
      </label>
      <input
        className="form-control"
        type="text"
        id={props.fieldName}
        name={props.fieldName}
        autofocus
        required
        onChange={props.handleChange}
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
};

export default FormField;
