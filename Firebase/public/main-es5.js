(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mt-4 text-center\">Template Driven Form and Reactive Form</h3>\n\n<nav class=\"navbar navbar-light bg-secondary  navbar-expand-md\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar1\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbar1\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link text-white\" routerLink = 'template' routerLinkActive = 'active'>Template Driven</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link text-white\" routerLink = 'reactive' routerLinkActive = 'active'>Reactive Form</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <router-outlet></router-outlet>\n  <nav class=\"bg-warning\">\n      <h6 class=\"text-center text-white p-3\">Copyright (C) 2013 -www.ieatcss.com</h6>\n  </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/reactive/reactive.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reactive/reactive.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\" class=\"m-0\">\n    <h2 class=\"py-5 text-center font-italic\">STUDENTS DETAILS</h2>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-3\"></div>\n            <form class=\"col-lg-4 col-md-6\" [formGroup]='userForm' (ngSubmit)='onSubmit()'>\n                <label class=\"text-white\" >Name</label>\n                <input class=\"form-control\" placeholder=\"Name\" formControlName=\"Name\">\n                <div *ngIf=\"f.Name.invalid && (f.Name.dirty || f.Name.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf='f.Name.errors.required'>\n                        <small>Name is required.!</small>\n                    </div>\n                </div>\n\n                <label class=\"text-white mt-2\">Email</label>\n                <input class=\"form-control\" placeholder=\"Email\" formControlName = 'Email'>\n                <div *ngIf=\"f.Email.invalid && (f.Email.dirty || f.Email.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf='f.Email.errors.required'>\n                        <small>Email is required.!</small>\n                    </div>\n                    <div *ngIf='f.Email.errors.email'>\n                        <small>Improper Email.!</small>\n                    </div>\n                </div>\n\n                <label class=\"text-white mt-2\">Gender</label>\n                <select class=\"form-control\" placeholder=\"Select\" formControlName = 'Gender'>\n                    <option>Male</option>\n                    <option>Female</option>\n                    <option>Other</option>\n                </select>\n                <div *ngIf=\"f.Gender.invalid && (f.Gender.dirty || f.Gender.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf='f.Gender.errors.required'>\n                        <small>Select your gender.!</small>\n                    </div>\n                </div>\n                \n                <label class=\"text-white mt-2\">Age</label>\n                <input class=\"form-control\" placeholder=\"Age\" type=\"number\" formControlName = 'Age'>\n                <div *ngIf=\"f.Age.invalid && (f.Age.dirty || f.Age.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf='f.Age.errors.required'>\n                        <small>Age is required.!</small>\n                    </div>\n                </div>\n\n                <label class=\"text-white mt-2\">Aadhar No :</label>\n                <input class=\"form-control\" placeholder=\"Aadhar No\" formControlName = 'Aadhar'>\n                <div *ngIf=\"f.Aadhar.invalid && (f.Aadhar.dirty || f.Aadhar.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf='f.Aadhar.errors.required'>\n                        <small>Enter your Aadhar No.!</small>\n                    </div>\n                </div>\n\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary my-3\" type=\"submit\">Submit</button>\n                </div>\n                \n                \n            </form>\n            <div class=\"col-lg-4 col-md-3\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/template/template.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/template/template.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"div1\" class=\"m-0\">\n    <h2 class=\"py-5 text-center font-italic\">STUDENTS DETAILS</h2>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 col-md-3\"></div>\n            <form class=\"col-lg-4 col-md-6\" (ngSubmit)='add(contactForm.value)' name=\"contactForm\" #contactForm=\"ngForm\">\n                <label class=\"text-white\" >Name</label>\n                <input class=\"form-control\" placeholder=\"Name\" ngModel #name='ngModel' name=\"name\">\n                <label class=\"text-white mt-2\">Email</label>\n                <input class=\"form-control\" placeholder=\"Email\" ngModel #name='ngModel' name='email'>\n                <label class=\"text-white mt-2\">Gender</label>\n                <select class=\"form-control\" placeholder=\"Select\" ngModel #name='ngModel' name='gender'>\n                    <option>Male</option>\n                    <option>Female</option>\n                    <option>Other</option>\n                </select>\n                <label class=\"text-white mt-2\">Age</label>\n                <input class=\"form-control\" placeholder=\"Age\" type=\"number\" ngModel #name='ngModel' name='age'>\n                <label class=\"text-white mt-2\">Aadhar No :</label>\n                <input class=\"form-control\" placeholder=\"Aadhar No\" ngModel #name='ngModel' name='aadhar'>\n                <div class=\"text-center\">\n                    <button class=\"btn btn-primary my-3\">Submit</button>\n                </div>\n                <div class=\"bg-warning text-center\">\n                    <p>{{data.name}}</p>\n                    <p>{{data.email}}</p>\n                    <p>{{data.gender}}</p>\n                    <p>{{data.age}}</p>\n                    <p>{{data.aadhar}}</p>\n                    \n                </div>\n            </form>\n            <div class=\"col-lg-4 col-md-3\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _reactive_reactive_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactive/reactive.component */ "./src/app/reactive/reactive.component.ts");






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        children: [
            { path: 'template', component: _template_template_component__WEBPACK_IMPORTED_MODULE_4__["TemplateComponent"] },
            { path: 'reactive', component: _reactive_reactive_component__WEBPACK_IMPORTED_MODULE_5__["ReactiveComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Forms';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./template/template.component */ "./src/app/template/template.component.ts");
/* harmony import */ var _reactive_reactive_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactive/reactive.component */ "./src/app/reactive/reactive.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _template_template_component__WEBPACK_IMPORTED_MODULE_6__["TemplateComponent"],
                _reactive_reactive_component__WEBPACK_IMPORTED_MODULE_7__["ReactiveComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/reactive/reactive.component.css":
/*!*************************************************!*\
  !*** ./src/app/reactive/reactive.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1{\r\n    background-image : -webkit-gradient(linear, left top, right top, from(yellow), to(pink));\r\n    background-image : linear-gradient(to right, yellow, pink);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhY3RpdmUvcmVhY3RpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdGQUEwRDtJQUExRCwwREFBMEQ7QUFDOUQiLCJmaWxlIjoic3JjL2FwcC9yZWFjdGl2ZS9yZWFjdGl2ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdjF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCB5ZWxsb3csIHBpbmspO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/reactive/reactive.component.ts":
/*!************************************************!*\
  !*** ./src/app/reactive/reactive.component.ts ***!
  \************************************************/
/*! exports provided: ReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveComponent", function() { return ReactiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



 //Validator
var ReactiveComponent = /** @class */ (function () {
    function ReactiveComponent() {
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            Gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Aadhar: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.submitted = false;
    }
    ReactiveComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ReactiveComponent.prototype, "f", {
        //This is For every element. But we can use only one for all, see below.
        //  get Name(){   
        //    return this.userForm.get('Name'); 
        //  }
        //  get Email(){
        //    return this.userForm.get('Email');
        //  }
        //  get Age(){
        //    return this.userForm.get('Age');
        //  }
        //  get Gender(){
        //   return this.userForm.get('Gender');
        // }
        // get Aadhar(){
        //   return this.userForm.get('Aadhar');
        // }
        get: function () { return this.userForm.controls; } //This is only one for all
        ,
        enumerable: true,
        configurable: true
    });
    ReactiveComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.userForm.invalid) {
            return;
        }
        alert('Success! \n' + JSON.stringify(this.userForm.value));
        this.userForm.reset();
    };
    ReactiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reactive',
            template: __webpack_require__(/*! raw-loader!./reactive.component.html */ "./node_modules/raw-loader/index.js!./src/app/reactive/reactive.component.html"),
            styles: [__webpack_require__(/*! ./reactive.component.css */ "./src/app/reactive/reactive.component.css")]
        })
    ], ReactiveComponent);
    return ReactiveComponent;
}());



