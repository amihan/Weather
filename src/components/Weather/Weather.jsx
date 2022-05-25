import s from './Weather.module.css'


const Weather = (props) => {
    return (
        <div>
            <p>Город: {props.data.name} </p>
            <p>Температура: {props.data.main.temp}</p>
            <p>Восход солнца: {props.data.sys.sunrise}</p>
            <p>Закат: {props.data.sys.sunset}</p>
            <p>Описание: {props.data.weather[0].description}</p>

        </div>
    )
}

export default Weather;