import axios from 'axios';

export const axiosInstance = axios.create({});

export const apiConnector = (method,url,body,header,param)=>
{
    return axiosInstance({
        method : `${method}`,
        url : `${url}`,
        data : body ? body : null,
        header : header ? header : null,
        param : param ? param : null
    })
}