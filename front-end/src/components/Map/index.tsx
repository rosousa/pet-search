import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import MapEvents, { ILocation } from './MapEvents';
import CustomModal from '../Modal';
import { Container, Wrapper } from './styles';

function Map() {
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Container>
      <CustomModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Wrapper>
        <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
          <MapEvents
            setLocation={setLocation}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          />
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
