import Http from "../../Http";
import { AuthActionTypes } from "../Actions/Auth.action";
import { InitialAuthStateModel } from "../Model";
export const initialState: InitialAuthStateModel = {
    isAuthenticated: false,
    token: '',
    user: {},
    otp: false,
    isExpired: true,
}
const reducer = (state = initialState, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case AuthActionTypes.Login:
            Http.defaults.headers.common['Authorization'] = `Bearer ${payload.token}`;
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isExpired: false
            };
        case AuthActionTypes.RequestOtp:
            return {
                ...state,
                ...payload,
                otpSent: true
            }
        case AuthActionTypes.OtpVerify:
            return {
                ...state,
                ...payload,
                otp: true
            }
        case AuthActionTypes.Profile:
            return {
                ...state,
                ...payload,
                user: payload.user,
            }
        default:
            return state;
    }
}
export default reducer;