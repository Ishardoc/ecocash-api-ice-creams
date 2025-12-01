import express from "express";

export function generateOrderNumber(amount: number): number{
  
    const orderNumber = Math.floor(Math.random() * 900000) + 100000;
    return orderNumber;
    
}