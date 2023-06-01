const Yup = require("yup");
const { languages } = require("../..");
const question_validator = require("./question");
const topic_validator = require("./topic");

const quiz_validator = Yup.object({
  language: Yup.string().oneOf(Object.values(languages)).required(),
  name: Yup.string().max(200).required(),
  questions: Yup.array().of(question_validator).min(1, "at least one question"),
  introduction: Yup.string().required(),
  quizenerEmail: Yup.string().email().required(),
  passingScore: Yup.number().required().min(0).max(100),
  answersReview: Yup.boolean().required(),
  certificateURL: Yup.string().required(),
  topic: topic_validator.required(),
  successMessage: Yup.string().required(),
  failMessage: Yup.string().required(),
  version: Yup.number().default(1),

  // mailing handler
  successEmailSubject: Yup.string().required(),
  successEmailMessage: Yup.string().required(),
  failEmailSubject: Yup.string().required(),
  failEmailMessage: Yup.string().required(),
});

module.exports = quiz_validator;
