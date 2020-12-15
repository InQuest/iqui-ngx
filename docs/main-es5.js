function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "../iqui-ngx/src/lib/_showcase/component/components/index.ts":
  /*!*******************************************************************!*\
    !*** ../iqui-ngx/src/lib/_showcase/component/components/index.ts ***!
    \*******************************************************************/

  /*! exports provided: ShowcaseMenuComponent */

  /***/
  function iquiNgxSrcLib_showcaseComponentComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./menu */
    "../iqui-ngx/src/lib/_showcase/component/components/menu/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseMenuComponent", function () {
      return _menu__WEBPACK_IMPORTED_MODULE_0__["ShowcaseMenuComponent"];
    }); // (Re)export components

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/_showcase/component/components/menu/index.ts":
  /*!************************************************************************!*\
    !*** ../iqui-ngx/src/lib/_showcase/component/components/menu/index.ts ***!
    \************************************************************************/

  /*! exports provided: ShowcaseMenuComponent */

  /***/
  function iquiNgxSrcLib_showcaseComponentComponentsMenuIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseMenuComponent", function () {
      return ShowcaseMenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services */
    "../iqui-ngx/src/lib/services/index.ts");
    /* harmony import */


    var _components_functional_tooltip_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../components/functional/tooltip/index */
    "../iqui-ngx/src/lib/components/functional/tooltip/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Main application component
    // ----------------------------------------------------------------------------
    // Import dependencies


    function ShowcaseMenuComponent_cdk_nested_tree_node_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", node_r2.meta.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiTooltip", node_r2.description)("iquiTooltipPosition", "right")("iquiTooltipShowOnHover", !!node_r2.description)("iquiTooltipShowOnFocus", false)("iquiTooltipStayInViewport", true)("iquiTooltipClass", "page-sidebar-link-tooltip")("routerLink", node_r2.path);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r2.title, " ");
      }
    }

    var _c0 = function _c0() {
      return ["menu-tree-node-expanded"];
    };

    var _c1 = function _c1() {
      return ["menu-tree-node-collapsed"];
    };

    function ShowcaseMenuComponent_cdk_nested_tree_node_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cdk-nested-tree-node", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var node_r3 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1._tree.isExpanded(node_r3) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", node_r3.meta.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiTooltip", node_r3.description)("iquiTooltipPosition", "right")("iquiTooltipShowOnHover", !!node_r3.description)("iquiTooltipShowOnFocus", false)("iquiTooltipStayInViewport", true)("iquiTooltipClass", "page-sidebar-link-tooltip")("routerLink", node_r3.component ? node_r3.path : null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", node_r3.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("menu-tree-invisible", !ctx_r1._tree.isExpanded(node_r3));
      }
    }

    var ShowcaseMenuComponent = /*#__PURE__*/function () {
      function ShowcaseMenuComponent(_router) {
        var _this = this;

        _classCallCheck(this, ShowcaseMenuComponent);

        this._router = _router;
        /**
         * Main menu links tree control
         */

        this._tree = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["NestedTreeControl"](function (node) {
          return node.children;
        });
        /**
         * Checks if page has children
         */

        this._hasChildren = function (_, page) {
          return _services__WEBPACK_IMPORTED_MODULE_4__["Page"].hasChildren(page);
        }; // On route change


        this._router.events.subscribe(function (e) {
          if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            // Flatten all pages
            var flatPages = _services__WEBPACK_IMPORTED_MODULE_4__["Page"].toArray(_this.pages); // (Un)mark all routes


            flatPages.forEach(function (page) {
              return page.meta.active = false;
            }); // Expand and mark active route

            var selected = flatPages.find(function (page) {
              return "/".concat(page.path.join('/')) === e.url;
            });

            while (selected === null || selected === void 0 ? void 0 : selected.parent) {
              selected.meta.active = selected.parent.meta.active = true;

              _this._tree.expand(selected = selected.parent);
            }
          }
        });
      }
      /**
       * Main menu links tree pages
       */


      _createClass(ShowcaseMenuComponent, [{
        key: "_treeDataSource",
        get: function get() {
          return new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["ArrayDataSource"](this.pages);
        }
      }]);

      return ShowcaseMenuComponent;
    }();

    ShowcaseMenuComponent.ɵfac = function ShowcaseMenuComponent_Factory(t) {
      return new (t || ShowcaseMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ShowcaseMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowcaseMenuComponent,
      selectors: [["iqui-showcase-menu"]],
      inputs: {
        pages: "pages",
        title: "title"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "nav-item"], [1, "nav-link", "disabled"], [3, "dataSource", "treeControl"], ["class", "menu-tree-node", 4, "cdkTreeNodeDef"], ["class", "menu-tree-node menu-tree-node-group", 3, "ngClass", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "menu-tree-node"], [1, "nav-link", 3, "iquiTooltip", "iquiTooltipPosition", "iquiTooltipShowOnHover", "iquiTooltipShowOnFocus", "iquiTooltipStayInViewport", "iquiTooltipClass", "routerLink"], [1, "menu-tree-node", "menu-tree-node-group", 3, "ngClass"], ["cdkTreeNodeToggle", "", 1, "nav-link", 3, "iquiTooltip", "iquiTooltipPosition", "iquiTooltipShowOnHover", "iquiTooltipShowOnFocus", "iquiTooltipStayInViewport", "iquiTooltipClass", "routerLink"], ["cdkTreeNodeOutlet", ""]],
      template: function ShowcaseMenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "cdk-tree", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowcaseMenuComponent_cdk_nested_tree_node_4_Template, 4, 10, "cdk-nested-tree-node", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowcaseMenuComponent_cdk_nested_tree_node_5_Template, 6, 15, "cdk-nested-tree-node", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx._treeDataSource)("treeControl", ctx._tree);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx._hasChildren);
        }
      },
      directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkNestedTreeNode"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _components_functional_tooltip_index__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeNodeToggle"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_2__["CdkTreeNodeOutlet"]],
      styles: ["h5[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 4px 16px !important;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.menu-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .menu-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.menu-tree-node[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: white;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  left: -20px;\n  padding: 4px 8px;\n}\n\n.menu-tree-node.menu-tree-node-group.menu-tree-node-expanded[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"[-]\";\n}\n\n.menu-tree-node.menu-tree-node-group.menu-tree-node-collapsed[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"[+]\";\n}\n\n.page-sidebar-link-tooltip[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.page-sidebar-link-tooltip[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: -5px;\n  top: 50%;\n  margin-top: -5px;\n  display: block;\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid transparent;\n  border-right: 5px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvX3Nob3djYXNlL2NvbXBvbmVudC9jb21wb25lbnRzL21lbnUvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLHVCQUFBO0FBQUY7O0FBRUE7RUFDRSw0QkFBQTtBQUNGOztBQUFFO0VBRUUsMEJBQUE7QUFDSjs7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR0E7O0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFBRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUFFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBRUo7O0FBREk7RUFDRSxzQkFBQTtBQUdOOztBQUZNO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSVI7O0FBREk7RUFDRSxjQUFBO0FBR047O0FBREk7RUFDRSxjQUFBO0FBR047O0FBR0E7RUFDRSxrQkFBQTtBQUFGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9fc2hvd2Nhc2UvY29tcG9uZW50L2NvbXBvbmVudHMvbWVudS9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTWVudSBjb250ZW50c1xuaDUge1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbmEge1xuICBwYWRkaW5nOiA0cHggMTZweCAhaW1wb3J0YW50O1xuICAmLFxuICAmID4gKiB7XG4gICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgJi5hY3RpdmUge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tZW51LXRyZWUtaW52aXNpYmxlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUtdHJlZSB1bCxcbi5tZW51LXRyZWUgbGkge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubWVudS10cmVlLW5vZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAmLm1lbnUtdHJlZS1ub2RlLWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgJiA+IGEge1xuICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICYgPiBzcGFuOjpiZWZvcmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICB9XG4gICAgfVxuICAgICYubWVudS10cmVlLW5vZGUtZXhwYW5kZWQgPiBhID4gc3Bhbjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICdbLV0nO1xuICAgIH1cbiAgICAmLm1lbnUtdHJlZS1ub2RlLWNvbGxhcHNlZCA+IGEgPiBzcGFuOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1srXSc7XG4gICAgfVxuICB9XG59XG5cbi8vIFBhZ2UgTWVudSB0b29sdGlwc1xuLnBhZ2Utc2lkZWJhci1saW5rLXRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0xICogNXB4O1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xICogNXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgYmxhY2s7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-showcase-menu',
          templateUrl: './index.html',
          styleUrls: ['./style.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        pages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/_showcase/component/directives/index.ts":
  /*!*******************************************************************!*\
    !*** ../iqui-ngx/src/lib/_showcase/component/directives/index.ts ***!
    \*******************************************************************/

  /*! exports provided: ShowcasePagesDirective */

  /***/
  function iquiNgxSrcLib_showcaseComponentDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcasePagesDirective", function () {
      return ShowcasePagesDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Showcase component's directives
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * When child of <iqui-showcase /> component, allows for defining additional page groups
     *
     * Usage:
     *
     * <ng-container [iqui-showcase-pages]="pages" [title]="'Getting started'">
     *  Addition page groups
     * </ng-container>
     */


    var ShowcasePagesDirective = function ShowcasePagesDirective() {
      _classCallCheck(this, ShowcasePagesDirective);
    };

    ShowcasePagesDirective.ɵfac = function ShowcasePagesDirective_Factory(t) {
      return new (t || ShowcasePagesDirective)();
    };

    ShowcasePagesDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ShowcasePagesDirective,
      selectors: [["", "iqui-showcase-pages", ""]],
      inputs: {
        pages: ["iqui-showcase-pages", "pages"],
        title: "title"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcasePagesDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iqui-showcase-pages]'
        }]
      }], null, {
        pages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['iqui-showcase-pages']
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/_showcase/component/index.ts":
  /*!********************************************************!*\
    !*** ../iqui-ngx/src/lib/_showcase/component/index.ts ***!
    \********************************************************/

  /*! exports provided: ShowcasePagesDirective, ShowcaseMenuComponent, ShowcaseComponent */

  /***/
  function iquiNgxSrcLib_showcaseComponentIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function () {
      return ShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../pages */
    "../iqui-ngx/src/lib/_showcase/pages.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./directives */
    "../iqui-ngx/src/lib/_showcase/component/directives/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_menu_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/menu/index */
    "../iqui-ngx/src/lib/_showcase/component/components/menu/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasePagesDirective", function () {
      return _directives__WEBPACK_IMPORTED_MODULE_2__["ShowcasePagesDirective"];
    });
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components */
    "../iqui-ngx/src/lib/_showcase/component/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseMenuComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_5__["ShowcaseMenuComponent"];
    }); // Main application component
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import showcase page structure
    // Import and (re)export child components and directives


    function ShowcaseComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iqui-showcase-menu", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var group_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pages", group_r1.pages)("title", group_r1.title);
      }
    }

    var ShowcaseComponent = function ShowcaseComponent() {
      _classCallCheck(this, ShowcaseComponent);

      // Get pages structure and definitions
      this._pages = Object(_pages__WEBPACK_IMPORTED_MODULE_1__["getShowcasePages"])();
    };

    ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) {
      return new (t || ShowcaseComponent)();
    };

    ShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ShowcaseComponent,
      selectors: [["iqui-showcase"]],
      contentQueries: function ShowcaseComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _directives__WEBPACK_IMPORTED_MODULE_2__["ShowcasePagesDirective"], false, _directives__WEBPACK_IMPORTED_MODULE_2__["ShowcasePagesDirective"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._groups = _t);
        }
      },
      decls: 2,
      vars: 1,
      consts: [[1, "iqui-showcase-page-sidebar", "sidebar", "navbar-nav"], [4, "ngFor", "ngForOf"], [3, "pages", "title"]],
      template: function ShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowcaseComponent_ng_container_1_Template, 2, 2, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._groups);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_menu_index__WEBPACK_IMPORTED_MODULE_4__["ShowcaseMenuComponent"]],
      styles: ["[_nghost-%COMP%]   .iqui-showcase-page-sidebar[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 320px !important;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvX3Nob3djYXNlL2NvbXBvbmVudC9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFESiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL19zaG93Y2FzZS9jb21wb25lbnQvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gUGFnZSBNZW51XG4gIC5pcXVpLXNob3djYXNlLXBhZ2Utc2lkZWJhciB7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMzIwcHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-showcase',
          templateUrl: './index.html',
          styleUrls: ['./style.scss']
        }]
      }], function () {
        return [];
      }, {
        _groups: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_directives__WEBPACK_IMPORTED_MODULE_2__["ShowcasePagesDirective"], {
            read: _directives__WEBPACK_IMPORTED_MODULE_2__["ShowcasePagesDirective"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/_showcase/index.ts":
  /*!**********************************************!*\
    !*** ../iqui-ngx/src/lib/_showcase/index.ts ***!
    \**********************************************/

  /*! exports provided: ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent, getShowcasePages, ShowcaseModule */

  /***/
  function iquiNgxSrcLib_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function () {
      return ShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _components_functional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/functional */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component */
    "../iqui-ngx/src/lib/_showcase/component/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function () {
      return _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasePagesDirective", function () {
      return _component__WEBPACK_IMPORTED_MODULE_5__["ShowcasePagesDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseMenuComponent", function () {
      return _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseMenuComponent"];
    });
    /* harmony import */


    var _pages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages */
    "../iqui-ngx/src/lib/_showcase/pages.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getShowcasePages", function () {
      return _pages__WEBPACK_IMPORTED_MODULE_6__["getShowcasePages"];
    }); // Import dependencies
    // Import modules
    // Import components and (re)export components and required services

    /**
     * IQ UI NGX Elements' showcase module
     * Implements an embedded showcase application
     */


    var ShowcaseModule = function ShowcaseModule() {
      _classCallCheck(this, ShowcaseModule);
    };

    ShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShowcaseModule
    });
    ShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShowcaseModule_Factory(t) {
        return new (t || ShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _components_functional__WEBPACK_IMPORTED_MODULE_4__["FunctionalModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcaseModule, {
        declarations: [_component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcasePagesDirective"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseMenuComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _components_functional__WEBPACK_IMPORTED_MODULE_4__["FunctionalModule"]],
        exports: [// Export child components
        _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcasePagesDirective"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseMenuComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"], _components_functional__WEBPACK_IMPORTED_MODULE_4__["FunctionalModule"]],
          declarations: [_component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcasePagesDirective"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseMenuComponent"]],
          exports: [// Export child components
          _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseComponent"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcasePagesDirective"], _component__WEBPACK_IMPORTED_MODULE_5__["ShowcaseMenuComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/_showcase/pages.ts":
  /*!**********************************************!*\
    !*** ../iqui-ngx/src/lib/_showcase/pages.ts ***!
    \**********************************************/

  /*! exports provided: Page, getShowcasePages */

  /***/
  function iquiNgxSrcLib_showcasePagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getShowcasePages", function () {
      return getShowcasePages;
    });
    /* harmony import */


    var _components_functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../components/functional */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/functional/_showcase */
    "../iqui-ngx/src/lib/components/functional/_showcase.ts");
    /* harmony import */


    var _components_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../components/basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/basics/_showcase */
    "../iqui-ngx/src/lib/components/basics/_showcase.ts");
    /* harmony import */


    var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/form/_showcase */
    "../iqui-ngx/src/lib/components/form/_showcase.ts");
    /* harmony import */


    var _components_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/code/_showcase */
    "../iqui-ngx/src/lib/components/code/_showcase.ts");
    /* harmony import */


    var _components_showcasing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../components/showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/showcasing/_showcase */
    "../iqui-ngx/src/lib/components/showcasing/_showcase.ts");
    /* harmony import */


    var _services_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../services/routing */
    "../iqui-ngx/src/lib/services/routing/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"];
    });
    /* harmony import */


    var _services_routing_showcase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../services/routing/_showcase */
    "../iqui-ngx/src/lib/services/routing/_showcase.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../data */
    "../iqui-ngx/src/lib/data/index.ts");
    /* harmony import */


    var _data_showcase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../data/_showcase */
    "../iqui-ngx/src/lib/data/_showcase.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../pipes */
    "../iqui-ngx/src/lib/pipes/index.ts");
    /* harmony import */


    var _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../pipes/_showcase */
    "../iqui-ngx/src/lib/pipes/_showcase.ts"); // All navigate-able pages
    // ----------------------------------------------------------------------------
    // Import components dependencies
    // Import routing dependencies
    // Import data dependencies
    // Import pipe dependencies
    // (Re)export Page class
    // Compose pages structure


    var pages = [new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('controls', 'Controls', 'Components and Directives', null, [new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('primitives', 'Primitive controls', 'Primitive building blocks for building up other more complex components', null, [new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('functional', 'Functional', 'Directives and Components providing basic, reusable functionality', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["DeclareDirective"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["DeclareShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["Copy2ClipboardDirective"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["Copy2ClipboardShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["TooltipDirective"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["TooltipShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["DropdownDirective"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["DropdownShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["CollapseShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["ModalShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["ToastComponent"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["ToastShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__["BookmarkableDirective"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__["BookmarkableShowcaseComponent"])]), new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('form', 'Forms', 'Extension of HTML <form /> and related HTML child elements', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__["FormDirective"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["FormShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["InputShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["CheckboxShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__["RadioComponent"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["RadioShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__["SelectComponent"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["SelectShowcaseComponent"])])]), new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('composite', 'Composite controls', 'Composite controls, built up from primitives, implement complex functionality', null, [new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('basics', 'Basic controls', 'Simpler composite controls', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_basics__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__["ButtonShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_basics__WEBPACK_IMPORTED_MODULE_2__["DropdownButtonComponent"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__["DropdownButtonShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_basics__WEBPACK_IMPORTED_MODULE_2__["PhraseInputComponent"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__["PhraseInputShowcaseComponent"])])]), new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('code', 'Code', 'Components used for visualizing code and code syntax.', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_code__WEBPACK_IMPORTED_MODULE_6__["HighlightJsComponent"], _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__["HighlightJsShowcaseComponent"])]), new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('showcase', 'Showcasing', 'Components and services used for quickly building "showcase" apps.', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_components_showcasing__WEBPACK_IMPORTED_MODULE_8__["PlaygroundComponent"], _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__["PlaygroundShowcaseComponent"])])]), new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('pipes', 'Pipes', 'Pipes', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["FilterShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__["SortPipe"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["SortShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__["PaginatePipe"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PaginateShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["SliceShowcaseComponent"])]), new _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"]('data', 'Data Classes', 'Data classes', null, [_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"], _services_routing_showcase__WEBPACK_IMPORTED_MODULE_11__["PageServiceShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_data__WEBPACK_IMPORTED_MODULE_12__["Phrase"], _data_showcase__WEBPACK_IMPORTED_MODULE_13__["PhraseShowcaseComponent"]), _services_routing__WEBPACK_IMPORTED_MODULE_10__["Page"].fromClass(_data__WEBPACK_IMPORTED_MODULE_12__["Pagination"], _data_showcase__WEBPACK_IMPORTED_MODULE_13__["PaginationShowcaseComponent"])])];
    /**
     * Composes showcase pages structure and definitions
     */

    function getShowcasePages() {
      // Return pages structure
      return pages;
    }
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/_showcase.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/_showcase.ts ***!
    \**********************************************************/

  /*! exports provided: ButtonShowcaseComponent, DropdownButtonShowcaseComponent, PhraseInputShowcaseComponent, BasicsShowcaseModule */

  /***/
  function iquiNgxSrcLibComponentsBasics_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicsShowcaseModule", function () {
      return BasicsShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _button_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./button/_showcase */
    "../iqui-ngx/src/lib/components/basics/button/_showcase/index.ts");
    /* harmony import */


    var _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dropdown-button/_showcase */
    "../iqui-ngx/src/lib/components/basics/dropdown-button/_showcase/index.ts");
    /* harmony import */


    var _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./phrase-input/_showcase */
    "../iqui-ngx/src/lib/components/basics/phrase-input/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonShowcaseComponent", function () {
      return _button_showcase__WEBPACK_IMPORTED_MODULE_5__["ButtonShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonShowcaseComponent", function () {
      return _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputShowcaseComponent", function () {
      return _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_7__["PhraseInputShowcaseComponent"];
    }); // Basics Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components
    // IQ UI NGX Elements' Basic elements module


    var BasicsShowcaseModule = function BasicsShowcaseModule() {
      _classCallCheck(this, BasicsShowcaseModule);
    };

    BasicsShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicsShowcaseModule
    });
    BasicsShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicsShowcaseModule_Factory(t) {
        return new (t || BasicsShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]], // Export dependency modules
      ___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicsShowcaseModule, {
        declarations: [_button_showcase__WEBPACK_IMPORTED_MODULE_5__["ButtonShowcaseComponent"], _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonShowcaseComponent"], _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_7__["PhraseInputShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]],
        exports: [// Export dependency modules
        ___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"], // Export child components
        _button_showcase__WEBPACK_IMPORTED_MODULE_5__["ButtonShowcaseComponent"], _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonShowcaseComponent"], _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_7__["PhraseInputShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicsShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]],
          declarations: [_button_showcase__WEBPACK_IMPORTED_MODULE_5__["ButtonShowcaseComponent"], _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonShowcaseComponent"], _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_7__["PhraseInputShowcaseComponent"]],
          exports: [// Export dependency modules
          ___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"], // Export child components
          _button_showcase__WEBPACK_IMPORTED_MODULE_5__["ButtonShowcaseComponent"], _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonShowcaseComponent"], _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_7__["PhraseInputShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/button/_showcase/index.ts":
  /*!***********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/button/_showcase/index.ts ***!
    \***********************************************************************/

  /*! exports provided: ButtonShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsBasicsButton_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonShowcaseComponent", function () {
      return ButtonShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/basics/button/index.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Button component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var ButtonShowcaseComponent = function ButtonShowcaseComponent() {
      _classCallCheck(this, ButtonShowcaseComponent);

      var _a, _b; // Expose modules needed to render syntax


      this.modules = [___WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_4__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_5__["CodeModule"]]; // Playground context

      this.context = (_a = function _a() {
        _classCallCheck(this, _a);
      }, // tslint:disable: variable-name
      _a.ContentHtml = '<i>Button content</i>', _a.Disabled = [false, true], _a.Class = '', _a.NgClass = {}, _a.Size = [undefined].concat(_toConsumableArray(Object.values(___WEBPACK_IMPORTED_MODULE_1__["ButtonComponentSize"]))), _a.Theme = [undefined].concat(_toConsumableArray(Object.values(___WEBPACK_IMPORTED_MODULE_1__["ButtonComponentTheme"]))), _a.Href = '', _a.Target = ['_blank', '_self', ''], _a); // Playground form context

      this.contextForm = (_b = function _b() {
        _classCallCheck(this, _b);
      }, // tslint:disable: variable-name
      _b.FormDisabled = [undefined, true, false], _b.FormSize = [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["BootstrapSize"]))), _b.FormValid = [undefined, true, false], _b);
    };

    ButtonShowcaseComponent.ɵfac = function ButtonShowcaseComponent_Factory(t) {
      return new (t || ButtonShowcaseComponent)();
    };

    ButtonShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 6,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function ButtonShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Button Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a button-styled button or anchor HTML element. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-button\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\"\n      [size]=\"    context.Size\"\n      [theme]=\"   context.Theme\"\n      [href]=\"    context.Href\"\n      [target]=\"  context.Target\">\n\n      <!-- HTML content -->\n      <div [innerHTML]=\"context.ContentHtml\"></div>\n\n    </iqui-button>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    <form iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-button [theme]=\"'secondary'\">\n        <i>Button content</i>\n      </iqui-button>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_6__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_8__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_6__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvYmFzaWNzL2J1dHRvbi9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/button/index.ts":
  /*!*************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/button/index.ts ***!
    \*************************************************************/

  /*! exports provided: ButtonComponentTheme, ButtonComponentSize, ButtonComponent */

  /***/
  function iquiNgxSrcLibComponentsBasicsButtonIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentTheme", function () {
      return ButtonComponentTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentSize", function () {
      return ButtonComponentSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _form_directives_button_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../form/directives/button/index */
    "../iqui-ngx/src/lib/components/form/directives/button/index.ts"); // Button component
    // ----------------------------------------------------------------------------
    // Import dependencies


    function ButtonComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    }

    function ButtonComponent_button_2_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ButtonComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_button_2_ng_container_2_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2._composedClassValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiFormParent", ctx_r2._iquiFormParent)("ngClass", ctx_r2.ngClass);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r2.disabled || null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
      }
    }

    function ButtonComponent_a_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function ButtonComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_a_3_ng_container_2_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3._composedClassValue);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.ngClass)("href", ctx_r3.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("target", ctx_r3.target);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r3.disabled || null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r0);
      }
    }

    var _c0 = ["*"]; // Define and export enums and types

    /*
     * Button's bootstrap theme colors type
     */
    // tslint:disable-next-line: variable-name

    var ButtonComponentTheme = Object.assign(Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_2__["BootstrapTheme"]), {
      LINK: 'link'
    });
    /*
     * Button's bootstrap theme colors type
     */
    // tslint:disable-next-line: variable-name

    var ButtonComponentSize = Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_2__["BootstrapSize"]);
    /**
     * Button, renders a button (or link) control
     *
     * Usage:
     *
     *  <iqui-button\
     *    [ disabled  = "true|false" ]\
     *    [ class     = "..." ]\
     *    [ ngClass   = "{...}" ]\
     *    [ size      = "sm|lg" ]\
     *    [ theme     = "primary|secondary|success|warning|danger|info|light|dark|link" ]\
     *    [ href      = "https://example.com" ]\
     *    [ target    = "_blank|_self" ]\
     *  >\
     *    Button content\
     *  </iqui-button>
     *
     */

    var ButtonComponent = /*#__PURE__*/function (_form__WEBPACK_IMPORT) {
      _inherits(ButtonComponent, _form__WEBPACK_IMPORT);

      var _super = _createSuper(ButtonComponent);

      function ButtonComponent() {
        var _this2;

        _classCallCheck(this, ButtonComponent);

        _this2 = _super.apply(this, arguments);
        /**
         * [disabled] binding
         */

        _this2.disabled = false;
        /**
         * Bootstrap theme color to be used by the component
         */

        _this2.theme = 'secondary';
        /**
         * Bootstrap theme size to be used by the component
         */

        _this2.size = null;
        /**
         * Anchor Hyperlink URL (if set, will style as a link by default)
         */

        _this2.href = null;
        /**
         * Anchor Hyperlink URL target (only makes sense to use along side [href])
         */

        _this2.target = '_self';
        return _this2;
      }

      _createClass(ButtonComponent, [{
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as button (.btn)
          'btn', // Mark size (.btn-sm)
          this.size ? 'btn-' + this.size : null, // Mark theme color (.btn-primary, .btn-link, etc ...)
          'btn-' + (this.theme || (!this.href ? 'secondary' : 'link')), // Mark as disabled, if disabled (.disabled)
          this.disabled ? 'disabled' : null, // Pass-through host class
          this["class"] || null].join(' ');
        }
      }]);

      return ButtonComponent;
    }(_form__WEBPACK_IMPORTED_MODULE_1__["UsesFormElementDirectives"]);

    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
      return ɵButtonComponent_BaseFactory(t || ButtonComponent);
    };

    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ButtonComponent,
      selectors: [["iqui-button"]],
      hostVars: 2,
      hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        theme: "theme",
        size: "size",
        href: "href",
        target: "target"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 2,
      consts: [["content", ""], [3, "iquiFormParent", "ngClass", "class", 4, "ngIf"], [3, "ngClass", "class", "href", "target", 4, "ngIf"], [3, "iquiFormParent", "ngClass"], [1, "iqui-button-content", "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], [3, "ngClass", "href", "target"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ButtonComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_button_2_Template, 3, 6, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ButtonComponent_a_3_Template, 3, 7, "a", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.href);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.href);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _form_directives_button_index__WEBPACK_IMPORTED_MODULE_4__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   .btn.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_nghost-%COMP%]   .iqui-button-content[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9iYXNpY3MvYnV0dG9uL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2Jhc2ljcy9idXR0b24vc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC5idG4uZGlzYWJsZWQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5pcXVpLWJ1dHRvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbiJdfQ== */"]
    });

    var ɵButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](ButtonComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-button',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        href: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/dropdown-button/_showcase/index.ts":
  /*!********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/dropdown-button/_showcase/index.ts ***!
    \********************************************************************************/

  /*! exports provided: DropdownButtonShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsBasicsDropdownButton_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonShowcaseComponent", function () {
      return DropdownButtonShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/basics/dropdown-button/index.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts"); // Drop-down Button component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules


    var _c0 = function _c0() {
      return ["scss"];
    }; // Showcase component


    var DropdownButtonShowcaseComponent = function DropdownButtonShowcaseComponent() {
      _classCallCheck(this, DropdownButtonShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_4__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_5__["CodeModule"]]; // Playground context

      this.context = {
        ContentHtml: '<i>Button content</i>',
        Disabled: [false, true],
        Class: '',
        NgClass: {},
        Size: [undefined].concat(_toConsumableArray(Object.values(___WEBPACK_IMPORTED_MODULE_1__["DropdownButtonComponentSize"]))),
        Theme: [undefined].concat(_toConsumableArray(Object.values(___WEBPACK_IMPORTED_MODULE_1__["DropdownButtonComponentTheme"]))),
        Position: Object.values(___WEBPACK_IMPORTED_MODULE_1__["DropdownButtonComponentRelativePositioning"]),
        ShowOnFocus: [true, false],
        ShowOnHover: [false, true],
        StayInViewport: [false, true],
        ToggleOnButtonClick: [true, false],
        OnSelected: function OnSelected(e) {
          console.log(e);
        }
      }; // Playground form context

      this.contextForm = {
        FormDisabled: [undefined, true, false],
        FormSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["BootstrapSize"]))),
        FormValid: [undefined, true, false]
      };
    };

    DropdownButtonShowcaseComponent.ɵfac = function DropdownButtonShowcaseComponent_Factory(t) {
      return new (t || DropdownButtonShowcaseComponent)();
    };

    DropdownButtonShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownButtonShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 16,
      vars: 8,
      consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]],
      template: function DropdownButtonShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Drop-down Button Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a button-styled drop-down. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Styling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "iqui-highlightjs", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "        // Drop-down button down arrow styling\n        iqui-dropdown-button iqui-button .iqui-button-content {\n          position: relative;\n          padding-right: 16px;\n          &::after {\n            content: \"\u25BE\";\n            position: absolute;\n            top: 0;\n            right: 0;\n          }\n        }\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "iqui-playground", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    <iqui-dropdown-button\n      [disabled]=\"            context.Disabled\"\n      [class]=\"               context.Class\"\n      [ngClass]=\"             context.NgClass\"\n      [size]=\"                context.Size\"\n      [theme]=\"               context.Theme\"\n      [position]=\"            context.Position\"\n      [showOnFocus]=\"         context.ShowOnFocus\"\n      [showOnHover]=\"         context.ShowOnHover\"\n      [stayInViewport]=\"      context.StayInViewport\"\n      [toggleOnButtonClick]=\" context.ToggleOnButtonClick\">\n\n      <!-- Example header content using exposed close() method -->\n      <ng-container *iquiDropdownHeader=\"let close\">\n        <span class=\"dropdown-header\">Header content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n        <div class=\"dropdown-divider\"></div>\n      </ng-container>\n\n      <!-- Example body content using exposed close() method -->\n      <ng-container *iquiDropdownBody=\"let close\">\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #1</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #2</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #3</a>\n      </ng-container>\n\n      <!-- Example footer content using exposed close() method -->\n      <ng-container *iquiDropdownFooter=\"let close\">\n        <div class=\"dropdown-divider\"></div>\n        <span class=\"dropdown-header\">Footer content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n      </ng-container>\n\n      <!-- HTML content -->\n      <div [innerHTML]=\"context.ContentHtml\"></div>\n\n    </iqui-dropdown-button>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "iqui-playground", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    <form iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-dropdown-button [theme]=\"'secondary'\">\n        Button content\n        <ng-container *iquiDropdownHeader> Header content </ng-container>\n        <ng-container *iquiDropdownBody> Body </ng-container>\n        <ng-container *iquiDropdownFooter> Footer content </ng-container>\n      </iqui-dropdown-button>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
        }
      },
      directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_8__["PlaygroundTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_8__["PlaygroundComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvYmFzaWNzL2Ryb3Bkb3duLWJ1dHRvbi9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownButtonShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/dropdown-button/index.ts":
  /*!**********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/dropdown-button/index.ts ***!
    \**********************************************************************/

  /*! exports provided: DropdownButtonComponentTheme, DropdownButtonComponentSize, DropdownButtonComponentRelativePositioning, DropdownButtonComponent */

  /***/
  function iquiNgxSrcLibComponentsBasicsDropdownButtonIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentTheme", function () {
      return DropdownButtonComponentTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentSize", function () {
      return DropdownButtonComponentSize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentRelativePositioning", function () {
      return DropdownButtonComponentRelativePositioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponent", function () {
      return DropdownButtonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../button */
    "../iqui-ngx/src/lib/components/basics/button/index.ts");
    /* harmony import */


    var _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../functional/dropdown */
    "../iqui-ngx/src/lib/components/functional/dropdown/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Drop-down Button component
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = ["dropdown"];

    function DropdownButtonComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        $implicit: a0
      };
    };

    function DropdownButtonComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownButtonComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var close_r4 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.header == null ? null : ctx_r1.header.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, close_r4));
      }
    }

    function DropdownButtonComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function DropdownButtonComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownButtonComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var close_r6 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.body == null ? null : ctx_r2.body.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, close_r6));
      }
    }

    function DropdownButtonComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function DropdownButtonComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownButtonComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var close_r8 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.footer == null ? null : ctx_r3.footer.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, close_r8));
      }
    }

    var _c2 = ["*"]; // Define and export enums and types

    /*
     * Dropdown button's bootstrap theme colors type
     */
    // tslint:disable-next-line: variable-name

    var DropdownButtonComponentTheme = Object.assign({}, _button__WEBPACK_IMPORTED_MODULE_2__["ButtonComponentTheme"]);
    /*
     * Dropdown button's bootstrap theme colors type
     */
    // tslint:disable-next-line: variable-name

    var DropdownButtonComponentSize = Object.assign({}, _button__WEBPACK_IMPORTED_MODULE_2__["ButtonComponentSize"]);
    /*
     * Dropdown button's preferred positions enum
     */
    // tslint:disable-next-line: variable-name

    var DropdownButtonComponentRelativePositioning = Object.assign({}, _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownRelativePositioning"]);
    /**
     * Drop-down button, renders a button (or link) control with a drop-down
     *
     * Usage:
     *
     *  <iqui-dropdown-button\
     *    [ disabled            = "true|false" ]\
     *    [ ngClass             = "{...}" ]\
     *    [ class               = "..." ]\
     *    [ size                = "sm|lg" ]\
     *    [ theme               = "primary|secondary|success|warning|danger|info|light|dark|link" ]\
     *    [ position            = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|
     *                             left|left center|left top|left bottom|top|top center|top left|top right ]\
     *    [ visible             = "true|false" ]\
     *    [ showOnFocus         = "true|false" ]\
     *    [ showOnHover         = "true|false" ]\
     *    [ stayInViewport      = "true|false" ]\
     *    [ toggleOnButtonClick = "true|false" ]\
     *  >\
     *    Button content\
     *    \
     *    <ng-container *iqDropdownHeader>\
     *     Dropdown header\
     *    </ng-container>\
     *    <ng-container *iqDropdownBody>\
     *     Dropdown content\
     *    </ng-container>\
     *    <ng-container *iqDropdownFooter>\
     *     Dropdown footer\
     *    </ng-container>\
     *    \
     *  </iqui-dropdown-button>
     *
     */

    var DropdownButtonComponent = /*#__PURE__*/function (_form__WEBPACK_IMPORT2) {
      _inherits(DropdownButtonComponent, _form__WEBPACK_IMPORT2);

      var _super2 = _createSuper(DropdownButtonComponent);

      function DropdownButtonComponent() {
        var _this3;

        _classCallCheck(this, DropdownButtonComponent);

        _this3 = _super2.apply(this, arguments);
        /**
         * [disabled] binding
         */

        _this3.disabled = false;
        /**
         * Bootstrap theme color to be used by the component
         */

        _this3.theme = 'secondary';
        /**
         * Bootstrap theme size to be used by the component
         */

        _this3.size = null;
        /**
         * Drop-down preferred position
         */

        _this3.position = 'bottom';
        /**
         * If drop-down should be displayed when parent control is focused
         */

        _this3.showOnFocus = true;
        /**
         * If drop-down should be displayed when parent control is hovered over
         */

        _this3.showOnHover = false;
        /**
         * If drop-down should detach from the parent control if necessary and stay inside the viewport
         */

        _this3.stayInViewport = false;
        /**
         * If drop-down should toggle on button click after then button has been focused
         */

        _this3.toggleOnButtonClick = true;
        return _this3;
      }

      _createClass(DropdownButtonComponent, [{
        key: "_onButtonClicked",

        /**
         * Toggle (if required) drop-down on button clicked
         */
        value: function _onButtonClicked() {
          if (this.toggleOnButtonClick) {
            this._dropdownRef.toggle();
          }
        }
      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }]);

      return DropdownButtonComponent;
    }(_form__WEBPACK_IMPORTED_MODULE_1__["UsesFormElementDirectives"]);

    DropdownButtonComponent.ɵfac = function DropdownButtonComponent_Factory(t) {
      return ɵDropdownButtonComponent_BaseFactory(t || DropdownButtonComponent);
    };

    DropdownButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownButtonComponent,
      selectors: [["iqui-dropdown-button"]],
      contentQueries: function DropdownButtonComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownHeaderDirective"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownBodyDirective"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownFooterDirective"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.body = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        }
      },
      viewQuery: function DropdownButtonComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._dropdownRef = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function DropdownButtonComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        theme: "theme",
        size: "size",
        position: "position",
        showOnFocus: "showOnFocus",
        showOnHover: "showOnHover",
        stayInViewport: "stayInViewport",
        toggleOnButtonClick: "toggleOnButtonClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c2,
      decls: 6,
      vars: 11,
      consts: [["iquiDropdown", "", 3, "iquiFormParent", "disabled", "ngClass", "theme", "size", "iquiDropdownPosition", "iquiDropdownShowOnFocus", "iquiDropdownShowOnHover", "iquiDropdownStayInViewport", "click"], ["dropdown", ""], [4, "iquiDropdownHeader"], [4, "iquiDropdownBody"], [4, "iquiDropdownFooter"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
      template: function DropdownButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "iqui-button", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownButtonComponent_Template_iqui_button_click_0_listener() {
            return ctx._onButtonClicked();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropdownButtonComponent_ng_container_3_Template, 2, 4, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DropdownButtonComponent_ng_container_4_Template, 2, 4, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropdownButtonComponent_ng_container_5_Template, 2, 4, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx["class"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("disabled", ctx.disabled)("ngClass", ctx.ngClass)("theme", ctx.theme)("size", ctx.size)("iquiDropdownPosition", ctx.position)("iquiDropdownShowOnFocus", ctx.showOnFocus)("iquiDropdownShowOnHover", ctx.showOnHover)("iquiDropdownStayInViewport", ctx.stayInViewport);
        }
      },
      directives: [_button__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownHeaderDirective"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownBodyDirective"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownFooterDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   iqui-button[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9iYXNpY3MvZHJvcGRvd24tYnV0dG9uL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2Jhc2ljcy9kcm9wZG93bi1idXR0b24vc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIGlxdWktYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIl19 */"]
    });

    var ɵDropdownButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DropdownButtonComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-dropdown-button',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        theme: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stayInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleOnButtonClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownHeaderDirective"]]
        }],
        body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownBodyDirective"]]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [_functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownFooterDirective"]]
        }],
        _dropdownRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['dropdown', {
            read: _functional_dropdown__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"],
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/index.ts":
  /*!******************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/index.ts ***!
    \******************************************************/

  /*! exports provided: ButtonComponent, ButtonComponentTheme, ButtonComponentSize, DropdownButtonComponent, DropdownButtonComponentTheme, DropdownButtonComponentSize, DropdownButtonComponentRelativePositioning, PhraseInputComponent, BasicsModule */

  /***/
  function iquiNgxSrcLibComponentsBasicsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicsModule", function () {
      return BasicsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _functional__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../functional */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../functional/dropdown */
    "../iqui-ngx/src/lib/components/functional/dropdown/index.ts");
    /* harmony import */


    var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./button */
    "../iqui-ngx/src/lib/components/basics/button/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return _button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentTheme", function () {
      return _button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponentTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentSize", function () {
      return _button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponentSize"];
    });
    /* harmony import */


    var _dropdown_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dropdown-button */
    "../iqui-ngx/src/lib/components/basics/dropdown-button/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponent", function () {
      return _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentTheme", function () {
      return _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponentTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentSize", function () {
      return _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponentSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentRelativePositioning", function () {
      return _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponentRelativePositioning"];
    });
    /* harmony import */


    var _phrase_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./phrase-input */
    "../iqui-ngx/src/lib/components/basics/phrase-input/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputComponent", function () {
      return _phrase_input__WEBPACK_IMPORTED_MODULE_7__["PhraseInputComponent"];
    }); // Import dependencies
    // Import dependency modules
    // Import components
    // Import components and (re)export components

    /**
     * IQ UI NGX Elements' Basic elements module
     * Implements components that are basic building blocks of any application or more-complex component
     */


    var BasicsModule = function BasicsModule() {
      _classCallCheck(this, BasicsModule);
    };

    BasicsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicsModule
    });
    BasicsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicsModule_Factory(t) {
        return new (t || BasicsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _functional__WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]], // Export dependency modules
      _functional__WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicsModule, {
        declarations: [_button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponent"], _phrase_input__WEBPACK_IMPORTED_MODULE_7__["PhraseInputComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _functional__WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]],
        exports: [// Export dependency modules
        _functional__WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"], // Export child components
        _button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponent"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownHeaderDirective"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownBodyDirective"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownFooterDirective"], _phrase_input__WEBPACK_IMPORTED_MODULE_7__["PhraseInputComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _functional__WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]],
          declarations: [_button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponent"], _phrase_input__WEBPACK_IMPORTED_MODULE_7__["PhraseInputComponent"]],
          exports: [// Export dependency modules
          _functional__WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"], // Export child components
          _button__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _dropdown_button__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonComponent"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownHeaderDirective"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownBodyDirective"], _functional_dropdown__WEBPACK_IMPORTED_MODULE_4__["DropdownFooterDirective"], _phrase_input__WEBPACK_IMPORTED_MODULE_7__["PhraseInputComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/phrase-input/_showcase/index.ts":
  /*!*****************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/phrase-input/_showcase/index.ts ***!
    \*****************************************************************************/

  /*! exports provided: PhraseInputShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsBasicsPhraseInput_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputShowcaseComponent", function () {
      return PhraseInputShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../data */
    "../iqui-ngx/src/lib/data/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Phrase input component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var PhraseInputShowcaseComponent = function PhraseInputShowcaseComponent() {
      _classCallCheck(this, PhraseInputShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_2__["BasicsModule"]]; // Playground context

      this.context = {
        Phrase: new _data__WEBPACK_IMPORTED_MODULE_1__["Phrase"](),
        Placeholder: 'Enter phrase here'
      };
    };

    PhraseInputShowcaseComponent.ɵfac = function PhraseInputShowcaseComponent_Factory(t) {
      return new (t || PhraseInputShowcaseComponent)();
    };

    PhraseInputShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhraseInputShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function PhraseInputShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phrase input Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nAllows editing of a searchable/filterable string expression or regular expression ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-phrase-input\n      [(phrase)]=\"context.Phrase\"\n      [placeholder]=\"context.Placeholder\"\n    >\n      <ng-container iqui-phrase-input-button-clear>  [x] </ng-container>\n      <ng-container iqui-phrase-input-button-case>   [Aa] </ng-container>\n      <ng-container iqui-phrase-input-button-regexp> [.*] </ng-container>\n    </iqui-phrase-input>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvYmFzaWNzL3BocmFzZS1pbnB1dC9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhraseInputShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/basics/phrase-input/index.ts":
  /*!*******************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/basics/phrase-input/index.ts ***!
    \*******************************************************************/

  /*! exports provided: PhraseInputComponent */

  /***/
  function iquiNgxSrcLibComponentsBasicsPhraseInputIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputComponent", function () {
      return PhraseInputComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../data */
    "../iqui-ngx/src/lib/data/index.ts");
    /* harmony import */


    var _form_directives_input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../form/directives/input/index */
    "../iqui-ngx/src/lib/components/form/directives/input/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Phrase input component
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import data


    function PhraseInputComponent_a_2_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[x]");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
    }

    function PhraseInputComponent_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhraseInputComponent_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          return ctx_r7._clearPhrase();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", null, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PhraseInputComponent_a_2_ng_container_4_Template, 2, 0, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r5.childNodes.length);
      }
    }

    function PhraseInputComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[Aa]");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
    }

    function PhraseInputComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[.*]");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }
    }

    var _c0 = [[["", "iqui-phrase-input-button-case", ""]], [["", "iqui-phrase-input-button-regexp", ""]], [["", "iqui-phrase-input-button-clear", ""]]];
    var _c1 = ["[iqui-phrase-input-button-case]", "[iqui-phrase-input-button-regexp]", "[iqui-phrase-input-button-clear]"];
    /**
     * Phrase input component
     *
     * Usage:
     *
     *  <iqui-phrase-input
     *    [presets]="['search', /my.*+search/]"
     *    (updated)="onUpdated($event)"
     *  >
     *  </iqui-phrase-input>
     *
     */

    var PhraseInputComponent = /*#__PURE__*/function () {
      function PhraseInputComponent() {
        var _this4 = this;

        _classCallCheck(this, PhraseInputComponent);

        /**
         * Internal, pre-debounced, change event
         */
        this._phraseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Two-way bound phrase being edited
         */

        this.phrase = new _data__WEBPACK_IMPORTED_MODULE_3__["Phrase"]();
        this.phraseChange = this._phraseChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(_this4.debounce);
        }));
        /**
         * Change event debounce interval (in [ms])
         */

        this.debounce = 400;
        /**
         * Internal phrase being edited
         */

        this._phrase = new _data__WEBPACK_IMPORTED_MODULE_3__["Phrase"]();
      }

      _createClass(PhraseInputComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Ingest set phrase
          if (this.phrase && this.phrase instanceof _data__WEBPACK_IMPORTED_MODULE_3__["Phrase"]) {
            // Check if phrases have different values
            if (this._phrase.toString() !== this.phrase.toString()) {
              // Update phrase
              this._phrase = this.phrase;
            }
          } else if (this.phrase && typeof this.phrase === 'string') {
            // Update phrase
            this._phrase = _data__WEBPACK_IMPORTED_MODULE_3__["Phrase"].parse(this.phrase);
          }
        }
        /**
         * Updates a phrase after being edited
         * @param value Edited value
         */

      }, {
        key: "_valueChanged",
        value: function _valueChanged(value) {
          // Update value if value provided
          if (value !== undefined) {
            this._phrase.value = value;
          } // Trigger update


          this._triggerUpdate();
        }
        /**
         * Clears editing phrase
         */

      }, {
        key: "_clearPhrase",
        value: function _clearPhrase() {
          // Clear phrase
          this._phrase.value = ''; // Trigger update

          this._triggerUpdate();
        }
        /**
         * Toggles phrase's case sensitivity
         */

      }, {
        key: "_togglePhraseCaseSensitivity",
        value: function _togglePhraseCaseSensitivity() {
          // Toggle case sensitivity
          this._phrase.isCaseSensitive = !this._phrase.isCaseSensitive; // Trigger update

          this._triggerUpdate();
        }
        /**
         * Toggles ig phrase is a reg-exp
         */

      }, {
        key: "_togglePhraseRegExp",
        value: function _togglePhraseRegExp() {
          // Toggle reg-exp
          this._phrase.isRegExp = !this._phrase.isRegExp; // Trigger update

          this._triggerUpdate();
        }
        /**
         * Triggers phrase update event
         */

      }, {
        key: "_triggerUpdate",
        value: function _triggerUpdate() {
          // Trigger update event
          if (this.phrase && this.phrase instanceof _data__WEBPACK_IMPORTED_MODULE_3__["Phrase"]) {
            this._phraseChange.emit(_data__WEBPACK_IMPORTED_MODULE_3__["Phrase"].clone(this._phrase));
          } else if (this.phrase && typeof this.phrase === 'string') {
            this._phraseChange.emit(_data__WEBPACK_IMPORTED_MODULE_3__["Phrase"].stringify(this._phrase));
          }
        }
      }]);

      return PhraseInputComponent;
    }();

    PhraseInputComponent.ɵfac = function PhraseInputComponent_Factory(t) {
      return new (t || PhraseInputComponent)();
    };

    PhraseInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: PhraseInputComponent,
      selectors: [["iqui-phrase-input"]],
      inputs: {
        phrase: "phrase",
        debounce: "debounce",
        placeholder: "placeholder",
        presets: "presets"
      },
      outputs: {
        phraseChange: "phraseChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 13,
      vars: 11,
      consts: [[1, "input-group", "actions"], ["type", "text", 3, "placeholder", "value", "input"], ["href", "javascript:void(0)", "class", "btn border border-gray clear-filter", "title", "Clear", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Match Case", 3, "click"], ["caseButtonContent", ""], [4, "ngIf"], ["href", "javascript:void(0)", "title", "Use Regular Expression", 3, "click"], ["regexpButtonContent", ""], ["href", "javascript:void(0)", "title", "Clear", 1, "btn", "border", "border-gray", "clear-filter", 3, "click"], ["clearButtonContent", ""]],
      template: function PhraseInputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PhraseInputComponent_Template_input_input_1_listener($event) {
            return ctx._valueChanged($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PhraseInputComponent_a_2_Template, 5, 1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhraseInputComponent_Template_a_click_3_listener() {
            return ctx._togglePhraseCaseSensitivity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PhraseInputComponent_ng_container_7_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhraseInputComponent_Template_a_click_8_listener() {
            return ctx._togglePhraseRegExp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PhraseInputComponent_ng_container_12_Template, 2, 0, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("form-control");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("placeholder", ctx.placeholder || "")("value", ctx._phrase.value || "");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx._phrase.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn border border-gray toggle-case" + (ctx._phrase.isCaseSensitive ? " selected" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r1.childNodes.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("btn border border-gray toggle-regexp" + (ctx._phrase.isRegExp ? " selected" : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r3.childNodes.length);
        }
      },
      directives: [_form_directives_input_index__WEBPACK_IMPORTED_MODULE_4__["InputDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvYmFzaWNzL3BocmFzZS1pbnB1dC9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PhraseInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'iqui-phrase-input',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        phrase: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        phraseChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        presets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/code/_showcase.ts":
  /*!********************************************************!*\
    !*** ../iqui-ngx/src/lib/components/code/_showcase.ts ***!
    \********************************************************/

  /*! exports provided: HighlightJsShowcaseComponent, CodeShowcaseModule */

  /***/
  function iquiNgxSrcLibComponentsCode_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeShowcaseModule", function () {
      return CodeShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./highlight-js/_showcase */
    "../iqui-ngx/src/lib/components/code/highlight-js/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsShowcaseComponent", function () {
      return _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_4__["HighlightJsShowcaseComponent"];
    }); // Code/Syntax utilities Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components and (re)export components
    // IQ UI NGX Elements' Code/Syntax module


    var CodeShowcaseModule = function CodeShowcaseModule() {
      _classCallCheck(this, CodeShowcaseModule);
    };

    CodeShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CodeShowcaseModule
    });
    CodeShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CodeShowcaseModule_Factory(t) {
        return new (t || CodeShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ___WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_3__["ShowcasingModule"]], // Export dependency modules
      ___WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_3__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeShowcaseModule, {
        declarations: [_highlight_js_showcase__WEBPACK_IMPORTED_MODULE_4__["HighlightJsShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ___WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_3__["ShowcasingModule"]],
        exports: [// Export dependency modules
        ___WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_3__["ShowcasingModule"], // Export child components
        _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_4__["HighlightJsShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ___WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_3__["ShowcasingModule"]],
          declarations: [_highlight_js_showcase__WEBPACK_IMPORTED_MODULE_4__["HighlightJsShowcaseComponent"]],
          exports: [// Export dependency modules
          ___WEBPACK_IMPORTED_MODULE_2__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_3__["ShowcasingModule"], // Export child components
          _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_4__["HighlightJsShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/code/highlight-js/_showcase/index.ts":
  /*!***************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/code/highlight-js/_showcase/index.ts ***!
    \***************************************************************************/

  /*! exports provided: HighlightJsShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsCodeHighlightJs_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsShowcaseComponent", function () {
      return HighlightJsShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../data */
    "../iqui-ngx/src/lib/data/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! highlight.js/lib/languages/javascript */
    "../../node_modules/highlight.js/lib/languages/javascript.js");
    /* harmony import */


    var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! highlight.js/lib/languages/typescript */
    "../../node_modules/highlight.js/lib/languages/typescript.js");
    /* harmony import */


    var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! highlight.js/lib/languages/xml */
    "../../node_modules/highlight.js/lib/languages/xml.js");
    /* harmony import */


    var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! highlight.js/lib/languages/css */
    "../../node_modules/highlight.js/lib/languages/css.js");
    /* harmony import */


    var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! highlight.js/lib/languages/scss */
    "../../node_modules/highlight.js/lib/languages/scss.js");
    /* harmony import */


    var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts"); // Button component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Register highlight.js languages


    Object(___WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_5___default.a);
    Object(___WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_6___default.a);
    Object(___WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('xml', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_7___default.a);
    Object(___WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('css', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_8___default.a);
    Object(___WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('scss', highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9___default.a); // Showcase component

    var HighlightJsShowcaseComponent = function HighlightJsShowcaseComponent() {
      _classCallCheck(this, HighlightJsShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [_basics__WEBPACK_IMPORTED_MODULE_4__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_3__["CodeModule"]]; // Playground context

      this.contextBase = {
        Disabled: [false, true],
        Class: '',
        NgClass: {},
        Syntax: "<div> Hello world! </div>\n<div> How you doin'?!?! </div>",
        Language: ['xml', 'css', 'javascript', undefined],
        Wrap: [true, false],
        Trim: [true, false],
        Highlight: [true, false],
        LineNumbers: [true, false]
      }; // Playground context

      this.context = Object.assign(Object.assign({}, this.contextBase), {
        Filter: ''
      }); // Playground context

      this.contextWithPhrase = Object.assign(Object.assign({}, this.contextBase), {
        FilterPhrase: new _data__WEBPACK_IMPORTED_MODULE_2__["Phrase"]()
      });
    };

    HighlightJsShowcaseComponent.ɵfac = function HighlightJsShowcaseComponent_Factory(t) {
      return new (t || HighlightJsShowcaseComponent)();
    };

    HighlightJsShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HighlightJsShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 12,
      vars: 6,
      consts: [["href", "https://highlightjs.org/", "target", "_blank"], [1, "mt-5", 3, "title", "modules", "context"]],
      template: function HighlightJsShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code HighlightJS Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nHighlights language syntax using 3rd party ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "highlight.js");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " library. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "iqui-playground", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    <iqui-highlightjs\n      [disabled]=\"    context.Disabled\"\n      [class]=\"       context.Class\"\n      [ngClass]=\"     context.NgClass\"\n      [syntax]=\"      context.Syntax\"\n      [languages]=\"   [context.Language]\"\n      [highlight]=\"   context.Highlight\"\n      [filter]=\"      context.Filter\"\n      [wrap]=\"        context.Wrap\"\n      [trim]=\"        context.Trim\"\n      [lineNumbers]=\" context.LineNumbers\">\n\n      <ng-container *iquiHighlightJsInjectedTop> HEADER </ng-container>\n      <ng-container *iquiHighlightJsInjectedBottom> FOOTER </ng-container>\n\n    </iqui-highlightjs>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "iqui-playground", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    <iqui-highlightjs\n      [disabled]=\"    context.Disabled\"\n      [class]=\"       context.Class\"\n      [ngClass]=\"     context.NgClass\"\n      [syntax]=\"      context.Syntax\"\n      [languages]=\"   [context.Language]\"\n      [highlight]=\"   context.Highlight\"\n      [filter]=\"      context.FilterPhrase\"\n      [wrap]=\"        context.Wrap\"\n      [trim]=\"        context.Trim\"\n      [lineNumbers]=\" context.LineNumbers\">\n\n      <ng-container *iquiHighlightJsInjectedTop>\n        <iqui-phrase-input [(phrase)]=\"context.FilterPhrase\" [presets]=\"['/Aaa/', '/Bbb/i', '/Ccc/']\"></iqui-phrase-input>\n      </ng-container>\n      <ng-container *iquiHighlightJsInjectedBottom>\n        Filtering by: {{ (context.FilterPhrase).toString() }}\n      </ng-container>\n\n    </iqui-highlightjs>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <iqui-phrase-input />")("modules", ctx.modules)("context", ctx.contextWithPhrase);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_10__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_11__["TextareaDirective"], ___WEBPACK_IMPORTED_MODULE_1__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_10__["PlaygroundTextareaDirective"]],
      styles: ["iqui-phrase-input a.selected {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9jb2RlL2hpZ2hsaWdodC1qcy9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLDBCQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2NvZGUvaGlnaGxpZ2h0LWpzL19zaG93Y2FzZS9zdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgaXF1aS1waHJhc2UtaW5wdXQgYS5zZWxlY3RlZCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightJsShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/code/highlight-js/index.ts":
  /*!*****************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/code/highlight-js/index.ts ***!
    \*****************************************************************/

  /*! exports provided: highlightJsRegisterLanguage, HighlightJsTextareaDirective, HighlightJsInjectTopDirective, HighlightJsInjectBottomDirective, HighlightJsComponent */

  /***/
  function iquiNgxSrcLibComponentsCodeHighlightJsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "highlightJsRegisterLanguage", function () {
      return highlightJsRegisterLanguage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsTextareaDirective", function () {
      return HighlightJsTextareaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectTopDirective", function () {
      return HighlightJsInjectTopDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectBottomDirective", function () {
      return HighlightJsInjectBottomDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsComponent", function () {
      return HighlightJsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! highlight.js/lib/highlight */
    "../../node_modules/highlight.js/lib/highlight.js");
    /* harmony import */


    var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../data */
    "../iqui-ngx/src/lib/data/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js"); // Wrapper around highlight.js (https://highlightjs.org/)
    // TODO: Consider pushing highlighting into a web-worker
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import data


    function HighlightJsComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function HighlightJsComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HighlightJsComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var injected_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", injected_r4);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function HighlightJsComponent_pre_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "code", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.wrap ? "wrapped" : ""))("innerHTML", ctx_r1._highlightedSyntax, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function HighlightJsComponent_pre_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r2.wrap ? "wrapped" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("value", ctx_r2._highlightedSyntax);
      }
    }

    function HighlightJsComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function HighlightJsComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HighlightJsComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var injected_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", injected_r6);
      }
    }
    /**
     * Registers additional highligh.js (https://highlightjs.org/) language syntaxes
     * @param languageName Name by which the language will be referenced
     * @param language Language syntax definition (from "highlight.js/lib/languages/")
     */


    function highlightJsRegisterLanguage(languageName, language) {
      HighlightJsComponent.registerLanguage(languageName, language);
    }
    /**
     * Used to include syntax using a textarea child element
     *
     * Usage:
     *
     * <iqui-highlightjs>
     *   <textarea>
     *     <div> Code example ... </div>
     *   </textarea>
     * </iqui-highlightjs>
     */


    var HighlightJsTextareaDirective = function HighlightJsTextareaDirective() {
      _classCallCheck(this, HighlightJsTextareaDirective);
    };

    HighlightJsTextareaDirective.ɵfac = function HighlightJsTextareaDirective_Factory(t) {
      return new (t || HighlightJsTextareaDirective)();
    };

    HighlightJsTextareaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HighlightJsTextareaDirective,
      selectors: [["textarea"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightJsTextareaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'textarea'
        }]
      }], null, null);
    })();
    /**
     * Used to include a filter component into a <iqui-highlightjs /> component
     *
     * Usage:
     *
     * <iqui-highlightjs>
     *   <ng-container *iquiHighlightJsInjectedTop="let filter = filter;">
     *     Some header content ...
     *   </ng-container>
     *   <textarea ngNonBindable>
     *     <div> Code example ... </div>
     *   </textarea>
     * </iqui-highlightjs>
     */


    var HighlightJsInjectTopDirective = function HighlightJsInjectTopDirective() {
      _classCallCheck(this, HighlightJsInjectTopDirective);
    };

    HighlightJsInjectTopDirective.ɵfac = function HighlightJsInjectTopDirective_Factory(t) {
      return new (t || HighlightJsInjectTopDirective)();
    };

    HighlightJsInjectTopDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HighlightJsInjectTopDirective,
      selectors: [["", "iquiHighlightJsInjectedTop", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightJsInjectTopDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiHighlightJsInjectedTop]'
        }]
      }], null, null);
    })();
    /**
     * Used to include a filter component into a <iqui-highlightjs /> component
     *
     * Usage:
     *
     * <iqui-highlightjs>
     *   <ng-container *iquiHighlightJsInjectedBottom="let filter = filter;">
     *     Some footer content ...
     *   </ng-container>
     *   <textarea ngNonBindable>
     *     <div> Code example ... </div>
     *   </textarea>
     * </iqui-highlightjs>
     */


    var HighlightJsInjectBottomDirective = function HighlightJsInjectBottomDirective() {
      _classCallCheck(this, HighlightJsInjectBottomDirective);
    };

    HighlightJsInjectBottomDirective.ɵfac = function HighlightJsInjectBottomDirective_Factory(t) {
      return new (t || HighlightJsInjectBottomDirective)();
    };

    HighlightJsInjectBottomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: HighlightJsInjectBottomDirective,
      selectors: [["", "iquiHighlightJsInjectedBottom", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightJsInjectBottomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiHighlightJsInjectedBottom]'
        }]
      }], null, null);
    })();
    /**
     * Highlight.js (https://highlightjs.org/) wrapper, displays colored syntax
     *
     * Usage:
     *
     *  <iqui-highlightjs\
     *    [syntax]      ="'<div> Hello world! </div>'"\
     *    [languages]   ="['xml', 'css', 'javascript']"\
     *    [filter]      ="..."\
     *    [highlight]   ="true|false"\
     *    [wrap]        ="true|false"\
     *    [trim]        ="true|false"\
     *    [lineNumbers] ="true|false"\
     *  >\
     *  </iqui-highlightjs>
     *
     * ... or with inlined syntax:
     *
     *  <iqui-highlightjs\
     *    [languages]   ="['xml', 'css', 'javascript']"\
     *    [filter]      ="..."\
     *    [highlight]   ="true|false"\
     *    [wrap]        ="true|false"\
     *    [trim]        ="true|false"\
     *    [lineNumbers] ="true|false"\
     *  >\
     *    <textarea>\
     *      <div> Hello {{'world'}}! </div>\
     *    </textarea>\
     *  </iqui-highlightjs>
     *
     * ... or with un-interpolated inlined syntax:
     *
     *  <iqui-highlightjs\
     *    [languages]   ="['xml', 'css', 'javascript']"\
     *    [filter]      ="..."\
     *    [highlight]   ="true|false"\
     *    [wrap]        ="true|false"\
     *    [trim]        ="true|false"\
     *    [lineNumbers] ="true|false"\
     *  >\
     *    <textarea ngNonBindable>\
     *      <div> Hello {{'world'}}! </div>\
     *    </textarea>\
     *  </iqui-highlightjs>
     *
     */


    var HighlightJsComponent = /*#__PURE__*/function () {
      function HighlightJsComponent(_cd) {
        _classCallCheck(this, HighlightJsComponent);

        this._cd = _cd;
        /**
         * If highlighting is disabled. If not, non-highlighted syntax will be shown
         */

        this.disabled = false;
        /**
         * Row filter (will only show rows matching given string or regexp or Phrase instance)
         */

        this.filter = new _data__WEBPACK_IMPORTED_MODULE_2__["Phrase"]();
        /**
         * If rows should wrap
         */

        this.wrap = true;
        /**
         * If rows should be left-trimmed by common amount of whitespace
         */

        this.trim = true;
        /**
         * If syntax highlighting should be used (with very many lines of syntax this can be taxing for the browser to display)
         */

        this.highlight = true;
        /**
         * If line numbers should be shown left of all rows (Only works if [process] true)
         */

        this.lineNumbers = true; // Rendered, highlighted syntax HTML

        this._highlightedSyntax = '';
      }
      /**
       * Static method allowing registration of additional language syntaxes
       * @param languageName Name by which the language will be referenced
       * @param language Language syntax definition (from "highlight.js/lib/languages/")
       */


      _createClass(HighlightJsComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          // If no syntax attribute set, try extracting value from <textarea /> child
          if (!this.syntax) {
            this._ingestTextareaSyntax();
          } // Trigger highlighting render


          this._renderHighlightedSyntax();

          this._cd.detectChanges();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Trigger highlighting render
          this._renderHighlightedSyntax();
        }
        /**
         * Forces a refresh of the component and it's syntax
         */

      }, {
        key: "refresh",
        value: function refresh() {
          // (Re)Ingest textarea syntax
          if (!this.syntax) {
            this._ingestTextareaSyntax();
          } // (Re)Trigger highlighting render


          this._renderHighlightedSyntax();
        }
        /**
         * Ingest syntax from textarea, if one is used
         */

      }, {
        key: "_ingestTextareaSyntax",
        value: function _ingestTextareaSyntax() {
          // Check if single <textarea /> child
          if (this._syntaxEl) {
            // Use textarea value as syntax
            this._syntaxElInnerHTML = this._syntaxEl.nativeElement.value;
          }
        }
        /**
         * (Re)Renders given syntax as HTML and displays it
         */

      }, {
        key: "_renderHighlightedSyntax",
        value: function _renderHighlightedSyntax() {
          var _this5 = this;

          // Set initial syntax from [syntax] attribute
          var syntax = this.syntax || this._syntaxElInnerHTML;

          if (!syntax) {
            return;
          } // Trim lines


          if (syntax && this.trim) {
            // Find shortest available start-trim
            var minStartTrim = syntax.split('\n').reduce(function (min, line) {
              var match = line.match(/\S/),
                  trimLength = match ? match.index : Number.MAX_SAFE_INTEGER;
              return trimLength < min ? trimLength : min;
            }, Number.MAX_SAFE_INTEGER); // Trim lines

            syntax = syntax.split('\n').reduce(function (aggregate, line, i, arr) {
              // Use remaining (after empty rows) array as response
              if (line.match(/\S/)) {
                return arr.splice(i);
              }
            }, null).reverse().reduce(function (aggregate, line, i, arr) {
              // Use remaining (after empty rows) array as response
              if (line.match(/\S/)) {
                return arr.splice(i);
              }
            }, null).reverse().reduce(function (lines, line) {
              lines.push(line.substr(minStartTrim));
              return lines;
            }, []).join('\n');
          } // HighlightSyntax


          try {
            if (this.highlight) {
              syntax = !this.disabled ? highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1___default.a.highlightAuto(syntax, this.languages).value : syntax;
            }
          } catch (err) {
            // tslint:disable-next-line: no-unused-expression
            err;
            return;
          } // Add line numbers


          var rawSyntaxLines = syntax.split('\n'),
              highlightedSyntaxLines = syntax.split('\n'),
              lineNumberPaddingLength = Math.ceil(Math.log10(highlightedSyntaxLines.length));
          var numberedSyntax = []; // Filter lines

          var hasStringFilter = typeof this.filter === 'string' && this.filter.trim(),
              hasRegExpFilter = this.filter instanceof RegExp,
              hasPhraseFilter = this.filter instanceof _data__WEBPACK_IMPORTED_MODULE_2__["Phrase"] && this.filter.value.trim();

          if (hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
            // Filter rows
            highlightedSyntaxLines.forEach(function (line, i) {
              // Check if filter is regexp or treat as string
              if (hasStringFilter || hasPhraseFilter && !_this5.filter.isRegExp) {
                try {
                  var filterValue = hasStringFilter ? _this5.filter : _this5.filter.value,
                      filterCaseSensitive = hasStringFilter ? true : _this5.filter.isCaseSensitive,
                      haystack = filterCaseSensitive ? rawSyntaxLines[i] : rawSyntaxLines[i].toLowerCase(),
                      needle = filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase();

                  if (haystack.indexOf(needle) !== -1) {
                    numberedSyntax.push(_this5._renderLine(line, _this5.lineNumbers ? i + 1 : null, lineNumberPaddingLength));
                  }
                } catch (err) {}
              } else if (hasRegExpFilter || hasPhraseFilter && _this5.filter.isRegExp) {
                try {
                  // tslint:disable-next-line: max-line-length
                  var _filterValue = hasRegExpFilter ? _this5.filter : new RegExp(_this5.filter.value, _this5.filter.isCaseSensitive ? '' : 'i');

                  if (rawSyntaxLines[i].match(_filterValue)) {
                    numberedSyntax.push(_this5._renderLine(line, _this5.lineNumbers ? i + 1 : null, lineNumberPaddingLength));
                  }
                } catch (err) {}
              }
            });
          } else {
            // Allow all rows
            highlightedSyntaxLines.forEach(function (line, i) {
              numberedSyntax.push(_this5._renderLine(line, _this5.lineNumbers ? i + 1 : null, lineNumberPaddingLength));
            });
          } // Set syntax with added line numbers


          if (this.highlight) {
            // Set syntax
            this._highlightedSyntax = "<ul class=\"".concat(this.lineNumbers ? "hljs-count-log-".concat(lineNumberPaddingLength) : '', "\">").concat(numberedSyntax.join(''), "</ul>");
          } else {
            // Set syntax
            this._highlightedSyntax = "".concat(numberedSyntax.join('\n'));
          }
        }
        /**
         * (Re)Renders a line of already highlighted syntax as HTML with or without a line number
         * @param line A line of already highlighted syntax
         * @param lineNumber (Optional) Line number to render left of thr syntax line
         * @param lineNumberPaddingLength (Optional) Padding length target for line numbers
         */

      }, {
        key: "_renderLine",
        value: function _renderLine(line) {
          var lineNumber = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var lineNumberPaddingLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

          // tslint:disable-next-line: max-line-length
          if (this.highlight) {
            return lineNumber !== null ? "<li><span class=\"hljs-line-num\">".concat(lineNumber, "</span>").concat(line || '&nbsp;', "</li>") : "<li>".concat(line || '&nbsp;', "</li>");
          } else {
            return lineNumber !== null ? "".concat(lineNumber.toString().padEnd(lineNumberPaddingLength + 5, ' ')).concat(line) : "".concat(line);
          }
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as disabled, if disabled (.disabled)
          this.disabled ? 'disabled' : null, // Pass-through host class
          this["class"] || null, // If highlighting on
          this.highlight ? 'syntax-highlighted' : 'syntax-not-highlighted'].join(' ');
        }
      }], [{
        key: "registerLanguage",
        value: function registerLanguage(languageName, language) {
          highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_1___default.a.registerLanguage(languageName, language);
        }
      }]);

      return HighlightJsComponent;
    }();

    HighlightJsComponent.ɵfac = function HighlightJsComponent_Factory(t) {
      return new (t || HighlightJsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    HighlightJsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HighlightJsComponent,
      selectors: [["iqui-highlightjs"]],
      contentQueries: function HighlightJsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, HighlightJsTextareaDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, HighlightJsInjectTopDirective, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, HighlightJsInjectBottomDirective, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._syntaxEl = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._injectedTop = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._injectedBottom = _t);
        }
      },
      hostVars: 2,
      hostBindings: function HighlightJsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        syntax: "syntax",
        languages: "languages",
        filter: "filter",
        wrap: "wrap",
        trim: "trim",
        highlight: "highlight",
        lineNumbers: "lineNumbers"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 5,
      vars: 7,
      consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngClass", "innerHTML"], ["cdkTextareaAutosize", "", 3, "readonly", "value"]],
      template: function HighlightJsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HighlightJsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HighlightJsComponent_pre_2_Template, 2, 4, "pre", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HighlightJsComponent_pre_3_Template, 5, 5, "pre", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HighlightJsComponent_ng_container_4_Template, 2, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.ngClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._injectedTop);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highlight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.highlight);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._injectedBottom);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__["TextareaDirective"], HighlightJsTextareaDirective, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_5__["CdkTextareaAutosize"]],
      styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code.wrapped[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul {\n  list-style: none;\n  margin-bottom: 0;\n  -webkit-padding-start: unset;\n          padding-inline-start: unset;\n}\n[_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li {\n  position: relative;\n}\n[_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > .hljs-line-num {\n  position: absolute;\n  display: inline-block;\n  text-align: left;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: gray;\n}\n[_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-0, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-1, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-2, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-3, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-4 {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-0 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-1 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-2 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-3 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-4 > li > .hljs-line-num {\n  width: 40px;\n  left: -40px;\n}\n[_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-5, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-6, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-7, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-8 {\n  padding-left: 80px;\n}\n[_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-5 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-6 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-7 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-8 > li > .hljs-line-num {\n  width: 80px;\n  left: -80px;\n}\n[_nghost-%COMP%]    > div.syntax-not-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li {\n  position: initial;\n}\n[_nghost-%COMP%]    > div.syntax-not-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > textarea {\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 0;\n  overflow-y: auto;\n  resize: none;\n  background-color: inherit;\n  color: inherit;\n}\n[_nghost-%COMP%]    > div.syntax-not-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > textarea, [_nghost-%COMP%]    > div.syntax-not-highlighted[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > textarea:focus {\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9jb2RlL2hpZ2hsaWdodC1qcy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7QUFBSjtBQUVJO0VBQ0Usa0JBQUE7QUFBTjtBQUVRO0VBQ0UscUJBQUE7QUFBVjtBQUdRO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO1VBQUEsMkJBQUE7QUFEVjtBQVFNO0VBQ0Usa0JBQUE7QUFOUjtBQU9RO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxXQUFBO0FBTFY7QUFVTTtFQUtFLGtCQUFBO0FBWlI7QUFhUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBWFY7QUFjTTtFQUlFLGtCQUFBO0FBZlI7QUFnQlE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWRWO0FBb0JJO0VBQ0UsaUJBQUE7QUFsQk47QUFtQk07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBakJSO0FBbUJRO0VBRUUsWUFBQTtFQUNBLGFBQUE7QUFsQlYiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2NvZGUvaGlnaGxpZ2h0LWpzL3N0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICYgPiBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xuXG4gICAgJiA+IHByZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAmID4gY29kZSB7XG4gICAgICAgICYud3JhcHBlZCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6bmctZGVlcCA+IHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGlnaGxpZ2h0ZWRcbiAgICAmLnN5bnRheC1oaWdobGlnaHRlZCA+IHByZSA+IGNvZGU6Om5nLWRlZXAgPiB1bCB7XG4gICAgICAmID4gbGkge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICYgPiAuaGxqcy1saW5lLW51bSB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE51bWJlcnMgY29sdW1uIHdpZHRoIGRlcGVuZGVudCBvbiBsaW5lIGNvdW50XG4gICAgICAmLmhsanMtY291bnQtbG9nLTAsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTEsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTIsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTMsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICAgICYgPiBsaSA+IC5obGpzLWxpbmUtbnVtIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBsZWZ0OiAtNDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi5obGpzLWNvdW50LWxvZy01LFxuICAgICAgJi5obGpzLWNvdW50LWxvZy02LFxuICAgICAgJi5obGpzLWNvdW50LWxvZy03LFxuICAgICAgJi5obGpzLWNvdW50LWxvZy04IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgICAgICAmID4gbGkgPiAuaGxqcy1saW5lLW51bSB7XG4gICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgbGVmdDogLTgwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBOb3QgSGlnaGxpZ2h0ZWRcbiAgICAmLnN5bnRheC1ub3QtaGlnaGxpZ2h0ZWQgPiBwcmUgPiBjb2RlOjpuZy1kZWVwID4gdWwgPiBsaSB7XG4gICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgICYgPiB0ZXh0YXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightJsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-highlightjs',
          templateUrl: './index.html',
          styleUrls: ["./style.scss"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        syntax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        languages: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        wrap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        trim: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        highlight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        lineNumbers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _syntaxEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [HighlightJsTextareaDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }],
        _injectedTop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [HighlightJsInjectTopDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }],
        _injectedBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [HighlightJsInjectBottomDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/code/index.ts":
  /*!****************************************************!*\
    !*** ../iqui-ngx/src/lib/components/code/index.ts ***!
    \****************************************************/

  /*! exports provided: HighlightJsComponent, HighlightJsTextareaDirective, HighlightJsInjectTopDirective, HighlightJsInjectBottomDirective, highlightJsRegisterLanguage, CodeModule */

  /***/
  function iquiNgxSrcLibComponentsCodeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeModule", function () {
      return CodeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./highlight-js */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsComponent", function () {
      return _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsTextareaDirective", function () {
      return _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectTopDirective", function () {
      return _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectTopDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectBottomDirective", function () {
      return _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectBottomDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "highlightJsRegisterLanguage", function () {
      return _highlight_js__WEBPACK_IMPORTED_MODULE_4__["highlightJsRegisterLanguage"];
    }); // Import dependencies
    // Import modules
    // Import components and (re)export components

    /**
     * IQ UI NGX Elements' code/syntax utilities module
     * Implements code/syntax utilities
     */


    var CodeModule = function CodeModule() {
      _classCallCheck(this, CodeModule);
    };

    CodeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CodeModule
    });
    CodeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CodeModule_Factory(t) {
        return new (t || CodeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]], // Export dependency modules
      _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CodeModule, {
        declarations: [_highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsComponent"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectTopDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectBottomDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]],
        exports: [// Export dependency modules
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"], // Export child components
        _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsComponent"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectTopDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectBottomDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CodeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"]],
          declarations: [_highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsComponent"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectTopDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectBottomDirective"]],
          exports: [// Export dependency modules
          _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"], // Export child components
          _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsComponent"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectTopDirective"], _highlight_js__WEBPACK_IMPORTED_MODULE_4__["HighlightJsInjectBottomDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/_showcase.ts":
  /*!********************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/_showcase.ts ***!
    \********************************************************/

  /*! exports provided: FormShowcaseComponent, InputShowcaseComponent, CheckboxShowcaseComponent, RadioShowcaseComponent, SelectShowcaseComponent, FormShowcaseModule */

  /***/
  function iquiNgxSrcLibComponentsForm_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseModule", function () {
      return FormShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/form/_showcase */
    "../iqui-ngx/src/lib/components/form/components/form/_showcase/index.ts");
    /* harmony import */


    var _components_input_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/input/_showcase */
    "../iqui-ngx/src/lib/components/form/components/input/_showcase/index.ts");
    /* harmony import */


    var _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/checkbox/_showcase */
    "../iqui-ngx/src/lib/components/form/components/checkbox/_showcase/index.ts");
    /* harmony import */


    var _components_radio_showcase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/radio/_showcase */
    "../iqui-ngx/src/lib/components/form/components/radio/_showcase/index.ts");
    /* harmony import */


    var _components_select_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/select/_showcase */
    "../iqui-ngx/src/lib/components/form/components/select/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseComponent", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["FormShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputShowcaseComponent", function () {
      return _components_input_showcase__WEBPACK_IMPORTED_MODULE_6__["InputShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxShowcaseComponent", function () {
      return _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_7__["CheckboxShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioShowcaseComponent", function () {
      return _components_radio_showcase__WEBPACK_IMPORTED_MODULE_8__["RadioShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectShowcaseComponent", function () {
      return _components_select_showcase__WEBPACK_IMPORTED_MODULE_9__["SelectShowcaseComponent"];
    }); // Form Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components
    // IQ UI NGX Elements' Basic elements module


    var FormShowcaseModule = function FormShowcaseModule() {
      _classCallCheck(this, FormShowcaseModule);
    };

    FormShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormShowcaseModule
    });
    FormShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormShowcaseModule_Factory(t) {
        return new (t || FormShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]], // Export dependency modules
      _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormShowcaseModule, {
        declarations: [_components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["FormShowcaseComponent"], _components_input_showcase__WEBPACK_IMPORTED_MODULE_6__["InputShowcaseComponent"], _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_7__["CheckboxShowcaseComponent"], _components_radio_showcase__WEBPACK_IMPORTED_MODULE_8__["RadioShowcaseComponent"], _components_select_showcase__WEBPACK_IMPORTED_MODULE_9__["SelectShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]],
        exports: [// Export dependency modules
        _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"], // Export child components
        _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["FormShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]],
          declarations: [_components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["FormShowcaseComponent"], _components_input_showcase__WEBPACK_IMPORTED_MODULE_6__["InputShowcaseComponent"], _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_7__["CheckboxShowcaseComponent"], _components_radio_showcase__WEBPACK_IMPORTED_MODULE_8__["RadioShowcaseComponent"], _components_select_showcase__WEBPACK_IMPORTED_MODULE_9__["SelectShowcaseComponent"]],
          exports: [// Export dependency modules
          _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"], // Export child components
          _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__["FormShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/checkbox/_showcase/index.ts":
  /*!**********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/checkbox/_showcase/index.ts ***!
    \**********************************************************************************/

  /*! exports provided: CheckboxShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsCheckbox_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxShowcaseComponent", function () {
      return CheckboxShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Checkbox component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var CheckboxShowcaseComponent = function CheckboxShowcaseComponent() {
      _classCallCheck(this, CheckboxShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [_basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"]]; // Playground context

      this.context = {
        Value: false,
        Label: 'Label text',
        Disabled: [false, true],
        Class: '',
        NgClass: {}
      }; // Playground form context

      this.contextForm = {
        FormDisabled: [undefined, true, false],
        FormSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_1__["BootstrapSize"]))),
        FormValid: [undefined, true, false]
      };
    };

    CheckboxShowcaseComponent.ɵfac = function CheckboxShowcaseComponent_Factory(t) {
      return new (t || CheckboxShowcaseComponent)();
    };

    CheckboxShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 6,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function CheckboxShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Checkbox Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a checkbox element. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-checkbox\n      [(value)]=\" context.Value\"\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\">\n\n      {{ context.Label }}\n\n    </iqui-checkbox>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-checkbox> Label text </iqui-checkbox>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"], _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL2NoZWNrYm94L19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/checkbox/index.ts":
  /*!************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/checkbox/index.ts ***!
    \************************************************************************/

  /*! exports provided: CheckboxComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsCheckboxIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
      return CheckboxComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../directives */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");
    /* harmony import */


    var _directives_group_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives/group/index */
    "../iqui-ngx/src/lib/components/form/directives/group/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_checkbox_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../directives/checkbox/index */
    "../iqui-ngx/src/lib/components/form/directives/checkbox/index.ts");
    /* harmony import */


    var _directives_label_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/label/index */
    "../iqui-ngx/src/lib/components/form/directives/label/index.ts"); // Checkbox component
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = ["*"];
    /**
     * Checkbox, renders a checkbox control
     *
     * Usage:
     *
     *  <iqui-checkbox\
     *    [(value)]   = "value"\
     *    [ disabled  = "true|false" ]\
     *    [ class     = "..." ]\
     *    [ ngClass   = "{...}" ]\
     *  >
     *    Label
     *  </iqui-checkbox>
     *
     */

    var CheckboxComponent = /*#__PURE__*/function (_directives__WEBPACK_) {
      _inherits(CheckboxComponent, _directives__WEBPACK_);

      var _super3 = _createSuper(CheckboxComponent);

      function CheckboxComponent() {
        var _this6;

        _classCallCheck(this, CheckboxComponent);

        _this6 = _super3.apply(this, arguments);
        /**
         * [disabled] binding
         */

        _this6.disabled = false;
        /**
         * [(value)] two-way binding
         */

        _this6.value = null;
        _this6.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this6;
      }

      _createClass(CheckboxComponent, [{
        key: "_updateValue",

        /**
         * Updates value when change detected
         * @param e Event descriptor
         */
        value: function _updateValue(e) {
          this.valueChange.emit(this.value = e.target.checked);
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as checkbox container (.form-check)
          'form-group', 'form-check', // Mark as disabled, if disabled (.disabled)
          this.disabled ? 'disabled' : null, // Pass-through host class
          this["class"] || null].join(' ');
        }
      }]);

      return CheckboxComponent;
    }(_directives__WEBPACK_IMPORTED_MODULE_1__["UsesFormElementDirectives"]);

    CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) {
      return ɵCheckboxComponent_BaseFactory(t || CheckboxComponent);
    };

    CheckboxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckboxComponent,
      selectors: [["iqui-checkbox"]],
      hostVars: 2,
      hostBindings: function CheckboxComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 6,
      consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "form-check-label"]],
      template: function CheckboxComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CheckboxComponent_Template_input_change_1_listener($event) {
            return ctx._updateValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);
        }
      },
      directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _directives_checkbox_index__WEBPACK_IMPORTED_MODULE_4__["CheckboxDirective"], _directives_label_index__WEBPACK_IMPORTED_MODULE_5__["LabelDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL2NoZWNrYm94L3N0eWxlLnNjc3MifQ== */"]
    });

    var ɵCheckboxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](CheckboxComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckboxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-checkbox',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/form/_showcase/index.ts":
  /*!******************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/form/_showcase/index.ts ***!
    \******************************************************************************/

  /*! exports provided: FormShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsForm_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseComponent", function () {
      return FormShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Form component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var FormShowcaseComponent = function FormShowcaseComponent() {
      _classCallCheck(this, FormShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_2__["FormModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"]]; // Playground context

      this.context = {
        // If [iquiForm] directive is enabled
        Enabled: true,
        // Form
        FormDisabled: [undefined, true, false],
        FormSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_1__["BootstrapSize"]))),
        FormValid: [undefined, true, false],
        // Form Group
        GroupDisabled: [undefined, true, false],
        GroupSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_1__["BootstrapSize"]))),
        GroupValid: [undefined, true, false]
      };
    };

    FormShowcaseComponent.ɵfac = function FormShowcaseComponent_Factory(t) {
      return new (t || FormShowcaseComponent)();
    };

    FormShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function FormShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Form Input Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a button-styled button or anchor HTML element ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <!-- Form[iquiForm] root container, defining a root scope for [disabled, size, valid] -->\n    <form\n      [iquiForm]=\"context.Enabled\"\n      [disabled]=\"context.FormDisabled\"\n      [size] =\"   context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <!-- Components inside root scope -->\n      <label> Root scoped components inheriting Form's [disabled], [size], [valid] values </label>\n      <div class=\"card p-3\">\n        <!-- No need to use class=\"from-control\", it is added automatically -->\n        <input placeholder=\"Inheriting Form's values\" />\n        <div class=\"form-group\">\n          <!-- No need to use class=\"btn\", it is added automatically -->\n          <button class=\"btn-primary\"> Primary </button>\n          <button class=\"btn-secondary\"> Secondary </button>\n          <button class=\"btn-warning\"> Warning! </button>\n        </div>\n        \n      </div>\n\n      <!-- .form-group container, defining a local scope for [disabled, size, valid] -->\n      <div\n        class=\"mt-3 p-3 form-group\"\n        [disabled]=\" context.GroupDisabled\"\n        [size]=\"     context.GroupSize\"\n        [valid]=\"    context.GroupValid\">\n\n        <!-- Components inside local scope -->\n        <label> Local scoped components inheriting Form Group's [disabled], [size], [valid] values </label>\n        <div class=\"card p-3\">\n\n          <!-- Inputs are bound to labels automatically-->\n          <div class=\"form-group\">\n            <label> Inputs are bound to labels automatically </label>\n            <div class=\"form-group\">\n              <label> Text </label>\n              <input type=\"text\"    placeholder=\"...\" />\n            </div>\n            <div class=\"form-group\">\n              <label> Number </label>\n              <input type=\"number\"  placeholder=\"...\" />\n            </div>\n            <div class=\"form-group\">\n              <label> Date </label>\n              <input type=\"date\"    placeholder=\"...\" />\n            </div>\n          </div>\n          <hr />\n\n          <!-- Selects are bound to labels automatically -->\n          <div class=\"form-group\">\n            <label> Selects are bound to labels automatically </label>\n            <select>\n              <option value=\"A\">Option A</option>\n              <option value=\"B\">Option B</option>\n              <option value=\"C\">Option C</option>\n            </select>\n          </div>\n          <hr />\n\n          <!-- Checkboxes are bound to labels automatically -->\n          <div class=\"form-group\">\n            <label> Checkboxes are bound to labels automatically </label>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" />\n              <label class=\"form-check-label\"> Checkbox label </label>\n            </div>\n          </div>\n          <hr />\n\n          <!-- Radios are grouped and bound to labels automatically -->\n          <div class=\"form-group\">\n            <label> Radios are bound to labels automatically </label>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" />\n              <label class=\"custom-control-label\" value=\"A\"> Radio label A </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" />\n              <label class=\"custom-control-label\" value=\"B\"> Radio label B </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" />\n              <label class=\"custom-control-label\" value=\"C\"> Radio label C </label>\n            </div>\n          </div>\n          <hr />\n\n          <!-- Buttons -->\n          <div class=\"form-group\">\n            <button class=\"btn-primary\"> Primary </button>\n            <button class=\"btn-secondary\"> Secondary </button>\n            <button class=\"btn-warning\"> Warning! </button>\n          </div>\n\n        </div>\n  \n      </div>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL2Zvcm0vX3Nob3djYXNlL3N0eWxlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/input/_showcase/index.ts":
  /*!*******************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/input/_showcase/index.ts ***!
    \*******************************************************************************/

  /*! exports provided: InputShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsInput_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputShowcaseComponent", function () {
      return InputShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/components/input/index.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../ */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts"); // Input component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules


    var _c0 = function _c0() {
      return ["scss"];
    }; // Showcase component


    var InputShowcaseComponent = function InputShowcaseComponent() {
      _classCallCheck(this, InputShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [_basics__WEBPACK_IMPORTED_MODULE_4__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_3__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_5__["CodeModule"]]; // Playground context

      this.context = {
        Value: '',
        Label: 'Label text',
        Disabled: [false, true],
        Class: '',
        NgClass: {},
        Type: [undefined].concat(_toConsumableArray(Object.values(___WEBPACK_IMPORTED_MODULE_1__["InputType"]))),
        Resize: true,
        ResizeMin: 0,
        ResizeMax: 5
      }; // Playground form context

      this.contextForm = {
        FormDisabled: [undefined, true, false],
        FormSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["BootstrapSize"]))),
        FormValid: [undefined, true, false]
      };
    };

    InputShowcaseComponent.ɵfac = function InputShowcaseComponent_Factory(t) {
      return new (t || InputShowcaseComponent)();
    };

    InputShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 16,
      vars: 8,
      consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]],
      template: function InputShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Input Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays an input element. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Styling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "iqui-highlightjs", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "        // Resizable textarea width adjustment (needs to subtract left and right padding and border from 100% width)\n        textarea.iqui-resizable-textarea {\n          width: calc(100% - 24px - 2px);\n        }\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "iqui-playground", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    <iqui-input\n      [(value)]=\"  context.Value\"\n      [disabled]=\" context.Disabled\"\n      [class]=\"    context.Class\"\n      [ngClass]=\"  context.NgClass\"\n      [type]=\"     context.Type\"\n      [resize]=\"   context.Resize\"\n      [resizeMin]=\"context.ResizeMin\"\n      [resizeMax]=\"context.ResizeMax\">\n\n      {{ context.Label }}\n\n    </iqui-input>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "iqui-playground", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-input> Label text </iqui-input>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
        }
      },
      directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsComponent"], _directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_8__["PlaygroundTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_8__["PlaygroundComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL2lucHV0L19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/input/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/input/index.ts ***!
    \*********************************************************************/

  /*! exports provided: InputType, InputComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsInputIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputType", function () {
      return InputType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");
    /* harmony import */


    var _directives_group_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../directives/group/index */
    "../iqui-ngx/src/lib/components/form/directives/group/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_label_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/label/index */
    "../iqui-ngx/src/lib/components/form/directives/label/index.ts");
    /* harmony import */


    var _directives_input_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../directives/input/index */
    "../iqui-ngx/src/lib/components/form/directives/input/index.ts");
    /* harmony import */


    var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js"); // Input component
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = ["input"];

    function InputComponent_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputComponent_input_3_Template_input_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3._updateValue($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r0.disabled || null);
      }
    }

    var _c1 = function _c1(a0) {
      return [a0];
    };

    function InputComponent_textarea_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function InputComponent_textarea_4_Template_textarea_input_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5._updateValue($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r1.resize ? "iqui-resizable-textarea" : ""))("value", ctx_r1.value)("cdkTextareaAutosize", ctx_r1.resize)("cdkAutosizeMinRows", ctx_r1.resizeMin)("cdkAutosizeMaxRows", ctx_r1.resizeMax);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r1.disabled || null);
      }
    }

    var _c2 = ["*"]; // Define and export enums and types

    /*
     * Button's bootstrap theme colors type
     */
    // tslint:disable-next-line: variable-name

    var InputType = Object.assign(Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_1__["HtmlInputType"]), {
      TEXTAREA: 'textarea'
    });
    /**
     * Input, renders an input control
     *
     * Usage:
     *
     *  <iqui-input\
     *    [type       = "text|number|search|url|email|tel|password|date|time|datetime-local|week|month|color|file|textarea'"]\
     *    [(value     = "value")]\
     *    [ disabled  = "true|false" ]\
     *    [ class     = "..." ]\
     *    [ ngClass   = "{...}" ]\
     *    [ textarea  = "true|false" ]\
     *    [ resize    = "true|false" ]\
     *    [ resizeMin = "true|false" ]\
     *    [ resizeMax = "true|false" ]\
     *  >
     *    Label
     *  </iqui-input>
     *
     */

    var InputComponent = /*#__PURE__*/function (_directives__WEBPACK_2) {
      _inherits(InputComponent, _directives__WEBPACK_2);

      var _super4 = _createSuper(InputComponent);

      function InputComponent() {
        var _this7;

        _classCallCheck(this, InputComponent);

        _this7 = _super4.apply(this, arguments);
        /**
         * [disabled] binding
         */

        _this7.disabled = false;
        /**
         * [(value)] two-way binding
         */

        _this7.value = null;
        _this7.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * If input should resize as rows are added
         */

        _this7.resize = false;
        /**
         * Minimum number of lines to resize to
         */

        _this7.resizeMin = 1;
        /**
         * Maximum number of lines to resize to
         */

        _this7.resizeMax = 5;
        return _this7;
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._updateType();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.type) {
            this._updateType();
          }
        }
        /**
         * Updates input type
         */

      }, {
        key: "_updateType",
        value: function _updateType() {
          if (this._input) {
            this._input.nativeElement.setAttribute('type', this.type);
          }
        }
        /**
         * Updates value when change detected
         * @param e Event descriptor
         */

      }, {
        key: "_updateValue",
        value: function _updateValue(e) {
          this.valueChange.emit(this.value = e.target.value);
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as input container (.form-group)
          'form-group', // Mark as disabled, if disabled (.disabled)
          this.disabled ? 'disabled' : null, // Pass-through host class
          this["class"] || null].join(' ');
        }
      }]);

      return InputComponent;
    }(_directives__WEBPACK_IMPORTED_MODULE_2__["UsesFormElementDirectives"]);

    InputComponent.ɵfac = function InputComponent_Factory(t) {
      return ɵInputComponent_BaseFactory(t || InputComponent);
    };

    InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InputComponent,
      selectors: [["iqui-input"]],
      viewQuery: function InputComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._input = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function InputComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        type: "type",
        value: "value",
        resize: "resize",
        resizeMin: "resizeMin",
        resizeMax: "resizeMax"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c2,
      decls: 5,
      vars: 6,
      consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], ["type", "text", "class", "form-control", 3, "value", "input", 4, "ngIf"], [3, "ngClass", "value", "cdkTextareaAutosize", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "input", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "value", "input"], ["input", ""], [3, "ngClass", "value", "cdkTextareaAutosize", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "input"]],
      template: function InputComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputComponent_input_3_Template, 2, 2, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_textarea_4_Template, 1, 8, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type !== "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "textarea");
        }
      },
      directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _directives_label_index__WEBPACK_IMPORTED_MODULE_5__["LabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _directives_input_index__WEBPACK_IMPORTED_MODULE_6__["InputDirective"], _directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__["TextareaDirective"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__["CdkTextareaAutosize"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL2lucHV0L3N0eWxlLnNjc3MifQ== */"]
    });

    var ɵInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](InputComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-input',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        resize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeMin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resizeMax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['input']
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/option/index.ts":
  /*!**********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/option/index.ts ***!
    \**********************************************************************/

  /*! exports provided: OptionDirective */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsOptionIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionDirective", function () {
      return OptionDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Radio / Select option directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Option, configures an option
     */


    var OptionDirective = function OptionDirective() {
      _classCallCheck(this, OptionDirective);
    };

    OptionDirective.ɵfac = function OptionDirective_Factory(t) {
      return new (t || OptionDirective)();
    };

    OptionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: OptionDirective,
      selectors: [["iqui-option"]],
      inputs: {
        value: "value",
        label: "label"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: 'iqui-option'
        }]
      }], null, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/radio/_showcase/index.ts":
  /*!*******************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/radio/_showcase/index.ts ***!
    \*******************************************************************************/

  /*! exports provided: RadioShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsRadio_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioShowcaseComponent", function () {
      return RadioShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Radio component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var RadioShowcaseComponent = function RadioShowcaseComponent() {
      _classCallCheck(this, RadioShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [_basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"]]; // Playground context

      this.context = {
        Value: 'A',
        Label: 'Label text',
        OptionAValue: 'A',
        OptionALabel: 'Option A',
        OptionBValue: 'B',
        OptionBLabel: 'Option B',
        OptionCValue: 'C',
        OptionCLabel: 'Option C',
        Disabled: [false, true],
        Class: '',
        NgClass: {}
      }; // Playground form context

      this.contextForm = {
        FormDisabled: [undefined, true, false],
        FormSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_1__["BootstrapSize"]))),
        FormValid: [undefined, true, false]
      };
    };

    RadioShowcaseComponent.ɵfac = function RadioShowcaseComponent_Factory(t) {
      return new (t || RadioShowcaseComponent)();
    };

    RadioShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadioShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 6,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function RadioShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Radio Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a radio element. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-radio\n      [(value)]=\" context.Value\"\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\">\n\n      {{ context.Label }}\n\n      <iqui-option [value]=\"context.OptionAValue\" [label]=\"context.OptionALabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionBValue\" [label]=\"context.OptionBLabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionCValue\" [label]=\"context.OptionCLabel\"></iqui-option>\n\n    </iqui-radio>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-radio>\n\n        Label text\n\n        <iqui-option [value]=\"'A'\" [label]=\"'Option A'\"></iqui-option>\n        <iqui-option [value]=\"'B'\" [label]=\"'Option B'\"></iqui-option>\n        <iqui-option [value]=\"'C'\" [label]=\"'Option C'\"></iqui-option>\n\n      </iqui-radio>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"], _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL3JhZGlvL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/radio/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/radio/index.ts ***!
    \*********************************************************************/

  /*! exports provided: RadioComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsRadioIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioComponent", function () {
      return RadioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../option */
    "../iqui-ngx/src/lib/components/form/components/option/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");
    /* harmony import */


    var _directives_group_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../directives/group/index */
    "../iqui-ngx/src/lib/components/form/directives/group/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_label_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/label/index */
    "../iqui-ngx/src/lib/components/form/directives/label/index.ts");
    /* harmony import */


    var _directives_radio_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../directives/radio/index */
    "../iqui-ngx/src/lib/components/form/directives/radio/index.ts"); // Radio component
    // ----------------------------------------------------------------------------
    // Import dependencies


    function RadioComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RadioComponent_div_3_Template_input_change_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var option_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2._updateValue(option_r1.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.value === option_r1.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx_r0.disabled || null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r1.label || option_r1.value, " ");
      }
    }

    var _c0 = ["*"];
    /**
     * Radio, renders a radio control
     *
     * Usage:
     *
     *  <iqui-radio\
     *    [(value)]   = "value"\
     *    [ disabled  = "true|false" ]\
     *    [ class     = "..." ]\
     *    [ ngClass   = "{...}" ]\
     *  >
     *    Label
     *    <iqui-option [value]="'A'" [label]="'Option A'"></iqui-option>
     *    <iqui-option [value]="'B'" [label]="'Option B'"></iqui-option>
     *    <iqui-option [value]="'C'" [label]="'Option C'"></iqui-option>
     *  </iqui-radio>
     *
     */

    var RadioComponent = /*#__PURE__*/function (_directives__WEBPACK_3) {
      _inherits(RadioComponent, _directives__WEBPACK_3);

      var _super5 = _createSuper(RadioComponent);

      function RadioComponent() {
        var _this8;

        _classCallCheck(this, RadioComponent);

        _this8 = _super5.apply(this, arguments);
        /**
         * [disabled] binding
         */

        _this8.disabled = false;
        /**
         * [(value)] two-way binding
         */

        _this8.value = null;
        _this8.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this8;
      }

      _createClass(RadioComponent, [{
        key: "_updateValue",

        /**
         * Updates value when change detected
         * @param value Updated value
         */
        value: function _updateValue(value) {
          this.valueChange.emit(this.value = value);
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as radio container (.form-group)
          'form-group', // Mark as disabled, if disabled (.disabled)
          this.disabled ? 'disabled' : null, // Pass-through host class
          this["class"] || null].join(' ');
        }
      }]);

      return RadioComponent;
    }(_directives__WEBPACK_IMPORTED_MODULE_2__["UsesFormElementDirectives"]);

    RadioComponent.ɵfac = function RadioComponent_Factory(t) {
      return ɵRadioComponent_BaseFactory(t || RadioComponent);
    };

    RadioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RadioComponent,
      selectors: [["iqui-radio"]],
      contentQueries: function RadioComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"], false, _option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._optionEls = _t);
        }
      },
      hostVars: 2,
      hostBindings: function RadioComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 5,
      consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], ["class", "custom-control custom-radio", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-radio"], ["type", "radio", 1, "custom-control-input", 3, "checked", "change"], [1, "custom-control-label"]],
      template: function RadioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RadioComponent_div_3_Template, 4, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._optionEls);
        }
      },
      directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _directives_label_index__WEBPACK_IMPORTED_MODULE_5__["LabelDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _directives_radio_index__WEBPACK_IMPORTED_MODULE_6__["RadioDirective"]],
      styles: ["[_nghost-%COMP%]     iqui-option {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mb3JtL2NvbXBvbmVudHMvcmFkaW8vc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL3JhZGlvL3N0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIDo6bmctZGVlcCBpcXVpLW9wdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */"]
    });

    var ɵRadioComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](RadioComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RadioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-radio',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        _optionEls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"], {
            read: _option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/select/_showcase/index.ts":
  /*!********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/select/_showcase/index.ts ***!
    \********************************************************************************/

  /*! exports provided: SelectShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsSelect_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectShowcaseComponent", function () {
      return SelectShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../ */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Select component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var SelectShowcaseComponent = function SelectShowcaseComponent() {
      _classCallCheck(this, SelectShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [_basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"]]; // Playground context

      this.context = {
        Value: 'A',
        Label: 'Label text',
        OptionAValue: 'A',
        OptionALabel: 'Option A',
        OptionBValue: 'B',
        OptionBLabel: 'Option B',
        OptionCValue: 'C',
        OptionCLabel: 'Option C',
        Disabled: [false, true],
        Class: '',
        NgClass: {}
      }; // Playground form context

      this.contextForm = {
        FormDisabled: [undefined, true, false],
        FormSize: [undefined].concat(_toConsumableArray(Object.values(_types__WEBPACK_IMPORTED_MODULE_1__["BootstrapSize"]))),
        FormValid: [undefined, true, false]
      };
    };

    SelectShowcaseComponent.ɵfac = function SelectShowcaseComponent_Factory(t) {
      return new (t || SelectShowcaseComponent)();
    };

    SelectShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 9,
      vars: 6,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function SelectShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Select Element");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a select element. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-select\n      [(value)]=\" context.Value\"\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\">\n\n      {{ context.Label }}\n\n      <iqui-option [value]=\"context.OptionAValue\" [label]=\"context.OptionALabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionBValue\" [label]=\"context.OptionBLabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionCValue\" [label]=\"context.OptionCLabel\"></iqui-option>\n\n    </iqui-select>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-select>\n\n        Label text\n\n        <iqui-option [value]=\"'A'\" [label]=\"'Option A'\"></iqui-option>\n        <iqui-option [value]=\"'B'\" [label]=\"'Option B'\"></iqui-option>\n        <iqui-option [value]=\"'C'\" [label]=\"'Option C'\"></iqui-option>\n\n      </iqui-select>\n\n    </form>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"], _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZm9ybS9jb21wb25lbnRzL3NlbGVjdC9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/components/select/index.ts":
  /*!**********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/components/select/index.ts ***!
    \**********************************************************************/

  /*! exports provided: SelectComponent */

  /***/
  function iquiNgxSrcLibComponentsFormComponentsSelectIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return SelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _option__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../option */
    "../iqui-ngx/src/lib/components/form/components/option/index.ts");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../directives */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");
    /* harmony import */


    var _directives_group_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../directives/group/index */
    "../iqui-ngx/src/lib/components/form/directives/group/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _directives_label_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../directives/label/index */
    "../iqui-ngx/src/lib/components/form/directives/label/index.ts");
    /* harmony import */


    var _directives_select_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../directives/select/index */
    "../iqui-ngx/src/lib/components/form/directives/select/index.ts"); // Select component
    // ----------------------------------------------------------------------------
    // Import dependencies


    function SelectComponent_option_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", i_r2)("selected", i_r2 === ctx_r0._findValue(ctx_r0.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r1.label || option_r1.value);
      }
    }

    var _c0 = ["*"];
    /**
     * Select, renders a select control
     *
     * Usage:
     *
     *  <iqui-select\
     *    [(value)]   = "value"\
     *    [ disabled  = "true|false" ]\
     *    [ class     = "..." ]\
     *    [ ngClass   = "{...}" ]\
     *  >
     *    Label
     *    <iqui-option [value]="'A'" [label]="'Option A'"></iqui-option>
     *    <iqui-option [value]="'B'" [label]="'Option B'"></iqui-option>
     *    <iqui-option [value]="'C'" [label]="'Option C'"></iqui-option>
     *  </iqui-radselectio>
     *
     */

    var SelectComponent = /*#__PURE__*/function (_directives__WEBPACK_4) {
      _inherits(SelectComponent, _directives__WEBPACK_4);

      var _super6 = _createSuper(SelectComponent);

      function SelectComponent() {
        var _this9;

        _classCallCheck(this, SelectComponent);

        _this9 = _super6.apply(this, arguments);
        /**
         * [disabled] binding
         */

        _this9.disabled = false;
        /**
         * [(value)] two-way binding
         */

        _this9.value = null;
        _this9.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this9;
      }

      _createClass(SelectComponent, [{
        key: "_findValue",

        /**
         * Finds index of option containing a given value
         * @param value Value to search for
         * @returns Index of option of same value
         */
        value: function _findValue(value) {
          return _toConsumableArray(this._optionEls).findIndex(function (option) {
            return option.value === value;
          });
        }
        /**
         * Updates value when change detected
         * @param e Event descriptor
         */

      }, {
        key: "_updateValue",
        value: function _updateValue(e) {
          this.valueChange.emit(this.value = _toConsumableArray(this._optionEls)[e.target.value].value);
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as radio container (.form-group)
          'form-group', // Mark as disabled, if disabled (.disabled)
          this.disabled ? 'disabled' : null, // Pass-through host class
          this["class"] || null].join(' ');
        }
      }]);

      return SelectComponent;
    }(_directives__WEBPACK_IMPORTED_MODULE_2__["UsesFormElementDirectives"]);

    SelectComponent.ɵfac = function SelectComponent_Factory(t) {
      return ɵSelectComponent_BaseFactory(t || SelectComponent);
    };

    SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectComponent,
      selectors: [["iqui-select"]],
      contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"], false, _option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._optionEls = _t);
        }
      },
      hostVars: 2,
      hostBindings: function SelectComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        disabled: "disabled",
        ngClass: "ngClass",
        "class": "class",
        value: "value"
      },
      outputs: {
        valueChange: "valueChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 5,
      vars: 7,
      consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], [1, "form-select", 3, "value", "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]],
      template: function SelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "select", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SelectComponent_Template_select_change_3_listener($event) {
            return ctx._updateValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_option_4_Template, 2, 3, "option", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx._findValue(ctx.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.disabled || null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._optionEls);
        }
      },
      directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _directives_label_index__WEBPACK_IMPORTED_MODULE_5__["LabelDirective"], _directives_select_index__WEBPACK_IMPORTED_MODULE_6__["SelectDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: ["[_nghost-%COMP%]     iqui-option {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mb3JtL2NvbXBvbmVudHMvc2VsZWN0L3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2Zvcm0vY29tcG9uZW50cy9zZWxlY3Qvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIGlxdWktb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"]
    });

    var ɵSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SelectComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-select',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, {
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        _optionEls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"], {
            read: _option__WEBPACK_IMPORTED_MODULE_1__["OptionDirective"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/button/index.ts":
  /*!**********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/button/index.ts ***!
    \**********************************************************************/

  /*! exports provided: ButtonDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesButtonIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return ButtonDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var ButtonDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Button directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <button iqui />
     *
     */

    var ButtonDirective = ButtonDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M) {
      _inherits(ButtonDirective, _WEBPACK_IMPORTED_M);

      var _super7 = _createSuper(ButtonDirective);

      function ButtonDirective() {
        _classCallCheck(this, ButtonDirective);

        return _super7.apply(this, arguments);
      }

      return ButtonDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
      return ɵButtonDirective_BaseFactory(t || ButtonDirective);
    };

    ButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: ButtonDirective,
      selectors: [["button"], ["input", "type", "button"], ["input", "type", "submit"], ["input", "type", "reset"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: ButtonDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    ButtonDirective = ButtonDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      className: 'btn',
      bindDisabled: true,
      bindSize: true
    })], ButtonDirective);

    var ɵButtonDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ButtonDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: "button,\n             input[type=\"button\"],\n             input[type=\"submit\"],\n             input[type=\"reset\"]",
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: ButtonDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/checkbox/index.ts":
  /*!************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/checkbox/index.ts ***!
    \************************************************************************/

  /*! exports provided: CheckboxDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesCheckboxIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxDirective", function () {
      return CheckboxDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var CheckboxDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Checkbox directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <input iqui type="checkbox />
     *
     */

    var CheckboxDirective = CheckboxDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M2) {
      _inherits(CheckboxDirective, _WEBPACK_IMPORTED_M2);

      var _super8 = _createSuper(CheckboxDirective);

      function CheckboxDirective() {
        _classCallCheck(this, CheckboxDirective);

        return _super8.apply(this, arguments);
      }

      return CheckboxDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    CheckboxDirective.ɵfac = function CheckboxDirective_Factory(t) {
      return ɵCheckboxDirective_BaseFactory(t || CheckboxDirective);
    };

    CheckboxDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CheckboxDirective,
      selectors: [["input", "type", "checkbox"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: CheckboxDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    CheckboxDirective = CheckboxDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      idAttributeName: 'id',
      bindDisabled: true,
      bindValid: true
    })], CheckboxDirective);

    var ɵCheckboxDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CheckboxDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckboxDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: 'input[type="checkbox"]',
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: CheckboxDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/form/index.ts":
  /*!********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/form/index.ts ***!
    \********************************************************************/

  /*! exports provided: FormDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesFormIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormDirective", function () {
      return FormDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var FormDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Form directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <form iqui></form>
     *
     */

    var FormDirective = FormDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M3) {
      _inherits(FormDirective, _WEBPACK_IMPORTED_M3);

      var _super9 = _createSuper(FormDirective);

      function FormDirective() {
        _classCallCheck(this, FormDirective);

        return _super9.apply(this, arguments);
      }

      _createClass(FormDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          _get(_getPrototypeOf(FormDirective.prototype), "ngOnInit", this).call(this); // Intercept and block submission


          this._el.nativeElement.addEventListener('submit', this.onSubmit);
        }
        /**
         * Form submit event handler
         * @param e Event description
         */

      }, {
        key: "onSubmit",
        value: function onSubmit(e) {
          e.preventDefault = true;
          return e.returnValue = false;
        }
      }]);

      return FormDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    FormDirective.ɵfac = function FormDirective_Factory(t) {
      return ɵFormDirective_BaseFactory(t || FormDirective);
    };

    FormDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: FormDirective,
      selectors: [["form", "iquiForm", ""]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: FormDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    FormDirective = FormDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      isolateId: true
    })], FormDirective);

    var ɵFormDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: 'form[iquiForm]',
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: FormDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/group/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/group/index.ts ***!
    \*********************************************************************/

  /*! exports provided: FormGroupDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesGroupIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return FormGroupDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var FormGroupDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Form container directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <div iquiFormIsolateId></div>
     *
     */

    var FormGroupDirective = FormGroupDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M4) {
      _inherits(FormGroupDirective, _WEBPACK_IMPORTED_M4);

      var _super10 = _createSuper(FormGroupDirective);

      function FormGroupDirective() {
        _classCallCheck(this, FormGroupDirective);

        return _super10.apply(this, arguments);
      }

      return FormGroupDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    FormGroupDirective.ɵfac = function FormGroupDirective_Factory(t) {
      return ɵFormGroupDirective_BaseFactory(t || FormGroupDirective);
    };

    FormGroupDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: FormGroupDirective,
      selectors: [["", "iquiFormGroup", ""], ["", 8, "form-row"], ["", 8, "form-group"], ["", 8, "form-check"], ["", 8, "custom-control"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: FormGroupDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    FormGroupDirective = FormGroupDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      isolateId: true
    })], FormGroupDirective);

    var ɵFormGroupDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormGroupDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: '[iquiFormGroup], .form-row, .form-group, .form-check, .custom-control',
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: FormGroupDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/index.ts":
  /*!***************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/index.ts ***!
    \***************************************************************/

  /*! exports provided: UsesFormElementDirectives, FormElement, FormElementDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsesFormElementDirectives", function () {
      return UsesFormElementDirectives;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormElement", function () {
      return FormElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormElementDirective", function () {
      return FormElementDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../types */
    "../iqui-ngx/src/lib/types/index.ts");

    var FormElementDirective_1;
    /**
     * Defines component as using form directives internally inside its template. Will expose [iquiFormParent] attribute
     * through which the implementing component can pass explicit reference to outside scope parent FormElementDirectiveFormElementDirective
     */

    var UsesFormElementDirectives = /*#__PURE__*/function () {
      function UsesFormElementDirectives( // (Optional) Injected parent directive element
      _formParent) {
        _classCallCheck(this, UsesFormElementDirectives);

        this._formParent = _formParent;
      }
      /**
       * Gets reference to explicitly passed or injected reference to outside scope parent FormElementDirectiveFormElementDirective
       */


      _createClass(UsesFormElementDirectives, [{
        key: "_iquiFormParent",
        get: function get() {
          return this.iquiFormParent || this._formParent;
        }
      }]);

      return UsesFormElementDirectives;
    }();

    UsesFormElementDirectives.ɵfac = function UsesFormElementDirectives_Factory(t) {
      return new (t || UsesFormElementDirectives)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FormElementDirective, 13));
    };

    UsesFormElementDirectives.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: UsesFormElementDirectives,
      inputs: {
        iquiFormParent: "iquiFormParent"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsesFormElementDirectives, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"]
      }], function () {
        return [{
          type: FormElementDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        iquiFormParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * Form element decorator, registers a directive/component as interactive with iquiForm directive
     * @param isolateId If true, will give element and its children their own ID scope
     * @param className Base class og the element, applied if not present and used to generate additional styling subs-classes
     * @param idAttributeName Name if attribute to bind ID value to (commonly used for "for"/"id" association)
     * @param bindDisabled If true, will apply disabled status set to the directive/component or one of its parents
     * @param bindSize  If true, will apply size value set to the directive/component or one of its parents
     * @param bindValid If true, will apply validation status set to the directive/component or one of its parents
     */


    function FormElement(_ref) {
      var _ref$isolateId = _ref.isolateId,
          isolateId = _ref$isolateId === void 0 ? false : _ref$isolateId,
          _ref$className = _ref.className,
          className = _ref$className === void 0 ? null : _ref$className,
          _ref$idAttributeName = _ref.idAttributeName,
          idAttributeName = _ref$idAttributeName === void 0 ? null : _ref$idAttributeName,
          _ref$bindDisabled = _ref.bindDisabled,
          bindDisabled = _ref$bindDisabled === void 0 ? false : _ref$bindDisabled,
          _ref$bindSize = _ref.bindSize,
          bindSize = _ref$bindSize === void 0 ? false : _ref$bindSize,
          _ref$bindValid = _ref.bindValid,
          bindValid = _ref$bindValid === void 0 ? false : _ref$bindValid;
      // tslint:disable-next-line: only-arrow-functions
      return function (directiveClass) {
        directiveClass.__formElementAnnotation = {
          isolateId: isolateId,
          className: className,
          idAttributeName: idAttributeName,
          bindDisabled: bindDisabled,
          bindSize: bindSize,
          bindValid: bindValid
        };
      };
    }
    /**
     * Extendable Form container class
     */


    var FormElementDirective = FormElementDirective_1 = /*#__PURE__*/function () {
      //#endregion
      //#region Constructor
      function FormElementDirective( // Directive host element
      _el, // (Optional) Parent directive element
      _parent) {
        _classCallCheck(this, FormElementDirective);

        this._el = _el;
        this._parent = _parent; //#endregion
        //#region Events

        /**
         * Triggers when element applies changes
         */

        this._applied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * If element needs to initialize as form container even if not contained by another [iqui] element
         */

        this.iquiForm = false;
        /**
         * If element should have its own ID scope
         */

        this.isolateId = true;
        /**
         * [disabled] binding for all child components
         */

        this.disabled = undefined;
        /**
         * Bootstrap theme size to be used by all child component
         */

        this.size = undefined;
        /**
         * Bootstrap validation status
         */

        this.valid = undefined;
      } //#endregion
      //#region Properties

      /**
       * Gets @FormElement decorator's annotations
       */


      _createClass(FormElementDirective, [{
        key: "ngOnInit",
        //#endregion
        //#region Private methods
        value: function ngOnInit() {
          var _this10 = this;

          // Check if explicitly passed parent
          if (this.iquiFormParent) {
            this._parent = this.iquiFormParent;
          } // Subscribe to parent's events


          if (this._parent) {
            // Subscribe to "applied" event
            this._appliedSubscription = this._parent._applied.subscribe(function () {
              // Apply self when parent applied
              _this10.apply();
            });
          } // Apply form control modifications


          this.apply();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Apply form control modifications
          this.apply();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Unsubscribe from parent's events
          if (this._appliedSubscription) {
            this._appliedSubscription.unsubscribe();
          }
        }
        /**
         * Gets if element or any of it's parents is marked as [iqui] and needs to initialize as form container
         */

      }, {
        key: "apply",

        /**
         * Applies bindings and styling to element
         */
        value: function apply() {
          // If (relative) isolateId container, set unique ID for instance
          if (this.shouldInitializeIdScope) {
            this._id = FormElementDirective_1._id++;
          } // Initialize if isolateId form directive, or if has isolateId as parent


          if (this.shouldInitializeBindings) {
            // Set ".iqui" class to allow selecting only if iqui directive applied
            // tslint:disable-next-line: max-line-length
            this._el.nativeElement.classList.add(this.formControlAnnotation.className ? "iqui-".concat(this.formControlAnnotation.className) : 'iqui'); // Set base class


            if (this.formControlAnnotation.className) {
              this._el.nativeElement.classList.add(this.formControlAnnotation.className);
            } // Inherit common container ID to be referenced by any labels


            if (this.formControlAnnotation.idAttributeName) {
              var parentId = this._parentId,
                  idAttributeName = this.formControlAnnotation.idAttributeName;

              if (parentId) {
                var _iterator = _createForOfIteratorHelper(idAttributeName instanceof Array ? idAttributeName : [idAttributeName]),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var id = _step.value;

                    this._el.nativeElement.setAttribute(id, "unique-id-".concat(parentId));
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            } // Inherit disabled status from parent container


            if (this.formControlAnnotation.bindDisabled) {
              this._el.nativeElement.disabled = this._inheritedDisabled;
            } // Inherit size from parent container


            if (this.formControlAnnotation.bindSize) {
              var className = this.formControlAnnotation.className;

              var _iterator2 = _createForOfIteratorHelper(className instanceof Array ? className : [className]),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var name = _step2.value;

                  // Remove existing sizes
                  for (var _i = 0, _Object$values = Object.values(_types__WEBPACK_IMPORTED_MODULE_2__["BootstrapSize"]); _i < _Object$values.length; _i++) {
                    var size = _Object$values[_i];

                    this._el.nativeElement.classList.remove("".concat(name, "-").concat(size));
                  } // Set size


                  var inheritedSize = this._inheritedSize;

                  if (inheritedSize) {
                    this._el.nativeElement.classList.add("".concat(name, "-").concat(inheritedSize));
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } // Inherit validation from parent container


            if (this.formControlAnnotation.bindValid) {
              // Clear existing validation
              this._el.nativeElement.classList.remove('is-valid');

              this._el.nativeElement.classList.remove('is-invalid'); // Set validation


              var inheritedValidation = this._inheritedValid;

              if (inheritedValidation === true || inheritedValidation === false) {
                this._el.nativeElement.classList.add(inheritedValidation ? 'is-valid' : 'is-invalid');
              }
            }
          } // Trigger "applied" event


          this._applied.emit();
        }
      }, {
        key: "formControlAnnotation",
        get: function get() {
          return this.constructor.__formElementAnnotation;
        }
        /**
         * Unique ID for the parent container (if parent found)
         */

      }, {
        key: "_parentId",
        get: function get() {
          return this._parent ? this._parent._id || this._parent._parentId : null;
        }
        /**
         * Unique IDs for all parent containers (if parents found)
         */

      }, {
        key: "_parentIds",
        get: function get() {
          var ids = [];
          var parent = this; // tslint:disable-next-line: no-conditional-assignment

          do {
            if (parent._id) {
              ids.push(parent._id);
            }
          } while (parent = parent._parent);

          return ids;
        }
        /**
         * Gets [disabled] binding, inherited from parent form containers
         */

      }, {
        key: "_inheritedDisabled",
        get: function get() {
          if (this.disabled === true || this.disabled === false) {
            return this.disabled;
          } else {
            return this._parent ? this._parent._inheritedDisabled : false;
          }
        }
        /**
         * Gets [size] binding, inherited from parent form containers
         */

      }, {
        key: "_inheritedSize",
        get: function get() {
          return this.size || this.size === null || (this._parent ? this._parent._inheritedSize : null);
        }
        /**
         * Gets [valid] binding, inherited from parent form containers
         */

      }, {
        key: "_inheritedValid",
        get: function get() {
          if (this.valid === null || this.valid === true || this.valid === false) {
            return this.valid;
          } else {
            return this._parent ? this._parent._inheritedValid : null;
          }
        }
      }, {
        key: "shouldInitializeBindings",
        get: function get() {
          return this.iquiForm !== false || (this._parent ? this._parent.shouldInitializeBindings : false);
        }
        /**
         * Gets if element should initialize its own ID scope
         */

      }, {
        key: "shouldInitializeIdScope",
        get: function get() {
          return this.formControlAnnotation.isolateId && this.isolateId;
        }
      }]);

      return FormElementDirective;
    }(); //#region Static
    // Holds next unique ID to be used


    FormElementDirective._id = 1;

    FormElementDirective.ɵfac = function FormElementDirective_Factory(t) {
      return new (t || FormElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FormElementDirective, 13));
    };

    FormElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: FormElementDirective,
      selectors: [["form", "iquiForm", ""]],
      hostVars: 1,
      hostBindings: function FormElementDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled);
        }
      },
      inputs: {
        iquiForm: "iquiForm",
        iquiFormParent: "iquiFormParent",
        isolateId: "isolateId",
        disabled: "disabled",
        size: "size",
        valid: "valid"
      },
      outputs: {
        _applied: "_applied"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    FormElementDirective = FormElementDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([FormElement({})], FormElementDirective);
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'form[iquiForm]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: FormElementDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        _applied: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        iquiForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        iquiFormParent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        isolateId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['disabled']
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        valid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/input/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/input/index.ts ***!
    \*********************************************************************/

  /*! exports provided: InputDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesInputIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputDirective", function () {
      return InputDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var InputDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Input directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <input iqui type="text" />
     *
     */

    var InputDirective = InputDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M5) {
      _inherits(InputDirective, _WEBPACK_IMPORTED_M5);

      var _super11 = _createSuper(InputDirective);

      function InputDirective() {
        _classCallCheck(this, InputDirective);

        return _super11.apply(this, arguments);
      }

      return InputDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    InputDirective.ɵfac = function InputDirective_Factory(t) {
      return ɵInputDirective_BaseFactory(t || InputDirective);
    };

    InputDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: InputDirective,
      selectors: [["input", 3, "type", ""], ["input", "type", "text"], ["input", "type", "number"], ["input", "type", "search"], ["input", "type", "url"], ["input", "type", "email"], ["input", "type", "tel"], ["input", "type", "password"], ["input", "type", "date"], ["input", "type", "time"], ["input", "type", "datetime-local"], ["input", "type", "week"], ["input", "type", "month"], ["input", "type", "color"], ["input", "type", "file"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: InputDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    InputDirective = InputDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      className: 'form-control',
      idAttributeName: 'id',
      bindDisabled: true,
      bindSize: true,
      bindValid: true
    })], InputDirective);

    var ɵInputDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InputDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: "input:not([type]),\n             input[type=\"text\"],\n             input[type=\"number\"],\n             input[type=\"search\"],\n             input[type=\"url\"],\n             input[type=\"email\"],\n             input[type=\"tel\"],\n             input[type=\"password\"],\n             input[type=\"date\"],\n             input[type=\"time\"],\n             input[type=\"datetime-local\"],\n             input[type=\"week\"],\n             input[type=\"month\"],\n             input[type=\"color\"],\n             input[type=\"file\"]",
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: InputDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/label/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/label/index.ts ***!
    \*********************************************************************/

  /*! exports provided: LabelDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesLabelIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabelDirective", function () {
      return LabelDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var LabelDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Label directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <label iqui>...</label>
     *
     */

    var LabelDirective = LabelDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M6) {
      _inherits(LabelDirective, _WEBPACK_IMPORTED_M6);

      var _super12 = _createSuper(LabelDirective);

      function LabelDirective() {
        _classCallCheck(this, LabelDirective);

        return _super12.apply(this, arguments);
      }

      return LabelDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    LabelDirective.ɵfac = function LabelDirective_Factory(t) {
      return ɵLabelDirective_BaseFactory(t || LabelDirective);
    };

    LabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: LabelDirective,
      selectors: [["label"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: LabelDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    LabelDirective = LabelDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      idAttributeName: 'for'
    })], LabelDirective);

    var ɵLabelDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LabelDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: 'label',
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: LabelDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/radio/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/radio/index.ts ***!
    \*********************************************************************/

  /*! exports provided: RadioDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesRadioIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioDirective", function () {
      return RadioDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var RadioDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Radio directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <input iqui type="radio />
     *
     */

    var RadioDirective = RadioDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M7) {
      _inherits(RadioDirective, _WEBPACK_IMPORTED_M7);

      var _super13 = _createSuper(RadioDirective);

      function RadioDirective() {
        _classCallCheck(this, RadioDirective);

        return _super13.apply(this, arguments);
      }

      _createClass(RadioDirective, [{
        key: "apply",

        /**
         * Applies bindings and styling to element
         */
        value: function apply() {
          // Execute inherited functionality
          _get(_getPrototypeOf(RadioDirective.prototype), "apply", this).call(this); // Apply common name based on grand-parent instead of parent


          var parentIds = this._parentIds;

          if (parentIds.length) {
            this._el.nativeElement.setAttribute('name', "unique-name-".concat(parentIds.length > 1 ? parentIds[1] : parentIds[0]));
          }
        }
      }]);

      return RadioDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    RadioDirective.ɵfac = function RadioDirective_Factory(t) {
      return ɵRadioDirective_BaseFactory(t || RadioDirective);
    };

    RadioDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: RadioDirective,
      selectors: [["input", "type", "radio"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: RadioDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    RadioDirective = RadioDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      idAttributeName: 'id',
      bindDisabled: true,
      bindValid: true
    })], RadioDirective);

    var ɵRadioDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RadioDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RadioDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: 'input[type="radio"]',
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: RadioDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/select/index.ts":
  /*!**********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/select/index.ts ***!
    \**********************************************************************/

  /*! exports provided: SelectDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesSelectIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectDirective", function () {
      return SelectDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var SelectDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Select directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <select><option /></select>
     *
     */

    var SelectDirective = SelectDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M8) {
      _inherits(SelectDirective, _WEBPACK_IMPORTED_M8);

      var _super14 = _createSuper(SelectDirective);

      function SelectDirective() {
        _classCallCheck(this, SelectDirective);

        return _super14.apply(this, arguments);
      }

      return SelectDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    SelectDirective.ɵfac = function SelectDirective_Factory(t) {
      return ɵSelectDirective_BaseFactory(t || SelectDirective);
    };

    SelectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SelectDirective,
      selectors: [["select"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: SelectDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    SelectDirective = SelectDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      className: 'custom-select',
      idAttributeName: 'id',
      bindDisabled: true,
      bindSize: true,
      bindValid: true
    })], SelectDirective);

    var ɵSelectDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SelectDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: "select",
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: SelectDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts":
  /*!************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/directives/textarea/index.ts ***!
    \************************************************************************/

  /*! exports provided: TextareaDirective */

  /***/
  function iquiNgxSrcLibComponentsFormDirectivesTextareaIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextareaDirective", function () {
      return TextareaDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "../../node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");

    var TextareaDirective_1; // Form directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Textarea directive
     *
     * Usage:
     *
     *  TODO: ...
     *  <textarea></textarea>
     *
     */

    var TextareaDirective = TextareaDirective_1 = /*#__PURE__*/function (_WEBPACK_IMPORTED_M9) {
      _inherits(TextareaDirective, _WEBPACK_IMPORTED_M9);

      var _super15 = _createSuper(TextareaDirective);

      function TextareaDirective() {
        _classCallCheck(this, TextareaDirective);

        return _super15.apply(this, arguments);
      }

      return TextareaDirective;
    }(___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"]);

    TextareaDirective.ɵfac = function TextareaDirective_Factory(t) {
      return ɵTextareaDirective_BaseFactory(t || TextareaDirective);
    };

    TextareaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: TextareaDirective,
      selectors: [["textarea"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
        useExisting: TextareaDirective_1
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    TextareaDirective = TextareaDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(___WEBPACK_IMPORTED_MODULE_2__["FormElement"])({
      className: 'form-control',
      idAttributeName: 'id',
      bindDisabled: true,
      bindSize: true,
      bindValid: true
    })], TextareaDirective);

    var ɵTextareaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TextareaDirective);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextareaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: "textarea",
          providers: [{
            provide: ___WEBPACK_IMPORTED_MODULE_2__["FormElementDirective"],
            useExisting: TextareaDirective_1
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/form/index.ts":
  /*!****************************************************!*\
    !*** ../iqui-ngx/src/lib/components/form/index.ts ***!
    \****************************************************/

  /*! exports provided: FormElementDirective, UsesFormElementDirectives, FormDirective, FormGroupDirective, ButtonDirective, LabelDirective, TextareaDirective, InputDirective, CheckboxDirective, RadioDirective, SelectDirective, InputComponent, InputType, CheckboxComponent, OptionDirective, RadioComponent, SelectComponent, FormModule */

  /***/
  function iquiNgxSrcLibComponentsFormIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return FormModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directives */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormElementDirective", function () {
      return _directives__WEBPACK_IMPORTED_MODULE_3__["FormElementDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UsesFormElementDirectives", function () {
      return _directives__WEBPACK_IMPORTED_MODULE_3__["UsesFormElementDirectives"];
    });
    /* harmony import */


    var _directives_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directives/form */
    "../iqui-ngx/src/lib/components/form/directives/form/index.ts");
    /* harmony import */


    var _directives_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directives/group */
    "../iqui-ngx/src/lib/components/form/directives/group/index.ts");
    /* harmony import */


    var _directives_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directives/button */
    "../iqui-ngx/src/lib/components/form/directives/button/index.ts");
    /* harmony import */


    var _directives_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./directives/label */
    "../iqui-ngx/src/lib/components/form/directives/label/index.ts");
    /* harmony import */


    var _directives_textarea__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./directives/textarea */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _directives_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./directives/input */
    "../iqui-ngx/src/lib/components/form/directives/input/index.ts");
    /* harmony import */


    var _directives_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./directives/checkbox */
    "../iqui-ngx/src/lib/components/form/directives/checkbox/index.ts");
    /* harmony import */


    var _directives_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./directives/radio */
    "../iqui-ngx/src/lib/components/form/directives/radio/index.ts");
    /* harmony import */


    var _directives_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/select */
    "../iqui-ngx/src/lib/components/form/directives/select/index.ts");
    /* harmony import */


    var _components_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/input */
    "../iqui-ngx/src/lib/components/form/components/input/index.ts");
    /* harmony import */


    var _components_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/checkbox */
    "../iqui-ngx/src/lib/components/form/components/checkbox/index.ts");
    /* harmony import */


    var _components_option__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/option */
    "../iqui-ngx/src/lib/components/form/components/option/index.ts");
    /* harmony import */


    var _components_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/radio */
    "../iqui-ngx/src/lib/components/form/components/radio/index.ts");
    /* harmony import */


    var _components_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/select */
    "../iqui-ngx/src/lib/components/form/components/select/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormDirective", function () {
      return _directives_form__WEBPACK_IMPORTED_MODULE_4__["FormDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return _directives_group__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return _directives_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LabelDirective", function () {
      return _directives_label__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TextareaDirective", function () {
      return _directives_textarea__WEBPACK_IMPORTED_MODULE_8__["TextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputDirective", function () {
      return _directives_input__WEBPACK_IMPORTED_MODULE_9__["InputDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxDirective", function () {
      return _directives_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioDirective", function () {
      return _directives_radio__WEBPACK_IMPORTED_MODULE_11__["RadioDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectDirective", function () {
      return _directives_select__WEBPACK_IMPORTED_MODULE_12__["SelectDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return _components_input__WEBPACK_IMPORTED_MODULE_13__["InputComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputType", function () {
      return _components_input__WEBPACK_IMPORTED_MODULE_13__["InputType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
      return _components_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OptionDirective", function () {
      return _components_option__WEBPACK_IMPORTED_MODULE_15__["OptionDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioComponent", function () {
      return _components_radio__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return _components_select__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"];
    }); // Import dependencies
    // Import and (re)export element directives base
    // Import and (re)export element directives
    // Import and (re)export element components

    /**
     * IQ UI NGX Elements' Form elements module
     * Implements components that are mainly meant to be used for user input within forms
     */


    var FormModule = function FormModule() {
      _classCallCheck(this, FormModule);
    };

    FormModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormModule
    });
    FormModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FormModule_Factory(t) {
        return new (t || FormModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["TextFieldModule"]], // Export dependency modules
      _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["TextFieldModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormModule, {
        declarations: [_directives__WEBPACK_IMPORTED_MODULE_3__["FormElementDirective"], _directives_form__WEBPACK_IMPORTED_MODULE_4__["FormDirective"], _directives_group__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _directives_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _directives_label__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"], _directives_textarea__WEBPACK_IMPORTED_MODULE_8__["TextareaDirective"], _directives_input__WEBPACK_IMPORTED_MODULE_9__["InputDirective"], _directives_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxDirective"], _directives_radio__WEBPACK_IMPORTED_MODULE_11__["RadioDirective"], _directives_select__WEBPACK_IMPORTED_MODULE_12__["SelectDirective"], _components_input__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], _components_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"], _components_radio__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"], _components_select__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"], _components_option__WEBPACK_IMPORTED_MODULE_15__["OptionDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["TextFieldModule"]],
        exports: [// Export dependency modules
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["TextFieldModule"], // Export child components
        _directives__WEBPACK_IMPORTED_MODULE_3__["FormElementDirective"], _directives_form__WEBPACK_IMPORTED_MODULE_4__["FormDirective"], _directives_group__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _directives_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _directives_label__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"], _directives_textarea__WEBPACK_IMPORTED_MODULE_8__["TextareaDirective"], _directives_input__WEBPACK_IMPORTED_MODULE_9__["InputDirective"], _directives_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxDirective"], _directives_radio__WEBPACK_IMPORTED_MODULE_11__["RadioDirective"], _directives_select__WEBPACK_IMPORTED_MODULE_12__["SelectDirective"], _components_input__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], _components_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"], _components_radio__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"], _components_select__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"], _components_option__WEBPACK_IMPORTED_MODULE_15__["OptionDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["TextFieldModule"]],
          declarations: [_directives__WEBPACK_IMPORTED_MODULE_3__["FormElementDirective"], _directives_form__WEBPACK_IMPORTED_MODULE_4__["FormDirective"], _directives_group__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _directives_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _directives_label__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"], _directives_textarea__WEBPACK_IMPORTED_MODULE_8__["TextareaDirective"], _directives_input__WEBPACK_IMPORTED_MODULE_9__["InputDirective"], _directives_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxDirective"], _directives_radio__WEBPACK_IMPORTED_MODULE_11__["RadioDirective"], _directives_select__WEBPACK_IMPORTED_MODULE_12__["SelectDirective"], _components_input__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], _components_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"], _components_radio__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"], _components_select__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"], _components_option__WEBPACK_IMPORTED_MODULE_15__["OptionDirective"]],
          exports: [// Export dependency modules
          _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_2__["TextFieldModule"], // Export child components
          _directives__WEBPACK_IMPORTED_MODULE_3__["FormElementDirective"], _directives_form__WEBPACK_IMPORTED_MODULE_4__["FormDirective"], _directives_group__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _directives_button__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"], _directives_label__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"], _directives_textarea__WEBPACK_IMPORTED_MODULE_8__["TextareaDirective"], _directives_input__WEBPACK_IMPORTED_MODULE_9__["InputDirective"], _directives_checkbox__WEBPACK_IMPORTED_MODULE_10__["CheckboxDirective"], _directives_radio__WEBPACK_IMPORTED_MODULE_11__["RadioDirective"], _directives_select__WEBPACK_IMPORTED_MODULE_12__["SelectDirective"], _components_input__WEBPACK_IMPORTED_MODULE_13__["InputComponent"], _components_checkbox__WEBPACK_IMPORTED_MODULE_14__["CheckboxComponent"], _components_radio__WEBPACK_IMPORTED_MODULE_16__["RadioComponent"], _components_select__WEBPACK_IMPORTED_MODULE_17__["SelectComponent"], _components_option__WEBPACK_IMPORTED_MODULE_15__["OptionDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/_showcase.ts":
  /*!**************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/_showcase.ts ***!
    \**************************************************************/

  /*! exports provided: DeclareShowcaseComponent, Copy2ClipboardShowcaseComponent, TooltipShowcaseComponent, DropdownShowcaseComponent, CollapseShowcaseComponent, ModalShowcaseComponent, ToastShowcaseComponent, BookmarkableShowcaseComponent, FunctionalShowcaseModule */

  /***/
  function iquiNgxSrcLibComponentsFunctional_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FunctionalShowcaseModule", function () {
      return FunctionalShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _declare_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./declare/_showcase */
    "../iqui-ngx/src/lib/components/functional/declare/_showcase/index.ts");
    /* harmony import */


    var _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./copy2clipboard/_showcase */
    "../iqui-ngx/src/lib/components/functional/copy2clipboard/_showcase/index.ts");
    /* harmony import */


    var _tooltip_showcase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tooltip/_showcase */
    "../iqui-ngx/src/lib/components/functional/tooltip/_showcase/index.ts");
    /* harmony import */


    var _dropdown_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dropdown/_showcase */
    "../iqui-ngx/src/lib/components/functional/dropdown/_showcase/index.ts");
    /* harmony import */


    var _collapse_showcase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./collapse/_showcase */
    "../iqui-ngx/src/lib/components/functional/collapse/_showcase/index.ts");
    /* harmony import */


    var _modal_showcase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modal/_showcase */
    "../iqui-ngx/src/lib/components/functional/modal/_showcase/index.ts");
    /* harmony import */


    var _toast_showcase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./toast/_showcase */
    "../iqui-ngx/src/lib/components/functional/toast/_showcase/index.ts");
    /* harmony import */


    var _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./bookmarkable/_showcase */
    "../iqui-ngx/src/lib/components/functional/bookmarkable/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeclareShowcaseComponent", function () {
      return _declare_showcase__WEBPACK_IMPORTED_MODULE_6__["DeclareShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardShowcaseComponent", function () {
      return _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_7__["Copy2ClipboardShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipShowcaseComponent", function () {
      return _tooltip_showcase__WEBPACK_IMPORTED_MODULE_8__["TooltipShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownShowcaseComponent", function () {
      return _dropdown_showcase__WEBPACK_IMPORTED_MODULE_9__["DropdownShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapseShowcaseComponent", function () {
      return _collapse_showcase__WEBPACK_IMPORTED_MODULE_10__["CollapseShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalShowcaseComponent", function () {
      return _modal_showcase__WEBPACK_IMPORTED_MODULE_11__["ModalShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastShowcaseComponent", function () {
      return _toast_showcase__WEBPACK_IMPORTED_MODULE_12__["ToastShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableShowcaseComponent", function () {
      return _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_13__["BookmarkableShowcaseComponent"];
    }); // Functional Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components and (re)export components
    // IQ UI NGX Elements' Functional elements module


    var FunctionalShowcaseModule = function FunctionalShowcaseModule() {
      _classCallCheck(this, FunctionalShowcaseModule);
    };

    FunctionalShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FunctionalShowcaseModule
    });
    FunctionalShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FunctionalShowcaseModule_Factory(t) {
        return new (t || FunctionalShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"]], // Export dependency modules
      _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FunctionalShowcaseModule, {
        declarations: [_declare_showcase__WEBPACK_IMPORTED_MODULE_6__["DeclareShowcaseComponent"], _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_7__["Copy2ClipboardShowcaseComponent"], _tooltip_showcase__WEBPACK_IMPORTED_MODULE_8__["TooltipShowcaseComponent"], _dropdown_showcase__WEBPACK_IMPORTED_MODULE_9__["DropdownShowcaseComponent"], _collapse_showcase__WEBPACK_IMPORTED_MODULE_10__["CollapseShowcaseComponent"], _modal_showcase__WEBPACK_IMPORTED_MODULE_11__["ModalShowcaseComponent"], _toast_showcase__WEBPACK_IMPORTED_MODULE_12__["ToastShowcaseComponent"], _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_13__["BookmarkableShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"]],
        exports: [// Export dependency modules
        _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"], // Export child components
        _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_7__["Copy2ClipboardShowcaseComponent"], _tooltip_showcase__WEBPACK_IMPORTED_MODULE_8__["TooltipShowcaseComponent"], _dropdown_showcase__WEBPACK_IMPORTED_MODULE_9__["DropdownShowcaseComponent"], _collapse_showcase__WEBPACK_IMPORTED_MODULE_10__["CollapseShowcaseComponent"], _modal_showcase__WEBPACK_IMPORTED_MODULE_11__["ModalShowcaseComponent"], _toast_showcase__WEBPACK_IMPORTED_MODULE_12__["ToastShowcaseComponent"], _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_13__["BookmarkableShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionalShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"]],
          declarations: [_declare_showcase__WEBPACK_IMPORTED_MODULE_6__["DeclareShowcaseComponent"], _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_7__["Copy2ClipboardShowcaseComponent"], _tooltip_showcase__WEBPACK_IMPORTED_MODULE_8__["TooltipShowcaseComponent"], _dropdown_showcase__WEBPACK_IMPORTED_MODULE_9__["DropdownShowcaseComponent"], _collapse_showcase__WEBPACK_IMPORTED_MODULE_10__["CollapseShowcaseComponent"], _modal_showcase__WEBPACK_IMPORTED_MODULE_11__["ModalShowcaseComponent"], _toast_showcase__WEBPACK_IMPORTED_MODULE_12__["ToastShowcaseComponent"], _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_13__["BookmarkableShowcaseComponent"]],
          exports: [// Export dependency modules
          _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], ___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"], // Export child components
          _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_7__["Copy2ClipboardShowcaseComponent"], _tooltip_showcase__WEBPACK_IMPORTED_MODULE_8__["TooltipShowcaseComponent"], _dropdown_showcase__WEBPACK_IMPORTED_MODULE_9__["DropdownShowcaseComponent"], _collapse_showcase__WEBPACK_IMPORTED_MODULE_10__["CollapseShowcaseComponent"], _modal_showcase__WEBPACK_IMPORTED_MODULE_11__["ModalShowcaseComponent"], _toast_showcase__WEBPACK_IMPORTED_MODULE_12__["ToastShowcaseComponent"], _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_13__["BookmarkableShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/bookmarkable/_showcase/index.ts":
  /*!*********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/bookmarkable/_showcase/index.ts ***!
    \*********************************************************************************/

  /*! exports provided: BookmarkableShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalBookmarkable_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableShowcaseComponent", function () {
      return BookmarkableShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _functional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../functional */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts"); // Bookmarkable directive showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules


    var _c0 = function _c0() {
      return ["scss"];
    };

    var _c1 = function _c1() {
      return ["typescript"];
    }; // Showcase component


    var BookmarkableShowcaseComponent = function BookmarkableShowcaseComponent() {
      _classCallCheck(this, BookmarkableShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [_functional__WEBPACK_IMPORTED_MODULE_1__["FunctionalModule"]]; // Playground context

      this.context = {
        BookmarkA: 'bookmark-a',
        BookmarkB: 'bookmark-b',
        BookmarkC: 'bookmark-c'
      };
    };

    BookmarkableShowcaseComponent.ɵfac = function BookmarkableShowcaseComponent_Factory(t) {
      return new (t || BookmarkableShowcaseComponent)();
    };

    BookmarkableShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BookmarkableShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 20,
      vars: 7,
      consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]],
      template: function BookmarkableShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Bookmarkable Directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nUses URL fragment to persist page position to the parent element through reloads and link shares ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Styling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "iqui-highlightjs", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "        // Bookmark-able vertical offset (for example, if fixed header and link needs to be scrolled with an offset to show below it)\n        .iquiBookmarkable.scrolling {\n          position: relative;\n          display: inline-block; // Making sure padding and margin can apply\n          padding-top: 60px;     // Offset height\n          margin-top: -60px;     // Offset height\n        }\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "iqui-playground", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    <!-- Bookmarkable link -->\n    <a [iquiBookmarkable]=\"context.BookmarkA\" [link]=\"true\" [copy]=\"true\">\n      This link will get persisted in the URL and copy-2-clipboard when pressed\n    </a>\n\n    <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    <hr />\n\n    <!-- Bookmarkable link -->\n    <a [iquiBookmarkable]=\"context.BookmarkB\" [link]=\"true\" [copy]=\"false\">\n      This link will only get persisted in the URL when pressed\n    </a>\n\n    <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    <hr />\n\n    <!-- Bookmarkable link -->\n    <a [iquiBookmarkable]=\"context.BookmarkC\" [link]=\"false\" [copy]=\"true\">\n      This link will only copy-2-clipboard when pressed\n    </a>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BookmarkableService");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "iqui-highlightjs", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "        // To scroll to a [iquiBookmarkable] programmatically, inject and use the BookmarkableService\n        import { BookmarkableService } from '@inquest/iqui-ngx'\n        class MyComponent {\n          \n          constructor (private _bookmarkable: BookmarkableService) {\n            // Scroll to element\n            this._bookmarkable.scrollToValue('bookmark-a');\n            // Scroll to element referenced by URL fragment\n            this._bookmarkable.scrollToFragment();\n          }\n\n        }\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        }
      },
      directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_2__["HighlightJsComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_2__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC9ib29rbWFya2FibGUvX3Nob3djYXNlL3N0eWxlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookmarkableShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/bookmarkable/index.ts":
  /*!***********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/bookmarkable/index.ts ***!
    \***********************************************************************/

  /*! exports provided: BookmarkableDirective, BookmarkableService */

  /***/
  function iquiNgxSrcLibComponentsFunctionalBookmarkableIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableDirective", function () {
      return BookmarkableDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableService", function () {
      return BookmarkableService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services */
    "../iqui-ngx/src/lib/services/index.ts"); // Bookmark-able directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Bookmarkable directive, makes any HTML element's bookmark-able through a URL fragment
     *
     * Usage:
     *
     * <a iquiBookmarkable="uniqueId" [link]="true" [copy]="true">
     *   Share
     * </a>
     *
     */


    var BookmarkableDirective = /*#__PURE__*/function () {
      function BookmarkableDirective(_service, _route, _el, _zone, _clipboard) {
        var _this11 = this;

        _classCallCheck(this, BookmarkableDirective);

        this._service = _service;
        this._route = _route;
        this._el = _el;
        this._zone = _zone;
        this._clipboard = _clipboard;
        /**
         * Holds unique fragment name to be used in the URL
         */
        // tslint:disable-next-line: no-input-rename

        this.value = undefined;
        /**
         * If applied to an anchor element, will manage [href] attribute to link to the URL fragment
         */

        this.link = true;
        /**
         * If page should scroll to the element when matched by URL fragment.
         * This allows multiple elements with same fragment name, where only one is scrolled to ...
         */

        this.scroll = true;
        /**
         * If on click, the component should copy the bookmark-able url to clipboard
         */

        this.copy = true; // Subscribe to fragment changes

        this._route.fragment.subscribe(function () {
          // Check fragment and scroll into view
          if (_this11.checkReferencedByUrlFragment()) {
            _this11._scrollIntoViewOnceStable();
          }
        });
      }

      _createClass(BookmarkableDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          // Register with central service
          this._service.register(this.value, this); // Set class


          this._el.nativeElement.classList.add('iquiBookmarkable'); // Set HREF attribute value


          this._updateHrefAttribute(); // Handle click


          if (this.copy) {
            this._el.nativeElement.addEventListener('click', function () {
              // Set HREF attribute value
              _this12._updateHrefAttribute(); // Copy full URL to clipboard


              _this12._clipboard.copy2Clipboard(_this12._composeUrl());
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Check fragment and scroll into view
          if (this.checkReferencedByUrlFragment()) {
            this._scrollIntoViewOnceStable();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Re-register with central service
          this._service.unregister(this.value);

          this._service.register(changes.value, this); // Set HREF attribute value


          this._updateHrefAttribute();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Un-register from central service
          this._service.unregister(this.value);
        }
        /**
         * Updates HREF attribute value
         */

      }, {
        key: "_updateHrefAttribute",
        value: function _updateHrefAttribute() {
          // Set anchor [href] value
          if (this.link && this._el.nativeElement.tagName.toLowerCase() === 'a') {
            this._el.nativeElement.href = this._composeUrl();
          }
        }
        /**
         * Composes a full URL to the bookmark-able element
         */

      }, {
        key: "_composeUrl",
        value: function _composeUrl() {
          // tslint:disable-next-line: max-line-length
          var pathname = window.location.pathname,
              path = pathname.length && (pathname[0] === '/' ? pathname.substr(1) : pathname),
              hash = window.location.hash,
              fragment = hash.length && hash[0] === '#' ? hash.substr(1) : hash,
              postFragment = (fragment === null || fragment === void 0 ? void 0 : fragment.split('#').length) > 1 ? "#".concat(fragment.split('#').slice(1).join('#')) : '';
          return "".concat(window.location.protocol, "//").concat(window.location.host, "/").concat(path, "#").concat(this.value).concat(postFragment);
        }
        /**
         * Scrolls into view once page is stable
         */

      }, {
        key: "_scrollIntoViewOnceStable",
        value: function _scrollIntoViewOnceStable() {
          var _this13 = this;

          // Check if element should be scrolled to
          if (this.scroll) {
            // Wait until stable
            var observable = this._zone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(200);
            })).subscribe(function () {
              // Unsubscribe
              observable.unsubscribe(); // Scroll into view

              _this13._zone.runTask(function () {
                _this13.scrollIntoView();
              });
            });
          }
        }
        /**
         * Checks if this instance is being referenced by the URL fragment
         */

      }, {
        key: "checkReferencedByUrlFragment",
        value: function checkReferencedByUrlFragment() {
          var hash = window.location.hash,
              fragment = hash.length && hash[0] === '#' ? hash.substr(1) : hash,
              target = fragment.split('#')[0];
          return this.value && target === this.value;
        }
        /**
         * Scrolls host element into view
         */

      }, {
        key: "scrollIntoView",
        value: function scrollIntoView() {
          var _this14 = this;

          // Scroll into view
          setTimeout(function () {
            _this14._el.nativeElement.classList.add('scrolling');

            _this14._el.nativeElement.scrollIntoView({
              block: 'start',
              inline: 'nearest',
              behavior: 'smooth'
            });

            _this14._el.nativeElement.classList.remove('scrolling');
          });
        }
      }]);

      return BookmarkableDirective;
    }();

    BookmarkableDirective.ɵfac = function BookmarkableDirective_Factory(t) {
      return new (t || BookmarkableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](BookmarkableService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"]));
    };

    BookmarkableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: BookmarkableDirective,
      selectors: [["", "iquiBookmarkable", ""]],
      inputs: {
        value: ["iquiBookmarkable", "value"],
        link: "link",
        scroll: "scroll",
        copy: "copy"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookmarkableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
          selector: '[iquiBookmarkable]'
        }]
      }], function () {
        return [{
          type: BookmarkableService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_4__["ClipboardService"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
          args: ['iquiBookmarkable']
        }],
        link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        scroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        copy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      });
    })();
    /**
     * Central service providing manipulation of BookmarkableDirective instances
     */


    var BookmarkableService = /*#__PURE__*/function () {
      function BookmarkableService() {
        _classCallCheck(this, BookmarkableService);
      }

      _createClass(BookmarkableService, [{
        key: "register",

        /**
         * Registers a BookmarkableDirective instance
         * @param value Currently set value of the BookmarkableDirective instance
         * @param instance BookmarkableDirective instance to register
         */
        value: function register(value, instance) {
          BookmarkableService.bookmarkables[value] = instance;
        }
        /**
         * Un-registers a BookmarkableDirective instance
         * @param value Value the BookmarkableDirective instance is registered under
         */

      }, {
        key: "unregister",
        value: function unregister(value) {
          delete BookmarkableService.bookmarkables[value];
        }
        /**
         * Scrolls to BookmarkableDirective instance referenced by the URL fragment
         * @param value Value the BookmarkableDirective instance is registered under
         */

      }, {
        key: "scrollToValue",
        value: function scrollToValue(value) {
          if (BookmarkableService.bookmarkables[value]) {
            BookmarkableService.bookmarkables[value].scrollIntoView();
          }
        }
        /**
         * Scrolls to BookmarkableDirective instance referenced by the URL fragment
         */

      }, {
        key: "scrollToFragment",
        value: function scrollToFragment() {
          for (var _i2 = 0, _Object$values2 = Object.values(BookmarkableService.bookmarkables); _i2 < _Object$values2.length; _i2++) {
            var instance = _Object$values2[_i2];

            if (instance.checkReferencedByUrlFragment()) {
              instance.scrollIntoView();
            }
          }
        }
      }]);

      return BookmarkableService;
    }();
    /**
     * Holds references to all BookmarkableDirective instances by their set value
     */


    BookmarkableService.bookmarkables = {};

    BookmarkableService.ɵfac = function BookmarkableService_Factory(t) {
      return new (t || BookmarkableService)();
    };

    BookmarkableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: BookmarkableService,
      factory: BookmarkableService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](BookmarkableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/collapse/_showcase/index.ts":
  /*!*****************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/collapse/_showcase/index.ts ***!
    \*****************************************************************************/

  /*! exports provided: CollapseShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalCollapse_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapseShowcaseComponent", function () {
      return CollapseShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Collapse component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var CollapseShowcaseComponent = function CollapseShowcaseComponent() {
      _classCallCheck(this, CollapseShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_1__["FunctionalModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]]; // Playground context

      this.context = {};
    };

    CollapseShowcaseComponent.ɵfac = function CollapseShowcaseComponent_Factory(t) {
      return new (t || CollapseShowcaseComponent)();
    };

    CollapseShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollapseShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function CollapseShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Collapse Directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nExpands/Collapses a target element ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"one\" [toggleOnEvent]=\"['click', 'keypress']\">\n      Toggle #1 by element reference\n    </iqui-button>\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"'.two'\" [toggleOnEvent]=\"['click', 'keypress']\">\n      Toggle #2 by CSS selector\n    </iqui-button>\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"[one, two]\" [showOnEvent]=\"['focusin']\" [hideOnEvent]=\"['focusout']\">\n      Show/Hide #1 & #2 on Focus\n    </iqui-button>\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"[one, two]\" [showOnEvent]=\"['mouseover']\" [hideOnEvent]=\"['mouseout']\">\n      Show/Hide #1 & #2 on Hover\n    </iqui-button>\n\n    <div #one class=\"m-1 card one\">\n      <div class=\"card-body\"> I am ONE! </div>\n    </div>\n    <div #two class=\"m-1 card two\">\n      <div class=\"card-body\"> I am TWO! </div>\n    </div>\n\n    <br /><br />\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [showTarget]=\"first\" [showOnEvent]=\"['click', 'keypress']\"\n      [hideTarget]=\"'.accordion'\" [hideOnEvent]=\"['click', 'keypress']\">\n      First\n    </iqui-button>\n    <iqui-button class=\"m-1\" iquiCollapse\n      [showTarget]=\"second\" [showOnEvent]=\"['click', 'keypress']\"\n      [hideTarget]=\"'.accordion'\" [hideOnEvent]=\"['click', 'keypress']\">\n      Second\n    </iqui-button>\n    <iqui-button class=\"m-1\" iquiCollapse\n      [showTarget]=\"third\" [showOnEvent]=\"['click', 'keypress']\"\n      [hideTarget]=\"'.accordion'\" [hideOnEvent]=\"['click', 'keypress']\">\n      Third \n    </iqui-button>\n\n    <div #first class=\"m-1 card accordion\">\n      <div class=\"card-body\"> I am FIRST! </div>\n    </div>\n    <div #second class=\"m-1 card accordion\">\n      <div class=\"card-body\"> I am SECOND! </div>\n    </div>\n    <div #third class=\"m-1 card accordion\">\n      <div class=\"card-body\"> I am THIRD! </div>\n    </div>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC9jb2xsYXBzZS9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/collapse/index.ts":
  /*!*******************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/collapse/index.ts ***!
    \*******************************************************************/

  /*! exports provided: CollapseDirective */

  /***/
  function iquiNgxSrcLibComponentsFunctionalCollapseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapseDirective", function () {
      return CollapseDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Collapse directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Collapse directive, provides management of collapse/expanded status of the components
     *
     * Usage:
     *
     *  <anything\
     *    [iquiCollapse]\
     *    [toggleTarget] = "[ref] | ref |'.selector'"\
     *    [toggleOnEvent]= "['eventName] | 'eventName'"\
     *    [showTarget]   = "[ref] | ref |'.selector'"\
     *    [showOnEvent]  = "['eventName] | 'eventName'"\
     *    [hideTarget]   = "[ref] | ref |'.selector'"\
     *    [hideOnEvent]  = "['eventName] | 'eventName'">\
     *    Content
     *  </anything>
     *
     */


    var CollapseDirective = /*#__PURE__*/function () {
      function CollapseDirective(_el) {
        _classCallCheck(this, CollapseDirective);

        this._el = _el;
        /**
         * Holds references to all event handlers currently subscribed to events
         */

        this._subscribedEvents = {};
        /**
         * Holds target element references
         */

        this._toggleTargetElements = [];
        /**
         * Holds target element references for only show event
         */

        this._targetShowElements = [];
        /**
         * Holds target element references for only hide event
         */

        this._targetHideElements = [];
      }

      _createClass(CollapseDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Initialize events
          this._clearInitializedEvents();

          this._initializeEvents(); // Initialize targets


          this._clearAllInitializedTargets();

          this._initializeAllTargets();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          // Initialize events
          this._clearInitializedEvents();

          this._initializeEvents(); // Initialize targets


          this._clearAllInitializedTargets();

          this._initializeAllTargets();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Clear previously subscribed events
          this._clearInitializedEvents(); // Clear previously initialized target elements


          this._clearAllInitializedTargets();
        }
        /**
         * Initializes lists of monitored events and subscribes to those events
         */

      }, {
        key: "_initializeEvents",
        value: function _initializeEvents() {
          var _this15 = this;

          // Initialize events lists
          if (!this.toggleOnEvent && !this.showOnEvent && !this.hideOnEvent) {
            this.toggleOnEvent = ['click', 'keypress'];
          } // Subscribe hide events


          if (this.hideOnEvent) {
            var _iterator3 = _createForOfIteratorHelper(this.hideOnEvent instanceof Array ? this.hideOnEvent : [this.hideOnEvent]),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var eventName = _step3.value;

                var eventHandlerFn = function eventHandlerFn() {
                  for (var _i3 = 0, _arr = [].concat(_toConsumableArray(_this15._toggleTargetElements), _toConsumableArray(_this15._targetHideElements)); _i3 < _arr.length; _i3++) {
                    var target = _arr[_i3];
                    target.classList.remove('show');
                  }
                };

                this._subscribedEvents[eventName] = eventHandlerFn;

                this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          } // Subscribe toggle events


          if (this.toggleOnEvent) {
            var _iterator4 = _createForOfIteratorHelper(this.toggleOnEvent instanceof Array ? this.toggleOnEvent : [this.toggleOnEvent]),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _eventName = _step4.value;

                var _eventHandlerFn = function _eventHandlerFn() {
                  var _iterator5 = _createForOfIteratorHelper(_this15._toggleTargetElements),
                      _step5;

                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var target = _step5.value;
                      target.classList.toggle('show');
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                };

                this._subscribedEvents[_eventName] = _eventHandlerFn;

                this._el.nativeElement.addEventListener(_eventName, _eventHandlerFn);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          } // Subscribe show events


          if (this.showOnEvent) {
            var _iterator6 = _createForOfIteratorHelper(this.showOnEvent instanceof Array ? this.showOnEvent : [this.showOnEvent]),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _eventName2 = _step6.value;

                var _eventHandlerFn2 = function _eventHandlerFn2() {
                  for (var _i4 = 0, _arr2 = [].concat(_toConsumableArray(_this15._toggleTargetElements), _toConsumableArray(_this15._targetShowElements)); _i4 < _arr2.length; _i4++) {
                    var target = _arr2[_i4];
                    target.classList.add('show');
                  }
                };

                this._subscribedEvents[_eventName2] = _eventHandlerFn2;

                this._el.nativeElement.addEventListener(_eventName2, _eventHandlerFn2);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }
        /**
         * Clears previously subscribed events
         */

      }, {
        key: "_clearInitializedEvents",
        value: function _clearInitializedEvents() {
          for (var _i5 = 0, _Object$keys = Object.keys(this._subscribedEvents); _i5 < _Object$keys.length; _i5++) {
            var eventName = _Object$keys[_i5];

            this._el.nativeElement.removeEventListener(eventName, this._subscribedEvents[eventName]);
          }
        }
        /**
         * De-initializes previously initialized target elements and initializes new ones on all types
         */

      }, {
        key: "_initializeAllTargets",
        value: function _initializeAllTargets() {
          // Check if any target specified
          if (!this.toggleTarget && !this.showTarget && !this.hideTarget) {
            // Initialize self as target
            this._initializeTargets(undefined);
          } else {
            // Initialize explicit targets
            if (this.toggleTarget) {
              this._toggleTargetElements = this._initializeTargets(this.toggleTarget);
            }

            if (this.showTarget) {
              this._targetShowElements = this._initializeTargets(this.showTarget);
            }

            if (this.hideTarget) {
              this._targetHideElements = this._initializeTargets(this.hideTarget);
            }
          }
        }
        /**
         * De-initializes previously initialized target elements and initializes new ones of provided type
         * @param targets Targets to initialize
         * @returns Array of initialized target elements
         */

      }, {
        key: "_initializeTargets",
        value: function _initializeTargets(targets) {
          // Get all target elements
          var targetElements = [];

          if (!targets) {
            // Use self as a target
            targetElements.push(this._el.nativeElement);
          } else if (typeof targets === 'string') {
            // Use as selector
            document.querySelectorAll(targets).forEach(function (target) {
              if (target instanceof HTMLElement) {
                targetElements.push(target);
              }
            });
          } else if (targets instanceof HTMLElement) {
            // Use target
            targetElements.push(targets);
          } else if (targets instanceof Array) {
            // Check and use targets
            var _iterator7 = _createForOfIteratorHelper(targets),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var target = _step7.value;

                if (target instanceof HTMLElement) {
                  targetElements.push(target);
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          } // Initialize new targets


          for (var _i6 = 0, _targetElements = targetElements; _i6 < _targetElements.length; _i6++) {
            var _target = _targetElements[_i6];

            _target.classList.add('collapse');
          } // Return new targets


          return targetElements;
        }
        /**
         * Clears previously initialized target elements
         */

      }, {
        key: "_clearAllInitializedTargets",
        value: function _clearAllInitializedTargets() {
          this._clearInitializedTargets(this._toggleTargetElements);

          this._clearInitializedTargets(this._targetShowElements);

          this._clearInitializedTargets(this._targetHideElements);
        }
        /**
         * Clears previously initialized target elements
         * @params Targets to clear
         */

      }, {
        key: "_clearInitializedTargets",
        value: function _clearInitializedTargets(targets) {
          var _iterator8 = _createForOfIteratorHelper(targets),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var target = _step8.value;
              target.classList.remove('collapse');
              target.classList.remove('show');
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
      }]);

      return CollapseDirective;
    }();

    CollapseDirective.ɵfac = function CollapseDirective_Factory(t) {
      return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    CollapseDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: CollapseDirective,
      selectors: [["", "iquiCollapse", ""]],
      inputs: {
        toggleTarget: "toggleTarget",
        showTarget: "showTarget",
        hideTarget: "hideTarget",
        toggleOnEvent: "toggleOnEvent",
        showOnEvent: "showOnEvent",
        hideOnEvent: "hideOnEvent"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollapseDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiCollapse]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        toggleTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        toggleOnEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showOnEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        hideOnEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/copy2clipboard/_showcase/index.ts":
  /*!***********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/copy2clipboard/_showcase/index.ts ***!
    \***********************************************************************************/

  /*! exports provided: Copy2ClipboardShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalCopy2clipboard_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardShowcaseComponent", function () {
      return Copy2ClipboardShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts"); // Copy-2-clipboard directive showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules


    var _c0 = function _c0() {
      return ["scss"];
    }; // Showcase component


    var Copy2ClipboardShowcaseComponent = function Copy2ClipboardShowcaseComponent() {
      _classCallCheck(this, Copy2ClipboardShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_1__["FunctionalModule"]]; // Playground context

      this.context = {
        ContentText: 'Some content to copy',
        ExplicitText: 'Explicit content to copy',
        doSomething: function doSomething() {}
      };
    };

    Copy2ClipboardShowcaseComponent.ɵfac = function Copy2ClipboardShowcaseComponent_Factory(t) {
      return new (t || Copy2ClipboardShowcaseComponent)();
    };

    Copy2ClipboardShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Copy2ClipboardShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 13,
      vars: 5,
      consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]],
      template: function Copy2ClipboardShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copy-2-Clipboard Directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nAny HTML element's content, when marked with [iquiCopy2Clipboard] directive, will be copied to clipboard when clicked. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Styling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "iqui-highlightjs", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "        // Copy-2-Clipboard styling\n        .iqui-copy-2-clipboard:hover {\n          text-decoration: underline;\n          cursor: copy;\n        }\n        // Copy-2-Clipboard styling once on clipboard\n        .iqui-copy-2-clipboard.iqui-copy-2-clipboard-copied {\n          color: green;\n        }\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "iqui-playground", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n    <!-- Copy content -->\n    <div iquiCopy2Clipboard [innerHTML]=\"context.ContentText\" (copied)=\"context.doSomething()\"></div>\n\n    <!-- Copy explicitly set value -->\n    <div [iquiCopy2Clipboard]=\"context.ExplicitText\" [innerHTML]=\"context.ContentText\"></div>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_2__["HighlightJsComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_2__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC9jb3B5MmNsaXBib2FyZC9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Copy2ClipboardShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/copy2clipboard/index.ts":
  /*!*************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/copy2clipboard/index.ts ***!
    \*************************************************************************/

  /*! exports provided: Copy2ClipboardDirective */

  /***/
  function iquiNgxSrcLibComponentsFunctionalCopy2clipboardIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardDirective", function () {
      return Copy2ClipboardDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services */
    "../iqui-ngx/src/lib/services/index.ts"); // Copy-2-clipboard directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Copy2Clipboard directive, makes any HTML element's content copy-able to clipboard when clicked
     *
     * Usage:
     *
     *  <anything \
     *    [ iquiCopy2Clipboard ]
     *  </anything>
     *
     */


    var Copy2ClipboardDirective = function Copy2ClipboardDirective(_el, _clipboard) {
      var _this16 = this;

      _classCallCheck(this, Copy2ClipboardDirective);

      this._el = _el;
      this._clipboard = _clipboard;
      /**
       * Holds (optional) explicitly set value to copy
       */

      this.value = undefined;
      /**
       * Fires when a value is copied onto the clipboard
       */

      this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // Set element class

      this._el.nativeElement.classList.add('iqui-copy-2-clipboard'); // Monitor element for click events


      this._el.nativeElement.addEventListener('click', function (e) {
        // Check if has explicitly set value
        if (_this16.value) {
          // Copy explicitly set value
          _this16._clipboard.copy2Clipboard(_this16.value);
        } else {
          // Copy text from host element
          _this16._clipboard.copy2Clipboard(_this16._el.nativeElement);
        } // Find (and clear) any previously copied elements


        var els = document.getElementsByClassName('iqui-copy-2-clipboard-copied'); // tslint:disable-next-line: prefer-for-of

        for (var i = 0; i < els.length; i++) {
          els[i].classList.remove('iqui-copy-2-clipboard-copied');
        } // Mark element as copied


        _this16._el.nativeElement.classList.add('iqui-copy-2-clipboard-copied'); // Fire event


        _this16.copied.emit();
      }); // Monitor element for click events


      this._el.nativeElement.addEventListener('mouseout', function (e) {
        // Un-mark element as copied
        _this16._el.nativeElement.classList.remove('iqui-copy-2-clipboard-copied');
      });
    };

    Copy2ClipboardDirective.ɵfac = function Copy2ClipboardDirective_Factory(t) {
      return new (t || Copy2ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"]));
    };

    Copy2ClipboardDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: Copy2ClipboardDirective,
      selectors: [["", "iquiCopy2Clipboard", ""]],
      inputs: {
        value: ["iquiCopy2Clipboard", "value"]
      },
      outputs: {
        copied: "copied"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Copy2ClipboardDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiCopy2Clipboard]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"]
        }];
      }, {
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['iquiCopy2Clipboard']
        }],
        copied: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/declare/_showcase/index.ts":
  /*!****************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/declare/_showcase/index.ts ***!
    \****************************************************************************/

  /*! exports provided: DeclareShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalDeclare_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeclareShowcaseComponent", function () {
      return DeclareShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Declare directive showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var DeclareShowcaseComponent = function DeclareShowcaseComponent() {
      _classCallCheck(this, DeclareShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_1__["FunctionalModule"]]; // Playground context

      this.context = {
        Arg1: [1, 2, 3, 4],
        Arg2: [1, 2, 3, 4]
      };
    };

    DeclareShowcaseComponent.ɵfac = function DeclareShowcaseComponent_Factory(t) {
      return new (t || DeclareShowcaseComponent)();
    };

    DeclareShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeclareShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function DeclareShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Declare Directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nEvaluates and exposes given value/expression on tho the scope ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <!-- Copy content -->\n    <ng-container *iquiDeclare=\"(context.Arg1 + context.Arg2) as complexCalculationResult\">\n      Now I can use the value multile times:\n      <span [innerHTML]=\"complexCalculationResult\"></span>,\n      <span [innerHTML]=\"complexCalculationResult + 1\"></span>,\n      <span [innerHTML]=\"complexCalculationResult + 2\"></span>\n      without having to recalculate it each time!\n    </ng-container>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_2__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_2__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC9kZWNsYXJlL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeclareShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/declare/index.ts":
  /*!******************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/declare/index.ts ***!
    \******************************************************************/

  /*! exports provided: DeclareDirective */

  /***/
  function iquiNgxSrcLibComponentsFunctionalDeclareIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeclareDirective", function () {
      return DeclareDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Declare directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Declare directive, evaluates and exposes given value/expression on tho the scope
     *
     * Usage:
     *
     * <ng-container *iquiDeclare="1 + 2 as sum">
     *   The sum is: {sum}
     * </ng-container>
     *
     */


    var DeclareDirective = /*#__PURE__*/function () {
      function DeclareDirective(templateRef, viewContainer) {
        _classCallCheck(this, DeclareDirective);

        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
      }

      _createClass(DeclareDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(c) {
          // Promote value to view
          this.viewContainer.clear();
          this.viewContainer.createEmbeddedView(this.templateRef, {
            iquiDeclare: c._syntax.currentValue
          });
        }
      }]);

      return DeclareDirective;
    }();

    DeclareDirective.ɵfac = function DeclareDirective_Factory(t) {
      return new (t || DeclareDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    DeclareDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DeclareDirective,
      selectors: [["", "iquiDeclare", ""]],
      inputs: {
        _syntax: ["iquiDeclare", "_syntax"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeclareDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiDeclare]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, {
        _syntax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['iquiDeclare']
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/dropdown/_showcase/index.ts":
  /*!*****************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/dropdown/_showcase/index.ts ***!
    \*****************************************************************************/

  /*! exports provided: DropdownShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalDropdown_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownShowcaseComponent", function () {
      return DropdownShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/functional/dropdown/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Dropdown component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var DropdownShowcaseComponent = function DropdownShowcaseComponent() {
      _classCallCheck(this, DropdownShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"]]; // Playground context

      this.context = {
        Position: Object.values(___WEBPACK_IMPORTED_MODULE_1__["DropdownRelativePositioning"]),
        ShowOnFocus: [true, false],
        ShowOnHover: [false, true],
        StayInViewport: [false, true],
        CustomClass: 'custom-class',
        OnSelected: function OnSelected(e) {
          console.log(e);
        }
      };
    };

    DropdownShowcaseComponent.ɵfac = function DropdownShowcaseComponent_Factory(t) {
      return new (t || DropdownShowcaseComponent)();
    };

    DropdownShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function DropdownShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Dropdown Directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a dropdown HTML component ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-button\n      theme=\"light\"\n      iquiDropdown\n      [iquiDropdownPosition]=\"       context.Position\"\n      [iquiDropdownShowOnFocus]=\"    context.ShowOnFocus\"\n      [iquiDropdownShowOnHover]=\"    context.ShowOnHover\"\n      [iquiDropdownStayInViewport]=\" context.StayInViewport\"\n      [iquiDropdownClass]=\"          context.CustomClass\">\n\n      Button with a Dropdown\n\n      <!-- Example header content using exposed close() method -->\n      <ng-container *iquiDropdownHeader=\"let close\">\n        <span class=\"dropdown-header\">Header content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n        <div class=\"dropdown-divider\"></div>\n      </ng-container>\n\n      <!-- Example body content using exposed close() method -->\n      <ng-container *iquiDropdownBody=\"let close\">\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #1</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #2</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #3</a>\n      </ng-container>\n\n      <!-- Example footer content using exposed close() method -->\n      <ng-container *iquiDropdownFooter=\"let close\">\n        <div class=\"dropdown-divider\"></div>\n        <span class=\"dropdown-header\">Footer content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n      </ng-container>\n\n    </iqui-button>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC9kcm9wZG93bi9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/dropdown/index.ts":
  /*!*******************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/dropdown/index.ts ***!
    \*******************************************************************/

  /*! exports provided: DropdownRelativePositioning, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective, DropdownDirective, DropdownComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalDropdownIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownRelativePositioning", function () {
      return DropdownRelativePositioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownHeaderDirective", function () {
      return DropdownHeaderDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownBodyDirective", function () {
      return DropdownBodyDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownFooterDirective", function () {
      return DropdownFooterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownDirective", function () {
      return DropdownDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return DropdownComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // Dropdown directive
    // ----------------------------------------------------------------------------
    // Import dependencies


    function DropdownComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function DropdownComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function DropdownComponent_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        $implicit: a0
      };
    }; // Define and export types

    /*
     * Dropdown preferred positions enum
     */
    // tslint:disable-next-line: variable-name


    var DropdownRelativePositioning = Object.assign({
      AUTO: 'auto'
    }, _types__WEBPACK_IMPORTED_MODULE_2__["BootstrapRelativePositioning"]); // Global constants
    // How soon after a focus event is a programmatic toggle of drop-down visibility allowed (in [ms])

    var PROGRAMMATIC_TOGGLE_AFTER_FOCUS_TIMEOUT = 200;
    /**
     * Drop-down header directive, marks content as drop-down header content
     */

    var DropdownHeaderDirective = function DropdownHeaderDirective(template) {
      _classCallCheck(this, DropdownHeaderDirective);

      this.template = template;
    };

    DropdownHeaderDirective.ɵfac = function DropdownHeaderDirective_Factory(t) {
      return new (t || DropdownHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    DropdownHeaderDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DropdownHeaderDirective,
      selectors: [["", "iquiDropdownHeader", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownHeaderDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiDropdownHeader]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();
    /**
     * Drop-down body directive, marks content as drop-down body content
     */


    var DropdownBodyDirective = function DropdownBodyDirective(template) {
      _classCallCheck(this, DropdownBodyDirective);

      this.template = template;
    };

    DropdownBodyDirective.ɵfac = function DropdownBodyDirective_Factory(t) {
      return new (t || DropdownBodyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    DropdownBodyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DropdownBodyDirective,
      selectors: [["", "iquiDropdownBody", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownBodyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiDropdownBody]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();
    /**
     * Drop-down footer directive, marks content as drop-down footer content
     */


    var DropdownFooterDirective = function DropdownFooterDirective(template) {
      _classCallCheck(this, DropdownFooterDirective);

      this.template = template;
    };

    DropdownFooterDirective.ɵfac = function DropdownFooterDirective_Factory(t) {
      return new (t || DropdownFooterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]));
    };

    DropdownFooterDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DropdownFooterDirective,
      selectors: [["", "iquiDropdownFooter", ""]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownFooterDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiDropdownFooter]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
        }];
      }, null);
    })();
    /**
     * Drop-down directive, adds a dropdown to an HTML element or Angular component
     *
     * Usage:
     *
     *  <anything\
     *    [ iquiDropdown ]              = "'Drop-down content'"\
     *    [ iquiDropdownPosition        = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|
     *                                     left|left center|left top|left bottom|top|top center|top left|top right ]\
     *    [ iquiDropdownShowOnFocus     = "true|false" ]\
     *    [ iquiDropdownShowOnHover     = "true|false" ]\
     *    [ iquiDropdownStayInViewport  = "true|false" ]\
     *    \
     *    <ng-container *iqDropdownHeader>\
     *     Dropdown header\
     *    </ng-container>\
     *    <ng-container *iqDropdownBody>\
     *     Dropdown content\
     *    </ng-container>\
     *    <ng-container *iqDropdownFooter>\
     *     Dropdown footer\
     *    </ng-container>\
     *    \
     *    Host component content\
     *    \
     *  </anything>
     *
     */


    var DropdownDirective = /*#__PURE__*/function () {
      function DropdownDirective(_element, _componentFocusMonitor, _dropdownFocusMonitor, _overlay) {
        _classCallCheck(this, DropdownDirective);

        this._element = _element;
        this._componentFocusMonitor = _componentFocusMonitor;
        this._dropdownFocusMonitor = _dropdownFocusMonitor;
        this._overlay = _overlay;
        /**
         * Drop-down preferred position
         */

        this.iquiDropdownPosition = 'auto';
        /**
         * If drop-down should be displayed when parent control is focused
         */

        this.iquiDropdownShowOnFocus = true;
        /**
         * If drop-down should be displayed when parent control is hovered over
         */

        this.iquiDropdownShowOnHover = false;
        /**
         * If drop-down should detach from the parent control if necessary and stay inside the viewport
         */

        this.iquiDropdownStayInViewport = false;
        /**
         * Custom class to be set for the dropdown element
         */

        this.iquiDropdownClass = null; // Holds references to registered event's event listeners

        this._eventListeners = {};
      }

      _createClass(DropdownDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          // Inject
          this._overlayRef = this._overlay.create();
          this._componentRef = this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](DropdownComponent)); // Prevent from blocking clicks on elements behind it while hidden

          this._overlayRef.overlayElement.style.pointerEvents = 'none'; // Manage visibility (on focus of parent or drop-down, pr programmatic .toggle() call)
          // tslint:disable-next-line: max-line-length
          // (Updates drop-down visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the drop-down)

          var timeout = null,
              isFocused = false;

          this._componentFocusMonitor.monitor(this._element, true).subscribe(function (origin) {
            if (timeout) {
              clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
              // Update drop-down focus (visibility)
              _this17._overlayRef.updatePosition();

              _this17._componentRef.instance.focused = !!origin; // Allow toggle on click after a while

              isFocused = false;
              timeout = setTimeout(function () {
                isFocused = !!origin;
              }, PROGRAMMATIC_TOGGLE_AFTER_FOCUS_TIMEOUT);
            });
          });

          this._dropdownFocusMonitor.monitor(this._componentRef.instance.element, true).subscribe(function (origin) {
            if (timeout) {
              clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
              // Update drop-down focus (visibility)
              _this17._overlayRef.updatePosition();

              _this17._componentRef.instance.focused = !!origin;
            });
          });

          this.toggle = function () {
            var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (isFocused) {
              // Toggle drop-down focus (visibility)
              _this17._overlayRef.updatePosition();

              _this17._componentRef.instance.focused = visible !== null ? visible : !_this17._componentRef.instance.focused;

              _this17._componentRef.instance.updateIfChangesDetected();
            }
          }; // Manage visibility (on hover)


          this._element.nativeElement.addEventListener('mouseenter', this._eventListeners.mouseenter = function () {
            _this17._overlayRef.updatePosition();

            _this17._componentRef.instance.hovered = true;
          });

          this._element.nativeElement.addEventListener('mouseleave', this._eventListeners.mouseleave = function () {
            _this17._overlayRef.updatePosition();

            _this17._componentRef.instance.hovered = false;
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Set properties
          this.ngOnChanges();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this18 = this;

          // Update properties
          if (this._componentRef) {
            this._componentRef.instance.header = this.header;
            this._componentRef.instance.body = this.body;
            this._componentRef.instance.footer = this.footer;
            this._componentRef.instance.position = this.iquiDropdownPosition;
            this._componentRef.instance.showOnFocus = this.iquiDropdownShowOnFocus;
            this._componentRef.instance.showOnHover = this.iquiDropdownShowOnHover;
            this._componentRef.instance["class"] = this.iquiDropdownClass;

            this._componentRef.instance.updateIfChangesDetected();
          } // Update overlay scroll strategy


          if (this._overlayRef) {
            this._overlayRef.updateScrollStrategy(this._overlay.scrollStrategies.reposition());
          } // Update overlay position strategy


          if (this._overlayRef) {
            // Update strategy
            var positionStrategy = this._overlay.position().flexibleConnectedTo(this._element).withPush(this.iquiDropdownStayInViewport).withPositions([].concat(_toConsumableArray(this.iquiDropdownPosition !== DropdownRelativePositioning.AUTO ? [_types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"][this.iquiDropdownPosition]] : []), _toConsumableArray(_types__WEBPACK_IMPORTED_MODULE_2__["RelativePositioningPriority"].filter(function (key) {
              return key !== _this18.iquiDropdownPosition;
            }).map(function (key) {
              return _types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"][key];
            }))));

            this._overlayRef.updatePositionStrategy(positionStrategy); // Watch for position changes


            positionStrategy.positionChanges.subscribe(function (positionChange) {
              // Update position property
              var position = Object.keys(_types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"]).find(function (key) {
                return _types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"][key] === positionChange.connectionPair;
              });
              _this18._componentRef.instance.position = position;
              _this18._componentRef.instance.position = position;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Stop managing visibility (on focus)
          this._componentFocusMonitor.stopMonitoring(this._element);

          this._dropdownFocusMonitor.stopMonitoring(this._componentRef.instance.element); // Stop managing visibility (on hover)


          this._element.nativeElement.removeEventListener('mouseenter', this._eventListeners.mouseenter);

          this._element.nativeElement.removeEventListener('mouseleave', this._eventListeners.mouseleave); // Destroy overlay


          this._overlayRef.dispose();
        }
      }]);

      return DropdownDirective;
    }();

    DropdownDirective.ɵfac = function DropdownDirective_Factory(t) {
      return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]));
    };

    DropdownDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: DropdownDirective,
      selectors: [["", "iquiDropdown", ""]],
      contentQueries: function DropdownDirective_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DropdownHeaderDirective, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DropdownBodyDirective, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, DropdownFooterDirective, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.body = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
        }
      },
      inputs: {
        iquiDropdownPosition: "iquiDropdownPosition",
        iquiDropdownShowOnFocus: "iquiDropdownShowOnFocus",
        iquiDropdownShowOnHover: "iquiDropdownShowOnHover",
        iquiDropdownStayInViewport: "iquiDropdownStayInViewport",
        iquiDropdownClass: "iquiDropdownClass"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiDropdown]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
        }];
      }, {
        iquiDropdownPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiDropdownShowOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiDropdownShowOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiDropdownStayInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiDropdownClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        header: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [DropdownHeaderDirective]
        }],
        body: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [DropdownBodyDirective]
        }],
        footer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
          args: [DropdownFooterDirective]
        }]
      });
    })();
    /**
     * Renders a drop-down (not to be used directly; should be instantiated/managed by the orchestrating [iquiTooltip] directive)
     *
     * Usage:
     *
     *  <iqui-dropdown</iqui-dropdown>
     *
     */


    var DropdownComponent = /*#__PURE__*/function () {
      function DropdownComponent(element, _changeDetector) {
        _classCallCheck(this, DropdownComponent);

        this.element = element;
        this._changeDetector = _changeDetector;
        /**
         * Drop-down preferred position
         * (to be set/managed by the orchestrating [iquiDropdown] directive)
         */

        this.position = 'auto';
        /**
         * If drop-down should be displayed when parent control is focused
         * (to be set/managed by the orchestrating [iquiDropdown] directive)
         */

        this.showOnFocus = true;
        /**
         * If drop-down should be displayed when parent control is hovered over
         * (to be set/managed by the orchestrating [iquiDropdown] directive)
         */

        this.showOnHover = true;
        /**
         * Focused status
         * (to be set/managed by the orchestrating [iquiDropdown] directive)
         */

        this.focused = false;
        /**
         * Hovered status
         * (to be set/managed by the orchestrating [iquiDropdown] directive)
         */

        this.hovered = false;
        /**
         * Custom class to be set for the dropdown element
         * (to be set/managed by the orchestrating [iquiDropdown] directive)
         */

        this["class"] = null;
      }
      /**
       * Forces a component to (re)render if any of it's properties have changed
       */


      _createClass(DropdownComponent, [{
        key: "updateIfChangesDetected",
        value: function updateIfChangesDetected() {
          this._changeDetector.detectChanges();
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "_createClose",

        /**
         * Close drop-down function factory
         */
        value: function _createClose() {
          var _this19 = this;

          return function () {
            // Close dropdown
            _this19.focused = false;
          };
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          // Ready values
          var position = this.position.split(' '); // Compose classes

          return [// Mark as dropdown (.dropdown)
          'dropdown', // Mark if has header/body/content
          this.header && this.header.template ? 'dropdown-has-header' : '', this.body && this.body.template ? 'dropdown-has-body' : '', this.footer && this.footer.template ? 'dropdown-has-footer' : '', // Mark if visible (.dropdown-visible/.dropdown-hidden)
          this.showOnFocus && this.focused || this.showOnHover && this.hovered ? 'dropdown-visible' : 'dropdown-hidden', this.showOnFocus && this.focused ? 'dropdown-visible-focus' : null, this.showOnHover && this.hovered ? 'dropdown-visible-hover' : null, // Choose positioning (.bs-dropdown-[position])
          this.position !== 'auto' ? "bs-dropdown-".concat(this.position.split(' ')[0]) : null, // Choose precise positioning (.bs-dropdown-[position]-[alignment])
          this.position !== 'auto' ? "bs-dropdown-".concat(position.length === 1 ? "".concat(position[0], "-center") : position.join('-')) : null, // Inject custom class
          this["class"]].join(' ');
        }
      }]);

      return DropdownComponent;
    }();

    DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
      return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DropdownComponent,
      selectors: [["iqui-dropdown"]],
      decls: 8,
      vars: 14,
      consts: [["tabindex", "-1", 1, "dropdown-menu", "dropdown-menu-dark", "p-0"], [1, "dropdown-header-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dropdown-body-container"], [1, "dropdown-footer-container"]],
      template: function DropdownComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DropdownComponent_ng_container_3_Template, 1, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropdownComponent_ng_container_5_Template, 1, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropdownComponent_ng_container_7_Template, 1, 0, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.header == null ? null : ctx.header.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx._createClose()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.body == null ? null : ctx.body.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx._createClose()));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx.footer == null ? null : ctx.footer.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx._createClose()));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: unset;\n  pointer-events: none;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .dropdown.dropdown-visible[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: unset;\n  bottom: unset;\n  left: unset;\n  right: unset;\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-header-container[_ngcontent-%COMP%] {\n  flex: 0;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-body-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-footer-container[_ngcontent-%COMP%] {\n  flex: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mdW5jdGlvbmFsL2Ryb3Bkb3duL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFDTjtBQUVJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUlNO0VBQ0UsT0FBQTtBQUZSO0FBSU07RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlNO0VBQ0UsT0FBQTtBQUZSIiwiZmlsZSI6InByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mdW5jdGlvbmFsL2Ryb3Bkb3duL3N0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAuZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5kcm9wZG93bi12aXNpYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICYgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAvLyBSZXNldCBkZWZhdWx0IGJvb3RzdHJhcCBkcm9wLWRvd24gcG9zaXRpb25pbmdcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogdW5zZXQ7XG4gICAgICBib3R0b206IHVuc2V0O1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG5cbiAgICAgICYgPiAuZHJvcGRvd24taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDA7XG4gICAgICB9XG4gICAgICAmID4gLmRyb3Bkb3duLWJvZHktY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIH1cbiAgICAgICYgPiAuZHJvcGRvd24tZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-dropdown',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/index.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/index.ts ***!
    \**********************************************************/

  /*! exports provided: DeclareDirective, Copy2ClipboardDirective, TooltipComponent, TooltipDirective, TooltipRelativePositioning, DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective, DropdownRelativePositioning, CollapseDirective, ToastComponent, ModalComponent, ModalDirective, ModalDialogDirective, BookmarkableDirective, BookmarkableService, FunctionalModule */

  /***/
  function iquiNgxSrcLibComponentsFunctionalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FunctionalModule", function () {
      return FunctionalModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _declare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./declare */
    "../iqui-ngx/src/lib/components/functional/declare/index.ts");
    /* harmony import */


    var _copy2clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./copy2clipboard */
    "../iqui-ngx/src/lib/components/functional/copy2clipboard/index.ts");
    /* harmony import */


    var _tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tooltip */
    "../iqui-ngx/src/lib/components/functional/tooltip/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipRelativePositioning", function () {
      return _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipRelativePositioning"];
    });
    /* harmony import */


    var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dropdown */
    "../iqui-ngx/src/lib/components/functional/dropdown/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownDirective", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownHeaderDirective", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownHeaderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownBodyDirective", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownBodyDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownFooterDirective", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownFooterDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownRelativePositioning", function () {
      return _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownRelativePositioning"];
    });
    /* harmony import */


    var _collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./collapse */
    "../iqui-ngx/src/lib/components/functional/collapse/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapseDirective", function () {
      return _collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"];
    });
    /* harmony import */


    var _toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./toast */
    "../iqui-ngx/src/lib/components/functional/toast/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return _toast__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"];
    });
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modal */
    "../iqui-ngx/src/lib/components/functional/modal/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return _modal__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogDirective", function () {
      return _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDialogDirective"];
    });
    /* harmony import */


    var _bookmarkable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./bookmarkable */
    "../iqui-ngx/src/lib/components/functional/bookmarkable/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableDirective", function () {
      return _bookmarkable__WEBPACK_IMPORTED_MODULE_10__["BookmarkableDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableService", function () {
      return _bookmarkable__WEBPACK_IMPORTED_MODULE_10__["BookmarkableService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeclareDirective", function () {
      return _declare__WEBPACK_IMPORTED_MODULE_3__["DeclareDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardDirective", function () {
      return _copy2clipboard__WEBPACK_IMPORTED_MODULE_4__["Copy2ClipboardDirective"];
    }); // Import dependencies
    // Import components and (re)export components

    /**
     * IQ UI NGX Elements' Functional elements module
     * Implements functional directives that augment behavior of their parent element or component
     */


    var FunctionalModule = function FunctionalModule() {
      _classCallCheck(this, FunctionalModule);
    };

    FunctionalModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FunctionalModule
    });
    FunctionalModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FunctionalModule_Factory(t) {
        return new (t || FunctionalModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]], // Export dependency modules
      _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FunctionalModule, {
        declarations: [_declare__WEBPACK_IMPORTED_MODULE_3__["DeclareDirective"], _copy2clipboard__WEBPACK_IMPORTED_MODULE_4__["Copy2ClipboardDirective"], _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipComponent"], _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownHeaderDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownBodyDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownFooterDirective"], _collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"], _toast__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDialogDirective"], _bookmarkable__WEBPACK_IMPORTED_MODULE_10__["BookmarkableDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
        exports: [// Export dependency modules
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], // Export child components
        _declare__WEBPACK_IMPORTED_MODULE_3__["DeclareDirective"], _copy2clipboard__WEBPACK_IMPORTED_MODULE_4__["Copy2ClipboardDirective"], _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownHeaderDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownBodyDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownFooterDirective"], _collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"], _toast__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDialogDirective"], _bookmarkable__WEBPACK_IMPORTED_MODULE_10__["BookmarkableDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FunctionalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
          declarations: [_declare__WEBPACK_IMPORTED_MODULE_3__["DeclareDirective"], _copy2clipboard__WEBPACK_IMPORTED_MODULE_4__["Copy2ClipboardDirective"], _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipComponent"], _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownComponent"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownHeaderDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownBodyDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownFooterDirective"], _collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"], _toast__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDialogDirective"], _bookmarkable__WEBPACK_IMPORTED_MODULE_10__["BookmarkableDirective"]],
          exports: [// Export dependency modules
          _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"], // Export child components
          _declare__WEBPACK_IMPORTED_MODULE_3__["DeclareDirective"], _copy2clipboard__WEBPACK_IMPORTED_MODULE_4__["Copy2ClipboardDirective"], _tooltip__WEBPACK_IMPORTED_MODULE_5__["TooltipDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownHeaderDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownBodyDirective"], _dropdown__WEBPACK_IMPORTED_MODULE_6__["DropdownFooterDirective"], _collapse__WEBPACK_IMPORTED_MODULE_7__["CollapseDirective"], _toast__WEBPACK_IMPORTED_MODULE_8__["ToastComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDirective"], _modal__WEBPACK_IMPORTED_MODULE_9__["ModalDialogDirective"], _bookmarkable__WEBPACK_IMPORTED_MODULE_10__["BookmarkableDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/modal/_showcase/index.ts":
  /*!**************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/modal/_showcase/index.ts ***!
    \**************************************************************************/

  /*! exports provided: ModalShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalModal_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalShowcaseComponent", function () {
      return ModalShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Modal component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var ModalShowcaseComponent = function ModalShowcaseComponent() {
      _classCallCheck(this, ModalShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_1__["FunctionalModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]]; // Modal context

      this.context = {
        Visible: [true, false],
        HeaderHtml: 'This is a modal',
        ContentHtml: '... a real, real modal!',
        OverlayShow: [true, false],
        CloseOnEscape: [true, false]
      };
    };

    ModalShowcaseComponent.ɵfac = function ModalShowcaseComponent_Factory(t) {
      return new (t || ModalShowcaseComponent)();
    };

    ModalShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function ModalShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Modal Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a modal ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-button [size]=\"'sm'\"\n                 (click)=\"modal.show()\">\n      Show modal programmatically!\n    </iqui-button>\n\n    <iqui-modal #modal\n                [(visible)]=\"context.Visible\"\n                [closeOnOverlay]=\"context.CloseOnOverlay\"\n                [closeOnEscape]=\"context.CloseOnEscape\">\n\n      <div class=\"modal fade show\">\n        <div class=\"modal-dialog modal-dialog-centered\">\n          <div class=\"modal-content\">\n\n            <div class=\"modal-header\"\n                 [innerHtml]=\"context.HeaderHtml\"></div>\n\n            <div class=\"modal-body\"\n                 [innerHtml]=\"context.ContentHtml\"></div>\n\n            <div class=\"modal-footer\">\n              <iqui-button [size]=\"'sm'\"\n                           (click)=\"modal.hide()\">\n                Hide modal programmatically!\n              </iqui-button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </iqui-modal>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC9tb2RhbC9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/modal/directives/dialog/index.ts":
  /*!**********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/modal/directives/dialog/index.ts ***!
    \**********************************************************************************/

  /*! exports provided: ModalDialogDirective */

  /***/
  function iquiNgxSrcLibComponentsFunctionalModalDirectivesDialogIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogDirective", function () {
      return ModalDialogDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/functional/modal/directives/index.ts"); // Bootstrap modal dialog directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Modal dialog
     *
     * Usage:
     *
     *  <iqui-modal>
     *    <div class="modal">
     *      <div class="modal-dialog"> ... </div>
     *    </div>
     *  </iqui-modal>
     *
     */


    var ModalDialogDirective = /*#__PURE__*/function () {
      function ModalDialogDirective(_element, _dispatcher) {
        _classCallCheck(this, ModalDialogDirective);

        this._element = _element;
        this._dispatcher = _dispatcher;
      }

      _createClass(ModalDialogDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Capture in-modal "keydown" event
          this._element.nativeElement.addEventListener('keydown', this.handleKeyDown.bind(this)); // Capture body "keydown" event


          document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Unsubscribe body "keydown" event
          document.body.removeEventListener('keydown', this.handleKeyDown);
        }
        /**
         * Handles "keydown" event
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown(e) {
          if (e.keyCode === 27) {
            this._dispatcher.modalCloseRequested.emit(___WEBPACK_IMPORTED_MODULE_1__["ModalCloseRequestedReason"].EscapePressed);
          }
        }
      }]);

      return ModalDialogDirective;
    }();

    ModalDialogDirective.ɵfac = function ModalDialogDirective_Factory(t) {
      return new (t || ModalDialogDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](___WEBPACK_IMPORTED_MODULE_1__["ModelEventDispatcher"]));
    };

    ModalDialogDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ModalDialogDirective,
      selectors: [["", 8, "modal-dialog"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDialogDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: ".modal-dialog"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ___WEBPACK_IMPORTED_MODULE_1__["ModelEventDispatcher"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/modal/directives/index.ts":
  /*!***************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/modal/directives/index.ts ***!
    \***************************************************************************/

  /*! exports provided: ModalCloseRequestedReason, ModelEventDispatcher */

  /***/
  function iquiNgxSrcLibComponentsFunctionalModalDirectivesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCloseRequestedReason", function () {
      return ModalCloseRequestedReason;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModelEventDispatcher", function () {
      return ModelEventDispatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Modal event dispatcher
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Enumerated reasons for dispatching a "modalCloseRequested" event
     */


    var ModalCloseRequestedReason;

    (function (ModalCloseRequestedReason) {
      ModalCloseRequestedReason[ModalCloseRequestedReason["OverlayClicked"] = 0] = "OverlayClicked";
      ModalCloseRequestedReason[ModalCloseRequestedReason["EscapePressed"] = 1] = "EscapePressed";
    })(ModalCloseRequestedReason || (ModalCloseRequestedReason = {}));
    /**
     * Modal directive
     *
     * Usage:
     *
     *  <iqui-modal>
     *    <div class="modal"> ... </div>
     *  </iqui-modal>
     *
     */


    var ModelEventDispatcher = function ModelEventDispatcher() {
      _classCallCheck(this, ModelEventDispatcher);

      /**
       * Modal close requested event
       */
      this.modalCloseRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    ModelEventDispatcher.ɵfac = function ModelEventDispatcher_Factory(t) {
      return new (t || ModelEventDispatcher)();
    };

    ModelEventDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModelEventDispatcher,
      factory: ModelEventDispatcher.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelEventDispatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/modal/directives/modal/index.ts":
  /*!*********************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/modal/directives/modal/index.ts ***!
    \*********************************************************************************/

  /*! exports provided: ModalDirective */

  /***/
  function iquiNgxSrcLibComponentsFunctionalModalDirectivesModalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return ModalDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/functional/modal/directives/index.ts"); // Bootstrap modal directive
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Modal directive
     *
     * Usage:
     *
     *  <iqui-modal>
     *    <div class="modal"> ... </div>
     *  </iqui-modal>
     *
     */


    var ModalDirective = /*#__PURE__*/function () {
      function ModalDirective(_element, _dispatcher) {
        _classCallCheck(this, ModalDirective);

        this._element = _element;
        this._dispatcher = _dispatcher;
      }

      _createClass(ModalDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          // Capture overlay "click" event
          this._element.nativeElement.addEventListener('click', function (e) {
            if (e.target === _this20._element.nativeElement) {
              _this20._dispatcher.modalCloseRequested.emit(___WEBPACK_IMPORTED_MODULE_1__["ModalCloseRequestedReason"].OverlayClicked);
            }
          });
        }
      }]);

      return ModalDirective;
    }();

    ModalDirective.ɵfac = function ModalDirective_Factory(t) {
      return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](___WEBPACK_IMPORTED_MODULE_1__["ModelEventDispatcher"]));
    };

    ModalDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ModalDirective,
      selectors: [["", 8, "modal"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          // tslint:disable-next-line: directive-selector
          selector: ".modal"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: ___WEBPACK_IMPORTED_MODULE_1__["ModelEventDispatcher"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/modal/index.ts":
  /*!****************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/modal/index.ts ***!
    \****************************************************************/

  /*! exports provided: ModalDirective, ModalDialogDirective, ModalComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalModalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return ModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _directives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directives */
    "../iqui-ngx/src/lib/components/functional/modal/directives/index.ts");
    /* harmony import */


    var _directives_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directives/modal */
    "../iqui-ngx/src/lib/components/functional/modal/directives/modal/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return _directives_modal__WEBPACK_IMPORTED_MODULE_4__["ModalDirective"];
    });
    /* harmony import */


    var _directives_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directives/dialog */
    "../iqui-ngx/src/lib/components/functional/modal/directives/dialog/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogDirective", function () {
      return _directives_dialog__WEBPACK_IMPORTED_MODULE_5__["ModalDialogDirective"];
    }); // Modal component
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import and (re)export child directives


    var _c0 = ["content"];

    function ModalComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    }

    var _c1 = ["*"];
    /**
     * Modal component, capable of managing display of contents in a modal\
     * Supports:\
     * - TODO: ...
     *
     * Usage:\
     * <iqui-modal>\
     *  TODO: Add a full usage syntax example\
     * </iqui-modal>
     */

    var ModalComponent = /*#__PURE__*/function () {
      function ModalComponent(_overlay, _viewContainerRef, _dispatcher) {
        _classCallCheck(this, ModalComponent);

        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._dispatcher = _dispatcher;
        /**
         * If modal is displayed or not (two-way bound)
         */

        this.visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.closeOnOverlay = true;
        this.closeOnEscape = true;
        /**
         * Content to be displayed inside the modal
         */

        this.content = null;
        /**
         * Holds modal's currently displayed status
         */

        this._isShown = false;
        /**
         * Holds changes queued for processing before modal was initialized
         */

        this._queuedChanges = [];
        /**
         * Holds dispatched event subscriptions
         */

        this._dispatcherSubscriptions = [];
      }

      _createClass(ModalComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this21 = this;

          // Configure
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]();
          overlayConfig.hasBackdrop = true;
          overlayConfig.panelClass = ['iqui-modal-container'];
          overlayConfig.backdropClass = ['modal-backdrop', 'fade', 'show']; // Inject

          this._overlayRef = this._overlay.create(overlayConfig);

          this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this.content, this._viewContainerRef)); // Update overlay position strategy


          if (this._overlayRef) {
            var positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();

            this._overlayRef.updatePositionStrategy(positionStrategy);
          } // Process queued changes


          var _iterator9 = _createForOfIteratorHelper(this._queuedChanges),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var changes = _step9.value;
              this.ngOnChanges(changes);
            } // Subscribe to dispatched events

          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          this._dispatcherSubscriptions.push(this._dispatcher.modalCloseRequested.subscribe(function (reason) {
            // Check if closing on overlay click
            if (reason === _directives__WEBPACK_IMPORTED_MODULE_3__["ModalCloseRequestedReason"].OverlayClicked && _this21.closeOnOverlay) {
              _this21.hide();
            } // Check if closing on escape keypress


            if (reason === _directives__WEBPACK_IMPORTED_MODULE_3__["ModalCloseRequestedReason"].EscapePressed && _this21.closeOnEscape) {
              _this21.hide();
            }
          }));
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Check if already initialized
          if (this._overlayRef) {
            // Process changes to modal shown
            if (changes.visible) {
              if (changes.visible.currentValue) {
                // Open modal
                this.show();
              } else {
                // Close modal
                this.hide();
              }
            }
          } else {
            // Queue changes for later processing
            this._queuedChanges.push(changes);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Close previous dialog, if shown
          this.hide(); // Destroy overlay

          this._overlayRef.dispose(); // Destroy dispatched subscriptions


          var _iterator10 = _createForOfIteratorHelper(this._dispatcherSubscriptions),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var subscription = _step10.value;
              subscription.unsubscribe();
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
        /**
         * Shows modal
         */

      }, {
        key: "show",
        value: function show() {
          if (!this._isShown && this._overlayRef) {
            // Set visible
            this._overlayRef.backdropElement.classList.add('modal-visible');

            this._overlayRef.hostElement.classList.add('modal-visible'); // Trigger change


            this._isShown = true;
            this.visibleChange.emit(true);
          }
        }
        /**
         * Hides modal
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this._isShown && this._overlayRef) {
            // Set not visible
            this._overlayRef.backdropElement.classList.remove('modal-visible');

            this._overlayRef.hostElement.classList.remove('modal-visible'); // Trigger change


            this._isShown = false;
            this.visibleChange.emit(false);
          }
        }
      }]);

      return ModalComponent;
    }();

    ModalComponent.ɵfac = function ModalComponent_Factory(t) {
      return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_directives__WEBPACK_IMPORTED_MODULE_3__["ModelEventDispatcher"]));
    };

    ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalComponent,
      selectors: [["iqui-modal"]],
      viewQuery: function ModalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        visible: "visible",
        closeOnOverlay: "closeOnOverlay",
        closeOnEscape: "closeOnEscape"
      },
      outputs: {
        visibleChange: "visibleChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _directives__WEBPACK_IMPORTED_MODULE_3__["ModelEventDispatcher"],
        useValue: new _directives__WEBPACK_IMPORTED_MODULE_3__["ModelEventDispatcher"]()
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      consts: [["content", ""]],
      template: function ModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      styles: [".modal-backdrop + .cdk-global-overlay-wrapper,   .modal-backdrop + .cdk-global-overlay-wrapper > .iqui-modal-container {\n  z-index: unset !important;\n}\n  .modal-backdrop:not(.modal-visible) {\n  opacity: 0 !important;\n  pointer-events: none;\n}\n  .modal-backdrop + .cdk-global-overlay-wrapper:not(.modal-visible) > .iqui-modal-container > * {\n  display: none;\n}\n  .modal-backdrop + .cdk-global-overlay-wrapper.modal-visible > .iqui-modal-container > * {\n  display: block;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mdW5jdGlvbmFsL21vZGFsL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUseUJBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFJRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2Z1bmN0aW9uYWwvbW9kYWwvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5tb2RhbC1iYWNrZHJvcCArIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcixcbiAgLm1vZGFsLWJhY2tkcm9wICsgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyID4gLmlxdWktbW9kYWwtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vZGFsLWJhY2tkcm9wOm5vdCgubW9kYWwtdmlzaWJsZSkge1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5tb2RhbC1iYWNrZHJvcCArIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcjpub3QoLm1vZGFsLXZpc2libGUpID4gLmlxdWktbW9kYWwtY29udGFpbmVyID4gKiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubW9kYWwtYmFja2Ryb3AgKyAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIubW9kYWwtdmlzaWJsZSA+IC5pcXVpLW1vZGFsLWNvbnRhaW5lciA+ICoge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-modal',
          templateUrl: 'index.html',
          styleUrls: ['style.scss'],
          providers: [{
            provide: _directives__WEBPACK_IMPORTED_MODULE_3__["ModelEventDispatcher"],
            useValue: new _directives__WEBPACK_IMPORTED_MODULE_3__["ModelEventDispatcher"]()
          }]
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _directives__WEBPACK_IMPORTED_MODULE_3__["ModelEventDispatcher"]
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        visibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        closeOnOverlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        closeOnEscape: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/toast/_showcase/index.ts":
  /*!**************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/toast/_showcase/index.ts ***!
    \**************************************************************************/

  /*! exports provided: ToastShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalToast_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastShowcaseComponent", function () {
      return ToastShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/functional/toast/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Toast component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var ToastShowcaseComponent = function ToastShowcaseComponent() {
      _classCallCheck(this, ToastShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"]]; // Toast context

      this.context = {
        Visible: [true, false],
        Position: Object.values(___WEBPACK_IMPORTED_MODULE_1__["ToastRelativePositioning"]),
        HeaderHtml: 'This is a toast',
        ContentHtml: '... a real, real toast!'
      };
    };

    ToastShowcaseComponent.ɵfac = function ToastShowcaseComponent_Factory(t) {
      return new (t || ToastShowcaseComponent)();
    };

    ToastShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function ToastShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Toast Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a toast ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-button [size]=\"'sm'\"\n                 (click)=\"toast.show()\">\n      Show toast programmatically!\n    </iqui-button>\n\n    <iqui-toast #toast\n                [(visible)]=\"context.Visible\"\n                [position]=\"context.Position\">\n\n      <div class=\"toast\">\n        <div class=\"toast-header\">\n          <strong class=\"mr-auto\"\n            [innerHtml]=\"context.HeaderHtml\"></strong>\n        </div>\n        <div class=\"toast-body\"\n                 [innerHtml]=\"context.ContentHtml\"></div>\n        <iqui-button [size]=\"'sm'\"\n          (click)=\"toast.hide()\">\n            Hide toast programmatically!\n        </iqui-button>\n      </div>\n\n    </iqui-toast>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC90b2FzdC9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/toast/index.ts":
  /*!****************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/toast/index.ts ***!
    \****************************************************************/

  /*! exports provided: ToastRelativePositioning, ToastComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalToastIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastRelativePositioning", function () {
      return ToastRelativePositioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return ToastComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../types */
    "../iqui-ngx/src/lib/types/index.ts"); // Toast component
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = ["content"];

    function ToastComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      }
    }

    var _c1 = ["*"]; // Define and export types

    /*
     * Tooltip preferred positions enum
     */
    // tslint:disable-next-line: variable-name

    var ToastRelativePositioning = Object.assign({
      AUTO: 'auto'
    }, _types__WEBPACK_IMPORTED_MODULE_3__["BootstrapRelativePositioning"]);
    /**
     * Toast component, capable of managing display of contents in a toast\
     * Supports:\
     * - TODO: ...
     *
     * Usage:\
     * <iqui-toast>\
     *  TODO: Add a full usage syntax example\
     * </iqui-toast>
     */

    var ToastComponent = /*#__PURE__*/function () {
      function ToastComponent(_overlay, _viewContainerRef) {
        _classCallCheck(this, ToastComponent);

        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        /**
         * If modal is displayed or not (two-way bound)
         */

        this.visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Toast preferred position
         */

        this.position = 'auto';
        /**
         * Content to be displayed inside the modal
         */

        this.content = null;
        /**
         * Holds modal's currently displayed status
         */

        this._isShown = false;
        /**
         * Holds changes queued for processing before modal was initialized
         */

        this._queuedChanges = [];
        /**
         * Holds dispatched event subscriptions
         */

        this._dispatcherSubscriptions = [];
      }

      _createClass(ToastComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Configure
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]();
          overlayConfig.hasBackdrop = false;
          overlayConfig.panelClass = ['iqui-toast-container']; // Inject

          this._overlayRef = this._overlay.create(overlayConfig);

          this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this.content, this._viewContainerRef)); // Process queued changes


          var _iterator11 = _createForOfIteratorHelper(this._queuedChanges),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var changes = _step11.value;
              this.ngOnChanges(changes);
            }
          } catch (err) {
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Check if already initialized
          if (this._overlayRef) {
            // Update overlay position strategy
            if (this._overlayRef) {
              var positionStrategy = this._overlay.position().global();

              if (this.position === ToastRelativePositioning.AUTO) {
                positionStrategy.centerHorizontally();
                positionStrategy.centerVertically();
              } else {
                if (this.position.indexOf('left') !== -1) {
                  positionStrategy.left();
                } else if (this.position.indexOf('right') !== -1) {
                  positionStrategy.right();
                } else {
                  positionStrategy.centerHorizontally();
                }

                if (this.position.indexOf('top') !== -1) {
                  positionStrategy.top();
                } else if (this.position.indexOf('bottom') !== -1) {
                  positionStrategy.bottom();
                } else {
                  positionStrategy.centerVertically();
                }
              }

              this._overlayRef.updatePositionStrategy(positionStrategy);
            } // Process changes to modal shown


            if (changes.visible) {
              if (changes.visible.currentValue) {
                // Open modal
                this.show();
              } else {
                // Close modal
                this.hide();
              }
            }
          } else {
            // Queue changes for later processing
            this._queuedChanges.push(changes);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Close previous dialog, if shown
          this.hide(); // Destroy overlay

          this._overlayRef.dispose(); // Destroy dispatched subscriptions


          var _iterator12 = _createForOfIteratorHelper(this._dispatcherSubscriptions),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var subscription = _step12.value;
              subscription.unsubscribe();
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
        /**
         * Shows modal
         */

      }, {
        key: "show",
        value: function show() {
          if (!this._isShown && this._overlayRef) {
            // Set visible
            this._overlayRef.overlayElement.classList.add('toast-visible'); // Trigger change


            this._isShown = true;
            this.visibleChange.emit(true);
          }
        }
        /**
         * Hides modal
         */

      }, {
        key: "hide",
        value: function hide() {
          if (this._isShown && this._overlayRef) {
            // Set not visible
            this._overlayRef.overlayElement.classList.remove('toast-visible'); // Trigger change


            this._isShown = false;
            this.visibleChange.emit(false);
          }
        }
      }]);

      return ToastComponent;
    }();

    ToastComponent.ɵfac = function ToastComponent_Factory(t) {
      return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]));
    };

    ToastComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToastComponent,
      selectors: [["iqui-toast"]],
      viewQuery: function ToastComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        visible: "visible",
        position: "position"
      },
      outputs: {
        visibleChange: "visibleChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 2,
      vars: 0,
      consts: [["content", ""]],
      template: function ToastComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }
      },
      styles: [".cdk-global-overlay-wrapper,   .cdk-global-overlay-wrapper > .iqui-toast-container {\n  z-index: unset !important;\n}\n  .cdk-global-overlay-wrapper > .iqui-toast-container:not(.toast-visible) {\n  opacity: 0 !important;\n  pointer-events: none;\n}\n  .cdk-global-overlay-wrapper > .iqui-toast-container:not(.toast-visible) > * {\n  display: none;\n}\n  .cdk-global-overlay-wrapper > .iqui-toast-container.toast-visible > * {\n  display: block;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mdW5jdGlvbmFsL3RvYXN0L3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUseUJBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFJRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoicHJvamVjdHMvaXF1aS1uZ3gvc3JjL2xpYi9jb21wb25lbnRzL2Z1bmN0aW9uYWwvdG9hc3Qvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcixcbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyID4gLmlxdWktdG9hc3QtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyID4gLmlxdWktdG9hc3QtY29udGFpbmVyOm5vdCgudG9hc3QtdmlzaWJsZSkge1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciA+IC5pcXVpLXRvYXN0LWNvbnRhaW5lcjpub3QoLnRvYXN0LXZpc2libGUpID4gKiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIgPiAuaXF1aS10b2FzdC1jb250YWluZXIudG9hc3QtdmlzaWJsZSA+ICoge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-toast',
          templateUrl: 'index.html',
          styleUrls: ['style.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }];
      }, {
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        visibleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['content', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/tooltip/_showcase/index.ts":
  /*!****************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/tooltip/_showcase/index.ts ***!
    \****************************************************************************/

  /*! exports provided: TooltipShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalTooltip_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipShowcaseComponent", function () {
      return TooltipShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../ */
    "../iqui-ngx/src/lib/components/functional/tooltip/index.ts");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../ */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../showcasing/playground/index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Tooltip component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Showcase component


    var TooltipShowcaseComponent = function TooltipShowcaseComponent() {
      _classCallCheck(this, TooltipShowcaseComponent);

      // Expose modules needed to render syntax
      this.modules = [___WEBPACK_IMPORTED_MODULE_2__["FunctionalModule"], _basics__WEBPACK_IMPORTED_MODULE_3__["BasicsModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"]]; // Playground context

      this.context = {
        ContentText: 'Tooltip content',
        Position: Object.values(___WEBPACK_IMPORTED_MODULE_1__["TooltipRelativePositioning"]),
        ShowOnFocus: [true, false],
        ShowOnHover: [true, false],
        StayInViewport: [true, false],
        CustomClass: 'custom-class'
      };
    };

    TooltipShowcaseComponent.ɵfac = function TooltipShowcaseComponent_Factory(t) {
      return new (t || TooltipShowcaseComponent)();
    };

    TooltipShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 3,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function TooltipShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Basic Tooltip Directive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDisplays a tooltip HTML component ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-button\n      theme=\"light\"\n      [iquiTooltip]=\"               context.ContentText\"\n      [iquiTooltipPosition]=\"       context.Position\"\n      [iquiTooltipShowOnFocus]=\"    context.ShowOnFocus\"\n      [iquiTooltipShowOnHover]=\"    context.ShowOnHover\"\n      [iquiTooltipStayInViewport]=\" context.StayInViewport\"\n      [iquiTooltipClass]=\"          context.CustomClass\">\n\n      Button with a Tooltip\n\n    </iqui-button>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        }
      },
      directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__["HighlightJsTextareaDirective"], _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvZnVuY3Rpb25hbC90b29sdGlwL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/functional/tooltip/index.ts":
  /*!******************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/functional/tooltip/index.ts ***!
    \******************************************************************/

  /*! exports provided: TooltipRelativePositioning, TooltipDirective, TooltipComponent */

  /***/
  function iquiNgxSrcLibComponentsFunctionalTooltipIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipRelativePositioning", function () {
      return TooltipRelativePositioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return TooltipDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js"); // Tooltip directive
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = ["*"]; // Define and export types

    /*
     * Tooltip preferred positions enum
     */
    // tslint:disable-next-line: variable-name

    var TooltipRelativePositioning = Object.assign({
      AUTO: 'auto'
    }, _types__WEBPACK_IMPORTED_MODULE_2__["BootstrapRelativePositioning"]);
    /**
     * Tooltip directive, adds a tooltip to an HTML element or Angular component
     *
     * Usage:
     *
     *  <anything \
     *    [ iquiTooltip ]             = "'Tooltip content'"\
     *    [ iquiTooltipPosition       = "auto|bottom|bottom center|bottom left|bottom right|right|right center|right top|right bottom|
     *                                   left|left center|left top|left bottom|top|top center|top left|top right ]\
     *    [ iquiTooltipShowOnFocus    = "true|false" ]\
     *    [ iquiTooltipShowOnHover    = "true|false" ]\
     *    [ iquiTooltipStayInViewport = "true|false" ]>\
     *    Host component content\
     *  </anything>
     *
     */

    var TooltipDirective = /*#__PURE__*/function () {
      function TooltipDirective(_element, _componentFocusMonitor, _tooltipFocusMonitor, _overlay) {
        _classCallCheck(this, TooltipDirective);

        this._element = _element;
        this._componentFocusMonitor = _componentFocusMonitor;
        this._tooltipFocusMonitor = _tooltipFocusMonitor;
        this._overlay = _overlay;
        /**
         * Tooltip preferred position
         */

        this.iquiTooltipPosition = 'auto';
        /**
         * If tooltip should be displayed when parent control is focused
         */

        this.iquiTooltipShowOnFocus = true;
        /**
         * If tooltip should be displayed when parent control is hovered over
         */

        this.iquiTooltipShowOnHover = true;
        /**
         * If tooltip should detach from the parent control if necessary and stay inside the viewport
         */

        this.iquiTooltipStayInViewport = true;
        /**
         * Custom class to be set for the tooltip element
         */

        this.iquiTooltipClass = null; // Holds references to registered event's event listeners

        this._eventListeners = {};
      }

      _createClass(TooltipDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          // Inject
          this._overlayRef = this._overlay.create();
          this._componentRef = this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](TooltipComponent)); // Prevent from blocking clicks on elements behind it while hidden

          this._overlayRef.overlayElement.style.pointerEvents = 'none'; // Set properties

          this.ngOnChanges(); // Manage visibility (on focus of parent or tooltip)
          // tslint:disable-next-line: max-line-length
          // (Updates tooltip visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the tooltip)

          var timeout = null;

          this._componentFocusMonitor.monitor(this._element, true).subscribe(function (origin) {
            if (timeout) {
              clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
              _this22._overlayRef.updatePosition();

              _this22._componentRef.instance.focused = !!origin;
            });
          });

          this._tooltipFocusMonitor.monitor(this._componentRef.instance.element, true).subscribe(function (origin) {
            if (timeout) {
              clearTimeout(timeout);
            }

            timeout = setTimeout(function () {
              _this22._overlayRef.updatePosition();

              _this22._componentRef.instance.focused = !!origin;
            });
          }); // Manage visibility (on hover)


          this._element.nativeElement.addEventListener('mouseenter', this._eventListeners.mouseenter = function () {
            _this22._overlayRef.updatePosition();

            _this22._componentRef.instance.hovered = true;
          });

          this._element.nativeElement.addEventListener('mouseleave', this._eventListeners.mouseleave = function () {
            _this22._overlayRef.updatePosition();

            _this22._componentRef.instance.hovered = false;
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this23 = this;

          // Update properties
          if (this._componentRef) {
            this._componentRef.instance.content = this.iquiTooltip;
            this._componentRef.instance.position = this.iquiTooltipPosition;
            this._componentRef.instance.showOnFocus = this.iquiTooltipShowOnFocus;
            this._componentRef.instance.showOnHover = this.iquiTooltipShowOnHover;
            this._componentRef.instance["class"] = this.iquiTooltipClass;

            this._componentRef.instance.updateIfChangesDetected();
          } // Update overlay scroll strategy


          if (this._overlayRef) {
            this._overlayRef.updateScrollStrategy(this._overlay.scrollStrategies.reposition());
          } // Update overlay position strategy


          if (this._overlayRef) {
            // Update strategy
            var positionStrategy = this._overlay.position().flexibleConnectedTo(this._element).withPush(this.iquiTooltipStayInViewport).withPositions([].concat(_toConsumableArray(this.iquiTooltipPosition !== TooltipRelativePositioning.AUTO ? [_types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"][this.iquiTooltipPosition]] : []), _toConsumableArray(_types__WEBPACK_IMPORTED_MODULE_2__["RelativePositioningPriority"].filter(function (key) {
              return key !== _this23.iquiTooltipPosition;
            }).map(function (key) {
              return _types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"][key];
            }))));

            this._overlayRef.updatePositionStrategy(positionStrategy); // Watch for position changes


            positionStrategy.positionChanges.subscribe(function (positionChange) {
              // Update position property
              var position = Object.keys(_types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"]).find(function (key) {
                return _types__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"][key] === positionChange.connectionPair;
              });
              _this23._componentRef.instance.position = position;
              _this23._componentRef.instance.position = position;
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Stop managing visibility (on focus)
          this._componentFocusMonitor.stopMonitoring(this._element);

          this._tooltipFocusMonitor.stopMonitoring(this._componentRef.instance.element); // Stop managing visibility (on hover)


          this._element.nativeElement.removeEventListener('mouseenter', this._eventListeners.mouseenter);

          this._element.nativeElement.removeEventListener('mouseleave', this._eventListeners.mouseleave); // Destroy overlay


          this._overlayRef.dispose();
        }
      }]);

      return TooltipDirective;
    }();

    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) {
      return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]));
    };

    TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TooltipDirective,
      selectors: [["", "iquiTooltip", ""]],
      inputs: {
        iquiTooltip: "iquiTooltip",
        iquiTooltipPosition: "iquiTooltipPosition",
        iquiTooltipShowOnFocus: "iquiTooltipShowOnFocus",
        iquiTooltipShowOnHover: "iquiTooltipShowOnHover",
        iquiTooltipStayInViewport: "iquiTooltipStayInViewport",
        iquiTooltipClass: "iquiTooltipClass"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[iquiTooltip]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]
        }];
      }, {
        iquiTooltip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiTooltipPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiTooltipShowOnFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiTooltipShowOnHover: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiTooltipStayInViewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        iquiTooltipClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * Renders a tooltip (not to be used directly; should be instantiated/managed by the orchestrating [iquiTooltip] directive)
     *
     * Usage:
     *
     *  <iqui-tooltip></iqui-tooltip>
     *
     */


    var TooltipComponent = /*#__PURE__*/function () {
      function TooltipComponent(element, _changeDetector) {
        _classCallCheck(this, TooltipComponent);

        this.element = element;
        this._changeDetector = _changeDetector;
        /**
         * Tooltip preferred position
         * (to be set/managed by the orchestrating [iquiTooltip] directive)
         */

        this.position = 'auto';
        /**
         * If tooltip should be displayed when parent control is focused
         * (to be set/managed by the orchestrating [iquiTooltip] directive)
         */

        this.showOnFocus = true;
        /**
         * If tooltip should be displayed when parent control is hovered over
         * (to be set/managed by the orchestrating [iquiTooltip] directive)
         */

        this.showOnHover = true;
        /**
         * Focused status
         * (to be set/managed by the orchestrating [iquiTooltip] directive)
         */

        this.focused = false;
        /**
         * Hovered status
         * (to be set/managed by the orchestrating [iquiTooltip] directive)
         */

        this.hovered = false;
        /**
         * Custom class
         * (to be set/managed by the orchestrating [iquiTooltip] directive)
         */

        this["class"] = null;
      }
      /**
       * Forces a component to (re)render if any of it's properties have changed
       */


      _createClass(TooltipComponent, [{
        key: "updateIfChangesDetected",
        value: function updateIfChangesDetected() {
          this._changeDetector.detectChanges();
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "_composedClassValue",
        get: function get() {
          // Ready values
          var position = this.position.split(' '); // Compose classes

          return [// Mark as tooltip (.tooltip)
          'tooltip', // Mark if visible (.tooltip-visible/.tooltip-hidden)
          this.showOnFocus && this.focused || this.showOnHover && this.hovered ? 'tooltip-visible' : 'tooltip-hidden', this.showOnFocus && this.focused ? 'tooltip-visible-focus' : null, this.showOnHover && this.hovered ? 'tooltip-visible-hover' : null, // Choose positioning (.bs-tooltip-[position])
          this.position !== 'auto' ? "bs-tooltip-".concat(this.position.split(' ')[0]) : null, // Choose precise positioning (.bs-tooltip-[position]-[alignment])
          this.position !== 'auto' ? "bs-tooltip-".concat(position.length === 1 ? "".concat(position[0], "-center") : position.join('-')) : null, // Inject custom class
          this["class"]].join(' ');
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["iqui-tooltip"]],
      ngContentSelectors: _c0,
      decls: 4,
      vars: 3,
      consts: [["tabindex", "-1", 1, "tooltip-inner"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
        }
      },
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: unset;\n  pointer-events: none;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .tooltip.tooltip-visible[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mdW5jdGlvbmFsL3Rvb2x0aXAvc3R5bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBQ0o7QUFDSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtBQUNOIiwiZmlsZSI6InByb2plY3RzL2lxdWktbmd4L3NyYy9saWIvY29tcG9uZW50cy9mdW5jdGlvbmFsL3Rvb2x0aXAvc3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIC50b29sdGlwIHtcbiAgICBwb3NpdGlvbjogdW5zZXQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYudG9vbHRpcC12aXNpYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-tooltip',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/showcasing/_showcase.ts":
  /*!**************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/showcasing/_showcase.ts ***!
    \**************************************************************/

  /*! exports provided: PlaygroundShowcaseComponent, ShowcasingShowcaseModule */

  /***/
  function iquiNgxSrcLibComponentsShowcasing_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcasingShowcaseModule", function () {
      return ShowcasingShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _playground_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./playground/_showcase */
    "../iqui-ngx/src/lib/components/showcasing/playground/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundShowcaseComponent", function () {
      return _playground_showcase__WEBPACK_IMPORTED_MODULE_4__["PlaygroundShowcaseComponent"];
    }); // Showcasing Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components
    // IQ UI NGX Elements' Showcasing module


    var ShowcasingShowcaseModule = function ShowcasingShowcaseModule() {
      _classCallCheck(this, ShowcasingShowcaseModule);
    };

    ShowcasingShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShowcasingShowcaseModule
    });
    ShowcasingShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShowcasingShowcaseModule_Factory(t) {
        return new (t || ShowcasingShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], ___WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]], // Export dependency modules
      _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], ___WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcasingShowcaseModule, {
        declarations: [_playground_showcase__WEBPACK_IMPORTED_MODULE_4__["PlaygroundShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], ___WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]],
        exports: [// Export dependency modules
        _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], ___WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"], // Export child components
        _playground_showcase__WEBPACK_IMPORTED_MODULE_4__["PlaygroundShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcasingShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], ___WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]],
          declarations: [_playground_showcase__WEBPACK_IMPORTED_MODULE_4__["PlaygroundShowcaseComponent"]],
          exports: [// Export dependency modules
          _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], ___WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"], // Export child components
          _playground_showcase__WEBPACK_IMPORTED_MODULE_4__["PlaygroundShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/showcasing/index.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/components/showcasing/index.ts ***!
    \**********************************************************/

  /*! exports provided: PlaygroundComponent, PlaygroundTextareaDirective, ShowcasingModule */

  /***/
  function iquiNgxSrcLibComponentsShowcasingIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowcasingModule", function () {
      return ShowcasingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _playground__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./playground */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function () {
      return _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundTextareaDirective", function () {
      return _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"];
    }); // Import dependencies
    // Import modules
    // Import components and (re)export components

    /**
     * IQ UI NGX Elements' showcasing module
     * Implements helpful utilities for building showcase applications
     */


    var ShowcasingModule = function ShowcasingModule() {
      _classCallCheck(this, ShowcasingModule);
    };

    ShowcasingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ShowcasingModule
    });
    ShowcasingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ShowcasingModule_Factory(t) {
        return new (t || ShowcasingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]], // Export dependency modules
      _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowcasingModule, {
        declarations: [_playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]],
        exports: [// Export dependency modules
        _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], // Export child components
        _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowcasingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"]],
          declarations: [_playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]],
          exports: [// Export dependency modules
          _form__WEBPACK_IMPORTED_MODULE_2__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], // Export child components
          _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundComponent"], _playground__WEBPACK_IMPORTED_MODULE_4__["PlaygroundTextareaDirective"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/showcasing/playground/_showcase/index.ts":
  /*!*******************************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/showcasing/playground/_showcase/index.ts ***!
    \*******************************************************************************/

  /*! exports provided: PlaygroundShowcaseComponent */

  /***/
  function iquiNgxSrcLibComponentsShowcasingPlayground_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundShowcaseComponent", function () {
      return PlaygroundShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _functional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../functional */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _showcasing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../index */
    "../iqui-ngx/src/lib/components/showcasing/playground/index.ts");
    /* harmony import */


    var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts"); // Button component showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules


    var _c0 = function _c0(a0, a1) {
      return [a0, a1];
    }; // Showcase component


    var PlaygroundShowcaseComponent = function PlaygroundShowcaseComponent() {
      _classCallCheck(this, PlaygroundShowcaseComponent);

      // Expose modules needed to render syntax
      this.CodeModule = _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"];
      this.ShowcasingModule = _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"]; // Playground context

      this.context = {
        Title: 'Demo in a Demo',
        Class: '',
        NgClass: {},
        Syntax: '<div [class]="context.class"> I do declare: "{{context.message}}" </div>',
        Context: {
          "class": 'card p-3',
          message: 'HelloWorld!'
        },
        Module: [_functional__WEBPACK_IMPORTED_MODULE_1__["FunctionalModule"], _basics__WEBPACK_IMPORTED_MODULE_2__["BasicsModule"], _form__WEBPACK_IMPORTED_MODULE_3__["FormModule"], _code__WEBPACK_IMPORTED_MODULE_4__["CodeModule"], _showcasing__WEBPACK_IMPORTED_MODULE_5__["ShowcasingModule"]]
      };
    };

    PlaygroundShowcaseComponent.ɵfac = function PlaygroundShowcaseComponent_Factory(t) {
      return new (t || PlaygroundShowcaseComponent)();
    };

    PlaygroundShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlaygroundShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 6,
      vars: 6,
      consts: [[1, "mt-5", 3, "title", "modules", "context"]],
      template: function PlaygroundShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Playground component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nProvides an interactive playground for a component or just-any-old-code example. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "iqui-playground", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdisableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n    <iqui-playground\n      [title]=\"   context.Title\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\"\n      [modules]=\"[context.Module]\"\n      [context]=\" context.Context\"\n      [syntax]=\"  context.Syntax\">\n    </iqui-playground>\n\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵenableBindings"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Demo")("modules", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx.CodeModule, ctx.ShowcasingModule))("context", ctx.context);
        }
      },
      directives: [_index__WEBPACK_IMPORTED_MODULE_6__["PlaygroundComponent"], _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_7__["TextareaDirective"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_8__["HighlightJsTextareaDirective"], _index__WEBPACK_IMPORTED_MODULE_6__["PlaygroundTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvc2hvd2Nhc2luZy9wbGF5Z3JvdW5kL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaygroundShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/components/showcasing/playground/index.ts":
  /*!*********************************************************************!*\
    !*** ../iqui-ngx/src/lib/components/showcasing/playground/index.ts ***!
    \*********************************************************************/

  /*! exports provided: PlaygroundTextareaDirective, PlaygroundComponent */

  /***/
  function iquiNgxSrcLibComponentsShowcasingPlaygroundIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundTextareaDirective", function () {
      return PlaygroundTextareaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function () {
      return PlaygroundComponent;
    });
    /* harmony import */


    var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/compiler */
    "../../node_modules/@angular/compiler/fesm2015/compiler.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _form_directives_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../form/directives/index */
    "../iqui-ngx/src/lib/components/form/directives/index.ts");
    /* harmony import */


    var _form_directives_form_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../form/directives/form/index */
    "../iqui-ngx/src/lib/components/form/directives/form/index.ts");
    /* harmony import */


    var _form_components_checkbox_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../form/components/checkbox/index */
    "../iqui-ngx/src/lib/components/form/components/checkbox/index.ts");
    /* harmony import */


    var _form_components_input_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../form/components/input/index */
    "../iqui-ngx/src/lib/components/form/components/input/index.ts");
    /* harmony import */


    var _form_components_select_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../form/components/select/index */
    "../iqui-ngx/src/lib/components/form/components/select/index.ts");
    /* harmony import */


    var _form_components_option_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../form/components/option/index */
    "../iqui-ngx/src/lib/components/form/components/option/index.ts");

    var _c0 = ["example"];

    function PlaygroundComponent_div_16_ng_container_5_iqui_checkbox_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "iqui-checkbox", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_checkbox_1_Template_iqui_checkbox_valueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r9._updateSelected(key_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r4._contextSelected[key_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r3, " ");
      }
    }

    function PlaygroundComponent_div_16_ng_container_5_iqui_input_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "iqui-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_input_2_Template_iqui_input_valueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r13._updateSelected(key_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx_r5._contextMultiline[key_r3] ? "textarea" : "text")("resize", ctx_r5._contextMultiline[key_r3])("value", ctx_r5._contextSelected[key_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r3, " ");
      }
    }

    function PlaygroundComponent_div_16_ng_container_5_iqui_input_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "iqui-input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_input_3_Template_iqui_input_valueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19);

          var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r17._updateSelected(key_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "number")("value", ctx_r6._contextSelected[key_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r3, " ");
      }
    }

    function PlaygroundComponent_div_16_ng_container_5_iqui_select_4_iqui_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "iqui-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r22)("label", value_r22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", value_r22, " ");
      }
    }

    function PlaygroundComponent_div_16_ng_container_5_iqui_select_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "iqui-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_select_4_Template_iqui_select_valueChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

          var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r24._updateSelected(key_r3, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlaygroundComponent_div_16_ng_container_5_iqui_select_4_iqui_option_2_Template, 2, 3, "iqui-option", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r7._contextSelected[key_r3]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r3, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7._context[key_r3].options);
      }
    }

    function PlaygroundComponent_div_16_ng_container_5_iqui_input_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "iqui-input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PlaygroundComponent_div_16_ng_container_5_iqui_input_5_Template_iqui_input_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r30);

          var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r28._updateSelected(key_r3, ctx_r28._stringToJson($event.target.value));
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", "textarea")("resize", true)("value", ctx_r8._jsonToString(ctx_r8._contextSelected[key_r3]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", key_r3, " ");
      }
    }

    function PlaygroundComponent_div_16_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PlaygroundComponent_div_16_ng_container_5_iqui_checkbox_1_Template, 2, 2, "iqui-checkbox", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PlaygroundComponent_div_16_ng_container_5_iqui_input_2_Template, 2, 4, "iqui-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PlaygroundComponent_div_16_ng_container_5_iqui_input_3_Template, 2, 3, "iqui-input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PlaygroundComponent_div_16_ng_container_5_iqui_select_4_Template, 3, 3, "iqui-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlaygroundComponent_div_16_ng_container_5_iqui_input_5_Template, 2, 4, "iqui-input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var key_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "boolean");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "string");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "array");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "object");
      }
    }

    function PlaygroundComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Context");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, PlaygroundComponent_div_16_ng_container_5_Template, 6, 5, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("size", "sm");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1._contextKeys);
      }
    }

    var _c1 = function _c1() {
      return ["xml"];
    };
    /**
     * Used to include syntax using a textarea child element
     *
     * Usage:
     *
     * <iqui-playground>
     *    <textarea ngNonBindable>
     *      <div> Code example: {{ context.test }} </div>
     *    </textarea>
     * </iqui-playground>
     */


    var PlaygroundTextareaDirective = function PlaygroundTextareaDirective() {
      _classCallCheck(this, PlaygroundTextareaDirective);
    };

    PlaygroundTextareaDirective.ɵfac = function PlaygroundTextareaDirective_Factory(t) {
      return new (t || PlaygroundTextareaDirective)();
    };

    PlaygroundTextareaDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: PlaygroundTextareaDirective,
      selectors: [["textarea"]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaygroundTextareaDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'textarea'
        }]
      }], null, null);
    })();
    /**
     * Renders an interactive demo for a component/directive
     *
     * Usage:
     *
     *  <iqui-playground [context]="{ test: 123 }">
     *    <textarea ngNonBindable>
     *      <div> Code example: {{ context.test }} </div>
     *    </textarea>
     *  </iqui-playground>
     */


    var PlaygroundComponent = /*#__PURE__*/function () {
      function PlaygroundComponent(_compiler, _injector, _module, _cd) {
        _classCallCheck(this, PlaygroundComponent);

        this._compiler = _compiler;
        this._injector = _injector;
        this._module = _module;
        this._cd = _cd;
        /**
         * Top title
         */

        this.title = null;
        /**
         * Syntax to render/display (if not passed via <textarea /> through component content)
         */

        this.syntax = null;
        /**
         * NgModules needed to render given syntax
         */

        this.modules = [];
        /**
         * Interactive configuration definition for the component being demoed
         */

        this.context = {};
        /**
         * Holds breakdown for all context properties
         */

        this._context = {};
        /**
         * Holds keys of all context properties
         */

        this._contextKeys = [];
        /**
         * Holds if multiline value for all context properties
         */

        this._contextMultiline = {};
        /**
         * Holds value syntax for all context properties
         */

        this._contextSyntax = {};
        /**
         * Holds selected value for all context properties
         */

        this._contextSelected = {};
      }

      _createClass(PlaygroundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Process configuration
          this._processContext();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          // Check if single <textarea /> child
          if (this.syntax) {
            // Load and process syntax
            this._processSyntax(this.syntax); // tslint:disable-next-line: max-line-length

          } else if (this._syntaxEl) {
            // Load and process syntax
            this._processSyntax(this._syntaxEl.nativeElement.value);
          } else {
            // Throw error
            // tslint:disable-next-line: max-line-length
            throw new Error('<iqui-playground /> components need sto be called with [syntax] attribute or a single <textarea /> child element containing syntax!');
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          // Process configuration
          if (changes.context) {
            this._processContext();
          } // (Re)Process syntax


          if (changes.syntax) {
            this._processSyntax(this.syntax);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._exampleComponent) {
            // Destroy dynamically added components
            this._exampleComponent.destroy();
          }
        }
        /**
         * Process provided context and example
         */

      }, {
        key: "_processContext",
        value: function _processContext() {
          var _this24 = this;

          // Reset context
          this._context = {};
          this._contextKeys = [];
          this._contextMultiline = {};
          this._contextSyntax = {};
          this._contextSelected = {}; // Recompose context

          for (var key in this.context) {
            if (this.context.hasOwnProperty(key)) {
              // Get context property
              this._contextKeys.push(key);

              var value = this.context[key]; // Initialize breakdown

              if (!this._context[key]) {
                this._context[key] = {};
              } // Get context property type


              var type = this._context[key].type = typeof value;

              if (type === 'object' && value instanceof Array) {
                type = this._context[key].type = 'array';
              } // Generate selection syntax


              if (type === 'string') {
                this._contextMultiline[key] = this._context[key].multiline = value.split('\n').length > 1;
              } // Generate selection syntax


              if (type === 'array') {
                var syntax = value.map(function (item) {
                  return _this24._stringifyValue(item);
                });
                this._contextSyntax[key] = this._context[key].syntax = "".concat(key, ": (").concat(syntax.join(' | '), ")");
              } else {
                this._contextSyntax[key] = this._context[key].syntax = "".concat(key, ": ").concat(this._context[key].type);
              } // (Pre)select value and options


              if (type === 'array') {
                this._context[key].options = value;
                this._contextSelected[key] = this._context[key].selected = value.length ? value[0] : null;
              } else {
                this._contextSelected[key] = this._context[key].selected = value;
              }
            }
          } // Trigger change detection


          this._triggerDynamicComponentsChangeDetection();
        }
        /**
         * Processes playground component syntax into a code syntax TemplateRef and an Example TemplateRef
         * @param syntax Component syntax to process
         */

      }, {
        key: "_processSyntax",
        value: function _processSyntax(syntax) {
          var _this25 = this;

          // Set usage syntax
          this._usageSyntax = syntax || '';

          for (var key in this._context) {
            if (this._context.hasOwnProperty(key)) {
              this._usageSyntax = this._usageSyntax.replace(new RegExp("context.".concat(key), 'g'), this._contextSyntax[key]);
            }
          } // Create dynamic component


          var dynamicComponentClass = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: syntax
          })( /*#__PURE__*/function () {
            function _class() {
              _classCallCheck(this, _class);

              this.context = {};
            }

            return _class;
          }()); // Create dynamic module

          var dynamicModuleClass = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: _toConsumableArray(this.modules),
            declarations: [dynamicComponentClass]
          })( /*#__PURE__*/function () {
            function _class2() {
              _classCallCheck(this, _class2);
            }

            return _class2;
          }()); // Create and inject dynamically created component

          this._compiler.compileModuleAndAllComponentsAsync(dynamicModuleClass).then(function (moduleWithFactories) {
            // Destroy previously dynamically added components
            if (_this25._exampleComponent) {
              _this25._exampleComponent.destroy();
            } // Inject component


            var moduleRef = moduleWithFactories.ngModuleFactory.create(_this25._injector),
                factory = moduleWithFactories.componentFactories[0];
            _this25._exampleComponent = factory.create(moduleRef.injector, [], null, _this25._module);

            _this25._exampleHostEl.clear();

            _this25._exampleHostEl.insert(_this25._exampleComponent.hostView); // Trigger change detection


            _this25._triggerDynamicComponentsChangeDetection();
          }); // Trigger change detection


          this._cd.detectChanges();
        }
        /**
         * Updates selected values /while replacing the entire containing hash-map to trigger change detection
         * @param key Key to update
         * @param value Updated value
         */

      }, {
        key: "_updateSelected",
        value: function _updateSelected(key, value) {
          // Update selected value
          this._contextSelected[key] = value; // Trigger change detection

          this._triggerDynamicComponentsChangeDetection();
        }
        /**
         * Triggers change detection on injected dynamic components
         */

      }, {
        key: "_triggerDynamicComponentsChangeDetection",
        value: function _triggerDynamicComponentsChangeDetection() {
          if (this._exampleComponent) {
            this._exampleComponent.instance.context = this._contextSelected;

            this._exampleComponent.hostView.detectChanges();
          }
        }
        /**
         * Gets string representation of value
         * @param value Value to stringify
         * @returns String representation of value
         */

      }, {
        key: "_stringifyValue",
        value: function _stringifyValue(value) {
          if (value === undefined) {
            // Stringify undefined
            return 'undefined';
          } else if (value === null) {
            // Stringify null
            return 'null';
          } else if (typeof value === 'function' && value.decorators && value.decorators.length) {
            // Stringify decorated classes into class names
            return "[".concat(value.decorators[0].type.prototype.ngMetadataName, "]");
          } else if (typeof value === 'function' && value.constructor) {
            // Stringify classes into class names
            return "[".concat(value.constructor.name, "]");
          } else {
            // Stringify as JSON
            return JSON.stringify(value).replace(/"/g, "'");
          }
        }
        /**
         * Expose JSON.stringify(...)
         * @param json JSON to strinfigy
         * @returns Stringified value
         */

      }, {
        key: "_jsonToString",
        value: function _jsonToString(json) {
          return JSON.stringify(json, null, 2);
        }
        /**
         * Exposes JSON.parse(...)
         * @param  str String to parse
         * @returns Parsed value
         */

      }, {
        key: "_stringToJson",
        value: function _stringToJson(str) {
          try {
            return JSON.parse(str);
          } catch (_a) {
            return {};
          }
        }
        /**
         * Composes class value based on property values
         */

      }, {
        key: "ngClass",
        get: function get() {
          return this._ngClass;
        },
        set: function set(value) {
          this._ngClass = value;
          this._attrNgClass = null;
        }
      }, {
        key: "class",
        get: function get() {
          return this._class;
        },
        set: function set(value) {
          this._class = value;
          this._attrClass = null;
        }
      }, {
        key: "_composedClassValue",
        get: function get() {
          return [// Mark as card (.card)
          'card', // Pass-through host class
          this["class"] || null].join(' ');
        }
      }]);

      return PlaygroundComponent;
    }();

    PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) {
      return new (t || PlaygroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModuleRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]));
    };

    PlaygroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PlaygroundComponent,
      selectors: [["iqui-playground"]],
      contentQueries: function PlaygroundComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, PlaygroundTextareaDirective, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._syntaxEl = _t.first);
        }
      },
      viewQuery: function PlaygroundComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._exampleHostEl = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function PlaygroundComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
        }
      },
      inputs: {
        ngClass: "ngClass",
        "class": "class",
        title: "title",
        syntax: "syntax",
        modules: "modules",
        context: "context"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 17,
      vars: 9,
      consts: [[3, "ngClass"], [1, "card-header"], [1, "row", "p-3"], [1, "card"], [1, "card-body"], ["example", ""], [1, "card", "mt-3"], [3, "syntax", "languages"], ["class", "col-4", 4, "ngIf"], [1, "col-4"], ["iquiForm", "", 1, "card-body", 3, "size"], [4, "ngFor", "ngForOf"], [3, "value", "valueChange", 4, "ngIf"], [3, "type", "resize", "value", "valueChange", 4, "ngIf"], [3, "type", "value", "valueChange", 4, "ngIf"], [3, "type", "resize", "value", "change", 4, "ngIf"], [3, "value", "valueChange"], [3, "type", "resize", "value", "valueChange"], [3, "type", "value", "valueChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [3, "value", "label"], [3, "type", "resize", "value", "change"]],
      template: function PlaygroundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Example");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](9, null, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Usage");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "iqui-highlightjs", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PlaygroundComponent_div_16_Template, 6, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx._composedClassValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.ngClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title || "Demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx._contextKeys.length ? "col-8" : "col-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("syntax", ctx._usageSyntax)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._contextKeys.length);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__["HighlightJsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _form_directives_index__WEBPACK_IMPORTED_MODULE_4__["FormElementDirective"], _form_directives_form_index__WEBPACK_IMPORTED_MODULE_5__["FormDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _form_components_checkbox_index__WEBPACK_IMPORTED_MODULE_6__["CheckboxComponent"], _form_components_input_index__WEBPACK_IMPORTED_MODULE_7__["InputComponent"], _form_components_select_index__WEBPACK_IMPORTED_MODULE_8__["SelectComponent"], _form_components_option_index__WEBPACK_IMPORTED_MODULE_9__["OptionDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2NvbXBvbmVudHMvc2hvd2Nhc2luZy9wbGF5Z3JvdW5kL3N0eWxlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlaygroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'iqui-playground',
          templateUrl: './index.html',
          styleUrls: ['./style.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Compiler"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModuleRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }];
      }, {
        _attrNgClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.ngClass']
        }],
        ngClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _attrClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"],
          args: ['attr.class']
        }],
        "class": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        syntax: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        modules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        context: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        _syntaxEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [PlaygroundTextareaDirective, {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }]
        }],
        _exampleHostEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['example', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/data/Pagination/_showcase/index.ts":
  /*!**************************************************************!*\
    !*** ../iqui-ngx/src/lib/data/Pagination/_showcase/index.ts ***!
    \**************************************************************/

  /*! exports provided: PaginationShowcaseComponent */

  /***/
  function iquiNgxSrcLibDataPagination_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginationShowcaseComponent", function () {
      return PaginationShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Pagination class showcase
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = function _c0() {
      return ["/pipes", "Paginate"];
    }; // Showcase component


    var PaginationShowcaseComponent = function PaginationShowcaseComponent() {
      _classCallCheck(this, PaginationShowcaseComponent);
    };

    PaginationShowcaseComponent.ɵfac = function PaginationShowcaseComponent_Factory(t) {
      return new (t || PaginationShowcaseComponent)();
    };

    PaginationShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginationShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 2,
      consts: [[3, "routerLink"]],
      template: function PaginationShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagination class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nProvides pagination of an array of items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nAlso see: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Paginate Pipe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2RhdGEvUGFnaW5hdGlvbi9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/data/Pagination/index.ts":
  /*!****************************************************!*\
    !*** ../iqui-ngx/src/lib/data/Pagination/index.ts ***!
    \****************************************************/

  /*! exports provided: Pagination */

  /***/
  function iquiNgxSrcLibDataPaginationIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return Pagination;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Pagination class
    // Used to paginate arrays of items
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Pagination class
     */


    var Pagination = /*#__PURE__*/function () {
      function Pagination() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref2$items = _ref2.items,
            items = _ref2$items === void 0 ? [] : _ref2$items,
            _ref2$pageLength = _ref2.pageLength,
            pageLength = _ref2$pageLength === void 0 ? 10 : _ref2$pageLength;

        _classCallCheck(this, Pagination);

        /**
         * Changed event triggers when pagination has changed
         */
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Holds currently selected page
         */

        this._currentPage = 0; // Set properties

        this.items = items;
        this._pageLength = pageLength;
      }
      /**
       * Returns array of items on the current page
       */


      _createClass(Pagination, [{
        key: "getCurrentPageRange",
        value: function getCurrentPageRange() {
          return this.items.slice(this._currentPage * this._pageLength, (this._currentPage + 1) * this._pageLength);
        }
        /**
         * Gets current page's first item index
         */

      }, {
        key: "getCurrentPageFirstIndex",
        value: function getCurrentPageFirstIndex() {
          return this._currentPage * this._pageLength;
        }
        /**
         * Gets current page's last item index
         */

      }, {
        key: "getCurrentPageLastIndex",
        value: function getCurrentPageLastIndex() {
          var lastIndex = (this._currentPage + 1) * this._pageLength - 1;
          return lastIndex <= this.items.length - 1 ? lastIndex : this.items.length - 1;
        }
        /**
         * Gets current page's length
         */

      }, {
        key: "getCurrentPageLength",
        value: function getCurrentPageLength() {
          return this._pageLength;
        }
        /**
         * Selects given page as the current page
         * @param page Page to set as current
         */

      }, {
        key: "gotoPage",
        value: function gotoPage(page) {
          // Set updated current page
          this._currentPage = page; // Trigger changed event

          this.changed.emit();
        }
        /**
         * Checks if previous page exists
         */

      }, {
        key: "checkPreviousPage",
        value: function checkPreviousPage() {
          return this._currentPage > 0;
        }
        /**
         * Selects the next page as the current page
         */

      }, {
        key: "gotoPreviousPage",
        value: function gotoPreviousPage() {
          if (this.checkPreviousPage()) {
            this.gotoPage(this._currentPage - 1);
          }
        }
        /**
         * Checks if previous page exists
         */

      }, {
        key: "checkNextPage",
        value: function checkNextPage() {
          return this._currentPage < Math.ceil(this.items.length / this._pageLength) - 1;
        }
        /**
         * Selects the next page as the current page
         */

      }, {
        key: "gotoNextPage",
        value: function gotoNextPage() {
          if (this.checkNextPage()) {
            this.gotoPage(this._currentPage + 1);
          }
        }
        /**
         * Composes info about current pagination state
         */

      }, {
        key: "getInfo",
        value: function getInfo() {
          return {
            currentPage: this._currentPage,
            currentFirstIndex: this.getCurrentPageFirstIndex(),
            currentLastIndex: this.getCurrentPageLastIndex(),
            pageLength: this.getCurrentPageLength(),
            totalLength: this.items.length
          };
        }
      }]);

      return Pagination;
    }();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/data/Phrase/_showcase/index.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/data/Phrase/_showcase/index.ts ***!
    \**********************************************************/

  /*! exports provided: PhraseShowcaseComponent */

  /***/
  function iquiNgxSrcLibDataPhrase_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhraseShowcaseComponent", function () {
      return PhraseShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Phrase class showcase
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = function _c0() {
      return ["/controls", "composite", "basics", "phraseinput"];
    }; // Showcase component


    var PhraseShowcaseComponent = function PhraseShowcaseComponent() {
      _classCallCheck(this, PhraseShowcaseComponent);
    };

    PhraseShowcaseComponent.ɵfac = function PhraseShowcaseComponent_Factory(t) {
      return new (t || PhraseShowcaseComponent)();
    };

    PhraseShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhraseShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 2,
      consts: [[3, "routerLink"]],
      template: function PhraseShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phrase class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDescribes a searchable/filtereable phrase ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nAlso see: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Phrase input control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL2RhdGEvUGhyYXNlL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhraseShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/data/Phrase/index.ts":
  /*!************************************************!*\
    !*** ../iqui-ngx/src/lib/data/Phrase/index.ts ***!
    \************************************************/

  /*! exports provided: Phrase */

  /***/
  function iquiNgxSrcLibDataPhraseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Phrase", function () {
      return Phrase;
    });
    /* harmony import */


    var _ofzza_entt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ofzza/entt */
    "../../node_modules/@ofzza/entt/index.js");
    /* harmony import */


    var _ofzza_entt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ofzza_entt__WEBPACK_IMPORTED_MODULE_0__); // Phrase class
    // Used to encapsulate a searchable/filterable string/reg-exp definition
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Phrase class
     */


    var Phrase = /*#__PURE__*/function (_ofzza_entt__WEBPACK_) {
      _inherits(Phrase, _ofzza_entt__WEBPACK_);

      var _super16 = _createSuper(Phrase);

      function Phrase() {
        var _thisSuper, _this26;

        var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref3$isRegExp = _ref3.isRegExp,
            isRegExp = _ref3$isRegExp === void 0 ? false : _ref3$isRegExp,
            _ref3$isCaseSensitive = _ref3.isCaseSensitive,
            isCaseSensitive = _ref3$isCaseSensitive === void 0 ? false : _ref3$isCaseSensitive;

        _classCallCheck(this, Phrase);

        _this26 = _super16.call(this);
        /**
         * Holds phrase inner value
         */

        _this26.value = undefined;
        /**
         * Holds if value is a RegExp string
         */

        _this26.isRegExp = undefined;
        /**
         * Holds if value is case sensitive
         */

        _this26.isCaseSensitive = undefined;

        _get((_thisSuper = _assertThisInitialized(_this26), _getPrototypeOf(Phrase.prototype)), "entt", _thisSuper).call(_thisSuper); // Set properties


        _this26.value = value;
        _this26.isRegExp = isRegExp;
        _this26.isCaseSensitive = isCaseSensitive;
        return _this26;
      }
      /**
       * Clones a phrase instance
       * @param phrase Phrase instance to clone
       */


      _createClass(Phrase, [{
        key: "match",

        /**
         * Checks if haystack contains phrase
         * @param haystack String to check
         */
        value: function match(haystack) {
          if (!this.isRegExp) {
            // Match as plain string
            if (this.isCaseSensitive) {
              // Maths as case-sensitive
              return haystack.toLowerCase().indexOf(this.value.toLowerCase()) !== -1;
            } else {
              // Maths as not case-sensitive
              return haystack.indexOf(this.value) !== -1;
            }
          } else {
            // Match as regexp
            return !!haystack.match(new RegExp(this.value, this.isCaseSensitive ? '' : 'i'));
          }
        }
        /**
         * Converts a phrase into a string representation
         */

      }, {
        key: "toString",
        value: function toString() {
          return Phrase.stringify(this);
        }
      }, {
        key: "isEmpty",

        /**
         * Checks if phrase is empty (equal to newly created instance)
         */
        get: function get() {
          return !this.value && !this.isRegExp && !this.isCaseSensitive;
        }
      }], [{
        key: "clone",
        value: function clone(phrase) {
          return new Phrase(phrase.value, {
            isCaseSensitive: phrase.isCaseSensitive,
            isRegExp: phrase.isRegExp
          });
        }
        /**
         * Converts a Phrase instance into a string representation
         * @param phrase Phrase instance
         */

      }, {
        key: "stringify",
        value: function stringify(phrase) {
          if (phrase._isRegExp) {
            return "/".concat(phrase.value, "/").concat(!phrase.isCaseSensitive ? 'i' : '');
          } else {
            return "\"".concat(phrase.value, "\"").concat(!phrase.isCaseSensitive ? 'i' : '');
          }
        }
        /**
         * Converts a string representation of a Phrase into a Phrase instance
         * @param value Phrase string representation
         */

      }, {
        key: "parse",
        value: function parse(value) {
          if (value && value.length && value[0] === '/') {
            // Parse regexp
            var parsed = value.split('/'),
                content = parsed.slice(1, -1).join('/'),
                isCaseSensitive = parsed[parsed.length - 1].indexOf('i') === -1;
            return new Phrase(content, {
              isRegExp: true,
              isCaseSensitive: isCaseSensitive
            });
          } else if (value && value.length && value[0] === '"') {
            // Parse string
            var _parsed = value.split('"'),
                _content = _parsed.slice(1, -1).join('"'),
                _isCaseSensitive = _parsed[_parsed.length - 1].indexOf('i') === -1;

            return new Phrase(_content, {
              isRegExp: false,
              isCaseSensitive: _isCaseSensitive
            });
          } else {
            throw new Error('Value not recognized as a string representation of a Phrase!');
          }
        }
      }]);

      return Phrase;
    }(_ofzza_entt__WEBPACK_IMPORTED_MODULE_0__["EnTT"]);
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/data/_showcase.ts":
  /*!*********************************************!*\
    !*** ../iqui-ngx/src/lib/data/_showcase.ts ***!
    \*********************************************/

  /*! exports provided: PaginationShowcaseComponent, PhraseShowcaseComponent, DataShowcaseModule */

  /***/
  function iquiNgxSrcLibData_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataShowcaseModule", function () {
      return DataShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../components/code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _components_showcasing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../components/showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _Pagination_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Pagination/_showcase */
    "../iqui-ngx/src/lib/data/Pagination/_showcase/index.ts");
    /* harmony import */


    var _Phrase_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Phrase/_showcase */
    "../iqui-ngx/src/lib/data/Phrase/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginationShowcaseComponent", function () {
      return _Pagination_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginationShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseShowcaseComponent", function () {
      return _Phrase_showcase__WEBPACK_IMPORTED_MODULE_6__["PhraseShowcaseComponent"];
    }); // Data Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components
    // IQ UI NGX Elements' Basic elements module


    var DataShowcaseModule = function DataShowcaseModule() {
      _classCallCheck(this, DataShowcaseModule);
    };

    DataShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DataShowcaseModule
    });
    DataShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DataShowcaseModule_Factory(t) {
        return new (t || DataShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]], // Export dependency modules
      _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataShowcaseModule, {
        declarations: [_Pagination_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginationShowcaseComponent"], _Phrase_showcase__WEBPACK_IMPORTED_MODULE_6__["PhraseShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]],
        exports: [// Export dependency modules
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"], // Export child components
        _Pagination_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginationShowcaseComponent"], _Phrase_showcase__WEBPACK_IMPORTED_MODULE_6__["PhraseShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"]],
          declarations: [_Pagination_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginationShowcaseComponent"], _Phrase_showcase__WEBPACK_IMPORTED_MODULE_6__["PhraseShowcaseComponent"]],
          exports: [// Export dependency modules
          _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_4__["ShowcasingModule"], // Export child components
          _Pagination_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginationShowcaseComponent"], _Phrase_showcase__WEBPACK_IMPORTED_MODULE_6__["PhraseShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/data/index.ts":
  /*!*****************************************!*\
    !*** ../iqui-ngx/src/lib/data/index.ts ***!
    \*****************************************/

  /*! exports provided: Phrase, Pagination */

  /***/
  function iquiNgxSrcLibDataIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _Phrase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Phrase */
    "../iqui-ngx/src/lib/data/Phrase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Phrase", function () {
      return _Phrase__WEBPACK_IMPORTED_MODULE_0__["Phrase"];
    });
    /* harmony import */


    var _Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./Pagination */
    "../iqui-ngx/src/lib/data/Pagination/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return _Pagination__WEBPACK_IMPORTED_MODULE_1__["Pagination"];
    }); // Data repository
    // ----------------------------------------------------------------------------
    // (Re)export data

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/index.ts":
  /*!************************************!*\
    !*** ../iqui-ngx/src/lib/index.ts ***!
    \************************************/

  /*! exports provided: HtmlInputType, BootstrapTheme, BootstrapSize, BootstrapRelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions, FunctionalModule, BookmarkableService, DeclareDirective, Copy2ClipboardDirective, TooltipComponent, TooltipDirective, TooltipRelativePositioning, DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective, DropdownRelativePositioning, CollapseDirective, ToastComponent, ModalComponent, ModalDirective, ModalDialogDirective, BookmarkableDirective, FunctionalShowcaseModule, DeclareShowcaseComponent, Copy2ClipboardShowcaseComponent, TooltipShowcaseComponent, DropdownShowcaseComponent, CollapseShowcaseComponent, ModalShowcaseComponent, ToastShowcaseComponent, BookmarkableShowcaseComponent, BasicsModule, ButtonComponent, ButtonComponentTheme, ButtonComponentSize, DropdownButtonComponent, DropdownButtonComponentTheme, DropdownButtonComponentSize, DropdownButtonComponentRelativePositioning, PhraseInputComponent, BasicsShowcaseModule, ButtonShowcaseComponent, DropdownButtonShowcaseComponent, PhraseInputShowcaseComponent, FormModule, FormElementDirective, UsesFormElementDirectives, FormDirective, FormGroupDirective, ButtonDirective, LabelDirective, TextareaDirective, InputDirective, CheckboxDirective, RadioDirective, SelectDirective, InputComponent, InputType, CheckboxComponent, OptionDirective, RadioComponent, SelectComponent, FormShowcaseModule, FormShowcaseComponent, InputShowcaseComponent, CheckboxShowcaseComponent, RadioShowcaseComponent, SelectShowcaseComponent, CodeModule, HighlightJsComponent, HighlightJsTextareaDirective, HighlightJsInjectTopDirective, HighlightJsInjectBottomDirective, highlightJsRegisterLanguage, CodeShowcaseModule, HighlightJsShowcaseComponent, ShowcasingModule, PlaygroundComponent, PlaygroundTextareaDirective, ShowcasingShowcaseModule, PlaygroundShowcaseComponent, DataShowcaseModule, PaginationShowcaseComponent, PhraseShowcaseComponent, PipesModule, FilterPipe, PaginatePipe, SlicePipe, SortPipe, PipesShowcaseModule, FilterShowcaseComponent, SortShowcaseComponent, PaginateShowcaseComponent, SliceShowcaseComponent, RoutingShowcaseModule, PageServiceShowcaseComponent, ShowcaseModule, ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent, getShowcasePages, Phrase, Pagination, Page, ClipboardService, providers, IqUiNgxModule */

  /***/
  function iquiNgxSrcLibIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "providers", function () {
      return providers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IqUiNgxModule", function () {
      return IqUiNgxModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _components_functional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/functional */
    "../iqui-ngx/src/lib/components/functional/index.ts");
    /* harmony import */


    var _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/functional/_showcase */
    "../iqui-ngx/src/lib/components/functional/_showcase.ts");
    /* harmony import */


    var _components_basics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/basics */
    "../iqui-ngx/src/lib/components/basics/index.ts");
    /* harmony import */


    var _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/basics/_showcase */
    "../iqui-ngx/src/lib/components/basics/_showcase.ts");
    /* harmony import */


    var _components_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/form */
    "../iqui-ngx/src/lib/components/form/index.ts");
    /* harmony import */


    var _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/form/_showcase */
    "../iqui-ngx/src/lib/components/form/_showcase.ts");
    /* harmony import */


    var _components_code__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/code/_showcase */
    "../iqui-ngx/src/lib/components/code/_showcase.ts");
    /* harmony import */


    var _components_showcasing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/showcasing/_showcase */
    "../iqui-ngx/src/lib/components/showcasing/_showcase.ts");
    /* harmony import */


    var _data_showcase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./data/_showcase */
    "../iqui-ngx/src/lib/data/_showcase.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pipes */
    "../iqui-ngx/src/lib/pipes/index.ts");
    /* harmony import */


    var _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pipes/_showcase */
    "../iqui-ngx/src/lib/pipes/_showcase.ts");
    /* harmony import */


    var _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/routing/_showcase */
    "../iqui-ngx/src/lib/services/routing/_showcase.ts");
    /* harmony import */


    var _showcase__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./_showcase */
    "../iqui-ngx/src/lib/_showcase/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./services */
    "../iqui-ngx/src/lib/services/index.ts");
    /* harmony import */


    var _types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./types */
    "../iqui-ngx/src/lib/types/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HtmlInputType", function () {
      return _types__WEBPACK_IMPORTED_MODULE_19__["HtmlInputType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapTheme", function () {
      return _types__WEBPACK_IMPORTED_MODULE_19__["BootstrapTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapSize", function () {
      return _types__WEBPACK_IMPORTED_MODULE_19__["BootstrapSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapRelativePositioning", function () {
      return _types__WEBPACK_IMPORTED_MODULE_19__["BootstrapRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RelativePositioningPriority", function () {
      return _types__WEBPACK_IMPORTED_MODULE_19__["RelativePositioningPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkRelativePositioningDefinitions", function () {
      return _types__WEBPACK_IMPORTED_MODULE_19__["AngularCdkRelativePositioningDefinitions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FunctionalModule", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["FunctionalModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableService", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["BookmarkableService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeclareDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DeclareDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["Copy2ClipboardDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["TooltipComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["TooltipDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipRelativePositioning", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["TooltipRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DropdownComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DropdownDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownHeaderDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DropdownHeaderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownBodyDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DropdownBodyDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownFooterDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DropdownFooterDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownRelativePositioning", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["DropdownRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapseDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["CollapseDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["ToastComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["ModalDialogDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableDirective", function () {
      return _components_functional__WEBPACK_IMPORTED_MODULE_3__["BookmarkableDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FunctionalShowcaseModule", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["FunctionalShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeclareShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["DeclareShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["Copy2ClipboardShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["TooltipShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["DropdownShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapseShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["CollapseShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["ModalShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["ToastShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableShowcaseComponent", function () {
      return _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["BookmarkableShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BasicsModule", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["BasicsModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentTheme", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["ButtonComponentTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentSize", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["ButtonComponentSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponent", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["DropdownButtonComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentTheme", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["DropdownButtonComponentTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentSize", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["DropdownButtonComponentSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentRelativePositioning", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["DropdownButtonComponentRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputComponent", function () {
      return _components_basics__WEBPACK_IMPORTED_MODULE_5__["PhraseInputComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BasicsShowcaseModule", function () {
      return _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["BasicsShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonShowcaseComponent", function () {
      return _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["ButtonShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonShowcaseComponent", function () {
      return _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["DropdownButtonShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputShowcaseComponent", function () {
      return _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["PhraseInputShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["FormModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormElementDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["FormElementDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UsesFormElementDirectives", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["UsesFormElementDirectives"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["FormDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LabelDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["LabelDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TextareaDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["TextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["InputDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["CheckboxDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["RadioDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["SelectDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["InputComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputType", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["InputType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["CheckboxComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OptionDirective", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["OptionDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioComponent", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["RadioComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return _components_form__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseModule", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["FormShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseComponent", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["FormShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputShowcaseComponent", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["InputShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxShowcaseComponent", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["CheckboxShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioShowcaseComponent", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["RadioShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectShowcaseComponent", function () {
      return _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["SelectShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeModule", function () {
      return _components_code__WEBPACK_IMPORTED_MODULE_9__["CodeModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsComponent", function () {
      return _components_code__WEBPACK_IMPORTED_MODULE_9__["HighlightJsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsTextareaDirective", function () {
      return _components_code__WEBPACK_IMPORTED_MODULE_9__["HighlightJsTextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectTopDirective", function () {
      return _components_code__WEBPACK_IMPORTED_MODULE_9__["HighlightJsInjectTopDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectBottomDirective", function () {
      return _components_code__WEBPACK_IMPORTED_MODULE_9__["HighlightJsInjectBottomDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "highlightJsRegisterLanguage", function () {
      return _components_code__WEBPACK_IMPORTED_MODULE_9__["highlightJsRegisterLanguage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeShowcaseModule", function () {
      return _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__["CodeShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsShowcaseComponent", function () {
      return _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__["HighlightJsShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasingModule", function () {
      return _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["ShowcasingModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function () {
      return _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["PlaygroundComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundTextareaDirective", function () {
      return _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["PlaygroundTextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasingShowcaseModule", function () {
      return _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__["ShowcasingShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundShowcaseComponent", function () {
      return _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__["PlaygroundShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataShowcaseModule", function () {
      return _data_showcase__WEBPACK_IMPORTED_MODULE_13__["DataShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginationShowcaseComponent", function () {
      return _data_showcase__WEBPACK_IMPORTED_MODULE_13__["PaginationShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseShowcaseComponent", function () {
      return _data_showcase__WEBPACK_IMPORTED_MODULE_13__["PhraseShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return _pipes__WEBPACK_IMPORTED_MODULE_14__["PipesModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return _pipes__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return _pipes__WEBPACK_IMPORTED_MODULE_14__["PaginatePipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlicePipe", function () {
      return _pipes__WEBPACK_IMPORTED_MODULE_14__["SlicePipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return _pipes__WEBPACK_IMPORTED_MODULE_14__["SortPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PipesShowcaseModule", function () {
      return _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PipesShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilterShowcaseComponent", function () {
      return _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["FilterShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortShowcaseComponent", function () {
      return _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["SortShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginateShowcaseComponent", function () {
      return _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PaginateShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SliceShowcaseComponent", function () {
      return _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["SliceShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutingShowcaseModule", function () {
      return _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__["RoutingShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageServiceShowcaseComponent", function () {
      return _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__["PageServiceShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function () {
      return _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function () {
      return _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasePagesDirective", function () {
      return _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcasePagesDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseMenuComponent", function () {
      return _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseMenuComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getShowcasePages", function () {
      return _showcase__WEBPACK_IMPORTED_MODULE_17__["getShowcasePages"];
    });
    /* empty/unused harmony star reexport */

    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./data */
    "../iqui-ngx/src/lib/data/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Phrase", function () {
      return _data__WEBPACK_IMPORTED_MODULE_20__["Phrase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return _data__WEBPACK_IMPORTED_MODULE_20__["Pagination"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return _services__WEBPACK_IMPORTED_MODULE_18__["Page"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
      return _services__WEBPACK_IMPORTED_MODULE_18__["ClipboardService"];
    }); // Import dependencies
    // Import and (re)export component modules
    // Import and (re)export services
    // Import and (re)export types
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting
    // Required IVY hinting


    var modules = [// Component modules
    _components_functional__WEBPACK_IMPORTED_MODULE_3__["FunctionalModule"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["FunctionalShowcaseModule"], _components_basics__WEBPACK_IMPORTED_MODULE_5__["BasicsModule"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["BasicsShowcaseModule"], _components_form__WEBPACK_IMPORTED_MODULE_7__["FormModule"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["FormShowcaseModule"], _components_code__WEBPACK_IMPORTED_MODULE_9__["CodeModule"], _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__["CodeShowcaseModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["ShowcasingModule"], _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__["ShowcasingShowcaseModule"], // Data modules
    _data_showcase__WEBPACK_IMPORTED_MODULE_13__["DataShowcaseModule"], // Pipes modules
    _pipes__WEBPACK_IMPORTED_MODULE_14__["PipesModule"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PipesShowcaseModule"], // Services modules
    _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__["RoutingShowcaseModule"], // Showcase module
    _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseModule"]]; // Import and (re)export types
    // Import and (re)export data
    // Compose and export all providers

    var providers = [_components_functional__WEBPACK_IMPORTED_MODULE_3__["BookmarkableService"], _services__WEBPACK_IMPORTED_MODULE_18__["ClipboardService"]];
    /**
     * IQ UI NGX Elements' module
     * InQuest NGX reusable Elements based of Angular material CDK and Bootstrap
     */

    var IqUiNgxModule = function IqUiNgxModule() {
      _classCallCheck(this, IqUiNgxModule);
    };

    IqUiNgxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IqUiNgxModule
    });
    IqUiNgxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function IqUiNgxModule_Factory(t) {
        return new (t || IqUiNgxModule)();
      },
      providers: [].concat(providers),
      imports: [[// Import angular dependencies
      _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]].concat(modules), // Component modules
      _components_functional__WEBPACK_IMPORTED_MODULE_3__["FunctionalModule"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["FunctionalShowcaseModule"], _components_basics__WEBPACK_IMPORTED_MODULE_5__["BasicsModule"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["BasicsShowcaseModule"], _components_form__WEBPACK_IMPORTED_MODULE_7__["FormModule"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["FormShowcaseModule"], _components_code__WEBPACK_IMPORTED_MODULE_9__["CodeModule"], _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__["CodeShowcaseModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["ShowcasingModule"], _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__["ShowcasingShowcaseModule"], // Data modules
      _data_showcase__WEBPACK_IMPORTED_MODULE_13__["DataShowcaseModule"], // Pipes modules
      _pipes__WEBPACK_IMPORTED_MODULE_14__["PipesModule"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PipesShowcaseModule"], // Services modules
      _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__["RoutingShowcaseModule"], // Showcase module
      _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IqUiNgxModule, {
        imports: [// Import angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], // Component modules
        _components_functional__WEBPACK_IMPORTED_MODULE_3__["FunctionalModule"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["FunctionalShowcaseModule"], _components_basics__WEBPACK_IMPORTED_MODULE_5__["BasicsModule"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["BasicsShowcaseModule"], _components_form__WEBPACK_IMPORTED_MODULE_7__["FormModule"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["FormShowcaseModule"], _components_code__WEBPACK_IMPORTED_MODULE_9__["CodeModule"], _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__["CodeShowcaseModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["ShowcasingModule"], _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__["ShowcasingShowcaseModule"], // Data modules
        _data_showcase__WEBPACK_IMPORTED_MODULE_13__["DataShowcaseModule"], // Pipes modules
        _pipes__WEBPACK_IMPORTED_MODULE_14__["PipesModule"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PipesShowcaseModule"], // Services modules
        _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__["RoutingShowcaseModule"], // Showcase module
        _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseModule"]],
        exports: [// Component modules
        _components_functional__WEBPACK_IMPORTED_MODULE_3__["FunctionalModule"], _components_functional_showcase__WEBPACK_IMPORTED_MODULE_4__["FunctionalShowcaseModule"], _components_basics__WEBPACK_IMPORTED_MODULE_5__["BasicsModule"], _components_basics_showcase__WEBPACK_IMPORTED_MODULE_6__["BasicsShowcaseModule"], _components_form__WEBPACK_IMPORTED_MODULE_7__["FormModule"], _components_form_showcase__WEBPACK_IMPORTED_MODULE_8__["FormShowcaseModule"], _components_code__WEBPACK_IMPORTED_MODULE_9__["CodeModule"], _components_code_showcase__WEBPACK_IMPORTED_MODULE_10__["CodeShowcaseModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_11__["ShowcasingModule"], _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_12__["ShowcasingShowcaseModule"], // Data modules
        _data_showcase__WEBPACK_IMPORTED_MODULE_13__["DataShowcaseModule"], // Pipes modules
        _pipes__WEBPACK_IMPORTED_MODULE_14__["PipesModule"], _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__["PipesShowcaseModule"], // Services modules
        _services_routing_showcase__WEBPACK_IMPORTED_MODULE_16__["RoutingShowcaseModule"], // Showcase module
        _showcase__WEBPACK_IMPORTED_MODULE_17__["ShowcaseModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IqUiNgxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [// Import angular dependencies
          _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"]].concat(modules),
          declarations: [],
          providers: [].concat(providers),
          exports: [].concat(modules)
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Filter/_showcase/index.ts":
  /*!***********************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Filter/_showcase/index.ts ***!
    \***********************************************************/

  /*! exports provided: FilterShowcaseComponent */

  /***/
  function iquiNgxSrcLibPipesFilter_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterShowcaseComponent", function () {
      return FilterShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Filter pipe showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Showcase component


    var FilterShowcaseComponent = function FilterShowcaseComponent() {
      _classCallCheck(this, FilterShowcaseComponent);
    };

    FilterShowcaseComponent.ɵfac = function FilterShowcaseComponent_Factory(t) {
      return new (t || FilterShowcaseComponent)();
    };

    FilterShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilterShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      template: function FilterShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter Pipe class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nFilters a collection based on a string, RegExp or Phrase\n");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL3BpcGVzL0ZpbHRlci9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Filter/index.ts":
  /*!*************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Filter/index.ts ***!
    \*************************************************/

  /*! exports provided: FilterPipe */

  /***/
  function iquiNgxSrcLibPipesFilterIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return FilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../data */
    "../iqui-ngx/src/lib/data/index.ts"); // Phrase filtering pipe
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Filters items based on provided filtering argument
     */


    var FilterPipe = /*#__PURE__*/function () {
      function FilterPipe() {
        _classCallCheck(this, FilterPipe);
      }

      _createClass(FilterPipe, [{
        key: "transform",
        value: function transform(items, match, path) {
          var pathFactoryArguments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
          var target = items instanceof Array ? items : items.split('\n');
          return (target || []).filter(function (item) {
            // Check filter type
            var hasBooleanFilter = typeof match === 'boolean',
                hasNumberFilter = typeof match === 'number',
                hasStringFilter = typeof match === 'string' && match.trim(),
                hasRegExpFilter = match instanceof RegExp,
                hasPhraseFilter = match instanceof _data__WEBPACK_IMPORTED_MODULE_1__["Phrase"] && match.value.trim(); // Check if filter is regexp or treat as string

            if (hasBooleanFilter || hasNumberFilter || hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
              if (hasBooleanFilter || hasNumberFilter) {
                // Filter as exact value
                return extractValueFromItem(item, path, pathFactoryArguments) === match;
              } else if (hasStringFilter || hasPhraseFilter && !match.isRegExp) {
                // Filter as string
                try {
                  var filterValue = hasStringFilter ? match : match.value,
                      filterCaseSensitive = hasStringFilter ? true : match.isCaseSensitive,
                      value = extractValueFromItem(item, path, pathFactoryArguments),
                      haystack = filterCaseSensitive ? value : value.toLowerCase(),
                      needle = filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase();
                  return haystack.indexOf(needle) !== -1;
                } catch (err) {
                  return false;
                }
              } else if (hasRegExpFilter || hasPhraseFilter && match.isRegExp) {
                // Filter as regexp
                try {
                  var _value = extractValueFromItem(item, path, pathFactoryArguments),
                      // tslint:disable-next-line: max-line-length
                  _filterValue2 = hasRegExpFilter ? match : new RegExp(match.value, match.isCaseSensitive ? '' : 'i');

                  return !!_value.match(_filterValue2);
                } catch (err) {
                  return false;
                }
              } else {
                // Return unfiltered
                return true;
              }
            } else {
              // Return unfiltered
              return true;
            }
          });
        }
      }]);

      return FilterPipe;
    }();

    FilterPipe.ɵfac = function FilterPipe_Factory(t) {
      return new (t || FilterPipe)();
    };

    FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "iquiFilter",
      type: FilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'iquiFilter'
        }]
      }], null, null);
    })();
    /**
     * Extracts value at a given path from item
     * @param item Item to extract value from
     * @param path Path string or extracting function
     */


    function extractValueFromItem(item, path, pathFactoryArguments) {
      if (path instanceof Function) {
        if (!pathFactoryArguments) {
          // Extract using provided function
          return path(item);
        } else {
          // Extract using provided function factory
          return path(pathFactoryArguments)(item);
        }
      } else if (path) {
        // Extract value directly
        return item[path];
      } else {
        // Return item as already extracted
        return item;
      }
    }
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Paginate/_showcase/index.ts":
  /*!*************************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Paginate/_showcase/index.ts ***!
    \*************************************************************/

  /*! exports provided: PaginateShowcaseComponent */

  /***/
  function iquiNgxSrcLibPipesPaginate_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginateShowcaseComponent", function () {
      return PaginateShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // Paginate pipe showcase
    // ----------------------------------------------------------------------------
    // Import dependencies


    var _c0 = function _c0() {
      return ["/data", "Pagination"];
    }; // Showcase component


    var PaginateShowcaseComponent = function PaginateShowcaseComponent() {
      _classCallCheck(this, PaginateShowcaseComponent);
    };

    PaginateShowcaseComponent.ɵfac = function PaginateShowcaseComponent_Factory(t) {
      return new (t || PaginateShowcaseComponent)();
    };

    PaginateShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PaginateShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 7,
      vars: 2,
      consts: [[3, "routerLink"]],
      template: function PaginateShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagination Pipe class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nPaginates array of items ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nAlso see: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pagination data class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL3BpcGVzL1BhZ2luYXRlL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginateShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Paginate/index.ts":
  /*!***************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Paginate/index.ts ***!
    \***************************************************/

  /*! exports provided: PaginatePipe */

  /***/
  function iquiNgxSrcLibPipesPaginateIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return PaginatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Paginate pipe
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Paginates an array of records
     */


    var PaginatePipe = /*#__PURE__*/function () {
      function PaginatePipe() {
        _classCallCheck(this, PaginatePipe);
      }

      _createClass(PaginatePipe, [{
        key: "transform",
        value: function transform(items, startIndex, pageLength, pagination) {
          // Update data being paginated (if pagination provided)
          if (pagination) {
            pagination.items = items;
          } // Return current page range of items


          return (items || []).slice(startIndex, startIndex + pageLength);
        }
      }]);

      return PaginatePipe;
    }();

    PaginatePipe.ɵfac = function PaginatePipe_Factory(t) {
      return new (t || PaginatePipe)();
    };

    PaginatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "iquiPaginate",
      type: PaginatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'iquiPaginate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Slice/_showcase/index.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Slice/_showcase/index.ts ***!
    \**********************************************************/

  /*! exports provided: SliceShowcaseComponent */

  /***/
  function iquiNgxSrcLibPipesSlice_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliceShowcaseComponent", function () {
      return SliceShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Slice pipe showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Showcase component


    var SliceShowcaseComponent = function SliceShowcaseComponent() {
      _classCallCheck(this, SliceShowcaseComponent);
    };

    SliceShowcaseComponent.ɵfac = function SliceShowcaseComponent_Factory(t) {
      return new (t || SliceShowcaseComponent)();
    };

    SliceShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliceShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      template: function SliceShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Slice Pipe class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nSlices array of items\n");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL3BpcGVzL1NsaWNlL19zaG93Y2FzZS9zdHlsZS5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliceShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Slice/index.ts":
  /*!************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Slice/index.ts ***!
    \************************************************/

  /*! exports provided: SlicePipe */

  /***/
  function iquiNgxSrcLibPipesSliceIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SlicePipe", function () {
      return SlicePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Slicing pipe
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Slices array
     */


    var SlicePipe = /*#__PURE__*/function () {
      function SlicePipe() {
        _classCallCheck(this, SlicePipe);
      }

      _createClass(SlicePipe, [{
        key: "transform",
        value: function transform(items, start, length) {
          return (items || []).slice(start, length);
        }
      }]);

      return SlicePipe;
    }();

    SlicePipe.ɵfac = function SlicePipe_Factory(t) {
      return new (t || SlicePipe)();
    };

    SlicePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "iquiSlice",
      type: SlicePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SlicePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'iquiSlice'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Sort/_showcase/index.ts":
  /*!*********************************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Sort/_showcase/index.ts ***!
    \*********************************************************/

  /*! exports provided: SortShowcaseComponent */

  /***/
  function iquiNgxSrcLibPipesSort_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortShowcaseComponent", function () {
      return SortShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Sort pipe showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Showcase component


    var SortShowcaseComponent = function SortShowcaseComponent() {
      _classCallCheck(this, SortShowcaseComponent);
    };

    SortShowcaseComponent.ɵfac = function SortShowcaseComponent_Factory(t) {
      return new (t || SortShowcaseComponent)();
    };

    SortShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SortShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      template: function SortShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort Pipe class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nSort a collection based on a string or a custom mapping function\n");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL3BpcGVzL1NvcnQvX3Nob3djYXNlL3N0eWxlLnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/Sort/index.ts":
  /*!***********************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/Sort/index.ts ***!
    \***********************************************/

  /*! exports provided: SortPipe */

  /***/
  function iquiNgxSrcLibPipesSortIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return SortPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Sorting pipe
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Sorts array of items based on given property key or mapping function
     */


    var SortPipe = /*#__PURE__*/function () {
      function SortPipe() {
        _classCallCheck(this, SortPipe);
      }

      _createClass(SortPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          var asc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (!items || !(items instanceof Array)) {
            return items;
          }

          return _toConsumableArray(items || []).sort(function (a, b) {
            var aValue = extractValueFromItem(a, filter),
                bValue = extractValueFromItem(b, filter); // Check if comparing by single value or array

            if (aValue instanceof Array) {
              // Compare by array of values
              // tslint:disable-next-line: prefer-for-of
              for (var i = 0; i < aValue.length; i++) {
                // Compare by single values
                if (aValue[i] < bValue[i]) {
                  return asc ? -1 : +1;
                } else if (aValue[i] > bValue[i]) {
                  return asc ? +1 : -1;
                }
              }

              return 0;
            } else {
              // Compare by single values
              if (aValue === bValue) {
                return 0;
              } else if (aValue < bValue) {
                return asc ? -1 : +1;
              } else if (aValue > bValue) {
                return asc ? +1 : -1;
              }
            }
          });
        }
      }]);

      return SortPipe;
    }();

    SortPipe.ɵfac = function SortPipe_Factory(t) {
      return new (t || SortPipe)();
    };

    SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "iquiSort",
      type: SortPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'iquiSort'
        }]
      }], null, null);
    })();
    /**
     * Extracts value at a given path from item
     * @param item Item to extract value from
     * @param path Path string or extracting function
     */


    function extractValueFromItem(item, path) {
      if (path instanceof Function) {
        return path(item);
      } else {
        return item[path];
      }
    }
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/_showcase.ts":
  /*!**********************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/_showcase.ts ***!
    \**********************************************/

  /*! exports provided: FilterShowcaseComponent, SortShowcaseComponent, PaginateShowcaseComponent, SliceShowcaseComponent, PipesShowcaseModule */

  /***/
  function iquiNgxSrcLibPipes_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesShowcaseModule", function () {
      return PipesShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Filter_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Filter/_showcase */
    "../iqui-ngx/src/lib/pipes/Filter/_showcase/index.ts");
    /* harmony import */


    var _Sort_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Sort/_showcase */
    "../iqui-ngx/src/lib/pipes/Sort/_showcase/index.ts");
    /* harmony import */


    var _Paginate_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Paginate/_showcase */
    "../iqui-ngx/src/lib/pipes/Paginate/_showcase/index.ts");
    /* harmony import */


    var _Slice_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Slice/_showcase */
    "../iqui-ngx/src/lib/pipes/Slice/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilterShowcaseComponent", function () {
      return _Filter_showcase__WEBPACK_IMPORTED_MODULE_3__["FilterShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortShowcaseComponent", function () {
      return _Sort_showcase__WEBPACK_IMPORTED_MODULE_4__["SortShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginateShowcaseComponent", function () {
      return _Paginate_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginateShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SliceShowcaseComponent", function () {
      return _Slice_showcase__WEBPACK_IMPORTED_MODULE_6__["SliceShowcaseComponent"];
    }); // Pipes Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import showcase components
    // IQ UI NGX Elements' Code/Syntax module


    var PipesShowcaseModule = function PipesShowcaseModule() {
      _classCallCheck(this, PipesShowcaseModule);
    };

    PipesShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesShowcaseModule
    });
    PipesShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesShowcaseModule_Factory(t) {
        return new (t || PipesShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesShowcaseModule, {
        declarations: [// Declare showcasing components
        _Filter_showcase__WEBPACK_IMPORTED_MODULE_3__["FilterShowcaseComponent"], _Sort_showcase__WEBPACK_IMPORTED_MODULE_4__["SortShowcaseComponent"], _Paginate_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginateShowcaseComponent"], _Slice_showcase__WEBPACK_IMPORTED_MODULE_6__["SliceShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [// Export child components
        _Filter_showcase__WEBPACK_IMPORTED_MODULE_3__["FilterShowcaseComponent"], _Sort_showcase__WEBPACK_IMPORTED_MODULE_4__["SortShowcaseComponent"], _Paginate_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginateShowcaseComponent"], _Slice_showcase__WEBPACK_IMPORTED_MODULE_6__["SliceShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
          declarations: [// Declare showcasing components
          _Filter_showcase__WEBPACK_IMPORTED_MODULE_3__["FilterShowcaseComponent"], _Sort_showcase__WEBPACK_IMPORTED_MODULE_4__["SortShowcaseComponent"], _Paginate_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginateShowcaseComponent"], _Slice_showcase__WEBPACK_IMPORTED_MODULE_6__["SliceShowcaseComponent"]],
          exports: [// Export child components
          _Filter_showcase__WEBPACK_IMPORTED_MODULE_3__["FilterShowcaseComponent"], _Sort_showcase__WEBPACK_IMPORTED_MODULE_4__["SortShowcaseComponent"], _Paginate_showcase__WEBPACK_IMPORTED_MODULE_5__["PaginateShowcaseComponent"], _Slice_showcase__WEBPACK_IMPORTED_MODULE_6__["SliceShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/pipes/index.ts":
  /*!******************************************!*\
    !*** ../iqui-ngx/src/lib/pipes/index.ts ***!
    \******************************************/

  /*! exports provided: FilterPipe, PaginatePipe, SlicePipe, SortPipe, PipesModule */

  /***/
  function iquiNgxSrcLibPipesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _Filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Filter */
    "../iqui-ngx/src/lib/pipes/Filter/index.ts");
    /* harmony import */


    var _Paginate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Paginate */
    "../iqui-ngx/src/lib/pipes/Paginate/index.ts");
    /* harmony import */


    var _Slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Slice */
    "../iqui-ngx/src/lib/pipes/Slice/index.ts");
    /* harmony import */


    var _Sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Sort */
    "../iqui-ngx/src/lib/pipes/Sort/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return _Filter__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return _Paginate__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlicePipe", function () {
      return _Slice__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return _Sort__WEBPACK_IMPORTED_MODULE_6__["SortPipe"];
    }); // Import dependencies
    // Import pipes and (re)export pipes

    /**
     * IQ UI NGX Elements' Pipes module
     * Implements commonly used pipes
     */


    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_Filter__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"], _Paginate__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _Slice__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _Sort__WEBPACK_IMPORTED_MODULE_6__["SortPipe"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
        exports: [_Filter__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"], _Paginate__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _Slice__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _Sort__WEBPACK_IMPORTED_MODULE_6__["SortPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayModule"]],
          declarations: [_Filter__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"], _Paginate__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _Slice__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _Sort__WEBPACK_IMPORTED_MODULE_6__["SortPipe"]],
          exports: [_Filter__WEBPACK_IMPORTED_MODULE_3__["FilterPipe"], _Paginate__WEBPACK_IMPORTED_MODULE_4__["PaginatePipe"], _Slice__WEBPACK_IMPORTED_MODULE_5__["SlicePipe"], _Sort__WEBPACK_IMPORTED_MODULE_6__["SortPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/functional/clipboard/index.ts":
  /*!******************************************************************!*\
    !*** ../iqui-ngx/src/lib/services/functional/clipboard/index.ts ***!
    \******************************************************************/

  /*! exports provided: ClipboardService */

  /***/
  function iquiNgxSrcLibServicesFunctionalClipboardIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
      return ClipboardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Copy-2-Clipboard service
    // ----------------------------------------------------------------------------
    // Import dependencies

    /**
     * Provides clipboard functionality
     */


    var ClipboardService = /*#__PURE__*/function () {
      function ClipboardService() {
        _classCallCheck(this, ClipboardService);
      }

      _createClass(ClipboardService, [{
        key: "copy2Clipboard",

        /**
         * Copies content to clipboard
         * @param content Content to copy
         */
        value: function copy2Clipboard(content) {
          // Remember focused element
          var focused = document.activeElement;

          if (typeof content === 'string') {
            // Copy text to clipboard
            var textarea = document.createElement('textarea');
            textarea.value = content;
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea); // Fire event

            ClipboardService.onCopy.emit(content);
          } else {
            // Copy from element to clipboard
            var selection = window.getSelection(),
                range = document.createRange();
            range.selectNodeContents(content);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges(); // Fire event

            ClipboardService.onCopy.emit(selection.toString());
          } // Refocus previous element


          if (focused) {
            focused.focus();
          }
        }
      }]);

      return ClipboardService;
    }();
    /**
     * Fires when a value is copied onto the clipboard
     */


    ClipboardService.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

    ClipboardService.ɵfac = function ClipboardService_Factory(t) {
      return new (t || ClipboardService)();
    };

    ClipboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClipboardService,
      factory: ClipboardService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClipboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/functional/index.ts":
  /*!********************************************************!*\
    !*** ../iqui-ngx/src/lib/services/functional/index.ts ***!
    \********************************************************/

  /*! exports provided: ClipboardService */

  /***/
  function iquiNgxSrcLibServicesFunctionalIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./clipboard */
    "../iqui-ngx/src/lib/services/functional/clipboard/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
      return _clipboard__WEBPACK_IMPORTED_MODULE_0__["ClipboardService"];
    }); // Functional services
    // ----------------------------------------------------------------------------
    // Export page definitions class

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/index.ts":
  /*!*********************************************!*\
    !*** ../iqui-ngx/src/lib/services/index.ts ***!
    \*********************************************/

  /*! exports provided: Page, ClipboardService */

  /***/
  function iquiNgxSrcLibServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./routing */
    "../iqui-ngx/src/lib/services/routing/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return _routing__WEBPACK_IMPORTED_MODULE_0__["Page"];
    });
    /* harmony import */


    var _functional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./functional */
    "../iqui-ngx/src/lib/services/functional/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
      return _functional__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"];
    }); // Services
    // ----------------------------------------------------------------------------
    // Export routing services

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/routing/_showcase.ts":
  /*!*********************************************************!*\
    !*** ../iqui-ngx/src/lib/services/routing/_showcase.ts ***!
    \*********************************************************/

  /*! exports provided: PageServiceShowcaseComponent, RoutingShowcaseModule */

  /***/
  function iquiNgxSrcLibServicesRouting_showcaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingShowcaseModule", function () {
      return RoutingShowcaseModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_showcasing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/showcasing */
    "../iqui-ngx/src/lib/components/showcasing/index.ts");
    /* harmony import */


    var _components_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/code */
    "../iqui-ngx/src/lib/components/code/index.ts");
    /* harmony import */


    var _page_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./page/_showcase */
    "../iqui-ngx/src/lib/services/routing/page/_showcase/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageServiceShowcaseComponent", function () {
      return _page_showcase__WEBPACK_IMPORTED_MODULE_4__["PageServiceShowcaseComponent"];
    }); // Routing Showcase module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import showcase components
    // IQ UI NGX Elements' Showcasing module


    var RoutingShowcaseModule = function RoutingShowcaseModule() {
      _classCallCheck(this, RoutingShowcaseModule);
    };

    RoutingShowcaseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoutingShowcaseModule
    });
    RoutingShowcaseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoutingShowcaseModule_Factory(t) {
        return new (t || RoutingShowcaseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]], // Export dependency modules
      _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingShowcaseModule, {
        declarations: [_page_showcase__WEBPACK_IMPORTED_MODULE_4__["PageServiceShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]],
        exports: [// Export dependency modules
        _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"], // Export child components
        _page_showcase__WEBPACK_IMPORTED_MODULE_4__["PageServiceShowcaseComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingShowcaseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"]],
          declarations: [_page_showcase__WEBPACK_IMPORTED_MODULE_4__["PageServiceShowcaseComponent"]],
          exports: [// Export dependency modules
          _components_code__WEBPACK_IMPORTED_MODULE_3__["CodeModule"], _components_showcasing__WEBPACK_IMPORTED_MODULE_2__["ShowcasingModule"], // Export child components
          _page_showcase__WEBPACK_IMPORTED_MODULE_4__["PageServiceShowcaseComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/routing/index.ts":
  /*!*****************************************************!*\
    !*** ../iqui-ngx/src/lib/services/routing/index.ts ***!
    \*****************************************************/

  /*! exports provided: Page */

  /***/
  function iquiNgxSrcLibServicesRoutingIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./page */
    "../iqui-ngx/src/lib/services/routing/page/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return _page__WEBPACK_IMPORTED_MODULE_0__["Page"];
    }); // Routing services
    // ----------------------------------------------------------------------------
    // Export page definitions class

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/routing/page/_showcase/index.ts":
  /*!********************************************************************!*\
    !*** ../iqui-ngx/src/lib/services/routing/page/_showcase/index.ts ***!
    \********************************************************************/

  /*! exports provided: PageServiceShowcaseComponent */

  /***/
  function iquiNgxSrcLibServicesRoutingPage_showcaseIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageServiceShowcaseComponent", function () {
      return PageServiceShowcaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js"); // Page service showcase
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Showcase component


    var PageServiceShowcaseComponent = function PageServiceShowcaseComponent() {
      _classCallCheck(this, PageServiceShowcaseComponent);

      // Page context
      this.context = {};
    };

    PageServiceShowcaseComponent.ɵfac = function PageServiceShowcaseComponent_Factory(t) {
      return new (t || PageServiceShowcaseComponent)();
    };

    PageServiceShowcaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageServiceShowcaseComponent,
      selectors: [["ng-component"]],
      decls: 3,
      vars: 0,
      template: function PageServiceShowcaseComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Showcase Page service");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nProvides an easy way of registering a component/directive/service to a showcase application\n");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9pcXVpLW5neC9zcmMvbGliL3NlcnZpY2VzL3JvdXRpbmcvcGFnZS9fc2hvd2Nhc2Uvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageServiceShowcaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/services/routing/page/index.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/services/routing/page/index.ts ***!
    \**********************************************************/

  /*! exports provided: Page */

  /***/
  function iquiNgxSrcLibServicesRoutingPageIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return Page;
    }); // Page definition
    // ----------------------------------------------------------------------------

    /**
     * Holds basic page information
     */


    var Page = /*#__PURE__*/function () {
      /**
       * Creates an instance of Page.
       * @param name Page unique name (used in URL)
       * @param title Page title (displayed in menu)
       * @param title Page description (displayed in menu tooltip)
       * @param component Page component
       * @param children Child pages
       */
      function Page(name, title, description) {
        var component = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        var children = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

        _classCallCheck(this, Page);

        /**
         * Can hold various metadata about the page
         */
        this.meta = {}; // Holds parent path

        this._parentPath = []; // Set page info

        this.name = name;
        this.title = title;
        this.description = description;
        this.component = component;
        this.children = children; // Update child paths

        this.refreshChildren();
      }
      /**
       * Generates a page from a Directive, Component or service class
       * @param descriptor Directive, Component or service class to be described
       * @param component Page component implementing the described page
       * @returns Page representing and linking to the target
       */


      _createClass(Page, [{
        key: "setParentPath",

        /**
         * Sets parent path
         * @param path Parent path
         */
        value: function setParentPath(path) {
          // Set parent path
          this._parentPath = path; // When path refreshed, propagate to children

          this.refreshChildren();
        }
        /**
         * Update child paths
         */

      }, {
        key: "refreshChildren",
        value: function refreshChildren() {
          var _this27 = this;

          this.children.forEach(function (child) {
            child._parent = _this27;
            child.setParentPath(_this27.path);
          });
        }
      }, {
        key: "parent",

        /**
         * Get parent reference
         */
        get: function get() {
          return this._parent;
        }
        /**
         * Composes path from parent set path and name
         */

      }, {
        key: "path",
        get: function get() {
          return [].concat(_toConsumableArray(this._parentPath), [this.name]);
        }
      }], [{
        key: "fromClass",
        value: function fromClass(descriptor) {
          var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var _a, _b, _c, _d;

          var directiveDecorator = (_a = descriptor.decorators) === null || _a === void 0 ? void 0 : _a.find(function (decorator) {
            return decorator.type.prototype.ngMetadataName === 'Directive';
          }),
              componentDecorator = (_b = descriptor.decorators) === null || _b === void 0 ? void 0 : _b.find(function (decorator) {
            return decorator.type.prototype.ngMetadataName === 'Component';
          });

          if (directiveDecorator) {
            // Compose directive page
            var name = descriptor.name.toLowerCase().replace(/directive/g, ''),
                selector = ((_c = directiveDecorator.args.find(function (arg) {
              return arg.selector;
            })) === null || _c === void 0 ? void 0 : _c.selector) || "[".concat(name, "]");
            return new Page(name, selector, null, component || descriptor);
          } else if (componentDecorator) {
            // Compose component page
            var _name = descriptor.name.toLowerCase().replace(/component/g, ''),
                _selector = "<".concat(((_d = componentDecorator.args.find(function (arg) {
              return arg.selector;
            })) === null || _d === void 0 ? void 0 : _d.selector) || "".concat(_name), " />");

            return new Page(_name, _selector, null, component || descriptor);
          } else {
            // Compose service page
            var _name2 = descriptor.name.replace(/Service/g, '').replace(/Pipe/g, '');

            return new Page(_name2, _name2, null, component || descriptor);
          }
        }
        /**
         * Composes routes from pages definitions
         * @param pages Pages definition
         * @param path Root path of current pages
         * @returns Composed routes
         */
        // tslint:disable-next-line: no-shadowed-variable

      }, {
        key: "compileRoutes",
        value: function compileRoutes(pages) {
          var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          // Update pages' route paths
          var _iterator13 = _createForOfIteratorHelper(pages),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var page = _step13.value;
              page.setParentPath(path);
            } // Compile routes

          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          return Page._compileRoutes(pages, path, []);
        }
        /**
         * Composes routes from pages definitions
         * @param pages Pages definition
         * @param path Relative path of current pages
         * @param routes Array of composed routes
         * @returns Composed routes
         */
        // tslint:disable-next-line: no-shadowed-variable

      }, {
        key: "_compileRoutes",
        value: function _compileRoutes(pages) {
          var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var routes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

          // Process pages
          var _iterator14 = _createForOfIteratorHelper(pages),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var page = _step14.value;

              // If page has component, add to routes
              if (page.component) {
                routes.push({
                  path: [].concat(_toConsumableArray(path), [page.name]).join('/'),
                  component: page.component
                });
              } // If page has children, process children


              if (page.children.length) {
                Page._compileRoutes(page.children, [].concat(_toConsumableArray(path), [page.name]), routes);
              }
            } // Return composed routes

          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return routes;
        }
        /**
         * Flattens aray of pages and their children into a flat array
         * @param pages Pages array to flatten
         * @returns Flat page array
         */

      }, {
        key: "toArray",
        value: function toArray(pages) {
          var arr = [];

          var _iterator15 = _createForOfIteratorHelper(pages),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var page = _step15.value;
              arr.push.apply(arr, [page].concat(_toConsumableArray(Page.toArray(page.children))));
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          return arr;
        }
        /**
         * Checks if page has children
         * @param page Page to check
         * @returns If page has children
         */

      }, {
        key: "hasChildren",
        value: function hasChildren(page) {
          return page.children && page.children.length;
        }
      }]);

      return Page;
    }();
    /***/

  },

  /***/
  "../iqui-ngx/src/lib/types/bootstrap/index.ts":
  /*!****************************************************!*\
    !*** ../iqui-ngx/src/lib/types/bootstrap/index.ts ***!
    \****************************************************/

  /*! exports provided: BootstrapTheme, BootstrapSize */

  /***/
  function iquiNgxSrcLibTypesBootstrapIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./theme */
    "../iqui-ngx/src/lib/types/bootstrap/theme/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapTheme", function () {
      return _theme__WEBPACK_IMPORTED_MODULE_0__["BootstrapTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapSize", function () {
      return _theme__WEBPACK_IMPORTED_MODULE_0__["BootstrapSize"];
    }); // Bootstrap ENUMs and Types
    // Enumerates commonly used bootstrap values as types to be used to statically type properties and such.
    // ----------------------------------------------------------------------------
    // (Re)Export Bootstrap theme ENUMs and Types

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/types/bootstrap/theme/index.ts":
  /*!**********************************************************!*\
    !*** ../iqui-ngx/src/lib/types/bootstrap/theme/index.ts ***!
    \**********************************************************/

  /*! exports provided: BootstrapTheme, BootstrapSize */

  /***/
  function iquiNgxSrcLibTypesBootstrapThemeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapTheme", function () {
      return BootstrapTheme;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapSize", function () {
      return BootstrapSize;
    }); // Bootstrap theme ENUMs and Types
    // Enumerates commonly used bootstrap theme-ing values as types to be used to statically type properties and such.
    // ----------------------------------------------------------------------------

    /*
     * Bootstrap theme colors enum
     */
    // tslint:disable-next-line: variable-name


    var BootstrapTheme = {
      PRIMARY: 'primary',
      SECONDARY: 'secondary',
      SUCCESS: 'success',
      WARNING: 'warning',
      DANGER: 'danger',
      INFO: 'info',
      LIGHT: 'light',
      DARK: 'dark'
    };
    /*
     * Bootstrap theme sizes enum
     */
    // tslint:disable-next-line: variable-name

    var BootstrapSize = {
      LARGE: 'lg',
      SMALL: 'sm'
    };
    /***/
  },

  /***/
  "../iqui-ngx/src/lib/types/html/index.ts":
  /*!***********************************************!*\
    !*** ../iqui-ngx/src/lib/types/html/index.ts ***!
    \***********************************************/

  /*! exports provided: HtmlInputType */

  /***/
  function iquiNgxSrcLibTypesHtmlIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlInputType", function () {
      return HtmlInputType;
    }); // HTML ENUMs and Types
    // Enumerates commonly used HTML values as types to be used to statically type properties and such.
    // ----------------------------------------------------------------------------
    // input[type] values enum
    // tslint:disable-next-line: variable-name


    var HtmlInputType = {
      TEXT: 'text',
      NUMBER: 'number',
      SEARCH: 'search',
      URL: 'url',
      EMAIL: 'email',
      TEL: 'tel',
      PASSWORD: 'password',
      DATE: 'date',
      TIME: 'time',
      DATETIMELOCAL: 'datetime-local',
      WEEK: 'week',
      MONTH: 'month',
      COLOR: 'color',
      FILE: 'file'
    };
    /***/
  },

  /***/
  "../iqui-ngx/src/lib/types/index.ts":
  /*!******************************************!*\
    !*** ../iqui-ngx/src/lib/types/index.ts ***!
    \******************************************/

  /*! exports provided: HtmlInputType, BootstrapTheme, BootstrapSize, BootstrapRelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions */

  /***/
  function iquiNgxSrcLibTypesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./html */
    "../iqui-ngx/src/lib/types/html/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HtmlInputType", function () {
      return _html__WEBPACK_IMPORTED_MODULE_0__["HtmlInputType"];
    });
    /* harmony import */


    var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bootstrap */
    "../iqui-ngx/src/lib/types/bootstrap/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapTheme", function () {
      return _bootstrap__WEBPACK_IMPORTED_MODULE_1__["BootstrapTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapSize", function () {
      return _bootstrap__WEBPACK_IMPORTED_MODULE_1__["BootstrapSize"];
    });
    /* harmony import */


    var _ngcdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./ngcdk */
    "../iqui-ngx/src/lib/types/ngcdk/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapRelativePositioning", function () {
      return _ngcdk__WEBPACK_IMPORTED_MODULE_2__["BootstrapRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RelativePositioningPriority", function () {
      return _ngcdk__WEBPACK_IMPORTED_MODULE_2__["RelativePositioningPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkRelativePositioningDefinitions", function () {
      return _ngcdk__WEBPACK_IMPORTED_MODULE_2__["AngularCdkRelativePositioningDefinitions"];
    }); // ENUMs and Types
    // - Enumerates commonly used values as types to be used to statically type properties and such.
    // ----------------------------------------------------------------------------
    // (Re)Export HTML ENUMs and Types
    // (Re)Export Bootstrap ENUMs and Types
    // (Re)Export Angular CDK ENUMs and Types

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/types/ngcdk/index.ts":
  /*!************************************************!*\
    !*** ../iqui-ngx/src/lib/types/ngcdk/index.ts ***!
    \************************************************/

  /*! exports provided: BootstrapRelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions */

  /***/
  function iquiNgxSrcLibTypesNgcdkIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./positioning */
    "../iqui-ngx/src/lib/types/ngcdk/positioning/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapRelativePositioning", function () {
      return _positioning__WEBPACK_IMPORTED_MODULE_0__["BootstrapRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RelativePositioningPriority", function () {
      return _positioning__WEBPACK_IMPORTED_MODULE_0__["RelativePositioningPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkRelativePositioningDefinitions", function () {
      return _positioning__WEBPACK_IMPORTED_MODULE_0__["AngularCdkRelativePositioningDefinitions"];
    }); // Angular CDK ENUMs and Types
    // Enumerates commonly used Angular CDK values as types to be used to statically type properties and such.
    // ----------------------------------------------------------------------------
    // (Re)Export bootstrap theme ENUMs and Types

    /***/

  },

  /***/
  "../iqui-ngx/src/lib/types/ngcdk/positioning/index.ts":
  /*!************************************************************!*\
    !*** ../iqui-ngx/src/lib/types/ngcdk/positioning/index.ts ***!
    \************************************************************/

  /*! exports provided: BootstrapRelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions */

  /***/
  function iquiNgxSrcLibTypesNgcdkPositioningIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _AngularCdkRelativePo;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapRelativePositioning", function () {
      return BootstrapRelativePositioning;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelativePositioningPriority", function () {
      return RelativePositioningPriority;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkRelativePositioningDefinitions", function () {
      return AngularCdkRelativePositioningDefinitions;
    }); // Bootstrap theme ENUMs and Types
    // Enumerates commonly used bootstrap positioning values as types to be used to statically type properties and such.
    // ----------------------------------------------------------------------------

    /*
     * Bootstrap relative positioning enum
     */
    // tslint:disable-next-line: variable-name


    var BootstrapRelativePositioning = {
      TOP: 'top',
      TOP_CENTER: 'top center',
      TOP_LEFT: 'top left',
      TOP_RIGHT: 'top right',
      RIGHT: 'right',
      RIGHT_CENTER: 'right center',
      RIGHT_TOP: 'right top',
      RIGHT_BOTTOM: 'right bottom',
      BOTTOM: 'bottom',
      BOTTOM_CENTER: 'bottom center',
      BOTTOM_LEFT: 'bottom left',
      BOTTOM_RIGHT: 'bottom right',
      LEFT: 'left',
      LEFT_CENTER: 'left center',
      LEFT_TOP: 'left top',
      LEFT_BOTTOM: 'left bottom'
    };
    /*
     * Angular CDK positioning priority
     */
    // tslint:disable-next-line: variable-name

    var RelativePositioningPriority = [BootstrapRelativePositioning.BOTTOM, BootstrapRelativePositioning.BOTTOM_CENTER, BootstrapRelativePositioning.BOTTOM_LEFT, BootstrapRelativePositioning.BOTTOM_RIGHT, BootstrapRelativePositioning.RIGHT, BootstrapRelativePositioning.RIGHT_CENTER, BootstrapRelativePositioning.RIGHT_TOP, BootstrapRelativePositioning.RIGHT_BOTTOM, BootstrapRelativePositioning.LEFT, BootstrapRelativePositioning.LEFT_CENTER, BootstrapRelativePositioning.LEFT_TOP, BootstrapRelativePositioning.LEFT_BOTTOM, BootstrapRelativePositioning.TOP, BootstrapRelativePositioning.TOP_CENTER, BootstrapRelativePositioning.TOP_LEFT, BootstrapRelativePositioning.TOP_RIGHT];
    /*
     * Preferred Angular CDK positions type
     */
    // tslint:disable-next-line: variable-name

    var AngularCdkRelativePositioningDefinitions = (_AngularCdkRelativePo = {}, _defineProperty(_AngularCdkRelativePo, 'top', {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }), _defineProperty(_AngularCdkRelativePo, 'top center', {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    }), _defineProperty(_AngularCdkRelativePo, 'top left', {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom'
    }), _defineProperty(_AngularCdkRelativePo, 'top right', {
      originX: 'end',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'bottom'
    }), _defineProperty(_AngularCdkRelativePo, 'right', {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center'
    }), _defineProperty(_AngularCdkRelativePo, 'right center', {
      originX: 'end',
      originY: 'center',
      overlayX: 'start',
      overlayY: 'center'
    }), _defineProperty(_AngularCdkRelativePo, 'right top', {
      originX: 'end',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top'
    }), _defineProperty(_AngularCdkRelativePo, 'right bottom', {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'bottom'
    }), _defineProperty(_AngularCdkRelativePo, 'bottom', {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }), _defineProperty(_AngularCdkRelativePo, 'bottom center', {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }), _defineProperty(_AngularCdkRelativePo, 'bottom left', {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top'
    }), _defineProperty(_AngularCdkRelativePo, 'bottom right', {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top'
    }), _defineProperty(_AngularCdkRelativePo, 'left', {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center'
    }), _defineProperty(_AngularCdkRelativePo, 'left center', {
      originX: 'start',
      originY: 'center',
      overlayX: 'end',
      overlayY: 'center'
    }), _defineProperty(_AngularCdkRelativePo, 'left top', {
      originX: 'start',
      originY: 'top',
      overlayX: 'end',
      overlayY: 'top'
    }), _defineProperty(_AngularCdkRelativePo, 'left bottom', {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'bottom'
    }), _AngularCdkRelativePo);
    /***/
  },

  /***/
  "../iqui-ngx/src/public-api.ts":
  /*!*************************************!*\
    !*** ../iqui-ngx/src/public-api.ts ***!
    \*************************************/

  /*! exports provided: HtmlInputType, BootstrapTheme, BootstrapSize, BootstrapRelativePositioning, RelativePositioningPriority, AngularCdkRelativePositioningDefinitions, FunctionalModule, BookmarkableService, DeclareDirective, Copy2ClipboardDirective, TooltipComponent, TooltipDirective, TooltipRelativePositioning, DropdownComponent, DropdownDirective, DropdownHeaderDirective, DropdownBodyDirective, DropdownFooterDirective, DropdownRelativePositioning, CollapseDirective, ToastComponent, ModalComponent, ModalDirective, ModalDialogDirective, BookmarkableDirective, FunctionalShowcaseModule, DeclareShowcaseComponent, Copy2ClipboardShowcaseComponent, TooltipShowcaseComponent, DropdownShowcaseComponent, CollapseShowcaseComponent, ModalShowcaseComponent, ToastShowcaseComponent, BookmarkableShowcaseComponent, BasicsModule, ButtonComponent, ButtonComponentTheme, ButtonComponentSize, DropdownButtonComponent, DropdownButtonComponentTheme, DropdownButtonComponentSize, DropdownButtonComponentRelativePositioning, PhraseInputComponent, BasicsShowcaseModule, ButtonShowcaseComponent, DropdownButtonShowcaseComponent, PhraseInputShowcaseComponent, FormModule, FormElementDirective, UsesFormElementDirectives, FormDirective, FormGroupDirective, ButtonDirective, LabelDirective, TextareaDirective, InputDirective, CheckboxDirective, RadioDirective, SelectDirective, InputComponent, InputType, CheckboxComponent, OptionDirective, RadioComponent, SelectComponent, FormShowcaseModule, FormShowcaseComponent, InputShowcaseComponent, CheckboxShowcaseComponent, RadioShowcaseComponent, SelectShowcaseComponent, CodeModule, HighlightJsComponent, HighlightJsTextareaDirective, HighlightJsInjectTopDirective, HighlightJsInjectBottomDirective, highlightJsRegisterLanguage, CodeShowcaseModule, HighlightJsShowcaseComponent, ShowcasingModule, PlaygroundComponent, PlaygroundTextareaDirective, ShowcasingShowcaseModule, PlaygroundShowcaseComponent, DataShowcaseModule, PaginationShowcaseComponent, PhraseShowcaseComponent, PipesModule, FilterPipe, PaginatePipe, SlicePipe, SortPipe, PipesShowcaseModule, FilterShowcaseComponent, SortShowcaseComponent, PaginateShowcaseComponent, SliceShowcaseComponent, RoutingShowcaseModule, PageServiceShowcaseComponent, ShowcaseModule, ShowcaseComponent, ShowcasePagesDirective, ShowcaseMenuComponent, getShowcasePages, Phrase, Pagination, Page, ClipboardService, providers, IqUiNgxModule */

  /***/
  function iquiNgxSrcPublicApiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib */
    "../iqui-ngx/src/lib/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HtmlInputType", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["HtmlInputType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapTheme", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BootstrapTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapSize", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BootstrapSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BootstrapRelativePositioning", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BootstrapRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RelativePositioningPriority", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["RelativePositioningPriority"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AngularCdkRelativePositioningDefinitions", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["AngularCdkRelativePositioningDefinitions"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FunctionalModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FunctionalModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableService", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BookmarkableService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeclareDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DeclareDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["Copy2ClipboardDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["TooltipComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["TooltipDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipRelativePositioning", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["TooltipRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownHeaderDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownHeaderDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownBodyDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownBodyDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownFooterDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownFooterDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownRelativePositioning", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapseDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CollapseDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ToastComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ModalDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ModalDialogDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BookmarkableDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FunctionalShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FunctionalShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DeclareShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DeclareShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Copy2ClipboardShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["Copy2ClipboardShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TooltipShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["TooltipShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapseShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CollapseShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ModalShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ToastShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ToastShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookmarkableShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BookmarkableShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BasicsModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BasicsModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ButtonComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentTheme", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ButtonComponentTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponentSize", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ButtonComponentSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownButtonComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentTheme", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownButtonComponentTheme"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentSize", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownButtonComponentSize"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonComponentRelativePositioning", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownButtonComponentRelativePositioning"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PhraseInputComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BasicsShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["BasicsShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ButtonShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DropdownButtonShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DropdownButtonShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseInputShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PhraseInputShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FormModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormElementDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FormElementDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UsesFormElementDirectives", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["UsesFormElementDirectives"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FormDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ButtonDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ButtonDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LabelDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["LabelDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TextareaDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["TextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["InputDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CheckboxDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["RadioDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SelectDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["InputComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputType", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["InputType"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CheckboxComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "OptionDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["OptionDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["RadioComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SelectComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FormShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FormShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FormShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "InputShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["InputShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CheckboxShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CheckboxShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RadioShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["RadioShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SelectShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SelectShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CodeModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["HighlightJsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsTextareaDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["HighlightJsTextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectTopDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["HighlightJsInjectTopDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsInjectBottomDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["HighlightJsInjectBottomDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "highlightJsRegisterLanguage", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["highlightJsRegisterLanguage"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CodeShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["CodeShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HighlightJsShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["HighlightJsShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasingModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ShowcasingModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PlaygroundComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundTextareaDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PlaygroundTextareaDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasingShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ShowcasingShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PlaygroundShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PlaygroundShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DataShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["DataShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginationShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PaginationShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PhraseShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PhraseShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PipesModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilterPipe", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FilterPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginatePipe", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PaginatePipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SlicePipe", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SlicePipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SortPipe"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PipesShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PipesShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FilterShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["FilterShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SortShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SortShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PaginateShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PaginateShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SliceShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["SliceShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "RoutingShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["RoutingShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PageServiceShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["PageServiceShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ShowcaseModule"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ShowcaseComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcasePagesDirective", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ShowcasePagesDirective"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ShowcaseMenuComponent", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ShowcaseMenuComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "getShowcasePages", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["getShowcasePages"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Phrase", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["Phrase"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Pagination", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["Pagination"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Page", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["Page"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ClipboardService", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["ClipboardService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "providers", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["providers"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "IqUiNgxModule", function () {
      return _lib__WEBPACK_IMPORTED_MODULE_0__["IqUiNgxModule"];
    }); // Public API surface
    // ----------------------------------------------------------------------------
    // Export all

    /***/

  },

  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: GettingStartedPageComponent, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../iqui-ngx/src/public-api */
    "../iqui-ngx/src/public-api.ts");
    /* harmony import */


    var _getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./getting-started/component */
    "./src/app/getting-started/component/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPageComponent", function () {
      return _getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedPageComponent"];
    }); // Application routing
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import pages
    // Application routes


    var routes = [// Frontpage
    {
      path: '',
      component: _getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedPageComponent"]
    }].concat(_toConsumableArray(_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__["Page"].compileRoutes(Object(_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__["getShowcasePages"])(), [])), [// Default
    {
      path: '**',
      redirectTo: '/'
    }]);

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../iqui-ngx/src/public-api */
    "../iqui-ngx/src/public-api.ts");
    /* harmony import */


    var _getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./getting-started/component */
    "./src/app/getting-started/component/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _iqui_ngx_src_lib_showcase_component_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../iqui-ngx/src/lib/_showcase/component/index */
    "../iqui-ngx/src/lib/_showcase/component/index.ts");
    /* harmony import */


    var _iqui_ngx_src_lib_showcase_component_directives_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../iqui-ngx/src/lib/_showcase/component/directives/index */
    "../iqui-ngx/src/lib/_showcase/component/directives/index.ts"); // Main application component
    // ----------------------------------------------------------------------------
    // Import dependencies


    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      /**
       * Ready injected pages
       */
      this._gettingStartedPages = [new _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_1__["Page"]('getting-started', 'Getting started', 'Getting started', _getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedPageComponent"])];
      /**
       * Ready injected pages
       */

      this._iquiNgxPages = Object(_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_1__["getShowcasePages"])();
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 5,
      consts: [[1, "iqui-showcase-page-navbar", "navbar", "navbar-expand", "navbar-dark", "bg-dark", "fixed-top"], [1, "navbar-brand", "mr-1", 3, "routerLink"], [1, "iqui-showcase-page-content"], [3, "iqui-showcase-pages", "title"], [1, "iqui-showcase-router-outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inquest NGX UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "iqui-showcase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](5, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](6, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iqui-showcase-pages", ctx._gettingStartedPages)("title", "How to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iqui-showcase-pages", ctx._iquiNgxPages)("title", "IQUI-NGX");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _iqui_ngx_src_lib_showcase_component_index__WEBPACK_IMPORTED_MODULE_4__["ShowcaseComponent"], _iqui_ngx_src_lib_showcase_component_directives_index__WEBPACK_IMPORTED_MODULE_5__["ShowcasePagesDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .iqui-showcase-page-navbar[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 56px !important;\n  padding: 8px 16px !important;\n}\n[_nghost-%COMP%]   .iqui-showcase-page-content[_ngcontent-%COMP%] {\n  z-index: 0;\n  display: flex;\n  width: 100%;\n  margin-top: 56px;\n}\n[_nghost-%COMP%]   .iqui-showcase-page-content[_ngcontent-%COMP%]   .iqui-showcase-router-outlet[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding: 20px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3Nob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFFRTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBQUo7QUFHRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBRE4iLCJmaWxlIjoicHJvamVjdHMvc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgLy8gUGFnZSBIZWFkZXJcbiAgLmlxdWktc2hvd2Nhc2UtcGFnZS1uYXZiYXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgaGVpZ2h0OiA1NnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pcXVpLXNob3djYXNlLXBhZ2UtY29udGVudCB7XG4gICAgei1pbmRleDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDU2cHg7XG5cbiAgICAuaXF1aS1zaG93Y2FzZS1yb3V0ZXItb3V0bGV0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../iqui-ngx/src/public-api */
    "../iqui-ngx/src/public-api.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _getting_started__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./getting-started */
    "./src/app/getting-started/index.ts"); // Import dependencies
    // Import showcase module
    // Import ašš and pages


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[// Angular dependencies
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], // IQUI module and pages
      _getting_started__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPageModule"], _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_3__["IqUiNgxModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [// Angular dependencies
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], // IQUI module and pages
        _getting_started__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPageModule"], _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_3__["IqUiNgxModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [// Angular dependencies
          _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], // IQUI module and pages
          _getting_started__WEBPACK_IMPORTED_MODULE_6__["GettingStartedPageModule"], _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_3__["IqUiNgxModule"]],
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/getting-started/component/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/getting-started/component/index.ts ***!
    \****************************************************/

  /*! exports provided: GettingStartedPageComponent */

  /***/
  function srcAppGettingStartedComponentIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPageComponent", function () {
      return GettingStartedPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../iqui-ngx/src/public-api */
    "../iqui-ngx/src/public-api.ts");
    /* harmony import */


    var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! highlight.js/lib/languages/scss */
    "../../node_modules/highlight.js/lib/languages/scss.js");
    /* harmony import */


    var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! highlight.js/lib/languages/javascript */
    "../../node_modules/highlight.js/lib/languages/javascript.js");
    /* harmony import */


    var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _iqui_ngx_src_lib_components_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../iqui-ngx/src/lib/components/code/highlight-js/index */
    "../iqui-ngx/src/lib/components/code/highlight-js/index.ts");
    /* harmony import */


    var _iqui_ngx_src_lib_components_form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../iqui-ngx/src/lib/components/form/directives/textarea/index */
    "../iqui-ngx/src/lib/components/form/directives/textarea/index.ts"); // Getting started page
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Register highlight.js languages


    var _c0 = function _c0() {
      return ["scss"];
    };

    var _c1 = function _c1() {
      return ["javascript"];
    };

    Object(_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('scss', highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_2___default.a);
    Object(_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_1__["highlightJsRegisterLanguage"])('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_3___default.a); // Showcase component

    var GettingStartedPageComponent = function GettingStartedPageComponent() {
      _classCallCheck(this, GettingStartedPageComponent);
    };

    GettingStartedPageComponent.ɵfac = function GettingStartedPageComponent_Factory(t) {
      return new (t || GettingStartedPageComponent)();
    };

    GettingStartedPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GettingStartedPageComponent,
      selectors: [["iqui-getting-started-page"]],
      decls: 25,
      vars: 4,
      consts: [[1, "card", "mt-3", "mb-3"], [1, "card-header"], [1, "row", "p-3"], [1, "p-3"], [1, "card"], [1, "p-2"], [3, "languages"], [1, "card", "mt-2"]],
      template: function GettingStartedPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Getting started");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Fetching the library");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Integrating into your project");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Styling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "iqui-highlightjs", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "            // Bootstrap style imports\n            @import \"~/node_modules/bootstrap/scss/bootstrap\";\n\n            // Import angular CDK structural styling\n            @import '~/node_modules/@angular/cdk/overlay-prebuilt.css';\n            @import '~/node_modules/@angular/cdk/text-field/text-field'; \n            @include cdk-text-field();\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Include into main application module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "iqui-highlightjs", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "textarea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "            // Import @angular dependencies\n            import { NgModule } from '@angular/core';\n            import { BrowserModule } from '@angular/platform-browser';\n            import { CommonModule } from '@angular/common';\n\n            // Import module\n            import { IqUiNgxModule } from 'iqui-ngx';\n\n            // Import application component\n            import { AppComponent } from './app.component';\n\n            // Import into main application module\n            @NgModule({\n              imports: [\n                BrowserModule,\n                CommonModule,\n                AppRoutingModule,\n\n                IqUiNgxModule\n              ],\n              declarations: [\n                AppComponent\n              ],\n              providers: [],\n              bootstrap: [AppComponent]\n            })\n\n            export class AppModule { }\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        }
      },
      directives: [_iqui_ngx_src_lib_components_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__["HighlightJsComponent"], _iqui_ngx_src_lib_components_form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__["TextareaDirective"], _iqui_ngx_src_lib_components_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__["HighlightJsTextareaDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9zaG93Y2FzZS9zcmMvYXBwL2dldHRpbmctc3RhcnRlZC9jb21wb25lbnQvc3R5bGUuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingStartedPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'iqui-getting-started-page',
          templateUrl: "./index.html",
          styleUrls: ["./style.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/getting-started/index.ts":
  /*!******************************************!*\
    !*** ./src/app/getting-started/index.ts ***!
    \******************************************/

  /*! exports provided: GettingStartedPageModule */

  /***/
  function srcAppGettingStartedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GettingStartedPageModule", function () {
      return GettingStartedPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../iqui-ngx/src/public-api */
    "../iqui-ngx/src/public-api.ts");
    /* harmony import */


    var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component */
    "./src/app/getting-started/component/index.ts"); // Getting started page module
    // ----------------------------------------------------------------------------
    // Import dependencies
    // Import modules
    // Import page component
    // IQ UI NGX Elements' Functional elements module


    var GettingStartedPageModule = function GettingStartedPageModule() {
      _classCallCheck(this, GettingStartedPageModule);
    };

    GettingStartedPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: GettingStartedPageModule
    });
    GettingStartedPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function GettingStartedPageModule_Factory(t) {
        return new (t || GettingStartedPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CodeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GettingStartedPageModule, {
        declarations: [_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedPageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CodeModule"]],
        exports: [_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedPageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GettingStartedPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CodeModule"]],
          declarations: [_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedPageComponent"]],
          exports: [_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedPageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /mnt/e/inquest/V4/code/iqui-ngx/projects/showcase/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map