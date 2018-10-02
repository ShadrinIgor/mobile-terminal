import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';

import {PayModel} from '../../shared/models/pay.model';
import constants from '../../constants';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent {
  @select() readonly listOperations: Observable<PayModel[]>;

  dateFormat(date: number): string {
    return moment(date * 1000).format('DD.MM.YYYY');

  }

  getOperatorTitle(id: number): string {
    const operator = constants.operators.find((item) => item.id === id);
    if (operator) {
      return operator.title;
    }
    return `${id}`;
  }
}
