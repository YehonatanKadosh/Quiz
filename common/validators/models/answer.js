const Yup = require("yup");

const answer_validator = Yup.object().shape({
  content: Yup.string().required("answer content is missing"),
  isRight: Yup.boolean().required(),
});

module.exports = answer_validator;
