const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: {
    type: String,
    require: true,
  },
  salary: {
    type: Number,
    require: true,
  },
  position_job: {
    position: {
      type: String,
      require: true
    },
    salary: {
      type: Number,
      require: true
    },
    department:{
      departmentId:{
        type: String,
        require: true,
        unique: true,
      },
      departmentName:{
        type: String,
        require: true,
      },
    },
  },
});

module.exports = mongoose.model('EmployeeCollection', employeeSchema);
