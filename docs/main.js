"use strict";
(self["webpackChunkshowcase"] = self["webpackChunkshowcase"] || []).push([["main"],{

/***/ 1843:
/*!***************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/_showcase/component/components/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseMenuComponent": () => (/* reexport safe */ _menu__WEBPACK_IMPORTED_MODULE_0__.ShowcaseMenuComponent)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 7341);
// (Re)export components



/***/ }),

/***/ 7341:
/*!********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/_showcase/component/components/menu/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseMenuComponent": () => (/* binding */ ShowcaseMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ 9502);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services */ 6537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_functional_tooltip_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/functional/tooltip/index */ 1132);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);









function ShowcaseMenuComponent_cdk_nested_tree_node_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", node_r2.meta.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iquiTooltip", node_r2.description)("iquiTooltipPosition", "right")("iquiTooltipShowOnHover", !!node_r2.description)("iquiTooltipShowOnFocus", false)("iquiTooltipStayInViewport", true)("iquiTooltipClass", "page-sidebar-link-tooltip")("routerLink", node_r2.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", node_r2.title, " ");
} }
const _c0 = function () { return ["menu-tree-node-expanded"]; };
const _c1 = function () { return ["menu-tree-node-collapsed"]; };
function ShowcaseMenuComponent_cdk_nested_tree_node_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "cdk-nested-tree-node", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](5, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1._tree.isExpanded(node_r3) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c0) : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", node_r3.meta.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iquiTooltip", node_r3.description)("iquiTooltipPosition", "right")("iquiTooltipShowOnHover", !!node_r3.description)("iquiTooltipShowOnFocus", false)("iquiTooltipStayInViewport", true)("iquiTooltipClass", "page-sidebar-link-tooltip")("routerLink", node_r3.component ? node_r3.path : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", node_r3.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("menu-tree-invisible", !ctx_r1._tree.isExpanded(node_r3));
} }
class ShowcaseMenuComponent {
    constructor(_router) {
        this._router = _router;
        /**
         * Main menu links tree control
         */
        this._tree = new _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.NestedTreeControl(node => node.children);
        /**
         * Checks if page has children
         */
        this._hasChildren = (_, page) => _services__WEBPACK_IMPORTED_MODULE_0__.Page.hasChildren(page);
        // On route change
        this._router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                // Flatten all pages
                const flatPages = _services__WEBPACK_IMPORTED_MODULE_0__.Page.toArray(this.pages);
                // (Un)mark all routes
                flatPages.forEach(page => (page.meta.active = false));
                // Expand and mark active route
                let selected = flatPages.find(page => `/${page.path.join('/')}` === e.url);
                while (selected === null || selected === void 0 ? void 0 : selected.parent) {
                    selected.meta.active = selected.parent.meta.active = true;
                    this._tree.expand((selected = selected.parent));
                }
            }
        });
    }
    /**
     * Main menu links tree pages
     */
    get _treeDataSource() {
        return new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__.ArrayDataSource(this.pages);
    }
}
ShowcaseMenuComponent.ɵfac = function ShowcaseMenuComponent_Factory(t) { return new (t || ShowcaseMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ShowcaseMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShowcaseMenuComponent, selectors: [["iqui-showcase-menu"]], inputs: { pages: "pages", title: "title" }, decls: 6, vars: 4, consts: [[1, "nav-item"], [1, "nav-link", "disabled"], [3, "dataSource", "treeControl"], ["class", "menu-tree-node", 4, "cdkTreeNodeDef"], ["class", "menu-tree-node menu-tree-node-group", 3, "ngClass", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "menu-tree-node"], [1, "nav-link", 3, "iquiTooltip", "iquiTooltipPosition", "iquiTooltipShowOnHover", "iquiTooltipShowOnFocus", "iquiTooltipStayInViewport", "iquiTooltipClass", "routerLink"], [1, "menu-tree-node", "menu-tree-node-group", 3, "ngClass"], ["cdkTreeNodeToggle", "", 1, "nav-link", 3, "iquiTooltip", "iquiTooltipPosition", "iquiTooltipShowOnHover", "iquiTooltipShowOnFocus", "iquiTooltipStayInViewport", "iquiTooltipClass", "routerLink"], ["cdkTreeNodeOutlet", ""]], template: function ShowcaseMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "cdk-tree", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ShowcaseMenuComponent_cdk_nested_tree_node_4_Template, 4, 10, "cdk-nested-tree-node", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ShowcaseMenuComponent_cdk_nested_tree_node_5_Template, 6, 15, "cdk-nested-tree-node", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx._treeDataSource)("treeControl", ctx._tree);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkTreeNodeDefWhen", ctx._hasChildren);
    } }, directives: [_angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTree, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeNodeDef, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkNestedTreeNode, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _components_functional_tooltip_index__WEBPACK_IMPORTED_MODULE_1__.TooltipDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeNodeToggle, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__.CdkTreeNodeOutlet], styles: ["h5[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\na[_ngcontent-%COMP%] {\n  padding: 4px 16px !important;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: white !important;\n}\n\n.menu-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.menu-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .menu-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n\n.menu-tree-node[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%] {\n  margin-left: 15px;\n  color: white;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  width: auto !important;\n}\n\n.menu-tree-node.menu-tree-node-group[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 0;\n  left: -20px;\n  padding: 4px 8px;\n}\n\n.menu-tree-node.menu-tree-node-group.menu-tree-node-expanded[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"[-]\";\n}\n\n.menu-tree-node.menu-tree-node-group.menu-tree-node-collapsed[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::before {\n  content: \"[+]\";\n}\n\n.page-sidebar-link-tooltip[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.page-sidebar-link-tooltip[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: -5px;\n  top: 50%;\n  margin-top: -5px;\n  display: block;\n  width: 0;\n  height: 0;\n  border-top: 5px solid transparent;\n  border-bottom: 5px solid transparent;\n  border-left: 5px solid transparent;\n  border-right: 5px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSx1QkFBQTtBQUFGOztBQUVBO0VBQ0UsNEJBQUE7QUFDRjs7QUFBRTtFQUVFLDBCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx1QkFBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtBQUFGOztBQUdBOztFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFBRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQURJO0VBQ0Usc0JBQUE7QUFHTjs7QUFGTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUlSOztBQURJO0VBQ0UsY0FBQTtBQUdOOztBQURJO0VBQ0UsY0FBQTtBQUdOOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQUNKIiwiZmlsZSI6InN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBNZW51IGNvbnRlbnRzXG5oNSB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuYSB7XG4gIHBhZGRpbmc6IDRweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICYsXG4gICYgPiAqIHtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1lbnUtdHJlZS1pbnZpc2libGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS10cmVlIHVsLFxuLm1lbnUtdHJlZSBsaSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5tZW51LXRyZWUtbm9kZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gICYubWVudS10cmVlLW5vZGUtZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAmID4gYSB7XG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgJiA+IHNwYW46OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgIH1cbiAgICB9XG4gICAgJi5tZW51LXRyZWUtbm9kZS1leHBhbmRlZCA+IGEgPiBzcGFuOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJ1stXSc7XG4gICAgfVxuICAgICYubWVudS10cmVlLW5vZGUtY29sbGFwc2VkID4gYSA+IHNwYW46OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnWytdJztcbiAgICB9XG4gIH1cbn1cblxuLy8gUGFnZSBNZW51IHRvb2x0aXBzXG4ucGFnZS1zaWRlYmFyLWxpbmstdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTEgKiA1cHg7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTEgKiA1cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCBibGFjaztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 249:
/*!***************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/_showcase/component/directives/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcasePagesDirective": () => (/* binding */ ShowcasePagesDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * When child of <iqui-showcase /> component, allows for defining additional page groups
 *
 * Usage:
 *
 * <ng-container [iqui-showcase-pages]="pages" [title]="'Getting started'">
 *  Addition page groups
 * </ng-container>
 */
class ShowcasePagesDirective {
}
ShowcasePagesDirective.ɵfac = function ShowcasePagesDirective_Factory(t) { return new (t || ShowcasePagesDirective)(); };
ShowcasePagesDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ShowcasePagesDirective, selectors: [["", "iqui-showcase-pages", ""]], inputs: { pages: ["iqui-showcase-pages", "pages"], title: "title" } });


/***/ }),

/***/ 978:
/*!****************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/_showcase/component/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcasePagesDirective": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_1__.ShowcasePagesDirective),
/* harmony export */   "ShowcaseMenuComponent": () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_4__.ShowcaseMenuComponent),
/* harmony export */   "ShowcaseComponent": () => (/* binding */ ShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages */ 1424);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives */ 249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_menu_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/index */ 7341);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ 1843);
// Import showcase page structure

// Import and (re)export child components and directives




function ShowcaseComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "iqui-showcase-menu", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pages", group_r1.pages)("title", group_r1.title);
} }


class ShowcaseComponent {
    constructor() {
        // Get pages structure and definitions
        this._pages = (0,_pages__WEBPACK_IMPORTED_MODULE_0__.getShowcasePages)();
    }
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(); };
ShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["iqui-showcase"]], contentQueries: function ShowcaseComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _directives__WEBPACK_IMPORTED_MODULE_1__.ShowcasePagesDirective, 4, _directives__WEBPACK_IMPORTED_MODULE_1__.ShowcasePagesDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._groups = _t);
    } }, decls: 2, vars: 1, consts: [[1, "iqui-showcase-page-sidebar", "sidebar", "navbar-nav"], [4, "ngFor", "ngForOf"], [3, "pages", "title"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ShowcaseComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx._groups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _components_menu_index__WEBPACK_IMPORTED_MODULE_2__.ShowcaseMenuComponent], styles: ["[_nghost-%COMP%]   .iqui-showcase-page-sidebar[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 320px !important;\n  overflow-x: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQURKIiwiZmlsZSI6InN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC8vIFBhZ2UgTWVudVxuICAuaXF1aS1zaG93Y2FzZS1wYWdlLXNpZGViYXIge1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDMyMHB4ICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 5098:
/*!******************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/_showcase/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponent),
/* harmony export */   "ShowcasePagesDirective": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ShowcasePagesDirective),
/* harmony export */   "ShowcaseMenuComponent": () => (/* reexport safe */ _component__WEBPACK_IMPORTED_MODULE_1__.ShowcaseMenuComponent),
/* harmony export */   "getShowcasePages": () => (/* reexport safe */ _pages__WEBPACK_IMPORTED_MODULE_2__.getShowcasePages),
/* harmony export */   "ShowcaseModule": () => (/* binding */ ShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ 8205);
/* harmony import */ var _components_functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/functional */ 9737);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ 978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ 1424);



// Import modules

// Import components and (re)export components and required services




/**
 * IQ UI NGX Elements' showcase module
 * Implements an embedded showcase application
 */
class ShowcaseModule {
}
ShowcaseModule.ɵfac = function ShowcaseModule_Factory(t) { return new (t || ShowcaseModule)(); };
ShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShowcaseModule });
ShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule, _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShowcaseModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponent, _component__WEBPACK_IMPORTED_MODULE_1__.ShowcasePagesDirective, _component__WEBPACK_IMPORTED_MODULE_1__.ShowcaseMenuComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__.CdkTreeModule, _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule], exports: [
        // Export child components
        _component__WEBPACK_IMPORTED_MODULE_1__.ShowcaseComponent,
        _component__WEBPACK_IMPORTED_MODULE_1__.ShowcasePagesDirective,
        _component__WEBPACK_IMPORTED_MODULE_1__.ShowcaseMenuComponent] }); })();


/***/ }),

/***/ 1424:
/*!******************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/_showcase/pages.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* reexport safe */ _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page),
/* harmony export */   "getShowcasePages": () => (/* binding */ getShowcasePages)
/* harmony export */ });
/* harmony import */ var _components_functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/functional */ 9737);
/* harmony import */ var _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/functional/_showcase */ 8739);
/* harmony import */ var _components_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/basics */ 2986);
/* harmony import */ var _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/basics/_showcase */ 482);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/form */ 5566);
/* harmony import */ var _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/form/_showcase */ 9754);
/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/code */ 800);
/* harmony import */ var _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/code/_showcase */ 5557);
/* harmony import */ var _components_showcasing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/showcasing */ 1834);
/* harmony import */ var _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/showcasing/_showcase */ 4040);
/* harmony import */ var _services_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/routing */ 1745);
/* harmony import */ var _services_routing_showcase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/routing/_showcase */ 8709);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../data */ 3813);
/* harmony import */ var _data_showcase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data/_showcase */ 8667);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pipes */ 2219);
/* harmony import */ var _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pipes/_showcase */ 9850);
// All navigate-able pages
// ----------------------------------------------------------------------------
// Import components dependencies




































// Import routing dependencies


// Import data dependencies




// Import pipe dependencies








// (Re)export Page class

// Compose pages structure
const pages = [
    new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('controls', 'Controls', 'Components and Directives', null, [
        new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('primitives', 'Primitive controls', 'Primitive building blocks for building up other more complex components', null, [
            new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('functional', 'Functional', 'Directives and Components providing basic, reusable functionality', null, [
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.DeclareDirective, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.DeclareShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.Copy2ClipboardDirective, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.Copy2ClipboardShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.TooltipDirective, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.TooltipShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownDirective, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.DropdownShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.CollapseDirective, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.CollapseShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.ModalShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.ToastComponent, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.ToastShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_functional__WEBPACK_IMPORTED_MODULE_0__.BookmarkableDirective, _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.BookmarkableShowcaseComponent),
            ]),
            new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('form', 'Forms', 'Extension of HTML <form /> and related HTML child elements', null, [
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__.FormDirective, _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__.InputComponent, _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.InputShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.CheckboxShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__.RadioComponent, _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.RadioShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_form__WEBPACK_IMPORTED_MODULE_4__.SelectComponent, _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.SelectShowcaseComponent),
            ]),
        ]),
        new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('composite', 'Composite controls', 'Composite controls, built up from primitives, implement complex functionality', null, [
            new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('basics', 'Basic controls', 'Simpler composite controls', null, [
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_basics__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent, _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.ButtonShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_basics__WEBPACK_IMPORTED_MODULE_2__.DropdownButtonComponent, _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.DropdownButtonShowcaseComponent),
                _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_basics__WEBPACK_IMPORTED_MODULE_2__.PhraseInputComponent, _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.PhraseInputShowcaseComponent),
            ]),
        ]),
        new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('code', 'Code', 'Components used for visualizing code and code syntax.', null, [
            _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_code__WEBPACK_IMPORTED_MODULE_6__.HighlightJsComponent, _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.HighlightJsShowcaseComponent),
        ]),
        new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('showcase', 'Showcasing', 'Components and services used for quickly building "showcase" apps.', null, [
            _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_components_showcasing__WEBPACK_IMPORTED_MODULE_8__.PlaygroundComponent, _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.PlaygroundShowcaseComponent),
        ]),
    ]),
    new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('pipes', 'Pipes', 'Pipes', null, [
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__.FilterPipe, _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__.FilterShowcaseComponent),
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__.SortPipe, _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__.SortShowcaseComponent),
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__.PaginatePipe, _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__.PaginateShowcaseComponent),
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_pipes__WEBPACK_IMPORTED_MODULE_14__.SlicePipe, _pipes_showcase__WEBPACK_IMPORTED_MODULE_15__.SliceShowcaseComponent),
    ]),
    new _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page('data', 'Data Classes', 'Data classes', null, [
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_services_routing__WEBPACK_IMPORTED_MODULE_10__.Page, _services_routing_showcase__WEBPACK_IMPORTED_MODULE_11__.PageServiceShowcaseComponent),
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_data__WEBPACK_IMPORTED_MODULE_12__.Phrase, _data_showcase__WEBPACK_IMPORTED_MODULE_13__.PhraseShowcaseComponent),
        _services_routing__WEBPACK_IMPORTED_MODULE_10__.Page.fromClass(_data__WEBPACK_IMPORTED_MODULE_12__.Pagination, _data_showcase__WEBPACK_IMPORTED_MODULE_13__.PaginationShowcaseComponent),
    ]),
];
/**
 * Composes showcase pages structure and definitions
 */
function getShowcasePages() {
    // Return pages structure
    return pages;
}


/***/ }),

/***/ 482:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/_showcase.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonShowcaseComponent": () => (/* reexport safe */ _button_showcase__WEBPACK_IMPORTED_MODULE_3__.ButtonShowcaseComponent),
/* harmony export */   "DropdownButtonShowcaseComponent": () => (/* reexport safe */ _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonShowcaseComponent),
/* harmony export */   "PhraseInputShowcaseComponent": () => (/* reexport safe */ _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_5__.PhraseInputShowcaseComponent),
/* harmony export */   "BasicsShowcaseModule": () => (/* binding */ BasicsShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code */ 800);
/* harmony import */ var _showcasing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showcasing */ 1834);
/* harmony import */ var _button_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button/_showcase */ 1050);
/* harmony import */ var _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-button/_showcase */ 2591);
/* harmony import */ var _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phrase-input/_showcase */ 9187);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules



// Import showcase components







// IQ UI NGX Elements' Basic elements module
class BasicsShowcaseModule {
}
BasicsShowcaseModule.ɵfac = function BasicsShowcaseModule_Factory(t) { return new (t || BasicsShowcaseModule)(); };
BasicsShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BasicsShowcaseModule });
BasicsShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ___WEBPACK_IMPORTED_MODULE_0__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule], 
        // Export dependency modules
        ___WEBPACK_IMPORTED_MODULE_0__.BasicsModule,
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BasicsShowcaseModule, { declarations: [_button_showcase__WEBPACK_IMPORTED_MODULE_3__.ButtonShowcaseComponent, _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonShowcaseComponent, _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_5__.PhraseInputShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, ___WEBPACK_IMPORTED_MODULE_0__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule], exports: [
        // Export dependency modules
        ___WEBPACK_IMPORTED_MODULE_0__.BasicsModule,
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule,
        // Export child components
        _button_showcase__WEBPACK_IMPORTED_MODULE_3__.ButtonShowcaseComponent,
        _dropdown_button_showcase__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonShowcaseComponent,
        _phrase_input_showcase__WEBPACK_IMPORTED_MODULE_5__.PhraseInputShowcaseComponent] }); })();


/***/ }),

/***/ 1050:
/*!*******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/button/_showcase/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonShowcaseComponent": () => (/* binding */ ButtonShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 2780);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ 2986);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form */ 5566);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);


// Import modules







// Showcase component
class ButtonShowcaseComponent {
    constructor() {
        var _a, _b;
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_2__.BasicsModule, _form__WEBPACK_IMPORTED_MODULE_3__.FormModule, _code__WEBPACK_IMPORTED_MODULE_4__.CodeModule];
        // Playground context
        this.context = (_a = class {
            },
            // tslint:disable: variable-name
            _a.ContentHtml = '<i>Button content</i>',
            _a.Disabled = [false, true],
            _a.Class = '',
            _a.NgClass = {},
            _a.Size = [undefined, ...Object.values(___WEBPACK_IMPORTED_MODULE_0__.ButtonComponentSize)],
            _a.Theme = [undefined, ...Object.values(___WEBPACK_IMPORTED_MODULE_0__.ButtonComponentTheme)],
            _a.Href = '',
            _a.Target = ['_blank', '_self', ''],
            _a);
        // Playground form context
        this.contextForm = (_b = class {
            },
            // tslint:disable: variable-name
            _b.FormDisabled = [undefined, true, false],
            _b.FormSize = [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.BootstrapSize)],
            _b.FormValid = [undefined, true, false],
            _b);
    }
}
ButtonShowcaseComponent.ɵfac = function ButtonShowcaseComponent_Factory(t) { return new (t || ButtonShowcaseComponent)(); };
ButtonShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: ButtonShowcaseComponent, selectors: [["ng-component"]], decls: 9, vars: 6, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function ButtonShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Basic Button Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\nDisplays a button-styled button or anchor HTML element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n    <iqui-button\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\"\n      [size]=\"    context.Size\"\n      [theme]=\"   context.Theme\"\n      [href]=\"    context.Href\"\n      [target]=\"  context.Target\">\n\n      <!-- HTML content -->\n      <div [innerHTML]=\"context.ContentHtml\"></div>\n\n    </iqui-button>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "\n    <form iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-button [theme]=\"'secondary'\">\n        <i>Button content</i>\n      </iqui-button>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_5__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 2780:
/*!*********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/button/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponentTheme": () => (/* binding */ ButtonComponentTheme),
/* harmony export */   "ButtonComponentSize": () => (/* binding */ ButtonComponentSize),
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form */ 5566);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../types */ 4256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form_directives_button_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/directives/button/index */ 3053);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






function ButtonComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
function ButtonComponent_button_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function ButtonComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ButtonComponent_button_2_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r2._composedClassValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("iquiFormParent", ctx_r2._iquiFormParent)("ngClass", ctx_r2.ngClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx_r2.disabled || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function ButtonComponent_a_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function ButtonComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ButtonComponent_a_3_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r3._composedClassValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r3.ngClass)("href", ctx_r3._href, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("target", ctx_r3.target);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx_r3.disabled || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function ButtonComponent_a_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function ButtonComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ButtonComponent_a_4_ng_container_2_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r4._composedClassValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx_r4.ngClass)("routerLink", ctx_r4._routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx_r4.disabled || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
const _c0 = ["*"];
// Define and export enums and types
/*
 * Button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
const ButtonComponentTheme = Object.assign(Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_1__.BootstrapTheme), { LINK: 'link' });
/*
 * Button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
const ButtonComponentSize = Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_1__.BootstrapSize);
/**
 * Button, renders a button (or link) control
 *
 * Usage:
 *
 *  <iqui-button\
 *    [ disabled    = "true|false" ]\
 *    [ class       = "..." ]\
 *    [ ngClass     = "{...}" ]\
 *    [ size        = "sm|lg" ]\
 *    [ theme       = "primary|secondary|success|warning|danger|info|light|dark|link" ]\
 *    [ href        = "https://example.com" ]\
 *    [ target      = "_blank|_self" ]\
 *  >\
 *    Button content\
 *  </iqui-button>
 *
 */
class ButtonComponent extends _form__WEBPACK_IMPORTED_MODULE_0__.UsesFormElementDirectives {
    constructor() {
        super(...arguments);
        /**
         * [disabled] binding
         */
        this.disabled = false;
        /**
         * Bootstrap theme color to be used by the component
         */
        this.theme = 'secondary';
        /**
         * Bootstrap theme size to be used by the component
         */
        this.size = null;
        /**
         * Anchor Hyperlink URL (if set, will style as a link by default)
         */
        this.href = null;
        /**
         * Anchor Hyperlink URL target (only makes sense to use along side [href])
         */
        this.target = '_self';
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    /**
     * Returns remote URL to link to if [href] property contains a remote URL as a value
     */
    get _href() {
        return this.href && this.href.includes('://') ? this.href : undefined;
    }
    /**
     * Returns local URL to route to if [href] property contains a local URL as a value
     */
    get _routerLink() {
        return this.href && !this.href.includes('://') ? this.href : undefined;
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as button (.btn)
            'btn',
            // Mark size (.btn-sm)
            this.size ? 'btn-' + this.size : null,
            // Mark theme color (.btn-primary, .btn-link, etc ...)
            'btn-' + (this.theme || (!this._href && !this._routerLink ? 'secondary' : 'link')),
            // Mark as disabled, if disabled (.disabled)
            this.disabled ? 'disabled' : null,
            // Pass-through host class
            this.class || null,
        ].join(' ');
    }
}
ButtonComponent.ɵfac = /*@__PURE__*/ function () { let ɵButtonComponent_BaseFactory; return function ButtonComponent_Factory(t) { return (ɵButtonComponent_BaseFactory || (ɵButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](ButtonComponent)))(t || ButtonComponent); }; }();
ButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["iqui-button"]], hostVars: 2, hostBindings: function ButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", theme: "theme", size: "size", href: "href", target: "target" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 5, vars: 3, consts: [["content", ""], [3, "iquiFormParent", "ngClass", "class", 4, "ngIf"], [3, "ngClass", "class", "href", "target", 4, "ngIf"], [3, "ngClass", "class", "routerLink", 4, "ngIf"], [3, "iquiFormParent", "ngClass"], [1, "iqui-button-content", "d-flex", "align-items-center"], [4, "ngTemplateOutlet"], [3, "ngClass", "href", "target"], [3, "ngClass", "routerLink"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ButtonComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ButtonComponent_button_2_Template, 3, 6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ButtonComponent_a_3_Template, 3, 7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ButtonComponent_a_4_Template, 3, 6, "a", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx._href && !ctx._routerLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx._href);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !!ctx._routerLink);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _form_directives_button_index__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   .btn.disabled[_ngcontent-%COMP%] {\n  cursor: default;\n}\n[_nghost-%COMP%]   .iqui-button-content[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxlQUFBO0FBQ0o7QUFFRTtFQUNFLHFCQUFBO0FBQUoiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIC5idG4uZGlzYWJsZWQge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxuXG4gIC5pcXVpLWJ1dHRvbi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2591:
/*!****************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/dropdown-button/_showcase/index.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownButtonShowcaseComponent": () => (/* binding */ DropdownButtonShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 5892);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ 2986);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form */ 5566);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);


// Import modules







const _c0 = function () { return ["scss"]; };
// Showcase component
class DropdownButtonShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_2__.BasicsModule, _form__WEBPACK_IMPORTED_MODULE_3__.FormModule, _code__WEBPACK_IMPORTED_MODULE_4__.CodeModule];
        // Playground context
        this.context = {
            ContentHtml: '<i>Button content</i>',
            Disabled: [false, true],
            Class: '',
            NgClass: {},
            Size: [undefined, ...Object.values(___WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponentSize)],
            Theme: [undefined, ...Object.values(___WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponentTheme)],
            Position: Object.values(___WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponentRelativePositioning),
            ShowOnFocus: [true, false],
            ShowOnHover: [false, true],
            StayInViewport: [false, true],
            ToggleOnButtonClick: [true, false],
            OnSelected: e => {
                console.log(e);
            },
        };
        // Playground form context
        this.contextForm = {
            FormDisabled: [undefined, true, false],
            FormSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.BootstrapSize)],
            FormValid: [undefined, true, false],
        };
    }
}
DropdownButtonShowcaseComponent.ɵfac = function DropdownButtonShowcaseComponent_Factory(t) { return new (t || DropdownButtonShowcaseComponent)(); };
DropdownButtonShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DropdownButtonShowcaseComponent, selectors: [["ng-component"]], decls: 18, vars: 8, consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]], template: function DropdownButtonShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Basic Drop-down Button Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\nDisplays a button-styled drop-down. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "iqui-highlightjs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "        // Drop-down button down arrow styling\n        iqui-dropdown-button iqui-button .iqui-button-content {\n          position: relative;\n          padding-right: 16px;\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "::after {\n            content: \"\u25BE\";\n            position: absolute;\n            top: 0;\n            right: 0;\n          }\n        }\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "iqui-playground", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "\n    <iqui-dropdown-button\n      [disabled]=\"            context.Disabled\"\n      [class]=\"               context.Class\"\n      [ngClass]=\"             context.NgClass\"\n      [size]=\"                context.Size\"\n      [theme]=\"               context.Theme\"\n      [position]=\"            context.Position\"\n      [showOnFocus]=\"         context.ShowOnFocus\"\n      [showOnHover]=\"         context.ShowOnHover\"\n      [stayInViewport]=\"      context.StayInViewport\"\n      [toggleOnButtonClick]=\" context.ToggleOnButtonClick\">\n\n      <!-- Example header content using exposed close() method -->\n      <ng-container *iquiDropdownHeader=\"let close\">\n        <span class=\"dropdown-header\">Header content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n        <div class=\"dropdown-divider\"></div>\n      </ng-container>\n\n      <!-- Example body content using exposed close() method -->\n      <ng-container *iquiDropdownBody=\"let close\">\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #1</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #2</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #3</a>\n      </ng-container>\n\n      <!-- Example footer content using exposed close() method -->\n      <ng-container *iquiDropdownFooter=\"let close\">\n        <div class=\"dropdown-divider\"></div>\n        <span class=\"dropdown-header\">Footer content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n      </ng-container>\n\n      <!-- HTML content -->\n      <div [innerHTML]=\"context.ContentHtml\"></div>\n\n    </iqui-dropdown-button>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "iqui-playground", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "\n    <form iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-dropdown-button [theme]=\"'secondary'\">\n        Button content\n        <ng-container *iquiDropdownHeader> Header content </ng-container>\n        <ng-container *iquiDropdownBody> Body </ng-container>\n        <ng-container *iquiDropdownFooter> Footer content </ng-container>\n      </iqui-dropdown-button>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
    } }, directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_7__.PlaygroundTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_7__.PlaygroundComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 5892:
/*!******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/dropdown-button/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownButtonComponentTheme": () => (/* binding */ DropdownButtonComponentTheme),
/* harmony export */   "DropdownButtonComponentSize": () => (/* binding */ DropdownButtonComponentSize),
/* harmony export */   "DropdownButtonComponentRelativePositioning": () => (/* binding */ DropdownButtonComponentRelativePositioning),
/* harmony export */   "DropdownButtonComponent": () => (/* binding */ DropdownButtonComponent)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../form */ 5566);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/index */ 2780);
/* harmony import */ var _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../functional/dropdown/index */ 2717);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);







const _c0 = ["dropdown"];
function DropdownButtonComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return { $implicit: a0 }; };
function DropdownButtonComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DropdownButtonComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const close_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.header == null ? null : ctx_r1.header.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, close_r4));
} }
function DropdownButtonComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function DropdownButtonComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DropdownButtonComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const close_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.body == null ? null : ctx_r2.body.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, close_r6));
} }
function DropdownButtonComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function DropdownButtonComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DropdownButtonComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const close_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.footer == null ? null : ctx_r3.footer.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c1, close_r8));
} }
const _c2 = ["*"];
// Define and export enums and types
/*
 * Dropdown button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
const DropdownButtonComponentTheme = Object.assign({}, _button__WEBPACK_IMPORTED_MODULE_1__.ButtonComponentTheme);
/*
 * Dropdown button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
const DropdownButtonComponentSize = Object.assign({}, _button__WEBPACK_IMPORTED_MODULE_1__.ButtonComponentSize);
/*
 * Dropdown button's preferred positions enum
 */
// tslint:disable-next-line: variable-name
const DropdownButtonComponentRelativePositioning = Object.assign({}, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownRelativePositioning);
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
class DropdownButtonComponent extends _form__WEBPACK_IMPORTED_MODULE_0__.UsesFormElementDirectives {
    constructor() {
        super(...arguments);
        /**
         * [disabled] binding
         */
        this.disabled = false;
        /**
         * Bootstrap theme color to be used by the component
         */
        this.theme = 'secondary';
        /**
         * Bootstrap theme size to be used by the component
         */
        this.size = null;
        /**
         * Drop-down preferred position
         */
        this.position = 'bottom';
        /**
         * If drop-down should be displayed when parent control is focused
         */
        this.showOnFocus = true;
        /**
         * If drop-down should be displayed when parent control is hovered over
         */
        this.showOnHover = false;
        /**
         * If drop-down should detach from the parent control if necessary and stay inside the viewport
         */
        this.stayInViewport = false;
        /**
         * If drop-down should toggle on button click after then button has been focused
         */
        this.toggleOnButtonClick = true;
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    /**
     * Toggle (if required) drop-down on button clicked
     */
    _onButtonClicked() {
        if (this.toggleOnButtonClick) {
            this._dropdownRef.toggle();
        }
    }
}
DropdownButtonComponent.ɵfac = /*@__PURE__*/ function () { let ɵDropdownButtonComponent_BaseFactory; return function DropdownButtonComponent_Factory(t) { return (ɵDropdownButtonComponent_BaseFactory || (ɵDropdownButtonComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](DropdownButtonComponent)))(t || DropdownButtonComponent); }; }();
DropdownButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DropdownButtonComponent, selectors: [["iqui-dropdown-button"]], contentQueries: function DropdownButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownHeaderDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownBodyDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownFooterDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.body = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
    } }, viewQuery: function DropdownButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._dropdownRef = _t.first);
    } }, hostVars: 2, hostBindings: function DropdownButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", theme: "theme", size: "size", position: "position", showOnFocus: "showOnFocus", showOnHover: "showOnHover", stayInViewport: "stayInViewport", toggleOnButtonClick: "toggleOnButtonClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 6, vars: 11, consts: [["iquiDropdown", "", 3, "iquiFormParent", "disabled", "ngClass", "theme", "size", "iquiDropdownPosition", "iquiDropdownShowOnFocus", "iquiDropdownShowOnHover", "iquiDropdownStayInViewport", "click"], ["dropdown", ""], [4, "iquiDropdownHeader"], [4, "iquiDropdownBody"], [4, "iquiDropdownFooter"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DropdownButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "iqui-button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DropdownButtonComponent_Template_iqui_button_click_0_listener() { return ctx._onButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DropdownButtonComponent_ng_container_3_Template, 2, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, DropdownButtonComponent_ng_container_4_Template, 2, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DropdownButtonComponent_ng_container_5_Template, 2, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.class);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("disabled", ctx.disabled)("ngClass", ctx.ngClass)("theme", ctx.theme)("size", ctx.size)("iquiDropdownPosition", ctx.position)("iquiDropdownShowOnFocus", ctx.showOnFocus)("iquiDropdownShowOnHover", ctx.showOnHover)("iquiDropdownStayInViewport", ctx.stayInViewport);
    } }, directives: [_button__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownHeaderDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownBodyDirective, _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownFooterDirective], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n[_nghost-%COMP%]   iqui-button[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0FBQ0oiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gIGlxdWktYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 2986:
/*!**************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/index.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent),
/* harmony export */   "ButtonComponentTheme": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_3__.ButtonComponentTheme),
/* harmony export */   "ButtonComponentSize": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_3__.ButtonComponentSize),
/* harmony export */   "DropdownButtonComponent": () => (/* reexport safe */ _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonComponent),
/* harmony export */   "DropdownButtonComponentTheme": () => (/* reexport safe */ _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonComponentTheme),
/* harmony export */   "DropdownButtonComponentSize": () => (/* reexport safe */ _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonComponentSize),
/* harmony export */   "DropdownButtonComponentRelativePositioning": () => (/* reexport safe */ _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonComponentRelativePositioning),
/* harmony export */   "PhraseInputComponent": () => (/* reexport safe */ _phrase_input__WEBPACK_IMPORTED_MODULE_5__.PhraseInputComponent),
/* harmony export */   "BasicsModule": () => (/* binding */ BasicsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functional */ 9737);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ 5566);
/* harmony import */ var _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functional/dropdown */ 2717);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ 2780);
/* harmony import */ var _dropdown_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown-button */ 5892);
/* harmony import */ var _phrase_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phrase-input */ 1895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);


