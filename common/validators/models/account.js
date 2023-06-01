const Yup = require("yup");

const account_validator = Yup.object().shape({
  name: Yup.string().required(),
});

module.exports = account_validator;
