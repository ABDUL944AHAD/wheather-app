
import moment from "moment";
//import { Card } from 'react-bootstrap'
import './index.css'

let WeatherCard = ({ date, temp, min, max }) => {
    return (
        // <div className="card">

        //     <div> {moment(date).format("dddd ha")} </div>
        //     <h1> {temp}°C </h1>
        //     <div> {mi`n}°C - {max}°C </div>
        // </div>
        <div className="card">
  <div className="heading">{moment(date).format("dddd ha")}</div>
  <h1> {temp}°C </h1>
            <div> {min}°C - {max}°C </div>
  </div>
        
    );
}

export default WeatherCard;