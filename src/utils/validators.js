const validators = {
  validateEmail: (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true;
    }
    return false;
  },

  validatePassword: (value) => {
    return null;
  },
  validateConfirmPassword: (value) => {
    return null;
  },
  validateUserName: (value) => {
    return null;
  },
  validateMessage: (value) => {
    if (value.trim().length !== 0) {
      return true;
    }
    return false;
  },
};

export default validators;
