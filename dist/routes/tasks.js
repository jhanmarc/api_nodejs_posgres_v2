"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task.controller");

var router = (0, _express.Router)();
router.get('/', _task.getTasks);
router.post('/', _task.createTask);
router.put('/:id', _task.updateTask);
router["delete"]('/:id', _task.deleteTask);
router.get('/:id', _task.getTaskId); // api/task/project/:projectid

router.get('/project/:projectid', _task.getTaskByProject);
var _default = router;
exports["default"] = _default;