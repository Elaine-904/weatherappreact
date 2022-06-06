import WeatherLoad from "./WeatherLoad";
import { useEffect } from "react";

export default function WeatherDetail({ detail }) {
    
    if (!detail) {
        return (
            <WeatherLoad/>
        );
    }

    return (
        <div style={{
            background:  `url("https://source.unsplash.com/1600x900/?${detail.weather[0].description}")` ,
            color: 'rgb(255, 255, 255)',
            padding: '2em',
            borderradius: '30px',
            width: '100%',
            maxwidth: '420px',
            margin: '1em'
        }}>
            <h2 className="city">Weather in {detail.name}</h2>
            <h1 className="temp">{detail.main.temp} °C</h1>
            <div className="info">
                <img src={`https://openweathermap.org/img/wn/${detail.weather[0].icon}.png`}
                    alt="" className="icon" >
                </img>
                <p size="sm" className="description">
                    {detail.weather[0].description}
                </p>
            </div>
            <div className="humidity">Humidity: {detail.main.humidity} %</div>
            <div className="wind">Wind speed: {detail.wind.speed} km/h</div>
        </div>
    )
}