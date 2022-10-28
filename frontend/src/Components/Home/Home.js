import React from 'react';

// Import components
import Header from '../Header/Header'
import HomeUp from './HomeUp';
import PostCard from './PostCard';

const Home = () => {
  return (
    <>
      <Header />

      <div className='homecontainer'>
        <HomeUp />
      </div>

      <div className='postcontainer'>
        <h2>Les derniers messages</h2>
        <PostCard />
      </div>
    </>
  );
}

export default Home;
