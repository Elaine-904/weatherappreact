export default function WeatherLoad(){
    return(
        <div >
            <h1 className="temp"> ....°C</h1>
            <div className="info">
                <img src={`https://openweathermap.org/img/wn//04n.png`}
                    alt="" className="icon" >
                </img>
                <p size="sm" className="description">
                    Loading.....
                </p>
            </div>
            <div className="humidity">Loading.....</div>
            <div className="wind">Loading.....</div>
        </div>
    )
}