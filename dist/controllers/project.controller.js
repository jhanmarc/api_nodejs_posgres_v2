"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = getProjects;
exports.createProject = createProject;
exports.getProjectId = getProjectId;
exports.deleteProject = deleteProject;
exports.updateProject = updateProject;
exports.searchProject = searchProject;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _Project = _interopRequireDefault(require("../models/Project"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProjects(_x, _x2) {
  return _getProjects.apply(this, arguments);
}

function _getProjects() {
  _getProjects = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Project["default"].findAll();

          case 3:
            projects = _context.sent;
            res.json({
              data: projects
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getProjects.apply(this, arguments);
}

function createProject(_x3, _x4) {
  return _createProject.apply(this, arguments);
}

function _createProject() {
  _createProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, name, priority, description, deliverydate, newProject;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, priority = _req$body.priority, description = _req$body.description, deliverydate = _req$body.deliverydate;
            _context2.prev = 1;
            _context2.next = 4;
            return _Project["default"].create({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              fields: ['name', 'priority', 'description', 'deliverydate']
            });

          case 4:
            newProject = _context2.sent;

            if (!newProject) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              messege: 'Proyecto creado',
              data: newProject
            }));

          case 7:
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              messege: 'Problemas de servidor',
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _createProject.apply(this, arguments);
}

function getProjectId(_x5, _x6) {
  return _getProjectId.apply(this, arguments);
}

function _getProjectId() {
  _getProjectId = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return _Project["default"].findOne({
              where: {
                id: id
              }
            });

          case 4:
            project = _context3.sent;
            res.json({
              project: project
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 8]]);
  }));
  return _getProjectId.apply(this, arguments);
}

function deleteProject(_x7, _x8) {
  return _deleteProject.apply(this, arguments);
}

function _deleteProject() {
  _deleteProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.prev = 1;
            _context4.next = 4;
            return _Project["default"].destroy({
              where: {
                id: id
              }
            });

          case 4:
            deleteRowCount = _context4.sent;
            res.json({
              messege: 'Proyecto eliminado exitosamente',
              count: deleteProject
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 8]]);
  }));
  return _deleteProject.apply(this, arguments);
}

function updateProject(_x9, _x10) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var id, _req$body2, name, priority, description, deliverydate, projects;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context6.prev = 2;
            _context6.next = 5;
            return _Project["default"].findAll({
              attributer: ['id', 'name', 'priority', 'description', 'deliverydate'],
              where: {
                id: id
              }
            });

          case 5:
            projects = _context6.sent;

            if (projects.length > 0) {
              projects.forEach( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(updateproject) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return updateproject.update({
                            name: name,
                            priority: priority,
                            description: description,
                            deliverydate: deliverydate
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              messege: 'Proyecto actualizado correctamente',
              data: projects
            }));

          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](2);
            console.log(_context6.t0);

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[2, 10]]);
  }));
  return _updateProject.apply(this, arguments);
}

function searchProject(_x11, _x12) {
  return _searchProject.apply(this, arguments);
}

function _searchProject() {
  _searchProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var name, Op, searchName;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            name = req.params.name;
            Op = _sequelize["default"].Op;
            _context7.prev = 2;
            _context7.next = 5;
            return _Project["default"].findAll({
              attributer: ['id', 'name', 'priority', 'description', 'deliverydate'],
              where: {
                name: _defineProperty({}, Op.like, "%".concat(name, "%"))
              }
            }, {
              offset: 10,
              limit: 2
            });

          case 5:
            searchName = _context7.sent;
            res.json(searchName);
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](2);
            console.log(_context7.t0);

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[2, 9]]);
  }));
  return _searchProject.apply(this, arguments);
}