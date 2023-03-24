import React, {useState} from 'react'
import axios from 'axios'


function App() {


  //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=b432b43fe621d2cec4095209939d90c8'


  return (
    <div className="app">
<div className='container'>
  <div className='top'>
    <div className='location'>
      <p>dallas</p>
    </div>
    <div className='temp'>
      <h1>60f</h1>
    </div>
    <div className='description'>
      <p>clouds</p>
    </div>
  </div>
  <div className='bottom'>
    <div className='feels'>
      <p>65c</p>
    </div>
    <div className='humidity'>
      <p>20%</p>
    </div>
    <div className='wind'>
      <p>12mph</p>
    </div></div>
  </div>
    </div>
  );
}

export default App;