// Import dependency modules


// Import components

// Import components and (re)export components







/**
 * IQ UI NGX Elements' Basic elements module
 * Implements components that are basic building blocks of any application or more-complex component
 */
class BasicsModule {
}
BasicsModule.ɵfac = function BasicsModule_Factory(t) { return new (t || BasicsModule)(); };
BasicsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: BasicsModule });
BasicsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _form__WEBPACK_IMPORTED_MODULE_1__.FormModule], 
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        // Export dependency modules
        _functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _form__WEBPACK_IMPORTED_MODULE_1__.FormModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](BasicsModule, { declarations: [_button__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent, _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonComponent, _phrase_input__WEBPACK_IMPORTED_MODULE_5__.PhraseInputComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _form__WEBPACK_IMPORTED_MODULE_1__.FormModule], exports: [
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        // Export dependency modules
        _functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _form__WEBPACK_IMPORTED_MODULE_1__.FormModule,
        // Export child components
        _button__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent,
        _dropdown_button__WEBPACK_IMPORTED_MODULE_4__.DropdownButtonComponent,
        _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownHeaderDirective,
        _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownBodyDirective,
        _functional_dropdown__WEBPACK_IMPORTED_MODULE_2__.DropdownFooterDirective,
        _phrase_input__WEBPACK_IMPORTED_MODULE_5__.PhraseInputComponent] }); })();


/***/ }),

/***/ 9187:
/*!*************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/phrase-input/_showcase/index.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhraseInputShowcaseComponent": () => (/* binding */ PhraseInputShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../data */ 3813);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ */ 2986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);

// Import modules





// Showcase component
class PhraseInputShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_1__.BasicsModule];
        // Playground context
        this.context = {
            Phrase: new _data__WEBPACK_IMPORTED_MODULE_0__.Phrase(),
            Placeholder: 'Enter phrase here',
        };
    }
}
PhraseInputShowcaseComponent.ɵfac = function PhraseInputShowcaseComponent_Factory(t) { return new (t || PhraseInputShowcaseComponent)(); };
PhraseInputShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PhraseInputShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function PhraseInputShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Phrase input Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\nAllows editing of a searchable/filterable string expression or regular expression ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\n    <iqui-phrase-input\n      [(phrase)]=\"context.Phrase\"\n      [placeholder]=\"context.Placeholder\"\n    >\n      <ng-container iqui-phrase-input-button-clear>  [x] </ng-container>\n      <ng-container iqui-phrase-input-button-case>   [Aa] </ng-container>\n      <ng-container iqui-phrase-input-button-regexp> [.*] </ng-container>\n    </iqui-phrase-input>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_2__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_4__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_2__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 1895:
/*!***************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/basics/phrase-input/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhraseInputComponent": () => (/* binding */ PhraseInputComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data */ 3813);
/* harmony import */ var _form_directives_input_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../form/directives/input/index */ 8329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
// Phrase input component
// ----------------------------------------------------------------------------
// Import dependencies



// Import data




function PhraseInputComponent_a_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[x]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PhraseInputComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhraseInputComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7._clearPhrase(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", null, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PhraseInputComponent_a_2_ng_container_4_Template, 2, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r5.childNodes.length);
} }
function PhraseInputComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[Aa]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PhraseInputComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[.*]");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = [[["", "iqui-phrase-input-button-case", ""]], [["", "iqui-phrase-input-button-regexp", ""]], [["", "iqui-phrase-input-button-clear", ""]]];
const _c1 = ["[iqui-phrase-input-button-case]", "[iqui-phrase-input-button-regexp]", "[iqui-phrase-input-button-clear]"];
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
class PhraseInputComponent {
    constructor() {
        /**
         * Internal, pre-debounced, change event
         */
        this._phraseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        /**
         * Two-way bound phrase being edited
         */
        this.phrase = new _data__WEBPACK_IMPORTED_MODULE_0__.Phrase();
        this.phraseChange = this._phraseChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.debounce)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.interval)(this.debounce)));
        /**
         * Change event debounce interval (in [ms])
         */
        this.debounce = 400;
        /**
         * Internal phrase being edited
         */
        this._phrase = new _data__WEBPACK_IMPORTED_MODULE_0__.Phrase();
    }
    ngOnChanges() {
        // Ingest set phrase
        if (this.phrase && this.phrase instanceof _data__WEBPACK_IMPORTED_MODULE_0__.Phrase) {
            // Check if phrases have different values
            if (this._phrase.toString() !== this.phrase.toString()) {
                // Update phrase
                this._phrase = this.phrase;
            }
        }
        else if (this.phrase && typeof this.phrase === 'string') {
            // Update phrase
            this._phrase = _data__WEBPACK_IMPORTED_MODULE_0__.Phrase.parse(this.phrase);
        }
    }
    /**
     * Updates a phrase after being edited
     * @param value Edited value
     */
    _valueChanged(value) {
        // Update value if value provided
        if (value !== undefined) {
            this._phrase.value = value;
        }
        // Trigger update
        this._triggerUpdate();
    }
    /**
     * Clears editing phrase
     */
    _clearPhrase() {
        // Clear phrase
        this._phrase.value = '';
        // Trigger update
        this._triggerUpdate();
    }
    /**
     * Toggles phrase's case sensitivity
     */
    _togglePhraseCaseSensitivity() {
        // Toggle case sensitivity
        this._phrase.isCaseSensitive = !this._phrase.isCaseSensitive;
        // Trigger update
        this._triggerUpdate();
    }
    /**
     * Toggles ig phrase is a reg-exp
     */
    _togglePhraseRegExp() {
        // Toggle reg-exp
        this._phrase.isRegExp = !this._phrase.isRegExp;
        // Trigger update
        this._triggerUpdate();
    }
    /**
     * Triggers phrase update event
     */
    _triggerUpdate() {
        // Trigger update event
        if (this.phrase && this.phrase instanceof _data__WEBPACK_IMPORTED_MODULE_0__.Phrase) {
            this._phraseChange.emit(_data__WEBPACK_IMPORTED_MODULE_0__.Phrase.clone(this._phrase));
        }
        else if (this.phrase && typeof this.phrase === 'string') {
            this._phraseChange.emit(_data__WEBPACK_IMPORTED_MODULE_0__.Phrase.stringify(this._phrase));
        }
    }
}
PhraseInputComponent.ɵfac = function PhraseInputComponent_Factory(t) { return new (t || PhraseInputComponent)(); };
PhraseInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PhraseInputComponent, selectors: [["iqui-phrase-input"]], inputs: { phrase: "phrase", debounce: "debounce", placeholder: "placeholder", presets: "presets" }, outputs: { phraseChange: "phraseChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 13, vars: 11, consts: [[1, "input-group", "actions"], ["type", "text", 3, "placeholder", "value", "input"], ["href", "javascript:void(0)", "class", "btn border border-gray clear-filter", "title", "Clear", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", "title", "Match Case", 3, "click"], ["caseButtonContent", ""], [4, "ngIf"], ["href", "javascript:void(0)", "title", "Use Regular Expression", 3, "click"], ["regexpButtonContent", ""], ["href", "javascript:void(0)", "title", "Clear", 1, "btn", "border", "border-gray", "clear-filter", 3, "click"], ["clearButtonContent", ""]], template: function PhraseInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function PhraseInputComponent_Template_input_input_1_listener($event) { return ctx._valueChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PhraseInputComponent_a_2_Template, 5, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhraseInputComponent_Template_a_click_3_listener() { return ctx._togglePhraseCaseSensitivity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, PhraseInputComponent_ng_container_7_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhraseInputComponent_Template_a_click_8_listener() { return ctx._togglePhraseRegExp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](11, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PhraseInputComponent_ng_container_12_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);
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
    } }, directives: [_form_directives_input_index__WEBPACK_IMPORTED_MODULE_1__.InputDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 5557:
/*!****************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/code/_showcase.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightJsShowcaseComponent": () => (/* reexport safe */ _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_2__.HighlightJsShowcaseComponent),
/* harmony export */   "CodeShowcaseModule": () => (/* binding */ CodeShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ 800);
/* harmony import */ var _showcasing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../showcasing */ 1834);
/* harmony import */ var _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight-js/_showcase */ 2827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules


// Import showcase components and (re)export components



// IQ UI NGX Elements' Code/Syntax module
class CodeShowcaseModule {
}
CodeShowcaseModule.ɵfac = function CodeShowcaseModule_Factory(t) { return new (t || CodeShowcaseModule)(); };
CodeShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CodeShowcaseModule });
CodeShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ___WEBPACK_IMPORTED_MODULE_0__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule], 
        // Export dependency modules
        ___WEBPACK_IMPORTED_MODULE_0__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CodeShowcaseModule, { declarations: [_highlight_js_showcase__WEBPACK_IMPORTED_MODULE_2__.HighlightJsShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, ___WEBPACK_IMPORTED_MODULE_0__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule], exports: [
        // Export dependency modules
        ___WEBPACK_IMPORTED_MODULE_0__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule,
        // Export child components
        _highlight_js_showcase__WEBPACK_IMPORTED_MODULE_2__.HighlightJsShowcaseComponent] }); })();


/***/ }),

/***/ 2827:
/*!***********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/code/highlight-js/_showcase/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightJsShowcaseComponent": () => (/* binding */ HighlightJsShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ 7911);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../data */ 3813);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ */ 800);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ 9633);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ 5281);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ 526);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/lib/languages/css */ 9009);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ 2166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);


// Import modules


// Register highlight.js languages









(0,___WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_4__["default"]);
(0,___WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_5__["default"]);
(0,___WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('xml', highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_6__["default"]);
(0,___WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('css', highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
(0,___WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('scss', highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_8__["default"]);
// Showcase component
class HighlightJsShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [_basics__WEBPACK_IMPORTED_MODULE_3__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_2__.CodeModule];
        // Playground context
        this.contextBase = {
            Disabled: [false, true],
            Class: '',
            NgClass: {},
            Syntax: "<div> Hello world! </div>\n<div> How you doin'?!?! </div>",
            Language: ['xml', 'css', 'javascript', undefined],
            Wrap: [true, false],
            Trim: [true, false],
            Highlight: [true, false],
            LineNumbers: [true, false],
        };
        // Playground context
        this.context = Object.assign(Object.assign({}, this.contextBase), { Filter: '' });
        // Playground context
        this.contextWithPhrase = Object.assign(Object.assign({}, this.contextBase), { FilterPhrase: new _data__WEBPACK_IMPORTED_MODULE_1__.Phrase() });
    }
}
HighlightJsShowcaseComponent.ɵfac = function HighlightJsShowcaseComponent_Factory(t) { return new (t || HighlightJsShowcaseComponent)(); };
HighlightJsShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: HighlightJsShowcaseComponent, selectors: [["ng-component"]], decls: 12, vars: 6, consts: [["href", "https://highlightjs.org/", "target", "_blank"], [1, "mt-5", 3, "title", "modules", "context"]], template: function HighlightJsShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "Code HighlightJS Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\nHighlights language syntax using 3rd party ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "highlight.js");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, " library. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "iqui-playground", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\n    <iqui-highlightjs\n      [disabled]=\"    context.Disabled\"\n      [class]=\"       context.Class\"\n      [ngClass]=\"     context.NgClass\"\n      [syntax]=\"      context.Syntax\"\n      [languages]=\"   [context.Language]\"\n      [highlight]=\"   context.Highlight\"\n      [filter]=\"      context.Filter\"\n      [wrap]=\"        context.Wrap\"\n      [trim]=\"        context.Trim\"\n      [lineNumbers]=\" context.LineNumbers\">\n\n      <ng-container *iquiHighlightJsInjectedTop> HEADER </ng-container>\n      <ng-container *iquiHighlightJsInjectedBottom> FOOTER </ng-container>\n\n    </iqui-highlightjs>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "iqui-playground", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "\n    <iqui-highlightjs\n      [disabled]=\"    context.Disabled\"\n      [class]=\"       context.Class\"\n      [ngClass]=\"     context.NgClass\"\n      [syntax]=\"      context.Syntax\"\n      [languages]=\"   [context.Language]\"\n      [highlight]=\"   context.Highlight\"\n      [filter]=\"      context.FilterPhrase\"\n      [wrap]=\"        context.Wrap\"\n      [trim]=\"        context.Trim\"\n      [lineNumbers]=\" context.LineNumbers\">\n\n      <ng-container *iquiHighlightJsInjectedTop>\n        <iqui-phrase-input [(phrase)]=\"context.FilterPhrase\" [presets]=\"['/Aaa/', '/Bbb/i', '/Ccc/']\"></iqui-phrase-input>\n      </ng-container>\n      <ng-container *iquiHighlightJsInjectedBottom>\n        Filtering by: {{ (context.FilterPhrase).toString() }}\n      </ng-container>\n\n    </iqui-highlightjs>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", "Demo: Plays nice with <iqui-phrase-input />")("modules", ctx.modules)("context", ctx.contextWithPhrase);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_9__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_10__.TextareaDirective, ___WEBPACK_IMPORTED_MODULE_0__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_9__.PlaygroundTextareaDirective], styles: ["iqui-phrase-input a.selected {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwwQkFBQTtBQUFKIiwiZmlsZSI6InN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICBpcXVpLXBocmFzZS1pbnB1dCBhLnNlbGVjdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 7911:
/*!*************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/code/highlight-js/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "highlightJsRegisterLanguage": () => (/* binding */ highlightJsRegisterLanguage),
/* harmony export */   "HighlightJsTextareaDirective": () => (/* binding */ HighlightJsTextareaDirective),
/* harmony export */   "HighlightJsInjectTopDirective": () => (/* binding */ HighlightJsInjectTopDirective),
/* harmony export */   "HighlightJsInjectBottomDirective": () => (/* binding */ HighlightJsInjectBottomDirective),
/* harmony export */   "HighlightJsComponent": () => (/* binding */ HighlightJsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! he */ 584);
/* harmony import */ var he__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js */ 7722);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data */ 3813);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/directives/textarea/index */ 485);
// Wrapper around highlight.js (https://highlightjs.org/)
// TODO: Consider pushing highlighting into a web-worker
// ----------------------------------------------------------------------------
// Import dependencies



// Import data




function HighlightJsComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HighlightJsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HighlightJsComponent_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const injected_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", injected_r4);
} }
const _c0 = function (a0) { return [a0]; };
function HighlightJsComponent_pre_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "code", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx_r1.wrap ? "wrapped" : ""))("innerHTML", ctx_r1._highlightedSyntax, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function HighlightJsComponent_pre_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "code", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, ctx_r2.wrap ? "wrapped" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", true)("value", ctx_r2._highlightedSyntax);
} }
function HighlightJsComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HighlightJsComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HighlightJsComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const injected_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", injected_r6);
} }
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
class HighlightJsTextareaDirective {
}
HighlightJsTextareaDirective.ɵfac = function HighlightJsTextareaDirective_Factory(t) { return new (t || HighlightJsTextareaDirective)(); };
HighlightJsTextareaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: HighlightJsTextareaDirective, selectors: [["textarea"]] });
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
class HighlightJsInjectTopDirective {
}
HighlightJsInjectTopDirective.ɵfac = function HighlightJsInjectTopDirective_Factory(t) { return new (t || HighlightJsInjectTopDirective)(); };
HighlightJsInjectTopDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: HighlightJsInjectTopDirective, selectors: [["", "iquiHighlightJsInjectedTop", ""]] });
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
class HighlightJsInjectBottomDirective {
}
HighlightJsInjectBottomDirective.ɵfac = function HighlightJsInjectBottomDirective_Factory(t) { return new (t || HighlightJsInjectBottomDirective)(); };
HighlightJsInjectBottomDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: HighlightJsInjectBottomDirective, selectors: [["", "iquiHighlightJsInjectedBottom", ""]] });
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
class HighlightJsComponent {
    constructor(_cd) {
        this._cd = _cd;
        /**
         * If highlighting is disabled. If not, non-highlighted syntax will be shown
         */
        this.disabled = false;
        /**
         * Row filter (will only show rows matching given string or regexp or Phrase instance)
         */
        this.filter = new _data__WEBPACK_IMPORTED_MODULE_2__.Phrase();
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
        this.lineNumbers = true;
        // Rendered, highlighted syntax HTML
        this._highlightedSyntax = '';
    }
    /**
     * Static method allowing registration of additional language syntaxes
     * @param languageName Name by which the language will be referenced
     * @param language Language syntax definition (from "highlight.js/lib/languages/")
     */
    static registerLanguage(languageName, language) {
        highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].registerLanguage(languageName, language);
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    /**
     * If a simple textarea can be used to display syntax instead of a more complex method
     */
    get _canUseTextareaFallbackMethod() {
        return !this.highlight && !this.lineNumbers;
    }
    ngAfterContentInit() {
        // If no syntax attribute set, try extracting value from <textarea /> child
        if (!this.syntax) {
            this._ingestTextareaSyntax();
        }
        // Trigger highlighting render
        this._renderHighlightedSyntax();
        this._cd.detectChanges();
    }
    ngOnChanges() {
        // Trigger highlighting render
        this._renderHighlightedSyntax();
    }
    /**
     * Forces a refresh of the component and it's syntax
     */
    refresh() {
        // (Re)Ingest textarea syntax
        if (!this.syntax) {
            this._ingestTextareaSyntax();
        }
        // (Re)Trigger highlighting render
        this._renderHighlightedSyntax();
    }
    /**
     * Ingest syntax from textarea, if one is used
     */
    _ingestTextareaSyntax() {
        // Check if single <textarea /> child
        if (this._syntaxEl) {
            // Use textarea value as syntax
            this._syntaxElInnerHTML = this._syntaxEl.nativeElement.value;
        }
    }
    /**
     * (Re)Renders given syntax as HTML and displays it
     */
    _renderHighlightedSyntax() {
        // Set initial syntax from [syntax] attribute
        let syntax = this.syntax || this._syntaxElInnerHTML;
        if (!syntax) {
            return;
        }
        // Trim lines
        if (syntax && this.trim) {
            // Find shortest available start-trim
            const minStartTrim = syntax.split('\n').reduce((min, line) => {
                const match = line.match(/\S/), trimLength = match ? match.index : Number.MAX_SAFE_INTEGER;
                return trimLength < min ? trimLength : min;
            }, Number.MAX_SAFE_INTEGER);
            // Trim lines
            syntax = syntax
                .split('\n')
                .reduce((aggregate, line, i, arr) => {
                // Use remaining (after empty rows) array as response
                if (line.match(/\S/)) {
                    return arr.splice(i);
                }
            }, null)
                .reverse()
                .reduce((aggregate, line, i, arr) => {
                // Use remaining (after empty rows) array as response
                if (line.match(/\S/)) {
                    return arr.splice(i);
                }
            }, null)
                .reverse()
                .reduce((lines, line) => {
                lines.push(line.substr(minStartTrim));
                return lines;
            }, [])
                .join('\n');
        }
        // HighlightSyntax
        try {
            if (this.highlight) {
                syntax = !this.disabled ? highlight_js__WEBPACK_IMPORTED_MODULE_1__["default"].highlightAuto(syntax, this.languages).value : syntax;
            }
        }
        catch (err) {
            // tslint:disable-next-line: no-unused-expression
            err;
            return;
        }
        // Add line numbers
        const rawSyntaxLines = syntax.split('\n'), highlightedSyntaxLines = syntax.split('\n'), lineNumberPaddingLength = Math.ceil(Math.log10(highlightedSyntaxLines.length));
        let numberedSyntax = [];
        // Filter lines
        const hasStringFilter = typeof this.filter === 'string' && this.filter.trim(), hasRegExpFilter = this.filter instanceof RegExp, hasPhraseFilter = this.filter instanceof _data__WEBPACK_IMPORTED_MODULE_2__.Phrase && this.filter.value.trim();
        highlightedSyntaxLines.forEach((line, i) => {
            // Filter rows
            if (hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
                // Check if filter is regexp or treat as string
                if (hasStringFilter || (hasPhraseFilter && !this.filter.isRegExp)) {
                    try {
                        const filterValue = hasStringFilter ? this.filter : this.filter.value, filterCaseSensitive = hasStringFilter ? true : this.filter.isCaseSensitive, haystack = filterCaseSensitive ? rawSyntaxLines[i] : rawSyntaxLines[i].toLowerCase(), needle = filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase();
                        if (haystack.indexOf(needle) !== -1) {
                            numberedSyntax.push(this._renderLine(line, this.lineNumbers ? i + 1 : null, lineNumberPaddingLength));
                        }
                    }
                    catch (err) { }
                }
                else if (hasRegExpFilter || (hasPhraseFilter && this.filter.isRegExp)) {
                    try {
                        // tslint:disable-next-line: max-line-length
                        const filterValue = hasRegExpFilter
                            ? this.filter
                            : new RegExp(this.filter.value, this.filter.isCaseSensitive ? '' : 'i');
                        if (rawSyntaxLines[i].match(filterValue)) {
                            numberedSyntax.push(this._renderLine(line, this.lineNumbers ? i + 1 : null, lineNumberPaddingLength));
                        }
                    }
                    catch (err) { }
                }
            }
            // Show unfiltered rows
            else {
                numberedSyntax.push(this._renderLine(line, this.lineNumbers ? i + 1 : null, lineNumberPaddingLength));
            }
        });
        // Set syntax with added line numbers
        if (!this._canUseTextareaFallbackMethod) {
            // Set syntax
            this._highlightedSyntax = `<ul class="${this.lineNumbers ? `hljs-count-log-${lineNumberPaddingLength}` : ''}">${numberedSyntax.join('')}</ul>`;
        }
        else {
            // Set syntax
            this._highlightedSyntax = `${numberedSyntax.join('\n')}`;
        }
    }
    /**
     * (Re)Renders a line of already highlighted syntax as HTML with or without a line number
     * @param line A line of already highlighted syntax
     * @param lineNumber (Optional) Line number to render left of thr syntax line
     * @param lineNumberPaddingLength (Optional) Padding length target for line numbers
     */
    _renderLine(line, lineNumber = null, lineNumberPaddingLength = null) {
        // tslint:disable-next-line: max-line-length
        if (!this._canUseTextareaFallbackMethod) {
            const escapedLine = !this.highlight ? he__WEBPACK_IMPORTED_MODULE_0___default().encode(line, { useNamedReferences: true }) : line;
            return lineNumber !== null
                ? `<li><span class="hljs-line-num">${lineNumber}</span>${escapedLine || '&nbsp;'}</li>`
                : `<li>${escapedLine || '&nbsp;'}</li>`;
        }
        else {
            return lineNumber !== null ? `${lineNumber.toString().padEnd(lineNumberPaddingLength + 5, ' ')}${line}` : `${line}`;
        }
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as disabled, if disabled (.disabled)
            this.disabled ? 'disabled' : null,
            // Pass-through host class
            this.class || null,
            // If highlighting on
            !this._canUseTextareaFallbackMethod ? 'syntax-display-explicitly' : 'syntax-display-textarea',
        ].join(' ');
    }
}
HighlightJsComponent.ɵfac = function HighlightJsComponent_Factory(t) { return new (t || HighlightJsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef)); };
HighlightJsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HighlightJsComponent, selectors: [["iqui-highlightjs"]], contentQueries: function HighlightJsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, HighlightJsTextareaDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, HighlightJsInjectTopDirective, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, HighlightJsInjectBottomDirective, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._syntaxEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._injectedTop = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._injectedBottom = _t);
    } }, hostVars: 2, hostBindings: function HighlightJsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", syntax: "syntax", languages: "languages", filter: "filter", wrap: "wrap", trim: "trim", highlight: "highlight", lineNumbers: "lineNumbers" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 7, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [4, "ngTemplateOutlet"], [3, "ngClass", "innerHTML"], [3, "readonly", "value"]], template: function HighlightJsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HighlightJsComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HighlightJsComponent_pre_2_Template, 2, 4, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HighlightJsComponent_pre_3_Template, 5, 5, "pre", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HighlightJsComponent_ng_container_4_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.ngClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._injectedTop);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx._canUseTextareaFallbackMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._canUseTextareaFallbackMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._injectedBottom);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_3__.TextareaDirective, HighlightJsTextareaDirective], styles: ["[_nghost-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: unset;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code.wrapped[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n[_nghost-%COMP%]    > div[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul {\n  list-style: none;\n  margin-bottom: 0;\n  -webkit-padding-start: unset;\n          padding-inline-start: unset;\n}\n[_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li {\n  position: relative;\n}\n[_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > .hljs-line-num {\n  position: absolute;\n  display: inline-block;\n  text-align: left;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  color: gray;\n}\n[_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-0, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-1, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-2, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-3, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-4 {\n  padding-left: 40px;\n}\n[_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-0 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-1 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-2 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-3 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-4 > li > .hljs-line-num {\n  width: 40px;\n  left: -40px;\n}\n[_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-5, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-6, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-7, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-8 {\n  padding-left: 80px;\n}\n[_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-5 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-6 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-7 > li > .hljs-line-num, [_nghost-%COMP%]    > div.syntax-display-explicitly[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul.hljs-count-log-8 > li > .hljs-line-num {\n  width: 80px;\n  left: -80px;\n}\n[_nghost-%COMP%]    > div.syntax-display-textarea[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li {\n  position: static;\n  position: initial;\n}\n[_nghost-%COMP%]    > div.syntax-display-textarea[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > textarea {\n  display: block;\n  width: 100%;\n  height: auto;\n  padding: 0;\n  overflow-y: visible;\n  resize: none;\n  background-color: inherit;\n  color: inherit;\n}\n[_nghost-%COMP%]    > div.syntax-display-textarea[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > textarea, [_nghost-%COMP%]    > div.syntax-display-textarea[_ngcontent-%COMP%]    > pre[_ngcontent-%COMP%]    > code[_ngcontent-%COMP%]  > ul > li > textarea:focus {\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtBQUFKO0FBRUk7RUFDRSxrQkFBQTtBQUFOO0FBRVE7RUFDRSxxQkFBQTtBQUFWO0FBR1E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7VUFBQSwyQkFBQTtBQURWO0FBUU07RUFDRSxrQkFBQTtBQU5SO0FBT1E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7RUFDQSxXQUFBO0FBTFY7QUFVTTtFQUtFLGtCQUFBO0FBWlI7QUFhUTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBWFY7QUFjTTtFQUlFLGtCQUFBO0FBZlI7QUFnQlE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQWRWO0FBb0JJO0VBQ0UsZ0JBQUE7RUFBQSxpQkFBQTtBQWxCTjtBQW1CTTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFqQlI7QUFtQlE7RUFFRSxZQUFBO0VBQ0EsYUFBQTtBQWxCViIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAmID4gZGl2IHtcbiAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcblxuICAgICYgPiBwcmUge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgJiA+IGNvZGUge1xuICAgICAgICAmLndyYXBwZWQge1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6Om5nLWRlZXAgPiB1bCB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhpZ2hsaWdodGVkXG4gICAgJi5zeW50YXgtZGlzcGxheS1leHBsaWNpdGx5ID4gcHJlID4gY29kZTo6bmctZGVlcCA+IHVsIHtcbiAgICAgICYgPiBsaSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgJiA+IC5obGpzLWxpbmUtbnVtIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTnVtYmVycyBjb2x1bW4gd2lkdGggZGVwZW5kZW50IG9uIGxpbmUgY291bnRcbiAgICAgICYuaGxqcy1jb3VudC1sb2ctMCxcbiAgICAgICYuaGxqcy1jb3VudC1sb2ctMSxcbiAgICAgICYuaGxqcy1jb3VudC1sb2ctMixcbiAgICAgICYuaGxqcy1jb3VudC1sb2ctMyxcbiAgICAgICYuaGxqcy1jb3VudC1sb2ctNCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgICAgJiA+IGxpID4gLmhsanMtbGluZS1udW0ge1xuICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgIGxlZnQ6IC00MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAmLmhsanMtY291bnQtbG9nLTUsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTYsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTcsXG4gICAgICAmLmhsanMtY291bnQtbG9nLTgge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gICAgICAgICYgPiBsaSA+IC5obGpzLWxpbmUtbnVtIHtcbiAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICBsZWZ0OiAtODBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vdCBIaWdobGlnaHRlZFxuICAgICYuc3ludGF4LWRpc3BsYXktdGV4dGFyZWEgPiBwcmUgPiBjb2RlOjpuZy1kZWVwID4gdWwgPiBsaSB7XG4gICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICAgICYgPiB0ZXh0YXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuXG4gICAgICAgICYsXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 800:
/*!************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/code/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HighlightJsComponent": () => (/* reexport safe */ _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsComponent),
/* harmony export */   "HighlightJsTextareaDirective": () => (/* reexport safe */ _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsTextareaDirective),
/* harmony export */   "HighlightJsInjectTopDirective": () => (/* reexport safe */ _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsInjectTopDirective),
/* harmony export */   "HighlightJsInjectBottomDirective": () => (/* reexport safe */ _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsInjectBottomDirective),
/* harmony export */   "highlightJsRegisterLanguage": () => (/* reexport safe */ _highlight_js__WEBPACK_IMPORTED_MODULE_2__.highlightJsRegisterLanguage),
/* harmony export */   "CodeModule": () => (/* binding */ CodeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../basics */ 2986);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ 5566);
/* harmony import */ var _highlight_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./highlight-js */ 7911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules


// Import components and (re)export components



/**
 * IQ UI NGX Elements' code/syntax utilities module
 * Implements code/syntax utilities
 */
class CodeModule {
}
CodeModule.ɵfac = function CodeModule_Factory(t) { return new (t || CodeModule)(); };
CodeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CodeModule });
CodeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _basics__WEBPACK_IMPORTED_MODULE_0__.BasicsModule, _form__WEBPACK_IMPORTED_MODULE_1__.FormModule], 
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // Export dependency modules
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _basics__WEBPACK_IMPORTED_MODULE_0__.BasicsModule,
        _form__WEBPACK_IMPORTED_MODULE_1__.FormModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CodeModule, { declarations: [_highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsComponent, _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsTextareaDirective, _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsInjectTopDirective, _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsInjectBottomDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _basics__WEBPACK_IMPORTED_MODULE_0__.BasicsModule, _form__WEBPACK_IMPORTED_MODULE_1__.FormModule], exports: [
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // Export dependency modules
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _basics__WEBPACK_IMPORTED_MODULE_0__.BasicsModule,
        _form__WEBPACK_IMPORTED_MODULE_1__.FormModule,
        // Export child components
        _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsComponent,
        _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsTextareaDirective,
        _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsInjectTopDirective,
        _highlight_js__WEBPACK_IMPORTED_MODULE_2__.HighlightJsInjectBottomDirective] }); })();


/***/ }),

/***/ 9754:
/*!****************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/_showcase.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormShowcaseComponent": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_3__.FormShowcaseComponent),
/* harmony export */   "InputShowcaseComponent": () => (/* reexport safe */ _components_input_showcase__WEBPACK_IMPORTED_MODULE_4__.InputShowcaseComponent),
/* harmony export */   "CheckboxShowcaseComponent": () => (/* reexport safe */ _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_5__.CheckboxShowcaseComponent),
/* harmony export */   "RadioShowcaseComponent": () => (/* reexport safe */ _components_radio_showcase__WEBPACK_IMPORTED_MODULE_6__.RadioShowcaseComponent),
/* harmony export */   "SelectShowcaseComponent": () => (/* reexport safe */ _components_select_showcase__WEBPACK_IMPORTED_MODULE_7__.SelectShowcaseComponent),
/* harmony export */   "FormShowcaseModule": () => (/* binding */ FormShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form */ 5566);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code */ 800);
/* harmony import */ var _showcasing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../showcasing */ 1834);
/* harmony import */ var _components_form_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form/_showcase */ 1445);
/* harmony import */ var _components_input_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/input/_showcase */ 9929);
/* harmony import */ var _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checkbox/_showcase */ 3455);
/* harmony import */ var _components_radio_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/radio/_showcase */ 1983);
/* harmony import */ var _components_select_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/select/_showcase */ 3838);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules



// Import showcase components











