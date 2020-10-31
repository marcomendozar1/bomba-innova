(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-list-tabs-list-tabs-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-list/tabs-list/tabs-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-list/tabs-list/tabs-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"central\">\n      <ion-icon name=\"wifi-outline\"></ion-icon>\n      <ion-label>Listar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"log\">\n      <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n      <ion-label>Log</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"maps\">\n      <ion-icon name=\"map-outline\"></ion-icon>\n      <ion-label>Maps</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/menu-list/tabs-list/tabs-list-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/menu-list/tabs-list/tabs-list-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TabsListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsListRoutingModule", function() { return TabsListRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-list.component */ "./src/app/menu-list/tabs-list/tabs-list.component.ts");




const routes = [
    {
        path: 'control',
        component: _tabs_list_component__WEBPACK_IMPORTED_MODULE_3__["TabsListComponent"],
        children: [
            {
                path: 'central',
                loadChildren: () => Promise.all(/*! import() | tab-central-tab-central-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-central-tab-central-module")]).then(__webpack_require__.bind(null, /*! ../tab-central/tab-central.module */ "./src/app/menu-list/tab-central/tab-central.module.ts")).then(m => m.TabCentralModule).catch(err => console.log('Oh no!'))
            },
            {
                path: 'log',
                loadChildren: () => Promise.all(/*! import() | tab-log-tab-log-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-log-tab-log-module")]).then(__webpack_require__.bind(null, /*! ../tab-log/tab-log.module */ "./src/app/menu-list/tab-log/tab-log.module.ts")).then(m => m.TabLogModule).catch(err => console.log('Oh no!'))
            },
            {
                path: 'maps',
                loadChildren: () => __webpack_require__.e(/*! import() | tab-maps-tab-maps-module */ "tab-maps-tab-maps-module").then(__webpack_require__.bind(null, /*! ../tab-maps/tab-maps.module */ "./src/app/menu-list/tab-maps/tab-maps.module.ts")).then(m => m.TabMapsModule).catch(err => console.log('Oh no!'))
            },
            {
                path: '',
                redirectTo: '/control/central',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];
let TabsListRoutingModule = class TabsListRoutingModule {
};
TabsListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsListRoutingModule);



/***/ }),

/***/ "./src/app/menu-list/tabs-list/tabs-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/menu-list/tabs-list/tabs-list.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbGlzdC90YWJzLWxpc3QvdGFicy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/menu-list/tabs-list/tabs-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-list/tabs-list/tabs-list.component.ts ***!
  \************************************************************/
/*! exports provided: TabsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsListComponent", function() { return TabsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsListComponent = class TabsListComponent {
    constructor() { }
    ngOnInit() { }
};
TabsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-list/tabs-list/tabs-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs-list.component.scss */ "./src/app/menu-list/tabs-list/tabs-list.component.scss")).default]
    })
], TabsListComponent);



/***/ }),

/***/ "./src/app/menu-list/tabs-list/tabs-list.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu-list/tabs-list/tabs-list.module.ts ***!
  \*********************************************************/
/*! exports provided: TabsListComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsListComponentModule", function() { return TabsListComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-list-routing.module */ "./src/app/menu-list/tabs-list/tabs-list-routing.module.ts");
/* harmony import */ var _tabs_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-list.component */ "./src/app/menu-list/tabs-list/tabs-list.component.ts");







let TabsListComponentModule = class TabsListComponentModule {
};
TabsListComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsListRoutingModule"]
        ],
        declarations: [_tabs_list_component__WEBPACK_IMPORTED_MODULE_6__["TabsListComponent"]]
    })
], TabsListComponentModule);



/***/ })

}]);
//# sourceMappingURL=menu-list-tabs-list-tabs-list-module-es2015.js.map