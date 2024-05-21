import { handleFetchAction } from "./common/API";

const UserServices = {
    fetchUsers: () => {
        return handleFetchAction({ url: `/dashboard/users` });
    },
    exportUser: () => {
        return handleFetchAction({ url: `/dashboard/download-users` });
    },
};

export default UserServices;