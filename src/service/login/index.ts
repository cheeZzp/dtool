import {AxiosPromise} from "axios";
import qs from "qs";
import service from "../base/request";

/** 真实请求的路径前缀 */
const baseApiUrl = import.meta.env.VITE_BASE_API;

export function userLogin<T = any>(data: any) :AxiosPromise{
    return service.request({
        url: `${baseApiUrl}/account/userLogin`,
        method: "post",
        data: qs.stringify(data)
    });
}