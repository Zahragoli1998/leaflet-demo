import React from "react";
import "./App.css";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import VenueLocationIcon from './VenueLocationIcon'
import "leaflet/dist/leaflet.css";

const deepClone = obj => JSON.parse(JSON.stringify(obj))

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentLocation: {
        lat: 35.7,
        lng: 51.3
      },
      zoom: 13
    }
  }

  moveUp = () => {
    const obj = deepClone(this.state.currentLocation)
    obj.lat += .005
    this.setState({currentLocation: obj})
  }

  moveDown = () => {
    const obj = deepClone(this.state.currentLocation)
    obj.lat -= .005
    this.setState({currentLocation: obj})
  }

  moveRight = () => {
    const obj = deepClone(this.state.currentLocation)
    obj.lng += .005
    this.setState({currentLocation: obj})
  }

  moveLeft = () => {
    const obj = deepClone(this.state.currentLocation)
    obj.lng -= .005
    this.setState({currentLocation: obj})
  }

  render() {
    return (
      <div style={{position: 'relatives'}} >
        <h1>Hello world</h1>
        <br />
        <button onClick={() => this.moveUp()} > moveUp </button>
        <button onClick={() => this.moveDown()} > moveDown </button>
        <button onClick={() => this.moveRight()} > moveRight </button>
        <button onClick={() => this.moveLeft()} > moveLeft </button>
        <div className="mapContainer" >
          <Map center={this.state.currentLocation} zoom={this.state.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={this.state.currentLocation} icon={VenueLocationIcon}>
              <Popup> salam </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    )
  }
}

export default App;
