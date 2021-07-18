import axios, { CancelTokenSource as TokenSource, CancelTokenStatic as TokenStatic } from 'axios';
import Config from './Config';


axios.defaults.baseURL = Config.API_URL;

axios.interceptors.response.use(
    resp => {
        if((resp?.data?.status === 200 || resp?.data?.status === 201) && resp?.data?.message){
            console.log(resp.data.message);
        }
        return resp;
    },
    error => {
        if(error && error.response){
            const {data} = error.response;
            if(data.status === 500){
                console.error(data.message);
            }if((data.status === 400) && data.message){
                console.warn(data.message);
            }if((data.status === 401) && data.message){
                console.warn(data.message);
               
            }if((data.status === 404) && data.message){
                console.warn(data.message);
            }
            return Promise.reject(data);
        }
    }
);
const Http = axios;
export const FixedHttp = axios.create();

export interface CancelTokenSource extends TokenSource{

}
export interface CancelTokenStatic extends TokenStatic {

}
export default Http;