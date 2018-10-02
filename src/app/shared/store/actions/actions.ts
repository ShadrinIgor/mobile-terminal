import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {PayModel} from '../../models/pay.model';
import {IAppState} from '../reducer/reducers';

@Injectable()
export class Actions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static PAYMENT_ADD = 'PAYMENT_ADD';

  addPayment(data: PayModel) {
    this.ngRedux.dispatch({
      type: Actions.PAYMENT_ADD,
      data
    });
  }
}
