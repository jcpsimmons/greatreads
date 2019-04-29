if (process.env.NODE_ENV == "production") {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
  };
} else {
  module.exports = require("./keys_dev");
}
