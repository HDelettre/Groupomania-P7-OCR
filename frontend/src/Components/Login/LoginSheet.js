import React from 'react';

// Importation des composants
import LoginSetup from './LoginSetup';
import LoginForm from './LoginForm';
import Header from '../Header/Header';
import LoginError from './LoginError';

const LoginSheet = () => {
    return (
        <>
            <Header />

            <div className='login'>

                <LoginSetup />

                <LoginForm />
            </div>

            <LoginError />
        </>
    );
}

export default LoginSheet;
