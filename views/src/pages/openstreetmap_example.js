import React, { Component } from 'react'
import Geocoder from 'react-mapbox-gl-geocoder'
import ReactMapGL, { Marker } from 'react-map-gl';
import './css/index.css'
import Pin from './pin';
require("dotenv").config();

const mapAccess = {
    mapboxApiAccessToken: process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN
}

const mapStyle = {
    width: '100%',
    height: 600
}

const queryParams = {
    country: 'us'
}

const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};



class openstreetmap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 37.983810,
                longitude: 23.727539,
                zoom: 4,
                bearing: 0,
                pitch: 0
            },
            marker: {
                latitude: 37.983810,
                longitude: 23.727539
            },
            events: {}
        };
    }

    _updateViewport = viewport => {
        this.setState({ viewport });
    };

    _logDragEvent(name, event) {
        this.setState({
            events: {
                ...this.state.events,
                [name]: event.lngLat
            }
        });
    }

    _onMarkerDragStart = event => {
        this._logDragEvent('onDragStart', event);
    };

    _onMarkerDrag = event => {
        this._logDragEvent('onDrag', event);
    };

    _onMarkerDragEnd = event => {
        this._logDragEvent('onDragEnd', event);
        this.setState({
            marker: {
                longitude: event.lngLat[0],
                latitude: event.lngLat[1]
            }
        });
        console.log("longitude " +event.lngLat[0]);
        console.log("latitude " +event.lngLat[1]);
    };

    onSelected = (viewport, item) => {
        this.setState({ viewport });
        console.log('Selected: ', item.center)
    }

    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let setUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
            };
            let newViewport = {
                height: "100vh",
                width: "100vw",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 10
            };
            this.setState({
                viewport: newViewport,
                userLocation: setUserLocation
            });
        });
    };

    render() {
        const { viewport, marker } = this.state;
        return (
            <div>
                <Geocoder
                    {...mapAccess} onSelected={this.onSelected} viewport={viewport} hideOnSelect={true}
                />

                <ReactMapGL
                    {...mapAccess} {...viewport} {...mapStyle}
                    mapStyle="mapbox://styles/breeezebnb/ckfbdk3wq472b19npvnwm88r5"
                    onViewportChange={(newViewport) => this.setState({ viewport: newViewport, marker: newViewport })}

                >
                    <Marker
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                        offsetTop={-20}
                        offsetLeft={-10}
                        draggable
                        onDragStart={this._onMarkerDragStart}
                        onDrag={this._onMarkerDrag}
                        onDragEnd={this._onMarkerDragEnd}
                    >
                        <Pin size={30} />
                    </Marker>
                </ReactMapGL>

            </div>
        )
    }
}
export default openstreetmap;