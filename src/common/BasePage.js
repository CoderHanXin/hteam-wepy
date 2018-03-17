import wepy from 'wepy'
import BaseDataMixin from '@/mixins/baseData'
import HttpMixin from '@/mixins/http'
import StoreMixin from '@/mixins/store'
import ToastMixin from '@/mixins/toast'
export default class BasePage extends wepy.page {
  mixins = [BaseDataMixin, HttpMixin, StoreMixin, ToastMixin]
}
