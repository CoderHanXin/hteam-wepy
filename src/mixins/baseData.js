import wepy from 'wepy'

export default class BaseDataMixin extends wepy.mixin {
  data = {
    user: {},
    currentTeam: {}
  }
}
