import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherDetail from "./WeatherDetail";
import {BsSearch} from "react-icons/bs";

export default function WeatherApp() {
    const [city, setCity] = useState("");
    const [detail, setDetails] = useState(null);

    
    const searchCity = async() => {
          await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5399a0f5d3dc138a9a3a1f8b3e95a6a4`)
          .then((response) => {
            setDetails(response.data)
            console.log(response.data)
          })
        }


    const handleKeyDown = e => {
        if (e.key === "Enter") {
          searchCity();
        }}
        
    return (
      <>
        <div className="card">
            <div className="search">
                <BsSearch size={30}/>
                <input
                className="search-bar"
                value={city}
                onChange={event => setCity(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder='Enter city(e.g.Auckland)...'
                type="text" />
            </div>
        </div>
        <WeatherDetail detail={detail} />
      </>
        
    );
}