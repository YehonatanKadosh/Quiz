const Yup = require("yup");
const { roles } = require("../..");

const user_validator = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  phoneNumber: Yup.string()
    .matches(/^\+?(972|0)(-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/)
    .required(),
  accounts: Yup.array().of(Yup.string()),
  role: Yup.string().oneOf(Object.values(roles)).required(),
});

module.exports = user_validator;
