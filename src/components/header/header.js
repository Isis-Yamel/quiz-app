import React from 'react';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className='app__header'>
            <h1 className='app__title'> Quiz main screen </h1>
            <img className='app__image' src={logo} alt='logo'/>
        </header>
    );
};

export default Header;