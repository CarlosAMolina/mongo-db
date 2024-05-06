const mongoose = require("mongoose");

// If the datbase name does not exist, it will be created.
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/dbname");
};

// Creeate a schema.
const student = new mongoose.Schema({
  firstName: String,
});

// First argument is the collection.
const Student = mongoose.model("student", student);

connect()
  .then(async (connection) => {
    const student = await Student.create({ firstName: "John" });
    console.log(
      "Connection:",
      connection.connections[0].host,
      connection.connections[0].port,
      connection.connections[0].name,
    );
    console.log(student);
  })
  .catch((e) => console.error(e));

function sum_1(number) {
  return number + 1;
}

module.exports = sum_1;
