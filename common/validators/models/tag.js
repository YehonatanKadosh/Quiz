const Yup = require("yup");

const tag_validator = Yup.object().shape({
  name: Yup.string().required(),
  topics: Yup.array().of(Yup.string()).required(),
});

module.exports = tag_validator;
