import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Import components
import Header from '../Header/Header'
import HomeUp from './HomeUp';
import PostCard from './PostCard';

const Home = ({ connectId }) => {

  console.log('ConnectId: ', connectId)

  const dispatch = useDispatch();

  /*useEffect(() => {
    
  }, []);*/

  return (
    <>
      <Header />

      <div className='homecontainer'>
        <HomeUp connectId={connectId} />
      </div>

      <div className='postcontainer'>
        <h2>Les derniers messages</h2>
        <PostCard />
      </div>
    </>
  );
}

export default Home;
