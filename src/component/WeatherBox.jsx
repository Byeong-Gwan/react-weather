import React from "react";


const WeatherBox = ({weather}) => {
    const fahrenheit = Math.floor(((weather?.main.temp * 9/5) + 32) * 100) / 100;
    console.log('weather??', weather);
    return <div className='weather-box'>
        <div>{weather?.name}</div>
        <h2>{weather?.main.temp}C / {fahrenheit}F</h2>
        <h3>{weather?.weather[0].main}</h3>
    </div>
}

export default WeatherBox;
