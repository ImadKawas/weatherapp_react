import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { render } from "react-dom"


function App() {  
const [data,setData] = useState ({})
const [location, setLocation] = useState('')
const [longitude, setLongitude] = useState(null);
const [latitude, setLatitude] = useState(null);



 const url = 'https://api.openweathermap.org/data/2.5/weather?&units=imperial&lat=44.34&lon=10.99&appid=b432b43fe621d2cec4095209939d90c8'

 useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    console.log(setLongitude)
  });
}, []);


const searchLocation = (event) => {
  if (event.key === 'Enter') {
  axios.get(url).then((response) => {
    setData(response.data)
   console.log(response.data)
  })
  setLocation('')
}
}

//   return (
//     <div className="app">
//       <div className='search'>
//         <input
//         value={location}
//         onChange={event => setLocation(event.target.value)}
//         onKeyPress={searchLocation}
//         placeholder='Enter Location'
//         type="text"/>
//       </div>
// <div className='container'>
//   <div className='top'>
//     <div className='location'>
//       <p>{data.name}</p>
//     </div>
//     <div className='temp'>
//       {data.main ? <h1>{latitude}°F</h1> : null}
     
//     </div>
//     <div className='description'>
//       {data.weather ? <p>{data.weather[0].main}</p> : null}
     
//     </div>
//   </div>


//   {data.name != undefined && 
//    <div className='bottom'>
//    <div className='feels'>
//      {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}</p> : null}
    
//      <p>Feels like</p>
//    </div>
//    <div className='humidity'>
//      {data.main ? <p className='bold'>{data.main.humidity.toFixed()}%</p> : null}
//      <p className='bold'>Humidity</p>
   
//    </div>
//    <div className='wind'>
//    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
     
     
//      <p>Wind Speed</p>
//    </div></div>
//   }
 
//   </div>
//     </div>
//   );
// }

// export default App;

return (
  <div>
  
    {latitude && longitude && (
      <p>
        Latitude is: {latitude}, Longitude is: {longitude}
      </p>
    )}
  </div>
);
}

export default App;
