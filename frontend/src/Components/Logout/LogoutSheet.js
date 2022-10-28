import React from 'react';

// Import components
import Header from '../Header/Header';

const LogoutSheet = () => {
    return (
        <>
        <Header />

        <div className='logout'>
            <div className='logout_goodbye'>
                Au revoir ..........
            </div>

            <div className='logout_btn'>
                Retour à l'accueil
            </div>
        </div>
        </>
    );
}

export default LogoutSheet;
