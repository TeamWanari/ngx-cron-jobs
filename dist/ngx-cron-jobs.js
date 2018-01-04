import { Component, Injectable, Injector, Input, NgModule, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Subject as Subject$1 } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';

class DataService {
    constructor() {
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
        for (let x = 0; x < 24; x++) {
            this._hours.push({ value: x, label: `${x}` });
        }
        this._minutes = [];
        for (let x = 0; x < 60; x = x + 5) {
            this._minutes.push({ value: x, label: `${x}` });
        }
    }
    /**
     * @return {?}
     */
    get baseFrequency() {
        return [
            ...this._baseFrequency
        ];
    }
    /**
     * @return {?}
     */
    get daysOfMonth() {
        return [
            ...this.numeral
        ];
    }
    /**
     * @return {?}
     */
    get months() {
        return [
            ...this._months
        ];
    }
    /**
     * @return {?}
     */
    get hours() {
        return [
            ...this._hours
        ];
    }
    /**
     * @return {?}
     */
    get minutes() {
        return [
            ...this._minutes
        ];
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    getConfig(config = {}) {
        return Object.assign({}, this.defaultConfig, config);
    }
    /**
     * @param {?=} validateConfig
     * @return {?}
     */
    getValidate(validateConfig = {}) {
        return Object.assign({}, this.defaultValidateConfig, validateConfig);
    }
    /**
     * @param {?=} quartz
     * @return {?}
     */
    getDaysOfWeek(quartz = false) {
        if (quartz) {
            return [
                ...this.daysOfWeekQuartz
            ];
        }
        return [
            ...this.daysOfWeekPosix
        ];
    }
}
DataService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
DataService.ctorParameters = () => [];

class PosixService {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        this.dataService = dataService;
        this.frequencyData = this.dataService.baseFrequency;
        const keys = ['none', 'minute', 'hour', 'day', 'week', 'month', 'year'];
        const result = {};
        keys.forEach((key, idx) => {
            result[key] = this.frequencyData[idx].value;
        });
        this.baseFrequency = result;
    }
    /**
     * @return {?}
     */
    getDefaultFrequency() {
        const /** @type {?} */ cronJobsFrequency = {
            baseFrequency: this.frequencyData[0].value,
            minutes: [],
            hours: [],
            daysOfMonth: [],
            daysOfWeek: [],
            months: []
        };
        return cronJobsFrequency;
    }
    /**
     * @return {?}
     */
    getDefaultFrequenceWithDefault() {
        const /** @type {?} */ cronJobsFrequency = this.getDefaultFrequency();
        cronJobsFrequency.daysOfWeek = this.getDaysOfWeek()[0] ? [this.getDaysOfWeek()[0].value] : [];
        cronJobsFrequency.daysOfMonth = this.dataService.daysOfMonth[0] ? [this.dataService.daysOfMonth[0].value] : [];
        cronJobsFrequency.months = this.dataService.months[0] ? [this.dataService.months[0].value] : [];
        cronJobsFrequency.hours = this.dataService.hours[0] ? [this.dataService.hours[0].value] : [];
        cronJobsFrequency.minutes = this.dataService.minutes[0] ? [this.dataService.minutes[0].value] : [];
        return cronJobsFrequency;
    }
    /**
     * @return {?}
     */
    getDaysOfWeek() {
        return this.dataService.getDaysOfWeek(false);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fromCronWithDefault(value) {
        const /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        const /** @type {?} */ frequency = this.getDefaultFrequenceWithDefault();
        return this.fromCronInternal(cron, frequency);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fromCron(value) {
        const /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        const /** @type {?} */ frequency = this.getDefaultFrequency();
        return this.fromCronInternal(cron, frequency);
    }
    /**
     * @param {?} cron
     * @param {?} frequency
     * @return {?}
     */
    fromCronInternal(cron, frequency) {
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCron(value) {
        const /** @type {?} */ cron = ['*', '*', '*', '*', '*'];
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
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getValueArray(value) {
        if (value) {
            return value.split(',').map((ele) => +ele);
        }
        return [];
    }
}
PosixService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
PosixService.ctorParameters = () => [
    { type: DataService, },
];

class QuartzService extends PosixService {
    /**
     * @param {?} dataService
     */
    constructor(dataService) {
        super(dataService);
        this.dataService = dataService;
    }
    /**
     * @return {?}
     */
    getDaysOfWeek() {
        return this.dataService.getDaysOfWeek(true);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fromCronWithDefault(value) {
        const /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        const /** @type {?} */ frequency = this.getDefaultFrequenceWithDefault();
        return this.fromCronQuartzInternal(cron, frequency);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    fromCron(value) {
        const /** @type {?} */ cron = value.trim().replace(/\s+/g, ' ').split(' ');
        const /** @type {?} */ frequency = this.getDefaultFrequency();
        return this.fromCronQuartzInternal(cron, frequency);
    }
    /**
     * @param {?} cron
     * @param {?} frequency
     * @return {?}
     */
    fromCronQuartzInternal(cron, frequency) {
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
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    setCron(newValue) {
        const /** @type {?} */ cron = ['0', '*', '*', '*', '*', '?'];
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
    }
}
QuartzService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
QuartzService.ctorParameters = () => [
    { type: DataService, },
];

class CronJobsComponent {
    /**
     * @param {?} dataService
     * @param {?} injector
     * @param {?} formBuilder
     */
    constructor(dataService, injector, formBuilder) {
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
    ngOnInit() {
        this.baseFrequency$ = this.cronJobsForm.get('baseFrequency')
            .valueChanges
            .takeUntil(this.unSubscribe)
            .map(v => +v)
            .publishReplay(1)
            .refCount();
        this.cronJobsForm
            .valueChanges
            .takeUntil(this.unSubscribe)
            .filter(() => !this.isPatching)
            .map((freq) => {
            freq.baseFrequency = +freq.baseFrequency;
            return freq;
        })
            .subscribe((values) => {
            if (!values.baseFrequency) {
                values = this.cronService.getDefaultFrequenceWithDefault();
                this.cronJobsForm.patchValue(values, { emitEvent: false });
            }
            this.onChange(this.cronService.setCron(values));
        });
        this.baseFrequencyData = this.dataService.baseFrequency;
        this.daysOfMonthData = this.dataService.daysOfMonth;
        this.daysOfWeekData = this.dataService.getDaysOfWeek(false);
        this.monthsData = this.dataService.months;
        this.hoursData = this.dataService.hours;
        this.minutesData = this.dataService.minutes;
        this.isPatching = true;
        setTimeout(() => {
            this.cronJobsForm.patchValue(this.cronService.getDefaultFrequenceWithDefault());
            this.isPatching = false;
        });
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes['config']) {
            this.config = this.dataService.getConfig(/** @type {?} */ (changes['config'].currentValue));
            setTimeout(() => {
                if (!changes['config'].previousValue ||
                    changes['config'].previousValue['quartz'] !== changes['config'].currentValue['quartz']) {
                    this.daysOfWeekData = this.dataService.getDaysOfWeek(this.config.quartz);
                    this.cronJobsForm.patchValue({ daysOfWeek: this.daysOfWeekData[0].value });
                }
            });
            this.setService();
        }
        if (changes['validate']) {
            this.validate = this.dataService.getValidate(/** @type {?} */ (changes['validate'].currentValue));
        }
    }
    /**
     * @return {?}
     */
    setService() {
        if (this.config.quartz) {
            this.cronService = this.injector.get(QuartzService);
        }
        else {
            this.cronService = this.injector.get(PosixService);
        }
    }
    /**
     * @param {?} cronValue
     * @return {?}
     */
    writeValue(cronValue) {
        this.isPatching = true;
        let /** @type {?} */ valueToPatch;
        if (cronValue) {
            valueToPatch = this.cronService.fromCronWithDefault(cronValue);
        }
        else {
            valueToPatch = this.cronService.getDefaultFrequenceWithDefault();
        }
        setTimeout(() => {
            this.cronJobsForm.patchValue(valueToPatch);
            this.isPatching = false;
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.isDisabled) {
            this.cronJobsForm.disable();
        }
        else {
            this.cronJobsForm.enable();
        }
    }
    /**
     * @return {?}
     */
    getIsValid() {
        return this.validate.validate ? this.getValid() : false;
    }
    /**
     * @return {?}
     */
    getIsInvalid() {
        return this.validate.validate ? !this.getValid() : false;
    }
    /**
     * @return {?}
     */
    getValid() {
        return this.formControl ? this.formControl.valid : this.isValid;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unSubscribe.next();
        this.unSubscribe.complete();
    }
}
CronJobsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cron-jobs',
                template: `
    <div class="form-inline" *ngIf="config?.bootstrap" [formGroup]="cronJobsForm">
      <label class="mr-sm-2" for="selectBase">Every: </label>
      <select class="form-control" id="selectBase" (blur)="onBlur()"
              [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
              formControlName="baseFrequency">
        <option *ngFor="let item of baseFrequencyData" [value]="item.value">{{item.label}}</option>
      </select>
      <label class="mx-sm-2" *ngIf="(baseFrequency$ | async) === 4">on</label>
      <select multiple [multiple]="config.multiple" class="form-control" (blur)="onBlur()"
              [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
              *ngIf="(baseFrequency$ | async) === 4" formControlName="daysOfWeek">
        <option *ngFor="let item of daysOfWeekData" [value]="item.value">{{item.label}}</option>
      </select>
      <label class="mx-sm-2" *ngIf="(baseFrequency$ | async) >= 5">on the</label>
      <select multiple [multiple]="config.multiple" class="form-control" (blur)="onBlur()"
              [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
              *ngIf="(baseFrequency$ | async) >= 5" formControlName="daysOfMonth">
        <option *ngFor="let item of daysOfMonthData" [value]="item.value">{{item.label}}</option>
      </select>
      <label class="mx-sm-2" *ngIf="(baseFrequency$ | async) === 6">of</label>
      <select multiple [multiple]="config.multiple" class="form-control" (blur)="onBlur()"
              [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
              *ngIf="(baseFrequency$ | async) === 6" formControlName="months">
        <option *ngFor="let item of monthsData" [ngValue]="item.value">{{item.label}}</option>
      </select>
      <label class="mx-sm-2" *ngIf="(baseFrequency$ | async) >= 2">at</label>
      <select multiple [multiple]="config.multiple" class="form-control" (blur)="onBlur()"
              [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
              *ngIf="(baseFrequency$ | async) >= 3" formControlName="hours">
        <option *ngFor="let item of hoursData" [value]="item.value">{{item.label}}</option>
      </select>
      <label class="mx-sm-2" *ngIf="(baseFrequency$ | async) >= 3 ">:</label>
      <select multiple [multiple]="config.multiple" class="form-control" (blur)="onBlur()"
              [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
              *ngIf="(baseFrequency$ | async) >=2" formControlName="minutes">
        <option *ngFor="let item of minutesData" [value]="item.value">{{item.label}}</option>
      </select>
      <label class="mx-sm-2" *ngIf="(baseFrequency$ | async) === 2">past the hour</label>
    </div>
    <div class="cron-wrap" *ngIf="!config?.bootstrap" [formGroup]="cronJobsForm">
      <span>Every: </span>
      <div class="cron-select-wrap">
        <select class="cron-select" formControlName="baseFrequency" (blur)="onBlur()"
                [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}">
          <option *ngFor="let item of baseFrequencyData" [value]="item.value">{{item.label}}</option>
        </select>
      </div>
      <div class="select-options">
        <span  *ngIf="(baseFrequency$ | async) === 4">on </span>
        <div *ngIf="(baseFrequency$ | async) === 4" class="cron-select-wrap">
          <select multiple [multiple]="config.multiple" class="cron-select day-of-week-value" (blur)="onBlur()"
                  [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
                  formControlName="daysOfWeek">
            <option *ngFor="let item of daysOfWeekData" [value]="item.value">{{item.label}}</option>
          </select>
        </div>
        <span *ngIf="(baseFrequency$ | async) >= 5">on the </span>
        <div *ngIf="(baseFrequency$ | async) >= 5" class="cron-select-wrap">
          <select multiple [multiple]="config.multiple" class="cron-select day-of-month-value" (blur)="onBlur()"
                  [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
                  formControlName="daysOfMonth">
            <option *ngFor="let item of daysOfMonthData" [value]="item.value">{{item.label}}</option>
          </select>
        </div>
        <span *ngIf="(baseFrequency$ | async) === 6">of </span>
        <div *ngIf="(baseFrequency$ | async) === 6" class="cron-select-wrap">
          <select multiple [multiple]="config.multiple" class="cron-select month-value" (blur)="onBlur()"
                  [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
                  formControlName="months">
            <option *ngFor="let item of monthsData" [ngValue]="item.value">{{item.label}}</option>
          </select>
        </div>
        <span *ngIf="(baseFrequency$ | async) >= 3 ">at </span>
        <div *ngIf="(baseFrequency$ | async) >= 3" class="cron-select-wrap">
          <select multiple [multiple]="config.multiple" class="cron-select hour-value" (blur)="onBlur()"
                  [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
                  formControlName="hours">
            <option *ngFor="let item of hoursData" [value]="item.value">{{item.label}}</option>
          </select>
        </div>
        <span *ngIf="(baseFrequency$ | async) >= 3"> : </span>
        <div *ngIf="(baseFrequency$ | async) >=2" class="cron-select-wrap">
          <select multiple [multiple]="config.multiple" class="cron-select minute-value" (blur)="onBlur()"
                  [ngClass]="{'is-valid': getIsValid(), 'is-invalid': getIsInvalid()}"
                  formControlName="minutes">
            <option *ngFor="let item of minutesData" [value]="item.value">{{item.label}}</option>
          </select>
        </div>
        <span *ngIf="(baseFrequency$ | async) === 2"> past the hour</span>
      </div>
    </div>
  `,
                styles: [`
    :host {
      display: block;
    }

    .cron-select-wrap {
      display: inline-block;
    }

    .cron-select-wrap .cron-select {
      width: 150px;
      height: 34px;
      padding: 6px 12px;
      margin: 0;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background: #fff none;
      border: 1px solid #ccc;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
      -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
      transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
    }

    .cron-select-wrap select[multiple] {
      height: 140px;
    }

    .select-options {
      display: inline-block;
    }
  `],
                providers: [
                    PosixService,
                    QuartzService,
                    DataService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CronJobsComponent),
                        multi: true
                    }
                ]
            },] },
];
/**
 * @nocollapse
 */
CronJobsComponent.ctorParameters = () => [
    { type: DataService, },
    { type: Injector, },
    { type: FormBuilder, },
];
CronJobsComponent.propDecorators = {
    'config': [{ type: Input },],
    'validate': [{ type: Input },],
    'isValid': [{ type: Input },],
    'formControl': [{ type: Input },],
};

class CronJobsModule {
}
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
CronJobsModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CronJobsModule, CronJobsComponent as ɵa, DataService as ɵc, PosixService as ɵb, QuartzService as ɵd };
//# sourceMappingURL=ngx-cron-jobs.js.map
