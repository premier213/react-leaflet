import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/index.css';

interface EnteredProps {
  scrollWheelZoom: boolean;
  zoomControl: boolean;
  zoom: number;
  lat: number;
  lng: number;
  height: string;
  width: string;
  attributionControl: boolean;
}

export const NextMap = (props: EnteredProps) => {
  const {
    scrollWheelZoom,
    zoomControl,
    zoom,
    lat,
    lng,
    height,
    width,
    attributionControl,
  } = props;
  const position = { lat: lat, lng: lng };
  React.useEffect(() => {
    const L = require('leaflet');

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl:
        'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      scrollWheelZoom={scrollWheelZoom}
      attributionControl={attributionControl}
      zoomControl={zoomControl}
      style={ { height: height , width: width }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
