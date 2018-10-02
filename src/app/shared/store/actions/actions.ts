import {Injectable} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {PayModel} from '../../models/pay.model';
import {IAppState} from '../reducer/reducers';

@Injectable()
export class Actions {
  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  static OPERATOR_GET_REQUESTED = 'OPERATOR_GET_REQUESTED';
  static OPERATOR_GET_SUCCESS = 'OPERATOR_GET_SUCCESS';
  static OPERATOR_GET_FAILURE = 'OPERATOR_GET_FAILURE';
  static OPERATOR_ADD_REQUESTED = 'OPERATOR_ADD_REQUESTED';
  static OPERATOR_ADD_SUCCESS = 'OPERATOR_ADD_SUCCESS';
  static OPERATOR_ADD_FAILURE = 'OPERATOR_ADD_FAILURE';

  getPayments() {
    this.ngRedux.dispatch({type: Actions.OPERATOR_GET_REQUESTED});
  }

  addPayment(data: PayModel) {
    this.ngRedux.dispatch({
      type: Actions.OPERATOR_ADD_REQUESTED,
      data
    });
  }
}
