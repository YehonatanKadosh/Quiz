// enums
module.exports.languages = require("./enums/languages");
module.exports.orientationTypes = require("./enums/orientationTypes");
module.exports.questionTypes = require("./enums/questionTypes");
module.exports.roles = require("./enums/roles");

// validators
//   models
module.exports.account_validator = require("./validators/models/account");
module.exports.answer_validator = require("./validators/models/answer");
module.exports.quiz_validator = require("./validators/models/quiz");
module.exports.quizRecord_validator = require("./validators/models/quizRecord");
module.exports.question_validator = require("./validators/models/question");
module.exports.tag_validator = require("./validators/models/tag");
module.exports.topic_validator = require("./validators/models/topic");
module.exports.user_validator = require("./validators/models/user");

//   requests
module.exports.login_validator = require("./validators/request/login");
module.exports.signup_validator = require("./validators/request/signup");
module.exports.recovery_validator = require("./validators/request/recovery");
