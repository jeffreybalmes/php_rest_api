import App from './components/app.js';
import adminApp from './admin-components/admin-app.js';

new Vue({
   render: h => h(App),
}).$mount('#app');

new Vue({
   render: h => h(adminApp),
}).$mount('#admin-app');