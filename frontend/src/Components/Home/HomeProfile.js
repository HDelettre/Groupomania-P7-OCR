import React, {useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";

// Import components
import SpinLoader from '../SpinLoader/SpinLoader';
import ProfileIcon from '../Icons/ProfileIcon';

// import Slice
import { GET_USER } from "../../SliceReducers/slice.user";

// Import Utils
import { dateForm } from "../../Utils/dateFormat";
import LogoutIcon from "../Icons/LogoutIcon";

const HomeProfile = ({connectId}) => {
  const [dataLoading, setDataLoading] = useState(true);

  const dispatch = useDispatch();
  console.log('connectId: ', connectId)
  useEffect(() => {
    async function loadUserData() {
      setDataLoading(true);
      try {
        const reponse = await fetch(`${process.env.REACT_APP_API_USER}/${connectId}`, {
          method: 'GET',
          headers: { "Content-Type": "application/json" }
        })

        const reponseJSON = await reponse.json();
        console.log('reponse: ',reponseJSON)

        dispatch(GET_USER(JSON.parse(JSON.stringify(reponseJSON.userData))))
      }
      catch(error)  { console.log(error) }
      finally { setDataLoading(false)}
    }
    loadUserData();

  }, [connectId, dispatch]);
  
  const user = useSelector((state) => state.user.userData)
  console.log('user: ', user)

  return dataLoading ? (
    <>
      <SpinLoader />
    </>
  ) : (
    <>
      <div className="homecontainer_profile">
        <h2>Bonjour {`${user.firstName} ${user.lastName}`} </h2>
        <img src={`${process.env.REACT_APP_API_IMG}/profile/${user.imageUrl}`} alt="" />
        <p>Incrit depuis le { dateForm(user.createdAt)}</p>

        <div className="homecontainer_navbarprofile">
          <ProfileIcon />
          
          <LogoutIcon />
        </div>
      </div>
    </>
  );
};

export default HomeProfile;
