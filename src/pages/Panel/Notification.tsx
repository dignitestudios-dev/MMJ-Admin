import { ActionFunctionArgs } from 'react-router-dom'
import NotificationForm from '../../components/form/NotificationForm'
import NotiServices from '../../services/NotiServices'
import { ErrorResponse, PostAPIResponse } from '../../types/response.types'
import { notifySuccess } from '../../utils/toast'
import { handleError } from '../../utils/authActions'

const Notification = () => {
    return (
        <NotificationForm />
    )
}

export const NotificationActions = async ({ request }: ActionFunctionArgs) => {
    try {
        const formData = await request.formData();
        const response = (await NotiServices.sendNotification(
            formData
        )) as PostAPIResponse;

        if (response.data.success) {
            notifySuccess(response.data.message);
            return { success: true };
        }
    } catch (err) {
        const error = err as ErrorResponse;
        const errorRes = handleError(error);
        return { success: false, error: errorRes };
    }
}

export default Notification