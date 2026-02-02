import  '../App.css';
import { Navbar } from '../component/navbar';
import { Logo } from '../component/Logo';
import { MainPage } from './MainPage';
import { Footer } from '../component/Footer';
import { Products } from './Products';
import { Contact } from './Contact';
import { Blog } from './Blog';
import { Services } from './Services';
import { useState } from 'react';

export function Home() {
  
    const [activeSection, setActiveSection] = useState('main');

    return(
        <>
       <body>
         <header id="hero">
            <h1>Welcome to Icy Creams</h1>
            <p>Your one-stop shop for delicious ice creams!</p>
        </header>
          
           <Logo/>
          <Navbar setActiveSection={setActiveSection}/>

          {activeSection === 'main' && <MainPage/>}
          {activeSection === 'products' && <Products/>}
          {activeSection === 'services' && <Services/>}
          {activeSection === 'blog' && <Blog/>}
          {activeSection === 'contact' && <Contact/>}
            
            <Footer/>

       </body>
        </>
    )
}