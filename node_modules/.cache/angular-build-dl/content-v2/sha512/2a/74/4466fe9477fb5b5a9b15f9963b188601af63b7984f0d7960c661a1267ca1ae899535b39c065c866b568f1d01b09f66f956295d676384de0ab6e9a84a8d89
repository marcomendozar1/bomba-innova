(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-maps-tab-maps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-list/tab-maps/tab-maps.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-list/tab-maps/tab-maps.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-icon name=\"arrow-undo-outline\" class=\"back-menu\" button (click)=\"back()\"></ion-icon>\n  </ion-buttons>\n  <ion-title>Control Bombas</ion-title>\n</ion-toolbar>\n<ion-content class=\"ion-text-center\">\n  <h5>Aqui va el mapa</h5>\n  <div class=\"mapouter\">\n    <div class=\"gmap_canvas\">\n      <iframe class=\"iframe\" id=\"gmap_canvas\" [src]=\"url\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\"\n        marginwidth=\"0\">\n      </iframe>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/menu-list/tab-maps/tab-maps-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/menu-list/tab-maps/tab-maps-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: TabMapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMapsRoutingModule", function() { return TabMapsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab_maps_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab-maps.component */ "./src/app/menu-list/tab-maps/tab-maps.component.ts");




const routes = [
    {
        path: '',
        component: _tab_maps_component__WEBPACK_IMPORTED_MODULE_3__["TabMapsComponent"],
    }
];
let TabMapsRoutingModule = class TabMapsRoutingModule {
};
TabMapsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabMapsRoutingModule);



/***/ }),

/***/ "./src/app/menu-list/tab-maps/tab-maps.component.scss":
/*!************************************************************!*\
  !*** ./src/app/menu-list/tab-maps/tab-maps.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".back-menu {\n  padding-left: 20%;\n  font-size: 24px !important;\n  color: steelblue;\n}\n\n.mapouter {\n  position: relative;\n  text-align: right;\n}\n\n.gmap_canvas {\n  overflow: hidden;\n  background: none !important;\n}\n\n.iframe {\n  width: 100%;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1saXN0L3RhYi1tYXBzL0M6XFxVc2Vyc1xcTHVpcyBBbnRvbmlvXFxEb2N1bWVudHNcXElvbmljXFxib21iYS1pbm92YS9zcmNcXGFwcFxcbWVudS1saXN0XFx0YWItbWFwc1xcdGFiLW1hcHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21lbnUtbGlzdC90YWItbWFwcy90YWItbWFwcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbGlzdC90YWItbWFwcy90YWItbWFwcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLW1lbnV7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMCU7XHJcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHN0ZWVsYmx1ZTs7XHJcbn1cclxuLm1hcG91dGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuLmdtYXBfY2FudmFzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlmcmFtZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59IiwiLmJhY2stbWVudSB7XG4gIHBhZGRpbmctbGVmdDogMjAlO1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuLm1hcG91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmdtYXBfY2FudmFzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-list/tab-maps/tab-maps.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/menu-list/tab-maps/tab-maps.component.ts ***!
  \**********************************************************/
/*! exports provided: TabMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMapsComponent", function() { return TabMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




let TabMapsComponent = class TabMapsComponent {
    constructor(router, sanitizer) {
        this.router = router;
        this.sanitizer = sanitizer;
        this.address = "https://www.google.com/maps/search/19.1608763,-99.5671104,15.1z&ie=UTF8&iwloc=&output=embed";
        this.url =
            sanitizer.bypassSecurityTrustResourceUrl(this.address);
    }
    ngOnInit() { }
    back() {
        this.router.navigate(['admin']);
    }
};
TabMapsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
TabMapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-maps',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab-maps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-list/tab-maps/tab-maps.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab-maps.component.scss */ "./src/app/menu-list/tab-maps/tab-maps.component.scss")).default]
    })
], TabMapsComponent);



/***/ }),

/***/ "./src/app/menu-list/tab-maps/tab-maps.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/menu-list/tab-maps/tab-maps.module.ts ***!
  \*******************************************************/
/*! exports provided: TabMapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMapsModule", function() { return TabMapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab_maps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab-maps.component */ "./src/app/menu-list/tab-maps/tab-maps.component.ts");
/* harmony import */ var _tab_maps_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-maps-routing.module */ "./src/app/menu-list/tab-maps/tab-maps-routing.module.ts");







let TabMapsModule = class TabMapsModule {
};
TabMapsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tab_maps_routing_module__WEBPACK_IMPORTED_MODULE_6__["TabMapsRoutingModule"]
        ],
        declarations: [_tab_maps_component__WEBPACK_IMPORTED_MODULE_5__["TabMapsComponent"]]
    })
], TabMapsModule);



/***/ })

}]);
//# sourceMappingURL=tab-maps-tab-maps-module-es2015.js.map