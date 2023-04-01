import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Container, Map } from './style';

function Home() {
  return (
    <Container>
      <Map>
        <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={{ lat: 51.505, lng: -0.09 }}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Map>
    </Container>
  );
}

export default Home;
