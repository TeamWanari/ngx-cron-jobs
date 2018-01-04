webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container my-4\">\r\n  <div class=\"row\">\r\n    <div class=\"col text-center\">\r\n      <h3 class=\"display-4\">Demo ngx-cron-jobs</h3>\r\n      <p class=\"lead\">Custom widget for scheduling task in posix cron and quartz cron expressions.\r\n        <br>\r\n        Angular > 2 version of <a href=\"https://github.com/angular-cron-jobs/angular-cron-jobs\">angular-cron-jobs</a>.\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col d-flex justify-content-center\">\r\n      <a href=\"https://github.com/yp2/ngx-cron-jobs\"><img src=\"assets/GitHub-Mark-32px.png\"></a>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <hr>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <form class=\"\">\r\n        <div class=\"form-group\">\r\n          <label> Set frequency (ngModel)</label>\r\n          <cron-jobs [(ngModel)]=\"freq\" [ngModelOptions]=\"{standalone: true}\" [config]=\"cronConfig\"></cron-jobs>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Set frequency (ReactiveForm)</label>\r\n          <cron-jobs [formControl]=\"freqControl\" [config]=\"cronConfig\" [validate]=\"cronValidate\"></cron-jobs>\r\n          <div [ngClass]=\"{'d-block': freqControl.errors?.required}\" class=\"invalid-feedback\">Field is required</div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label>Set frequency no multi choice (reactive form)</label>\r\n          <cron-jobs [formControl]=\"freqSingleControl\" [config]=\"cronSingleConfig\"\r\n                     [validate]=\"cronValidate\"></cron-jobs>\r\n          <div [ngClass]=\"{'d-block': freqControl.errors?.required}\" class=\"invalid-feedback\">Field is required</div>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <hr>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <dl class=\"row\">\r\n        <dt class=\"col-7\">Value (ngModel):</dt>\r\n        <dd class=\"col-5\">{{freq ? freq : 'none'}}</dd>\r\n        <dt class=\"col-7\">Value (ReactiveForm):</dt>\r\n        <dd class=\"col-5\">{{freqSec ? freqSec : 'none'}}</dd>\r\n        <dt class=\"col-7\">Value no multi:</dt>\r\n        <dd class=\"col-5\">{{freqSingle ? freqSingle : 'none'}}</dd>\r\n        <dt class=\"col-7\">Used Service:</dt>\r\n        <dd class=\"col-5\">{{cronConfig.quartz ? 'Quartz' : 'Cron' }}</dd>\r\n        <dt class=\"col-7\">Is Bootstrap 4 template?</dt>\r\n        <dd class=\"col-5\">{{cronConfig.bootstrap ? 'Yes' : 'No' }}</dd>\r\n        <dt class=\"col-7\">Add Bootstrap 4 validation classes?</dt>\r\n        <dd class=\"col-5\">{{cronValidate.validate ? 'Yes' : 'No' }}</dd>\r\n        <dt class=\"col-7\">Validators on form control</dt>\r\n        <dd class=\"col-5\">required</dd>\r\n      </dl>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <form novalidate>\r\n        <div class=\"form-group\">\r\n          <label *ngIf=\"!cronConfig.quartz\">Frequency in cron format</label>\r\n          <label *ngIf=\"cronConfig.quartz\">Frequency in quartz format</label>\r\n          <input class=\"form-control\" type=\"text\"\r\n                 [(ngModel)]=\"freq\" [ngModelOptions]=\"{standalone: true}\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label *ngIf=\"!cronConfig.quartz\">Frequency in cron format</label>\r\n          <label *ngIf=\"cronConfig.quartz\">Frequency in quartz format</label>\r\n          <input class=\"form-control\" type=\"text\"\r\n                 [(ngModel)]=\"freqSec\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"setFormControl()\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label *ngIf=\"!cronConfig.quartz\">Frequency in cron format</label>\r\n          <label *ngIf=\"cronConfig.quartz\">Frequency in quartz format</label>\r\n          <input class=\"form-control\" type=\"text\"\r\n                 [(ngModel)]=\"freqSingle\" [ngModelOptions]=\"{standalone: true}\" (keyup)=\"setFormControl()\">\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"row d-flex justify-content-center\">\r\n    <div class=\"col-7 d-flex justify-content-between\">\r\n      <button class=\"btn\" (click)=\"reset()\">Reset</button>\r\n      <button class=\"btn\" (click)=\"set()\">Set</button>\r\n      <button class=\"btn\" (click)=\"toggleService()\">Toggle Service</button>\r\n      <button class=\"btn\" (click)=\"toggleBootstrap()\">Toggle Bootstrap</button>\r\n      <button class=\"btn\" (click)=\"toggleValidate()\">Toggle Validate</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.freq = '';
        this.freqQuartz = '0 20 3 2 3 ?';
        this.freqCron = '35 4 4 3 *';
        this.freqSec = '';
        this.freqSecCron = '35 4 4 3 *';
        this.freqSecQuartz = '0 20 3 2 3 ?';
        this.freqSingle = '';
        this.freqSingleCron = '35 4 4 3 *';
        this.freqSingleQuartz = '0 20 3 2 3 ?';
        this.cronConfig = {
            multiple: true,
            quartz: true,
            bootstrap: true
        };
        this.cronSingleConfig = __assign({}, this.cronConfig, { multiple: false });
        this.cronValidate = {
            validate: true
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.freqControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.freqControl.setValue(this.freqSec);
        this.freqControl.setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]);
        this.freqControl.valueChanges
            .subscribe(function (value) { return _this.freqSec = value; });
        this.freqSingleControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.freqSingleControl.setValue(this.freqSingle);
        this.freqSingleControl.setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]);
        this.freqSingleControl.valueChanges
            .subscribe(function (value) { return _this.freqSingle = value; });
    };
    AppComponent.prototype.reset = function () {
        this.freq = '';
        this.freqSec = '';
        this.freqSingle = '';
        this.setFormControl();
    };
    AppComponent.prototype.set = function () {
        if (this.cronConfig.quartz) {
            this.freq = this.freqQuartz;
            this.freqSec = this.freqSecQuartz;
            this.freqSingle = this.freqSingleQuartz;
        }
        else {
            this.freq = this.freqCron;
            this.freqSec = this.freqSecCron;
            this.freqSingle = this.freqSingleCron;
        }
        this.setFormControl();
    };
    AppComponent.prototype.toggleService = function () {
        this.cronConfig = __assign({}, this.cronConfig, { quartz: !this.cronConfig.quartz });
        this.cronSingleConfig = __assign({}, this.cronSingleConfig, { quartz: !this.cronSingleConfig.quartz });
        this.set();
    };
    AppComponent.prototype.toggleBootstrap = function () {
        this.cronConfig = __assign({}, this.cronConfig, { bootstrap: !this.cronConfig.bootstrap });
        this.cronSingleConfig = __assign({}, this.cronSingleConfig, { bootstrap: !this.cronSingleConfig.bootstrap });
    };
    AppComponent.prototype.setFormControl = function () {
        var _this = this;
        setTimeout(function () {
            _this.freqControl.setValue(_this.freqSec);
            _this.freqSingleControl.setValue(_this.freqSingle);
        });
    };
    AppComponent.prototype.toggleValidate = function () {
        this.cronValidate = __assign({}, this.cronValidate, { validate: !this.cronValidate.validate });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cron-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_cron_jobs_module__ = __webpack_require__("../../../../../src/app/lib/cron-jobs.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__lib_cron_jobs_module__["a" /* CronJobsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/cron-jobs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronJobsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cron_jobs_cron_jobs_component__ = __webpack_require__("../../../../../src/app/lib/cron-jobs/cron-jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/lib/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_posix_service__ = __webpack_require__("../../../../../src/app/lib/services/posix.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_quartz_service__ = __webpack_require__("../../../../../src/app/lib/services/quartz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CronJobsModule = (function () {
    function CronJobsModule() {
    }
    CronJobsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* ReactiveFormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__cron_jobs_cron_jobs_component__["a" /* CronJobsComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__cron_jobs_cron_jobs_component__["a" /* CronJobsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_5__services_posix_service__["a" /* PosixService */],
                __WEBPACK_IMPORTED_MODULE_6__services_quartz_service__["a" /* QuartzService */]
            ]
        })
    ], CronJobsModule);
    return CronJobsModule;
}());



