const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateBooksInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.isbn = !isEmpty(data.isbn) ? data.isbn : "";
  data.author = !isEmpty(data.author) ? data.author : "";
  data.readdate = !isEmpty(data.readdate) ? data.readdate : "";

  if (Validator.isEmpty(data.title)) {
    console.log(data.title);
    errors.title = "Title is required";
  }

  if (Validator.isEmpty(data.isbn)) {
    errors.isbn = "ISBN is required";
  }

  if (Validator.isEmpty(data.author)) {
    errors.author = "Author is required";
  }

  if (Validator.isEmpty(data.readdate)) {
    errors.readdate = "Read date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
