const Yup = require("yup");

const recovery_validator = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

module.exports = recovery_validator;
