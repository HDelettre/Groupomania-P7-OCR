import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { FOLLOW_USER } from '../../SliceReducers/slice.user';

const FollowIcon = ({idToFollow, user}) => {
  const [follow, setFollow]=useState(false)
  const dispatch=useDispatch();

  useEffect(() => {
    if (follow) {
      dispatch(FOLLOW_USER(idToFollow))
      setFollow(false)
    }
  }, [follow]);

  async function followUp() {
    const bodyRequest = {
      "idFollow": idToFollow,
      "id": user._id
    }

    try {
      const reponse = await fetch(`${process.env.REACT_APP_API_USER}/follow`, {
        method: 'PATCH',
        body: JSON.stringify(bodyRequest),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        }
      })

      console.log(reponse)
      setFollow(true)
    }
    catch (error) {console.log(error)}
  }
  
  return (
    <div className='icon'>
      { user.followings.includes(idToFollow) ? 
      (<i className="fa-solid fa-square-minus icon marginiconleft" title='Déabonner' onClick={followUp}></i>)
       :
      (<i className="fa-solid fa-square-plus icon marginiconleft" title='Suivre' onClick={followUp}></i>)}
      
    </div>
  );
}

export default FollowIcon;
