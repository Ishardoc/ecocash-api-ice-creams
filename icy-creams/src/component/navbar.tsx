import React from 'react';
import '../App.css'


interface NavbarProps {
    setActiveSection: (section: string) => void;
}

export function Navbar({setActiveSection}: NavbarProps) {
   
    const handleClick = (section: string) =>{
        setActiveSection(section);
    }


    return(
        <>
        <nav className='nav'>
             <a href="#main" onClick={() => handleClick('main')}>Home</a>
           <a href="#products" onClick={() => handleClick('products')}>Products</a>
              <a href="#services" onClick={() => handleClick('services')}>Services</a>
                <a href="#contact" onClick={() => handleClick('contact')}>Contact</a>
                <a href="#blog" onClick={() => handleClick('blog')}>Blog</a> 
        </nav>
        </>
    )
}