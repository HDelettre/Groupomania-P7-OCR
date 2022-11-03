import React from 'react';

// Import components
import HomeProfile from './HomeProfile';
import NewMessage from './NewMessage';

const HomeUp = ({setNewMsg}) => {
    return (
        <>
            <HomeProfile/>

            <NewMessage setNewMsg={setNewMsg} />
        </>
    );
}

export default HomeUp;
