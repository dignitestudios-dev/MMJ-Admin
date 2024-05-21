import { ActionFunctionArgs } from "react-router-dom";
import { ErrorResponse, ForgetOrResetPasswordResponse, PostAPIResponse, SignInResponse } from "../../types/response.types";
import { handleError, handleSuccessfulSignIn, redirectTospecificURL } from "../../utils/authActions";
import { notifySuccess } from "../../utils/toast";
import AuthService from "../AuthServices";
import UserServices from "../UserServices";

export const actions = {
    SignInAction: async ({ request }: ActionFunctionArgs) => {
        try {
            const formData = await request.formData();
            const response = (await AuthService.userSignIn(
                formData
            )) as SignInResponse;

            if (response.data.success) {
                handleSuccessfulSignIn(response.data.result);
                return { success: true, data: response.data };
            }
        } catch (err) {
            const error = err as ErrorResponse;
            const errorRes = handleError(error);
            return { success: false, error: errorRes };
        }
    },
    forgotPasswordAction: async ({ request }: ActionFunctionArgs) => {
        try {
            const formData = await request.formData();
            const response = (await AuthService.forgotPassword(
                formData
            )) as ForgetOrResetPasswordResponse;
            console.log(response.data);

            if (response.data.success) {
                notifySuccess(response.data.message);
                redirectTospecificURL('/verify');
                return { success: true };
            }
        } catch (err) {
            const error = err as ErrorResponse;
            const errorRes = handleError(error);
            return { success: false, error: errorRes };
        }
    },
    createAction: async (action: Promise<any>) => {
        try {
            const response = (await action) as PostAPIResponse;

            if (response.data.success) {
                notifySuccess(response.data.message);
                return { success: true };
            }
        } catch (err) {
            const error = err as ErrorResponse;
            const errorRes = handleError(error);
            return { success: false, error: errorRes };
        }
    },
    updateAction: async (updateAction: Promise<any>) => {
        try {
            const response = (await updateAction) as PostAPIResponse;

            if (response.data.success) {
                notifySuccess(response.data.message);
                return { success: true };
            }
        } catch (err) {
            const error = err as ErrorResponse;
            const errorRes = handleError(error);
            return { success: false, error: errorRes };
        }
    },
    deleteAction: async (deleteAction: Promise<any>, revalidate: () => void) => {
        try {
            const response = (await deleteAction) as PostAPIResponse;

            if (response.data.success) {
                revalidate();
                notifySuccess(response.data.message);
                return { success: true };
            }
        } catch (err) {
            const error = err as ErrorResponse;
            const errorRes = handleError(error);
            return { success: false, error: errorRes };
        }
    },
    exportUserAsCSV: async () => {
        try {
            const response = await UserServices.exportUser() as any;
            if (response.data.success) {
                window.open(`${import.meta.env.VITE_API_URL}/${response.data?.downloadURL}`, "_parent")
            }

        } catch (err) {
            const error = err as ErrorResponse;
            const errorRes = handleError(error);
            return { success: false, error: errorRes };
        }
    }
}