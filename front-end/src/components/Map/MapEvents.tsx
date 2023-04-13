import { useMap } from 'react-leaflet';

type Location = {
  lat: number;
  lng: number;
};

function MapEvents({ lat, lng }: Location) {
  const map = useMap();
  map.setView([lat, lng]);
  return null;
}

export default MapEvents;
