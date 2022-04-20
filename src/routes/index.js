const express = require('express');
const employeeRouter = require('./employee.router');

function routerApi(app) {
  const router = express.Router();
  /* Endpoint estático: http://localhost:5000/api/v1 */
  app.use('/api/v1', router);
  /* Endpoint estático: http://localhost:5000/api/v1/people */
  router.use('/employees', employeeRouter);
}

module.exports = routerApi;