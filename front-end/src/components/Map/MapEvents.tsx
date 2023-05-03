import { useMap } from 'react-leaflet';
import {
  updateSelectedPet,
  updateSelectedLocation,
} from '@/store/MarkupReducer';
import { useDispatch } from 'react-redux';
import { Location } from '@/types';

function MapEvents({ lat, lng }: Location) {
  const map = useMap();
  const dispatch = useDispatch();

  map.on({
    click(e) {
      const markup = {
        id: 0,
        name: '',
        lat: 0,
        lng: 0,
        tel: '',
        description: '',
        imageUrl: '',
      };
      dispatch(updateSelectedPet({ ...markup }));
      dispatch(
        updateSelectedLocation({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          selected: true,
        })
      );
    },
  });
  if (lat !== 0 && lng !== 0) map.flyTo({ lat, lng }, map.getMaxZoom());
  return null;
}

export default MapEvents;
