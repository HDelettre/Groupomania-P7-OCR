import React from 'react';

// Import components
import HomeProfile from './HomeProfile';
import NewMessage from './NewMessage';

const HomeUp = ({connectId}) => {
    return (
        <>
            <HomeProfile connectId={connectId}/>

            <NewMessage />
        </>
    );
}

export default HomeUp;
