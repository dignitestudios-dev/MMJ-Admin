import { handleInsertAction } from "./common/API";

const NotiService = {
    sendNotification: (body: any) => {
        return handleInsertAction({ url: `/notification/notify`, data: body });
    },
};

export default NotiService;