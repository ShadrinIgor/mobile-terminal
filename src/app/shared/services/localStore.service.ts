import constants from '../../constants';

export class LocalStoreService {
  saveData({token, expiredTime}): boolean {
    window.localStorage.setItem(constants.tokenKey, token);
    window.localStorage.setItem(constants.tokenExpiredKey, expiredTime);
    return true;
  }

  getData(): { token: number, expiredTime: number } {
    const token = +window.localStorage.getItem(constants.tokenKey);
    const expiredTime = +window.localStorage.getItem(constants.tokenExpiredKey);
    return {
      token,
      expiredTime
    };
  }
}
