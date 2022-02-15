import axios from "axios";
import {message as $message} from 'ant-design-vue';


/** mock请求路径前缀 */
const baseMockUrl = import.meta.env.VITE_MOCK_API;

const service = axios.create({
    timeout: 6000,
});
//请求拦截器
service.interceptors.request.use(
    (config) => {
        // if (config.headers) config.headers['Anthorization'] = "123456";
        return config
    },
    (e) => {
        Promise.reject(e)
    }
)

service.interceptors.response.use(
    (response) => {
        const {data} = response;
        if (!data.result) $message.error("接口错误", data)
        return response
    },

    (e) => {
        $message.error("未知的错误：", e)
        return e
    })

export default service;

