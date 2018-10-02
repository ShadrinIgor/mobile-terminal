import constants from '../../constants';

export class LocalStoreService {
  saveData({token, expiredTime}): boolean {
    console.log('saveData', token, expiredTime);
    localStorage.setItem(constants.tokenKey, token);
    localStorage.setItem(constants.tokenExpiredKey, expiredTime);
    return true;
  }

  getData(): { token: string, expiredTime: number } {
    const token = localStorage.getItem(constants.tokenKey);
    const expiredTime = +localStorage.getItem(constants.tokenExpiredKey);
    return {
      token,
      expiredTime
    };
  }
}
