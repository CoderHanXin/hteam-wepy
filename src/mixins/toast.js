import wepy from 'wepy'

export default class ToastMixin extends wepy.mixin {
  showToast(text, icon = 'none', time = 1500) {
    wepy.showToast({
      title: text,
      icon: icon,
      duration: time
    })
  }
}
