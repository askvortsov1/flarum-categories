module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./src/forum/components/CategoriesPage.js":
/*!************************************************!*\
  !*** ./src/forum/components/CategoriesPage.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CategoriesPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/tags/helpers/tagLabel */ "flarum/tags/helpers/tagLabel");
/* harmony import */ var flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/tags/components/TagsPage */ "flarum/tags/components/TagsPage");
/* harmony import */ var flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Category */ "./src/forum/components/Category.js");











var CategoriesPage = /*#__PURE__*/function (_TagsPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CategoriesPage, _TagsPage);

  function CategoriesPage() {
    return _TagsPage.apply(this, arguments) || this;
  }

  var _proto = CategoriesPage.prototype;

  _proto.init = function init() {
    flarum_components_Page__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.init.call(this);
    this.tags = flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_6___default()(app.store.all('tags').filter(function (tag) {
      return !tag.parent();
    }));
    app.history.push('categories', app.translator.trans('askvortsov-category.forum.header.back_to_categories_tooltip'));
    Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'sidebarItems', function (items) {
      if (app.current instanceof CategoriesPage && app.forum.attribute('categories.fullPageDesktop')) {
        for (var item in items.items) {
          console.log(item);

          if (item != 'newDiscussion' && item != 'nav') {
            items.remove(item);
          }
        }
      }

      return items;
    });
  };

  _proto.view = function view() {
    var pinned = this.tags.filter(function (tag) {
      return tag.position() !== null;
    });
    var cloud = this.tags.filter(function (tag) {
      return tag.position() === null;
    });
    var classes = app.forum.attribute('categories.fullPageDesktop') ? ['CategoriesPage', 'TagsPage'] : ['CategoriesPage'];
    return m("div", {
      className: classes.join(' ')
    }, flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.hero(), m("div", {
      className: "container"
    }, m("div", {
      className: app.forum.attribute('categories.fullPageDesktop') ? '' : 'sideNavContainer'
    }, m("nav", {
      className: "CategoriesPage-nav TagsPage-nav IndexPage-nav sideNav",
      config: flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.affixSidebar
    }, m("ul", null, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_4___default()(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.sidebarItems().toArray()))), m("div", {
      className: "CategoriesPage-content sideNavOffset"
    }, m("ol", {
      className: "TagCategoryList"
    }, pinned.map(function (tag) {
      return _Category__WEBPACK_IMPORTED_MODULE_9__["default"].component({
        tag: tag
      });
    })), cloud.length ? m("div", {
      className: "TagCloud"
    }, cloud.map(function (tag) {
      return [flarum_tags_helpers_tagLabel__WEBPACK_IMPORTED_MODULE_7___default()(tag, {
        link: true
      }), ' '];
    })) : ''))));
  };

  _proto.config = function config() {
    var _TagsPage$prototype$c;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_TagsPage$prototype$c = _TagsPage.prototype.config).call.apply(_TagsPage$prototype$c, [this].concat(args));

    if (m.route() != "/") {
      app.setTitle(app.translator.trans('askvortsov-categories.forum.meta.categories_title'));
    } else {
      app.setTitle('');
    }

    app.setTitleCount(0);
  };

  return CategoriesPage;
}(flarum_tags_components_TagsPage__WEBPACK_IMPORTED_MODULE_8___default.a);



/***/ }),

/***/ "./src/forum/components/Category.js":
/*!******************************************!*\
  !*** ./src/forum/components/Category.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _StatWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StatWidget */ "./src/forum/components/StatWidget.js");
/* harmony import */ var _LastDiscussionWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LastDiscussionWidget */ "./src/forum/components/LastDiscussionWidget.js");








