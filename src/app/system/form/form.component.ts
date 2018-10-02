import {Component, NgZone, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ToasterService} from 'angular2-toaster';
import * as moment from 'moment';
import {select} from '@angular-redux/store';

import {OperatorModel} from '../../shared/models/operator.model';
import constants from '../../constants';
import {common} from '../../i18n/en';
import {Actions} from '../../shared/store/actions/actions';
import {Observable} from 'rxjs/Observable';
import {PayModel} from '../../shared/models/pay.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  operator: OperatorModel;
  subs: Subscription[] = [];

  @select() readonly listOperations: Observable<PayModel[]>;

  constructor(private route: ActivatedRoute,
              private toaster: ToasterService,
              private router: Router,
              private actions: Actions,
              private zone: NgZone) {
  }

  ngOnInit() {
    const phoneNumber = '^[+]?([0-9]{6,9})$';
    const valueNumber = '^([0-9]*)$';
    this.form = new FormGroup({
      'phone': new FormControl(null, [Validators.required, Validators.pattern(phoneNumber)]),
      'value': new FormControl('1', [Validators.required, Validators.pattern(valueNumber), Validators.min(1), Validators.max(300)])
    });

    const sub = this.route.params
      .subscribe((params: Params) => {
        if (params && params.id) {
          this.operator = constants.operators.find((item: any) => {
            return (item.id === +params.id);
          });
        }
      });
    this.subs.push(sub);
  }

  ngOnDestroy() {
    this.subs.forEach((item: Subscription) => {
      item.unsubscribe();
    });
  }

  formSubmit() {
    if (!this.form.invalid) {
      this.processOutsizeAngularZone();
    }
  }

  processOutsizeAngularZone() {
    this.zone.runOutsideAngular(() => {
      this.emulateSave((res) => {
        this.zone.run(() => {
          this.actions.addPayment({
            ...this.form.value,
            operatorId: this.operator.id,
            date: moment().unix()
          });
          if (res === 200) {
            this.router.navigate(['/system']);
          }
        });
      });
    });
  }

  emulateSave(cb: any) {
    setTimeout(() => {
      const rand = Math.round(Math.random() * 10) % 2;
      const messageType = rand > 0 ? 'success' : 'error';
      const messageMessage = rand > 0 ? common.form_save_success : common.form_save_error;
      this.toaster.pop(messageType, messageMessage);

      if (cb && typeof cb === 'function') {
        cb(rand > 0 ? 200 : 400);
      }
    }, 500);
  }
}
