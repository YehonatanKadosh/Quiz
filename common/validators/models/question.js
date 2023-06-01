const Yup = require("yup");

const { orientationTypes, questionTypes } = require("../..");
const answer_validator = require("./answer");
const tag_validator = require("./tag");
const topic_validator = require("./topic");

const question_validator = Yup.object().shape({
  type: Yup.string().oneOf(Object.values(questionTypes)).required(),
  question: Yup.string().required(),
  context: Yup.string(),
  answers: Yup.array()
    .of(answer_validator)
    .required("answers required")
    .min(2, "at least 2 answers"),
  orientation: Yup.string().oneOf(Object.values(orientationTypes)).required(),
  tags: Yup.array().of(tag_validator).required().min(1, "at least 1 tag"),
  topics: Yup.array().of(topic_validator).required().min(1, "at least 1 topic"),
  lastUpdated: Yup.date(),
  version: Yup.number().default(1),
  replaced: Yup.boolean().default(false),
});

module.exports = question_validator;
