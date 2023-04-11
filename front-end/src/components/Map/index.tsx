import { MapContainer, TileLayer } from 'react-leaflet';
import MapEvents from './MapEvents';
import Markups from './Markups';

function Map() {
  return (
    <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
      <MapEvents />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markups />
    </MapContainer>
  );
}

export default Map;
