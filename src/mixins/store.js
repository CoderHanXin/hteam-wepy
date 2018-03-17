import wepy from 'wepy'

export default class StoreMixin extends wepy.mixin {
  store() {
    return this.$root.$parent.globalData
  }
}
