export const dateForm=(createdAt) => {
  let options = {weekday: "long", year:"numeric", month:"long", day:"numeric"}
  let dateStamp = Date.parse(createdAt);
  let dateData = new Date(dateStamp).toLocaleDateString('fr-FR', options);
  return dateData.toString();
}

export const dateOnly=(createdAt) => {
  let options = {year:"numeric", month:"long", day:"numeric"}
  let dateStamp = Date.parse(createdAt);
  let dateData = new Date(dateStamp).toLocaleDateString('fr-FR', options);
  return dateData.toString();
}

export const timeOnly=(createdAt) => {
  let options = {hour:'2-digit', minute:'2-digit'}
  let dateStamp = Date.parse(createdAt);
  let dateData = new Date(dateStamp).toLocaleTimeString('fr-FR', options);
  return dateData.toString();
}