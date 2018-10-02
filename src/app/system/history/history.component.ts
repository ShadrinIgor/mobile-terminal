import {Component, OnInit} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';

import {PayModel} from '../../shared/models/pay.model';
import constants from '../../constants';
import moment = require('moment');

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {

  @select() readonly listOperations: Observable<PayModel[]>;
  constructor() {
  }

  dateFormat(date: number): string {
    console.log('date', date);
    return moment(date).format('d.m.Y');

  }

  getOperatorTitle(id: number): string {
    const operator = constants.operators.find((item) => item.id === id );
    if (operator) {
      return operator.title;
    }
    return `${id}`;
  }
}
