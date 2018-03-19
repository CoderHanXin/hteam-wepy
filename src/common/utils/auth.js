import wepy from 'wepy'
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
    return result
  }
}

export default auth
