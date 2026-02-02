export interface EcoCashApiResponse {
    customerPhoneNumber: string;
    amount: number;
    currency: string;
    transactionReference: string;
    reason: string;
    status: number;
}

export interface OrderDeatails{
    orderNumber: number;
    sourceReference: string;
    amount: number;
    quantity: number;
}