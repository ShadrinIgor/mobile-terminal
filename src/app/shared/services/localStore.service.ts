import constants from '../../constants';

/***
 * Service for working with the local store
 */
export class LocalStoreService {
  /***
   * Save user's information in the local store
   */
  saveData({token, expiredTime}): boolean {
    console.log('saveData', token, expiredTime);
    localStorage.setItem(constants.tokenKey, token);
    localStorage.setItem(constants.tokenExpiredKey, expiredTime);
    return true;
  }

  /***
   * Get the local store information
   */
  getData(): { token: string, expiredTime: number } {
    const token = localStorage.getItem(constants.tokenKey);
    const expiredTime = +localStorage.getItem(constants.tokenExpiredKey);
    return {
      token,
      expiredTime
    };
  }

  /***
   * Clear the store
   */
  clear() {
    localStorage.removeItem(constants.tokenKey);
    localStorage.removeItem(constants.tokenExpiredKey);
  }
}
