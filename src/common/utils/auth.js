import wepy from 'wepy'
import storage from 'utils/storage'
import { api } from '@/config/index'
import { request } from 'utils/request'

const auth = {
  async getUserInfo() {
    const loginData = await wepy.login()
    const userData = await wepy.getUserInfo({ withCredentials: false })
    const userInfo = userData.userInfo
    userInfo.code = loginData.code
    return userInfo
  },

  async login() {
    const userInfo = await auth.getUserInfo()
    const result = await request(api.user.login.method, api.user.login.url, {
      user: userInfo
    })
    if (!result.data.user) {
      console.log('token: ', result.data.token)
      storage.set('token', result.data.token)
      wepy.redirectTo({
        url: 'bind'
      })
    } else {
      return result
    }
  }
}

export default auth
