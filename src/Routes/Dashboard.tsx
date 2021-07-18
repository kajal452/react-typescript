import DashboardView from "../Views/Dashboard/DashboardView";
import ProfileView from "../Views/Dashboard/ProfileView";
import { RouteInterface } from "./Auth";

const Dashboard: Array<RouteInterface> = [
    { path: '/dashboard', name: 'Login', component: DashboardView },
    { path: '/profile', name: 'Otp Verification', component: ProfileView }
]
export default Dashboard;