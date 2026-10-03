const mongoose = require("mongoose");

const connection = async() => {
  try {
    await mongoose.connect(
      "mongodb+srv://saidhasun0407:saidhasun007@cluster0.qp7qo.mongodb.net/testServerSai?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection