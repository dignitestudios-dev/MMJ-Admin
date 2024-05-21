import { ActionFunctionArgs } from 'react-router-dom';
import OtpForm from '../../components/form/OtpForm'
import AuthService from '../../services/AuthServices';
import { notifySuccess } from '../../utils/toast';
import { handleError, redirectTospecificURL } from '../../utils/authActions';
import { ErrorResponse } from '../../types/response.types';

const OtpScreen = () => {
    return (
        <OtpForm />
    )
}

export const OTPActions: any = async ({ request }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const response = (await AuthService.verifyAdmin(
            formData
        )) as any

        if (response.data.success) {
            notifySuccess(response.data.message);
            redirectTospecificURL(`/password-reset?email=${response.data.result.email}`, true);
            return { success: true };
        }
    } catch (err) {
        const error = err as ErrorResponse;
        const errorRes = handleError(error);
        return { success: false, error: errorRes };
    }
};

export default OtpScreen