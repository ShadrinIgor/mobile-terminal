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
    case Actions.OPERATOR_ADD_REQUESTED :
      return {...state, loading: false};
    case Actions.OPERATOR_ADD_SUCCESS :
      return {...state, loading: false, paymentData: action.data};
    case Actions.OPERATOR_ADD_FAILURE :
      return {...state, loading: false};
    case Actions.OPERATOR_GET_REQUESTED :
      return {...state, loading: false};
    case Actions.OPERATOR_GET_SUCCESS :
      return {...state, loading: false, listOperations: action.data};
    case Actions.OPERATOR_GET_FAILURE :
      return {...state, loading: false};
    default:
      return state;
  }
}
