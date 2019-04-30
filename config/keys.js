if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY
  };
} else {
  var { localMongoURI, localSecretOrKey } = require("./keys_dev");
  module.exports = {
    mongoURI: localMongoURI,
    secretOrKey: localSecretOrKey
  };
}