// IQ UI NGX Elements' Basic elements module
class FormShowcaseModule {
}
FormShowcaseModule.ɵfac = function FormShowcaseModule_Factory(t) { return new (t || FormShowcaseModule)(); };
FormShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FormShowcaseModule });
FormShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _form__WEBPACK_IMPORTED_MODULE_0__.FormModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule], 
        // Export dependency modules
        _form__WEBPACK_IMPORTED_MODULE_0__.FormModule,
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FormShowcaseModule, { declarations: [_components_form_showcase__WEBPACK_IMPORTED_MODULE_3__.FormShowcaseComponent, _components_input_showcase__WEBPACK_IMPORTED_MODULE_4__.InputShowcaseComponent, _components_checkbox_showcase__WEBPACK_IMPORTED_MODULE_5__.CheckboxShowcaseComponent, _components_radio_showcase__WEBPACK_IMPORTED_MODULE_6__.RadioShowcaseComponent, _components_select_showcase__WEBPACK_IMPORTED_MODULE_7__.SelectShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _form__WEBPACK_IMPORTED_MODULE_0__.FormModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule], exports: [
        // Export dependency modules
        _form__WEBPACK_IMPORTED_MODULE_0__.FormModule,
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_2__.ShowcasingModule,
        // Export child components
        _components_form_showcase__WEBPACK_IMPORTED_MODULE_3__.FormShowcaseComponent] }); })();


/***/ }),

/***/ 3455:
/*!******************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/checkbox/_showcase/index.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxShowcaseComponent": () => (/* binding */ CheckboxShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ 5566);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../showcasing/playground/index */ 426);
/* harmony import */ var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../code/highlight-js/index */ 7911);

// Import modules







// Showcase component
class CheckboxShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_1__.FormModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule];
        // Playground context
        this.context = {
            Value: false,
            Label: 'Label text',
            Disabled: [false, true],
            Class: '',
            NgClass: {},
        };
        // Playground form context
        this.contextForm = {
            FormDisabled: [undefined, true, false],
            FormSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize)],
            FormValid: [undefined, true, false],
        };
    }
}
CheckboxShowcaseComponent.ɵfac = function CheckboxShowcaseComponent_Factory(t) { return new (t || CheckboxShowcaseComponent)(); };
CheckboxShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: CheckboxShowcaseComponent, selectors: [["ng-component"]], decls: 9, vars: 6, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function CheckboxShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Basic Checkbox Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\nDisplays a checkbox element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    <iqui-checkbox\n      [(value)]=\" context.Value\"\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\">\n\n      {{ context.Label }}\n\n    </iqui-checkbox>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-checkbox> Label text </iqui-checkbox>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 5009:
/*!********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/checkbox/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../directives */ 3669);
/* harmony import */ var _directives_group_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/group/index */ 7572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_checkbox_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/checkbox/index */ 951);
/* harmony import */ var _directives_label_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/label/index */ 3311);
// Checkbox component
// ----------------------------------------------------------------------------
// Import dependencies







const _c0 = ["*"];
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
class CheckboxComponent extends _directives__WEBPACK_IMPORTED_MODULE_0__.UsesFormElementDirectives {
    constructor() {
        super(...arguments);
        /**
         * [disabled] binding
         */
        this.disabled = false;
        /**
         * [(value)] two-way binding
         */
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    /**
     * Updates value when change detected
     * @param e Event descriptor
     */
    _updateValue(e) {
        this.valueChange.emit((this.value = e.target.checked));
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as checkbox container (.form-check)
            'form-group',
            'form-check',
            // Mark as disabled, if disabled (.disabled)
            this.disabled ? 'disabled' : null,
            // Pass-through host class
            this.class || null,
        ].join(' ');
    }
}
CheckboxComponent.ɵfac = /*@__PURE__*/ function () { let ɵCheckboxComponent_BaseFactory; return function CheckboxComponent_Factory(t) { return (ɵCheckboxComponent_BaseFactory || (ɵCheckboxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](CheckboxComponent)))(t || CheckboxComponent); }; }();
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["iqui-checkbox"]], hostVars: 2, hostBindings: function CheckboxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", value: "value" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 4, vars: 6, consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], ["type", "checkbox", 1, "form-check-input", 3, "checked", "change"], [1, "form-check-label"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CheckboxComponent_Template_input_change_1_listener($event) { return ctx._updateValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.disabled || null);
    } }, directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _directives_checkbox_index__WEBPACK_IMPORTED_MODULE_2__.CheckboxDirective, _directives_label_index__WEBPACK_IMPORTED_MODULE_3__.LabelDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 1445:
/*!**************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/form/_showcase/index.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormShowcaseComponent": () => (/* binding */ FormShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ 5566);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../basics */ 2986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../showcasing/playground/index */ 426);
/* harmony import */ var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../code/highlight-js/index */ 7911);

// Import modules






// Showcase component
class FormShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_1__.FormModule, _basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule];
        // Playground context
        this.context = {
            // If [iquiForm] directive is enabled
            Enabled: true,
            // Form
            FormDisabled: [undefined, true, false],
            FormSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize)],
            FormValid: [undefined, true, false],
            // Form Group
            GroupDisabled: [undefined, true, false],
            GroupSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize)],
            GroupValid: [undefined, true, false],
        };
    }
}
FormShowcaseComponent.ɵfac = function FormShowcaseComponent_Factory(t) { return new (t || FormShowcaseComponent)(); };
FormShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FormShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function FormShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Form Input Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\nDisplays a button-styled button or anchor HTML element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n    <!-- Form[iquiForm] root container, defining a root scope for [disabled, size, valid] -->\n    <form\n      [iquiForm]=\"context.Enabled\"\n      [disabled]=\"context.FormDisabled\"\n      [size] =\"   context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <!-- Components inside root scope -->\n      <label> Root scoped components inheriting Form's [disabled], [size], [valid] values </label>\n      <div class=\"card p-3\">\n        <!-- No need to use class=\"from-control\", it is added automatically -->\n        <input placeholder=\"Inheriting Form's values\" />\n        <div class=\"form-group\">\n          <!-- No need to use class=\"btn\", it is added automatically -->\n          <button class=\"btn-primary\"> Primary </button>\n          <button class=\"btn-secondary\"> Secondary </button>\n          <button class=\"btn-warning\"> Warning! </button>\n        </div>\n        \n      </div>\n\n      <!-- .form-group container, defining a local scope for [disabled, size, valid] -->\n      <div\n        class=\"mt-3 p-3 form-group\"\n        [disabled]=\" context.GroupDisabled\"\n        [size]=\"     context.GroupSize\"\n        [valid]=\"    context.GroupValid\">\n\n        <!-- Components inside local scope -->\n        <label> Local scoped components inheriting Form Group's [disabled], [size], [valid] values </label>\n        <div class=\"card p-3\">\n\n          <!-- Inputs are bound to labels automatically-->\n          <div class=\"form-group\">\n            <label> Inputs are bound to labels automatically </label>\n            <div class=\"form-group\">\n              <label> Text </label>\n              <input type=\"text\"    placeholder=\"...\" />\n            </div>\n            <div class=\"form-group\">\n              <label> Number </label>\n              <input type=\"number\"  placeholder=\"...\" />\n            </div>\n            <div class=\"form-group\">\n              <label> Date </label>\n              <input type=\"date\"    placeholder=\"...\" />\n            </div>\n          </div>\n          <hr />\n\n          <!-- Selects are bound to labels automatically -->\n          <div class=\"form-group\">\n            <label> Selects are bound to labels automatically </label>\n            <select>\n              <option value=\"A\">Option A</option>\n              <option value=\"B\">Option B</option>\n              <option value=\"C\">Option C</option>\n            </select>\n          </div>\n          <hr />\n\n          <!-- Checkboxes are bound to labels automatically -->\n          <div class=\"form-group\">\n            <label> Checkboxes are bound to labels automatically </label>\n            <div class=\"form-check\">\n              <input class=\"form-check-input\" type=\"checkbox\" />\n              <label class=\"form-check-label\"> Checkbox label </label>\n            </div>\n          </div>\n          <hr />\n\n          <!-- Radios are grouped and bound to labels automatically -->\n          <div class=\"form-group\">\n            <label> Radios are bound to labels automatically </label>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" />\n              <label class=\"custom-control-label\" value=\"A\"> Radio label A </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" />\n              <label class=\"custom-control-label\" value=\"B\"> Radio label B </label>\n            </div>\n            <div class=\"custom-control custom-radio\">\n              <input type=\"radio\" class=\"custom-control-input\" />\n              <label class=\"custom-control-label\" value=\"C\"> Radio label C </label>\n            </div>\n          </div>\n          <hr />\n\n          <!-- Buttons -->\n          <div class=\"form-group\">\n            <button class=\"btn-primary\"> Primary </button>\n            <button class=\"btn-secondary\"> Secondary </button>\n            <button class=\"btn-warning\"> Warning! </button>\n          </div>\n\n        </div>\n  \n      </div>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundComponent, _directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 9929:
/*!***************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/input/_showcase/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputShowcaseComponent": () => (/* binding */ InputShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 6684);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ */ 5566);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../code/highlight-js/index */ 7911);
/* harmony import */ var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/textarea/index */ 485);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../showcasing/playground/index */ 426);


// Import modules







const _c0 = function () { return ["scss"]; };
// Showcase component
class InputShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [_basics__WEBPACK_IMPORTED_MODULE_3__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_2__.FormModule, _code__WEBPACK_IMPORTED_MODULE_4__.CodeModule];
        // Playground context
        this.context = {
            Value: '',
            Label: 'Label text',
            Disabled: [false, true],
            Class: '',
            NgClass: {},
            Type: [undefined, ...Object.values(___WEBPACK_IMPORTED_MODULE_0__.InputType)],
            Resize: true,
            ResizeMin: 0,
            ResizeMax: 5,
        };
        // Playground form context
        this.contextForm = {
            FormDisabled: [undefined, true, false],
            FormSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_1__.BootstrapSize)],
            FormValid: [undefined, true, false],
        };
    }
}
InputShowcaseComponent.ɵfac = function InputShowcaseComponent_Factory(t) { return new (t || InputShowcaseComponent)(); };
InputShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: InputShowcaseComponent, selectors: [["ng-component"]], decls: 16, vars: 8, consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]], template: function InputShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Basic Input Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\nDisplays an input element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "iqui-highlightjs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "        // Resizable textarea width adjustment (needs to subtract left and right padding and border from 100% width)\n        textarea.iqui-resizable-textarea {\n          width: calc(100% - 24px - 2px);\n        }\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "iqui-playground", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "\n    <iqui-input\n      [(value)]=\"  context.Value\"\n      [disabled]=\" context.Disabled\"\n      [class]=\"    context.Class\"\n      [ngClass]=\"  context.NgClass\"\n      [type]=\"     context.Type\"\n      [resize]=\"   context.Resize\"\n      [resizeMin]=\"context.ResizeMin\"\n      [resizeMax]=\"context.ResizeMax\">\n\n      {{ context.Label }}\n\n    </iqui-input>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "iqui-playground", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-input> Label text </iqui-input>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
    } }, directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsComponent, _directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_7__.PlaygroundTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_7__.PlaygroundComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 6684:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/input/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputType": () => (/* binding */ InputType),
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../types */ 4256);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives */ 3669);
/* harmony import */ var _directives_group_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/group/index */ 7572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_label_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/label/index */ 3311);
/* harmony import */ var _directives_input_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/input/index */ 8329);
/* harmony import */ var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/textarea/index */ 485);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
// Input component
// ----------------------------------------------------------------------------
// Import dependencies










const _c0 = ["input"];
function InputComponent_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function InputComponent_input_3_Template_input_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r3._updateValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r0.disabled || null);
} }
const _c1 = function (a0) { return [a0]; };
function InputComponent_textarea_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function InputComponent_textarea_4_Template_textarea_input_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r5._updateValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](6, _c1, ctx_r1.resize ? "iqui-resizable-textarea" : ""))("value", ctx_r1.value)("cdkTextareaAutosize", ctx_r1.resize)("cdkAutosizeMinRows", ctx_r1.resizeMin)("cdkAutosizeMaxRows", ctx_r1.resizeMax);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("disabled", ctx_r1.disabled || null);
} }
const _c2 = ["*"];
// Define and export enums and types
/*
 * Button's bootstrap theme colors type
 */
// tslint:disable-next-line: variable-name
const InputType = Object.assign(Object.assign({}, _types__WEBPACK_IMPORTED_MODULE_0__.HtmlInputType), { TEXTAREA: 'textarea' });
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
class InputComponent extends _directives__WEBPACK_IMPORTED_MODULE_1__.UsesFormElementDirectives {
    constructor() {
        super(...arguments);
        /**
         * [disabled] binding
         */
        this.disabled = false;
        /**
         * [(value)] two-way binding
         */
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        /**
         * If input should resize as rows are added
         */
        this.resize = false;
        /**
         * Minimum number of lines to resize to
         */
        this.resizeMin = 1;
        /**
         * Maximum number of lines to resize to
         */
        this.resizeMax = 5;
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    ngOnInit() {
        this._updateType();
    }
    ngOnChanges(changes) {
        if (changes.type) {
            this._updateType();
        }
    }
    /**
     * Updates input type
     */
    _updateType() {
        if (this._input) {
            this._input.nativeElement.setAttribute('type', this.type);
        }
    }
    /**
     * Updates value when change detected
     * @param e Event descriptor
     */
    _updateValue(e) {
        this.valueChange.emit((this.value = e.target.value));
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as input container (.form-group)
            'form-group',
            // Mark as disabled, if disabled (.disabled)
            this.disabled ? 'disabled' : null,
            // Pass-through host class
            this.class || null,
        ].join(' ');
    }
}
InputComponent.ɵfac = /*@__PURE__*/ function () { let ɵInputComponent_BaseFactory; return function InputComponent_Factory(t) { return (ɵInputComponent_BaseFactory || (ɵInputComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetInheritedFactory"](InputComponent)))(t || InputComponent); }; }();
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["iqui-input"]], viewQuery: function InputComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx._input = _t.first);
    } }, hostVars: 2, hostBindings: function InputComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", type: "type", value: "value", resize: "resize", resizeMin: "resizeMin", resizeMax: "resizeMax" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c2, decls: 5, vars: 6, consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], ["type", "text", "class", "form-control", 3, "value", "input", 4, "ngIf"], [3, "ngClass", "value", "cdkTextareaAutosize", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "input", 4, "ngIf"], ["type", "text", 1, "form-control", 3, "value", "input"], ["input", ""], [3, "ngClass", "value", "cdkTextareaAutosize", "cdkAutosizeMinRows", "cdkAutosizeMaxRows", "input"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, InputComponent_input_3_Template, 2, 2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, InputComponent_textarea_4_Template, 1, 8, "textarea", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type !== "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.type === "textarea");
    } }, directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _directives_label_index__WEBPACK_IMPORTED_MODULE_3__.LabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_input_index__WEBPACK_IMPORTED_MODULE_4__.InputDirective, _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__.CdkTextareaAutosize], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 4898:
/*!******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/option/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OptionDirective": () => (/* binding */ OptionDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Option, configures an option
 */
class OptionDirective {
}
OptionDirective.ɵfac = function OptionDirective_Factory(t) { return new (t || OptionDirective)(); };
OptionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OptionDirective, selectors: [["iqui-option"]], inputs: { value: "value", label: "label" } });


/***/ }),

/***/ 1983:
/*!***************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/radio/_showcase/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioShowcaseComponent": () => (/* binding */ RadioShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ 5566);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../showcasing/playground/index */ 426);
/* harmony import */ var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../code/highlight-js/index */ 7911);

// Import modules







// Showcase component
class RadioShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_1__.FormModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule];
        // Playground context
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
            NgClass: {},
        };
        // Playground form context
        this.contextForm = {
            FormDisabled: [undefined, true, false],
            FormSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize)],
            FormValid: [undefined, true, false],
        };
    }
}
RadioShowcaseComponent.ɵfac = function RadioShowcaseComponent_Factory(t) { return new (t || RadioShowcaseComponent)(); };
RadioShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: RadioShowcaseComponent, selectors: [["ng-component"]], decls: 9, vars: 6, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function RadioShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Basic Radio Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\nDisplays a radio element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    <iqui-radio\n      [(value)]=\" context.Value\"\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\">\n\n      {{ context.Label }}\n\n      <iqui-option [value]=\"context.OptionAValue\" [label]=\"context.OptionALabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionBValue\" [label]=\"context.OptionBLabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionCValue\" [label]=\"context.OptionCLabel\"></iqui-option>\n\n    </iqui-radio>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-radio>\n\n        Label text\n\n        <iqui-option [value]=\"'A'\" [label]=\"'Option A'\"></iqui-option>\n        <iqui-option [value]=\"'B'\" [label]=\"'Option B'\"></iqui-option>\n        <iqui-option [value]=\"'C'\" [label]=\"'Option C'\"></iqui-option>\n\n      </iqui-radio>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 3309:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/radio/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioComponent": () => (/* binding */ RadioComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option */ 4898);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives */ 3669);
/* harmony import */ var _directives_group_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/group/index */ 7572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_label_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/label/index */ 3311);
/* harmony import */ var _directives_radio_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/radio/index */ 1629);
// Radio component
// ----------------------------------------------------------------------------
// Import dependencies








function RadioComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RadioComponent_div_3_Template_input_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3); const option_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r2._updateValue(option_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx_r0.value === option_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx_r0.disabled || null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", option_r1.label || option_r1.value, " ");
} }
const _c0 = ["*"];
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
class RadioComponent extends _directives__WEBPACK_IMPORTED_MODULE_1__.UsesFormElementDirectives {
    constructor() {
        super(...arguments);
        /**
         * [disabled] binding
         */
        this.disabled = false;
        /**
         * [(value)] two-way binding
         */
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    /**
     * Updates value when change detected
     * @param value Updated value
     */
    _updateValue(value) {
        this.valueChange.emit((this.value = value));
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as radio container (.form-group)
            'form-group',
            // Mark as disabled, if disabled (.disabled)
            this.disabled ? 'disabled' : null,
            // Pass-through host class
            this.class || null,
        ].join(' ');
    }
}
RadioComponent.ɵfac = /*@__PURE__*/ function () { let ɵRadioComponent_BaseFactory; return function RadioComponent_Factory(t) { return (ɵRadioComponent_BaseFactory || (ɵRadioComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](RadioComponent)))(t || RadioComponent); }; }();
RadioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RadioComponent, selectors: [["iqui-radio"]], contentQueries: function RadioComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _option__WEBPACK_IMPORTED_MODULE_0__.OptionDirective, 4, _option__WEBPACK_IMPORTED_MODULE_0__.OptionDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._optionEls = _t);
    } }, hostVars: 2, hostBindings: function RadioComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", value: "value" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], ["class", "custom-control custom-radio", 4, "ngFor", "ngForOf"], [1, "custom-control", "custom-radio"], ["type", "radio", 1, "custom-control-input", 3, "checked", "change"], [1, "custom-control-label"]], template: function RadioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, RadioComponent_div_3_Template, 4, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._optionEls);
    } }, directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _directives_label_index__WEBPACK_IMPORTED_MODULE_3__.LabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _directives_radio_index__WEBPACK_IMPORTED_MODULE_4__.RadioDirective], styles: ["[_nghost-%COMP%]     iqui-option {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUoiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIGlxdWktb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 3838:
/*!****************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/select/_showcase/index.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectShowcaseComponent": () => (/* binding */ SelectShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../types */ 4256);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ */ 5566);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../showcasing/playground/index */ 426);
/* harmony import */ var _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../code/highlight-js/index */ 7911);

// Import modules







// Showcase component
class SelectShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_1__.FormModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule];
        // Playground context
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
            NgClass: {},
        };
        // Playground form context
        this.contextForm = {
            FormDisabled: [undefined, true, false],
            FormSize: [undefined, ...Object.values(_types__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize)],
            FormValid: [undefined, true, false],
        };
    }
}
SelectShowcaseComponent.ɵfac = function SelectShowcaseComponent_Factory(t) { return new (t || SelectShowcaseComponent)(); };
SelectShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: SelectShowcaseComponent, selectors: [["ng-component"]], decls: 9, vars: 6, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function SelectShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Basic Select Element");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\nDisplays a select element. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    <iqui-select\n      [(value)]=\" context.Value\"\n      [disabled]=\"context.Disabled\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\">\n\n      {{ context.Label }}\n\n      <iqui-option [value]=\"context.OptionAValue\" [label]=\"context.OptionALabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionBValue\" [label]=\"context.OptionBLabel\"></iqui-option>\n      <iqui-option [value]=\"context.OptionCValue\" [label]=\"context.OptionCLabel\"></iqui-option>\n\n    </iqui-select>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\n    <form\n      iquiForm\n      [disabled]=\"context.FormDisabled\"\n      [size]=\"    context.FormSize\"\n      [valid]=\"   context.FormValid\">\n\n      <iqui-select>\n\n        Label text\n\n        <iqui-option [value]=\"'A'\" [label]=\"'Option A'\"></iqui-option>\n        <iqui-option [value]=\"'B'\" [label]=\"'Option B'\"></iqui-option>\n        <iqui-option [value]=\"'C'\" [label]=\"'Option C'\"></iqui-option>\n\n      </iqui-select>\n\n    </form>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo: Standalone")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo: Plays nice with <form [iquiForm] />")("modules", ctx.modules)("context", ctx.contextForm);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 3112:
/*!******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/components/select/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectComponent": () => (/* binding */ SelectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _option__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../option */ 4898);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives */ 3669);
/* harmony import */ var _directives_group_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/group/index */ 7572);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _directives_label_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/label/index */ 3311);
/* harmony import */ var _directives_select_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/select/index */ 4164);
// Select component
// ----------------------------------------------------------------------------
// Import dependencies








function SelectComponent_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r2)("selected", i_r2 === ctx_r0._findValue(ctx_r0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r1.label || option_r1.value);
} }
const _c0 = ["*"];
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
class SelectComponent extends _directives__WEBPACK_IMPORTED_MODULE_1__.UsesFormElementDirectives {
    constructor() {
        super(...arguments);
        /**
         * [disabled] binding
         */
        this.disabled = false;
        /**
         * [(value)] two-way binding
         */
        this.value = null;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    }
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    /**
     * Finds index of option containing a given value
     * @param value Value to search for
     * @returns Index of option of same value
     */
    _findValue(value) {
        return [...this._optionEls].findIndex(option => option.value === value);
    }
    /**
     * Updates value when change detected
     * @param e Event descriptor
     */
    _updateValue(e) {
        this.valueChange.emit((this.value = [...this._optionEls][e.target.value].value));
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as radio container (.form-group)
            'form-group',
            // Mark as disabled, if disabled (.disabled)
            this.disabled ? 'disabled' : null,
            // Pass-through host class
            this.class || null,
        ].join(' ');
    }
}
SelectComponent.ɵfac = /*@__PURE__*/ function () { let ɵSelectComponent_BaseFactory; return function SelectComponent_Factory(t) { return (ɵSelectComponent_BaseFactory || (ɵSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetInheritedFactory"](SelectComponent)))(t || SelectComponent); }; }();
SelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["iqui-select"]], contentQueries: function SelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵcontentQuery"](dirIndex, _option__WEBPACK_IMPORTED_MODULE_0__.OptionDirective, 4, _option__WEBPACK_IMPORTED_MODULE_0__.OptionDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._optionEls = _t);
    } }, hostVars: 2, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { disabled: "disabled", ngClass: "ngClass", class: "class", value: "value" }, outputs: { valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c0, decls: 5, vars: 7, consts: [["iquiForm", "", "iquiFormGroup", "", 3, "iquiFormParent", "ngClass"], [1, "form-select", 3, "value", "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function SelectComponent_Template_select_change_3_listener($event) { return ctx._updateValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SelectComponent_option_4_Template, 2, 3, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("iquiFormParent", ctx._iquiFormParent)("ngClass", ctx.ngClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx._findValue(ctx.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx._optionEls);
    } }, directives: [_directives_group_index__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _directives_label_index__WEBPACK_IMPORTED_MODULE_3__.LabelDirective, _directives_select_index__WEBPACK_IMPORTED_MODULE_4__.SelectDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: ["[_nghost-%COMP%]     iqui-option {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUoiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgOjpuZy1kZWVwIGlxdWktb3B0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 3053:
/*!******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/button/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDirective": () => (/* binding */ ButtonDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var ButtonDirective_1;



/**
 * Button directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <button iqui />
 *
 */
let ButtonDirective = ButtonDirective_1 = class ButtonDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
ButtonDirective.ɵfac = /*@__PURE__*/ function () { let ɵButtonDirective_BaseFactory; return function ButtonDirective_Factory(t) { return (ɵButtonDirective_BaseFactory || (ɵButtonDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](ButtonDirective)))(t || ButtonDirective); }; }();
ButtonDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ButtonDirective, selectors: [["button"], ["input", "type", "button"], ["input", "type", "submit"], ["input", "type", "reset"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: ButtonDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
ButtonDirective = ButtonDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ className: 'btn', bindDisabled: true, bindSize: true })
], ButtonDirective);



/***/ }),

/***/ 951:
/*!********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/checkbox/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxDirective": () => (/* binding */ CheckboxDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var CheckboxDirective_1;



/**
 * Checkbox directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <input iqui type="checkbox />
 *
 */
let CheckboxDirective = CheckboxDirective_1 = class CheckboxDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
CheckboxDirective.ɵfac = /*@__PURE__*/ function () { let ɵCheckboxDirective_BaseFactory; return function CheckboxDirective_Factory(t) { return (ɵCheckboxDirective_BaseFactory || (ɵCheckboxDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](CheckboxDirective)))(t || CheckboxDirective); }; }();
CheckboxDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CheckboxDirective, selectors: [["input", "type", "checkbox"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: CheckboxDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
CheckboxDirective = CheckboxDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ idAttributeName: 'id', bindDisabled: true, bindValid: true })
], CheckboxDirective);



/***/ }),

/***/ 5681:
/*!****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/form/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDirective": () => (/* binding */ FormDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var FormDirective_1;



/**
 * Form directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <form iqui></form>
 *
 */
let FormDirective = FormDirective_1 = class FormDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
    ngOnInit() {
        super.ngOnInit();
        // Intercept and block submission
        this._el.nativeElement.addEventListener('submit', this.onSubmit);
    }
    /**
     * Form submit event handler
     * @param e Event description
     */
    onSubmit(e) {
        e.preventDefault = true;
        return (e.returnValue = false);
    }
};
FormDirective.ɵfac = /*@__PURE__*/ function () { let ɵFormDirective_BaseFactory; return function FormDirective_Factory(t) { return (ɵFormDirective_BaseFactory || (ɵFormDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormDirective)))(t || FormDirective); }; }();
FormDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FormDirective, selectors: [["form", "iquiForm", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: FormDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
FormDirective = FormDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ isolateId: true })
], FormDirective);



/***/ }),

/***/ 7572:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/group/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormGroupDirective": () => (/* binding */ FormGroupDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var FormGroupDirective_1;



/**
 * Form container directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <div iquiFormIsolateId></div>
 *
 */
let FormGroupDirective = FormGroupDirective_1 = class FormGroupDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
FormGroupDirective.ɵfac = /*@__PURE__*/ function () { let ɵFormGroupDirective_BaseFactory; return function FormGroupDirective_Factory(t) { return (ɵFormGroupDirective_BaseFactory || (ɵFormGroupDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormGroupDirective)))(t || FormGroupDirective); }; }();
FormGroupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FormGroupDirective, selectors: [["", "iquiFormGroup", ""], ["", 8, "form-row"], ["", 8, "form-group"], ["", 8, "form-check"], ["", 8, "custom-control"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: FormGroupDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
FormGroupDirective = FormGroupDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ isolateId: true })
], FormGroupDirective);



/***/ }),

/***/ 3669:
/*!***********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsesFormElementDirectives": () => (/* binding */ UsesFormElementDirectives),
/* harmony export */   "FormElement": () => (/* binding */ FormElement),
/* harmony export */   "FormElementDirective": () => (/* binding */ FormElementDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types */ 4256);
var FormElementDirective_1;




/**
 * Defines component as using form directives internally inside its template. Will expose [iquiFormParent] attribute
 * through which the implementing component can pass explicit reference to outside scope parent FormElementDirectiveFormElementDirective
 */
class UsesFormElementDirectives {
    constructor(
    // (Optional) Injected parent directive element
    _formParent) {
        this._formParent = _formParent;
    }
    /**
     * Gets reference to explicitly passed or injected reference to outside scope parent FormElementDirectiveFormElementDirective
     */
    get _iquiFormParent() {
        return this.iquiFormParent || this._formParent;
    }
}
UsesFormElementDirectives.ɵfac = function UsesFormElementDirectives_Factory(t) { return new (t || UsesFormElementDirectives)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FormElementDirective, 13)); };
UsesFormElementDirectives.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UsesFormElementDirectives, inputs: { iquiFormParent: "iquiFormParent" } });
/**
 * Form element decorator, registers a directive/component as interactive with iquiForm directive
 * @param isolateId If true, will give element and its children their own ID scope
 * @param className Base class og the element, applied if not present and used to generate additional styling subs-classes
 * @param idAttributeName Name if attribute to bind ID value to (commonly used for "for"/"id" association)
 * @param bindDisabled If true, will apply disabled status set to the directive/component or one of its parents
 * @param bindSize  If true, will apply size value set to the directive/component or one of its parents
 * @param bindValid If true, will apply validation status set to the directive/component or one of its parents
 */
function FormElement({ isolateId = false, className = null, idAttributeName = null, bindDisabled = false, bindSize = false, bindValid = false, }) {
    // tslint:disable-next-line: only-arrow-functions
    return function (directiveClass) {
        directiveClass.__formElementAnnotation = {
            isolateId,
            className,
            idAttributeName,
            bindDisabled,
            bindSize,
            bindValid,
        };
    };
}
/**
 * Extendable Form container class
 */
let FormElementDirective = FormElementDirective_1 = class FormElementDirective {
    //#endregion
    //#region Constructor
    constructor(
    // Directive host element
    _el, 
    // (Optional) Parent directive element
    _parent) {
        this._el = _el;
        this._parent = _parent;
        //#endregion
        //#region Events
        /**
         * Triggers when element applies changes
         */
        this._applied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
    }
    //#endregion
    //#region Properties
    /**
     * Gets @FormElement decorator's annotations
     */
    get formControlAnnotation() {
        return this.constructor.__formElementAnnotation;
    }
    /**
     * Unique ID for the parent container (if parent found)
     */
    get _parentId() {
        return this._parent ? this._parent._id || this._parent._parentId : null;
    }
    /**
     * Unique IDs for all parent containers (if parents found)
     */
    get _parentIds() {
        const ids = [];
        let parent = this;
        // tslint:disable-next-line: no-conditional-assignment
        do {
            if (parent._id) {
                ids.push(parent._id);
            }
        } while ((parent = parent._parent));
        return ids;
    }
    /**
     * Gets [disabled] binding, inherited from parent form containers
     */
    get _inheritedDisabled() {
        if (this.disabled === true || this.disabled === false) {
            return this.disabled;
        }
        else {
            return this._parent ? this._parent._inheritedDisabled : false;
        }
    }
    /**
     * Gets [size] binding, inherited from parent form containers
     */
    get _inheritedSize() {
        return this.size || this.size === null || (this._parent ? this._parent._inheritedSize : null);
    }
    /**
     * Gets [valid] binding, inherited from parent form containers
     */
    get _inheritedValid() {
        if (this.valid === null || this.valid === true || this.valid === false) {
            return this.valid;
        }
        else {
            return this._parent ? this._parent._inheritedValid : null;
        }
    }
    //#endregion
    //#region Private methods
    ngOnInit() {
        // Check if explicitly passed parent
        if (this.iquiFormParent) {
            this._parent = this.iquiFormParent;
        }
        // Subscribe to parent's events
        if (this._parent) {
            // Subscribe to "applied" event
            this._appliedSubscription = this._parent._applied.subscribe(() => {
                // Apply self when parent applied
                this.apply();
            });
        }
        // Apply form control modifications
        this.apply();
    }
    ngOnChanges() {
        // Apply form control modifications
        this.apply();
    }
    ngOnDestroy() {
        // Unsubscribe from parent's events
        if (this._appliedSubscription) {
            this._appliedSubscription.unsubscribe();
        }
    }
    /**
     * Gets if element or any of it's parents is marked as [iqui] and needs to initialize as form container
     */
    get shouldInitializeBindings() {
        return this.iquiForm !== false || (this._parent ? this._parent.shouldInitializeBindings : false);
    }
    /**
     * Gets if element should initialize its own ID scope
     */
    get shouldInitializeIdScope() {
        return this.formControlAnnotation.isolateId && this.isolateId;
    }
    /**
     * Applies bindings and styling to element
     */
    apply() {
        // If (relative) isolateId container, set unique ID for instance
        if (this.shouldInitializeIdScope) {
            this._id = FormElementDirective_1._id++;
        }
        // Initialize if isolateId form directive, or if has isolateId as parent
        if (this.shouldInitializeBindings) {
            // Set ".iqui" class to allow selecting only if iqui directive applied
            // tslint:disable-next-line: max-line-length
            this._el.nativeElement.classList.add(this.formControlAnnotation.className ? `iqui-${this.formControlAnnotation.className}` : 'iqui');
            // Set base class
            if (this.formControlAnnotation.className) {
                this._el.nativeElement.classList.add(this.formControlAnnotation.className);
            }
            // Inherit common container ID to be referenced by any labels
            if (this.formControlAnnotation.idAttributeName) {
                const parentId = this._parentId, idAttributeName = this.formControlAnnotation.idAttributeName;
                if (parentId) {
                    for (const id of idAttributeName instanceof Array ? idAttributeName : [idAttributeName]) {
                        this._el.nativeElement.setAttribute(id, `unique-id-${parentId}`);
                    }
                }
            }
            // Inherit disabled status from parent container
            if (this.formControlAnnotation.bindDisabled) {
                this._el.nativeElement.disabled = this._inheritedDisabled;
            }
            // Inherit size from parent container
            if (this.formControlAnnotation.bindSize) {
                const className = this.formControlAnnotation.className;
                for (const name of className instanceof Array ? className : [className]) {
                    // Remove existing sizes
                    for (const size of Object.values(_types__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize)) {
                        this._el.nativeElement.classList.remove(`${name}-${size}`);
                    }
                    // Set size
                    const inheritedSize = this._inheritedSize;
                    if (inheritedSize) {
                        this._el.nativeElement.classList.add(`${name}-${inheritedSize}`);
                    }
                }
            }
            // Inherit validation from parent container
            if (this.formControlAnnotation.bindValid) {
                // Clear existing validation
                this._el.nativeElement.classList.remove('is-valid');
                this._el.nativeElement.classList.remove('is-invalid');
                // Set validation
                const inheritedValidation = this._inheritedValid;
                if (inheritedValidation === true || inheritedValidation === false) {
                    this._el.nativeElement.classList.add(inheritedValidation ? 'is-valid' : 'is-invalid');
                }
            }
        }
        // Trigger "applied" event
        this._applied.emit();
    }
};
//#region Static
// Holds next unique ID to be used
FormElementDirective._id = 1;
FormElementDirective.ɵfac = function FormElementDirective_Factory(t) { return new (t || FormElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FormElementDirective, 13)); };
FormElementDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: FormElementDirective, selectors: [["form", "iquiForm", ""]], hostVars: 1, hostBindings: function FormElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled);
    } }, inputs: { iquiForm: "iquiForm", iquiFormParent: "iquiFormParent", isolateId: "isolateId", disabled: "disabled", size: "size", valid: "valid" }, outputs: { _applied: "_applied" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
FormElementDirective = FormElementDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    FormElement({})
], FormElementDirective);



