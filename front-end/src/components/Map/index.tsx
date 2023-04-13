import { MapContainer, TileLayer } from 'react-leaflet';
import { useSelector } from 'react-redux';
import MapEvents from './MapEvents';
import Markups from './Markups';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';

function Map() {
  const markup = useSelector((state: RootState) => state.markup);
  const [location, setLocation] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    setLocation({ ...markup.targetLocation });
  }, [markup.targetLocation.lat]);

  return (
    <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
      <MapEvents lat={location.lat} lng={location.lng} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markups />
    </MapContainer>
  );
}

export default Map;
