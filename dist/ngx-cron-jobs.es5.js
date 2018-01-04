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
import { Component, Injectable, Injector, Input, NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Subject as Subject$1 } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
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
        /**
         * @return {?}
         */
        get: function () {
            return this._baseFrequency.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "daysOfMonth", {
        /**
         * @return {?}
         */
        get: function () {
            return this.numeral.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "months", {
        /**
         * @return {?}
         */
        get: function () {
            return this._months.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "hours", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hours.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "minutes", {
        /**
         * @return {?}
         */
        get: function () {
            return this._minutes.slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} config
     * @return {?}
     */
    DataService.prototype.getConfig = function (config) {
        if (config === void 0) { config = {}; }
        return Object.assign({}, this.defaultConfig, config);
    };
    /**
     * @param {?=} validateConfig
     * @return {?}
     */
    DataService.prototype.getValidate = function (validateConfig) {
        if (validateConfig === void 0) { validateConfig = {}; }
        return Object.assign({}, this.defaultValidateConfig, validateConfig);
    };
    /**
     * @param {?=} quartz
     * @return {?}
     */
    DataService.prototype.getDaysOfWeek = function (quartz) {
        if (quartz === void 0) { quartz = false; }
        if (quartz) {
            return this.daysOfWeekQuartz.slice();
        }
        return this.daysOfWeekPosix.slice();
    };
    return DataService;
}());
DataService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DataService.ctorParameters = function () { return []; };
var PosixService = (function () {
    /**
     * @param {?} dataService
     */
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
    /**
     * @return {?}
     */
    PosixService.prototype.getDefaultFrequency = function () {
        var /** @type {?} */ cronJobsFrequency = {
            baseFrequency: this.frequencyData[0].value,
            minutes: [],
            hours: [],
            daysOfMonth: [],
            daysOfWeek: [],
            months: []
        };
        return cronJobsFrequency;
    };
    /**
     * @return {?}
     */
    PosixService.prototype.getDefaultFrequenceWithDefault = function () {
        var /** @type {?} */ cronJobsFrequency = this.getDefaultFrequency();
        cronJobsFrequency.daysOfWeek = this.getDaysOfWeek()[0] ? [this.getDaysOfWeek()[0].value] : [];
        cronJobsFrequency.daysOfMonth = this.dataService.daysOfMonth[0] ? [this.dataService.daysOfMonth[0].value] : [];
        cronJobsFrequency.months = this.dataService.months[0] ? [this.dataService.months[0].value] : [];
        cronJobsFrequency.hours = this.dataService.hours[0] ? [this.dataService.hours[0].value] : [];
        cronJobsFrequency.minutes = this.dataService.minutes[0] ? [this.dataService.minutes[0].value] : [];
        return cronJobsFrequency;
    };
    /**
     * @return {?}
     */
    PosixService.prototype.getDaysOfWeek = function () {
        return this.dataService.getDaysOfWeek(false);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PosixService.prototype.fromCronWithDefault = function (value) {
        var /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var /** @type {?} */ frequency = this.getDefaultFrequenceWithDefault();
        return this.fromCronInternal(cron, frequency);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PosixService.prototype.fromCron = function (value) {
        var /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var /** @type {?} */ frequency = this.getDefaultFrequency();
        return this.fromCronInternal(cron, frequency);
    };
    /**
     * @param {?} cron
     * @param {?} frequency
     * @return {?}
     */
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
    /**
     * @param {?} value
     * @return {?}
     */
    PosixService.prototype.setCron = function (value) {
        var /** @type {?} */ cron = ['*', '*', '*', '*', '*'];
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
    /**
     * @param {?} value
     * @return {?}
     */
    PosixService.prototype.getValueArray = function (value) {
        if (value) {
            return value.split(',').map(function (ele) { return +ele; });
        }
        return [];
    };
    return PosixService;
}());
PosixService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
PosixService.ctorParameters = function () { return [
    { type: DataService, },
]; };
var QuartzService = (function (_super) {
    __extends(QuartzService, _super);
    /**
     * @param {?} dataService
     */
    function QuartzService(dataService) {
        var _this = _super.call(this, dataService) || this;
        _this.dataService = dataService;
        return _this;
    }
    /**
     * @return {?}
     */
    QuartzService.prototype.getDaysOfWeek = function () {
        return this.dataService.getDaysOfWeek(true);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    QuartzService.prototype.fromCronWithDefault = function (value) {
        var /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var /** @type {?} */ frequency = this.getDefaultFrequenceWithDefault();
        return this.fromCronQuartzInternal(cron, frequency);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    QuartzService.prototype.fromCron = function (value) {
        var /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        var /** @type {?} */ frequency = this.getDefaultFrequency();
        return this.fromCronQuartzInternal(cron, frequency);
    };
    /**
     * @param {?} cron
     * @param {?} frequency
     * @return {?}
     */
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
    /**
     * @param {?} newValue
     * @return {?}
     */
    QuartzService.prototype.setCron = function (newValue) {
        var /** @type {?} */ cron = ['0', '*', '*', '*', '*', '?'];
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
    return QuartzService;
}(PosixService));
QuartzService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
QuartzService.ctorParameters = function () { return [
    { type: DataService, },
]; };
var CronJobsComponent = (function () {
    /**
     * @param {?} dataService
     * @param {?} injector
     * @param {?} formBuilder
     */
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
        this.unSubscribe = new Subject$1();
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
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    CronJobsComponent.prototype.onBlur = function () {
        this.onTouched();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CronJobsComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes['config']) {
            this.config = this.dataService.getConfig(/** @type {?} */ (changes['config'].currentValue));
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
            this.validate = this.dataService.getValidate(/** @type {?} */ (changes['validate'].currentValue));
        }
    };
    /**
     * @return {?}
     */
    CronJobsComponent.prototype.setService = function () {
        if (this.config.quartz) {
            this.cronService = this.injector.get(QuartzService);
        }
        else {
            this.cronService = this.injector.get(PosixService);
        }
    };
    /**
     * @param {?} cronValue
     * @return {?}
     */
    CronJobsComponent.prototype.writeValue = function (cronValue) {
        var _this = this;
        this.isPatching = true;
        var /** @type {?} */ valueToPatch;
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
    /**
     * @param {?} fn
     * @return {?}
     */
    CronJobsComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CronJobsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    CronJobsComponent.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
        if (this.isDisabled) {
            this.cronJobsForm.disable();
        }
        else {
            this.cronJobsForm.enable();
        }
    };
    /**
     * @return {?}
     */
    CronJobsComponent.prototype.getIsValid = function () {
        return this.validate.validate ? this.getValid() : false;
    };
    /**
     * @return {?}
     */
    CronJobsComponent.prototype.getIsInvalid = function () {
        return this.validate.validate ? !this.getValid() : false;
    };
    /**
     * @return {?}
     */
    CronJobsComponent.prototype.getValid = function () {
        return this.formControl ? this.formControl.valid : this.isValid;
    };
    /**
     * @return {?}
     */
    CronJobsComponent.prototype.ngOnDestroy = function () {
        this.unSubscribe.next();
        this.unSubscribe.complete();
    };
    return CronJobsComponent;
}());
CronJobsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cron-jobs',
                template: "\n    <div class=\"form-inline\" *ngIf=\"config?.bootstrap\" [formGroup]=\"cronJobsForm\">\n      <label class=\"mr-sm-2\" for=\"selectBase\">Every: </label>\n      <select class=\"form-control\" id=\"selectBase\" (blur)=\"onBlur()\"\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n              formControlName=\"baseFrequency\">\n        <option *ngFor=\"let item of baseFrequencyData\" [value]=\"item.value\">{{item.label}}</option>\n      </select>\n      <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) === 4\">on</label>\n      <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n              *ngIf=\"(baseFrequency$ | async) === 4\" formControlName=\"daysOfWeek\">\n        <option *ngFor=\"let item of daysOfWeekData\" [value]=\"item.value\">{{item.label}}</option>\n      </select>\n      <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) >= 5\">on the</label>\n      <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n              *ngIf=\"(baseFrequency$ | async) >= 5\" formControlName=\"daysOfMonth\">\n        <option *ngFor=\"let item of daysOfMonthData\" [value]=\"item.value\">{{item.label}}</option>\n      </select>\n      <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) === 6\">of</label>\n      <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n              *ngIf=\"(baseFrequency$ | async) === 6\" formControlName=\"months\">\n        <option *ngFor=\"let item of monthsData\" [ngValue]=\"item.value\">{{item.label}}</option>\n      </select>\n      <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) >= 2\">at</label>\n      <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n              *ngIf=\"(baseFrequency$ | async) >= 3\" formControlName=\"hours\">\n        <option *ngFor=\"let item of hoursData\" [value]=\"item.value\">{{item.label}}</option>\n      </select>\n      <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) >= 3 \">:</label>\n      <select multiple [multiple]=\"config.multiple\" class=\"form-control\" (blur)=\"onBlur()\"\n              [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n              *ngIf=\"(baseFrequency$ | async) >=2\" formControlName=\"minutes\">\n        <option *ngFor=\"let item of minutesData\" [value]=\"item.value\">{{item.label}}</option>\n      </select>\n      <label class=\"mx-sm-2\" *ngIf=\"(baseFrequency$ | async) === 2\">past the hour</label>\n    </div>\n    <div class=\"cron-wrap\" *ngIf=\"!config?.bootstrap\" [formGroup]=\"cronJobsForm\">\n      <span>Every: </span>\n      <div class=\"cron-select-wrap\">\n        <select class=\"cron-select\" formControlName=\"baseFrequency\" (blur)=\"onBlur()\"\n                [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\">\n          <option *ngFor=\"let item of baseFrequencyData\" [value]=\"item.value\">{{item.label}}</option>\n        </select>\n      </div>\n      <div class=\"select-options\">\n        <span  *ngIf=\"(baseFrequency$ | async) === 4\">on </span>\n        <div *ngIf=\"(baseFrequency$ | async) === 4\" class=\"cron-select-wrap\">\n          <select multiple [multiple]=\"config.multiple\" class=\"cron-select day-of-week-value\" (blur)=\"onBlur()\"\n                  [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n                  formControlName=\"daysOfWeek\">\n            <option *ngFor=\"let item of daysOfWeekData\" [value]=\"item.value\">{{item.label}}</option>\n          </select>\n        </div>\n        <span *ngIf=\"(baseFrequency$ | async) >= 5\">on the </span>\n        <div *ngIf=\"(baseFrequency$ | async) >= 5\" class=\"cron-select-wrap\">\n          <select multiple [multiple]=\"config.multiple\" class=\"cron-select day-of-month-value\" (blur)=\"onBlur()\"\n                  [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n                  formControlName=\"daysOfMonth\">\n            <option *ngFor=\"let item of daysOfMonthData\" [value]=\"item.value\">{{item.label}}</option>\n          </select>\n        </div>\n        <span *ngIf=\"(baseFrequency$ | async) === 6\">of </span>\n        <div *ngIf=\"(baseFrequency$ | async) === 6\" class=\"cron-select-wrap\">\n          <select multiple [multiple]=\"config.multiple\" class=\"cron-select month-value\" (blur)=\"onBlur()\"\n                  [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n                  formControlName=\"months\">\n            <option *ngFor=\"let item of monthsData\" [ngValue]=\"item.value\">{{item.label}}</option>\n          </select>\n        </div>\n        <span *ngIf=\"(baseFrequency$ | async) >= 3 \">at </span>\n        <div *ngIf=\"(baseFrequency$ | async) >= 3\" class=\"cron-select-wrap\">\n          <select multiple [multiple]=\"config.multiple\" class=\"cron-select hour-value\" (blur)=\"onBlur()\"\n                  [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n                  formControlName=\"hours\">\n            <option *ngFor=\"let item of hoursData\" [value]=\"item.value\">{{item.label}}</option>\n          </select>\n        </div>\n        <span *ngIf=\"(baseFrequency$ | async) >= 3\"> : </span>\n        <div *ngIf=\"(baseFrequency$ | async) >=2\" class=\"cron-select-wrap\">\n          <select multiple [multiple]=\"config.multiple\" class=\"cron-select minute-value\" (blur)=\"onBlur()\"\n                  [ngClass]=\"{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}\"\n                  formControlName=\"minutes\">\n            <option *ngFor=\"let item of minutesData\" [value]=\"item.value\">{{item.label}}</option>\n          </select>\n        </div>\n        <span *ngIf=\"(baseFrequency$ | async) === 2\"> past the hour</span>\n      </div>\n    </div>\n  ",
                styles: ["\n    :host {\n      display: block;\n    }\n\n    .cron-select-wrap {\n      display: inline-block;\n    }\n\n    .cron-select-wrap .cron-select {\n      width: 150px;\n      height: 34px;\n      padding: 6px 12px;\n      margin: 0;\n      font-size: 14px;\n      line-height: 1.42857143;\n      color: #555;\n      background: #fff none;\n      border: 1px solid #ccc;\n      border-radius: 4px;\n      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n      -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n      transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\n    }\n\n    .cron-select-wrap select[multiple] {\n      height: 140px;\n    }\n\n    .select-options {\n      display: inline-block;\n    }\n  "],
                providers: [
                    PosixService,
                    QuartzService,
                    DataService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(function () { return CronJobsComponent; }),
                        multi: true
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
CronJobsComponent.ctorParameters = function () { return [
    { type: DataService, },
    { type: Injector, },
    { type: FormBuilder, },
]; };
CronJobsComponent.propDecorators = {
    'config': [{ type: Input },],
    'validate': [{ type: Input },],
    'isValid': [{ type: Input },],
    'formControl': [{ type: Input },],
};
var CronJobsModule = (function () {
    function CronJobsModule() {
    }
    return CronJobsModule;
}());
CronJobsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: [
                    CronJobsComponent
                ],
                exports: [
                    CronJobsComponent
                ],
                providers: [
                    DataService,
                    PosixService,
                    QuartzService
                ]
            },] },
];
/**
 * @nocollapse
 */
CronJobsModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */
export { CronJobsModule, CronJobsComponent as ɵa, DataService as ɵc, PosixService as ɵb, QuartzService as ɵd };
//# sourceMappingURL=ngx-cron-jobs.es5.js.map
