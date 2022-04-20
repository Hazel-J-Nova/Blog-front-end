import "../FormField.css";

const Form = (props) => {
  return (
    <div className="">
      <label htmlFor={props.id} className="form-label">
        {" "}
        {props.label}{" "}
      </label>
      <div className="icon">
        <input
          classname={`form-control size ${props.styelClass}`}
          type={props.type}
          id={props.id}
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          autofocus
          required
        />
        {props.icon && (
          <i className onClick={props.showPassword}>
            {props.icon}
          </i>
        )}
      </div>
      {props.hasError && <p className="error-text">{props.errortext}</p>}
    </div>
  );
};

export default Form;
