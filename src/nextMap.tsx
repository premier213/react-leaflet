import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './styles/index.css';

interface EnteredProps {
  scrollWheelZoom?: boolean;
  zoomControl?: boolean;
  zoom?: number;
  lat: number;
  lng: number;
  height?: string;
  width?: string;
  attributionControl?: boolean;
  popUp?: string;
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
    popUp,
  } = props;
  const position = { lat, lng };
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
      center={[lat, lng]}
      zoom={zoom ?? 17}
      scrollWheelZoom={scrollWheelZoom ?? true}
      attributionControl={attributionControl ?? false}
      zoomControl={zoomControl ?? false}
      style={{ height: height ?? '300px', width: width ?? '300px' }}
      popUp={popUp ?? 'Hello!'}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>{popUp}</Popup>
      </Marker>
    </MapContainer>
  );
};
