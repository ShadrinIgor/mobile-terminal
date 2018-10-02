import {Injectable} from '@angular/core';
import * as moment from 'moment';

import constants from '../../constants';
import {LocalStoreService} from './localStore.service';

/***
 * Service for user's authorization
 */
@Injectable()
export class AuthService {
  constructor(private localStore: LocalStoreService) {
  }

  /***
   * Login function(emulate)
   */
  login({email, password}): boolean {
    const isLogin = constants.admin.login === email && constants.admin.password === password;
    const token = `${moment().unix()}${Math.round(Math.random() * 1000)}`;
    if (isLogin) {
      this.localStore.saveData({token, expiredTime: this.getExpiredTime()});
    }
    return isLogin;
  }

  /***
   * Get Expired Time for token
   */
  getExpiredTime(): number {
    return moment().startOf('day').add(1, 'day').unix();
  }

  /***
   * Get token date
   */
  getToken(): any {
    return this.localStore.getData();
  }

  /***
   * Get token date
   */
  isLogin(): boolean {
    const tokenData = this.getToken();
    /*
    @DOTO надо проверить если срок истек, то очистить и заново выдать форму логина
     */
    return !!tokenData.token;
  }
}
