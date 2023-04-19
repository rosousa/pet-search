import { useMap } from 'react-leaflet';

type Location = {
  lat: number;
  lng: number;
};

function MapEvents({ lat, lng }: Location) {
  const map = useMap();
  if (lat !== 0 && lng !== 0) map.flyTo({ lat, lng }, map.getMaxZoom());
  return null;
}

export default MapEvents;