/***/ }),

/***/ 8329:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/input/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputDirective": () => (/* binding */ InputDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var InputDirective_1;



/**
 * Input directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <input iqui type="text" />
 *
 */
let InputDirective = InputDirective_1 = class InputDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
InputDirective.ɵfac = /*@__PURE__*/ function () { let ɵInputDirective_BaseFactory; return function InputDirective_Factory(t) { return (ɵInputDirective_BaseFactory || (ɵInputDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](InputDirective)))(t || InputDirective); }; }();
InputDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: InputDirective, selectors: [["input", 3, "type", ""], ["input", "type", "text"], ["input", "type", "number"], ["input", "type", "search"], ["input", "type", "url"], ["input", "type", "email"], ["input", "type", "tel"], ["input", "type", "password"], ["input", "type", "date"], ["input", "type", "time"], ["input", "type", "datetime-local"], ["input", "type", "week"], ["input", "type", "month"], ["input", "type", "color"], ["input", "type", "file"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: InputDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
InputDirective = InputDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ className: 'form-control', idAttributeName: 'id', bindDisabled: true, bindSize: true, bindValid: true })
], InputDirective);



/***/ }),

/***/ 3311:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/label/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelDirective": () => (/* binding */ LabelDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var LabelDirective_1;



/**
 * Label directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <label iqui>...</label>
 *
 */
let LabelDirective = LabelDirective_1 = class LabelDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
LabelDirective.ɵfac = /*@__PURE__*/ function () { let ɵLabelDirective_BaseFactory; return function LabelDirective_Factory(t) { return (ɵLabelDirective_BaseFactory || (ɵLabelDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](LabelDirective)))(t || LabelDirective); }; }();
LabelDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LabelDirective, selectors: [["label"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: LabelDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
LabelDirective = LabelDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ idAttributeName: 'for' })
], LabelDirective);



/***/ }),

/***/ 1629:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/radio/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioDirective": () => (/* binding */ RadioDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var RadioDirective_1;



/**
 * Radio directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <input iqui type="radio />
 *
 */
let RadioDirective = RadioDirective_1 = class RadioDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
    /**
     * Applies bindings and styling to element
     */
    apply() {
        // Execute inherited functionality
        super.apply();
        // Apply common name based on grand-parent instead of parent
        const parentIds = this._parentIds;
        if (parentIds.length) {
            this._el.nativeElement.setAttribute('name', `unique-name-${parentIds.length > 1 ? parentIds[1] : parentIds[0]}`);
        }
    }
};
RadioDirective.ɵfac = /*@__PURE__*/ function () { let ɵRadioDirective_BaseFactory; return function RadioDirective_Factory(t) { return (ɵRadioDirective_BaseFactory || (ɵRadioDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](RadioDirective)))(t || RadioDirective); }; }();
RadioDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RadioDirective, selectors: [["input", "type", "radio"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: RadioDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
RadioDirective = RadioDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ idAttributeName: 'id', bindDisabled: true, bindValid: true })
], RadioDirective);



/***/ }),

/***/ 4164:
/*!******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/select/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectDirective": () => (/* binding */ SelectDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var SelectDirective_1;



/**
 * Select directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <select><option /></select>
 *
 */
let SelectDirective = SelectDirective_1 = class SelectDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
SelectDirective.ɵfac = /*@__PURE__*/ function () { let ɵSelectDirective_BaseFactory; return function SelectDirective_Factory(t) { return (ɵSelectDirective_BaseFactory || (ɵSelectDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](SelectDirective)))(t || SelectDirective); }; }();
SelectDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: SelectDirective, selectors: [["select"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: SelectDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
SelectDirective = SelectDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ className: 'custom-select', idAttributeName: 'id', bindDisabled: true, bindSize: true, bindValid: true })
], SelectDirective);



/***/ }),

/***/ 485:
/*!********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/directives/textarea/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextareaDirective": () => (/* binding */ TextareaDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 3669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
var TextareaDirective_1;



/**
 * Textarea directive
 *
 * Usage:
 *
 *  TODO: ...
 *  <textarea></textarea>
 *
 */
let TextareaDirective = TextareaDirective_1 = class TextareaDirective extends ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective {
};
TextareaDirective.ɵfac = /*@__PURE__*/ function () { let ɵTextareaDirective_BaseFactory; return function TextareaDirective_Factory(t) { return (ɵTextareaDirective_BaseFactory || (ɵTextareaDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TextareaDirective)))(t || TextareaDirective); }; }();
TextareaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: TextareaDirective, selectors: [["textarea"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ___WEBPACK_IMPORTED_MODULE_0__.FormElementDirective, useExisting: TextareaDirective_1 }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]] });
TextareaDirective = TextareaDirective_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,___WEBPACK_IMPORTED_MODULE_0__.FormElement)({ className: 'form-control', idAttributeName: 'id', bindDisabled: true, bindSize: true, bindValid: true })
], TextareaDirective);



/***/ }),

/***/ 5566:
/*!************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/form/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormElementDirective": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_0__.FormElementDirective),
/* harmony export */   "UsesFormElementDirectives": () => (/* reexport safe */ _directives__WEBPACK_IMPORTED_MODULE_0__.UsesFormElementDirectives),
/* harmony export */   "FormDirective": () => (/* reexport safe */ _directives_form__WEBPACK_IMPORTED_MODULE_1__.FormDirective),
/* harmony export */   "FormGroupDirective": () => (/* reexport safe */ _directives_group__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective),
/* harmony export */   "ButtonDirective": () => (/* reexport safe */ _directives_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective),
/* harmony export */   "LabelDirective": () => (/* reexport safe */ _directives_label__WEBPACK_IMPORTED_MODULE_4__.LabelDirective),
/* harmony export */   "TextareaDirective": () => (/* reexport safe */ _directives_textarea__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective),
/* harmony export */   "InputDirective": () => (/* reexport safe */ _directives_input__WEBPACK_IMPORTED_MODULE_6__.InputDirective),
/* harmony export */   "CheckboxDirective": () => (/* reexport safe */ _directives_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxDirective),
/* harmony export */   "RadioDirective": () => (/* reexport safe */ _directives_radio__WEBPACK_IMPORTED_MODULE_8__.RadioDirective),
/* harmony export */   "SelectDirective": () => (/* reexport safe */ _directives_select__WEBPACK_IMPORTED_MODULE_9__.SelectDirective),
/* harmony export */   "InputComponent": () => (/* reexport safe */ _components_input__WEBPACK_IMPORTED_MODULE_10__.InputComponent),
/* harmony export */   "InputType": () => (/* reexport safe */ _components_input__WEBPACK_IMPORTED_MODULE_10__.InputType),
/* harmony export */   "CheckboxComponent": () => (/* reexport safe */ _components_checkbox__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent),
/* harmony export */   "OptionDirective": () => (/* reexport safe */ _components_option__WEBPACK_IMPORTED_MODULE_12__.OptionDirective),
/* harmony export */   "RadioComponent": () => (/* reexport safe */ _components_radio__WEBPACK_IMPORTED_MODULE_13__.RadioComponent),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _components_select__WEBPACK_IMPORTED_MODULE_14__.SelectComponent),
/* harmony export */   "FormModule": () => (/* binding */ FormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ 3669);
/* harmony import */ var _directives_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/form */ 5681);
/* harmony import */ var _directives_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/group */ 7572);
/* harmony import */ var _directives_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/button */ 3053);
/* harmony import */ var _directives_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/label */ 3311);
/* harmony import */ var _directives_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/textarea */ 485);
/* harmony import */ var _directives_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/input */ 8329);
/* harmony import */ var _directives_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/checkbox */ 951);
/* harmony import */ var _directives_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/radio */ 1629);
/* harmony import */ var _directives_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/select */ 4164);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/input */ 6684);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/checkbox */ 5009);
/* harmony import */ var _components_option__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/option */ 4898);
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/radio */ 3309);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/select */ 3112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);


// Import and (re)export element directives base

// Import and (re)export element directives









// Import and (re)export element components





















/**
 * IQ UI NGX Elements' Form elements module
 * Implements components that are mainly meant to be used for user input within forms
 */
class FormModule {
}
FormModule.ɵfac = function FormModule_Factory(t) { return new (t || FormModule)(); };
FormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: FormModule });
FormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__.TextFieldModule], 
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        // Export dependency modules
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__.TextFieldModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](FormModule, { declarations: [_directives__WEBPACK_IMPORTED_MODULE_0__.FormElementDirective,
        _directives_form__WEBPACK_IMPORTED_MODULE_1__.FormDirective,
        _directives_group__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective,
        _directives_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective,
        _directives_label__WEBPACK_IMPORTED_MODULE_4__.LabelDirective,
        _directives_textarea__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective,
        _directives_input__WEBPACK_IMPORTED_MODULE_6__.InputDirective,
        _directives_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxDirective,
        _directives_radio__WEBPACK_IMPORTED_MODULE_8__.RadioDirective,
        _directives_select__WEBPACK_IMPORTED_MODULE_9__.SelectDirective,
        _components_input__WEBPACK_IMPORTED_MODULE_10__.InputComponent,
        _components_checkbox__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent,
        _components_radio__WEBPACK_IMPORTED_MODULE_13__.RadioComponent,
        _components_select__WEBPACK_IMPORTED_MODULE_14__.SelectComponent,
        _components_option__WEBPACK_IMPORTED_MODULE_12__.OptionDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__.TextFieldModule], exports: [
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        // Export dependency modules
        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_17__.TextFieldModule,
        // Export child components
        _directives__WEBPACK_IMPORTED_MODULE_0__.FormElementDirective,
        _directives_form__WEBPACK_IMPORTED_MODULE_1__.FormDirective,
        _directives_group__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective,
        _directives_button__WEBPACK_IMPORTED_MODULE_3__.ButtonDirective,
        _directives_label__WEBPACK_IMPORTED_MODULE_4__.LabelDirective,
        _directives_textarea__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective,
        _directives_input__WEBPACK_IMPORTED_MODULE_6__.InputDirective,
        _directives_checkbox__WEBPACK_IMPORTED_MODULE_7__.CheckboxDirective,
        _directives_radio__WEBPACK_IMPORTED_MODULE_8__.RadioDirective,
        _directives_select__WEBPACK_IMPORTED_MODULE_9__.SelectDirective,
        _components_input__WEBPACK_IMPORTED_MODULE_10__.InputComponent,
        _components_checkbox__WEBPACK_IMPORTED_MODULE_11__.CheckboxComponent,
        _components_radio__WEBPACK_IMPORTED_MODULE_13__.RadioComponent,
        _components_select__WEBPACK_IMPORTED_MODULE_14__.SelectComponent,
        _components_option__WEBPACK_IMPORTED_MODULE_12__.OptionDirective] }); })();


/***/ }),

/***/ 8739:
/*!**********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/_showcase.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclareShowcaseComponent": () => (/* reexport safe */ _declare_showcase__WEBPACK_IMPORTED_MODULE_4__.DeclareShowcaseComponent),
/* harmony export */   "Copy2ClipboardShowcaseComponent": () => (/* reexport safe */ _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_5__.Copy2ClipboardShowcaseComponent),
/* harmony export */   "TooltipShowcaseComponent": () => (/* reexport safe */ _tooltip_showcase__WEBPACK_IMPORTED_MODULE_6__.TooltipShowcaseComponent),
/* harmony export */   "DropdownShowcaseComponent": () => (/* reexport safe */ _dropdown_showcase__WEBPACK_IMPORTED_MODULE_7__.DropdownShowcaseComponent),
/* harmony export */   "CollapseShowcaseComponent": () => (/* reexport safe */ _collapse_showcase__WEBPACK_IMPORTED_MODULE_8__.CollapseShowcaseComponent),
/* harmony export */   "ModalShowcaseComponent": () => (/* reexport safe */ _modal_showcase__WEBPACK_IMPORTED_MODULE_9__.ModalShowcaseComponent),
/* harmony export */   "ToastShowcaseComponent": () => (/* reexport safe */ _toast_showcase__WEBPACK_IMPORTED_MODULE_10__.ToastShowcaseComponent),
/* harmony export */   "BookmarkableShowcaseComponent": () => (/* reexport safe */ _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_11__.BookmarkableShowcaseComponent),
/* harmony export */   "FunctionalShowcaseModule": () => (/* binding */ FunctionalShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../code */ 800);
/* harmony import */ var _showcasing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../showcasing */ 1834);
/* harmony import */ var _declare_showcase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./declare/_showcase */ 1355);
/* harmony import */ var _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copy2clipboard/_showcase */ 2399);
/* harmony import */ var _tooltip_showcase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tooltip/_showcase */ 1824);
/* harmony import */ var _dropdown_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown/_showcase */ 9644);
/* harmony import */ var _collapse_showcase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapse/_showcase */ 5185);
/* harmony import */ var _modal_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/_showcase */ 2614);
/* harmony import */ var _toast_showcase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toast/_showcase */ 6999);
/* harmony import */ var _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bookmarkable/_showcase */ 982);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules




// Import showcase components and (re)export components

















// IQ UI NGX Elements' Functional elements module
class FunctionalShowcaseModule {
}
FunctionalShowcaseModule.ɵfac = function FunctionalShowcaseModule_Factory(t) { return new (t || FunctionalShowcaseModule)(); };
FunctionalShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: FunctionalShowcaseModule });
FunctionalShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _code__WEBPACK_IMPORTED_MODULE_2__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_3__.ShowcasingModule], 
        // Export dependency modules
        _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule,
        ___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _code__WEBPACK_IMPORTED_MODULE_2__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_3__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](FunctionalShowcaseModule, { declarations: [_declare_showcase__WEBPACK_IMPORTED_MODULE_4__.DeclareShowcaseComponent,
        _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_5__.Copy2ClipboardShowcaseComponent,
        _tooltip_showcase__WEBPACK_IMPORTED_MODULE_6__.TooltipShowcaseComponent,
        _dropdown_showcase__WEBPACK_IMPORTED_MODULE_7__.DropdownShowcaseComponent,
        _collapse_showcase__WEBPACK_IMPORTED_MODULE_8__.CollapseShowcaseComponent,
        _modal_showcase__WEBPACK_IMPORTED_MODULE_9__.ModalShowcaseComponent,
        _toast_showcase__WEBPACK_IMPORTED_MODULE_10__.ToastShowcaseComponent,
        _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_11__.BookmarkableShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule, ___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _code__WEBPACK_IMPORTED_MODULE_2__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_3__.ShowcasingModule], exports: [
        // Export dependency modules
        _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule,
        ___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _code__WEBPACK_IMPORTED_MODULE_2__.CodeModule,
        _showcasing__WEBPACK_IMPORTED_MODULE_3__.ShowcasingModule,
        // Export child components
        _copy2clipboard_showcase__WEBPACK_IMPORTED_MODULE_5__.Copy2ClipboardShowcaseComponent,
        _tooltip_showcase__WEBPACK_IMPORTED_MODULE_6__.TooltipShowcaseComponent,
        _dropdown_showcase__WEBPACK_IMPORTED_MODULE_7__.DropdownShowcaseComponent,
        _collapse_showcase__WEBPACK_IMPORTED_MODULE_8__.CollapseShowcaseComponent,
        _modal_showcase__WEBPACK_IMPORTED_MODULE_9__.ModalShowcaseComponent,
        _toast_showcase__WEBPACK_IMPORTED_MODULE_10__.ToastShowcaseComponent,
        _bookmarkable_showcase__WEBPACK_IMPORTED_MODULE_11__.BookmarkableShowcaseComponent] }); })();


/***/ }),

/***/ 982:
/*!*****************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/bookmarkable/_showcase/index.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookmarkableShowcaseComponent": () => (/* binding */ BookmarkableShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functional */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
// Import modules





const _c0 = function () { return ["scss"]; };
const _c1 = function () { return ["typescript"]; };
// Showcase component
class BookmarkableShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule];
        // Playground context
        this.context = {
            BookmarkA: 'bookmark-a',
            BookmarkB: 'bookmark-b',
            BookmarkC: 'bookmark-c',
        };
    }
}
BookmarkableShowcaseComponent.ɵfac = function BookmarkableShowcaseComponent_Factory(t) { return new (t || BookmarkableShowcaseComponent)(); };
BookmarkableShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BookmarkableShowcaseComponent, selectors: [["ng-component"]], decls: 20, vars: 7, consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]], template: function BookmarkableShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Bookmarkable Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\nUses URL fragment to persist page position to the parent element through reloads and link shares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "iqui-highlightjs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "        // Bookmark-able vertical offset (for example, if fixed header and link needs to be scrolled with an offset to show below it)\n        .iquiBookmarkable.scrolling {\n          position: relative;\n          display: inline-block; // Making sure padding and margin can apply\n          padding-top: 60px;     // Offset height\n          margin-top: -60px;     // Offset height\n        }\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "iqui-playground", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n    <!-- Bookmarkable link -->\n    <a [iquiBookmarkable]=\"context.BookmarkA\" [link]=\"true\" [copy]=\"true\">\n      This link will get persisted in the URL and copy-2-clipboard when pressed\n    </a>\n\n    <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    <hr />\n\n    <!-- Bookmarkable link -->\n    <a [iquiBookmarkable]=\"context.BookmarkB\" [link]=\"true\" [copy]=\"false\">\n      This link will only get persisted in the URL when pressed\n    </a>\n\n    <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    ... <br />\n    <hr />\n\n    <!-- Bookmarkable link -->\n    <a [iquiBookmarkable]=\"context.BookmarkC\" [link]=\"false\" [copy]=\"true\">\n      This link will only copy-2-clipboard when pressed\n    </a>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "BookmarkableService");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "iqui-highlightjs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "        // To scroll to a [iquiBookmarkable] programmatically, inject and use the BookmarkableService\n        import { BookmarkableService } from '@inquest/iqui-ngx'\n        class MyComponent {\n          \n          constructor (private _bookmarkable: BookmarkableService) {\n            // Scroll to element\n            this._bookmarkable.scrollToValue('bookmark-a');\n            // Scroll to element referenced by URL fragment\n            this._bookmarkable.scrollToFragment();\n          }\n\n        }\n      ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__.HighlightJsComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_2__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 5450:
/*!*******************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/bookmarkable/index.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookmarkableDirective": () => (/* binding */ BookmarkableDirective),
/* harmony export */   "BookmarkableService": () => (/* binding */ BookmarkableService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8653);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 6537);
// Bookmark-able directive
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
class BookmarkableDirective {
    constructor(_service, _route, _el, _zone, _clipboard) {
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
        this.copy = true;
        // Subscribe to fragment changes
        this._route.fragment.subscribe(() => {
            // Check fragment and scroll into view
            if (this.checkReferencedByUrlFragment()) {
                this._scrollIntoViewOnceStable();
            }
        });
    }
    ngOnInit() {
        // Register with central service
        this._service.register(this.value, this);
        // Set class
        this._el.nativeElement.classList.add('iquiBookmarkable');
        // Set HREF attribute value
        this._updateHrefAttribute();
        // Handle click
        if (this.copy) {
            this._el.nativeElement.addEventListener('click', () => {
                // Set HREF attribute value
                this._updateHrefAttribute();
                // Copy full URL to clipboard
                this._clipboard.copy2Clipboard(this._composeUrl());
            });
        }
    }
    ngAfterViewInit() {
        // Check fragment and scroll into view
        if (this.checkReferencedByUrlFragment()) {
            this._scrollIntoViewOnceStable();
        }
    }
    ngOnChanges(changes) {
        // Re-register with central service
        this._service.unregister(this.value);
        this._service.register(changes.value, this);
        // Set HREF attribute value
        this._updateHrefAttribute();
    }
    ngOnDestroy() {
        // Un-register from central service
        this._service.unregister(this.value);
    }
    /**
     * Updates HREF attribute value
     */
    _updateHrefAttribute() {
        // Set anchor [href] value
        if (this.link && this._el.nativeElement.tagName.toLowerCase() === 'a') {
            this._el.nativeElement.href = this._composeUrl();
        }
    }
    /**
     * Composes a full URL to the bookmark-able element
     */
    _composeUrl() {
        // tslint:disable-next-line: max-line-length
        const pathname = window.location.pathname, path = pathname.length && (pathname[0] === '/' ? pathname.substr(1) : pathname), hash = window.location.hash, fragment = hash.length && hash[0] === '#' ? hash.substr(1) : hash, postFragment = (fragment === null || fragment === void 0 ? void 0 : fragment.split('#').length) > 1 ? `#${fragment.split('#').slice(1).join('#')}` : '';
        return `${window.location.protocol}//${window.location.host}/${path}#${this.value}${postFragment}`;
    }
    /**
     * Scrolls into view once page is stable
     */
    _scrollIntoViewOnceStable() {
        // Check if element should be scrolled to
        if (this.scroll) {
            // Wait until stable
            const observable = this._zone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounce)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(200))).subscribe(() => {
                // Unsubscribe
                observable.unsubscribe();
                // Scroll into view
                this._zone.runTask(() => {
                    this.scrollIntoView();
                });
            });
        }
    }
    /**
     * Checks if this instance is being referenced by the URL fragment
     */
    checkReferencedByUrlFragment() {
        const hash = window.location.hash, fragment = hash.length && hash[0] === '#' ? hash.substr(1) : hash, target = fragment.split('#')[0];
        return this.value && target === this.value;
    }
    /**
     * Scrolls host element into view
     */
    scrollIntoView() {
        // Scroll into view
        setTimeout(() => {
            this._el.nativeElement.classList.add('scrolling');
            this._el.nativeElement.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth',
            });
            this._el.nativeElement.classList.remove('scrolling');
        });
    }
}
BookmarkableDirective.ɵfac = function BookmarkableDirective_Factory(t) { return new (t || BookmarkableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](BookmarkableService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ClipboardService)); };
BookmarkableDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: BookmarkableDirective, selectors: [["", "iquiBookmarkable", ""]], inputs: { value: ["iquiBookmarkable", "value"], link: "link", scroll: "scroll", copy: "copy" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]] });
/**
 * Central service providing manipulation of BookmarkableDirective instances
 */
class BookmarkableService {
    /**
     * Registers a BookmarkableDirective instance
     * @param value Currently set value of the BookmarkableDirective instance
     * @param instance BookmarkableDirective instance to register
     */
    register(value, instance) {
        BookmarkableService.bookmarkables[value] = instance;
    }
    /**
     * Un-registers a BookmarkableDirective instance
     * @param value Value the BookmarkableDirective instance is registered under
     */
    unregister(value) {
        delete BookmarkableService.bookmarkables[value];
    }
    /**
     * Scrolls to BookmarkableDirective instance referenced by the URL fragment
     * @param value Value the BookmarkableDirective instance is registered under
     */
    scrollToValue(value) {
        if (BookmarkableService.bookmarkables[value]) {
            BookmarkableService.bookmarkables[value].scrollIntoView();
        }
    }
    /**
     * Scrolls to BookmarkableDirective instance referenced by the URL fragment
     */
    scrollToFragment() {
        for (const instance of Object.values(BookmarkableService.bookmarkables)) {
            if (instance.checkReferencedByUrlFragment()) {
                instance.scrollIntoView();
            }
        }
    }
}
/**
 * Holds references to all BookmarkableDirective instances by their set value
 */
BookmarkableService.bookmarkables = {};
BookmarkableService.ɵfac = function BookmarkableService_Factory(t) { return new (t || BookmarkableService)(); };
BookmarkableService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BookmarkableService, factory: BookmarkableService.ɵfac });


/***/ }),

/***/ 5185:
/*!*************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/collapse/_showcase/index.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseShowcaseComponent": () => (/* binding */ CollapseShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
// Import modules







// Showcase component
class CollapseShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_2__.CodeModule];
        // Playground context
        this.context = {};
    }
}
CollapseShowcaseComponent.ɵfac = function CollapseShowcaseComponent_Factory(t) { return new (t || CollapseShowcaseComponent)(); };
CollapseShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CollapseShowcaseComponent, selectors: [["ng-component"]], decls: 10, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function CollapseShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Collapse Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\nExpands/Collapses a target element ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"one\" [toggleOnEvent]=\"['click', 'keypress']\">\n      Toggle #1 by element reference\n    </iqui-button>\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"'.two'\" [toggleOnEvent]=\"['click', 'keypress']\">\n      Toggle #2 by CSS selector\n    </iqui-button>\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"[one, two]\" [showOnEvent]=\"['focusin']\" [hideOnEvent]=\"['focusout']\">\n      Show/Hide #1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " #2 on Focus\n    </iqui-button>\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [toggleTarget]=\"[one, two]\" [showOnEvent]=\"['mouseover']\" [hideOnEvent]=\"['mouseout']\">\n      Show/Hide #1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "&");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " #2 on Hover\n    </iqui-button>\n\n    <div #one class=\"m-1 card one\">\n      <div class=\"card-body\"> I am ONE! </div>\n    </div>\n    <div #two class=\"m-1 card two\">\n      <div class=\"card-body\"> I am TWO! </div>\n    </div>\n\n    <br /><br />\n\n    <iqui-button class=\"m-1\" iquiCollapse\n      [showTarget]=\"first\" [showOnEvent]=\"['click', 'keypress']\"\n      [hideTarget]=\"'.accordion'\" [hideOnEvent]=\"['click', 'keypress']\">\n      First\n    </iqui-button>\n    <iqui-button class=\"m-1\" iquiCollapse\n      [showTarget]=\"second\" [showOnEvent]=\"['click', 'keypress']\"\n      [hideTarget]=\"'.accordion'\" [hideOnEvent]=\"['click', 'keypress']\">\n      Second\n    </iqui-button>\n    <iqui-button class=\"m-1\" iquiCollapse\n      [showTarget]=\"third\" [showOnEvent]=\"['click', 'keypress']\"\n      [hideTarget]=\"'.accordion'\" [hideOnEvent]=\"['click', 'keypress']\">\n      Third \n    </iqui-button>\n\n    <div #first class=\"m-1 card accordion\">\n      <div class=\"card-body\"> I am FIRST! </div>\n    </div>\n    <div #second class=\"m-1 card accordion\">\n      <div class=\"card-body\"> I am SECOND! </div>\n    </div>\n    <div #third class=\"m-1 card accordion\">\n      <div class=\"card-body\"> I am THIRD! </div>\n    </div>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 8156:
/*!***************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/collapse/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseDirective": () => (/* binding */ CollapseDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

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
class CollapseDirective {
    constructor(_el) {
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
    ngOnInit() {
        // Initialize events
        this._clearInitializedEvents();
        this._initializeEvents();
        // Initialize targets
        this._clearAllInitializedTargets();
        this._initializeAllTargets();
    }
    ngOnChanges() {
        // Initialize events
        this._clearInitializedEvents();
        this._initializeEvents();
        // Initialize targets
        this._clearAllInitializedTargets();
        this._initializeAllTargets();
    }
    ngOnDestroy() {
        // Clear previously subscribed events
        this._clearInitializedEvents();
        // Clear previously initialized target elements
        this._clearAllInitializedTargets();
    }
    /**
     * Initializes lists of monitored events and subscribes to those events
     */
    _initializeEvents() {
        // Initialize events lists
        if (!this.toggleOnEvent && !this.showOnEvent && !this.hideOnEvent) {
            this.toggleOnEvent = ['click', 'keypress'];
        }
        // Subscribe hide events
        if (this.hideOnEvent) {
            for (const eventName of this.hideOnEvent instanceof Array ? this.hideOnEvent : [this.hideOnEvent]) {
                const eventHandlerFn = () => {
                    for (const target of [...this._toggleTargetElements, ...this._targetHideElements]) {
                        target.classList.remove('show');
                    }
                };
                this._subscribedEvents[eventName] = eventHandlerFn;
                this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
            }
        }
        // Subscribe toggle events
        if (this.toggleOnEvent) {
            for (const eventName of this.toggleOnEvent instanceof Array ? this.toggleOnEvent : [this.toggleOnEvent]) {
                const eventHandlerFn = () => {
                    for (const target of this._toggleTargetElements) {
                        target.classList.toggle('show');
                    }
                };
                this._subscribedEvents[eventName] = eventHandlerFn;
                this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
            }
        }
        // Subscribe show events
        if (this.showOnEvent) {
            for (const eventName of this.showOnEvent instanceof Array ? this.showOnEvent : [this.showOnEvent]) {
                const eventHandlerFn = () => {
                    for (const target of [...this._toggleTargetElements, ...this._targetShowElements]) {
                        target.classList.add('show');
                    }
                };
                this._subscribedEvents[eventName] = eventHandlerFn;
                this._el.nativeElement.addEventListener(eventName, eventHandlerFn);
            }
        }
    }
    /**
     * Clears previously subscribed events
     */
    _clearInitializedEvents() {
        for (const eventName of Object.keys(this._subscribedEvents)) {
            this._el.nativeElement.removeEventListener(eventName, this._subscribedEvents[eventName]);
        }
    }
    /**
     * De-initializes previously initialized target elements and initializes new ones on all types
     */
    _initializeAllTargets() {
        // Check if any target specified
        if (!this.toggleTarget && !this.showTarget && !this.hideTarget) {
            // Initialize self as target
            this._initializeTargets(undefined);
        }
        else {
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
    _initializeTargets(targets) {
        // Get all target elements
        const targetElements = [];
        if (!targets) {
            // Use self as a target
            targetElements.push(this._el.nativeElement);
        }
        else if (typeof targets === 'string') {
            // Use as selector
            document.querySelectorAll(targets).forEach(target => {
                if (target instanceof HTMLElement) {
                    targetElements.push(target);
                }
            });
        }
        else if (targets instanceof HTMLElement) {
            // Use target
            targetElements.push(targets);
        }
        else if (targets instanceof Array) {
            // Check and use targets
            for (const target of targets) {
                if (target instanceof HTMLElement) {
                    targetElements.push(target);
                }
            }
        }
        // Initialize new targets
        for (const target of targetElements) {
            target.classList.add('collapse');
        }
        // Return new targets
        return targetElements;
    }
    /**
     * Clears previously initialized target elements
     */
    _clearAllInitializedTargets() {
        this._clearInitializedTargets(this._toggleTargetElements);
        this._clearInitializedTargets(this._targetShowElements);
        this._clearInitializedTargets(this._targetHideElements);
    }
    /**
     * Clears previously initialized target elements
     * @params Targets to clear
     */
    _clearInitializedTargets(targets) {
        for (const target of targets) {
            target.classList.remove('collapse');
            target.classList.remove('show');
        }
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
CollapseDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CollapseDirective, selectors: [["", "iquiCollapse", ""]], inputs: { toggleTarget: "toggleTarget", showTarget: "showTarget", hideTarget: "hideTarget", toggleOnEvent: "toggleOnEvent", showOnEvent: "showOnEvent", hideOnEvent: "hideOnEvent" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 2399:
/*!*******************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/copy2clipboard/_showcase/index.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Copy2ClipboardShowcaseComponent": () => (/* binding */ Copy2ClipboardShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
// Import modules





const _c0 = function () { return ["scss"]; };
// Showcase component
class Copy2ClipboardShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule];
        // Playground context
        this.context = {
            ContentText: 'Some content to copy',
            ExplicitText: 'Explicit content to copy',
            explicitTextFactory: () => 'Generated explicit content to copy',
            doSomething: () => { },
        };
    }
}
Copy2ClipboardShowcaseComponent.ɵfac = function Copy2ClipboardShowcaseComponent_Factory(t) { return new (t || Copy2ClipboardShowcaseComponent)(); };
Copy2ClipboardShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: Copy2ClipboardShowcaseComponent, selectors: [["ng-component"]], decls: 13, vars: 5, consts: [[1, "card", "mt-3"], [1, "card-header"], [1, "p-3"], [3, "languages"], [1, "mt-5", 3, "title", "modules", "context"]], template: function Copy2ClipboardShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Copy-2-Clipboard Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\nAny HTML element's content, when marked with [iquiCopy2Clipboard] directive, will be copied to clipboard when clicked. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "iqui-highlightjs", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "        // Copy-2-Clipboard styling\n        .iqui-copy-2-clipboard:hover {\n          text-decoration: underline;\n          cursor: copy;\n        }\n        // Copy-2-Clipboard styling once on clipboard\n        .iqui-copy-2-clipboard.iqui-copy-2-clipboard-copied {\n          color: green;\n        }\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "iqui-playground", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\n    <!-- Copy content -->\n    <div iquiCopy2Clipboard [innerHTML]=\"context.ContentText\" (copied)=\"context.doSomething()\"></div>\n\n    <!-- Copy explicitly set value -->\n    <div [iquiCopy2Clipboard]=\"context.ExplicitText\" [innerHTML]=\"context.ContentText\"></div>\n\n    <!-- Copy explicitly set value generated by a factory function -->\n    <div [iquiCopy2Clipboard]=\"context.explicitTextFactory\" [innerHTML]=\"context.ContentText\"></div>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__.HighlightJsComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_2__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 1715:
/*!*********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/copy2clipboard/index.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Copy2ClipboardDirective": () => (/* binding */ Copy2ClipboardDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 6537);
// Copy-2-clipboard directive
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
class Copy2ClipboardDirective {
    constructor(_el, _clipboard) {
        this._el = _el;
        this._clipboard = _clipboard;
        /**
         * Fires when a value is copied onto the clipboard
         */
        this.copied = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        // Set element class
        this._el.nativeElement.classList.add('iqui-copy-2-clipboard');
        // Monitor element for click events
        this._el.nativeElement.addEventListener('click', e => {
            // Check if has explicitly set value
            if (this.value) {
                // Copy explicitly set value
                this._clipboard.copy2Clipboard((typeof this.value === 'function' ? this.value() : this.value));
            }
            else {
                // Copy text from host element
                this._clipboard.copy2Clipboard(this._el.nativeElement);
            }
            // Find (and clear) any previously copied elements
            const els = document.getElementsByClassName('iqui-copy-2-clipboard-copied');
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < els.length; i++) {
                els[i].classList.remove('iqui-copy-2-clipboard-copied');
            }
            // Mark element as copied
            this._el.nativeElement.classList.add('iqui-copy-2-clipboard-copied');
            // Fire event
            this.copied.emit();
        });
        // Monitor element for click events
        this._el.nativeElement.addEventListener('mouseout', e => {
            // Un-mark element as copied
            this._el.nativeElement.classList.remove('iqui-copy-2-clipboard-copied');
        });
    }
}
Copy2ClipboardDirective.ɵfac = function Copy2ClipboardDirective_Factory(t) { return new (t || Copy2ClipboardDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ClipboardService)); };
Copy2ClipboardDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Copy2ClipboardDirective, selectors: [["", "iquiCopy2Clipboard", ""]], inputs: { value: ["iquiCopy2Clipboard", "value"] }, outputs: { copied: "copied" } });


