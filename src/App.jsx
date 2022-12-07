import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import WeatherCard from './components/WeatherCard'


function App() {
    const [coords, setCoords] = useState()
    const [weather, setWeather] = useState()

    const [temp, setTemp] = useState()

    const success = pos => {
        // console.log(pos.coords)
        setCoords({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude
        })
    }
    // console.log(coords)

    useEffect(() => {
        // Peticion asincronica para solicitar la ubicacion de mi navegador - se guarda en pos
        navigator.geolocation.getCurrentPosition(success)
    }, [])

    useEffect(() => {
        if (coords) {
            const apiKey = 'e6db69deb0562ba666b699a374d9dcec'
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${apiKey}`
            axios.get(URL)
                .then(res => {
                    setWeather(res.data)

                    const celsius = (res.data.main.temp - 273.15).toFixed(1)
                    const farenheit = (celsius * (9 / 5) + 32).toFixed(1)

                    setTemp({ celsius, farenheit })
                })
                .catch(err => console.log(err))
        }
    }, [coords])

    console.log(weather)


    let hoy = new Date(),
        hora = hoy.getHours();

    if (hora >= 6 && hora < 19) {
        // document.body.style.backgroundImage = "url('../src/assets/bg-dia.jpg')";
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/870711/pexels-photo-870711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    } else {
        // document.body.style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2019/12/05/night-lake-wallpaper.jpg')";
    }


    return (
        <div className="App">
            {
                weather ?
                    <WeatherCard
                        weather={weather}
                        temp={temp}
                    />
                    :
                    <Loading />
            }
        </div>
    )
}

export default App
