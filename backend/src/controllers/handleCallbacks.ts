import express from "express";


export async function handleEcocashCallback(req: express.Request, res: express.Response) {

    // Log the callback data for debugging
   try{
     console.log('from the callback handler');
     
    console.log('EcoCash Callback Received:', req.body);

    res.status(200).json({ message: 'Callback received successfully' });
   }catch(error){
    console.error('Error handling EcoCash callback:', error);
    
   }
}