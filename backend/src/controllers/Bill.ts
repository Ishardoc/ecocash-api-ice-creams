import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { EcoCashApiResponse } from "../types/types";

dotenv.config();

const API_KEY = process.env.ECOCASH_API_KEY ;

export const getBills =  async (req: express.Request, res: express.Response) => {

    const{ amount } = req.body;
    console.log(`Bill amount received: $${amount}`);

    //check response
    res.status(201).json({ 
        message: 'Bill recorded successfully', 
        bill: amount
    });

    //sending to api
    try{
        var settings = {
  "url": "https://developers.ecocash.co.zw/api/ecocash_pay/api/v2/payment/instant/c2b/sandbox",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "X-API-KEY": API_KEY,
    "Content-Type": "application/json"
  },
  "data": JSON.stringify({
    "customerMsisdn": "263780264423",
    "amount": amount,
    "reason": "Payment",
    "currency": "USD",
    "sourceReference": "c7a4e9d2-3b65-4f18-9c28-882a5d1e7b6f"
  }),
};

const response = await axios.post(settings.url, settings.data, { headers: settings.headers }) 

console.log('Sent to EcoCash API:', response.config.data);

const responseData: EcoCashApiResponse = {
 
    status: response.status,
    customerPhoneNumber: response.config.data[0],
    amount: response.config.data[1],
    currency: response.config.data[3],
    transactionReference: response.config.data[5],
    reason: response.config.data[2]
}

console.log('Response from EcoCash API:', responseData);

    }catch(error){
        console.error('Error sending to EcoCash API:', error);
    }


}