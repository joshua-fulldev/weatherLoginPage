import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tradepic from './LogoComponent';
import Form from './LoginFormComponent';
import WeatherInfo from './WeatherInfoComponent';
import Search from './SearchComponent';

function App() {
  return (
    <div className="Login">
      <Tradepic/>
      <Form/>
      <WeatherInfo/>      
      <Search/>
    </div>
  );
}

export default App;
