import '../App.css';
import { FaIceCream, FaShoppingCart, FaCreditCard, FaHeart } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { LuIceCreamBowl } from 'react-icons/lu';
import { IoIceCream } from 'react-icons/io5';
import {useNavigate} from 'react-router-dom';

interface OderBtnProps {
    setActiveSection: (section: string) => void;
}

export function MainPage( {setActiveSection}: OderBtnProps) {
  const products = [
    {
      id: 1,
      name: 'Cream-Squashe',
      description: 'A refreshing creamy drink with your choice of fruity flavors. Perfect for hot summer days!',
      icon: <BiDrink size={60} />,
      color: '#FF6B8B',
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Ice-Cups',
      description: 'Portable ice cream cups with mixed flavors. Take your favorite treats on the go!',
      icon: <LuIceCreamBowl size={60} />,
      color: '#4ECDC4',
      image: 'https://i.ibb.co/Zp4cQhNm/cones.jpg',
    },
    {
      id: 3,
      name: 'Double Scoops',
      description: 'Two generous scoops of premium ice cream on a crispy cone. Double the delight!',
      icon: <IoIceCream size={60} />,
      color: '#45B7D1',
      image: 'https://i.ibb.co/ZzkYmXFN/double-scoops.jpg',
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Choose Your Treats',
      description: 'Browse our refreshing selection of ice creams and drinks. Pick your favorite flavors!',
      icon: <FaIceCream size={40} />,
    },
    {
      step: 2,
      title: 'Customize Flavors',
      description: 'Slect your flavour from our mouth watering flavors. Create your perfect combination!',
      icon: <FaHeart size={40} />,
    },
    {
      step: 3,
      title: 'Review Your Order',
      description: 'Check your cart, adjust quantities, and see your total before checkout.',
      icon: <FaShoppingCart size={40} />,
    },
    {
      step: 4,
      title: 'Easy Payment',
      description: 'Securely pay with your preferred method. We accept all major payment options.',
      icon: <FaCreditCard size={40} />,
    },
  ];

  const navigate = useNavigate();
  

  const handleViewMenu = () =>{
   navigate('viewMenu',{
      replace: true
   })
    window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
  }

  const handleOrderBtns = (section: string) =>{
     setActiveSection(section);
     
  }

  return (
    <>
      {/* Hero Section */}
      <div className="main-hero">
        <div className="hero-content">
          <h1 className="hero-title">Icy Creams</h1>
          <p className="hero-subtitle">Cool Refreshments Delivered to Your Doorstep</p>
          <p className="hero-description">
            Experience the finest iccy ice creams and refreshing drinks, crafted with love 
            and served with a smile. Our premium ingredients and unique flavors will melt your heart!
          </p>
          <button className="hero-button" onClick={()=> handleOrderBtns('products')}>Start Ordering</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=400&fit=crop" 
            alt="Delicious ice cream"
            className="hero-img"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="main-container">
        
        {/* Left Panel: How It Works */}
        <div className="instruction-panel">
          <h2 className="panel-title">How to Order Your Refreshments</h2>
          <div className="steps-container">
            {steps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="features-section">
            <h3>Why Choose Icy Creams?</h3>
            <ul className="features-list">
              <li> Premium quality ingredients</li>
              <li> 10+ unique flavors to choose from</li>
              <li> Fast delivery within 30 minutes</li>
              <li> 100% satisfaction guarantee</li>
              <li> Customizable orders</li>
            </ul>
          </div>
        </div>

        {/* Right Panel: Featured Products */}
        <div className="products-panel">
          <h2 className="panel-title">Our Featured Treats</h2>
          <div className="featured-products">
            {products.map((product) => (
              <div key={product.id} className="featured-product-card">
                <div 
                  className="product-image-container"
                  style={{ background: `linear-gradient(135deg, ${product.color}20, ${product.color}40)` }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-icon">{product.icon}</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-tags">
                    <span className="tag popular">Most Popular</span>
                    <span className="tag new">New Arrival</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

         
         
          </div>
        </div>
     

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2>Ready to Cool Down?</h2>
          <p>Order now and get one extra refreshemts of your liking</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={()=> handleOrderBtns('products')}>Order Now</button>
            <button className="cta-button secondary"
            onClick={()=>handleViewMenu()}
            >View Menu</button>
          </div>
        </div>
      </div>
    </>
  );
}