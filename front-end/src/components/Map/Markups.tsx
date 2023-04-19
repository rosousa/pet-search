import { useEffect } from 'react';
import { Marker } from 'react-leaflet';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { get } from '../../api';
import { updateMarkups, updateSelectedPet } from '../../store/MarkupReducer';

function Markups() {
  const markups = useSelector((state: RootState) => state.markup);

  const dispatch = useDispatch();

  useEffect(() => {
    get('/api/markup').then((data) => {
      dispatch(updateMarkups(data));
    });
  }, [dispatch]);

  function handleClick(markup: any) {
    dispatch(updateSelectedPet({ ...markup }));
  }

  return (
    <>
      {markups.value.map((markup) => {
        return (
          <Marker
            eventHandlers={{
              click: (e) => {
                handleClick(markup);
              },
            }}
            key={markup.id}
            position={{ lat: markup.lat, lng: markup.lng }}
          />
        );
      })}
    </>
  );
}

export default Markups;
