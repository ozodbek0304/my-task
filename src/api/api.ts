import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL + "/api";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const baseQuery = async ({
    url,
    method = 'GET',
    data = null,
    params = {},
}: {
    url: string;
    method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    data?: any;
    params?: Record<string, any>;
}) => {
    try {
        const response = await axiosInstance({
            url,
            method,
            data,
            params,
        });

        return response.data;
    } catch (error: any) {
        throw new Error(
            error.response?.data || 'Something went wrong with the request',
        );
    }
};