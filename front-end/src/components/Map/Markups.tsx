import { useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { get } from '../../api';
import { updateMarkups } from '../../store/MarkupReducer';

function Markups() {
  const markups = useSelector((state: RootState) => state.markup);

  const dispatch = useDispatch();

  useEffect(() => {
    get('/api/markup').then((data) => {
      dispatch(updateMarkups(data));
    });
  }, [dispatch]);

  return (
    <>
      {markups.value.map((markup) => {
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
