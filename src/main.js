import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

import '../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

String.prototype.format = function(){
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) { 
      return typeof args[number] != 'undefined'
          ? args[number]
          : match;
  });
}