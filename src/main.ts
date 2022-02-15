import { createApp } from 'vue'
import App from './App.vue'
import { Form, Input, Button,message} from "ant-design-vue"
import 'ant-design-vue/dist/antd.less';
import router from "./router";
const app = createApp(App);

app.use(router);
app.use(Form);
app.use(Input);
app.use(Button);


app.mount('#app')
