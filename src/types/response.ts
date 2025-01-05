type GlobalResponse = {
    success: boolean;
    message?: string; 
    data?: unknown;
    totalCount?:number;
    error?: Error
}

export default GlobalResponse;