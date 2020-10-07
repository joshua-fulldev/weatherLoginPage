import React, {useState} from 'react';
import './App.css';
import comLogo from './weathercolored.png';
import infoLogo from './infoLogo.png';
import snowLogo from './snow.png';


function WeatherInfo() {
  const [location, setLocation] = useState('Accra');
  const [time, setTime] = useState(new Date().toLocaleString());

  function fakeRefresh(){
    setTime(new Date().toLocaleString());
  }

  setInterval(fakeRefresh, 1000);

  return (
    <div className="WeatherPage">
      <div className="SecondPage">
        <h1 class="CompanyName">My Weather App</h1>
        <img src={comLogo} alt="logo" className="LogoCom"/>
        <div className="Division Space-Top">
          <p>{location}, Ghana</p>
          <p>{time}</p>
          <p>
          <img src={infoLogo} alt="logo" className="InfoLogo A1"/>
          <img src={snowLogo} alt="snow_logo" className="InfoLogo A2"/>
          </p>
          <h1 className="Temperature">27&#176;C</h1>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo;
