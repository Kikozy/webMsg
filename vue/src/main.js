import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './style/base.scss'
import VueSocketIO from 'vue-socket.io'
import SocketIO from 'socket.io-client'
Vue.use(new VueSocketIO({
  debug: true,
  connection:SocketIO('http://127.0.0.1:8911',{transports: ['websocket']}),
  
}))
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
