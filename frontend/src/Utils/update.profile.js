// Fonction de MàJ du profil dans BdD
export const fetchUpdateProfile= async (profileNewData, userId, token) => {
  try {
    const reponse = await fetch(
      `${process.env.REACT_APP_API_USER}/${userId}`,
      {
        method: "PUT",
        body: profileNewData,
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("FetchUpdateProfile: ", reponse);

  } catch (error) {console.log(error)}
}