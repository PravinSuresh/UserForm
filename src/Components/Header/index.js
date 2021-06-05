import React, { Component } from 'react';
import './styles.scss';

const Header = () => {
    return ( 
        <>
            <header className="header-component" data-test="header-component">
                <div className="logo-container" data-test="logo-container">
                    <p className="logo-text" data-test="logo-text">Logo</p>
                </div>
            </header>
        </>
     );
}
 
export default Header;