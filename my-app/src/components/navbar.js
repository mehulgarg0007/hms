import React from 'react'
import './Components.css'
import Image from './assets/images'

function Navbar(){
    return(
        <>
        <div>
            
        </div>
        <nav className = "Navbar">
            <div className='Main'>
                <h1>ROOM BIRDIES</h1>
            </div>
            <div className='ListDiv'>
                <ul className='Navbar-List'>
                    <li className='list'><a href="#">Home</a></li>
                    <li className='list'><a href="#">Cities</a></li>
                    <li className='list'><a href="#">About Us</a></li>
                    <li className='list'><a>For PG Owners</a></li>
                    <li className='list'><a href="#">Contact Us</a></li>
                </ul>
                <img src={Image}/>
            </div>
        </nav>
        </>
    );
}

export default Navbar ;