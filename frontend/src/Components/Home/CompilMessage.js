import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Import Slice
import { GET_MESSAGE } from '../../SliceReducers/slice.message';

// Import components
import PostCard from './PostCard';
import SpinLoader from '../SpinLoader/SpinLoader';

const CompilMessage = () => {

  const user=useSelector((state)=>state.user.userData);
  console.log('user in compil: ', user)
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
        dispatch(GET_MESSAGE(JSON.parse(JSON.stringify(reponseJSON.allPosts))));

        setLoadMessage(false)
        
      }
      catch(error) {console.log(error)}
      finally {}
    };
    loadAllMsg();
  }, [])

  return loadMessage ? (
    <SpinLoader />
  ) : (
    <>
        {allMessage.map((post) => <PostCard post={post} key={post._id}/>)}
      
    </>
  );
}

export default CompilMessage;
