import { useMapEvents } from 'react-leaflet';

export interface ILocation {
  lat: number;
  lng: number;
}

interface MapEventsProps {
  setLocation: ({ lat, lng }: ILocation) => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

function MapEvents({ setLocation, setIsOpen, isOpen }: MapEventsProps) {
  useMapEvents({
    click: (e) => {
      setLocation({ ...e.latlng });
      setIsOpen(!isOpen);
    },
  });

  return null;
}

export default MapEvents;
