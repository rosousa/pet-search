import { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { get } from '../../api';

type Markup = {
  id: number;
  lat: number;
  lng: number;
  createdAt: Date;
  updatedAt: Date;
};

function Markups() {
  const [markups, setMarkups] = useState<Markup[]>([]);

  useEffect(() => {
    get('/api/markup').then((data) => setMarkups(data));
  }, []);

  return (
    <>
      {markups.map((markup) => {
        return (
          <Marker
            key={markup.id}
            position={{ lat: markup.lat, lng: markup.lng }}
          >
            <Popup>{markup.id}</Popup>
          </Marker>
        );
      })}
    </>
  );
}

export default Markups;
