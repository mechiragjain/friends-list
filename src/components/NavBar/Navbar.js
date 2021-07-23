import React from 'react';
import './Navbar.css'

import HaptikLogo from './../../Images/haptiklogo.svg';

function Navbar({children}){
    return (
        <div className='main-container'>
            <div className='header'>
                <img src={HaptikLogo} alt='Haptik Logo' />
                <h1>Friends List</h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Navbar;