import { handleInsertAction } from "./common/API";

const AuthService = {
    userSignIn: (body: any) => {
        return handleInsertAction({ url: `/admin/login`, data: body });
    },
    forgotPassword: (body: any) => {
        return handleInsertAction({ url: `/admin/forgot-password`, data: body });
    },
    verifyAdmin: (body: any) => {
        return handleInsertAction({ url: `/admin/verify-otp`, data: body });
    },
    resetPassword: (body: any) => {
        return handleInsertAction({ url: `/admin/password-reset`, data: body });
    },
};

export default AuthService;