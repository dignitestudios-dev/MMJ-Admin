export type SignInResponse = {
    data: {
        success: boolean;
        result: { token: string, name: string, email: string }
    };
    response: {
        data: {
            error: string;
        };
    };
};

export type PostAPIResponse = {
    data: {
        success: boolean;
        message: string;
    };
};

export type ErrorResponse = {
    response: {
        data: {
            error: string;
        };
    };
};

export interface PaginationTypes {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
}

export interface APIDataResponse {
    success: boolean;
    data: any[];
    pagination: PaginationTypes;
}

export interface ApiGetResponse {
    data: APIDataResponse
}

export type ForgetOrResetPasswordResponse = {
    data: {
        success: boolean;
        message: string;
        result: {
            email: string;
        }
    };
};

export interface UserData {
    _id: string;
    email: string;
    name: string;
    phone_number: string;
    profile_url: string | null;
    gender: string;
}

export interface UserLoaderResponse {
    data: {
        success: boolean;
        message: string;
        result: UserData[];
    }
}

export interface Statistics {
    usersCount: number;
    maleCount: number;
    femaleCount: number;
    upperBodyCount: number;
    torsoCount: number;
    lowerBodyCount: number;
    upperBodyCountPrevMonth: number;
    torsoCountPrevMonth: number;
    lowerBodyCountPrevMonth: number;
}

export interface StatisticsResponse {
    data: {
        success: boolean;
        result: Statistics
    }
}
