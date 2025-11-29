import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa'
import '../App.css'
import { BsTwitter } from 'react-icons/bs'

export function Footer() {

    return(
        <>
        <footer className='footer'>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
               <div style={{display: 'flex', flexDirection: 'row' , justifyContent: 'space-between', color: 'white' , fontSize: '1.5rem', width: '150px', margin: '1rem'}}>
                 <FaFacebook/>
               <BsTwitter/>
               <FaWhatsappSquare/>
               </div>

            </div>
            <p>Thank you for refreshing with us <br />Come again</p>
            <p>2025 copyright @icy-creams</p>
        </footer>
        </>
    )
}