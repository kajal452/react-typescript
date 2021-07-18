import { ComponentType } from "react";
import LoginView from "../Views/LoginView";
import TwoFactorAuthView from "../Views/TwoFactorAuthView";

export interface RouteInterface {
    path: string;
    name: string;
    component: ComponentType,
    exact?: boolean
}

const Auth: Array<RouteInterface> = [
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/otp-verify', name: 'Otp Verification', component: TwoFactorAuthView }
]
export default Auth;