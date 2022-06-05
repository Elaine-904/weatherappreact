import React, { useState } from "react";
import axios from "axios";
import WeatherDetail from "./WeatherDetail";
import WeatherLoad from "./WeatherLoad";

export default function WeatherApp() {
    const [city, setCity] = useState("");
    const [detail, setDetails] = useState(null);
    
    const apikey = "5399a0f5d3dc138a9a3a1f8b3e95a6a4"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
    
    const searchCity = async(event) => {
        if (event.key === 'Enter') {
          await axios.get(url).then((response) => {
            setDetails(response.data)
            console.log(response.data)
          })
        }
      }

    return (
      <>
        <div className="card">
            <div className="search">
                <input
                className="search-bar"
                value={city}
                onChange={event => setCity(event.target.value)}
                onKeyPress={searchCity}
                placeholder='Enter city(e.g.Auckland)...'
                type="text" />
            </div>
        </div>
        <WeatherDetail detail={detail} />
        </>
        
    );
}