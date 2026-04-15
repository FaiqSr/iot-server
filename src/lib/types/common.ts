export type WebResponse<T> = {
    status: 'success' | 'error';
    data: T;
}