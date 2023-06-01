const Yup = require("yup");
const quiz_validator = require("./quiz");

const quizRecord_validator = Yup.object().shape({
  quiz: quiz_validator.required(),
  date: Yup.date().required(),
});

module.exports = quizRecord_validator;
