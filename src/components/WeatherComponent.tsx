import * as React from 'react';
import axios from 'axios';
import DateSelector from './DateSelector';
import 'bootstrap/dist/css/bootstrap.min.css';


const WeatherForecastApp = () => {
    const [city, setCity] = React.useState('');
    const [selectedDate, setSelectedDate] = React.useState('');
    const [forecastData, setForecastData] = React.useState(null);
    const [filteredForecast, setFilteredForecast] = React.useState([]);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        const fetchForecastData = async () => {
            try {
                const response = await axios.get(
                    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b17857a5685d86fc155679f40f0ee63e&units=metric`
                    );
                    setForecastData(response.data);
                    setError(null);
            } catch (error) {
                setError(
                    `Ошибка получения данных о погоде! Попробуйте ещё раз!`
                );
                setForecastData(null);
            }
        };
        if (city) {
            fetchForecastData();
        }
    }, [city]);

    React.useEffect(() => {
        if (forecastData && selectedDate) {
            const filteredData = forecastData.list.filter(
                forecast => forecast.dt_txt.includes(selectedDate)
            );
            setFilteredForecast(filteredData);
        }
    }, [forecastData, selectedDate]);

    const handleCityChange = (e) => {
        setCity(e.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className='weather-forecast-app container mt-4'>
            <h1>Прогноз погоды</h1>
            <center className='form-group'>
                <label htmlFor='city'>
                    Введите название города:
                </label>
                <input type='text' className='form-control' id='city' value={city} onChange={handleCityChange} />
            </center>
            <DateSelector onDateChange={handleDateChange} />
            
            {error && <p>{error}</p>}
            {
                filteredForecast.length > 0 && (
                    <>
                    <h3 className='in-city'>Погода в городе {city}</h3>
                    <div className='row forecast-container'>
                        {filteredForecast.map((forecast, index) => (
                            <div key={index} className='col-md-3'>
                                <div className='card mb-3'>
                                    <div className='card-body'>
                                        <h5 className='card-title'>
                                            Дата: {forecast.dt_txt}
                                        </h5>
                                        <p className='card-text'>
                                            Температура:
                                            {forecast.main.temp} °C
                                        </p>
                                        <p className='card=text'>
                                            Погода: {forecast.weather[0].description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    </>
                        
                )}
        </div>
    );
};

export default WeatherForecastApp;