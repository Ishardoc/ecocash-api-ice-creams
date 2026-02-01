import { FaIceCream } from 'react-icons/fa6';
import { GrIceCream } from 'react-icons/gr';
import { BiDrink, BiSend } from 'react-icons/bi';
import { IoIceCream } from 'react-icons/io5';
import { LuIceCreamBowl } from 'react-icons/lu';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

interface ProductItem {
  name: string;
  price: number;
  quantity: number;
}

interface FlavourItem {
  flavour: string;
  quantity: number;
}

interface ProductCard {
  id: string;
  name: string;
  price: number;
  icon: React.ReactNode;
  color: string;
}

export function Products() {
  const [bill, setBill] = useState<number>(0);
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [flavours, setFlavours] = useState<FlavourItem[]>([]);
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [showOrderPanel, setShowOrderPanel] = useState<boolean>(false);
  const [showPurchasePanel, setShowPurchasePanel] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const productCards: ProductCard[] = [
    {
      id: 'cream-squashe',
      name: 'Cream-Squashe',
      price: 2.00,
      icon: <BiDrink size={80} />,
      color: '#dc5c50d3'
    },
    {
      id: 'ice-cups',
      name: 'Ice-Cups',
      price: 3.50,
      icon: <LuIceCreamBowl size={80} />,
      color: '#dc5c50d3'
    },
    {
      id: 'double-scoops',
      name: 'Double Scoops',
      price: 2.50,
      icon: <IoIceCream size={80} />,
      color: '#dc5c50d3'
    },
    {
      id: 'smoothies',
      name: 'Smoothies',
      price: 4.00,
      icon: <GrIceCream size={80} />,
      color: '#dc5c50d3'
    },
    {
      id: 'cones',
      name: 'Cones',
      price: 0.01,
      icon: <FaIceCream size={80} />,
      color: '#dc5c50d3'
    }
  ];

  const availableFlavours = ['Vanilla', 'Custard', 'Chocolate', 'Strawberry', 'Banana'];

  useEffect(() => {
    const total = products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    setBill(total);
  }, [products]);

  const addFlavour = (flavourName: string) => {
    setFlavours(prev => {
      const existingFlavour = prev.find(f => f.flavour === flavourName);
      
      if (!existingFlavour) {
        return [...prev, { flavour: flavourName, quantity: 1 }];
      }
      
      return prev.map(f =>
        f.flavour === flavourName
          ? { ...f, quantity: f.quantity + 1 }
          : f
      );
    });
  };

  const addProduct = (productName: string, price: number) => {
    setProducts(prev => {
      const existingProduct = prev.find(p => p.name === productName);
      
      if (existingProduct) {
        return prev.map(p => 
          p.name === productName 
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      
      return [...prev, { name: productName, price: price, quantity: 1 }];
    });
  };

  const removeProduct = (productName: string) => {
    setProducts(prev => {
      const existingProduct = prev.find(p => p.name === productName);
      
      if (!existingProduct) return prev;
      
      if (existingProduct.quantity > 1) {
        return prev.map(p =>
          p.name === productName
            ? { ...p, quantity: p.quantity - 1 }
            : p
        );
      }
      
      return prev.filter(p => p.name !== productName);
    });
  };

  const removeFlavour = (flavourName: string) => {
    setFlavours(prev => {
      const existingFlavour = prev.find(f => f.flavour === flavourName);
      
      if (!existingFlavour) return prev;
      
      if (existingFlavour.quantity > 1) {
        return prev.map(f =>
          f.flavour === flavourName
            ? { ...f, quantity: f.quantity - 1 }
            : f
        );
      }
      
      return prev.filter(f => f.flavour !== flavourName);
    });
  };

  const getTotalQuantity = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };

  const resetOrder = () => {
    setProducts([]);
    setFlavours([]);
    setBill(0);
    setMessage('');
  };

  const sendBill = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setMessage('Please enter a valid phone number');
      return;
    }

    if (products.length === 0) {
      setMessage('Please add items to your order');
      return;
    }

    setIsLoading(true);
    setMessage('');

    try {
      const response = await axios.post('http://localhost:3000/api/bills', {
        amount: bill,
        customerNumber: phoneNumber,
        products: products,
        flavours: flavours
      });

      setMessage('Order placed successfully!');
      console.log('Bill sent successfully:', response.data);
      
      // Reset after successful order
      setTimeout(() => {
        resetOrder();
        setShowPurchasePanel(false);
        setShowOrderPanel(false);
      }, 2000);
    } catch (error) {
      setMessage('Error placing order. Please try again.');
      console.error('Error sending bill:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (input: string) => {
    const cleaned = input.replace(/\D/g, '');
    setPhoneNumber(cleaned);
  };

  return (
    <section id='products'>
      {/* Flavours Section */}
      <div className="flavours-section">
        <h2 className="section-title">Flavours Available</h2>
        <p className="section-subtitle">Click your desired flavours</p>
        <div className="flavours-container">
          {availableFlavours.map(flavour => (
            <button
              key={flavour}
              className="flavour-btn"
              onClick={() => addFlavour(flavour)}
            >
              {flavour}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <h2 className="section-title">Refreshes Available</h2>
      <div className="products-container">
        {productCards.map(product => (
          <div key={product.id} className="product-card">
            <div 
              className="product-icon-container"
              style={{ backgroundColor: product.color }}
            >
              {product.icon}
            </div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price.toFixed(2)} each</p>
            <button
              className="buy-btn"
              onClick={() => addProduct(product.name, product.price)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary & Purchase Section */}
      <div className="order-section">
        {message && (
          <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
            {message}
          </div>
        )}

        {showOrderPanel && (
          <div className="order-summary">
            <h3 className="summary-title">Order Summary</h3>
            <div className="summary-item">
              <span>Total Bill:</span>
              <span className="bill-amount">${bill.toFixed(2)}</span>
            </div>
            <div className="summary-item">
              <span>Total Items:</span>
              <span>{getTotalQuantity()}</span>
            </div>

            {products.length > 0 && (
              <div className="products-list">
                <h4>Products:</h4>
                {products.map(product => (
                  <div key={product.name} className="item-row">
                    <span>{product.name} x{product.quantity}</span>
                    <div className="item-actions">
                      <button 
                        className="action-btn remove"
                        onClick={() => removeProduct(product.name)}
                      >
                        -
                      </button>
                      <span className="item-price">
                        ${(product.price * product.quantity).toFixed(2)}
                      </span>
                      <button 
                        className="action-btn add"
                        onClick={() => addProduct(product.name, product.price)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {flavours.length > 0 && (
              <div className="flavours-list">
                <h4>Flavours:</h4>
                <div className="flavours-tags">
                  {flavours.map(flavour => (
                    <div key={flavour.flavour} className="flavour-tag">
                      <span>{flavour.flavour} x{flavour.quantity}</span>
                      <button 
                        className="tag-remove"
                        onClick={() => removeFlavour(flavour.flavour)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {products.length === 0 && flavours.length === 0 && (
              <p className="empty-order">Your order is empty. Add some items!</p>
            )}
          </div>
        )}

        {showPurchasePanel && (
          <div className="purchase-panel">
            <h3 className="panel-title">Complete Your Purchase</h3>
            <div className="phone-input-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="phone-input"
                value={phoneNumber}
                onChange={(e) => formatPhoneNumber(e.target.value)}
                placeholder="Enter your phone number"
                maxLength={15}
              />
              <small className="input-hint">Format: 263782342233</small>
            </div>
            
            <div className="bill-preview">
              <p>Bill Amount: <strong>${bill.toFixed(2)}</strong></p>
            </div>

            <button
              className="send-btn"
              onClick={sendBill}
              disabled={isLoading || bill === 0}
            >
              {isLoading ? 'Processing...' : 'Place Order'}
              <BiSend size={20} className="send-icon" />
            </button>

            <p className="thank-you-note">Thank you for your purchase!</p>
          </div>
        )}

        <div className="action-buttons">
          <button
            className="action-btn purchase"
            onClick={() => {
              setShowPurchasePanel(!showPurchasePanel);
              if (showOrderPanel) setShowOrderPanel(false);
            }}
          >
            {showPurchasePanel ? 'Cancel' : 'Purchase'}
          </button>

          <button
            className="action-btn view-order"
            onClick={() => {
              setShowOrderPanel(!showOrderPanel);
              if (showPurchasePanel) setShowPurchasePanel(false);
            }}
          >
            {showOrderPanel ? 'Hide Order' : 'View Order'}
          </button>

          {(products.length > 0 || flavours.length > 0) && (
            <button
              className="action-btn reset"
              onClick={resetOrder}
            >
              Reset Order
            </button>
          )}
        </div>
      </div>
    </section>
  );
}