/***/ }),

/***/ "../../../../../src/app/lib/cron-jobs/cron-jobs.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\r\n  display: block;\r\n}\r\n\r\n.cron-select-wrap {\r\n  display: inline-block;\r\n}\r\n\r\n.cron-select-wrap .cron-select {\r\n  width: 150px;\r\n  height: 34px;\r\n  padding: 6px 12px;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  line-height: 1.42857143;\r\n  color: #555;\r\n  background: #fff none;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\r\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n}\r\n\r\n.cron-select-wrap select[multiple] {\r\n  height: 140px;\r\n}\r\n\r\n.select-options {\r\n  display: inline-block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lib/cron-jobs/cron-jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-inline\" *ngIf=\"config?.bootstrap\" [formGroup]=\"cronJobsForm\">\r\n  <label class=\"mr-sm-2\" for=\"selectBase\">Every: </label>\r\n  <select class=\"form-control\" id=\"selectBase\" (blur)=\"onBlur()\"\r\n          [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n          formControlName=\"baseFrequency\">\r\n    <option *ngFor=\"let item of baseFrequencyData\" [value]=\"item.value\">{{item.label}}</option>\r\n  </select>\r\n  <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) === 4\">on</label>\r\n  <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\r\n          [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n          *ngIf=\"(baseFrequency$ | async) === 4\" formControlName=\"daysOfWeek\">\r\n    <option *ngFor=\"let item of daysOfWeekData\" [value]=\"item.value\">{{item.label}}</option>\r\n  </select>\r\n  <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) >= 5\">on the</label>\r\n  <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\r\n          [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n          *ngIf=\"(baseFrequency$ | async) >= 5\" formControlName=\"daysOfMonth\">\r\n    <option *ngFor=\"let item of daysOfMonthData\" [value]=\"item.value\">{{item.label}}</option>\r\n  </select>\r\n  <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) === 6\">of</label>\r\n  <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\r\n          [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n          *ngIf=\"(baseFrequency$ | async) === 6\" formControlName=\"months\">\r\n    <option *ngFor=\"let item of monthsData\" [ngValue]=\"item.value\">{{item.label}}</option>\r\n  </select>\r\n  <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) >= 2\">at</label>\r\n  <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\r\n          [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n          *ngIf=\"(baseFrequency$ | async) >= 3\" formControlName=\"hours\">\r\n    <option *ngFor=\"let item of hoursData\" [value]=\"item.value\">{{item.label}}</option>\r\n  </select>\r\n  <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) >= 3 \">:</label>\r\n  <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\r\n          [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n          *ngIf=\"(baseFrequency$ | async) >=2\" formControlName=\"minutes\">\r\n    <option *ngFor=\"let item of minutesData\" [value]=\"item.value\">{{item.label}}</option>\r\n  </select>\r\n  <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) === 2\">past the hour</label>\r\n</div>\r\n<div class=\"cron-wrap\" *ngIf=\"!config?.bootstrap\" [formGroup]=\"cronJobsForm\">\r\n  <span>Every: </span>\r\n  <div class=\"cron-select-wrap\">\r\n    <select class=\"cron-select\" formControlName=\"baseFrequency\" (blur)=\"onBlur()\"\r\n            [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\">\r\n      <option *ngFor=\"let item of baseFrequencyData\" [value]=\"item.value\">{{item.label}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"select-options\">\r\n    <span  *ngIf=\"(baseFrequency$ | async) === 4\">on </span>\r\n    <div *ngIf=\"(baseFrequency$ | async) === 4\" class=\"cron-select-wrap\">\r\n      <select multiple [multiple]=\"config.multiple\" class=\"cron-select day-of-week-value\" (blur)=\"onBlur()\"\r\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n              formControlName=\"daysOfWeek\">\r\n        <option *ngFor=\"let item of daysOfWeekData\" [value]=\"item.value\">{{item.label}}</option>\r\n      </select>\r\n    </div>\r\n    <span *ngIf=\"(baseFrequency$ | async) >= 5\">on the </span>\r\n    <div *ngIf=\"(baseFrequency$ | async) >= 5\" class=\"cron-select-wrap\">\r\n      <select multiple [multiple]=\"config.multiple\" class=\"cron-select day-of-month-value\" (blur)=\"onBlur()\"\r\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n              formControlName=\"daysOfMonth\">\r\n        <option *ngFor=\"let item of daysOfMonthData\" [value]=\"item.value\">{{item.label}}</option>\r\n      </select>\r\n    </div>\r\n    <span *ngIf=\"(baseFrequency$ | async) === 6\">of </span>\r\n    <div *ngIf=\"(baseFrequency$ | async) === 6\" class=\"cron-select-wrap\">\r\n      <select multiple [multiple]=\"config.multiple\" class=\"cron-select month-value\" (blur)=\"onBlur()\"\r\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n              formControlName=\"months\">\r\n        <option *ngFor=\"let item of monthsData\" [ngValue]=\"item.value\">{{item.label}}</option>\r\n      </select>\r\n    </div>\r\n    <span *ngIf=\"(baseFrequency$ | async) >= 3 \">at </span>\r\n    <div *ngIf=\"(baseFrequency$ | async) >= 3\" class=\"cron-select-wrap\">\r\n      <select multiple [multiple]=\"config.multiple\" class=\"cron-select hour-value\" (blur)=\"onBlur()\"\r\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n              formControlName=\"hours\">\r\n        <option *ngFor=\"let item of hoursData\" [value]=\"item.value\">{{item.label}}</option>\r\n      </select>\r\n    </div>\r\n    <span *ngIf=\"(baseFrequency$ | async) >= 3\"> : </span>\r\n    <div *ngIf=\"(baseFrequency$ | async) >=2\" class=\"cron-select-wrap\">\r\n      <select multiple [multiple]=\"config.multiple\" class=\"cron-select minute-value\" (blur)=\"onBlur()\"\r\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\r\n              formControlName=\"minutes\">\r\n        <option *ngFor=\"let item of minutesData\" [value]=\"item.value\">{{item.label}}</option>\r\n      </select>\r\n    </div>\r\n    <span *ngIf=\"(baseFrequency$ | async) === 2\"> past the hour</span>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/lib/cron-jobs/cron-jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CronJobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/lib/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_publishReplay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/publishReplay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_posix_service__ = __webpack_require__("../../../../../src/app/lib/services/posix.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_quartz_service__ = __webpack_require__("../../../../../src/app/lib/services/quartz.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CronJobsComponent = (function () {
    function CronJobsComponent(dataService, injector, formBuilder) {
        this.dataService = dataService;
        this.injector = injector;
        this.formBuilder = formBuilder;
        this.isValid = true;
        this.isDisabled = false;
        this.daysOfWeekData = [];
        this.daysOfMonthData = [];
        this.monthsData = [];
        this.hoursData = [];
        this.minutesData = [];
        this.isPatching = false;
        this.unSubscribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.cronJobsForm = this.formBuilder.group({
            baseFrequency: 0,
            daysOfWeek: '',
            daysOfMonth: '',
            months: '',
            hours: '',
            minutes: ''
        });
        this.config = this.dataService.getConfig();
        this.validate = this.dataService.getValidate();
        this.setService();
    }
    CronJobsComponent_1 = CronJobsComponent;
    CronJobsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.baseFrequency$ = this.cronJobsForm.get('baseFrequency')
            .valueChanges
            .takeUntil(this.unSubscribe)
            .map(function (v) { return +v; })
            .publishReplay(1)
            .refCount();
        this.cronJobsForm
            .valueChanges
            .takeUntil(this.unSubscribe)
            .filter(function () { return !_this.isPatching; })
            .map(function (freq) {
            freq.baseFrequency = +freq.baseFrequency;
            return freq;
        })
            .subscribe(function (values) {
            if (!values.baseFrequency) {
                values = _this.cronService.getDefaultFrequenceWithDefault();
                _this.cronJobsForm.patchValue(values, { emitEvent: false });
            }
            _this.onChange(_this.cronService.setCron(values));
        });
        this.baseFrequencyData = this.dataService.baseFrequency;
        this.daysOfMonthData = this.dataService.daysOfMonth;
        this.daysOfWeekData = this.dataService.getDaysOfWeek(false);
        this.monthsData = this.dataService.months;
        this.hoursData = this.dataService.hours;
        this.minutesData = this.dataService.minutes;
        this.isPatching = true;
        setTimeout(function () {
            _this.cronJobsForm.patchValue(_this.cronService.getDefaultFrequenceWithDefault());
            _this.isPatching = false;
        });
    };
    CronJobsComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    CronJobsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['config']) {
            this.config = this.dataService.getConfig(changes['config'].currentValue);
            setTimeout(function () {
                if (!changes['config'].previousValue ||
                    changes['config'].previousValue['quartz'] !== changes['config'].currentValue['quartz']) {
                    _this.daysOfWeekData = _this.dataService.getDaysOfWeek(_this.config.quartz);
                    _this.cronJobsForm.patchValue({ daysOfWeek: _this.daysOfWeekData[0].value });
                }
            });
            this.setService();
        }
        if (changes['validate']) {
            this.validate = this.dataService.getValidate(changes['validate'].currentValue);
        }
    };
    CronJobsComponent.prototype.setService = function () {
        if (this.config.quartz) {
            this.cronService = this.injector.get(__WEBPACK_IMPORTED_MODULE_10__services_quartz_service__["a" /* QuartzService */]);
        }
        else {
            this.cronService = this.injector.get(__WEBPACK_IMPORTED_MODULE_9__services_posix_service__["a" /* PosixService */]);
        }
    };
    CronJobsComponent.prototype.writeValue = function (cronValue) {
        var _this = this;
        this.isPatching = true;
        var valueToPatch;
        if (cronValue) {
            valueToPatch = this.cronService.fromCronWithDefault(cronValue);
        }
        else {
            valueToPatch = this.cronService.getDefaultFrequenceWithDefault();
        }
        setTimeout(function () {
            _this.cronJobsForm.patchValue(valueToPatch);
            _this.isPatching = false;
        });
    };
    CronJobsComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    CronJobsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    CronJobsComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
        if (this.isDisabled) {
            this.cronJobsForm.disable();
        }
        else {
            this.cronJobsForm.enable();
        }
    };
    CronJobsComponent.prototype.getIsValid = function () {
        return this.validate.validate ? this.getValid() : false;
    };
    CronJobsComponent.prototype.getIsInvalid = function () {
        return this.validate.validate ? !this.getValid() : false;
    };
    CronJobsComponent.prototype.getValid = function () {
        return this.formControl ? this.formControl.valid : this.isValid;
    };
    CronJobsComponent.prototype.ngOnDestroy = function () {
        this.unSubscribe.next();
        this.unSubscribe.complete();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CronJobsComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CronJobsComponent.prototype, "validate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], CronJobsComponent.prototype, "isValid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */])
    ], CronJobsComponent.prototype, "formControl", void 0);
    CronJobsComponent = CronJobsComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'cron-jobs',
            template: __webpack_require__("../../../../../src/app/lib/cron-jobs/cron-jobs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lib/cron-jobs/cron-jobs.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_posix_service__["a" /* PosixService */],
                __WEBPACK_IMPORTED_MODULE_10__services_quartz_service__["a" /* QuartzService */],
                __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* forwardRef */])(function () { return CronJobsComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CronJobsComponent);
    return CronJobsComponent;
    var CronJobsComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/lib/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.defaultConfig = {
            quartz: false,
            bootstrap: true,
            multiple: false,
        };
        this.defaultValidateConfig = {
            validate: false,
        };
        this.daysOfWeekPosix = [
            { value: 0, label: 'Sunday' },
            { value: 1, label: 'Monday' },
            { value: 2, label: 'Tuesday' },
            { value: 3, label: 'Wednesday' },
            { value: 4, label: 'Thursday' },
            { value: 5, label: 'Friday' },
            { value: 6, label: 'Saturday' }
        ];
        this.daysOfWeekQuartz = [
            { value: 1, label: 'Sunday' },
            { value: 2, label: 'Monday' },
            { value: 3, label: 'Tuesday' },
            { value: 4, label: 'Wednesday' },
            { value: 5, label: 'Thursday' },
            { value: 6, label: 'Friday' },
            { value: 7, label: 'Saturday' }
        ];
        this.numeral = [
            { value: 1, label: '1st' },
            { value: 2, label: '2nd' },
            { value: 3, label: '3rd' },
            { value: 4, label: '4th' },
            { value: 5, label: '5th' },
            { value: 6, label: '6th' },
            { value: 7, label: '7th' },
            { value: 8, label: '8th' },
            { value: 9, label: '9th' },
            { value: 10, label: '10th' },
            { value: 11, label: '11th' },
            { value: 12, label: '12th' },
            { value: 13, label: '13th' },
            { value: 14, label: '14th' },
            { value: 15, label: '15th' },
            { value: 16, label: '16th' },
            { value: 17, label: '17th' },
            { value: 18, label: '18th' },
            { value: 19, label: '19th' },
            { value: 20, label: '20th' },
            { value: 21, label: '21st' },
            { value: 22, label: '22nd' },
            { value: 23, label: '23rd' },
            { value: 24, label: '24th' },
            { value: 25, label: '25th' },
            { value: 26, label: '26th' },
            { value: 27, label: '27th' },
            { value: 28, label: '28th' },
            { value: 29, label: '29th' },
            { value: 30, label: '30th' },
            { value: 31, label: '31st' }
        ];
        this._months = [
            { value: 1, label: 'January' },
            { value: 2, label: 'February' },
            { value: 3, label: 'March' },
            { value: 4, label: 'April' },
            { value: 5, label: 'May' },
            { value: 6, label: 'June' },
            { value: 7, label: 'July' },
            { value: 8, label: 'August' },
            { value: 9, label: 'September' },
            { value: 10, label: 'October' },
            { value: 11, label: 'November' },
            { value: 12, label: 'December' }
        ];
        this._baseFrequency = [
            { value: 0, label: 'Please select' },
            { value: 1, label: 'Minute' },
            { value: 2, label: 'Hour' },
            { value: 3, label: 'Day' },
            { value: 4, label: 'Week' },
            { value: 5, label: 'Month' },
            { value: 6, label: 'Year' }
        ];
        this._hours = [];
        for (var x = 0; x < 24; x++) {
            this._hours.push({ value: x, label: "" + x });
        }
        this._minutes = [];
        for (var x = 0; x < 60; x = x + 5) {
            this._minutes.push({ value: x, label: "" + x });
        }
    }
    Object.defineProperty(DataService.prototype, "baseFrequency", {
        get: function () {
            return this._baseFrequency.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "daysOfMonth", {
        get: function () {
            return this.numeral.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "months", {
        get: function () {
            return this._months.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "hours", {
        get: function () {
            return this._hours.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "minutes", {
        get: function () {
            return this._minutes.slice();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.getConfig = function (config) {
        if (config === void 0) { config = {}; }
        return __assign({}, this.defaultConfig, config);
    };
    DataService.prototype.getValidate = function (validateConfig) {
        if (validateConfig === void 0) { validateConfig = {}; }
        return __assign({}, this.defaultValidateConfig, validateConfig);
    };
    DataService.prototype.getDaysOfWeek = function (quartz) {
        if (quartz === void 0) { quartz = false; }
        if (quartz) {
            return this.daysOfWeekQuartz.slice();
        }
        return this.daysOfWeekPosix.slice();
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/lib/services/posix.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PosixService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/lib/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosixService = (function () {
    function PosixService(dataService) {
        var _this = this;
        this.dataService = dataService;
        this.frequencyData = this.dataService.baseFrequency;
        var keys = ['none', 'minute', 'hour', 'day', 'week', 'month', 'year'];
        var result = {};
        keys.forEach(function (key, idx) {
            result[key] = _this.frequencyData[idx].value;
        });
        this.baseFrequency = result;
    }
    PosixService.prototype.getDefaultFrequency = function () {
        var cronJobsFrequency = {
            baseFrequency: this.frequencyData[0].value,
            minutes: [],
            hours: [],
            daysOfMonth: [],
            daysOfWeek: [],
            months: []
        };
        return cronJobsFrequency;
    };
    PosixService.prototype.getDefaultFrequenceWithDefault = function () {
        var cronJobsFrequency = this.getDefaultFrequency();
        cronJobsFrequency.daysOfWeek = this.getDaysOfWeek()[0] ? [this.getDaysOfWeek()[0].value] : [];
        cronJobsFrequency.daysOfMonth = this.dataService.daysOfMonth[0] ? [this.dataService.daysOfMonth[0].value] : [];
        cronJobsFrequency.months = this.dataService.months[0] ? [this.dataService.months[0].value] : [];
        cronJobsFrequency.hours = this.dataService.hours[0] ? [this.dataService.hours[0].value] : [];
        cronJobsFrequency.minutes = this.dataService.minutes[0] ? [this.dataService.minutes[0].value] : [];
        return cronJobsFrequency;
    };
    PosixService.prototype.getDaysOfWeek = function () {
        return this.dataService.getDaysOfWeek(false);
    };
    PosixService.prototype.fromCronWithDefault = function (value) {
        var cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var frequency = this.getDefaultFrequenceWithDefault();
        return this.fromCronInternal(cron, frequency);
    };
    PosixService.prototype.fromCron = function (value) {
        var cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var frequency = this.getDefaultFrequency();
        return this.fromCronInternal(cron, frequency);
    };
    PosixService.prototype.fromCronInternal = function (cron, frequency) {
        if (cron.length !== 5) {
            return frequency;
        }
        if (cron[0] === '*' && cron[1] === '*' && cron[2] === '*' && cron[3] === '*' && cron[4] === '*') {
            frequency.baseFrequency = this.baseFrequency.minute; // every minute
        }
        else if (cron[1] === '*' && cron[2] === '*' && cron[3] === '*' && cron[4] === '*') {
            frequency.baseFrequency = this.baseFrequency.hour; // every hour
        }
        else if (cron[2] === '*' && cron[3] === '*' && cron[4] === '*') {
            frequency.baseFrequency = this.baseFrequency.day; // every day
        }
        else if (cron[2] === '*' && cron[3] === '*') {
            frequency.baseFrequency = this.baseFrequency.week; // every week
        }
        else if (cron[3] === '*' && cron[4] === '*') {
            frequency.baseFrequency = this.baseFrequency.month; // every month
        }
        else if (cron[4] === '*') {
            frequency.baseFrequency = this.baseFrequency.year; // every year
        }
        if (cron[0] !== '*') {
            // preparing to handle multiple minutes
            frequency.minutes = this.getValueArray(cron[0]);
        }
        if (cron[1] !== '*') {
            // preparing to handle multiple hours
            frequency.hours = this.getValueArray(cron[1]);
        }
        if (cron[2] !== '*') {
            // preparing to handle multiple daysOfWeek of the month
            frequency.daysOfMonth = this.getValueArray(cron[2]);
        }
        if (cron[3] !== '*') {
            // preparing to handle multiple months
            frequency.months = this.getValueArray(cron[3]);
        }
        if (cron[4] !== '*') {
            // preparing to handle multiple daysOfWeek of the week
            frequency.daysOfWeek = this.getValueArray(cron[4]);
        }
        return frequency;
    };
    PosixService.prototype.setCron = function (value) {
        var cron = ['*', '*', '*', '*', '*'];
        if (value && value.baseFrequency) {
            if (value.baseFrequency >= this.baseFrequency.hour) {
                cron[0] = value.minutes.length > 0 ? value.minutes.join(',') : '*';
            }
            if (value.baseFrequency >= this.baseFrequency.day) {
                cron[1] = value.hours.length > 0 ? value.hours.join(',') : '*';
            }
            if (value.baseFrequency === this.baseFrequency.week) {
                cron[4] = value.daysOfWeek.length > 0 ? value.daysOfWeek.join(',') : '*';
            }
            if (value.baseFrequency >= this.baseFrequency.month) {
                cron[2] = value.daysOfMonth.length > 0 ? value.daysOfMonth.join(',') : '*';
            }
            if (value.baseFrequency === this.baseFrequency.year) {
                cron[3] = value.months.length > 0 ? value.months.join(',') : '*';
            }
        }
        else {
            return '';
        }
        return cron.join(' ');
    };
    PosixService.prototype.getValueArray = function (value) {
        if (value) {
            return value.split(',').map(function (ele) { return +ele; });
        }
        return [];
    };
    PosixService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], PosixService);
    return PosixService;
}());



/***/ }),

/***/ "../../../../../src/app/lib/services/quartz.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuartzService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__posix_service__ = __webpack_require__("../../../../../src/app/lib/services/posix.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/lib/services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuartzService = (function (_super) {
    __extends(QuartzService, _super);
    function QuartzService(dataService) {
        var _this = _super.call(this, dataService) || this;
        _this.dataService = dataService;
        return _this;
    }
    QuartzService.prototype.getDaysOfWeek = function () {
        return this.dataService.getDaysOfWeek(true);
    };
    QuartzService.prototype.fromCronWithDefault = function (value) {
        var cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var frequency = this.getDefaultFrequenceWithDefault();
        return this.fromCronQuartzInternal(cron, frequency);
    };
    QuartzService.prototype.fromCron = function (value) {
        var cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var frequency = this.getDefaultFrequency();
        return this.fromCronQuartzInternal(cron, frequency);
    };
    QuartzService.prototype.fromCronQuartzInternal = function (cron, frequency) {
        if (!(cron.length === 6 || cron.length === 7)) {
            return frequency;
        }
        if (cron[1] === '*' && cron[2] === '*' && cron[3] === '*' && cron[4] === '*' && cron[5] === '?') {
            frequency.baseFrequency = this.baseFrequency.minute; // every minute
        }
        else if (cron[2] === '*' && cron[3] === '*' && cron[4] === '*' && cron[5] === '?') {
            frequency.baseFrequency = this.baseFrequency.hour; // every hour
        }
        else if (cron[3] === '*' && cron[4] === '*' && cron[5] === '?') {
            frequency.baseFrequency = this.baseFrequency.day; // every day
        }
        else if (cron[3] === '?' && cron[4] === '*') {
            frequency.baseFrequency = this.baseFrequency.week; // every week
        }
        else if (cron[4] === '*' && cron[5] === '?') {
            frequency.baseFrequency = this.baseFrequency.month; // every month
        }
        else if (cron[5] === '?') {
            frequency.baseFrequency = this.baseFrequency.year; // every year
        }
        if (cron[1] !== '*') {
            // preparing to handle multiple minutes
            frequency.minutes = this.getValueArray(cron[1]);
        }
        if (cron[2] !== '*') {
            // preparing to handle multiple hours
            frequency.hours = this.getValueArray(cron[2]);
        }
        if (cron[3] !== '*' && cron[3] !== '?') {
            // preparing to handle multiple days of the month
            frequency.daysOfMonth = this.getValueArray(cron[3]);
        }
        if (cron[4] !== '*') {
            // preparing to handle multiple months
            frequency.months = this.getValueArray(cron[4]);
        }
        if (cron[5] !== '*' && cron[5] !== '?') {
            // preparing to handle multiple days of the week
            frequency.daysOfWeek = this.getValueArray(cron[5]);
        }
        return frequency;
    };
    QuartzService.prototype.setCron = function (newValue) {
        var cron = ['0', '*', '*', '*', '*', '?'];
        if (newValue && newValue.baseFrequency) {
            if (newValue.baseFrequency >= this.baseFrequency.hour) {
                cron[1] = newValue.minutes.length > 0 ? newValue.minutes.join(',') : '*';
            }
            if (newValue.baseFrequency >= this.baseFrequency.day) {
                cron[2] = newValue.hours.length > 0 ? newValue.hours.join(',') : '*';
            }
            if (newValue.baseFrequency === this.baseFrequency.week) {
                cron[3] = '?';
                cron[5] = newValue.daysOfWeek.length > 0 ? newValue.daysOfWeek.join(',') : '*';
            }
            if (newValue.baseFrequency >= this.baseFrequency.month) {
                cron[3] = newValue.daysOfMonth.length > 0 ? newValue.daysOfMonth.join(',') : '*';
            }
            if (newValue.baseFrequency === this.baseFrequency.year) {
                cron[4] = newValue.months.length > 0 ? newValue.months.join(',') : '*';
            }
        }
        else {
            return '';
        }
        return cron.join(' ');
    };
    QuartzService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], QuartzService);
    return QuartzService;
}(__WEBPACK_IMPORTED_MODULE_1__posix_service__["a" /* PosixService */]));



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map