/***/ }),

/***/ 1355:
/*!************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/declare/_showcase/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclareShowcaseComponent": () => (/* binding */ DeclareShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
// Import modules





// Showcase component
class DeclareShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule];
        // Playground context
        this.context = {
            Arg1: [1, 2, 3, 4],
            Arg2: [1, 2, 3, 4],
        };
    }
}
DeclareShowcaseComponent.ɵfac = function DeclareShowcaseComponent_Factory(t) { return new (t || DeclareShowcaseComponent)(); };
DeclareShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DeclareShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function DeclareShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Declare Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\nEvaluates and exposes given value/expression on tho the scope ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\n    <!-- Copy content -->\n    <ng-container *iquiDeclare=\"(context.Arg1 + context.Arg2) as complexCalculationResult\">\n      Now I can use the value multile times:\n      <span [innerHTML]=\"complexCalculationResult\"></span>,\n      <span [innerHTML]=\"complexCalculationResult + 1\"></span>,\n      <span [innerHTML]=\"complexCalculationResult + 2\"></span>\n      without having to recalculate it each time!\n    </ng-container>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_1__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_2__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_1__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 6946:
/*!**************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/declare/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclareDirective": () => (/* binding */ DeclareDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

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
class DeclareDirective {
    constructor(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    ngOnChanges(c) {
        // Promote value to view
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef, { iquiDeclare: c._syntax.currentValue });
    }
}
DeclareDirective.ɵfac = function DeclareDirective_Factory(t) { return new (t || DeclareDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
DeclareDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DeclareDirective, selectors: [["", "iquiDeclare", ""]], inputs: { _syntax: ["iquiDeclare", "_syntax"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });


/***/ }),

/***/ 9644:
/*!*************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/dropdown/_showcase/index.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownShowcaseComponent": () => (/* binding */ DropdownShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 2717);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);

// Import modules







// Showcase component
class DropdownShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_1__.FunctionalModule, _basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule];
        // Playground context
        this.context = {
            Position: Object.values(___WEBPACK_IMPORTED_MODULE_0__.DropdownRelativePositioning),
            ShowOnFocus: [true, false],
            ShowOnHover: [false, true],
            StayInViewport: [false, true],
            CustomClass: 'custom-class',
            OnSelected: e => {
                console.log(e);
            },
        };
    }
}
DropdownShowcaseComponent.ɵfac = function DropdownShowcaseComponent_Factory(t) { return new (t || DropdownShowcaseComponent)(); };
DropdownShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: DropdownShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function DropdownShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Basic Dropdown Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\nDisplays a dropdown HTML component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    <iqui-button\n      theme=\"light\"\n      iquiDropdown\n      [iquiDropdownPosition]=\"       context.Position\"\n      [iquiDropdownShowOnFocus]=\"    context.ShowOnFocus\"\n      [iquiDropdownShowOnHover]=\"    context.ShowOnHover\"\n      [iquiDropdownStayInViewport]=\" context.StayInViewport\"\n      [iquiDropdownClass]=\"          context.CustomClass\">\n\n      Button with a Dropdown\n\n      <!-- Example header content using exposed close() method -->\n      <ng-container *iquiDropdownHeader=\"let close\">\n        <span class=\"dropdown-header\">Header content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n        <div class=\"dropdown-divider\"></div>\n      </ng-container>\n\n      <!-- Example body content using exposed close() method -->\n      <ng-container *iquiDropdownBody=\"let close\">\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #1</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #2</a>\n        <a href=\"javascript:void(0)\" class=\"dropdown-item\" (click)=\"context.OnSelected($event)\">item #3</a>\n      </ng-container>\n\n      <!-- Example footer content using exposed close() method -->\n      <ng-container *iquiDropdownFooter=\"let close\">\n        <div class=\"dropdown-divider\"></div>\n        <span class=\"dropdown-header\">Footer content <a href=\"javascript:void(0)\" (click)=\"close()\">[X]</a></span>\n      </ng-container>\n\n    </iqui-button>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 2717:
/*!***************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/dropdown/index.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownRelativePositioning": () => (/* binding */ DropdownRelativePositioning),
/* harmony export */   "DropdownHeaderDirective": () => (/* binding */ DropdownHeaderDirective),
/* harmony export */   "DropdownBodyDirective": () => (/* binding */ DropdownBodyDirective),
/* harmony export */   "DropdownFooterDirective": () => (/* binding */ DropdownFooterDirective),
/* harmony export */   "DropdownDirective": () => (/* binding */ DropdownDirective),
/* harmony export */   "DropdownComponent": () => (/* binding */ DropdownComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types */ 4256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function DropdownComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function DropdownComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function DropdownComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
// Define and export types
/*
 * Dropdown preferred positions enum
 */
// tslint:disable-next-line: variable-name
const DropdownRelativePositioning = Object.assign({ AUTO: 'auto' }, _types__WEBPACK_IMPORTED_MODULE_0__.BootstrapRelativePositioning);
// Global constants
// How soon after a focus event is a programmatic toggle of drop-down visibility allowed (in [ms])
const PROGRAMMATIC_TOGGLE_AFTER_FOCUS_TIMEOUT = 200;
/**
 * Drop-down header directive, marks content as drop-down header content
 */
class DropdownHeaderDirective {
    constructor(template) {
        this.template = template;
    }
}
DropdownHeaderDirective.ɵfac = function DropdownHeaderDirective_Factory(t) { return new (t || DropdownHeaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
DropdownHeaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownHeaderDirective, selectors: [["", "iquiDropdownHeader", ""]] });
/**
 * Drop-down body directive, marks content as drop-down body content
 */
class DropdownBodyDirective {
    constructor(template) {
        this.template = template;
    }
}
DropdownBodyDirective.ɵfac = function DropdownBodyDirective_Factory(t) { return new (t || DropdownBodyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
DropdownBodyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownBodyDirective, selectors: [["", "iquiDropdownBody", ""]] });
/**
 * Drop-down footer directive, marks content as drop-down footer content
 */
class DropdownFooterDirective {
    constructor(template) {
        this.template = template;
    }
}
DropdownFooterDirective.ɵfac = function DropdownFooterDirective_Factory(t) { return new (t || DropdownFooterDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef)); };
DropdownFooterDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownFooterDirective, selectors: [["", "iquiDropdownFooter", ""]] });
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
class DropdownDirective {
    constructor(_element, _componentFocusMonitor, _dropdownFocusMonitor, _overlay) {
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
        this.iquiDropdownClass = null;
        // Holds references to registered event's event listeners
        this._eventListeners = {};
    }
    ngOnInit() {
        // Inject
        this._overlayRef = this._overlay.create();
        this._componentRef = this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__.ComponentPortal(DropdownComponent));
        // Prevent from blocking clicks on elements behind it while hidden
        this._overlayRef.overlayElement.style.pointerEvents = 'none';
        // Manage visibility (on focus of parent or drop-down, pr programmatic .toggle() call)
        // tslint:disable-next-line: max-line-length
        // (Updates drop-down visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the drop-down)
        let timeout = null, isFocused = false;
        this._componentFocusMonitor.monitor(this._element, true).subscribe(origin => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                // Update drop-down focus (visibility)
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = !!origin;
                // Allow toggle on click after a while
                isFocused = false;
                timeout = setTimeout(() => {
                    isFocused = !!origin;
                }, PROGRAMMATIC_TOGGLE_AFTER_FOCUS_TIMEOUT);
            });
        });
        this._dropdownFocusMonitor.monitor(this._componentRef.instance.element, true).subscribe(origin => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                // Update drop-down focus (visibility)
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = !!origin;
            });
        });
        this.toggle = (visible = null) => {
            if (isFocused) {
                // Toggle drop-down focus (visibility)
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = visible !== null ? visible : !this._componentRef.instance.focused;
                this._componentRef.instance.updateIfChangesDetected();
            }
        };
        // SAFARI WORKAROUND: work around missing focus events
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            // Manage visibility (on focus emulated via click)
            this._element.nativeElement.addEventListener('click', (this._eventListeners.click = () => {
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = true;
            }));
            // Manage visibility (on blur emulated via outside click)
            document.body.addEventListener('click', (this._eventListeners.bodyClick = e => {
                // Check if click inside component
                let el = e.target;
                while (el) {
                    if (el === this._element.nativeElement || el === this._componentRef.instance.element.nativeElement) {
                        return;
                    }
                    el = el.parentElement;
                }
                // Toggle focus off
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = false;
            }));
        }
        // Manage visibility (on hover)
        this._element.nativeElement.addEventListener('mouseenter', (this._eventListeners.mouseenter = () => {
            this._overlayRef.updatePosition();
            this._componentRef.instance.hovered = true;
        }));
        this._element.nativeElement.addEventListener('mouseleave', (this._eventListeners.mouseleave = () => {
            this._overlayRef.updatePosition();
            this._componentRef.instance.hovered = false;
        }));
    }
    ngAfterViewInit() {
        // Set properties
        this.ngOnChanges();
    }
    ngOnChanges() {
        // Update properties
        if (this._componentRef) {
            this._componentRef.instance.header = this.header;
            this._componentRef.instance.body = this.body;
            this._componentRef.instance.footer = this.footer;
            this._componentRef.instance.position = this.iquiDropdownPosition;
            this._componentRef.instance.showOnFocus = this.iquiDropdownShowOnFocus;
            this._componentRef.instance.showOnHover = this.iquiDropdownShowOnHover;
            this._componentRef.instance.class = this.iquiDropdownClass;
            this._componentRef.instance.updateIfChangesDetected();
        }
        // Update overlay scroll strategy
        if (this._overlayRef) {
            this._overlayRef.updateScrollStrategy(this._overlay.scrollStrategies.reposition());
        }
        // Update overlay position strategy
        if (this._overlayRef) {
            // Update strategy
            const positionStrategy = this._overlay
                .position()
                .flexibleConnectedTo(this._element)
                .withPush(this.iquiDropdownStayInViewport)
                .withPositions([
                // Selected, preferred position
                // tslint:disable-next-line: max-line-length
                ...(this.iquiDropdownPosition !== DropdownRelativePositioning.AUTO ? [_types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions[this.iquiDropdownPosition]] : []),
                // Remaining positions in preference order
                ..._types__WEBPACK_IMPORTED_MODULE_0__.RelativePositioningPriority.filter(key => key !== this.iquiDropdownPosition).map(key => _types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions[key]),
            ]);
            this._overlayRef.updatePositionStrategy(positionStrategy);
            // Watch for position changes
            positionStrategy.positionChanges.subscribe(positionChange => {
                // Update position property
                const position = Object.keys(_types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions).find(key => _types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions[key] === positionChange.connectionPair);
                this._componentRef.instance.position = position;
                this._componentRef.instance.position = position;
            });
        }
    }
    ngOnDestroy() {
        // Stop managing visibility (on focus)
        this._componentFocusMonitor.stopMonitoring(this._element);
        this._dropdownFocusMonitor.stopMonitoring(this._componentRef.instance.element);
        // Safari work around missing focus events
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            this._element.nativeElement.removeEventListener('click', this._eventListeners.click);
            document.body.removeEventListener('click', this._eventListeners.bodyClick);
        }
        // Stop managing visibility (on hover)
        this._element.nativeElement.removeEventListener('mouseenter', this._eventListeners.mouseenter);
        this._element.nativeElement.removeEventListener('mouseleave', this._eventListeners.mouseleave);
        // Destroy overlay
        this._overlayRef.dispose();
    }
}
DropdownDirective.ɵfac = function DropdownDirective_Factory(t) { return new (t || DropdownDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay)); };
DropdownDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DropdownDirective, selectors: [["", "iquiDropdown", ""]], contentQueries: function DropdownDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DropdownHeaderDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DropdownBodyDirective, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, DropdownFooterDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.body = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footer = _t.first);
    } }, inputs: { iquiDropdownPosition: "iquiDropdownPosition", iquiDropdownShowOnFocus: "iquiDropdownShowOnFocus", iquiDropdownShowOnHover: "iquiDropdownShowOnHover", iquiDropdownStayInViewport: "iquiDropdownStayInViewport", iquiDropdownClass: "iquiDropdownClass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
/**
 * Renders a drop-down (not to be used directly; should be instantiated/managed by the orchestrating [iquiTooltip] directive)
 *
 * Usage:
 *
 *  <iqui-dropdown</iqui-dropdown>
 *
 */
class DropdownComponent {
    constructor(element, _changeDetector) {
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
        this.class = null;
    }
    /**
     * Forces a component to (re)render if any of it's properties have changed
     */
    updateIfChangesDetected() {
        this._changeDetector.detectChanges();
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        // Ready values
        const position = this.position.split(' ');
        // Compose classes
        return [
            // Mark as dropdown (.dropdown)
            'dropdown',
            // Mark if has header/body/content
            this.header && this.header.template ? 'dropdown-has-header' : '',
            this.body && this.body.template ? 'dropdown-has-body' : '',
            this.footer && this.footer.template ? 'dropdown-has-footer' : '',
            // Mark if visible (.dropdown-visible/.dropdown-hidden)
            (this.showOnFocus && this.focused) || (this.showOnHover && this.hovered) ? 'dropdown-visible' : 'dropdown-hidden',
            this.showOnFocus && this.focused ? 'dropdown-visible-focus' : null,
            this.showOnHover && this.hovered ? 'dropdown-visible-hover' : null,
            // Choose positioning (.bs-dropdown-[position])
            this.position !== 'auto' ? `bs-dropdown-${this.position.split(' ')[0]}` : null,
            // Choose precise positioning (.bs-dropdown-[position]-[alignment])
            this.position !== 'auto' ? `bs-dropdown-${position.length === 1 ? `${position[0]}-center` : position.join('-')}` : null,
            // Inject custom class
            this.class,
        ].join(' ');
    }
    /**
     * Close drop-down function factory
     */
    _createClose() {
        return () => {
            // Close dropdown
            this.focused = false;
        };
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DropdownComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["iqui-dropdown"]], decls: 8, vars: 14, consts: [["tabindex", "-1", 1, "dropdown-menu", "dropdown-menu-dark", "p-0"], [1, "dropdown-header-container"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "dropdown-body-container"], [1, "dropdown-footer-container"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DropdownComponent_ng_container_3_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DropdownComponent_ng_container_5_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DropdownComponent_ng_container_7_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.header == null ? null : ctx.header.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx._createClose()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.body == null ? null : ctx.body.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx._createClose()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx.footer == null ? null : ctx.footer.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx._createClose()));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet], styles: ["[_nghost-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n  position: unset;\n  pointer-events: none;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .dropdown.dropdown-visible[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%] {\n  position: relative;\n  top: unset;\n  bottom: unset;\n  left: unset;\n  right: unset;\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-header-container[_ngcontent-%COMP%] {\n  flex: 0;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-body-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n[_nghost-%COMP%]   .dropdown[_ngcontent-%COMP%]    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown-footer-container[_ngcontent-%COMP%] {\n  flex: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFDTjtBQUVJO0VBRUUsa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFGTjtBQUlNO0VBQ0UsT0FBQTtBQUZSO0FBSU07RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlNO0VBQ0UsT0FBQTtBQUZSIiwiZmlsZSI6InN0eWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAuZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5kcm9wZG93bi12aXNpYmxlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgICYgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgICAvLyBSZXNldCBkZWZhdWx0IGJvb3RzdHJhcCBkcm9wLWRvd24gcG9zaXRpb25pbmdcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogdW5zZXQ7XG4gICAgICBib3R0b206IHVuc2V0O1xuICAgICAgbGVmdDogdW5zZXQ7XG4gICAgICByaWdodDogdW5zZXQ7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbWF4LWhlaWdodDogMTAwdmg7XG5cbiAgICAgICYgPiAuZHJvcGRvd24taGVhZGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDA7XG4gICAgICB9XG4gICAgICAmID4gLmRyb3Bkb3duLWJvZHktY29udGFpbmVyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIH1cbiAgICAgICYgPiAuZHJvcGRvd24tZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9737:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeclareDirective": () => (/* reexport safe */ _declare__WEBPACK_IMPORTED_MODULE_0__.DeclareDirective),
/* harmony export */   "Copy2ClipboardDirective": () => (/* reexport safe */ _copy2clipboard__WEBPACK_IMPORTED_MODULE_1__.Copy2ClipboardDirective),
/* harmony export */   "TooltipComponent": () => (/* reexport safe */ _tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipComponent),
/* harmony export */   "TooltipDirective": () => (/* reexport safe */ _tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipDirective),
/* harmony export */   "TooltipRelativePositioning": () => (/* reexport safe */ _tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipRelativePositioning),
/* harmony export */   "DropdownComponent": () => (/* reexport safe */ _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownComponent),
/* harmony export */   "DropdownDirective": () => (/* reexport safe */ _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownDirective),
/* harmony export */   "DropdownHeaderDirective": () => (/* reexport safe */ _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownHeaderDirective),
/* harmony export */   "DropdownBodyDirective": () => (/* reexport safe */ _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownBodyDirective),
/* harmony export */   "DropdownFooterDirective": () => (/* reexport safe */ _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownFooterDirective),
/* harmony export */   "DropdownRelativePositioning": () => (/* reexport safe */ _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownRelativePositioning),
/* harmony export */   "CollapseDirective": () => (/* reexport safe */ _collapse__WEBPACK_IMPORTED_MODULE_4__.CollapseDirective),
/* harmony export */   "ToastComponent": () => (/* reexport safe */ _toast__WEBPACK_IMPORTED_MODULE_5__.ToastComponent),
/* harmony export */   "ModalComponent": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_6__.ModalComponent),
/* harmony export */   "ModalDirective": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_6__.ModalDirective),
/* harmony export */   "ModalDialogDirective": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_6__.ModalDialogDirective),
/* harmony export */   "BookmarkableDirective": () => (/* reexport safe */ _bookmarkable__WEBPACK_IMPORTED_MODULE_7__.BookmarkableDirective),
/* harmony export */   "BookmarkableService": () => (/* reexport safe */ _bookmarkable__WEBPACK_IMPORTED_MODULE_7__.BookmarkableService),
/* harmony export */   "FunctionalModule": () => (/* binding */ FunctionalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _declare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./declare */ 6946);
/* harmony import */ var _copy2clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy2clipboard */ 1715);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip */ 1132);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dropdown */ 2717);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collapse */ 8156);
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toast */ 851);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ 5676);
/* harmony import */ var _bookmarkable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bookmarkable */ 5450);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);


// Import components and (re)export components

















/**
 * IQ UI NGX Elements' Functional elements module
 * Implements functional directives that augment behavior of their parent element or component
 */
class FunctionalModule {
}
FunctionalModule.ɵfac = function FunctionalModule_Factory(t) { return new (t || FunctionalModule)(); };
FunctionalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: FunctionalModule });
FunctionalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule], 
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        // Export dependency modules
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](FunctionalModule, { declarations: [_declare__WEBPACK_IMPORTED_MODULE_0__.DeclareDirective,
        _copy2clipboard__WEBPACK_IMPORTED_MODULE_1__.Copy2ClipboardDirective,
        _tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipComponent,
        _tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownComponent,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownHeaderDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownBodyDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownFooterDirective,
        _collapse__WEBPACK_IMPORTED_MODULE_4__.CollapseDirective,
        _toast__WEBPACK_IMPORTED_MODULE_5__.ToastComponent,
        _modal__WEBPACK_IMPORTED_MODULE_6__.ModalComponent,
        _modal__WEBPACK_IMPORTED_MODULE_6__.ModalDirective,
        _modal__WEBPACK_IMPORTED_MODULE_6__.ModalDialogDirective,
        _bookmarkable__WEBPACK_IMPORTED_MODULE_7__.BookmarkableDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule], exports: [
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        // Export dependency modules
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_10__.OverlayModule,
        // Export child components
        _declare__WEBPACK_IMPORTED_MODULE_0__.DeclareDirective,
        _copy2clipboard__WEBPACK_IMPORTED_MODULE_1__.Copy2ClipboardDirective,
        _tooltip__WEBPACK_IMPORTED_MODULE_2__.TooltipDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownHeaderDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownBodyDirective,
        _dropdown__WEBPACK_IMPORTED_MODULE_3__.DropdownFooterDirective,
        _collapse__WEBPACK_IMPORTED_MODULE_4__.CollapseDirective,
        _toast__WEBPACK_IMPORTED_MODULE_5__.ToastComponent,
        _modal__WEBPACK_IMPORTED_MODULE_6__.ModalComponent,
        _modal__WEBPACK_IMPORTED_MODULE_6__.ModalDirective,
        _modal__WEBPACK_IMPORTED_MODULE_6__.ModalDialogDirective,
        _bookmarkable__WEBPACK_IMPORTED_MODULE_7__.BookmarkableDirective] }); })();


/***/ }),

/***/ 2614:
/*!**********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/modal/_showcase/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalShowcaseComponent": () => (/* binding */ ModalShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
// Import modules







// Showcase component
class ModalShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_2__.CodeModule];
        // Modal context
        this.context = {
            Visible: [true, false],
            HeaderHtml: 'This is a modal',
            ContentHtml: '... a real, real modal!',
            OverlayShow: [true, false],
            CloseOnEscape: [true, false],
        };
    }
}
ModalShowcaseComponent.ɵfac = function ModalShowcaseComponent_Factory(t) { return new (t || ModalShowcaseComponent)(); };
ModalShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ModalShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function ModalShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Basic Modal Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\nDisplays a modal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\n    <iqui-button [size]=\"'sm'\"\n                 (click)=\"modal.show()\">\n      Show modal programmatically!\n    </iqui-button>\n\n    <iqui-modal #modal\n                [(visible)]=\"context.Visible\"\n                [closeOnOverlay]=\"context.CloseOnOverlay\"\n                [closeOnEscape]=\"context.CloseOnEscape\">\n\n      <div class=\"modal fade show\">\n        <div class=\"modal-dialog modal-dialog-centered\">\n          <div class=\"modal-content\">\n\n            <div class=\"modal-header\"\n                 [innerHtml]=\"context.HeaderHtml\"></div>\n\n            <div class=\"modal-body\"\n                 [innerHtml]=\"context.ContentHtml\"></div>\n\n            <div class=\"modal-footer\">\n              <iqui-button [size]=\"'sm'\"\n                           (click)=\"modal.hide()\">\n                Hide modal programmatically!\n              </iqui-button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </iqui-modal>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_5__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_3__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 4826:
/*!******************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/modal/directives/dialog/index.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDialogDirective": () => (/* binding */ ModalDialogDirective)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 5618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
class ModalDialogDirective {
    constructor(_element, _dispatcher) {
        this._element = _element;
        this._dispatcher = _dispatcher;
    }
    ngOnInit() {
        // Capture in-modal "keydown" event
        this._element.nativeElement.addEventListener('keydown', this.handleKeyDown.bind(this));
        // Capture body "keydown" event
        document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    ngOnDestroy() {
        // Unsubscribe body "keydown" event
        document.body.removeEventListener('keydown', this.handleKeyDown);
    }
    /**
     * Handles "keydown" event
     */
    handleKeyDown(e) {
        if (e.keyCode === 27) {
            this._dispatcher.modalCloseRequested.emit(___WEBPACK_IMPORTED_MODULE_0__.ModalCloseRequestedReason.EscapePressed);
        }
    }
}
ModalDialogDirective.ɵfac = function ModalDialogDirective_Factory(t) { return new (t || ModalDialogDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](___WEBPACK_IMPORTED_MODULE_0__.ModelEventDispatcher)); };
ModalDialogDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ModalDialogDirective, selectors: [["", 8, "modal-dialog"]] });


/***/ }),

/***/ 5618:
/*!***********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/modal/directives/index.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCloseRequestedReason": () => (/* binding */ ModalCloseRequestedReason),
/* harmony export */   "ModelEventDispatcher": () => (/* binding */ ModelEventDispatcher)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
// Modal event dispatcher
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
class ModelEventDispatcher {
    constructor() {
        /**
         * Modal close requested event
         */
        this.modalCloseRequested = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
}
ModelEventDispatcher.ɵfac = function ModelEventDispatcher_Factory(t) { return new (t || ModelEventDispatcher)(); };
ModelEventDispatcher.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelEventDispatcher, factory: ModelEventDispatcher.ɵfac });


/***/ }),

/***/ 3657:
/*!*****************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/modal/directives/modal/index.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDirective": () => (/* binding */ ModalDirective)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 5618);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



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
class ModalDirective {
    constructor(_element, _dispatcher) {
        this._element = _element;
        this._dispatcher = _dispatcher;
    }
    ngOnInit() {
        // Capture overlay "click" event
        this._element.nativeElement.addEventListener('click', e => {
            if (e.target === this._element.nativeElement) {
                this._dispatcher.modalCloseRequested.emit(___WEBPACK_IMPORTED_MODULE_0__.ModalCloseRequestedReason.OverlayClicked);
            }
        });
    }
}
ModalDirective.ɵfac = function ModalDirective_Factory(t) { return new (t || ModalDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](___WEBPACK_IMPORTED_MODULE_0__.ModelEventDispatcher)); };
ModalDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ModalDirective, selectors: [["", 8, "modal"]] });


/***/ }),

/***/ 5676:
/*!************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/modal/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDirective": () => (/* reexport safe */ _directives_modal__WEBPACK_IMPORTED_MODULE_1__.ModalDirective),
/* harmony export */   "ModalDialogDirective": () => (/* reexport safe */ _directives_dialog__WEBPACK_IMPORTED_MODULE_2__.ModalDialogDirective),
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives */ 5618);
/* harmony import */ var _directives_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/modal */ 3657);
/* harmony import */ var _directives_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/dialog */ 4826);
// Modal component
// ----------------------------------------------------------------------------
// Import dependencies



// Import and (re)export child directives






const _c0 = ["content"];
function ModalComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](0);
} }
const _c1 = ["*"];


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
class ModalComponent {
    constructor(_overlay, _viewContainerRef, _dispatcher) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this._dispatcher = _dispatcher;
        /**
         * If modal is displayed or not (two-way bound)
         */
        this.visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    ngAfterViewInit() {
        // Configure
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayConfig();
        overlayConfig.hasBackdrop = true;
        overlayConfig.panelClass = ['iqui-modal-container'];
        overlayConfig.backdropClass = ['modal-backdrop', 'fade', 'show'];
        // Inject
        this._overlayRef = this._overlay.create(overlayConfig);
        this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.TemplatePortal(this.content, this._viewContainerRef));
        // Update overlay position strategy
        if (this._overlayRef) {
            const positionStrategy = this._overlay.position().global().centerHorizontally().centerVertically();
            this._overlayRef.updatePositionStrategy(positionStrategy);
        }
        // Process queued changes
        for (const changes of this._queuedChanges) {
            this.ngOnChanges(changes);
        }
        // Subscribe to dispatched events
        this._dispatcherSubscriptions.push(this._dispatcher.modalCloseRequested.subscribe((reason) => {
            // Check if closing on overlay click
            if (reason === _directives__WEBPACK_IMPORTED_MODULE_0__.ModalCloseRequestedReason.OverlayClicked && this.closeOnOverlay) {
                this.hide();
            }
            // Check if closing on escape keypress
            if (reason === _directives__WEBPACK_IMPORTED_MODULE_0__.ModalCloseRequestedReason.EscapePressed && this.closeOnEscape) {
                this.hide();
            }
        }));
    }
    ngOnChanges(changes) {
        // Check if already initialized
        if (this._overlayRef) {
            // Process changes to modal shown
            if (changes.visible) {
                if (changes.visible.currentValue) {
                    // Open modal
                    this.show();
                }
                else {
                    // Close modal
                    this.hide();
                }
            }
        }
        else {
            // Queue changes for later processing
            this._queuedChanges.push(changes);
        }
    }
    ngOnDestroy() {
        // Close previous dialog, if shown
        this.hide();
        // Destroy overlay
        this._overlayRef.dispose();
        // Destroy dispatched subscriptions
        for (const subscription of this._dispatcherSubscriptions) {
            subscription.unsubscribe();
        }
    }
    /**
     * Shows modal
     */
    show() {
        if (!this._isShown && this._overlayRef) {
            // Set visible
            this._overlayRef.backdropElement.classList.add('modal-visible');
            this._overlayRef.hostElement.classList.add('modal-visible');
            // Trigger change
            this._isShown = true;
            this.visibleChange.emit(true);
        }
    }
    /**
     * Hides modal
     */
    hide() {
        if (this._isShown && this._overlayRef) {
            // Set not visible
            this._overlayRef.backdropElement.classList.remove('modal-visible');
            this._overlayRef.hostElement.classList.remove('modal-visible');
            // Trigger change
            this._isShown = false;
            this.visibleChange.emit(false);
        }
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_directives__WEBPACK_IMPORTED_MODULE_0__.ModelEventDispatcher)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["iqui-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { visible: "visible", closeOnOverlay: "closeOnOverlay", closeOnEscape: "closeOnEscape" }, outputs: { visibleChange: "visibleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{ provide: _directives__WEBPACK_IMPORTED_MODULE_0__.ModelEventDispatcher, useValue: new _directives__WEBPACK_IMPORTED_MODULE_0__.ModelEventDispatcher() }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["content", ""]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ModalComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } }, styles: [".modal-backdrop + .cdk-global-overlay-wrapper,   .modal-backdrop + .cdk-global-overlay-wrapper > .iqui-modal-container {\n  z-index: unset !important;\n}\n  .modal-backdrop:not(.modal-visible) {\n  opacity: 0 !important;\n  pointer-events: none;\n}\n  .modal-backdrop + .cdk-global-overlay-wrapper:not(.modal-visible) > .iqui-modal-container > * {\n  display: none;\n}\n  .modal-backdrop + .cdk-global-overlay-wrapper.modal-visible > .iqui-modal-container > * {\n  display: block;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUseUJBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFJRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5tb2RhbC1iYWNrZHJvcCArIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcixcbiAgLm1vZGFsLWJhY2tkcm9wICsgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyID4gLmlxdWktbW9kYWwtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1vZGFsLWJhY2tkcm9wOm5vdCgubW9kYWwtdmlzaWJsZSkge1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5tb2RhbC1iYWNrZHJvcCArIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcjpub3QoLm1vZGFsLXZpc2libGUpID4gLmlxdWktbW9kYWwtY29udGFpbmVyID4gKiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubW9kYWwtYmFja2Ryb3AgKyAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIubW9kYWwtdmlzaWJsZSA+IC5pcXVpLW1vZGFsLWNvbnRhaW5lciA+ICoge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6999:
/*!**********************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/toast/_showcase/index.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastShowcaseComponent": () => (/* binding */ ToastShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 851);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);

// Import modules







