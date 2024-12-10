import { baseQuery } from "./api";

export const getRequest = (url: string, params?: any) =>
    baseQuery({ url, method: 'GET', params });

export const potRequest = (url: string, data: any) =>
    baseQuery({ url, method: 'POST', data });

export const patchRequest = (url: string, data: any) =>
    baseQuery({ url, method: 'PATCH', data });

export const deleteRequest = (url: string) =>
    baseQuery({ url, method: 'DELETE' });

