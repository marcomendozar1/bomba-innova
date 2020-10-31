(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["menu-users-tabs-user-tabs-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-users/tabs-user/tabs-user.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-users/tabs-user/tabs-user.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"add\">\n      <ion-icon name=\"triangle\"></ion-icon>\n      <ion-label>Agregar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"delete\">\n      <ion-icon name=\"ellipse\"></ion-icon>\n      <ion-label>Borrar</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"update\">\n      <ion-icon name=\"square\"></ion-icon>\n      <ion-label>Actualizar</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "./src/app/menu-users/tabs-user/tabs-user-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/menu-users/tabs-user/tabs-user-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TabsUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsUserRoutingModule", function() { return TabsUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tabs_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs-user.component */ "./src/app/menu-users/tabs-user/tabs-user.component.ts");




const routes = [
    {
        path: 'admin-user',
        component: _tabs_user_component__WEBPACK_IMPORTED_MODULE_3__["TabsUserComponent"],
        children: [
            {
                path: 'add',
                loadChildren: () => Promise.all(/*! import() | tab-add-tab-add-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-add-tab-add-module")]).then(__webpack_require__.bind(null, /*! ../tab-add/tab-add.module */ "./src/app/menu-users/tab-add/tab-add.module.ts")).then(m => m.TabAddModule).catch(err => console.log('Oh no!'))
            },
            {
                path: 'delete',
                loadChildren: () => Promise.all(/*! import() | tab-delete-tab-delete-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-delete-tab-delete-module")]).then(__webpack_require__.bind(null, /*! ../tab-delete/tab-delete.module */ "./src/app/menu-users/tab-delete/tab-delete.module.ts")).then(m => m.TabDeleteModule).catch(err => console.log('Oh no!'))
            },
            {
                path: 'update',
                loadChildren: () => Promise.all(/*! import() | tab-update-tab-update-module */[__webpack_require__.e("common"), __webpack_require__.e("tab-update-tab-update-module")]).then(__webpack_require__.bind(null, /*! ../tab-update/tab-update.module */ "./src/app/menu-users/tab-update/tab-update.module.ts")).then(m => m.TabUpdateModule).catch(err => console.log('Oh no!'))
            },
            {
                path: '',
                redirectTo: '/admin-user/add',
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
let TabsUserRoutingModule = class TabsUserRoutingModule {
};
TabsUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsUserRoutingModule);



/***/ }),

/***/ "./src/app/menu-users/tabs-user/tabs-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/menu-users/tabs-user/tabs-user.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtdXNlcnMvdGFicy11c2VyL3RhYnMtdXNlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/menu-users/tabs-user/tabs-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/menu-users/tabs-user/tabs-user.component.ts ***!
  \*************************************************************/
/*! exports provided: TabsUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsUserComponent", function() { return TabsUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TabsUserComponent = class TabsUserComponent {
    constructor() { }
    ngOnInit() { }
};
TabsUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tabs-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-users/tabs-user/tabs-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tabs-user.component.scss */ "./src/app/menu-users/tabs-user/tabs-user.component.scss")).default]
    })
], TabsUserComponent);



/***/ }),

/***/ "./src/app/menu-users/tabs-user/tabs-user.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/menu-users/tabs-user/tabs-user.module.ts ***!
  \**********************************************************/
/*! exports provided: TabsUserComponentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsUserComponentModule", function() { return TabsUserComponentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tabs_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-user.component */ "./src/app/menu-users/tabs-user/tabs-user.component.ts");
/* harmony import */ var _tabs_user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs-user-routing.module */ "./src/app/menu-users/tabs-user/tabs-user-routing.module.ts");







let TabsUserComponentModule = class TabsUserComponentModule {
};
TabsUserComponentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabsUserRoutingModule"]
        ],
        declarations: [_tabs_user_component__WEBPACK_IMPORTED_MODULE_5__["TabsUserComponent"]]
    })
], TabsUserComponentModule);



/***/ })

}]);
//# sourceMappingURL=menu-users-tabs-user-tabs-user-module-es2015.js.map