const mongoose = require('mongoose');


// If the datbase name does not exist, it will be created.
const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/dbname");
}

// Creeate a schema.
const student = new mongoose.Schema({
    firstName: String
})

// First argument is the collection.
const Student = mongoose.model('student', student)

function sum_1(number) {
  return number + 1;
}


export const exportedForTesting = {
  sum_1,
};
