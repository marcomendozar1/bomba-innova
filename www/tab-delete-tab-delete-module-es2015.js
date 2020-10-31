(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-delete-tab-delete-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-bombas/tab-delete/tab-delete.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-bombas/tab-delete/tab-delete.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-icon name=\"arrow-undo-outline\" class=\"back-menu\" button (click)=\"back()\"></ion-icon>\n  </ion-buttons>\n  <ion-title>Administrar Bombas</ion-title>\n</ion-toolbar>\n<ion-content class=\"ion-text-center\">\n  <h5>Borrar Bomba</h5>\n  <ion-toolbar>\n    <ion-searchbar (ionInput)=\"filterList($event)\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-card class=\"card\">\n        <ion-item>\n          <ion-icon name=\"hardware-chip-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{item.name}}</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\" color=\"danger\" (click)=\"eliminar(item)\">Borrar</ion-button>\n        </ion-item>\n        <ion-card-content>\n          <ion-label>Direccion: {{item.direccion}}</ion-label>\n          <ion-label>Latitud: {{item.latitud}}</ion-label>\n          <ion-label>Longitud: {{item.longitud}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-users/tab-delete/tab-delete.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-users/tab-delete/tab-delete.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-icon name=\"arrow-undo-outline\" class=\"back-menu\" button (click)=\"back()\"></ion-icon>\n  </ion-buttons>\n  <ion-title>Administrar Usuarios</ion-title>\n</ion-toolbar>\n<ion-content class=\"ion-text-center\">\n  <h5>Borrar Usuario</h5>\n  <ion-toolbar>\n    <ion-searchbar ionChange=\"search()\"></ion-searchbar>\n  </ion-toolbar>\n  <ion-list>\n    <ion-item *ngFor=\"let item of items\">\n      <ion-card class=\"card\">\n        <ion-item>\n          <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n          <ion-label>{{item.username}}</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\" color=\"danger\" (click)=\"eliminar(item)\">Borrar</ion-button>\n        </ion-item>\n        <ion-card-content>\n          <ion-label>Email:{{item.email}}</ion-label>\n          <ion-label>Telefono:{{item.tel}}</ion-label>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/menu-bombas/tab-delete/tab-delete-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/menu-bombas/tab-delete/tab-delete-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TabDeleteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDeleteRoutingModule", function() { return TabDeleteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-delete.component */ "./src/app/menu-bombas/tab-delete/tab-delete.component.ts");




const routes = [
    {
        path: '',
        component: _tab_delete_component__WEBPACK_IMPORTED_MODULE_3__["TabDeleteComponent"],
    }
];
let TabDeleteRoutingModule = class TabDeleteRoutingModule {
};
TabDeleteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabDeleteRoutingModule);



/***/ }),

/***/ "./src/app/menu-bombas/tab-delete/tab-delete.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/menu-bombas/tab-delete/tab-delete.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-menu {\n  padding-left: 20%;\n  font-size: 24px !important;\n  color: steelblue;\n}\n\n.card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1ib21iYXMvdGFiLWRlbGV0ZS9DOlxcVXNlcnNcXEx1aXMgQW50b25pb1xcRG9jdW1lbnRzXFxJb25pY1xcYm9tYmEtaW5vdmEvc3JjXFxhcHBcXG1lbnUtYm9tYmFzXFx0YWItZGVsZXRlXFx0YWItZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZW51LWJvbWJhcy90YWItZGVsZXRlL3RhYi1kZWxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21lbnUtYm9tYmFzL3RhYi1kZWxldGUvdGFiLWRlbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLW1lbnV7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHN0ZWVsYmx1ZTs7XHJcbn1cclxuLmNhcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuYmFjay1tZW51IHtcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogc3RlZWxibHVlO1xufVxuXG4uY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-bombas/tab-delete/tab-delete.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/menu-bombas/tab-delete/tab-delete.component.ts ***!
  \****************************************************************/
/*! exports provided: TabDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDeleteComponent", function() { return TabDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_conexion_bomba_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/conexion-bomba.service */ "./src/app/services/conexion-bomba.service.ts");




let TabDeleteComponent = class TabDeleteComponent {
    constructor(router, conexion) {
        this.router = router;
        this.conexion = conexion;
        this.conexion.listaItem().subscribe(item => {
            this.items = item;
        });
    }
    ngOnInit() { }
    eliminar(item) {
        this.conexion.deleteItem(item);
    }
    back() {
        this.router.navigate(['admin']);
    }
    filterList(evt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items = yield this.conexion.initializeItems();
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.items = this.items.filter(item => {
                const search = item.name + " " + item.direccion;
                if (search && searchTerm) {
                    return (search.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
};
TabDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_conexion_bomba_service__WEBPACK_IMPORTED_MODULE_3__["ConexionBombaService"] }
];
TabDeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-delete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-bombas/tab-delete/tab-delete.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab-delete.component.scss */ "./src/app/menu-bombas/tab-delete/tab-delete.component.scss")).default]
    })
], TabDeleteComponent);



