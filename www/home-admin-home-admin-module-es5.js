function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-admin-home-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home-admin/home-admin.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-admin/home-admin.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeAdminHomeAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-admin></app-admin>\r\n<div class=\"ion-page\" id=\"main-content\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title>Bomba Inova</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"ion-text-center\">\r\n    <div class=\"content\">\r\n      <h3>Bienvenido Administrador!</h3>\r\n      <ion-icon name=\"earth\" class=\"size-icon\"></ion-icon>\r\n    </div>\r\n  </ion-content>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/home-admin/home-admin-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/home-admin/home-admin-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: HomeAdminRoutingModule */

  /***/
  function srcAppHomeAdminHomeAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeAdminRoutingModule", function () {
      return HomeAdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home-admin.component */
    "./src/app/home-admin/home-admin.component.ts");

    var routes = [{
      path: 'admin',
      component: _home_admin_component__WEBPACK_IMPORTED_MODULE_3__["HomeAdminComponent"]
    }, {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }];

    var HomeAdminRoutingModule = function HomeAdminRoutingModule() {
      _classCallCheck(this, HomeAdminRoutingModule);
    };

    HomeAdminRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomeAdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/home-admin/home-admin.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/home-admin/home-admin.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeAdminHomeAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".size-icon {\n  font-size: 128px !important;\n  color: steelblue;\n}\n\n.content {\n  padding-top: 15%;\n  padding-bottom: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1hZG1pbi9DOlxcVXNlcnNcXEx1aXMgQW50b25pb1xcRG9jdW1lbnRzXFxJb25pY1xcYm9tYmEtaW5vdmEvc3JjXFxhcHBcXGhvbWUtYWRtaW5cXGhvbWUtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUtYWRtaW4vaG9tZS1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtYWRtaW4vaG9tZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXplLWljb257XHJcbiAgZm9udC1zaXplOiAxMjhweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBzdGVlbGJsdWU7O1xyXG59XHJcbi5jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcclxufSIsIi5zaXplLWljb24ge1xuICBmb250LXNpemU6IDEyOHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDE1JTtcbiAgcGFkZGluZy1ib3R0b206IDE1JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home-admin/home-admin.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/home-admin/home-admin.component.ts ***!
    \****************************************************/

  /*! exports provided: HomeAdminComponent */

  /***/
  function srcAppHomeAdminHomeAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeAdminComponent", function () {
      return HomeAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeAdminComponent = /*#__PURE__*/function () {
      function HomeAdminComponent() {
        _classCallCheck(this, HomeAdminComponent);
      }

      _createClass(HomeAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeAdminComponent;
    }();

    HomeAdminComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home-admin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home-admin/home-admin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home-admin.component.scss */
      "./src/app/home-admin/home-admin.component.scss"))["default"]]
    })], HomeAdminComponent);
    /***/
  },

  /***/
  "./src/app/home-admin/home-admin.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/home-admin/home-admin.module.ts ***!
    \*************************************************/

  /*! exports provided: HomeAdminComponentModule */

  /***/
  function srcAppHomeAdminHomeAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeAdminComponentModule", function () {
      return HomeAdminComponentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _home_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-admin.component */
    "./src/app/home-admin/home-admin.component.ts");
    /* harmony import */


    var _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../admin/admin.module */
    "./src/app/admin/admin.module.ts");
    /* harmony import */


    var _home_admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home-admin-routing.module */
    "./src/app/home-admin/home-admin-routing.module.ts");

    var HomeAdminComponentModule = function HomeAdminComponentModule() {
      _classCallCheck(this, HomeAdminComponentModule);
    };

    HomeAdminComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _admin_admin_module__WEBPACK_IMPORTED_MODULE_6__["AdminComponentModule"], _home_admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["HomeAdminRoutingModule"]],
      declarations: [_home_admin_component__WEBPACK_IMPORTED_MODULE_5__["HomeAdminComponent"]]
    })], HomeAdminComponentModule);
    /***/
  }
}]);
//# sourceMappingURL=home-admin-home-admin-module-es5.js.map