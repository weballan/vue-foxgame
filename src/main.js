// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import MintUi from 'mint-ui'
import Http from './config/Http'
import './filters'

import 'mint-ui/lib/style.min.css'
import './scss/style.scss'

Vue.use(MintUi);
Vue.config.productionTip = false;
Vue.prototype.$http=Http;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'
});
