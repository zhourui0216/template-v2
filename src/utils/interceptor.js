import axios from "axios";

// 创建实例
let example = axios.create({
    baseURL: "http://106.14.67.41:32123",
    timeout: 10000
});

// 添加请求拦截器
example.interceptors.request.use(function (config) {
    // 在发送请求之前做一些事情
    config.headers['Content-Type'] = "application/json";
    return config;
}, function (error) {
    // 处理请求错误
    console.log("请求错误")
    return Promise.reject(error);
});

// 添加响应拦截器
example.interceptors.response.use(function (response) {
    // 对响应数据进行处理
    return response.data;
}, function (error) {
    // 处理响应错误
    console.log("响应错误")
    return Promise.reject(error);
});

export default example;