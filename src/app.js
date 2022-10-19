import axios from 'axios';
import {useState} from 'react';
import {BiSearch} from 'react-icons/bi';
import Portal from './Portal';
export default function App(){
    const [weatherData,setWeatherData] =useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');
    const [weath,setWeath]=useState('');
    const query=()=>{
        const options = {
        method: 'GET',
        url: `https://aerisweather1.p.rapidapi.com/observations/${city},${country}`,
        headers: {
            'X-RapidAPI-Key': '21b80da699mshd4bc6f20998e8d7p1344b5jsnca16b9cdd521',
            'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
        }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
            setWeatherData(response.data)
            if(response.data.success===true){
            if(!response.data.response.ob.isDay){
                setWeath('night')
            }else if(response.data.response.ob.weather.toLowerCase().includes('sunny')){
                setWeath('sunny')
            }else {
                setWeath('cloudy')
            }}
        }).catch(function (error) {
            console.error(error);
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        query();
    }
    return (
        <main className={`${weath}`}>
            <div className='container'><h1 className='title'>Find out weather conditions around the world</h1>
                <form onSubmit={handleSubmit}>
                    <input placeholder='city'
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />
                    <input placeholder='country'
                        value={country}
                        onChange={(e)=>setCountry(e.target.value)}
                    />
                    <button><BiSearch /></button>
                </form>
                {weatherData.success===true?<Portal weatherData={weatherData}/>:
                <h2 className='error'>check city and county names please</h2>}
            </div>
        </main>
    )
}