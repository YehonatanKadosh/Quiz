const Yup = require("yup");

const topic_validator = Yup.object().shape({
  name: Yup.string().required(),
  account: Yup.string().required(),
});

module.exports = topic_validator;
