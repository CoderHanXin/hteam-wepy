import wepy from 'wepy'
let prefix = 'hteam.dev.'
if (process.env.NODE_ENV === 'production') {
  prefix = 'hteam.prod.'
}

const get = key => {
  return wepy.getStorageSync(prefix + key)
}

const set = (key, value) => {
  wepy.setStorageSync(prefix + key, value)
}

const remove = key => {
  wepy.removeStorageSync(prefix + key)
}

module.exports = {
  get,
  set,
  remove
}
