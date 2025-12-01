import { FaIceCream } from 'react-icons/fa6'
import '../App.css'
import { GrIceCream } from 'react-icons/gr'
import { BiDrink, BiSend } from 'react-icons/bi'
import { IoIceCream } from 'react-icons/io5'
import { LuIceCreamBowl } from 'react-icons/lu'
import { useState } from 'react'
import axios from 'axios'
//import type{ FormEvent } from 'react'
//import { FiSend } from 'react-icons/fi'


export function Products() {


  const [bill, setBill] = useState<number>(0);
  const [productname, setProductName] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(0);
  //const [phoneNumber, setphoneNumber] = useState<string>('');
  const [showOrderpanel, setshowOrderpanel] = useState<boolean>(false);
  const [showPurchasepanel, setshowPurchasepanel] = useState<boolean>(false);


  const products = (productname: string) => {
    setProductName(productname);
  }


  const addToBill = (price: number) => {
    setBill(bill + price);
    setQuantity(quantity + 1);
  }

  const countQuantity = () => {
    const OrderQuantity = quantity;
    return OrderQuantity;
  }



  const sendBill = async () => {

    //e: FormEvent<HTMLFormElement>
    //const formData = new FormData(e.currentTarget);
    // const phoneNumber = formData.get('phoneNumber')
    const phoneNumber = prompt('Enter your phone number');

    try {
      const response = await axios.post('http://localhost:3000/api/bills', {
        amount: bill,
        customerNumber: phoneNumber
      });

      console.log('Bill sent successfully:', response.data);


    } catch (error) {
      console.error('Error sending bill:', error);
    }
  }




  return (
    <>
      <section id='products'>
        <div style={{
          backgroundColor: '#ff6e6123', borderRadius: '10px', margin: '50px', padding: '10px'
        }}>
          <h2 style={{
            color: 'white', fontWeight: '800', fontSize: '3rem', textAlign: 'center'
          }}>Flavours Available</h2>
          <div style={{
            display: 'flex', justifyContent: 'space-evenly',
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
          color: 'white', fontWeight: '800', fontSize: '3rem', textAlign: 'center'
        }}>Refreshes Available</h2>
        <div className='container'>
          <div className='card'>
            <div style={{
              backgroundColor: '#dc5c50d3', width: '100%', height: '150px', borderRadius: '20px 20px 0 0',
              justifyContent: 'center', alignItems: 'center', display: 'flex'
            }}>
              <BiDrink size={80} color='rgb(2, 1, 11)' />
            </div>
            <h2 style={{ color: 'pink', fontWeight: '800', fontSize: '2rem' }}>Cream-Squashe</h2>
            <h4>$2.00 each</h4>

            <button className='btn' id='Cream-Squashes'
              onClick={() => {
                addToBill(2.00);
                products('Cream-Squashe');
              }}
            >Buy Now</button>
          </div>


          <div className='card'>
            <div style={{
              backgroundColor: '#dc5c50d3', width: '100%', height: '150px', borderRadius: '20px 20px 0 0',
              justifyContent: 'center', alignItems: 'center', display: 'flex'
            }}>
              <LuIceCreamBowl size={80} color='rgb(2, 1, 11)' />
            </div>
            <h2 style={{ color: 'pink', fontWeight: '800', fontSize: '2rem' }}>Ice-Cups</h2>
            <h4>$3.50 each</h4>


            <button className='btn' id='Ice-Cups'
              onClick={() => {
                addToBill(3.50)
                products('Ice-Cups');
              }}
            >Buy Now</button>
          </div>



          <div className='card'>
            <div style={{
              backgroundColor: '#dc5c50d3', width: '100%', height: '150px', borderRadius: '20px 20px 0 0',
              justifyContent: 'center', alignItems: 'center', display: 'flex'
            }}>
              <IoIceCream size={80} color='rgb(2, 1, 11)' />
            </div>
            <h2 style={{ color: 'pink', fontWeight: '800', fontSize: '2rem' }}>Double Scoops</h2>

            <h4>$2.50 each</h4>

            <button className='btn' id='Double-Scoops'
              onClick={() => {
                addToBill(2.50)
                products('Double Scoops');
              }}
            >Buy Now</button>
          </div>




          <div className='card'>
            <div style={{
              backgroundColor: '#dc5c50d3', width: '100%', height: '150px', borderRadius: '20px 20px 0 0',
              justifyContent: 'center', alignItems: 'center', display: 'flex'
            }}>
              <GrIceCream size={80} color='rgb(2, 1, 11)' />
            </div>
            <h2 style={{ color: 'pink', fontWeight: '800', fontSize: '2rem' }}>Smoothies</h2>

            <h4>$4.00 each</h4>

            <button className='btn' id='Smoothies'
              onClick={() => {
                addToBill(4.00)
                products('Smoothies');
              }}
            >Buy Now</button>
          </div>



          <div className='card'>
            <div style={{
              backgroundColor: '#dc5c50d3', width: '100%', height: '150px', borderRadius: '20px 20px 0 0',
              justifyContent: 'center', alignItems: 'center', display: 'flex'
            }}>
              <FaIceCream size={80} color='rgb(2, 1, 11)' />
            </div>
            <h2 style={{ color: 'pink', fontWeight: '800', fontSize: '2rem' }}>Cones</h2>
            <h4>$0.01 each</h4>

            <button className='btn' id='Cones'
              onClick={() => {
                addToBill(0.01)
                products('Cones');
              }}
            >Buy Now</button>
          </div>

        </div>

        <br /> <br />
        <div style={{
          margin: '10px 100px', color: 'white', fontSize: '1.5rem', fontWeight: '600', textAlign: 'center',
          border: '1px solid rgba(233, 143, 174, 0.77)', borderRadius: '20px', padding: '10px'
        }}>



          {showOrderpanel && (
            <div style={{
              fontSize: '1.5rem', fontWeight: '600', color: 'rgba(6, 3, 25, 0.95)',
              backgroundColor: '#11094081', padding: '10px', borderRadius: '10px', margin: '60px 60px'
            }}>
              <h2 style={{ color: '#ff6e61b4' }}>Total Bill is ${bill}</h2>
              <p>Product: {productname}</p>
              <p>Quantity: {countQuantity()}</p>

            </div>
          )}

          {showPurchasepanel && (
            <div style={{
              fontSize: '1.5rem', fontWeight: '600', color: 'rgba(6, 3, 25, 0.95)',
              backgroundColor: '#0d0e46b4', padding: '10px', borderRadius: '10px', margin: '60px 60px'
            }}>
              <br />
              <p>Your total bill is ${bill.toFixed(2)}</p>
              <form >
                <input type="tel" className='input' name='phoneNumber'
                  placeholder=' phonenumber (263xxxxxxxxx)' />

              </form>

              <p style={{ fontSize: '0.8rem', color: '#f4f3fbe5' }}>You are advised to view your order before purchase</p>

              <p style={{ color: 'rgba(250, 37, 115, 0.85)' }}>Thank you for your purchase!</p>

              <button className='btn' onClick={() => sendBill()}>
                Send <BiSend size={20} color='#ff6e61b4'

                />
              </button>

              <br /> <br />
            </div>)}

          <div style={{ display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row' }}>
            <button id='Purchase'
              style={{
                backgroundColor: 'rgba(215, 24, 91, 1)', padding: '10px 50px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', fontSize: 'larger', fontWeight: '800'
              }}
              onClick={() => {

                setshowPurchasepanel(!showPurchasepanel);
              }}
            >Purchase Now</button>



            <button id='View-Order'
              style={{
                backgroundColor: 'rgba(215, 24, 91, 1)', padding: '10px 50px', borderRadius: '10px',
                border: 'none', cursor: 'pointer', fontSize: 'larger', fontWeight: '800'
              }}
              onClick={() => {
                setshowOrderpanel(!showOrderpanel);
              }}
            >View Order</button>




          </div>
        </div>
        <br /> <br />
      </section>
    </>
  )

}





