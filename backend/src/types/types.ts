export interface EcoCashApiResponse {
    customerPhoneNumber: string;
    amount: number;
    currency: string;
    sourceReference: string;
    reason: string;
    status: number;
}

export interface OrderDeatails{
    orderNumber: number;
    sourceReference: string;
    amount: number;
    quantity: number;
}