var Category = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Category, _Component);

  function Category() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Category.prototype;

  _proto.init = function init() {
    _Component.prototype.init.call(this);

    this.tag = this.props.tag;
    this.isChild = this.props.isChild || false;
  };

  _proto.view = function view() {
    var tag = this.tag;
    var children = this.isChild ? [] : flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default()(app.store.all('tags').filter(function (child) {
      return child.parent() === tag;
    }));
    var cardStyle = this.isChild ? {} : {
      backgroundColor: tag.color()
    };
    var classNames = (this.isChild ? ['TagCategory SubCategory'] : ['TagCategory']).join(' ');
    var lastDiscussionClassNames = (tag.lastPostedDiscussion() ? ['TagCategory-lastDiscussion'] : ['TagCategory-lastDiscussion empty']).join(' ');
    return m("li", {
      "class": classNames
    }, m("a", {
      "class": "TagCategory-content",
      style: cardStyle,
      href: app.route.tag(tag),
      config: m.route
    }, m("div", {
      "class": "TagCategory-alignStart"
    }, m("span", {
      "class": "TagCategory-icon"
    }, this.iconItems().toArray()), m("div", {
      "class": "TagCategory-main"
    }, this.mainItems().toArray())), m("div", {
      "class": "TagCategory-alignEnd"
    }, m("div", {
      "class": "TagCategory-stats StatWidgetList"
    }, this.statItems().toArray()), m("div", {
      "class": lastDiscussionClassNames
    }, this.lastDiscussionItems().toArray()))), this.isChild ? '' : m("ol", {
      className: "TagCategory-subTagList"
    }, children.map(function (child) {
      return [Category.component({
        tag: child,
        isChild: true
      })];
    })));
  };

  _proto.iconItems = function iconItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();

    if (this.tag.icon() && this.isChild) {
      items.add('icon', m("span", {
        "class": "fa-stack fa-2x"
      }, m("i", {
        "class": "fa fa-circle fa-stack-2x icon-background",
        style: {
          color: this.tag.color()
        }
      }), flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.tag.icon(), {
        className: 'fa-stack-1x CategoryIcon'
      })), 10);
    } else if (this.tag.icon() && !app.forum.attribute('categories.parentRemoveIcon')) {
      items.add('icon', m("span", {
        "class": "fa-stack fa-3x"
      }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_2___default()(this.tag.icon(), {
        className: 'fa-stack-1x CategoryIcon'
      })), 10);
    }

    return items;
  };

  _proto.mainItems = function mainItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    items.add('name', m("h4", {
      "class": "TagCategory-name"
    }, this.tag.name()), 15);

    if (this.tag.description() && (this.isChild || !app.forum.attribute('categories.parentRemoveDescription'))) {
      items.add('description', m("div", {
        "class": "TagCategory-description"
      }, this.tag.description()), 10);
    }

    return items;
  };

  _proto.statItems = function statItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();

    if (this.isChild || !app.forum.attribute('categories.parentRemoveStats')) {
      items.add('discussionCount', _StatWidget__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        count: this.tag.discussionCount(),
        label: app.translator.trans('askvortsov-categories.forum.stat-widgets.discussion_label')
      }), 15);
      items.add('postCount', _StatWidget__WEBPACK_IMPORTED_MODULE_5__["default"].component({
        count: this.tag.postCount(),
        label: app.translator.trans('askvortsov-categories.forum.stat-widgets.post_label')
      }), 10);
    }

    return items;
  };

  _proto.lastDiscussionItems = function lastDiscussionItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();

    if (this.isChild || !app.forum.attribute('categories.parentRemoveLastDiscussion')) {
      items.add('lastDiscussion', _LastDiscussionWidget__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        discussion: this.tag.lastPostedDiscussion()
      }), 10);
    }

    return items;
  };

  return Category;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/LastDiscussionWidget.js":
/*!******************************************************!*\
  !*** ./src/forum/components/LastDiscussionWidget.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LastDiscussionWidget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ModifiedUserCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModifiedUserCard */ "./src/forum/components/ModifiedUserCard.js");








