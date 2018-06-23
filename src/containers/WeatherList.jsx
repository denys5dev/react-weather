import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from './../components/Chart';
import Map from './../components/Map';

class WeatherList extends Component{

    renderWeather(cityData) {
        if(cityData) {
            const name = cityData.city.name;
            const temps = cityData.list.map(weather => weather.main.temp);
            const pressures = cityData.list.map(weather => weather.main.pressure);
            const humidities = cityData.list.map(weather => weather.main.humidity);
          
            const { lat, lon } = cityData.city.coord;

            return (
                <tr key={name}>
                    <td><Map lat={lat} lon={lon} /></td>
                    <td><Chart data={temps} units="K" color="green"/></td>
                    <td><Chart data={pressures} units="hPa" color="red"/></td>
                    <td><Chart data={humidities} units="%" color="black"/></td>
                </tr>
            )
        }
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({ weather }) {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);