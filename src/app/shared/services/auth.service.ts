import {Injectable} from '@angular/core';
import * as moment from 'moment';

import constants from '../../constants';
import {LocalStoreService} from './localStore.service';

@Injectable()
export class AuthService {
  constructor(private localStore: LocalStoreService) {
  }

  /***
   * Login function(emulate)
   */
  login({email, passsword}): boolean {
    const isLogin = constants.admin.login === email && constants.admin.password === passsword;
    const token = Math.round(Math.random() * 100000);
    if (isLogin) {
      this.localStore.saveData({token, expiredTime: this.getExpiredTime()});
    }
    return isLogin;
  }

  /***
   * Get Expired Time for token function
   */
  getExpiredTime(): number {
    return moment().startOf('day').add(1, 'day').unix();
  }
}
