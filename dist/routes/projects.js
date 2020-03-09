"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _project = require("../controllers/project.controller");

var router = (0, _express.Router)();
router.get('/', _project.getProjects);
router.post('/', _project.createProject);
router.put('/:id', _project.updateProject);
router["delete"]('/:id', _project.deleteProject);
router.get('/:id', _project.getProjectId);
router.get('/search/:name', _project.searchProject);
var _default = router;
exports["default"] = _default;