// Showcase component
class ToastShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_1__.FunctionalModule, _basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule];
        // Toast context
        this.context = {
            Visible: [true, false],
            Position: Object.values(___WEBPACK_IMPORTED_MODULE_0__.ToastRelativePositioning),
            HeaderHtml: 'This is a toast',
            ContentHtml: '... a real, real toast!',
        };
    }
}
ToastShowcaseComponent.ɵfac = function ToastShowcaseComponent_Factory(t) { return new (t || ToastShowcaseComponent)(); };
ToastShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: ToastShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function ToastShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Basic Toast Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\nDisplays a toast ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    <iqui-button [size]=\"'sm'\"\n                 (click)=\"toast.show()\">\n      Show toast programmatically!\n    </iqui-button>\n\n    <iqui-toast #toast\n                [(visible)]=\"context.Visible\"\n                [position]=\"context.Position\">\n\n      <div class=\"toast\">\n        <div class=\"toast-header\">\n          <strong class=\"mr-auto\"\n            [innerHtml]=\"context.HeaderHtml\"></strong>\n        </div>\n        <div class=\"toast-body\"\n                 [innerHtml]=\"context.ContentHtml\"></div>\n        <iqui-button [size]=\"'sm'\"\n          (click)=\"toast.hide()\">\n            Hide toast programmatically!\n        </iqui-button>\n      </div>\n\n    </iqui-toast>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 851:
/*!************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/toast/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastRelativePositioning": () => (/* binding */ ToastRelativePositioning),
/* harmony export */   "ToastComponent": () => (/* binding */ ToastComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types */ 4256);
// Toast component
// ----------------------------------------------------------------------------
// Import dependencies






const _c0 = ["content"];
function ToastComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
const _c1 = ["*"];
// Define and export types
/*
 * Tooltip preferred positions enum
 */
// tslint:disable-next-line: variable-name
const ToastRelativePositioning = Object.assign({ AUTO: 'auto' }, _types__WEBPACK_IMPORTED_MODULE_0__.BootstrapRelativePositioning);
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
class ToastComponent {
    constructor(_overlay, _viewContainerRef) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        /**
         * If modal is displayed or not (two-way bound)
         */
        this.visible = false;
        this.visibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
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
    ngAfterViewInit() {
        // Configure
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.OverlayConfig();
        overlayConfig.hasBackdrop = false;
        overlayConfig.panelClass = ['iqui-toast-container'];
        // Inject
        this._overlayRef = this._overlay.create(overlayConfig);
        this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.TemplatePortal(this.content, this._viewContainerRef));
        // Process queued changes
        for (const changes of this._queuedChanges) {
            this.ngOnChanges(changes);
        }
    }
    ngOnChanges(changes) {
        // Check if already initialized
        if (this._overlayRef) {
            // Update overlay position strategy
            if (this._overlayRef) {
                const positionStrategy = this._overlay.position().global();
                if (this.position === ToastRelativePositioning.AUTO) {
                    positionStrategy.centerHorizontally();
                    positionStrategy.centerVertically();
                }
                else {
                    if (this.position.indexOf('left') !== -1) {
                        positionStrategy.left();
                    }
                    else if (this.position.indexOf('right') !== -1) {
                        positionStrategy.right();
                    }
                    else {
                        positionStrategy.centerHorizontally();
                    }
                    if (this.position.indexOf('top') !== -1) {
                        positionStrategy.top();
                    }
                    else if (this.position.indexOf('bottom') !== -1) {
                        positionStrategy.bottom();
                    }
                    else {
                        positionStrategy.centerVertically();
                    }
                }
                this._overlayRef.updatePositionStrategy(positionStrategy);
            }
            // Process changes to modal shown
            if (changes.visible) {
                if (changes.visible.currentValue) {
                    // Open modal
                    this.show();
                }
                else {
                    // Close modal
                    this.hide();
                }
            }
        }
        else {
            // Queue changes for later processing
            this._queuedChanges.push(changes);
        }
    }
    ngOnDestroy() {
        // Close previous dialog, if shown
        this.hide();
        // Destroy overlay
        this._overlayRef.dispose();
        // Destroy dispatched subscriptions
        for (const subscription of this._dispatcherSubscriptions) {
            subscription.unsubscribe();
        }
    }
    /**
     * Shows modal
     */
    show() {
        if (!this._isShown && this._overlayRef) {
            // Set visible
            this._overlayRef.overlayElement.classList.add('toast-visible');
            // Trigger change
            this._isShown = true;
            this.visibleChange.emit(true);
        }
    }
    /**
     * Hides modal
     */
    hide() {
        if (this._isShown && this._overlayRef) {
            // Set not visible
            this._overlayRef.overlayElement.classList.remove('toast-visible');
            // Trigger change
            this._isShown = false;
            this.visibleChange.emit(false);
        }
    }
}
ToastComponent.ɵfac = function ToastComponent_Factory(t) { return new (t || ToastComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef)); };
ToastComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ToastComponent, selectors: [["iqui-toast"]], viewQuery: function ToastComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { visible: "visible", position: "position" }, outputs: { visibleChange: "visibleChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["content", ""]], template: function ToastComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ToastComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, styles: [".cdk-global-overlay-wrapper,   .cdk-global-overlay-wrapper > .iqui-toast-container {\n  z-index: unset !important;\n}\n  .cdk-global-overlay-wrapper > .iqui-toast-container:not(.toast-visible) {\n  opacity: 0 !important;\n  pointer-events: none;\n}\n  .cdk-global-overlay-wrapper > .iqui-toast-container:not(.toast-visible) > * {\n  display: none;\n}\n  .cdk-global-overlay-wrapper > .iqui-toast-container.toast-visible > * {\n  display: block;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7O0VBRUUseUJBQUE7QUFBSjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxvQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0FBRko7QUFJRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0FBRkoiLCJmaWxlIjoic3R5bGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCB7XG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlcixcbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyID4gLmlxdWktdG9hc3QtY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiB1bnNldCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyID4gLmlxdWktdG9hc3QtY29udGFpbmVyOm5vdCgudG9hc3QtdmlzaWJsZSkge1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciA+IC5pcXVpLXRvYXN0LWNvbnRhaW5lcjpub3QoLnRvYXN0LXZpc2libGUpID4gKiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIgPiAuaXF1aS10b2FzdC1jb250YWluZXIudG9hc3QtdmlzaWJsZSA+ICoge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 1824:
/*!************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/tooltip/_showcase/index.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipShowcaseComponent": () => (/* binding */ TooltipShowcaseComponent)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ 1132);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../showcasing/playground/index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);

// Import modules







// Showcase component
class TooltipShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.modules = [___WEBPACK_IMPORTED_MODULE_1__.FunctionalModule, _basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule];
        // Playground context
        this.context = {
            ContentText: 'Tooltip content',
            Position: Object.values(___WEBPACK_IMPORTED_MODULE_0__.TooltipRelativePositioning),
            ShowOnFocus: [true, false],
            ShowOnHover: [true, false],
            StayInViewport: [true, false],
            CustomClass: 'custom-class',
        };
    }
}
TooltipShowcaseComponent.ɵfac = function TooltipShowcaseComponent_Factory(t) { return new (t || TooltipShowcaseComponent)(); };
TooltipShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TooltipShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 3, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function TooltipShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Basic Tooltip Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\nDisplays a tooltip HTML component ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\n    <iqui-button\n      theme=\"light\"\n      [iquiTooltip]=\"               context.ContentText\"\n      [iquiTooltipPosition]=\"       context.Position\"\n      [iquiTooltipShowOnFocus]=\"    context.ShowOnFocus\"\n      [iquiTooltipShowOnHover]=\"    context.ShowOnHover\"\n      [iquiTooltipStayInViewport]=\" context.StayInViewport\"\n      [iquiTooltipClass]=\"          context.CustomClass\">\n\n      Button with a Tooltip\n\n    </iqui-button>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "Demo")("modules", ctx.modules)("context", ctx.context);
    } }, directives: [_showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_5__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective, _showcasing_playground_index__WEBPACK_IMPORTED_MODULE_4__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 1132:
/*!**************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/functional/tooltip/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TooltipRelativePositioning": () => (/* binding */ TooltipRelativePositioning),
/* harmony export */   "TooltipDirective": () => (/* binding */ TooltipDirective),
/* harmony export */   "TooltipComponent": () => (/* binding */ TooltipComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../types */ 4256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);





const _c0 = ["*"];
// Define and export types
/*
 * Tooltip preferred positions enum
 */
// tslint:disable-next-line: variable-name
const TooltipRelativePositioning = Object.assign({ AUTO: 'auto' }, _types__WEBPACK_IMPORTED_MODULE_0__.BootstrapRelativePositioning);
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
class TooltipDirective {
    constructor(_element, _componentFocusMonitor, _tooltipFocusMonitor, _overlay) {
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
        this.iquiTooltipClass = null;
        // Holds references to registered event's event listeners
        this._eventListeners = {};
    }
    ngOnInit() {
        // Inject
        this._overlayRef = this._overlay.create();
        this._componentRef = this._overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__.ComponentPortal(TooltipComponent));
        // Prevent from blocking clicks on elements behind it while hidden
        this._overlayRef.overlayElement.style.pointerEvents = 'none';
        // Set properties
        this.ngOnChanges();
        // Manage visibility (on focus of parent or tooltip)
        // tslint:disable-next-line: max-line-length
        // (Updates tooltip visibility after a cancelable setTimeout to allow loss and (re)gain of focus on same tick without closing the tooltip)
        let timeout = null;
        this._componentFocusMonitor.monitor(this._element, true).subscribe(origin => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = !!origin;
            });
        });
        this._tooltipFocusMonitor.monitor(this._componentRef.instance.element, true).subscribe(origin => {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(() => {
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = !!origin;
            });
        });
        // SAFARI WORKAROUND: work around missing focus events
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            // Manage visibility (on focus emulated via click)
            this._element.nativeElement.addEventListener('click', (this._eventListeners.click = () => {
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = true;
            }));
            // Manage visibility (on blur emulated via outside click)
            document.body.addEventListener('click', (this._eventListeners.bodyClick = e => {
                // Check if click inside component
                let el = e.target;
                while (el) {
                    if (el === this._element.nativeElement || el === this._componentRef.instance.element.nativeElement) {
                        return;
                    }
                    el = el.parentElement;
                }
                // Toggle focus off
                this._overlayRef.updatePosition();
                this._componentRef.instance.focused = false;
            }));
        }
        // Manage visibility (on hover)
        this._element.nativeElement.addEventListener('mouseenter', (this._eventListeners.mouseenter = () => {
            this._overlayRef.updatePosition();
            this._componentRef.instance.hovered = true;
        }));
        this._element.nativeElement.addEventListener('mouseleave', (this._eventListeners.mouseleave = () => {
            this._overlayRef.updatePosition();
            this._componentRef.instance.hovered = false;
        }));
    }
    ngOnChanges() {
        // Update properties
        if (this._componentRef) {
            this._componentRef.instance.content = this.iquiTooltip;
            this._componentRef.instance.position = this.iquiTooltipPosition;
            this._componentRef.instance.showOnFocus = this.iquiTooltipShowOnFocus;
            this._componentRef.instance.showOnHover = this.iquiTooltipShowOnHover;
            this._componentRef.instance.class = this.iquiTooltipClass;
            this._componentRef.instance.updateIfChangesDetected();
        }
        // Update overlay scroll strategy
        if (this._overlayRef) {
            this._overlayRef.updateScrollStrategy(this._overlay.scrollStrategies.reposition());
        }
        // Update overlay position strategy
        if (this._overlayRef) {
            // Update strategy
            const positionStrategy = this._overlay
                .position()
                .flexibleConnectedTo(this._element)
                .withPush(this.iquiTooltipStayInViewport)
                .withPositions([
                // Selected, preferred position
                // tslint:disable-next-line: max-line-length
                ...(this.iquiTooltipPosition !== TooltipRelativePositioning.AUTO ? [_types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions[this.iquiTooltipPosition]] : []),
                // Remaining positions in preference order
                ..._types__WEBPACK_IMPORTED_MODULE_0__.RelativePositioningPriority.filter(key => key !== this.iquiTooltipPosition).map(key => _types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions[key]),
            ]);
            this._overlayRef.updatePositionStrategy(positionStrategy);
            // Watch for position changes
            positionStrategy.positionChanges.subscribe(positionChange => {
                // Update position property
                const position = Object.keys(_types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions).find(key => _types__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions[key] === positionChange.connectionPair);
                this._componentRef.instance.position = position;
                this._componentRef.instance.position = position;
            });
        }
    }
    ngOnDestroy() {
        // Stop managing visibility (on focus)
        this._componentFocusMonitor.stopMonitoring(this._element);
        this._tooltipFocusMonitor.stopMonitoring(this._componentRef.instance.element);
        // Safari work around missing focus events
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            this._element.nativeElement.removeEventListener('click', this._eventListeners.click);
            document.body.removeEventListener('click', this._eventListeners.bodyClick);
        }
        // Stop managing visibility (on hover)
        this._element.nativeElement.removeEventListener('mouseenter', this._eventListeners.mouseenter);
        this._element.nativeElement.removeEventListener('mouseleave', this._eventListeners.mouseleave);
        // Destroy overlay
        this._overlayRef.dispose();
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay)); };
TooltipDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "iquiTooltip", ""]], inputs: { iquiTooltip: "iquiTooltip", iquiTooltipPosition: "iquiTooltipPosition", iquiTooltipShowOnFocus: "iquiTooltipShowOnFocus", iquiTooltipShowOnHover: "iquiTooltipShowOnHover", iquiTooltipStayInViewport: "iquiTooltipStayInViewport", iquiTooltipClass: "iquiTooltipClass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
/**
 * Renders a tooltip (not to be used directly; should be instantiated/managed by the orchestrating [iquiTooltip] directive)
 *
 * Usage:
 *
 *  <iqui-tooltip></iqui-tooltip>
 *
 */
class TooltipComponent {
    constructor(element, _changeDetector) {
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
        this.class = null;
    }
    /**
     * Forces a component to (re)render if any of it's properties have changed
     */
    updateIfChangesDetected() {
        this._changeDetector.detectChanges();
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        // Ready values
        const position = this.position.split(' ');
        // Compose classes
        return [
            // Mark as tooltip (.tooltip)
            'tooltip',
            // Mark if visible (.tooltip-visible/.tooltip-hidden)
            (this.showOnFocus && this.focused) || (this.showOnHover && this.hovered) ? 'tooltip-visible' : 'tooltip-hidden',
            this.showOnFocus && this.focused ? 'tooltip-visible-focus' : null,
            this.showOnHover && this.hovered ? 'tooltip-visible-hover' : null,
            // Choose positioning (.bs-tooltip-[position])
            this.position !== 'auto' ? `bs-tooltip-${this.position.split(' ')[0]}` : null,
            // Choose precise positioning (.bs-tooltip-[position]-[alignment])
            this.position !== 'auto' ? `bs-tooltip-${position.length === 1 ? `${position[0]}-center` : position.join('-')}` : null,
            // Inject custom class
            this.class,
        ].join(' ');
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
TooltipComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["iqui-tooltip"]], ngContentSelectors: _c0, decls: 4, vars: 3, consts: [["tabindex", "-1", 1, "tooltip-inner"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  position: unset;\n  pointer-events: none;\n  opacity: 0;\n}\n[_nghost-%COMP%]   .tooltip.tooltip-visible[_ngcontent-%COMP%] {\n  pointer-events: all;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDRSxtQkFBQTtFQUNBLFVBQUE7QUFDTiIsImZpbGUiOiJzdHlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgLnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiB1bnNldDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi50b29sdGlwLXZpc2libGUge1xuICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4040:
/*!**********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/showcasing/_showcase.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundShowcaseComponent": () => (/* reexport safe */ _playground_showcase__WEBPACK_IMPORTED_MODULE_2__.PlaygroundShowcaseComponent),
/* harmony export */   "ShowcasingShowcaseModule": () => (/* binding */ ShowcasingShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ 1834);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code */ 800);
/* harmony import */ var _playground_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground/_showcase */ 8963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules


// Import showcase components



// IQ UI NGX Elements' Showcasing module
class ShowcasingShowcaseModule {
}
ShowcasingShowcaseModule.ɵfac = function ShowcasingShowcaseModule_Factory(t) { return new (t || ShowcasingShowcaseModule)(); };
ShowcasingShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShowcasingShowcaseModule });
ShowcasingShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, ___WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule], 
        // Export dependency modules
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        ___WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShowcasingShowcaseModule, { declarations: [_playground_showcase__WEBPACK_IMPORTED_MODULE_2__.PlaygroundShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, ___WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule], exports: [
        // Export dependency modules
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        ___WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule,
        // Export child components
        _playground_showcase__WEBPACK_IMPORTED_MODULE_2__.PlaygroundShowcaseComponent] }); })();


/***/ }),

/***/ 1834:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/showcasing/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundComponent": () => (/* reexport safe */ _playground__WEBPACK_IMPORTED_MODULE_2__.PlaygroundComponent),
/* harmony export */   "PlaygroundTextareaDirective": () => (/* reexport safe */ _playground__WEBPACK_IMPORTED_MODULE_2__.PlaygroundTextareaDirective),
/* harmony export */   "ShowcasingModule": () => (/* binding */ ShowcasingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form */ 5566);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../code */ 800);
/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground */ 426);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules


// Import components and (re)export components



/**
 * IQ UI NGX Elements' showcasing module
 * Implements helpful utilities for building showcase applications
 */
class ShowcasingModule {
}
ShowcasingModule.ɵfac = function ShowcasingModule_Factory(t) { return new (t || ShowcasingModule)(); };
ShowcasingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ShowcasingModule });
ShowcasingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _form__WEBPACK_IMPORTED_MODULE_0__.FormModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule], 
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // Export dependency modules
        _form__WEBPACK_IMPORTED_MODULE_0__.FormModule,
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ShowcasingModule, { declarations: [_playground__WEBPACK_IMPORTED_MODULE_2__.PlaygroundComponent, _playground__WEBPACK_IMPORTED_MODULE_2__.PlaygroundTextareaDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _form__WEBPACK_IMPORTED_MODULE_0__.FormModule, _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule], exports: [
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        // Export dependency modules
        _form__WEBPACK_IMPORTED_MODULE_0__.FormModule,
        _code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        // Export child components
        _playground__WEBPACK_IMPORTED_MODULE_2__.PlaygroundComponent,
        _playground__WEBPACK_IMPORTED_MODULE_2__.PlaygroundTextareaDirective] }); })();


/***/ }),

/***/ 8963:
/*!***************************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/showcasing/playground/_showcase/index.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundShowcaseComponent": () => (/* binding */ PlaygroundShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../functional */ 9737);
/* harmony import */ var _basics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../basics */ 2986);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../form */ 5566);
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../code */ 800);
/* harmony import */ var _showcasing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../showcasing */ 1834);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ 426);
/* harmony import */ var _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../form/directives/textarea/index */ 485);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../code/highlight-js/index */ 7911);
// Import modules









const _c0 = function (a0, a1) { return [a0, a1]; };
// Showcase component
class PlaygroundShowcaseComponent {
    constructor() {
        // Expose modules needed to render syntax
        this.CodeModule = _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule;
        this.ShowcasingModule = _showcasing__WEBPACK_IMPORTED_MODULE_4__.ShowcasingModule;
        // Playground context
        this.context = {
            Title: 'Demo in a Demo',
            Class: '',
            NgClass: {},
            Syntax: '<div [class]="context.class"> I do declare: "{{context.message}}" </div>',
            Context: {
                class: 'card p-3',
                message: 'HelloWorld!',
            },
            Module: [_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule, _basics__WEBPACK_IMPORTED_MODULE_1__.BasicsModule, _form__WEBPACK_IMPORTED_MODULE_2__.FormModule, _code__WEBPACK_IMPORTED_MODULE_3__.CodeModule, _showcasing__WEBPACK_IMPORTED_MODULE_4__.ShowcasingModule],
        };
    }
}
PlaygroundShowcaseComponent.ɵfac = function PlaygroundShowcaseComponent_Factory(t) { return new (t || PlaygroundShowcaseComponent)(); };
PlaygroundShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlaygroundShowcaseComponent, selectors: [["ng-component"]], decls: 6, vars: 6, consts: [[1, "mt-5", 3, "title", "modules", "context"]], template: function PlaygroundShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Playground component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\nProvides an interactive playground for a component or just-any-old-code example. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "iqui-playground", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdisableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\n    <iqui-playground\n      [title]=\"   context.Title\"\n      [class]=\"   context.Class\"\n      [ngClass]=\" context.NgClass\"\n      [modules]=\"[context.Module]\"\n      [context]=\" context.Context\"\n      [syntax]=\"  context.Syntax\">\n    </iqui-playground>\n\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵenableBindings"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Demo")("modules", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](3, _c0, ctx.CodeModule, ctx.ShowcasingModule))("context", ctx.context);
    } }, directives: [_index__WEBPACK_IMPORTED_MODULE_5__.PlaygroundComponent, _form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_6__.TextareaDirective, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_7__.HighlightJsTextareaDirective, _index__WEBPACK_IMPORTED_MODULE_5__.PlaygroundTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 426:
/*!*****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/components/showcasing/playground/index.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlaygroundTextareaDirective": () => (/* binding */ PlaygroundTextareaDirective),
/* harmony export */   "PlaygroundComponent": () => (/* binding */ PlaygroundComponent)
/* harmony export */ });
/* harmony import */ var _angular_compiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/compiler */ 8305);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../code/highlight-js/index */ 7911);
/* harmony import */ var _form_directives_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form/directives/index */ 3669);
/* harmony import */ var _form_directives_form_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../form/directives/form/index */ 5681);
/* harmony import */ var _form_components_checkbox_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../form/components/checkbox/index */ 5009);
/* harmony import */ var _form_components_input_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../form/components/input/index */ 6684);
/* harmony import */ var _form_components_select_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../form/components/select/index */ 3112);
/* harmony import */ var _form_components_option_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../form/components/option/index */ 4898);











const _c0 = ["example"];
function PlaygroundComponent_div_16_ng_container_5_iqui_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "iqui-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_checkbox_1_Template_iqui_checkbox_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r9._updateSelected(key_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r4._contextSelected[key_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", key_r3, " ");
} }
function PlaygroundComponent_div_16_ng_container_5_iqui_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "iqui-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_input_2_Template_iqui_input_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r13._updateSelected(key_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r5._contextMultiline[key_r3] ? "textarea" : "text")("resize", ctx_r5._contextMultiline[key_r3])("value", ctx_r5._contextSelected[key_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", key_r3, " ");
} }
function PlaygroundComponent_div_16_ng_container_5_iqui_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "iqui-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_input_3_Template_iqui_input_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r19); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r17._updateSelected(key_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "number")("value", ctx_r6._contextSelected[key_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", key_r3, " ");
} }
function PlaygroundComponent_div_16_ng_container_5_iqui_select_4_iqui_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "iqui-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", value_r22)("label", value_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", value_r22, " ");
} }
function PlaygroundComponent_div_16_ng_container_5_iqui_select_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "iqui-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("valueChange", function PlaygroundComponent_div_16_ng_container_5_iqui_select_4_Template_iqui_select_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r24._updateSelected(key_r3, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PlaygroundComponent_div_16_ng_container_5_iqui_select_4_iqui_option_2_Template, 2, 3, "iqui-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", ctx_r7._contextSelected[key_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", key_r3, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r7._context[key_r3].options);
} }
function PlaygroundComponent_div_16_ng_container_5_iqui_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "iqui-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function PlaygroundComponent_div_16_ng_container_5_iqui_input_5_Template_iqui_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r28._updateSelected(key_r3, ctx_r28._stringToJson($event.target.value)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", "textarea")("resize", true)("value", ctx_r8._jsonToString(ctx_r8._contextSelected[key_r3]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", key_r3, " ");
} }
function PlaygroundComponent_div_16_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PlaygroundComponent_div_16_ng_container_5_iqui_checkbox_1_Template, 2, 2, "iqui-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, PlaygroundComponent_div_16_ng_container_5_iqui_input_2_Template, 2, 4, "iqui-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, PlaygroundComponent_div_16_ng_container_5_iqui_input_3_Template, 2, 3, "iqui-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, PlaygroundComponent_div_16_ng_container_5_iqui_select_4_Template, 3, 3, "iqui-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, PlaygroundComponent_div_16_ng_container_5_iqui_input_5_Template, 2, 4, "iqui-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "string");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "array");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2._context[key_r3].type === "object");
} }
function PlaygroundComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Context");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, PlaygroundComponent_div_16_ng_container_5_Template, 6, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("size", "sm");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1._contextKeys);
} }
const _c1 = function () { return ["xml"]; };
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
class PlaygroundTextareaDirective {
}
PlaygroundTextareaDirective.ɵfac = function PlaygroundTextareaDirective_Factory(t) { return new (t || PlaygroundTextareaDirective)(); };
PlaygroundTextareaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({ type: PlaygroundTextareaDirective, selectors: [["textarea"]] });
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
class PlaygroundComponent {
    constructor(_compiler, _injector, _module, _cd) {
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
    get ngClass() {
        return this._ngClass;
    }
    set ngClass(value) {
        this._ngClass = value;
        this._attrNgClass = null;
    }
    get class() {
        return this._class;
    }
    set class(value) {
        this._class = value;
        this._attrClass = null;
    }
    ngOnInit() {
        // Process configuration
        this._processContext();
    }
    ngAfterContentInit() {
        // Check if single <textarea /> child
        if (this.syntax) {
            // Load and process syntax
            this._processSyntax(this.syntax);
            // tslint:disable-next-line: max-line-length
        }
        else if (this._syntaxEl) {
            // Load and process syntax
            this._processSyntax(this._syntaxEl.nativeElement.value);
        }
        else {
            // Throw error
            // tslint:disable-next-line: max-line-length
            throw new Error('<iqui-playground /> components need sto be called with [syntax] attribute or a single <textarea /> child element containing syntax!');
        }
    }
    ngOnChanges(changes) {
        // Process configuration
        if (changes.context) {
            this._processContext();
        }
        // (Re)Process syntax
        if (changes.syntax) {
            this._processSyntax(this.syntax);
        }
    }
    ngOnDestroy() {
        if (this._exampleComponent) {
            // Destroy dynamically added components
            this._exampleComponent.destroy();
        }
    }
    /**
     * Process provided context and example
     */
    _processContext() {
        // Reset context
        this._context = {};
        this._contextKeys = [];
        this._contextMultiline = {};
        this._contextSyntax = {};
        this._contextSelected = {};
        // Recompose context
        for (const key in this.context) {
            if (this.context.hasOwnProperty(key)) {
                // Get context property
                this._contextKeys.push(key);
                const value = this.context[key];
                // Initialize breakdown
                if (!this._context[key]) {
                    this._context[key] = {};
                }
                // Get context property type
                let type = (this._context[key].type = typeof value);
                if (type === 'object' && value instanceof Array) {
                    type = this._context[key].type = 'array';
                }
                // Generate selection syntax
                if (type === 'string') {
                    this._contextMultiline[key] = this._context[key].multiline = value.split('\n').length > 1;
                }
                // Generate selection syntax
                if (type === 'array') {
                    const syntax = value.map(item => this._stringifyValue(item));
                    this._contextSyntax[key] = this._context[key].syntax = `${key}: (${syntax.join(' | ')})`;
                }
                else {
                    this._contextSyntax[key] = this._context[key].syntax = `${key}: ${this._context[key].type}`;
                }
                // (Pre)select value and options
                if (type === 'array') {
                    this._context[key].options = value;
                    this._contextSelected[key] = this._context[key].selected = value.length ? value[0] : null;
                }
                else {
                    this._contextSelected[key] = this._context[key].selected = value;
                }
            }
        }
        // Trigger change detection
        this._triggerDynamicComponentsChangeDetection();
    }
    /**
     * Processes playground component syntax into a code syntax TemplateRef and an Example TemplateRef
     * @param syntax Component syntax to process
     */
    _processSyntax(syntax) {
        // Set usage syntax
        this._usageSyntax = syntax || '';
        for (const key in this._context) {
            if (this._context.hasOwnProperty(key)) {
                this._usageSyntax = this._usageSyntax.replace(new RegExp(`context.${key}`, 'g'), this._contextSyntax[key]);
            }
        }
        // Create dynamic component
        const dynamicComponentClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
            template: syntax,
        })(class {
            constructor() {
                this.context = {};
            }
        });
        // Create dynamic module
        const dynamicModuleClass = (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
            imports: [...this.modules],
            declarations: [dynamicComponentClass],
        })(class {
        });
        // Create and inject dynamically created component
        this._compiler.compileModuleAndAllComponentsAsync(dynamicModuleClass).then(moduleWithFactories => {
            // Destroy previously dynamically added components
            if (this._exampleComponent) {
                this._exampleComponent.destroy();
            }
            // Inject component
            const moduleRef = moduleWithFactories.ngModuleFactory.create(this._injector), factory = moduleWithFactories.componentFactories[0];
            this._exampleComponent = factory.create(moduleRef.injector, [], null, this._module);
            this._exampleHostEl.clear();
            this._exampleHostEl.insert(this._exampleComponent.hostView);
            // Trigger change detection
            this._triggerDynamicComponentsChangeDetection();
        });
        // Trigger change detection
        this._cd.detectChanges();
    }
    /**
     * Updates selected values /while replacing the entire containing hash-map to trigger change detection
     * @param key Key to update
     * @param value Updated value
     */
    _updateSelected(key, value) {
        // Update selected value
        this._contextSelected[key] = value;
        // Trigger change detection
        this._triggerDynamicComponentsChangeDetection();
    }
    /**
     * Triggers change detection on injected dynamic components
     */
    _triggerDynamicComponentsChangeDetection() {
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
    _stringifyValue(value) {
        if (value === undefined) {
            // Stringify undefined
            return 'undefined';
        }
        else if (value === null) {
            // Stringify null
            return 'null';
        }
        else if (typeof value === 'function' && value.decorators && value.decorators.length) {
            // Stringify decorated classes into class names
            return `[${value.decorators[0].type.prototype.ngMetadataName}]`;
        }
        else if (typeof value === 'function' && value.constructor) {
            // Stringify classes into class names
            return `[${value.constructor.name}]`;
        }
        else {
            // Stringify as JSON
            return JSON.stringify(value).replace(/"/g, "'");
        }
    }
    /**
     * Expose JSON.stringify(...)
     * @param json JSON to strinfigy
     * @returns Stringified value
     */
    _jsonToString(json) {
        return JSON.stringify(json, null, 2);
    }
    /**
     * Exposes JSON.parse(...)
     * @param  str String to parse
     * @returns Parsed value
     */
    _stringToJson(str) {
        try {
            return JSON.parse(str);
        }
        catch (_a) {
            return {};
        }
    }
    /**
     * Composes class value based on property values
     */
    get _composedClassValue() {
        return [
            // Mark as card (.card)
            'card',
            // Pass-through host class
            this.class || null,
        ].join(' ');
    }
}
PlaygroundComponent.ɵfac = function PlaygroundComponent_Factory(t) { return new (t || PlaygroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Compiler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModuleRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef)); };
PlaygroundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PlaygroundComponent, selectors: [["iqui-playground"]], contentQueries: function PlaygroundComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, PlaygroundTextareaDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._syntaxEl = _t.first);
    } }, viewQuery: function PlaygroundComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._exampleHostEl = _t.first);
    } }, hostVars: 2, hostBindings: function PlaygroundComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("ngClass", ctx._attrNgClass)("class", ctx._attrClass);
    } }, inputs: { ngClass: "ngClass", class: "class", title: "title", syntax: "syntax", modules: "modules", context: "context" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 9, consts: [[3, "ngClass"], [1, "card-header"], [1, "row", "p-3"], [1, "card"], [1, "card-body"], ["example", ""], [1, "card", "mt-3"], [3, "syntax", "languages"], ["class", "col-4", 4, "ngIf"], [1, "col-4"], ["iquiForm", "", 1, "card-body", 3, "size"], [4, "ngFor", "ngForOf"], [3, "value", "valueChange", 4, "ngIf"], [3, "type", "resize", "value", "valueChange", 4, "ngIf"], [3, "type", "value", "valueChange", 4, "ngIf"], [3, "type", "resize", "value", "change", 4, "ngIf"], [3, "value", "valueChange"], [3, "type", "resize", "value", "valueChange"], [3, "type", "value", "valueChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [3, "value", "label"], [3, "type", "resize", "value", "change"]], template: function PlaygroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Example");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainer"](9, null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "iqui-highlightjs", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, PlaygroundComponent_div_16_Template, 6, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx._composedClassValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx.ngClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.title || "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", ctx._contextKeys.length ? "col-8" : "col-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("syntax", ctx._usageSyntax)("languages", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx._contextKeys.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _code_highlight_js_index__WEBPACK_IMPORTED_MODULE_1__.HighlightJsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _form_directives_index__WEBPACK_IMPORTED_MODULE_2__.FormElementDirective, _form_directives_form_index__WEBPACK_IMPORTED_MODULE_3__.FormDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _form_components_checkbox_index__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _form_components_input_index__WEBPACK_IMPORTED_MODULE_5__.InputComponent, _form_components_select_index__WEBPACK_IMPORTED_MODULE_6__.SelectComponent, _form_components_option_index__WEBPACK_IMPORTED_MODULE_7__.OptionDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 3199:
/*!**********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/data/Pagination/_showcase/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationShowcaseComponent": () => (/* binding */ PaginationShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["/pipes", "Paginate"]; };
// Showcase component
class PaginationShowcaseComponent {
}
PaginationShowcaseComponent.ɵfac = function PaginationShowcaseComponent_Factory(t) { return new (t || PaginationShowcaseComponent)(); };
PaginationShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationShowcaseComponent, selectors: [["ng-component"]], decls: 7, vars: 2, consts: [[3, "routerLink"]], template: function PaginationShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagination class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nProvides pagination of an array of items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nAlso see: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Paginate Pipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 4555:
/*!************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/data/Pagination/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
// Pagination class
// Used to paginate arrays of items
// ----------------------------------------------------------------------------
// Import dependencies

/**
 * Pagination class
 */
class Pagination {
    constructor({ items = [], pageLength = 10 } = {}) {
        /**
         * Changed event triggers when pagination has changed
         */
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Holds currently selected page
         */
        this._currentPage = 0;
        // Set properties
        this.items = items;
        this._pageLength = pageLength;
    }
    /**
     * Returns array of items on the current page
     */
    getCurrentPageRange() {
        return this.items.slice(this._currentPage * this._pageLength, (this._currentPage + 1) * this._pageLength);
    }
    /**
     * Gets current page's first item index
     */
    getCurrentPageFirstIndex() {
        return this._currentPage * this._pageLength;
    }
    /**
     * Gets current page's last item index
     */
    getCurrentPageLastIndex() {
        const lastIndex = (this._currentPage + 1) * this._pageLength - 1;
        return lastIndex <= this.items.length - 1 ? lastIndex : this.items.length - 1;
    }
    /**
     * Gets current page's length
     */
    getCurrentPageLength() {
        return this._pageLength;
    }
    /**
     * Selects given page as the current page
     * @param page Page to set as current
     */
    gotoPage(page) {
        // Set updated current page
        this._currentPage = page;
        // Trigger changed event
        this.changed.emit();
    }
    /**
     * Checks if previous page exists
     */
    checkPreviousPage() {
        return this._currentPage > 0;
    }
    /**
     * Selects the next page as the current page
     */
    gotoPreviousPage() {
        if (this.checkPreviousPage()) {
            this.gotoPage(this._currentPage - 1);
        }
    }
    /**
     * Checks if previous page exists
     */
    checkNextPage() {
        return this._currentPage < Math.ceil(this.items.length / this._pageLength) - 1;
    }
    /**
     * Selects the next page as the current page
     */
    gotoNextPage() {
        if (this.checkNextPage()) {
            this.gotoPage(this._currentPage + 1);
        }
    }
    /**
     * Composes info about current pagination state
     */
    getInfo() {
        return {
            currentPage: this._currentPage,
            currentFirstIndex: this.getCurrentPageFirstIndex(),
            currentLastIndex: this.getCurrentPageLastIndex(),
            pageLength: this.getCurrentPageLength(),
            totalLength: this.items.length,
        };
    }
}


/***/ }),

