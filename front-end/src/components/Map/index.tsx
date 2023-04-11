import { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import MapEvents, { ILocation } from './MapEvents';
import CustomModal from '../Modal';
import {
  Container,
  Wrapper,
  StyledPopup,
  StyledImage,
  StyledTitle,
  StyledDescription,
} from './styles';
import { get } from '../../api';

type Markup = {
  id: number;
  lat: number;
  lng: number;
  createdAt: Date;
  updatedAt: Date;
};

function Map() {
  const [location, setLocation] = useState<ILocation>({ lat: 0, lng: 0 });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [markups, setMarkups] = useState<Markup[]>([]);

  useEffect(() => {
    get('/api/markup').then((data) => setMarkups(data));
  }, []);

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
          {markups.map((markup) => {
            return (
              <Marker
                key={markup.id}
                position={{ lat: markup.lat, lng: markup.lng }}
              >
                <StyledPopup>
                  <StyledImage
                    src="http://cdn.shopify.com/s/files/1/0086/0795/7054/articles/Cat_s_Mind_x630.jpg?v=1624444348"
                    alt="animal"
                  />
                  {/* refactor */}
                  <StyledTitle>
                    Thor <br />
                    <span>(00) 00000-0000</span>
                  </StyledTitle>
                  <StyledDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci at quos aut modi non nesciunt explicabo impedit sit
                    iusto commodi, maiores maiores
                  </StyledDescription>
                </StyledPopup>
              </Marker>
            );
          })}
        </MapContainer>
      </Wrapper>
    </Container>
  );
}

export default Map;
