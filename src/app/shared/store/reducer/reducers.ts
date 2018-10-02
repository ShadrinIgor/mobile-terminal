import {Action} from 'redux';

import {Actions} from '../actions/actions';
import {PayModel} from '../../models/pay.model';

export interface IAppState {
  listOperations: PayModel[];
  paymentData: {};
}

export const INITIAL_STATE: IAppState = {
  listOperations: [],
  paymentData: null
};

export function rootReducer(state: IAppState = INITIAL_STATE, action: any) {
  switch (action.type) {
    case Actions.PAYMENT_ADD:
      return {...state, loading: false, listOperations: [...state.listOperations, action.data]};
    default:
      return state;
  }
}
