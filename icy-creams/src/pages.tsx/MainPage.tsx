import { IoIceCream } from 'react-icons/io5'
import '../App.css'
import { CiIceCream } from 'react-icons/ci'
import { FaIceCream } from 'react-icons/fa'

export function MainPage() {

    return(
        <>

        <div style={{
            backgroundColor: '#ff6e6118',
           width: '100%',
            height: 'auto',
            paddingTop: '50px',
            color: 'white',
            textAlign: 'center',
        }}>


           <div className='logo'>
             <img src="../public/pics/icon.jpg" alt="icon"  style={{
                width: '250px', height: '250px', borderRadius: '50px',
             }}/>

           </div>

           <br /> <br /> <br />

            <h2 style={{fontSize:'2rem', color: 'pink'}}> This is our online ice-cream shop</h2>
            <h3 style={{fontFamily: 'cursive' ,fontSize: '1.5rem'}}>We offer many delicious delicases</h3> <br /> 
           <IoIceCream size={80} color='pink'/> <CiIceCream size={80} color='pink'/> <FaIceCream size={80} color='pink'/>
            <h4 style={{color: 'pink', fontWeight: '700'}}>Click on products and order yours now..... The Refrereeee Refresher at your service</h4>
            
            <div style={{
                display: 'flex', justifyContent: 'center', flexDirection: 'row', color: '#ff6f61'
            }}>

             <div style={{margin: '20px', fontFamily: 'sans-serif', padding: '1rem', border: '2px solid rgba(107, 107, 130, 1)', borderRadius: '20px', backgroundColor: 'rgb(2, 2, 37)'}}>
                <h2>Cup IceCreams</h2>
             </div>
             <div style={{margin: '20px', fontFamily: 'sans-serif', padding: '1rem ', border: '2px solid rgba(84, 84, 128, 1)', borderRadius: '20px', backgroundColor: 'rgb(2, 2, 37)'}}>
                <h2>Cone Ice-Creams</h2>
             </div>
             <div style={{margin: '20px', fontFamily: 'sans-serif', padding: '1rem ', border: '2px solid rgba(152, 152, 197, 1)', borderRadius: '20px', backgroundColor: 'rgb(2, 2, 37)'}}>
                <h2>Smoothes</h2>
             </div>
             <div style={{margin: '20px', fontFamily: 'sans-serif', padding: '1rem ', border: '2px solid rgba(165, 116, 168, 0.72)', borderRadius: '20px', backgroundColor: 'rgb(2, 2, 37)'}}>
                <h2>Cream Sqashes</h2>
             </div>
             <div style={{margin: '20px', fontFamily: 'sans-serif', padding: '1rem ', border: '2px solid rgba(167, 151, 173, 1)', borderRadius: '20px', backgroundColor: 'rgb(2, 2, 37)'}}>
                <h2>Toppings</h2>
             </div>

            </div>
           
          
            <br /> 
            <br /> 
            <br />
            <br />

        </div>
        </>
    )
}