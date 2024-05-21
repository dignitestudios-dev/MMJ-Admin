import { ActionFunctionArgs } from "react-router-dom";
import ResetPassForm from "../../components/form/ResetPassForm"
import AuthService from "../../services/AuthServices";
import { notifySuccess } from "../../utils/toast";
import { handleError, redirectTospecificURL } from "../../utils/authActions";
import { ErrorResponse } from "../../types/response.types";

const ResetPassword = () => {
    return (
        <ResetPassForm />
    )
}

export const ResetPassAction: any = async ({ request }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const response = (await AuthService.resetPassword(
            formData
        )) as any

        if (response.data.success) {
            notifySuccess(response.data.message);
            redirectTospecificURL(`/`, true);
            return { success: true };
        }
    } catch (err) {
        const error = err as ErrorResponse;
        const errorRes = handleError(error);
        return { success: false, error: errorRes };
    }
};

export default ResetPassword