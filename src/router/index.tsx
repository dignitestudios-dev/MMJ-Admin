import { Fragment } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
    Route,
    Outlet,
} from "react-router-dom";
import { ToastContainer } from '../utils/toast';
import PrivateRoute from "./PrivateRoutes";
import { hasAuthToken } from "../utils/authActions";
import AuthRoutes from "./routes/AuthRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import { NetworkIssue, Page404 } from "../pages";
import Dashboard from "../layout/Dashboard";

const authToken = hasAuthToken();

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route
                path="/"
                element={PrivateRoute({
                    token: authToken,
                    component: <Dashboard />,
                    path: "/login",
                })}
                errorElement={<NetworkIssue />}
            >
                {DashboardRoutes}
            </Route>
            <Route
                errorElement={<NetworkIssue />}
                element={PrivateRoute({
                    token: !authToken,
                    component: <Outlet />,
                    path: "/dashboard",
                })}
            >
                {AuthRoutes}
            </Route>
            <Route path="*" element={<Page404 />} />
        </Route>
    )
);

const RootRouter = () => {
    return (
        <Fragment>
            <ToastContainer />
            <RouterProvider router={router} />
        </Fragment>
    );
};

export default RootRouter;