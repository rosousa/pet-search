import { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import { Container, Wrapper } from './style';

interface ILocation {
  lat: number;
  lng: number;
}

interface MapEventsProps {
  setLocation: ({ lat, lng }: ILocation) => void;
}

function MapEvents({ setLocation }: MapEventsProps) {
  useMapEvents({
    click: (e) => {
      setLocation({ ...e.latlng });
    },
  });

  return null;
}

function Map() {
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });
  return (
    <Container>
      <Wrapper>
        <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
          <MapEvents setLocation={setLocation} />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={{ lat: location.lat, lng: location.lng }}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Wrapper>
    </Container>
  );
}

export default Map;
