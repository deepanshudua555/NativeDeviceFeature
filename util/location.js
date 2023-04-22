// const GOOGLE_API_KEY = "AIzaSyAZk1OR_C0mtpAg69hLWFDy8m0v1k4Nvq4";
const MAP_BOX_TOKEN = "pk.eyJ1IjoiZGVlcGFuc2h1ZHVhIiwiYSI6ImNsZ2w2NzNhZzBqaDYza3FxYWNoYzEwM3gifQ.RUgC4t4xBXVZBANbac941g"

export function getMapPreview(lat, lng) {
    // const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap
    //   &markers=color:red %7Clabel:S%7C${lat},${lng}
    //   &key=${GOOGLE_API_KEY}`;
    //   console.log(imagePreviewUrl);
    //   return imagePreviewUrl;
  const imagePreviewUrl = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s+ff0000(${lng},${lat})/${lng},${lat},14,0/400x200?access_token=${MAP_BOX_TOKEN}`;
//   console.log(imagePreviewUrl);
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${MAP_BOX_TOKEN}`;
  const response = await fetch(url);
 
  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }
 
  const data = await response.json();
  const address = data.features[0].place_name;
  return address;
}