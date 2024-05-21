import { Navigate, Outlet, Route } from "react-router-dom";
import { Main, Notification, NotificationActions, Users, UserLoader, DashboardLoader } from "../../pages";
import { hasAuthToken } from "../../utils/authActions";

const authToken = hasAuthToken();

const NavToDash = ()=> <Navigate to={authToken ? "dashboard" : "/login"} />

const DashboardRoutes = (<>
    <Route path="/" element={<Outlet />}>
        <Route index element={<NavToDash />} />
        <Route path="dashboard" element={<Main />} loader={DashboardLoader} />
        <Route path="users" element={<Users />} loader={UserLoader} />
        <Route path="notifications" element={<Notification />} action={NotificationActions} />
    </Route>
</>);

export default DashboardRoutes