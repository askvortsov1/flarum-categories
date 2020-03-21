"use strict";

var _Model = _interopRequireDefault(require("flarum/Model"));

var _Tag = _interopRequireDefault(require("flarum/tags/models/Tag"));

var _CategoriesPage = _interopRequireDefault(require("./components/CategoriesPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

app.initializers.add('askvortsov/flarum-categories', function () {
  app.routes.categories = {
    path: '/categories',
    component: _CategoriesPage["default"].component()
  };
  _Tag["default"].prototype.commentCount = _Model["default"].attribute('commentCount');
});