var LastDiscussionWidget = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LastDiscussionWidget, _Component);

  function LastDiscussionWidget() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = LastDiscussionWidget.prototype;

  _proto.init = function init() {
    /**
     * Whether or not the user hover card is visible.
     *
     * @type {Boolean}
     */
    this.cardVisible = false;
  };

  _proto.view = function view() {
    var discussion = this.props.discussion;

    if (!discussion) {
      return m("div", {
        "class": "LastDiscussion"
      }, app.translator.trans('askvortsov-categories.forum.last_discussion_widget.no_discussions'));
    }

    var user = discussion.lastPostedUser();
    var card = '';

    if (user && this.cardVisible) {
      card = _ModifiedUserCard__WEBPACK_IMPORTED_MODULE_6__["default"].component({
        user: user,
        className: 'UserCard--popover',
        controlsButtonClassName: 'Button Button--icon Button--flat'
      });
    }

    return m("a", {
      "class": "LastDiscussion",
      href: app.route.discussion(discussion),
      config: this.stopProp
    }, m("a", {
      className: "LastDiscussion-avatar",
      href: user ? app.route.user(user) : '#',
      config: this.stopProp
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_2___default()(user)), m("div", {
      "class": "LastDiscussion-content"
    }, m("div", {
      "class": "LastDiscussion-bottomRow"
    }, flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_4___default()(discussion.lastPostedAt()), " |  ", m("a", {
      className: "LastDiscussion-usernameLink",
      href: user ? app.route.user(user) : '#',
      config: this.stopProp
    }, flarum_helpers_username__WEBPACK_IMPORTED_MODULE_3___default()(user))), m("div", {
      "class": "LastDiscussion-topRow"
    }, Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_5__["truncate"])(discussion.title(), 26))), m("div", {
      "class": "LastDiscussion-userCardContainer"
    }, card));
  };

  _proto.stopProp = function stopProp(element, isInitialized) {
    if (isInitialized) return;
    $(element).on('click', function (e) {
      return e.stopPropagation();
    });
    m.route.apply(this, arguments);
  };

  _proto.config = function config(isInitialized) {
    var _this = this;

    if (isInitialized) return;
    var timeout;
    this.$().on('mouseover', '.LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard', function () {
      clearTimeout(timeout);
      timeout = setTimeout(_this.showCard.bind(_this), 300);
    }).on('mouseout', '.LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard', function () {
      clearTimeout(timeout);
      timeout = setTimeout(_this.hideCard.bind(_this), 150);
    });
  }
  /**
  * Show the user card.
  */
  ;

  _proto.showCard = function showCard() {
    var _this2 = this;

    this.cardVisible = true;
    m.redraw();
    setTimeout(function () {
      return _this2.$('.UserCard').addClass('in');
    });
  }
  /**
   * Hide the user card.
   */
  ;

  _proto.hideCard = function hideCard() {
    $('.UserCard').removeClass('in');
    this.cardVisible = false;
    m.redraw();
  };

  return LastDiscussionWidget;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ModifiedUserCard.js":
/*!**************************************************!*\
  !*** ./src/forum/components/ModifiedUserCard.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModifiedUserCard; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/utils/humanTime */ "flarum/utils/humanTime");
/* harmony import */ var flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/UserControls */ "flarum/utils/UserControls");
/* harmony import */ var flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/username */ "flarum/helpers/username");
/* harmony import */ var flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Dropdown */ "flarum/components/Dropdown");
/* harmony import */ var flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/AvatarEditor */ "flarum/components/AvatarEditor");
/* harmony import */ var flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/helpers/listItems */ "flarum/helpers/listItems");
/* harmony import */ var flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_10__);











/**
 * The `UserCard` component displays a user's profile card. This is used both on
 * the `UserPage` (in the hero) and in discussions, shown when hovering over a
 * post author.
 *
 * ### Props
 *
 * - `user`
 * - `className`
 * - `editable`
 * - `controlsButtonClassName`
 */

var ModifiedUserCard = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ModifiedUserCard, _Component);

  function ModifiedUserCard() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ModifiedUserCard.prototype;

  _proto.view = function view() {
    var user = this.props.user;
    var controls = flarum_utils_UserControls__WEBPACK_IMPORTED_MODULE_4___default.a.controls(user, this).toArray();
    var color = user.color();
    var badges = user.badges().toArray();
    return m("div", {
      className: 'UserCard ' + (this.props.className || ''),
      style: color ? {
        backgroundColor: color
      } : ''
    }, m("div", {
      className: "darkenBackground"
    }, m("div", {
      className: "container"
    }, controls.length ? flarum_components_Dropdown__WEBPACK_IMPORTED_MODULE_8___default.a.component({
      children: controls,
      className: 'UserCard-controls App-primaryControl',
      menuClassName: 'Dropdown-menu--right',
      buttonClassName: this.props.controlsButtonClassName,
      label: app.translator.trans('core.forum.user_controls.button'),
      icon: 'fas fa-ellipsis-v'
    }) : '', m("div", {
      className: "UserCard-profile"
    }, m("h2", {
      className: "UserCard-identity"
    }, this.props.editable ? [flarum_components_AvatarEditor__WEBPACK_IMPORTED_MODULE_9___default.a.component({
      user: user,
      className: 'UserCard-avatar'
    }), flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(user)] : m("a", {
      href: app.route.user(user),
      config: this.stopProp
    }, m("div", {
      className: "UserCard-avatar"
    }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(user)), flarum_helpers_username__WEBPACK_IMPORTED_MODULE_6___default()(user))), badges.length ? m("ul", {
      className: "UserCard-badges badges"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_10___default()(badges)) : '', m("ul", {
      className: "UserCard-info"
    }, flarum_helpers_listItems__WEBPACK_IMPORTED_MODULE_10___default()(this.infoItems().toArray()))))));
  }
  /**
   * Build an item list of tidbits of info to show on this user's profile.
   *
   * @return {ItemList}
   */
  ;

  _proto.infoItems = function infoItems() {
    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
    var user = this.props.user;
    var lastSeenAt = user.lastSeenAt();

    if (lastSeenAt) {
      var online = user.isOnline();
      items.add('lastSeen', m("span", {
        className: 'UserCard-lastSeen' + (online ? ' online' : '')
      }, online ? [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()('fas fa-circle'), ' ', app.translator.trans('core.forum.user.online_text')] : [flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_7___default()('far fa-clock'), ' ', flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_2___default()(lastSeenAt)]));
    }

    items.add('joined', app.translator.trans('core.forum.user.joined_date_text', {
      ago: flarum_utils_humanTime__WEBPACK_IMPORTED_MODULE_2___default()(user.joinTime())
    }));
    return items;
  };

  _proto.stopProp = function stopProp(element, isInitialized) {
    if (isInitialized) return;
    $(element).on('click', function (e) {
      return e.stopPropagation();
    });
    m.route.apply(this, arguments);
  };

  return ModifiedUserCard;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/StatWidget.js":
/*!********************************************!*\
  !*** ./src/forum/components/StatWidget.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StatWidget; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);



var StatWidget = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StatWidget, _Component);

  function StatWidget() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = StatWidget.prototype;

  _proto.view = function view() {
    return m("div", {
      "class": "StatWidget"
    }, m("div", {
      "class": "StatWidget-count"
    }, this.props.count), m("div", {
      "class": "StatWidget-label"
    }, this.props.label));
  };

  return StatWidget;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/IndexPage */ "flarum/components/IndexPage");
