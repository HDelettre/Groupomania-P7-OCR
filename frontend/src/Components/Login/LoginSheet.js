import React from 'react';
import LoginSetup from './LoginSetup';
import LoginForm from './LoginForm';
import Header from '../Header/Header';

const LoginSheet = () => {
    return (
        <>
            <Header />

            <div className='login'>

                <LoginSetup />

                <LoginForm />
            </div>
        </>
    );
}

export default LoginSheet;
