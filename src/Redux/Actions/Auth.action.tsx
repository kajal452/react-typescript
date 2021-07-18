export const AuthActionTypes = {
    Login: 'LOGIN ACTION',
    Logout: 'LOGOUT ACTION',
    RequestOtp: 'REQUEST OTP ACTION',
    OtpVerify: 'OTP VERIFY ACTION',
    Profile: 'PROFILE ACTION',

}

export const Login = (payload: any) => {
    return {
        type: AuthActionTypes.Login,
        payload
    }
}

export const Logout = () => {
    return {
        type: AuthActionTypes.Logout,
    }
}
export const RequestOtp = (payload: any) => ({ type: AuthActionTypes.RequestOtp, payload });

export const OtpVerify = (payload: any) => ({ type: AuthActionTypes.OtpVerify });

export const Profile = (payload: any) => ({ type: AuthActionTypes.Profile });