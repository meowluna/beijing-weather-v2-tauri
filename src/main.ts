import { createApp } from "vue"
import App from './App.vue'
import router from './router'
import './utils/backButtonFix.js'

//引入mdui
import 'mdui/mdui.css';
import 'mdui';

const app = createApp(App)
app.use(router)
app.mount('#app')

