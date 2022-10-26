const ERROR_MSGS = {
  VALIDATION_ERROR: "Validation Failed",
  INTERNAL_SERVER_ERROR: "Internal Server Error",
  UNAUTHORIZED: "Unauthorized",
  INVALID_EMAIL: "Invalid email address",
  EMAIL_IN_USE: "Email already in use",
};
const REGEXES = {
  EMAIL:
    "^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*.)+[a-zA-Z]{2,}$",
};
module.exports = { ERROR_MSGS, REGEXES };
