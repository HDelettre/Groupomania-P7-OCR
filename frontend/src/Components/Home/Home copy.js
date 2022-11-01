import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_MESSAGE } from '../../SliceReducers/slice.message';


// Import components
import Header from '../Header/Header'
import SpinLoader from '../SpinLoader/SpinLoader';
import HomeUp from './HomeUp';
import PostCard from './PostCard';

const Home = ({ connectId }) => {

  const user = useSelector((state) => state.user.userData);
  console.log('user in home: ', user)
  console.log('connectId in home: ', connectId)

  const dispatch = useDispatch();

  const [loadMessage, setLoadMessage] = useState(true);
  const [allMessage, setAllMessage]= useState('');

  useEffect(() => {
    async function loadAllMsg(){
      setLoadMessage(true);

      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_MSG}`, {
          method: 'GET',
          headers: { "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`}
        })
        
        const reponseJSON = await reponse.json();
        console.log('reponseJSON all posts: ', reponseJSON);
        setAllMessage(JSON.parse(JSON.stringify(reponseJSON.allPosts)));
        dispatch(GET_MESSAGE(allMessage));
        
      }
      catch(error) {console.log(error)}
      finally {setLoadMessage(false)}
    };
    loadAllMsg();
  }, [dispatch, allMessage])

  return loadMessage ? (
    <SpinLoader />
  ) : (
    <>
      <Header />

      <div className='homecontainer'>
        <HomeUp connectId={connectId} />
      </div>

      <div className='postcontainer'>
        <h2>Les derniers messages</h2>
        {allMessage.map((post) => <PostCard post={post} key={post._id}/>)}
      </div>
    </>
  );
}

export default Home;