/***/ 7629:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/data/Phrase/_showcase/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhraseShowcaseComponent": () => (/* binding */ PhraseShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["/controls", "composite", "basics", "phraseinput"]; };
// Showcase component
class PhraseShowcaseComponent {
}
PhraseShowcaseComponent.ɵfac = function PhraseShowcaseComponent_Factory(t) { return new (t || PhraseShowcaseComponent)(); };
PhraseShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhraseShowcaseComponent, selectors: [["ng-component"]], decls: 7, vars: 2, consts: [[3, "routerLink"]], template: function PhraseShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phrase class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nDescribes a searchable/filtereable phrase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nAlso see: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Phrase input control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 5593:
/*!********************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/data/Phrase/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phrase": () => (/* binding */ Phrase)
/* harmony export */ });
/* harmony import */ var _ofzza_entt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ofzza/entt */ 9344);
/* harmony import */ var _ofzza_entt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ofzza_entt__WEBPACK_IMPORTED_MODULE_0__);
// Phrase class
// Used to encapsulate a searchable/filterable string/reg-exp definition
// ----------------------------------------------------------------------------
// Import dependencies

/**
 * Phrase class
 */
class Phrase extends _ofzza_entt__WEBPACK_IMPORTED_MODULE_0__.EnTT {
    constructor(value = '', { isRegExp = false, isCaseSensitive = false } = {}) {
        super();
        /**
         * Holds phrase inner value
         */
        this.value = undefined;
        /**
         * Holds if value is a RegExp string
         */
        this.isRegExp = undefined;
        /**
         * Holds if value is case sensitive
         */
        this.isCaseSensitive = undefined;
        super.entt();
        // Set properties
        this.value = value;
        this.isRegExp = isRegExp;
        this.isCaseSensitive = isCaseSensitive;
    }
    /**
     * Clones a phrase instance
     * @param phrase Phrase instance to clone
     */
    static clone(instance, { target = undefined, validate = true } = {}) {
        return new Phrase(instance.value, {
            isCaseSensitive: instance.isCaseSensitive,
            isRegExp: instance.isRegExp,
        });
    }
    /**
     * Converts a Phrase instance into a string representation
     * @param phrase Phrase instance
     */
    static stringify(phrase) {
        if (phrase._isRegExp) {
            return `/${phrase.value}/${!phrase.isCaseSensitive ? 'i' : ''}`;
        }
        else {
            return `"${phrase.value}"${!phrase.isCaseSensitive ? 'i' : ''}`;
        }
    }
    /**
     * Converts a string representation of a Phrase into a Phrase instance
     * @param value Phrase string representation
     */
    static parse(value) {
        if (value && value.length && value[0] === '/') {
            // Parse regexp
            const parsed = value.split('/'), content = parsed.slice(1, -1).join('/'), isCaseSensitive = parsed[parsed.length - 1].indexOf('i') === -1;
            return new Phrase(content, { isRegExp: true, isCaseSensitive });
        }
        else if (value && value.length && value[0] === '"') {
            // Parse string
            const parsed = value.split('"'), content = parsed.slice(1, -1).join('"'), isCaseSensitive = parsed[parsed.length - 1].indexOf('i') === -1;
            return new Phrase(content, { isRegExp: false, isCaseSensitive });
        }
        else {
            throw new Error('Value not recognized as a string representation of a Phrase!');
        }
    }
    /**
     * Checks if phrase is empty (equal to newly created instance)
     */
    get isEmpty() {
        return !this.value && !this.isRegExp && !this.isCaseSensitive;
    }
    /**
     * Checks if haystack contains phrase
     * @param haystack String to check
     */
    match(haystack) {
        if (!this.isRegExp) {
            // Match as plain string
            if (this.isCaseSensitive) {
                // Maths as case-sensitive
                return haystack.toLowerCase().indexOf(this.value.toLowerCase()) !== -1;
            }
            else {
                // Maths as not case-sensitive
                return haystack.indexOf(this.value) !== -1;
            }
        }
        else {
            // Match as regexp
            return !!haystack.match(new RegExp(this.value, this.isCaseSensitive ? '' : 'i'));
        }
    }
    /**
     * Converts a phrase into a string representation
     */
    toString() {
        return Phrase.stringify(this);
    }
}


/***/ }),

/***/ 8667:
/*!*****************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/data/_showcase.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginationShowcaseComponent": () => (/* reexport safe */ _Pagination_showcase__WEBPACK_IMPORTED_MODULE_2__.PaginationShowcaseComponent),
/* harmony export */   "PhraseShowcaseComponent": () => (/* reexport safe */ _Phrase_showcase__WEBPACK_IMPORTED_MODULE_3__.PhraseShowcaseComponent),
/* harmony export */   "DataShowcaseModule": () => (/* binding */ DataShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/code */ 800);
/* harmony import */ var _components_showcasing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/showcasing */ 1834);
/* harmony import */ var _Pagination_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination/_showcase */ 3199);
/* harmony import */ var _Phrase_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Phrase/_showcase */ 7629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);


// Import modules


// Import showcase components





// IQ UI NGX Elements' Basic elements module
class DataShowcaseModule {
}
DataShowcaseModule.ɵfac = function DataShowcaseModule_Factory(t) { return new (t || DataShowcaseModule)(); };
DataShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DataShowcaseModule });
DataShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _components_code__WEBPACK_IMPORTED_MODULE_0__.CodeModule, _components_showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule], 
        // Export dependency modules
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _components_code__WEBPACK_IMPORTED_MODULE_0__.CodeModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DataShowcaseModule, { declarations: [_Pagination_showcase__WEBPACK_IMPORTED_MODULE_2__.PaginationShowcaseComponent, _Phrase_showcase__WEBPACK_IMPORTED_MODULE_3__.PhraseShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _components_code__WEBPACK_IMPORTED_MODULE_0__.CodeModule, _components_showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule], exports: [
        // Export dependency modules
        _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _components_code__WEBPACK_IMPORTED_MODULE_0__.CodeModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_1__.ShowcasingModule,
        // Export child components
        _Pagination_showcase__WEBPACK_IMPORTED_MODULE_2__.PaginationShowcaseComponent,
        _Phrase_showcase__WEBPACK_IMPORTED_MODULE_3__.PhraseShowcaseComponent] }); })();


/***/ }),

/***/ 3813:
/*!*************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/data/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Phrase": () => (/* reexport safe */ _Phrase__WEBPACK_IMPORTED_MODULE_0__.Phrase),
/* harmony export */   "Pagination": () => (/* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_1__.Pagination)
/* harmony export */ });
/* harmony import */ var _Phrase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Phrase */ 5593);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination */ 4555);
// Data repository
// ----------------------------------------------------------------------------
// (Re)export data




/***/ }),

/***/ 3031:
/*!********************************************!*\
  !*** ./projects/iqui-ngx/src/lib/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularCdkRelativePositioningDefinitions": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_16__.AngularCdkRelativePositioningDefinitions),
/* harmony export */   "BootstrapRelativePositioning": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_16__.BootstrapRelativePositioning),
/* harmony export */   "BootstrapSize": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_16__.BootstrapSize),
/* harmony export */   "BootstrapTheme": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_16__.BootstrapTheme),
/* harmony export */   "HtmlInputType": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_16__.HtmlInputType),
/* harmony export */   "RelativePositioningPriority": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_16__.RelativePositioningPriority),
/* harmony export */   "FunctionalModule": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule),
/* harmony export */   "BookmarkableService": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.BookmarkableService),
/* harmony export */   "BookmarkableDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.BookmarkableDirective),
/* harmony export */   "CollapseDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.CollapseDirective),
/* harmony export */   "Copy2ClipboardDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.Copy2ClipboardDirective),
/* harmony export */   "DeclareDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DeclareDirective),
/* harmony export */   "DropdownBodyDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownBodyDirective),
/* harmony export */   "DropdownComponent": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent),
/* harmony export */   "DropdownDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownDirective),
/* harmony export */   "DropdownFooterDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownFooterDirective),
/* harmony export */   "DropdownHeaderDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownHeaderDirective),
/* harmony export */   "DropdownRelativePositioning": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.DropdownRelativePositioning),
/* harmony export */   "ModalComponent": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.ModalComponent),
/* harmony export */   "ModalDialogDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.ModalDialogDirective),
/* harmony export */   "ModalDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.ModalDirective),
/* harmony export */   "ToastComponent": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.ToastComponent),
/* harmony export */   "TooltipComponent": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.TooltipComponent),
/* harmony export */   "TooltipDirective": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.TooltipDirective),
/* harmony export */   "TooltipRelativePositioning": () => (/* reexport safe */ _components_functional__WEBPACK_IMPORTED_MODULE_0__.TooltipRelativePositioning),
/* harmony export */   "FunctionalShowcaseModule": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.FunctionalShowcaseModule),
/* harmony export */   "BookmarkableShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.BookmarkableShowcaseComponent),
/* harmony export */   "CollapseShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.CollapseShowcaseComponent),
/* harmony export */   "Copy2ClipboardShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.Copy2ClipboardShowcaseComponent),
/* harmony export */   "DeclareShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.DeclareShowcaseComponent),
/* harmony export */   "DropdownShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.DropdownShowcaseComponent),
/* harmony export */   "ModalShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.ModalShowcaseComponent),
/* harmony export */   "ToastShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.ToastShowcaseComponent),
/* harmony export */   "TooltipShowcaseComponent": () => (/* reexport safe */ _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.TooltipShowcaseComponent),
/* harmony export */   "BasicsModule": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule),
/* harmony export */   "ButtonComponent": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.ButtonComponent),
/* harmony export */   "ButtonComponentSize": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentSize),
/* harmony export */   "ButtonComponentTheme": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.ButtonComponentTheme),
/* harmony export */   "DropdownButtonComponent": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.DropdownButtonComponent),
/* harmony export */   "DropdownButtonComponentRelativePositioning": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.DropdownButtonComponentRelativePositioning),
/* harmony export */   "DropdownButtonComponentSize": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.DropdownButtonComponentSize),
/* harmony export */   "DropdownButtonComponentTheme": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.DropdownButtonComponentTheme),
/* harmony export */   "PhraseInputComponent": () => (/* reexport safe */ _components_basics__WEBPACK_IMPORTED_MODULE_2__.PhraseInputComponent),
/* harmony export */   "BasicsShowcaseModule": () => (/* reexport safe */ _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.BasicsShowcaseModule),
/* harmony export */   "ButtonShowcaseComponent": () => (/* reexport safe */ _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.ButtonShowcaseComponent),
/* harmony export */   "DropdownButtonShowcaseComponent": () => (/* reexport safe */ _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.DropdownButtonShowcaseComponent),
/* harmony export */   "PhraseInputShowcaseComponent": () => (/* reexport safe */ _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.PhraseInputShowcaseComponent),
/* harmony export */   "FormModule": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.FormModule),
/* harmony export */   "ButtonDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.ButtonDirective),
/* harmony export */   "CheckboxComponent": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent),
/* harmony export */   "CheckboxDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.CheckboxDirective),
/* harmony export */   "FormDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.FormDirective),
/* harmony export */   "FormElementDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.FormElementDirective),
/* harmony export */   "FormGroupDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective),
/* harmony export */   "InputComponent": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.InputComponent),
/* harmony export */   "InputDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.InputDirective),
/* harmony export */   "InputType": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.InputType),
/* harmony export */   "LabelDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.LabelDirective),
/* harmony export */   "OptionDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.OptionDirective),
/* harmony export */   "RadioComponent": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.RadioComponent),
/* harmony export */   "RadioDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.RadioDirective),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.SelectComponent),
/* harmony export */   "SelectDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.SelectDirective),
/* harmony export */   "TextareaDirective": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.TextareaDirective),
/* harmony export */   "UsesFormElementDirectives": () => (/* reexport safe */ _components_form__WEBPACK_IMPORTED_MODULE_4__.UsesFormElementDirectives),
/* harmony export */   "FormShowcaseModule": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseModule),
/* harmony export */   "CheckboxShowcaseComponent": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.CheckboxShowcaseComponent),
/* harmony export */   "FormShowcaseComponent": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseComponent),
/* harmony export */   "InputShowcaseComponent": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.InputShowcaseComponent),
/* harmony export */   "RadioShowcaseComponent": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.RadioShowcaseComponent),
/* harmony export */   "SelectShowcaseComponent": () => (/* reexport safe */ _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.SelectShowcaseComponent),
/* harmony export */   "CodeModule": () => (/* reexport safe */ _components_code__WEBPACK_IMPORTED_MODULE_6__.CodeModule),
/* harmony export */   "HighlightJsComponent": () => (/* reexport safe */ _components_code__WEBPACK_IMPORTED_MODULE_6__.HighlightJsComponent),
/* harmony export */   "HighlightJsInjectBottomDirective": () => (/* reexport safe */ _components_code__WEBPACK_IMPORTED_MODULE_6__.HighlightJsInjectBottomDirective),
/* harmony export */   "HighlightJsInjectTopDirective": () => (/* reexport safe */ _components_code__WEBPACK_IMPORTED_MODULE_6__.HighlightJsInjectTopDirective),
/* harmony export */   "HighlightJsTextareaDirective": () => (/* reexport safe */ _components_code__WEBPACK_IMPORTED_MODULE_6__.HighlightJsTextareaDirective),
/* harmony export */   "highlightJsRegisterLanguage": () => (/* reexport safe */ _components_code__WEBPACK_IMPORTED_MODULE_6__.highlightJsRegisterLanguage),
/* harmony export */   "CodeShowcaseModule": () => (/* reexport safe */ _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.CodeShowcaseModule),
/* harmony export */   "HighlightJsShowcaseComponent": () => (/* reexport safe */ _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.HighlightJsShowcaseComponent),
/* harmony export */   "ShowcasingModule": () => (/* reexport safe */ _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.ShowcasingModule),
/* harmony export */   "PlaygroundComponent": () => (/* reexport safe */ _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.PlaygroundComponent),
/* harmony export */   "PlaygroundTextareaDirective": () => (/* reexport safe */ _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.PlaygroundTextareaDirective),
/* harmony export */   "ShowcasingShowcaseModule": () => (/* reexport safe */ _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.ShowcasingShowcaseModule),
/* harmony export */   "PlaygroundShowcaseComponent": () => (/* reexport safe */ _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.PlaygroundShowcaseComponent),
/* harmony export */   "DataShowcaseModule": () => (/* reexport safe */ _data_showcase__WEBPACK_IMPORTED_MODULE_10__.DataShowcaseModule),
/* harmony export */   "PaginationShowcaseComponent": () => (/* reexport safe */ _data_showcase__WEBPACK_IMPORTED_MODULE_10__.PaginationShowcaseComponent),
/* harmony export */   "PhraseShowcaseComponent": () => (/* reexport safe */ _data_showcase__WEBPACK_IMPORTED_MODULE_10__.PhraseShowcaseComponent),
/* harmony export */   "PipesModule": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_11__.PipesModule),
/* harmony export */   "FilterPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_11__.FilterPipe),
/* harmony export */   "PaginatePipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe),
/* harmony export */   "SlicePipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_11__.SlicePipe),
/* harmony export */   "SortPipe": () => (/* reexport safe */ _pipes__WEBPACK_IMPORTED_MODULE_11__.SortPipe),
/* harmony export */   "PipesShowcaseModule": () => (/* reexport safe */ _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.PipesShowcaseModule),
/* harmony export */   "FilterShowcaseComponent": () => (/* reexport safe */ _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.FilterShowcaseComponent),
/* harmony export */   "PaginateShowcaseComponent": () => (/* reexport safe */ _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.PaginateShowcaseComponent),
/* harmony export */   "SliceShowcaseComponent": () => (/* reexport safe */ _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.SliceShowcaseComponent),
/* harmony export */   "SortShowcaseComponent": () => (/* reexport safe */ _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.SortShowcaseComponent),
/* harmony export */   "RoutingShowcaseModule": () => (/* reexport safe */ _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__.RoutingShowcaseModule),
/* harmony export */   "PageServiceShowcaseComponent": () => (/* reexport safe */ _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__.PageServiceShowcaseComponent),
/* harmony export */   "ShowcaseModule": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseModule),
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseComponent),
/* harmony export */   "ShowcaseMenuComponent": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseMenuComponent),
/* harmony export */   "ShowcasePagesDirective": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcasePagesDirective),
/* harmony export */   "getShowcasePages": () => (/* reexport safe */ _showcase__WEBPACK_IMPORTED_MODULE_14__.getShowcasePages),
/* harmony export */   "Pagination": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_17__.Pagination),
/* harmony export */   "Phrase": () => (/* reexport safe */ _data__WEBPACK_IMPORTED_MODULE_17__.Phrase),
/* harmony export */   "ClipboardService": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_15__.ClipboardService),
/* harmony export */   "Page": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_15__.Page),
/* harmony export */   "providers": () => (/* binding */ providers),
/* harmony export */   "IqUiNgxModule": () => (/* binding */ IqUiNgxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _components_functional__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/functional */ 9737);
/* harmony import */ var _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/functional/_showcase */ 8739);
/* harmony import */ var _components_basics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/basics */ 2986);
/* harmony import */ var _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/basics/_showcase */ 482);
/* harmony import */ var _components_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form */ 5566);
/* harmony import */ var _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form/_showcase */ 9754);
/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/code */ 800);
/* harmony import */ var _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/code/_showcase */ 5557);
/* harmony import */ var _components_showcasing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/showcasing */ 1834);
/* harmony import */ var _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/showcasing/_showcase */ 4040);
/* harmony import */ var _data_showcase__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/_showcase */ 8667);
/* harmony import */ var _pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes */ 2219);
/* harmony import */ var _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/_showcase */ 9850);
/* harmony import */ var _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/routing/_showcase */ 8709);
/* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_showcase */ 5098);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services */ 6537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./types */ 4256);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data */ 3813);


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

const modules = [
    // Component modules
    _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
    _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.FunctionalShowcaseModule,
    _components_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule,
    _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.BasicsShowcaseModule,
    _components_form__WEBPACK_IMPORTED_MODULE_4__.FormModule,
    _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseModule,
    _components_code__WEBPACK_IMPORTED_MODULE_6__.CodeModule,
    _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.CodeShowcaseModule,
    _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.ShowcasingModule,
    _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.ShowcasingShowcaseModule,
    // Data modules
    _data_showcase__WEBPACK_IMPORTED_MODULE_10__.DataShowcaseModule,
    // Pipes modules
    _pipes__WEBPACK_IMPORTED_MODULE_11__.PipesModule,
    _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.PipesShowcaseModule,
    // Services modules
    _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__.RoutingShowcaseModule,
    // Showcase module
    _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseModule,
];
// Import and (re)export types

// Import and (re)export data


// Compose and export all providers
const providers = [_components_functional__WEBPACK_IMPORTED_MODULE_0__.BookmarkableService, _services__WEBPACK_IMPORTED_MODULE_15__.ClipboardService];

/**
 * IQ UI NGX Elements' module
 * InQuest NGX reusable Elements based of Angular material CDK and Bootstrap
 */
class IqUiNgxModule {
}
IqUiNgxModule.ɵfac = function IqUiNgxModule_Factory(t) { return new (t || IqUiNgxModule)(); };
IqUiNgxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: IqUiNgxModule });
IqUiNgxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [...providers], imports: [[
            // Import angular dependencies
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule,
            // Import individual modules
            ...modules,
        ], 
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, 
        // Component modules
        _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.FunctionalShowcaseModule,
        _components_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule,
        _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.BasicsShowcaseModule,
        _components_form__WEBPACK_IMPORTED_MODULE_4__.FormModule,
        _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseModule,
        _components_code__WEBPACK_IMPORTED_MODULE_6__.CodeModule,
        _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.CodeShowcaseModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.ShowcasingModule,
        _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.ShowcasingShowcaseModule,
        // Data modules
        _data_showcase__WEBPACK_IMPORTED_MODULE_10__.DataShowcaseModule,
        // Pipes modules
        _pipes__WEBPACK_IMPORTED_MODULE_11__.PipesModule,
        _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.PipesShowcaseModule,
        // Services modules
        _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__.RoutingShowcaseModule,
        // Showcase module
        _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](IqUiNgxModule, { imports: [
        // Import angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, 
        // Component modules
        _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.FunctionalShowcaseModule,
        _components_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule,
        _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.BasicsShowcaseModule,
        _components_form__WEBPACK_IMPORTED_MODULE_4__.FormModule,
        _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseModule,
        _components_code__WEBPACK_IMPORTED_MODULE_6__.CodeModule,
        _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.CodeShowcaseModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.ShowcasingModule,
        _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.ShowcasingShowcaseModule,
        // Data modules
        _data_showcase__WEBPACK_IMPORTED_MODULE_10__.DataShowcaseModule,
        // Pipes modules
        _pipes__WEBPACK_IMPORTED_MODULE_11__.PipesModule,
        _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.PipesShowcaseModule,
        // Services modules
        _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__.RoutingShowcaseModule,
        // Showcase module
        _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseModule], exports: [
        // Export angular dependencies
        _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_20__.BrowserModule, 
        // Component modules
        _components_functional__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule,
        _components_functional_showcase__WEBPACK_IMPORTED_MODULE_1__.FunctionalShowcaseModule,
        _components_basics__WEBPACK_IMPORTED_MODULE_2__.BasicsModule,
        _components_basics_showcase__WEBPACK_IMPORTED_MODULE_3__.BasicsShowcaseModule,
        _components_form__WEBPACK_IMPORTED_MODULE_4__.FormModule,
        _components_form_showcase__WEBPACK_IMPORTED_MODULE_5__.FormShowcaseModule,
        _components_code__WEBPACK_IMPORTED_MODULE_6__.CodeModule,
        _components_code_showcase__WEBPACK_IMPORTED_MODULE_7__.CodeShowcaseModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_8__.ShowcasingModule,
        _components_showcasing_showcase__WEBPACK_IMPORTED_MODULE_9__.ShowcasingShowcaseModule,
        // Data modules
        _data_showcase__WEBPACK_IMPORTED_MODULE_10__.DataShowcaseModule,
        // Pipes modules
        _pipes__WEBPACK_IMPORTED_MODULE_11__.PipesModule,
        _pipes_showcase__WEBPACK_IMPORTED_MODULE_12__.PipesShowcaseModule,
        // Services modules
        _services_routing_showcase__WEBPACK_IMPORTED_MODULE_13__.RoutingShowcaseModule,
        // Showcase module
        _showcase__WEBPACK_IMPORTED_MODULE_14__.ShowcaseModule] }); })();


/***/ }),

/***/ 7190:
/*!*******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Filter/_showcase/index.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterShowcaseComponent": () => (/* binding */ FilterShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Showcase component
class FilterShowcaseComponent {
}
FilterShowcaseComponent.ɵfac = function FilterShowcaseComponent_Factory(t) { return new (t || FilterShowcaseComponent)(); };
FilterShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterShowcaseComponent, selectors: [["ng-component"]], decls: 3, vars: 0, template: function FilterShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter Pipe class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nFilters a collection based on a string, RegExp or Phrase\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 8890:
/*!*********************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Filter/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data */ 3813);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * Filters items based on provided filtering argument
 */
class FilterPipe {
    transform(items, match, path, pathFactoryArguments = null) {
        const target = items instanceof Array ? items : items.split('\n');
        return (target || []).filter(item => {
            // Check filter type
            const hasBooleanFilter = typeof match === 'boolean', hasNumberFilter = typeof match === 'number', hasStringFilter = typeof match === 'string' && match.trim(), hasRegExpFilter = match instanceof RegExp, hasPhraseFilter = match instanceof _data__WEBPACK_IMPORTED_MODULE_0__.Phrase && match.value.trim();
            // Check if filter is regexp or treat as string
            if (hasBooleanFilter || hasNumberFilter || hasStringFilter || hasRegExpFilter || hasPhraseFilter) {
                if (hasBooleanFilter || hasNumberFilter) {
                    // Filter as exact value
                    return extractValueFromItem(item, path, pathFactoryArguments) === match;
                }
                else if (hasStringFilter || (hasPhraseFilter && !match.isRegExp)) {
                    // Filter as string
                    try {
                        const filterValue = hasStringFilter ? match : match.value, filterCaseSensitive = hasStringFilter ? true : match.isCaseSensitive, value = extractValueFromItem(item, path, pathFactoryArguments), haystack = filterCaseSensitive ? value : value.toLowerCase(), needle = filterCaseSensitive ? filterValue.trim() : filterValue.trim().toLowerCase();
                        return haystack.indexOf(needle) !== -1;
                    }
                    catch (err) {
                        return false;
                    }
                }
                else if (hasRegExpFilter || (hasPhraseFilter && match.isRegExp)) {
                    // Filter as regexp
                    try {
                        const value = extractValueFromItem(item, path, pathFactoryArguments), 
                        // tslint:disable-next-line: max-line-length
                        filterValue = hasRegExpFilter ? match : new RegExp(match.value, match.isCaseSensitive ? '' : 'i');
                        return !!value.match(filterValue);
                    }
                    catch (err) {
                        return false;
                    }
                }
                else {
                    // Return unfiltered
                    return true;
                }
            }
            else {
                // Return unfiltered
                return true;
            }
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "iquiFilter", type: FilterPipe, pure: true });
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
        }
        else {
            // Extract using provided function factory
            return path(pathFactoryArguments)(item);
        }
    }
    else if (path) {
        // Extract value directly
        return item[path];
    }
    else {
        // Return item as already extracted
        return item;
    }
}


/***/ }),

/***/ 7175:
/*!*********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Paginate/_showcase/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginateShowcaseComponent": () => (/* binding */ PaginateShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["/data", "Pagination"]; };
// Showcase component
class PaginateShowcaseComponent {
}
PaginateShowcaseComponent.ɵfac = function PaginateShowcaseComponent_Factory(t) { return new (t || PaginateShowcaseComponent)(); };
PaginateShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginateShowcaseComponent, selectors: [["ng-component"]], decls: 7, vars: 2, consts: [[3, "routerLink"]], template: function PaginateShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pagination Pipe class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nPaginates array of items ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\nAlso see: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Pagination data class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 3260:
/*!***********************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Paginate/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatePipe": () => (/* binding */ PaginatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Paginates an array of records
 */
class PaginatePipe {
    transform(items, startIndex, pageLength, pagination) {
        // Update data being paginated (if pagination provided)
        if (pagination) {
            pagination.items = items;
        }
        // Return current page range of items
        return (items || []).slice(startIndex, startIndex + pageLength);
    }
}
PaginatePipe.ɵfac = function PaginatePipe_Factory(t) { return new (t || PaginatePipe)(); };
PaginatePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "iquiPaginate", type: PaginatePipe, pure: true });


/***/ }),

/***/ 4799:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Slice/_showcase/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliceShowcaseComponent": () => (/* binding */ SliceShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Showcase component
class SliceShowcaseComponent {
}
SliceShowcaseComponent.ɵfac = function SliceShowcaseComponent_Factory(t) { return new (t || SliceShowcaseComponent)(); };
SliceShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliceShowcaseComponent, selectors: [["ng-component"]], decls: 3, vars: 0, template: function SliceShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Slice Pipe class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nSlices array of items\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 9557:
/*!********************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Slice/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlicePipe": () => (/* binding */ SlicePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Slices array
 */
class SlicePipe {
    transform(items, start, length) {
        return (items || []).slice(start, length);
    }
}
SlicePipe.ɵfac = function SlicePipe_Factory(t) { return new (t || SlicePipe)(); };
SlicePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "iquiSlice", type: SlicePipe, pure: true });


/***/ }),

/***/ 6996:
/*!*****************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Sort/_showcase/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortShowcaseComponent": () => (/* binding */ SortShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Showcase component
class SortShowcaseComponent {
}
SortShowcaseComponent.ɵfac = function SortShowcaseComponent_Factory(t) { return new (t || SortShowcaseComponent)(); };
SortShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SortShowcaseComponent, selectors: [["ng-component"]], decls: 3, vars: 0, template: function SortShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort Pipe class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nSort a collection based on a string or a custom mapping function\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 6564:
/*!*******************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/Sort/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortPipe": () => (/* binding */ SortPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/**
 * Sorts array of items based on given property key or mapping function
 */
class SortPipe {
    transform(items, filter, asc = true) {
        if (!items || !(items instanceof Array)) {
            return items;
        }
        return [...(items || [])].sort((a, b) => {
            const aValue = extractValueFromItem(a, filter), bValue = extractValueFromItem(b, filter);
            // Check if comparing by single value or array
            if (aValue instanceof Array) {
                // Compare by array of values
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < aValue.length; i++) {
                    // Compare by single values
                    if (aValue[i] < bValue[i]) {
                        return asc ? -1 : +1;
                    }
                    else if (aValue[i] > bValue[i]) {
                        return asc ? +1 : -1;
                    }
                }
                return 0;
            }
            else {
                // Compare by single values
                if (aValue === bValue) {
                    return 0;
                }
                else if (aValue < bValue) {
                    return asc ? -1 : +1;
                }
                else if (aValue > bValue) {
                    return asc ? +1 : -1;
                }
            }
        });
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "iquiSort", type: SortPipe, pure: true });
/**
 * Extracts value at a given path from item
 * @param item Item to extract value from
 * @param path Path string or extracting function
 */
function extractValueFromItem(item, path) {
    if (path instanceof Function) {
        return path(item);
    }
    else {
        return item[path];
    }
}


/***/ }),

/***/ 9850:
/*!******************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/_showcase.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterShowcaseComponent": () => (/* reexport safe */ _Filter_showcase__WEBPACK_IMPORTED_MODULE_0__.FilterShowcaseComponent),
/* harmony export */   "SortShowcaseComponent": () => (/* reexport safe */ _Sort_showcase__WEBPACK_IMPORTED_MODULE_1__.SortShowcaseComponent),
/* harmony export */   "PaginateShowcaseComponent": () => (/* reexport safe */ _Paginate_showcase__WEBPACK_IMPORTED_MODULE_2__.PaginateShowcaseComponent),
/* harmony export */   "SliceShowcaseComponent": () => (/* reexport safe */ _Slice_showcase__WEBPACK_IMPORTED_MODULE_3__.SliceShowcaseComponent),
/* harmony export */   "PipesShowcaseModule": () => (/* binding */ PipesShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _Filter_showcase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter/_showcase */ 7190);
/* harmony import */ var _Sort_showcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort/_showcase */ 6996);
/* harmony import */ var _Paginate_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Paginate/_showcase */ 7175);
/* harmony import */ var _Slice_showcase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Slice/_showcase */ 4799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);


// Import showcase components









