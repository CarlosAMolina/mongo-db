const mongoose = require("mongoose");

// If the datbase name does not exist, it will be created.
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/dbname");
};

// Creeate a schema.
const student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  creationDate: Date,
  favoriteFoods: [{ type: String }],
  info: {
    school: {
      type: String,
    },
    shoeSize: {
      type: Number,
    },
  },
});

// First argument is the collection.
const Student = mongoose.model("student", student);

connect()
  .then(async (connection) => {
    console.log(
      "Connection:",
      connection.connections[0].host,
      connection.connections[0].port,
      connection.connections[0].name,
    );
    await Student.deleteMany({});
    const student = await Student.create({
      firstName: "John",
      creationDate: "2024-04-20",
    });
    console.log("created", student);
    const found = await Student.find({ firstName: "John" });
    console.log("found:", found);
    const foundAll = await Student.find({});
    console.log("foundAll:", foundAll);
  })
  .catch((e) => console.error(e));

function sum_1(number) {
  return number + 1;
}

module.exports = sum_1;
