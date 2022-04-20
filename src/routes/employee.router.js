const express = require('express');
const employeeModel = require('../models/employee.model');
const employeeService = require('../services/employee.service');
const employeeRouter = express.Router();

const service = new employeeService();

employeeRouter.post('/employee', async (req, res) => {
  try {
    const employee = employeeModel(req.body);
    const data = await service.createEmployee(employee);
    res.status(201).json(data);
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

employeeRouter.get('/', async (req, res, next) => {
  try {
    const data = await service.find();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

employeeRouter.get('/:employeeId', async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const data = await service.showEmployee(employeeId);
    res.status(302).json(data);
  } catch (error) {
    next(error);
  }
});

employeeRouter.put('/:employeeId', async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const { name, lastname, salary, position_job } = req.body;
    const data = await service.editEmployee(
      employeeId,
      name,
      lastname,
      salary,
      position_job
    );
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

employeeRouter.delete('/:employeeId', async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    const data = await service.removeEmployee(employeeId);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = employeeRouter;
