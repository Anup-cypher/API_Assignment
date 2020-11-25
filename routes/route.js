const express = require('express');
const route = express.Router();

const controller = require('../Controller/controller_for_employee.js');
// const { routes } = require('../index.js');

route.get('/load', controller.get_employee_data);

route.get('/employee', controller.get);

route.post('/employee', controller.create);

route.put('/employee/:id', controller.update);

route.delete('/employee/:id', controller.destroy);

route.get('/employee/:id', controller.getById);

module.exports = route;