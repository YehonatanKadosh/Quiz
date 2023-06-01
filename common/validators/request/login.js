const Yup = require("yup");

const login_validator = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(),
  password: Yup.string().required(),
});

module.exports = login_validator;
