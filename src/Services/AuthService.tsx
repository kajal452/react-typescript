import Http from "../Http";
import { Login, } from "../Redux/Actions/Auth.action";
export default class AuthService {

    public static login(params:Object) {
        return (dispatch:Function) => new Promise((resolve, reject) => {
            Http.post('/auth/signin', params).then(res => {
                if(res?.data.status === 200){
                    dispatch(Login(res?.data.data));
                }
                return resolve(res?.data);
            })
            .catch(err => {
                return reject(err);
            });
        });
    }
}