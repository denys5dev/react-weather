import React, { Component } from 'react';

class Map extends Component {

    componentDidMount() {
        new window.google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render() {
        //this.refs.map
        return <div ref="map" />;
    }
}

export default Map;