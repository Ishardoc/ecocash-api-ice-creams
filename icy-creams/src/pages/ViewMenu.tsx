import { useState } from 'react';
import '../App.css';
import { FaIceCream, FaStar, FaFire, FaLeaf, FaTag } from 'react-icons/fa';
import { BiDrink } from 'react-icons/bi';
import { LuIceCreamBowl } from 'react-icons/lu';
import { IoIceCream, IoNutrition } from 'react-icons/io5';
import { GrIceCream } from 'react-icons/gr';
import {useNavigate} from 'react-router-dom';
import { FaX } from 'react-icons/fa6';

interface MenuItem {
  id: string;
  name: string;
  category: 'ice-cream' | 'drinks' | 'cones' | 'smoothies';
  price: number;
  description: string;
  ingredients: string[];
  tags: string[];
  icon: React.ReactNode;
  image: string;
  calories: number;
  popular: boolean;
  vegan?: boolean;
  spicy?: boolean;
}

// interface GoToProps {
//     setActiveSection: (section: string) => void;
// }

export function ViewMenu() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
 // const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: 'cream-squashe',
      name: 'Cream-Squashe',
      category: 'drinks',
      price: 2.00,
      description: 'A refreshing creamy drink blended with fresh fruits and natural sweeteners. Perfect for hot summer days!',
      ingredients: ['Fresh fruits', 'Cream', 'Natural sweeteners', 'Ice'],
      tags: ['Refreshing', 'Creamy', 'Fruity'],
      icon: <BiDrink size={40} />,
      image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&h=400&fit=crop',
      calories: 180,
      popular: true
    },
    {
      id: 'ice-cups',
      name: 'Ice-Cups',
      category: 'ice-cream',
      price: 3.50,
      description: 'Portable ice cream cups with mixed premium flavors. Take your favorite treats on the go!',
      ingredients: ['Premium ice cream', 'Mixed toppings', 'Chocolate drizzle'],
      tags: ['Portable', 'Mixed flavors', 'Toppings'],
      icon: <LuIceCreamBowl size={40} />,
      image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&h=400&fit=crop',
      calories: 320,
      popular: true
    },
    {
      id: 'double-scoops',
      name: 'Double Scoops',
      category: 'ice-cream',
      price: 2.50,
      description: 'Two generous scoops of premium ice cream on a crispy cone. Double the delight in every bite!',
      ingredients: ['Premium ice cream', 'Crispy cone', 'Choice of toppings'],
      tags: ['Double portion', 'Cone & Cup', 'Classic'],
      icon: <IoIceCream size={40} />,
      image: 'https://i.ibb.co/ZzkYmXFN/double-scoops.jpg',
      calories: 280,
      popular: true,
      vegan: false
    },
    {
      id: 'smoothies',
      name: 'Smoothies',
      category: 'smoothies',
      price: 4.00,
      description: 'Thick and creamy fruit smoothies packed with vitamins and natural goodness.',
      ingredients: ['Fresh fruits', 'Greek yogurt', 'Honey', 'Ice'],
      tags: ['Healthy', 'Fruit-packed', 'Nutritious'],
      icon: <GrIceCream size={40} />,
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop',
      calories: 210,
      popular: true,
      vegan: true
    },
    {
      id: 'cones',
      name: 'Cones',
      category: 'cones',
      price: 0.01,
      description: 'Classic crispy cones that perfectly complement our premium ice cream.',
      ingredients: ['Wheat flour', 'Sugar', 'Butter', 'Vanilla'],
      tags: ['Classic', 'Crispy', 'Essential'],
      icon: <FaIceCream size={40} />,
      image: 'https://i.ibb.co/Zp4cQhNm/cones.jpg',
      calories: 120,
      popular: false
    },
    {
      id: 'chocolate-delight',
      name: 'Chocolate Delight',
      category: 'ice-cream',
      price: 3.00,
      description: 'Rich Belgian chocolate ice cream with caramel swirls and chocolate chips.',
      ingredients: ['Belgian chocolate', 'Caramel', 'Chocolate chips', 'Cream'],
      tags: ['Chocolate', 'Rich', 'Decadent'],
      icon: <IoIceCream size={40} />,
      image: 'https://i.ibb.co/4wtpYSp1/chocolate-delight.jpg',
      calories: 350,
      popular: true
    },
    {
      id: 'berry-blast',
      name: 'Berry Blast',
      category: 'smoothies',
      price: 4.50,
      description: 'Mixed berry smoothie with Greek yogurt and a hint of mint.',
      ingredients: ['Mixed berries', 'Greek yogurt', 'Mint', 'Honey'],
      tags: ['Berry', 'Refreshing', 'Healthy'],
      icon: <GrIceCream size={40} />,
      image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&h=400&fit=crop',
      calories: 190,
      popular: false,
      vegan: true
    },
    {
      id: 'tropical-splash',
      name: 'Tropical Splash',
      category: 'drinks',
      price: 3.00,
      description: 'Tropical fruit drink with coconut water and pineapple juice.',
      ingredients: ['Coconut water', 'Pineapple', 'Mango', 'Passion fruit'],
      tags: ['Tropical', 'Refreshing', 'Exotic'],
      icon: <BiDrink size={40} />,
      image: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=600&h=400&fit=crop',
      calories: 160,
      popular: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: menuItems.length },
    { id: 'ice-cream', name: 'Ice Cream', count: menuItems.filter(item => item.category === 'ice-cream').length },
    { id: 'drinks', name: 'Drinks', count: menuItems.filter(item => item.category === 'drinks').length },
    { id: 'smoothies', name: 'Smoothies', count: menuItems.filter(item => item.category === 'smoothies').length },
    { id: 'cones', name: 'Cones', count: menuItems.filter(item => item.category === 'cones').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

//   const handleOrderNow = (item: MenuItem) => {
    
//     console.log('Ordering:', item.name);
//     alert(`Added ${item.name} to your order!`);
//   };
       

  const navigate = useNavigate();

  const handleBackHome = () =>{
    navigate('/',{
        replace: true
    })
  }

const handleGoToClick = () =>{
        navigate('/',{
        replace: true
    })

     window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

        //setActiveSection(section);
    }


  return (
    <div className="menu-page">
       <button 
               
                onClick={() => handleBackHome()}
                style={{
                    
                    marginBottom: '30px',
                    color: 'pink',
                    borderRadius: '50%',
                    backgroundColor: '#01041ebe',
                    padding: '10px'
                }}
              >
              <FaX size={20}/>
              </button>
      <div className="menu-hero">
        <div className="menu-hero-content">
          <h1 className="menu-title">Our Delicious Menu</h1>
          <p className="menu-subtitle">
            Discover our premium selection of ice creams, drinks, and refreshing treats. 
            Each item is crafted with love and the finest ingredients.
          </p>
          <div className="menu-stats">
            <div className="stat">
              <FaStar className="stat-icon" />
              <span>Premium Quality</span>
            </div>
            <div className="stat">
              <FaLeaf className="stat-icon" />
              <span>Natural Ingredients</span>
            </div>
            <div className="stat">
              <IoNutrition className="stat-icon" />
              <span>Calories Displayed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="menu-categories">
        <div className="categories-container">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="menu-items-grid">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item-card">
            <div className="item-image-container">
              <img 
                src={item.image} 
                alt={item.name}
                className="item-image"
              />
              {item.popular && (
                <div className="popular-badge">
                  <FaFire /> Popular
                </div>
              )}
              {item.vegan && (
                <div className="vegan-badge">
                  <FaLeaf /> Vegan
                </div>
              )}
            </div>
            
            <div className="item-content">
              <div className="item-header">
                <div className="item-icon">{item.icon}</div>
                <div>
                  <h3 className="item-name">{item.name}</h3>
                  <div className="item-price">${item.price.toFixed(2)}</div>
                </div>
              </div>
              
              <p className="item-description">{item.description}</p>
              
              <div className="item-tags">
                {item.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="item-details">
                <div className="detail">
                  <IoNutrition />
                  <span>{item.calories} cal</span>
                </div>
                <div className="detail">
                  <FaTag />
                  <span className="category-label">{item.category}</span>
                </div>
              </div>
              
              <div className="item-ingredients">
                <strong>Ingredients:</strong>
                <p>{item.ingredients.join(', ')}</p>
              </div>
              
              {/* <button 
                className="order-now-btn"
                onClick={() => handleOrderNow(item)}
              >
                Add to Order
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Nutritional Info Section */}
      <div className="nutrition-section">
        <h2 className="section-title">Nutritional Information</h2>
        <div className="nutrition-grid">
          <div className="nutrition-card">
            <div className="nutrition-icon">🍦</div>
            <h3>Premium Quality</h3>
            <p>All our products are made with the finest ingredients and no artificial preservatives.</p>
          </div>
          <div className="nutrition-card">
            <div className="nutrition-icon">🥛</div>
            <h3>Fresh Dairy</h3>
            <p>We use fresh, locally sourced dairy for the creamiest texture and richest flavor.</p>
          </div>
          <div className="nutrition-card">
            <div className="nutrition-icon">🍓</div>
            <h3>Real Fruits</h3>
            <p>Only real fruits are used in our smoothies and flavorings for authentic taste.</p>
          </div>
          <div className="nutrition-card">
            <div className="nutrition-icon">🌿</div>
            <h3>Vegan Options</h3>
            <p>Multiple vegan options available using plant-based alternatives.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="menu-cta">
        <h2>Ready to Order?</h2>
        <p>Browse our full selection and customize your flavors on the Products page!</p>
        <div className="cta-buttons">
          <button className="cta-btn primary" onClick={() => handleGoToClick()}>
            Go to Products
          </button>
          <button className="cta-btn secondary" onClick={() => window.scrollTo(0, 0)}>
            Back to Top
          </button>
        </div>
      </div>
    </div>
  );
}