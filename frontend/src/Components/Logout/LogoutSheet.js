import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Import components
import Header from '../Header/Header';

const LogoutSheet = () => {
    const user = useSelector((state) => state.user.userData)
    const fullname = `${user.firstName} ${user.lastName}`

    return (
        <>
        <Header />

        <div className='logout'>
            <div className='logout_goodbye'>
                Au revoir {fullname}
            </div>

            <Link to='/' className='logout_btn' >
                Retour à l'accueil
            </Link>
        </div>
        </>
    );
}

export default LogoutSheet;
