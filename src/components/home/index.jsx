//setting the hooks 
import axios from "axios";
import { useState } from "react";
import { Form } from "react-bootstrap";
import WeatherCard from "../WeatherCard";
import './index.css'


//making the function for fetching data from api
let Home = () => {
    //setting the hook for the input feild in which user enter the cityname
    const[cityName , setCityName] = useState("");
    //setting the hook for getting the data from api 
    const[data,setData] = useState([]);

    //logic for api data fetching
    let submitHandler = async (e) =>{
        e.preventDefault();
        try{
            let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e350ee4b1d36f38ee73fb5fc38eacf8e&units=metric`);
            setData(response.data.list);
        } catch(error){
            console.log('error in api call', error);
            
        };

    };

    return (
        <div className="container">
            <h1 className="heading">Weather App Home</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="City">City Name:</label>
                <input
                    type="text"
                    required
                    placeholder="Enter your city name"
                    onChange={(e) => setCityName(e.target.value)}
                    className="input"
                />
                <button type="submit" className="btn btn-primary">Get Weather</button>
            </form>
            <div className="weather-cards">
                {data.slice(0, 2).map((eachForcast, index) => (
                    <WeatherCard
                        key={index}
                        date={eachForcast.dt_txt}
                        temp={eachForcast.main.temp}
                        min={eachForcast.main.temp_min}
                        max={eachForcast.main.temp_max}
                    />
                ))}
            </div>
        </div>
    );

}


export default Home;