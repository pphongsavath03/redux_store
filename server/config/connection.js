const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Merchshop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  }
);

// mongodb+srv://phon:#mia0406@cluster0.akw0t.mongodb.net/Merchshop?retryWrites=true&w=majority



module.exports = mongoose.connection;
