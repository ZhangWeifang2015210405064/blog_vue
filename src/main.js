// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import global_ from './components/tool/Global'


Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.prototype.GLOBAL = global_

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //注入到根实例中
  components: { App },
  template: '<App/>'
})
