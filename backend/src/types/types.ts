export interface EcoCashApiResponse {
    customerPhoneNumber: string;
    amount: number;
    currency: string;
    transactionReference: string;
    reason: string;
    status: number;
}