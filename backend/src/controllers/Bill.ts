import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { EcoCashApiResponse } from "../types/types";
import { generateOrderNumber } from "../Utils/GenerateOrderNumber";
import { v4 as uuidv4 } from 'uuid';
import { OrderDeatails } from "../types/types";

dotenv.config();

const API_KEY = process.env.ECOCASH_API_KEY;

export const getBills = async (req: express.Request, res: express.Response) => {

    const { amount, customerNumber } = req.body;
    console.log(`Bill amount received: $${amount}`);

    //check response
    res.status(201).json({
        message: 'Bill recorded successfully',
        bill: amount,
        customerNumber: customerNumber,
        message2: 'order placed successfully'
    });

    //generate source reference and order number

    const orderNumber = await generateOrderNumber(amount);

    const sourceReference = uuidv4();

    console.log(`Generated source reference: ${sourceReference}`);

    //sending to api
    try {
        var settings = {
            "url": "https://developers.ecocash.co.zw/api/ecocash_pay/api/v2/payment/instant/c2b/sandbox",
            "method": "POST",
            "timeout": 0,
            "headers": {
                "X-API-KEY": API_KEY,
                "Content-Type": "application/json"
            },
            "data": JSON.stringify({
                "customerMsisdn": customerNumber,
                "amount": amount,
                "reason": "Payment",
                "currency": "USD",
                "sourceReference": sourceReference
            }),
        };

        const response = await axios.post(settings.url, settings.data, { headers: settings.headers })

        console.log('Sent to EcoCash API:', response.config.data);

        const responseData: EcoCashApiResponse = {

            status: response.status,
            customerPhoneNumber: response.config.data[0],
            amount: response.config.data[1],
            currency: response.config.data.currency,
            transactionReference: response.config.data[5],
            reason: response.config.data[2]
        }

        console.log('Response from EcoCash API:', responseData);

    } catch (error) {
        console.error('Error sending to EcoCash API:', error);
    }


}