import { handleFetchAction } from "./common/API";

const DashServices = {
    fetchStats: (days: number) => {
        return handleFetchAction({ url: `/dashboard/stats?days=${days}` });
    }
}

export default DashServices