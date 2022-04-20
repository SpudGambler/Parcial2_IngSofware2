const EmployeeModel = require('../models/employee.model');
const Boom = require('@hapi/boom');

class EmployeeService {
  async createEmployee(employee) {
    employee.save();
    return employee;
  }

  find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(EmployeeModel.find());
      }, 3000);
    });
  }

  async showEmployee(employeeId) {
    return EmployeeModel.findById({ _id: employeeId }).then((employeeFind) => {
      if (!employeeFind) throw Boom.notFound('No se encontró el empleado');
      return employeeFind;
    });
  }

  async editEmployee(employeeId, name, lastname, salary, position_job) {
    return EmployeeModel.findByIdAndUpdate(
      { _id: employeeId },
      { name, lastname, salary, position_job }
    ).then((employeeFind) => {
      if (!employeeFind)
        throw Boom.notFound(
          'No se encontró el empleado'
        );
    });
  }

  async removeEmployee(employeeId) {
    return EmployeeModel.findById({ _id: employeeId }).then(
      (employeeFind) => {
        if (!employeeFind) throw Boom.notFound('No se encontró el empleado');
        return EmployeeModel.findByIdAndDelete(employeeId);
      }
    );
  }
}

module.exports = EmployeeService;
