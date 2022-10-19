
export default function Portal({weatherData}){
    return(
        <div>
            <h3>Weather {weatherData.response.ob.weather}</h3>
            <h3>Temp {weatherData.response.ob.tempC}&#8451;</h3>
            <h3>Humidity {weatherData.response.ob.humidity}</h3>
        </div>
    )
}