/***/ }),

/***/ "./src/app/template/template.component.css":
/*!*************************************************!*\
  !*** ./src/app/template/template.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#div1{\r\n    background-image : -webkit-gradient(linear, left top, right top, from(green), to(yellow));\r\n    background-image : linear-gradient(to right, green, yellow);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlGQUEyRDtJQUEzRCwyREFBMkQ7QUFDL0QiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZS90ZW1wbGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RpdjF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlIDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBncmVlbiwgeWVsbG93KTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/template/template.component.ts":
/*!************************************************!*\
  !*** ./src/app/template/template.component.ts ***!
  \************************************************/
/*! exports provided: TemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateComponent", function() { return TemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TemplateComponent = /** @class */ (function () {
    function TemplateComponent() {
        this.data = {
            'name': '',
            'email': '',
            'gender': '',
            'age': '',
            'aadhar': ''
        };
    }
    TemplateComponent.prototype.ngOnInit = function () {
    };
    TemplateComponent.prototype.add = function (value) {
        this.data.name = value.name;
        this.data.email = value.email;
        this.data.gender = value.gender;
        this.data.age = value.age;
        this.data.aadhar = value.aadhar;
    };
    TemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-template',
            template: __webpack_require__(/*! raw-loader!./template.component.html */ "./node_modules/raw-loader/index.js!./src/app/template/template.component.html"),
            styles: [__webpack_require__(/*! ./template.component.css */ "./src/app/template/template.component.css")]
        })
    ], TemplateComponent);
    return TemplateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\Angular\Task\Forms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map