/***/ }),

/***/ "./src/app/menu-bombas/tab-delete/tab-delete.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/menu-bombas/tab-delete/tab-delete.module.ts ***!
  \*************************************************************/
/*! exports provided: TabDeleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDeleteModule", function() { return TabDeleteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-delete.component */ "./src/app/menu-bombas/tab-delete/tab-delete.component.ts");
/* harmony import */ var _tab_delete_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-delete-routing.module */ "./src/app/menu-bombas/tab-delete/tab-delete-routing.module.ts");







let TabDeleteModule = class TabDeleteModule {
};
TabDeleteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab_delete_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabDeleteRoutingModule"]
        ],
        declarations: [_tab_delete_component__WEBPACK_IMPORTED_MODULE_5__["TabDeleteComponent"]]
    })
], TabDeleteModule);



/***/ }),

/***/ "./src/app/menu-users/tab-delete/tab-delete-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/menu-users/tab-delete/tab-delete-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: TabDeleteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDeleteRoutingModule", function() { return TabDeleteRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab_delete_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-delete.component */ "./src/app/menu-users/tab-delete/tab-delete.component.ts");




const routes = [
    {
        path: '',
        component: _tab_delete_component__WEBPACK_IMPORTED_MODULE_3__["TabDeleteComponent"],
    }
];
let TabDeleteRoutingModule = class TabDeleteRoutingModule {
};
TabDeleteRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabDeleteRoutingModule);



/***/ }),

/***/ "./src/app/menu-users/tab-delete/tab-delete.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/menu-users/tab-delete/tab-delete.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-menu {\n  padding-left: 20%;\n  font-size: 24px !important;\n  color: steelblue;\n}\n\n.card {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS11c2Vycy90YWItZGVsZXRlL0M6XFxVc2Vyc1xcTHVpcyBBbnRvbmlvXFxEb2N1bWVudHNcXElvbmljXFxib21iYS1pbm92YS9zcmNcXGFwcFxcbWVudS11c2Vyc1xcdGFiLWRlbGV0ZVxcdGFiLWRlbGV0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWVudS11c2Vycy90YWItZGVsZXRlL3RhYi1kZWxldGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21lbnUtdXNlcnMvdGFiLWRlbGV0ZS90YWItZGVsZXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2stbWVudXtcclxuICBwYWRkaW5nLWxlZnQ6IDIwJTtcclxuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogc3RlZWxibHVlOztcclxufVxyXG4uY2FyZHtcclxuICB3aWR0aDogMTAwJTtcclxufSIsIi5iYWNrLW1lbnUge1xuICBwYWRkaW5nLWxlZnQ6IDIwJTtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBzdGVlbGJsdWU7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-users/tab-delete/tab-delete.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/menu-users/tab-delete/tab-delete.component.ts ***!
  \***************************************************************/
/*! exports provided: TabDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDeleteComponent", function() { return TabDeleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_conexion_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/conexion-user.service */ "./src/app/services/conexion-user.service.ts");




let TabDeleteComponent = class TabDeleteComponent {
    constructor(router, conexion) {
        this.router = router;
        this.conexion = conexion;
        this.conexion.listaItem().subscribe(item => {
            this.items = item;
        });
    }
    ngOnInit() { }
    search() {
        console.log("vas");
    }
    eliminar(item) {
        this.conexion.deleteItem(item);
    }
    back() {
        this.router.navigate(['admin']);
    }
};
TabDeleteComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_conexion_user_service__WEBPACK_IMPORTED_MODULE_3__["ConexionUserService"] }
];
TabDeleteComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-delete',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-users/tab-delete/tab-delete.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab-delete.component.scss */ "./src/app/menu-users/tab-delete/tab-delete.component.scss")).default]
    })
], TabDeleteComponent);



/***/ }),

/***/ "./src/app/menu-users/tab-delete/tab-delete.module.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-users/tab-delete/tab-delete.module.ts ***!
  \************************************************************/
/*! exports provided: TabDeleteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDeleteModule", function() { return TabDeleteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-delete.component */ "./src/app/menu-users/tab-delete/tab-delete.component.ts");
/* harmony import */ var _tab_delete_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-delete-routing.module */ "./src/app/menu-users/tab-delete/tab-delete-routing.module.ts");







let TabDeleteModule = class TabDeleteModule {
};
TabDeleteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab_delete_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabDeleteRoutingModule"]
        ],
        declarations: [_tab_delete_component__WEBPACK_IMPORTED_MODULE_5__["TabDeleteComponent"]]
    })
], TabDeleteModule);



/***/ })

}]);
//# sourceMappingURL=tab-delete-tab-delete-module-es2015.js.map