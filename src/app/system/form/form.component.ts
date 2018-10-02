import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params} from '@angular/router';

import {OperatorModel} from '../../shared/models/operator.model';
import constants from '../../constants';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  form: FormGroup;
  isLoading = false;
  operator: OperatorModel;
  subs: Subscription[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    const phoneNumber = '^[+]?([0-9]{6,9})$';
    const valueNumber = '^([0-9]*)$';
    this.form = new FormGroup({
      'phone': new FormControl(null, [Validators.required, Validators.pattern(phoneNumber)]),
      'value': new FormControl('1', [Validators.required, Validators.pattern(valueNumber), Validators.min(1), Validators.max(100)])
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
}
