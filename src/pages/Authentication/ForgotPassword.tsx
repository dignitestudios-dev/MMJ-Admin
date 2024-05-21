import ForgotPassForm from '../../components/form/ForgotPassForm'
import AuthService from '../../services/AuthServices';
import { ErrorResponse, ForgetOrResetPasswordResponse } from '../../types/response.types';
import { ActionFunctionArgs } from 'react-router-dom';
import { notifySuccess } from '../../utils/toast';
import { handleError, redirectTospecificURL } from '../../utils/authActions';

const ForgotPassword = () => {
  return (
    <ForgotPassForm />
  )
}

export const ForgotPassAction: any = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const response = (await AuthService.forgotPassword(
      formData
    )) as ForgetOrResetPasswordResponse;

    if (response.data.success) {
      notifySuccess(response.data.message);      
      redirectTospecificURL(`/verify?email=${response.data.result.email}`, true);
      return { success: true };
    }
  } catch (err) {
    const error = err as ErrorResponse;
    const errorRes = handleError(error);
    return { success: false, error: errorRes };
  }
};

export default ForgotPassword