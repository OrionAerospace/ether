import React, {Component} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import {DefaultContainer} from './Basics/DefaultContainer';
import gpsImage from '../images/gps.png';

import '../assets/RocketMap.css';

export class RocketMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: -25.0903,
      lng: -50.1492,
      zoom: 12
    };
  }

  render() {
    const {lat, lng, zoom} = this.state;
    const {width, height} = this.props;
    console.log(this.props);
    return (
      <DefaultContainer
        styles={{position: 'absolute', left: '', top: '650px'}}
        image={gpsImage}
        text="Geolocalização">
        <MapContainer center={[lat, lng]} zoom={zoom} scrollWheelZoom style={{
          width: width || '500px',
          height: height || '500px'
        }}>
          <TileLayer attribution='&copy; <a href="http://osm.org/copyright">
            OpenStreetMap</a> contributors'
          url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        </MapContainer>
      </DefaultContainer>
    );
  }
}
export default RocketMap;
