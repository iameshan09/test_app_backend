const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
  student_name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('student', StudentSchema);
