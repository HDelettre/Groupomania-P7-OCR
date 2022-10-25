import React from 'react';

import HomeUp from './HomeUp';
import PostContainer from './PostContainer';

const Home = () => {
  return (
    <div className='homecontainer'>
      <HomeUp />

      <PostContainer />
    </div>
  );
}

export default Home;
