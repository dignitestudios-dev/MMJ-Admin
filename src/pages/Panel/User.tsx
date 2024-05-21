import { useLoaderData } from 'react-router-dom'
import UserTables from '../../components/table/UserTables'
import UserServices from '../../services/UserServices'
import { ErrorResponse, UserData, UserLoaderResponse } from '../../types/response.types'
import { handleError } from '../../utils/authActions'

const Users = () => {
    const userLoaderData = useLoaderData() as { users: UserData[] };

    return (
        <UserTables users={userLoaderData?.users} />
    )
}

export const UserLoader = async () => {
    try {
        const response = (await UserServices.fetchUsers()) as UserLoaderResponse;        
        if (response.data.success) {
            return { success: true, users: response.data.result };
        }
    } catch (err) {
        const error = err as ErrorResponse;
        const errorRes = handleError(error);
        return { success: false, error: errorRes };
    }
}

export default Users