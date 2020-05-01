import Vue from 'vue'
import _URLS from '~/config/urls/urls'

const URLS = {}

URLS.install = (Vue) => {
Vue.prototype.$URLS = _URLS
}

Vue.use(URLS)