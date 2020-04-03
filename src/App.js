import React, { Component } from 'react';
import Form from './component/Form';
import Weather from './component/weather';
import './App.css';


const API_KEY='487862f576f796db554187c8715d2b90';

class App extends Component{
  state={
    City:'',
    Country:'',
    Tempreature:'',
    pressure:'',
    humidity:'',
    description:'',
    error:''
  }

  getweather=async(e)=>{
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    const api=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data=await api.json();
   if (city && country) {
    this.setState({
      City:data.name,
      Country:data.sys.country,
      Tempreature:data.main.temp,
      pressure:data.main.pressure,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })
   }else {
    this.setState({
      City:'',
      Country:'',
      Tempreature:'',
      pressure:'',
      humidity:'',
      description:'',
      error:'Please Insert Data'
    })
   }
  }

  render(){
    return (
      <div className="App">
        <Form getweather={this.getweather} />
        <Weather 
            City={this.state.City}
            Country={this.state.Country}
            Tempreature={this.state.Tempreature}
            pressure={this.state.pressure}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
        />
       
      </div>
    );
  }
 
}

export default App;
