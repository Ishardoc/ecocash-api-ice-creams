import { FaIceCream } from 'react-icons/fa6'
import '../App.css'
import { GrIceCream } from 'react-icons/gr'
import { BiDrink } from 'react-icons/bi'
import { IoIceCream } from 'react-icons/io5'
import { LuIceCreamBowl } from 'react-icons/lu'
import { useState } from 'react'
import axios from 'axios'
//import {  } from 'uuid'

export function Products(){

  
    const [bill , setBill] = useState<number>(0);

  const addToBill= (price: number) =>{
    setBill(bill + price);
  }


  const sendBill = async() =>{

    alert(`Your total bill is $${bill.toFixed(2)}`);

    try{
      const response = await axios.post('http://localhost:3000/api/bills', {
        amount: bill
      });
    
      console.log('Bill sent successfully:', response.data);
  }catch(error){
    console.error('Error sending bill:', error);
  }
 }
  
  
  
   
    return(
        <>
       <section id='products'>
        <div style={{
            backgroundColor: '#d5292986', borderRadius: '10px', margin: '50px', padding: '10px'
        }}>
            <h2 style={{
               color: 'white' ,fontWeight: '800' ,fontSize: '3rem', textAlign: 'center'
            }}>Flavours Available</h2>
             <div style={{display: 'flex', justifyContent: 'space-evenly', 
                padding: '10px', flexWrap: 'wrap', flexDirection: 'row',
               }}>
                 <p className='flavour'>Vanilla</p>
                 <p className='flavour'>Custard</p>
                 <p className='flavour'>Chocolate</p>
                 <p className='flavour'>Strawberry</p>
                 <p className='flavour'>Banana</p>
                
               </div>

        </div>
        <h2 style={{
               color: 'white' ,fontWeight: '800' ,fontSize: '3rem', textAlign: 'center'
            }}>Refreshes Available</h2>
        <div className='container'>
        <div className='card'>
             <div style={{backgroundColor: '#dc5c50d3', width: '100%', height: '150px',borderRadius: '20px 20px 0 0',
                 justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <BiDrink size={80} color='rgb(2, 1, 11)'/>
             </div>
               <h2 style={{color: 'pink' ,fontWeight: '800' ,fontSize: '2rem'}}>Cream-Squashe</h2>
             <h4>$2.00 each</h4>
              
                <button className='btn' id='Cream-Squashes'
                onClick={() => addToBill(2.00)}
                >Buy Now</button>
           </div>


           <div className='card'>
             <div style={{backgroundColor: '#dc5c50d3', width: '100%', height: '150px',borderRadius: '20px 20px 0 0',
                 justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <LuIceCreamBowl size={80} color='rgb(2, 1, 11)'/>
             </div>
               <h2 style={{color: 'pink' ,fontWeight: '800' ,fontSize: '2rem'}}>Ice-Cups</h2>
                     <h4>$3.50 each</h4>
              
                
                <button className='btn' id='Ice-Cups'
                onClick={() => addToBill(3.50)}
                >Buy Now</button>
           </div>



           <div className='card'>
             <div style={{backgroundColor: '#dc5c50d3', width: '100%', height: '150px',borderRadius: '20px 20px 0 0',
                 justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <IoIceCream size={80} color='rgb(2, 1, 11)'/>
             </div>
               <h2 style={{color: 'pink' ,fontWeight: '800' ,fontSize: '2rem'}}>Double Scoops</h2>

               <h4>$2.50 each</h4>
                
                <button className='btn' id='Double-Scoops'
                 onClick={() => addToBill(2.50)}
                >Buy Now</button>
           </div>




            <div className='card'>
             <div style={{backgroundColor: '#dc5c50d3', width: '100%', height: '150px',borderRadius: '20px 20px 0 0',
                 justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <GrIceCream size={80} color='rgb(2, 1, 11)'/>
             </div>
               <h2 style={{color: 'pink' ,fontWeight: '800' ,fontSize: '2rem'}}>Smoothies</h2>

                <h4>$4.00 each</h4>
                
                <button className='btn' id='Smoothies'
                 onClick={() => addToBill(4.00)}
                >Buy Now</button>
           </div>



            <div className='card'>
             <div style={{backgroundColor: '#dc5c50d3', width: '100%', height: '150px',borderRadius: '20px 20px 0 0',
                 justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
              <FaIceCream size={80} color='rgb(2, 1, 11)'/>
             </div>
               <h2 style={{color: 'pink' ,fontWeight: '800' ,fontSize: '2rem'}}>Cones</h2>
                <h4>$0.01 each</h4>
                
                <button className='btn' id='Cones'
                 onClick={() => addToBill(0.01)}
                >Buy Now</button>
           </div>

        </div>

         <br /> <br />
               <div style={{margin: '10px 100px', color: 'white', fontSize: '1.5rem', fontWeight: '600', textAlign: 'center',
                border: '1px solid rgba(233, 143, 174, 0.77)', borderRadius: '20px', padding: '10px'
               }}>

                <h2 >Total Bill is ${bill}</h2>
                
                <button  id='Purchase'
               style={{
                backgroundColor: 'rgba(215, 24, 91, 1)', padding: '10px 50px', borderRadius: '10px',
                  border: 'none', cursor: 'pointer', fontSize: 'larger' , fontWeight: '800'
               }}
                 onClick={() => sendBill()}
                >Purchase Now</button>
               </div>
                <br /> <br />
       </section>
        </>
    )


   
            


      }
