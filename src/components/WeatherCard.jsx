import React from 'react'
import { useState } from 'react'

const WeatherCard = ({ weather, temp }) => {

    const [isCelsius, setIsCelsius] = useState(true)

    const handleClick = () => setIsCelsius(!isCelsius)

    return (
        <article className='card'>
            <header className='card__header'>
                <h1 className='card__title'>Weather App</h1>
                <h2 className='card__subtitle'>{weather?.name}, {weather?.sys.country}</h2>
            </header>
            <section className='card__icon-conteiner'>
                <img className='card__icon' src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            </section>
            <section className='card__info'>
                <h3 className='card__description'>"{weather?.weather[0].description}"</h3>
                <ul className='card__list'>
                    <li className='card__item'><span>Win Speed: </span>{weather?.wind.speed} m/s</li>
                    <li className='card__item'><span>Clouds: </span>{weather?.clouds.all}</li>
                    <li className='card__item'><span>Pressure: </span>{weather?.main.pressure}</li>
                </ul>
            </section>
            <h3 className='card__temp'>
                {
                    isCelsius ?
                        `${temp?.celsius} °C`
                        :
                        `${temp?.farenheit} °F`
                }
            </h3>
            <footer className='card__footer'>

                <button onClick={handleClick} className='card__btn'>Change to{isCelsius ? '°F' : '°C'} </button>
            </footer>
        </article>
    )
}

export default WeatherCard