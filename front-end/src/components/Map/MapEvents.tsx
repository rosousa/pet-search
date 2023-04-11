import { useMapEvents } from 'react-leaflet';

function MapEvents(): null {
  useMapEvents({
    click: (e) => {
      // lat & lng
      console.log(e.latlng.lat, e.latlng.lng);
    },
  });

  return null;
}

export default MapEvents;