// IQ UI NGX Elements' Code/Syntax module
class PipesShowcaseModule {
}
PipesShowcaseModule.ɵfac = function PipesShowcaseModule_Factory(t) { return new (t || PipesShowcaseModule)(); };
PipesShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PipesShowcaseModule });
PipesShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipesShowcaseModule, { declarations: [
        // Declare showcasing components
        _Filter_showcase__WEBPACK_IMPORTED_MODULE_0__.FilterShowcaseComponent,
        _Sort_showcase__WEBPACK_IMPORTED_MODULE_1__.SortShowcaseComponent,
        _Paginate_showcase__WEBPACK_IMPORTED_MODULE_2__.PaginateShowcaseComponent,
        _Slice_showcase__WEBPACK_IMPORTED_MODULE_3__.SliceShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [
        // Export child components
        _Filter_showcase__WEBPACK_IMPORTED_MODULE_0__.FilterShowcaseComponent,
        _Sort_showcase__WEBPACK_IMPORTED_MODULE_1__.SortShowcaseComponent,
        _Paginate_showcase__WEBPACK_IMPORTED_MODULE_2__.PaginateShowcaseComponent,
        _Slice_showcase__WEBPACK_IMPORTED_MODULE_3__.SliceShowcaseComponent] }); })();


/***/ }),

/***/ 2219:
/*!**************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/pipes/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* reexport safe */ _Filter__WEBPACK_IMPORTED_MODULE_0__.FilterPipe),
/* harmony export */   "PaginatePipe": () => (/* reexport safe */ _Paginate__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe),
/* harmony export */   "SlicePipe": () => (/* reexport safe */ _Slice__WEBPACK_IMPORTED_MODULE_2__.SlicePipe),
/* harmony export */   "SortPipe": () => (/* reexport safe */ _Sort__WEBPACK_IMPORTED_MODULE_3__.SortPipe),
/* harmony export */   "PipesModule": () => (/* binding */ PipesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ 8890);
/* harmony import */ var _Paginate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paginate */ 3260);
/* harmony import */ var _Slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slice */ 9557);
/* harmony import */ var _Sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sort */ 6564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);


// Import pipes and (re)export pipes









/**
 * IQ UI NGX Elements' Pipes module
 * Implements commonly used pipes
 */
class PipesModule {
}
PipesModule.ɵfac = function PipesModule_Factory(t) { return new (t || PipesModule)(); };
PipesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_Filter__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _Paginate__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe, _Slice__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _Sort__WEBPACK_IMPORTED_MODULE_3__.SortPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule], exports: [_Filter__WEBPACK_IMPORTED_MODULE_0__.FilterPipe, _Paginate__WEBPACK_IMPORTED_MODULE_1__.PaginatePipe, _Slice__WEBPACK_IMPORTED_MODULE_2__.SlicePipe, _Sort__WEBPACK_IMPORTED_MODULE_3__.SortPipe] }); })();


/***/ }),

/***/ 2920:
/*!**************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/functional/clipboard/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardService": () => (/* binding */ ClipboardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
// Copy-2-Clipboard service
// ----------------------------------------------------------------------------
// Import dependencies


/**
 * Provides clipboard functionality
 */
class ClipboardService {
    /**
     * Copies content to clipboard
     * @param content Content to copy
     */
    copy2Clipboard(content) {
        // Remember focused element
        const focused = document.activeElement;
        if (typeof content === 'string') {
            // Copy text to clipboard
            const textarea = document.createElement('textarea');
            textarea.value = content;
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            // Fire event
            ClipboardService.onCopy.emit(content);
        }
        else {
            // Copy from element to clipboard
            const selection = window.getSelection(), range = document.createRange();
            range.selectNodeContents(content);
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand('copy');
            selection.removeAllRanges();
            // Fire event
            ClipboardService.onCopy.emit(selection.toString());
        }
        // Refocus previous element
        if (focused) {
            focused.focus();
        }
    }
}
/**
 * Fires when a value is copied onto the clipboard
 */
ClipboardService.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
ClipboardService.ɵfac = function ClipboardService_Factory(t) { return new (t || ClipboardService)(); };
ClipboardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ClipboardService, factory: ClipboardService.ɵfac });


/***/ }),

/***/ 1023:
/*!****************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/functional/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClipboardService": () => (/* reexport safe */ _clipboard__WEBPACK_IMPORTED_MODULE_0__.ClipboardService)
/* harmony export */ });
/* harmony import */ var _clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clipboard */ 2920);
// Functional services
// ----------------------------------------------------------------------------
// Export page definitions class



/***/ }),

/***/ 6537:
/*!*****************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* reexport safe */ _routing__WEBPACK_IMPORTED_MODULE_0__.Page),
/* harmony export */   "ClipboardService": () => (/* reexport safe */ _functional__WEBPACK_IMPORTED_MODULE_1__.ClipboardService)
/* harmony export */ });
/* harmony import */ var _routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing */ 1745);
/* harmony import */ var _functional__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functional */ 1023);
// Services
// ----------------------------------------------------------------------------
// Export routing services




/***/ }),

/***/ 8709:
/*!*****************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/routing/_showcase.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageServiceShowcaseComponent": () => (/* reexport safe */ _page_showcase__WEBPACK_IMPORTED_MODULE_2__.PageServiceShowcaseComponent),
/* harmony export */   "RoutingShowcaseModule": () => (/* binding */ RoutingShowcaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_showcasing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/showcasing */ 1834);
/* harmony import */ var _components_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/code */ 800);
/* harmony import */ var _page_showcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/_showcase */ 8911);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules


// Import showcase components



// IQ UI NGX Elements' Showcasing module
class RoutingShowcaseModule {
}
RoutingShowcaseModule.ɵfac = function RoutingShowcaseModule_Factory(t) { return new (t || RoutingShowcaseModule)(); };
RoutingShowcaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RoutingShowcaseModule });
RoutingShowcaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _components_code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, _components_showcasing__WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule], 
        // Export dependency modules
        _components_code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RoutingShowcaseModule, { declarations: [_page_showcase__WEBPACK_IMPORTED_MODULE_2__.PageServiceShowcaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _components_code__WEBPACK_IMPORTED_MODULE_1__.CodeModule, _components_showcasing__WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule], exports: [
        // Export dependency modules
        _components_code__WEBPACK_IMPORTED_MODULE_1__.CodeModule,
        _components_showcasing__WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule,
        // Export child components
        _page_showcase__WEBPACK_IMPORTED_MODULE_2__.PageServiceShowcaseComponent] }); })();


/***/ }),

/***/ 1745:
/*!*************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/routing/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* reexport safe */ _page__WEBPACK_IMPORTED_MODULE_0__.Page)
/* harmony export */ });
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page */ 1048);
// Routing services
// ----------------------------------------------------------------------------
// Export page definitions class



/***/ }),

/***/ 8911:
/*!****************************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/routing/page/_showcase/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageServiceShowcaseComponent": () => (/* binding */ PageServiceShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

// Showcase component
class PageServiceShowcaseComponent {
    constructor() {
        // Page context
        this.context = {};
    }
}
PageServiceShowcaseComponent.ɵfac = function PageServiceShowcaseComponent_Factory(t) { return new (t || PageServiceShowcaseComponent)(); };
PageServiceShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageServiceShowcaseComponent, selectors: [["ng-component"]], decls: 3, vars: 0, template: function PageServiceShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Showcase Page service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\nProvides an easy way of registering a component/directive/service to a showcase application\n");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 1048:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/services/routing/page/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page": () => (/* binding */ Page)
/* harmony export */ });
// Page definition
// ----------------------------------------------------------------------------
/**
 * Holds basic page information
 */
class Page {
    /**
     * Creates an instance of Page.
     * @param name Page unique name (used in URL)
     * @param title Page title (displayed in menu)
     * @param title Page description (displayed in menu tooltip)
     * @param component Page component
     * @param children Child pages
     */
    constructor(name, title, description, component = null, children = []) {
        /**
         * Can hold various metadata about the page
         */
        this.meta = {};
        // Holds parent path
        this._parentPath = [];
        // Set page info
        this.name = name;
        this.title = title;
        this.description = description;
        this.component = component;
        this.children = children;
        // Update child paths
        this.refreshChildren();
    }
    /**
     * Generates a page from a Directive, Component or service class
     * @param descriptor Directive, Component or service class to be described
     * @param component Page component implementing the described page
     * @returns Page representing and linking to the target
     */
    static fromClass(descriptor, component = null) {
        var _a, _b, _c, _d;
        const directiveDecorator = (_a = descriptor.decorators) === null || _a === void 0 ? void 0 : _a.find(decorator => decorator.type.prototype.ngMetadataName === 'Directive'), componentDecorator = (_b = descriptor.decorators) === null || _b === void 0 ? void 0 : _b.find(decorator => decorator.type.prototype.ngMetadataName === 'Component');
        if (directiveDecorator) {
            // Compose directive page
            const name = descriptor.name.toLowerCase().replace(/directive/g, ''), selector = ((_c = directiveDecorator.args.find(arg => arg.selector)) === null || _c === void 0 ? void 0 : _c.selector) || `[${name}]`;
            return new Page(name, selector, null, component || descriptor);
        }
        else if (componentDecorator) {
            // Compose component page
            const name = descriptor.name.toLowerCase().replace(/component/g, ''), selector = `<${((_d = componentDecorator.args.find(arg => arg.selector)) === null || _d === void 0 ? void 0 : _d.selector) || `${name}`} />`;
            return new Page(name, selector, null, component || descriptor);
        }
        else {
            // Compose service page
            const name = descriptor.name.replace(/Service/g, '').replace(/Pipe/g, '');
            return new Page(name, name, null, component || descriptor);
        }
    }
    /**
     * Composes routes from pages definitions
     * @param pages Pages definition
     * @param path Root path of current pages
     * @returns Composed routes
     */
    // tslint:disable-next-line: no-shadowed-variable
    static compileRoutes(pages, path = []) {
        // Update pages' route paths
        for (const page of pages) {
            page.setParentPath(path);
        }
        // Compile routes
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
    static _compileRoutes(pages, path = [], routes = []) {
        // Process pages
        for (const page of pages) {
            // If page has component, add to routes
            if (page.component) {
                routes.push({
                    path: [...path, page.name].join('/'),
                    component: page.component,
                });
            }
            // If page has children, process children
            if (page.children.length) {
                Page._compileRoutes(page.children, [...path, page.name], routes);
            }
        }
        // Return composed routes
        return routes;
    }
    /**
     * Flattens aray of pages and their children into a flat array
     * @param pages Pages array to flatten
     * @returns Flat page array
     */
    static toArray(pages) {
        const arr = [];
        for (const page of pages) {
            arr.push(page, ...Page.toArray(page.children));
        }
        return arr;
    }
    /**
     * Checks if page has children
     * @param page Page to check
     * @returns If page has children
     */
    static hasChildren(page) {
        return page.children && page.children.length;
    }
    /**
     * Get parent reference
     */
    get parent() {
        return this._parent;
    }
    /**
     * Composes path from parent set path and name
     */
    get path() {
        return [...this._parentPath, this.name];
    }
    /**
     * Sets parent path
     * @param path Parent path
     */
    setParentPath(path) {
        // Set parent path
        this._parentPath = path;
        // When path refreshed, propagate to children
        this.refreshChildren();
    }
    /**
     * Update child paths
     */
    refreshChildren() {
        this.children.forEach(child => {
            child._parent = this;
            child.setParentPath(this.path);
        });
    }
}


/***/ }),

/***/ 8583:
/*!************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/types/bootstrap/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapSize": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize),
/* harmony export */   "BootstrapTheme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_0__.BootstrapTheme)
/* harmony export */ });
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ 4237);
// Bootstrap ENUMs and Types
// Enumerates commonly used bootstrap values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------
// (Re)Export Bootstrap theme ENUMs and Types



/***/ }),

/***/ 4237:
/*!******************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/types/bootstrap/theme/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapTheme": () => (/* binding */ BootstrapTheme),
/* harmony export */   "BootstrapSize": () => (/* binding */ BootstrapSize)
/* harmony export */ });
// Bootstrap theme ENUMs and Types
// Enumerates commonly used bootstrap theme-ing values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------
/*
 * Bootstrap theme colors enum
 */
// tslint:disable-next-line: variable-name
const BootstrapTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    SUCCESS: 'success',
    WARNING: 'warning',
    DANGER: 'danger',
    INFO: 'info',
    LIGHT: 'light',
    DARK: 'dark',
};
/*
 * Bootstrap theme sizes enum
 */
// tslint:disable-next-line: variable-name
const BootstrapSize = {
    LARGE: 'lg',
    SMALL: 'sm',
};


/***/ }),

/***/ 2791:
/*!*******************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/types/html/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlInputType": () => (/* binding */ HtmlInputType)
/* harmony export */ });
// HTML ENUMs and Types
// Enumerates commonly used HTML values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------
// input[type] values enum
// tslint:disable-next-line: variable-name
const HtmlInputType = {
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
    FILE: 'file',
};


/***/ }),

/***/ 4256:
/*!**************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/types/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HtmlInputType": () => (/* reexport safe */ _html__WEBPACK_IMPORTED_MODULE_0__.HtmlInputType),
/* harmony export */   "BootstrapSize": () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_1__.BootstrapSize),
/* harmony export */   "BootstrapTheme": () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_1__.BootstrapTheme),
/* harmony export */   "AngularCdkRelativePositioningDefinitions": () => (/* reexport safe */ _ngcdk__WEBPACK_IMPORTED_MODULE_2__.AngularCdkRelativePositioningDefinitions),
/* harmony export */   "BootstrapRelativePositioning": () => (/* reexport safe */ _ngcdk__WEBPACK_IMPORTED_MODULE_2__.BootstrapRelativePositioning),
/* harmony export */   "RelativePositioningPriority": () => (/* reexport safe */ _ngcdk__WEBPACK_IMPORTED_MODULE_2__.RelativePositioningPriority)
/* harmony export */ });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./html */ 2791);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap */ 8583);
/* harmony import */ var _ngcdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngcdk */ 2326);
// ENUMs and Types
// - Enumerates commonly used values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------
// (Re)Export HTML ENUMs and Types

// (Re)Export Bootstrap ENUMs and Types

// (Re)Export Angular CDK ENUMs and Types



/***/ }),

/***/ 2326:
/*!********************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/types/ngcdk/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularCdkRelativePositioningDefinitions": () => (/* reexport safe */ _positioning__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions),
/* harmony export */   "BootstrapRelativePositioning": () => (/* reexport safe */ _positioning__WEBPACK_IMPORTED_MODULE_0__.BootstrapRelativePositioning),
/* harmony export */   "RelativePositioningPriority": () => (/* reexport safe */ _positioning__WEBPACK_IMPORTED_MODULE_0__.RelativePositioningPriority)
/* harmony export */ });
/* harmony import */ var _positioning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./positioning */ 2204);
// Angular CDK ENUMs and Types
// Enumerates commonly used Angular CDK values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------
// (Re)Export bootstrap theme ENUMs and Types



/***/ }),

/***/ 2204:
/*!********************************************************************!*\
  !*** ./projects/iqui-ngx/src/lib/types/ngcdk/positioning/index.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BootstrapRelativePositioning": () => (/* binding */ BootstrapRelativePositioning),
/* harmony export */   "RelativePositioningPriority": () => (/* binding */ RelativePositioningPriority),
/* harmony export */   "AngularCdkRelativePositioningDefinitions": () => (/* binding */ AngularCdkRelativePositioningDefinitions)
/* harmony export */ });
// Bootstrap theme ENUMs and Types
// Enumerates commonly used bootstrap positioning values as types to be used to statically type properties and such.
// ----------------------------------------------------------------------------
/*
 * Bootstrap relative positioning enum
 */
// tslint:disable-next-line: variable-name
const BootstrapRelativePositioning = {
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
    LEFT_BOTTOM: 'left bottom',
};
/*
 * Angular CDK positioning priority
 */
// tslint:disable-next-line: variable-name
const RelativePositioningPriority = [
    BootstrapRelativePositioning.BOTTOM,
    BootstrapRelativePositioning.BOTTOM_CENTER,
    BootstrapRelativePositioning.BOTTOM_LEFT,
    BootstrapRelativePositioning.BOTTOM_RIGHT,
    BootstrapRelativePositioning.RIGHT,
    BootstrapRelativePositioning.RIGHT_CENTER,
    BootstrapRelativePositioning.RIGHT_TOP,
    BootstrapRelativePositioning.RIGHT_BOTTOM,
    BootstrapRelativePositioning.LEFT,
    BootstrapRelativePositioning.LEFT_CENTER,
    BootstrapRelativePositioning.LEFT_TOP,
    BootstrapRelativePositioning.LEFT_BOTTOM,
    BootstrapRelativePositioning.TOP,
    BootstrapRelativePositioning.TOP_CENTER,
    BootstrapRelativePositioning.TOP_LEFT,
    BootstrapRelativePositioning.TOP_RIGHT,
];
/*
 * Preferred Angular CDK positions type
 */
// tslint:disable-next-line: variable-name
const AngularCdkRelativePositioningDefinitions = {
    ['top']: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' },
    ['top center']: { originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom' },
    ['top left']: { originX: 'start', originY: 'top', overlayX: 'start', overlayY: 'bottom' },
    ['top right']: { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' },
    ['right']: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center' },
    ['right center']: { originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center' },
    ['right top']: { originX: 'end', originY: 'top', overlayX: 'start', overlayY: 'top' },
    ['right bottom']: { originX: 'end', originY: 'bottom', overlayX: 'start', overlayY: 'bottom' },
    ['bottom']: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' },
    ['bottom center']: { originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top' },
    ['bottom left']: { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
    ['bottom right']: { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top' },
    ['left']: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center' },
    ['left center']: { originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center' },
    ['left top']: { originX: 'start', originY: 'top', overlayX: 'end', overlayY: 'top' },
    ['left bottom']: { originX: 'start', originY: 'bottom', overlayX: 'end', overlayY: 'bottom' },
};


/***/ }),

/***/ 8330:
/*!*********************************************!*\
  !*** ./projects/iqui-ngx/src/public-api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngularCdkRelativePositioningDefinitions": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.AngularCdkRelativePositioningDefinitions),
/* harmony export */   "BasicsModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BasicsModule),
/* harmony export */   "BasicsShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BasicsShowcaseModule),
/* harmony export */   "BookmarkableDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BookmarkableDirective),
/* harmony export */   "BookmarkableService": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BookmarkableService),
/* harmony export */   "BookmarkableShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BookmarkableShowcaseComponent),
/* harmony export */   "BootstrapRelativePositioning": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BootstrapRelativePositioning),
/* harmony export */   "BootstrapSize": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BootstrapSize),
/* harmony export */   "BootstrapTheme": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.BootstrapTheme),
/* harmony export */   "ButtonComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent),
/* harmony export */   "ButtonComponentSize": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ButtonComponentSize),
/* harmony export */   "ButtonComponentTheme": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ButtonComponentTheme),
/* harmony export */   "ButtonDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ButtonDirective),
/* harmony export */   "ButtonShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ButtonShowcaseComponent),
/* harmony export */   "CheckboxComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxComponent),
/* harmony export */   "CheckboxDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxDirective),
/* harmony export */   "CheckboxShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CheckboxShowcaseComponent),
/* harmony export */   "ClipboardService": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ClipboardService),
/* harmony export */   "CodeModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CodeModule),
/* harmony export */   "CodeShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CodeShowcaseModule),
/* harmony export */   "CollapseDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CollapseDirective),
/* harmony export */   "CollapseShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.CollapseShowcaseComponent),
/* harmony export */   "Copy2ClipboardDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Copy2ClipboardDirective),
/* harmony export */   "Copy2ClipboardShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Copy2ClipboardShowcaseComponent),
/* harmony export */   "DataShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DataShowcaseModule),
/* harmony export */   "DeclareDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DeclareDirective),
/* harmony export */   "DeclareShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DeclareShowcaseComponent),
/* harmony export */   "DropdownBodyDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownBodyDirective),
/* harmony export */   "DropdownButtonComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponent),
/* harmony export */   "DropdownButtonComponentRelativePositioning": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponentRelativePositioning),
/* harmony export */   "DropdownButtonComponentSize": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponentSize),
/* harmony export */   "DropdownButtonComponentTheme": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownButtonComponentTheme),
/* harmony export */   "DropdownButtonShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownButtonShowcaseComponent),
/* harmony export */   "DropdownComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownComponent),
/* harmony export */   "DropdownDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownDirective),
/* harmony export */   "DropdownFooterDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownFooterDirective),
/* harmony export */   "DropdownHeaderDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownHeaderDirective),
/* harmony export */   "DropdownRelativePositioning": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownRelativePositioning),
/* harmony export */   "DropdownShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.DropdownShowcaseComponent),
/* harmony export */   "FilterPipe": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FilterPipe),
/* harmony export */   "FilterShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FilterShowcaseComponent),
/* harmony export */   "FormDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FormDirective),
/* harmony export */   "FormElementDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FormElementDirective),
/* harmony export */   "FormGroupDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective),
/* harmony export */   "FormModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FormModule),
/* harmony export */   "FormShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FormShowcaseComponent),
/* harmony export */   "FormShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FormShowcaseModule),
/* harmony export */   "FunctionalModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FunctionalModule),
/* harmony export */   "FunctionalShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.FunctionalShowcaseModule),
/* harmony export */   "HighlightJsComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HighlightJsComponent),
/* harmony export */   "HighlightJsInjectBottomDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HighlightJsInjectBottomDirective),
/* harmony export */   "HighlightJsInjectTopDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HighlightJsInjectTopDirective),
/* harmony export */   "HighlightJsShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HighlightJsShowcaseComponent),
/* harmony export */   "HighlightJsTextareaDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HighlightJsTextareaDirective),
/* harmony export */   "HtmlInputType": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.HtmlInputType),
/* harmony export */   "InputComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InputComponent),
/* harmony export */   "InputDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InputDirective),
/* harmony export */   "InputShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InputShowcaseComponent),
/* harmony export */   "InputType": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.InputType),
/* harmony export */   "IqUiNgxModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.IqUiNgxModule),
/* harmony export */   "LabelDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.LabelDirective),
/* harmony export */   "ModalComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ModalComponent),
/* harmony export */   "ModalDialogDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ModalDialogDirective),
/* harmony export */   "ModalDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ModalDirective),
/* harmony export */   "ModalShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ModalShowcaseComponent),
/* harmony export */   "OptionDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.OptionDirective),
/* harmony export */   "Page": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Page),
/* harmony export */   "PageServiceShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PageServiceShowcaseComponent),
/* harmony export */   "PaginatePipe": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PaginatePipe),
/* harmony export */   "PaginateShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PaginateShowcaseComponent),
/* harmony export */   "Pagination": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Pagination),
/* harmony export */   "PaginationShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PaginationShowcaseComponent),
/* harmony export */   "Phrase": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.Phrase),
/* harmony export */   "PhraseInputComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PhraseInputComponent),
/* harmony export */   "PhraseInputShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PhraseInputShowcaseComponent),
/* harmony export */   "PhraseShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PhraseShowcaseComponent),
/* harmony export */   "PipesModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PipesModule),
/* harmony export */   "PipesShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PipesShowcaseModule),
/* harmony export */   "PlaygroundComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PlaygroundComponent),
/* harmony export */   "PlaygroundShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PlaygroundShowcaseComponent),
/* harmony export */   "PlaygroundTextareaDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.PlaygroundTextareaDirective),
/* harmony export */   "RadioComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RadioComponent),
/* harmony export */   "RadioDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RadioDirective),
/* harmony export */   "RadioShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RadioShowcaseComponent),
/* harmony export */   "RelativePositioningPriority": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RelativePositioningPriority),
/* harmony export */   "RoutingShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.RoutingShowcaseModule),
/* harmony export */   "SelectComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SelectComponent),
/* harmony export */   "SelectDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SelectDirective),
/* harmony export */   "SelectShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SelectShowcaseComponent),
/* harmony export */   "ShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ShowcaseComponent),
/* harmony export */   "ShowcaseMenuComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ShowcaseMenuComponent),
/* harmony export */   "ShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ShowcaseModule),
/* harmony export */   "ShowcasePagesDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ShowcasePagesDirective),
/* harmony export */   "ShowcasingModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ShowcasingModule),
/* harmony export */   "ShowcasingShowcaseModule": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ShowcasingShowcaseModule),
/* harmony export */   "SlicePipe": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SlicePipe),
/* harmony export */   "SliceShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SliceShowcaseComponent),
/* harmony export */   "SortPipe": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SortPipe),
/* harmony export */   "SortShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.SortShowcaseComponent),
/* harmony export */   "TextareaDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TextareaDirective),
/* harmony export */   "ToastComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ToastComponent),
/* harmony export */   "ToastShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ToastShowcaseComponent),
/* harmony export */   "TooltipComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TooltipComponent),
/* harmony export */   "TooltipDirective": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TooltipDirective),
/* harmony export */   "TooltipRelativePositioning": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TooltipRelativePositioning),
/* harmony export */   "TooltipShowcaseComponent": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.TooltipShowcaseComponent),
/* harmony export */   "UsesFormElementDirectives": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.UsesFormElementDirectives),
/* harmony export */   "getShowcasePages": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.getShowcasePages),
/* harmony export */   "highlightJsRegisterLanguage": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage),
/* harmony export */   "providers": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.providers)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ 3031);
// Public API surface
// ----------------------------------------------------------------------------
// Export all



/***/ }),

/***/ 2355:
/*!*********************************************************!*\
  !*** ./projects/showcase/src/app/app-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedPageComponent": () => (/* reexport safe */ _getting_started_component__WEBPACK_IMPORTED_MODULE_1__.GettingStartedPageComponent),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../iqui-ngx/src/public-api */ 8330);
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getting-started/component */ 8244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


// Import pages




// Application routes
const routes = [
    // Frontpage
    { path: '', component: _getting_started_component__WEBPACK_IMPORTED_MODULE_1__.GettingStartedPageComponent },
    // Component pages
    ..._iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.Page.compileRoutes((0,_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.getShowcasePages)(), []),
    // Default
    { path: '**', redirectTo: '/' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 9494:
/*!****************************************************!*\
  !*** ./projects/showcase/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../iqui-ngx/src/public-api */ 8330);
/* harmony import */ var _getting_started_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getting-started/component */ 8244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _iqui_ngx_src_lib_showcase_component_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../iqui-ngx/src/lib/_showcase/component/index */ 978);
/* harmony import */ var _iqui_ngx_src_lib_showcase_component_directives_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../iqui-ngx/src/lib/_showcase/component/directives/index */ 249);






class AppComponent {
    constructor() {
        /**
         * Ready injected pages
         */
        this._gettingStartedPages = [new _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.Page('getting-started', 'Getting started', 'Getting started', _getting_started_component__WEBPACK_IMPORTED_MODULE_1__.GettingStartedPageComponent)];
        /**
         * Ready injected pages
         */
        this._iquiNgxPages = (0,_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.getShowcasePages)();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 5, consts: [[1, "iqui-showcase-page-navbar", "navbar", "navbar-expand", "navbar-dark", "bg-dark", "fixed-top"], [1, "navbar-brand", "mr-1", 3, "routerLink"], [1, "iqui-showcase-page-content"], [1, "bg-dark", "p-4"], [3, "iqui-showcase-pages", "title"], [1, "iqui-showcase-router-outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Inquest NGX UI");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "iqui-showcase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](5, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iqui-showcase-pages", ctx._gettingStartedPages)("title", "How to");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("iqui-showcase-pages", ctx._iquiNgxPages)("title", "IQUI-NGX");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _iqui_ngx_src_lib_showcase_component_index__WEBPACK_IMPORTED_MODULE_2__.ShowcaseComponent, _iqui_ngx_src_lib_showcase_component_directives_index__WEBPACK_IMPORTED_MODULE_3__.ShowcasePagesDirective, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .iqui-showcase-page-navbar[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 56px !important;\n  padding: 8px 16px !important;\n}\n[_nghost-%COMP%]   .iqui-showcase-page-content[_ngcontent-%COMP%] {\n  z-index: 0;\n  display: flex;\n  width: 100%;\n  margin-top: 56px;\n}\n[_nghost-%COMP%]   .iqui-showcase-page-content[_ngcontent-%COMP%]   .iqui-showcase-router-outlet[_ngcontent-%COMP%] {\n  width: 100%;\n  height: calc(100vh - 56px);\n  padding: 20px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBRUU7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQUFKO0FBR0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUROIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAvLyBQYWdlIEhlYWRlclxuICAuaXF1aS1zaG93Y2FzZS1wYWdlLW5hdmJhciB7XG4gICAgei1pbmRleDogMTtcbiAgICBoZWlnaHQ6IDU2cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlxdWktc2hvd2Nhc2UtcGFnZS1jb250ZW50IHtcbiAgICB6LWluZGV4OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogNTZweDtcblxuICAgIC5pcXVpLXNob3djYXNlLXJvdXRlci1vdXRsZXQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 2328:
/*!*************************************************!*\
  !*** ./projects/showcase/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../iqui-ngx/src/public-api */ 8330);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 2355);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 9494);
/* harmony import */ var _getting_started__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getting-started */ 6174);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);


// Import showcase module

// Import ašš and pages




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            // Angular dependencies
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            // IQUI module and pages
            _getting_started__WEBPACK_IMPORTED_MODULE_3__.GettingStartedPageModule,
            _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IqUiNgxModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [
        // Angular dependencies
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        // IQUI module and pages
        _getting_started__WEBPACK_IMPORTED_MODULE_3__.GettingStartedPageModule,
        _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.IqUiNgxModule] }); })();


/***/ }),

/***/ 8244:
/*!**********************************************************************!*\
  !*** ./projects/showcase/src/app/getting-started/component/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedPageComponent": () => (/* binding */ GettingStartedPageComponent)
/* harmony export */ });
/* harmony import */ var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../iqui-ngx/src/public-api */ 8330);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ 2166);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ 9633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _iqui_ngx_src_lib_components_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../iqui-ngx/src/lib/components/code/highlight-js/index */ 7911);
/* harmony import */ var _iqui_ngx_src_lib_components_form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../iqui-ngx/src/lib/components/form/directives/textarea/index */ 485);

// Register highlight.js languages





const _c0 = function () { return ["scss"]; };
const _c1 = function () { return ["javascript"]; };
(0,_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('scss', highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.highlightJsRegisterLanguage)('javascript', highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Showcase component
class GettingStartedPageComponent {
}
GettingStartedPageComponent.ɵfac = function GettingStartedPageComponent_Factory(t) { return new (t || GettingStartedPageComponent)(); };
GettingStartedPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: GettingStartedPageComponent, selectors: [["iqui-getting-started-page"]], decls: 25, vars: 4, consts: [[1, "card", "mt-3", "mb-3"], [1, "card-header"], [1, "row", "p-3"], [1, "p-3"], [1, "card"], [1, "p-2"], [3, "languages"], [1, "card", "mt-2"]], template: function GettingStartedPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Getting started");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\n... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Fetching the library");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Integrating into your project");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Styling");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "iqui-highlightjs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "            // Bootstrap style imports\n            @import \"~/node_modules/bootstrap/scss/bootstrap\";\n\n            // Import angular CDK structural styling\n            @import '~/node_modules/@angular/cdk/overlay-prebuilt.css';\n            @import '~/node_modules/@angular/cdk/text-field/text-field'; \n            @include cdk-text-field();\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Include into main application module");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "iqui-highlightjs", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "textarea");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "            // Import @angular dependencies\n            import { NgModule } from '@angular/core';\n            import { BrowserModule } from '@angular/platform-browser';\n            import { CommonModule } from '@angular/common';\n\n            // Import module\n            import { IqUiNgxModule } from 'iqui-ngx';\n\n            // Import application component\n            import { AppComponent } from './app.component';\n\n            // Import into main application module\n            @NgModule({\n              imports: [\n                BrowserModule,\n                CommonModule,\n                AppRoutingModule,\n\n                IqUiNgxModule\n              ],\n              declarations: [\n                AppComponent\n              ],\n              providers: [],\n              bootstrap: [AppComponent]\n            })\n\n            export class AppModule { }\n          ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("languages", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_iqui_ngx_src_lib_components_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__.HighlightJsComponent, _iqui_ngx_src_lib_components_form_directives_textarea_index__WEBPACK_IMPORTED_MODULE_4__.TextareaDirective, _iqui_ngx_src_lib_components_code_highlight_js_index__WEBPACK_IMPORTED_MODULE_3__.HighlightJsTextareaDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHlsZS5zY3NzIn0= */"] });


/***/ }),

/***/ 6174:
/*!************************************************************!*\
  !*** ./projects/showcase/src/app/getting-started/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GettingStartedPageModule": () => (/* binding */ GettingStartedPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../iqui-ngx/src/public-api */ 8330);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ 8244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);

// Import modules

// Import page component


// IQ UI NGX Elements' Functional elements module
class GettingStartedPageModule {
}
GettingStartedPageModule.ɵfac = function GettingStartedPageModule_Factory(t) { return new (t || GettingStartedPageModule)(); };
GettingStartedPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GettingStartedPageModule });
GettingStartedPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CodeModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GettingStartedPageModule, { declarations: [_component__WEBPACK_IMPORTED_MODULE_1__.GettingStartedPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _iqui_ngx_src_public_api__WEBPACK_IMPORTED_MODULE_0__.CodeModule], exports: [_component__WEBPACK_IMPORTED_MODULE_1__.GettingStartedPageComponent] }); })();


/***/ }),

/***/ 2662:
/*!***********************************************************!*\
  !*** ./projects/showcase/src/environments/environment.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 7183:
/*!***************************************!*\
  !*** ./projects/showcase/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2328);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2662);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(7183)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map