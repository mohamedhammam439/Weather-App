import React from 'react';

const Weather =(props) =>{
    return(
        <div>
        {
            props.City && <p>City : {props.City}</p>
        }
        {
            props.Country && <p>Country :  {props.Country}</p>
        }
        {
            props.Tempreature && <p>Tempreature :  {props.Tempreature}</p>
        }
        {
            props.pressure && <p>Pressure  {props.pressure}</p>
        }
        {
            props.humidity && <p>Humidity : {props.humidity}</p>
        }
        {
            props.description && <p>Description : {props.description}</p>
        }
        {
            props.error && <p>Error : {props.error}</p>
        }   
        </div>
    )
}
export default Weather ;