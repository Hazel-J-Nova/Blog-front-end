import { useState, useEffect } from "react";

const useInput = (isValueValidCheck) => {
  const [valueState, setValueState] = useState("");
  const [isTouchedState, setIsTouchedState] = useState(false);

  const isValueValid = isValueValidCheck(valueState);
  const hasError = !isValueValid && isTouchedState;
  const valueChangeHandler = (e) => {
    setValueState(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouchedState(true);
  };

  const reset = () => {
    setValueState("");
    setIsTouchedState(false);
  };

  return {
    valueState: valueState,
    hasError: hasError,
    isValid: isValueValid,
    valueChangeHandler: valueChangeHandler,
    isTouchedState: isTouchedState,
    onBlur: inputBlurHandler,
    reset: reset,
    setValueState: setValueState,
  };
};

export default useInput;
