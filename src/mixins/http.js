import wepy from 'wepy'
import storage from 'utils/storage'
import { domain } from '@/config'

export default class HttpMixin extends wepy.mixin {
  request(method, url, params = {}) {
    let option = {}
    option.url = domain + url
    option.data = params
    let token = storage.get('token')
    if (token) {
      option.header = {
        Authorization: 'Bearer ' + token
      }
    }
    option.method = method
    wepy.showLoading({
      title: '加载中...',
      mask: true
    })
    return wepy.request(option)
  }
}
