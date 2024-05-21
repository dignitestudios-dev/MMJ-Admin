import { Route } from "react-router-dom";
import { ForgotPassAction, ForgotPassword, Login, OTPActions, OtpScreen, ResetPassAction, ResetPassword, SignInAction } from "../../pages";

const AuthRoutes = (
    <>
        <Route path="login" element={<Login />} action={SignInAction} />
        <Route path="forgot-password" element={<ForgotPassword />} action={ForgotPassAction} />
        <Route path="verify" element={<OtpScreen />} action={OTPActions} />
        <Route path="password-reset" element={<ResetPassword />} action={ResetPassAction} />
    </>
);

export default AuthRoutes