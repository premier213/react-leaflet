import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './styles/index.css';

export const NextMap = () => {
  const position = { lat: 32.62524, lng: 51.66534 }
  React.useEffect(() => {
    const L = require('leaflet');

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);
    return (<MapContainer center={position} zoom={17} scrollWheelZoom={true} attributionControl={false} zoomControl={false} style={{ height: "300px", width: "300px" }}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>)
}

