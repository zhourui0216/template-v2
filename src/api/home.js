import request from "../utils/interceptor.js"
export default {
    getData(data){
        return request({
            url: "/backstage/index/agencyOrderCount",
            method: "GET",
            params: data
        })
    }
}