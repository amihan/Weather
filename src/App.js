import './App.css';
import Info from './components/Info/Info'
import Form from './components/Form/Form'
import Weather from './components/Weather/Weather'
import {useEffect, useState} from "react"

// let gettingWeather = async () => {
//     // const api_geo = await fetch(`http://api.openweathermap.org/geo/1.0/direct?$q=${city_name}&limit={limit}&appid=${API_KEY}`)
//     // const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`);
//     const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${API_KEY}`);
//     // const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=${API_KEY}`);
//     const data = await api_url.json();
//     console.log(data);
// }

function App() {
    const API_KEY = "e475359aa35a82cb44c244e374faa970";
    const API_URL = 'https://api.openweathermap.org/data/2.5'

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            await fetch(`${API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${API_KEY}`)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result);
                });
        }
        fetchData();
    }, [lat,long])


    return (
        <div className="App">

            {(typeof data.main != 'undefined') ? (
                <div>
                    <Info/>
                    <Form/>
                    {/*{data.name}*/}
                    <Weather data={data}/>
                </div>
            ): (
                <div></div>
            )}

        </div>
    );
}

export default App;
