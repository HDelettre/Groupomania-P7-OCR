import React from 'react';
import { useSelector } from 'react-redux';

const FollowIcon = ({idToFollow, userId}) => {
  const user = useSelector((state)=>state.user.userData);

  async function followUp() {
    const bodyRequest = {
      "idFollow": idToFollow,
      "id": userId
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

      
    }
    catch (error) {console.log(error)}
  }


  //const followUp = () => {};
  
  return (
    <div>
      { user.followings.includes(idToFollow) ? 
      (<i className="fa-solid fa-square-minus icon" title='Déabonner' onClick={followUp}></i>)
       :
      (<i className="fa-solid fa-square-plus" title='Suivre' onClick={followUp}></i>)}
      
    </div>
  );
}

export default FollowIcon;