/* harmony import */ var flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LinkButton */ "flarum/components/LinkButton");
/* harmony import */ var flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/models/Tag */ "flarum/tags/models/Tag");
/* harmony import */ var flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CategoriesPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CategoriesPage */ "./src/forum/components/CategoriesPage.js");






app.initializers.add('askvortsov/flarum-categories', function () {
  app.routes.categories = {
    path: '/categories',
    component: _components_CategoriesPage__WEBPACK_IMPORTED_MODULE_5__["default"].component()
  };
  flarum_tags_models_Tag__WEBPACK_IMPORTED_MODULE_4___default.a.prototype.postCount = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('postCount');
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_IndexPage__WEBPACK_IMPORTED_MODULE_1___default.a.prototype, 'navItems', function (items) {
    if (items.has('tags') && !app.forum.attribute('categories.keepTagsNav')) {
      items.remove('tags');
    }

    items.add('categories', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      icon: 'fas fa-th-list',
      children: app.translator.trans('askvortsov-categories.forum.index.categories_link'),
      href: app.route('categories')
    }), -9.5);

    if (items.has('moreTags')) {
      items.replace('moreTags', flarum_components_LinkButton__WEBPACK_IMPORTED_MODULE_2___default.a.component({
        children: app.translator.trans('flarum-tags.forum.index.more_link'),
        href: app.route('categories')
      }));
    }

    return items;
  });
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/components/AvatarEditor":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/AvatarEditor']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/AvatarEditor'];

/***/ }),

/***/ "flarum/components/Dropdown":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Dropdown']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Dropdown'];

/***/ }),

/***/ "flarum/components/IndexPage":
/*!*************************************************************!*\
  !*** external "flarum.core.compat['components/IndexPage']" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/IndexPage'];

/***/ }),

/***/ "flarum/components/LinkButton":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['components/LinkButton']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LinkButton'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/helpers/listItems":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/listItems']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/listItems'];

/***/ }),

/***/ "flarum/helpers/username":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['helpers/username']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/username'];

/***/ }),

/***/ "flarum/tags/components/TagsPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['tags/components/TagsPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/components/TagsPage'];

/***/ }),

/***/ "flarum/tags/helpers/tagLabel":
/*!**************************************************************!*\
  !*** external "flarum.core.compat['tags/helpers/tagLabel']" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/helpers/tagLabel'];

/***/ }),

/***/ "flarum/tags/models/Tag":
/*!********************************************************!*\
  !*** external "flarum.core.compat['tags/models/Tag']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/models/Tag'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/UserControls":
/*!***********************************************************!*\
  !*** external "flarum.core.compat['utils/UserControls']" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/UserControls'];

/***/ }),

/***/ "flarum/utils/humanTime":
/*!********************************************************!*\
  !*** external "flarum.core.compat['utils/humanTime']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/humanTime'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map