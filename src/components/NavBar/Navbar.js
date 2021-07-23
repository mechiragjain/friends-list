import React from 'react';
import './Navbar.css'

function Navbar({children}){
    return (
        <div className='main-container'>
            <div className='header'>
                <img src='https://www.haptik.ai/hubfs/haptik-logo-1%20(1)%201-2.svg' alt='Haptik Logo' />
                <h1>Friends List</h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};

export default Navbar;