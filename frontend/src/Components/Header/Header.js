import React from 'react';
import Logo from '../../Assets/icon.png'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='header_logo'>
                    <img src={Logo} alt='Logo Groupomania'/>
                </div>

                <div className='header_title'>
                    <h1>
                        Votre réseau social d'entreprise
                    </h1>
                </div>
            </div>
        </>
    );
}

export default Header;
