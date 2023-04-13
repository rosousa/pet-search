import { useDispatch } from 'react-redux';
import { updateLocation } from '../../store/MarkupReducer';

type Info = {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  tel: string;
  description: string;
  image: string;
};

function Card({ info }: { info: Info }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(
      updateLocation({ lat: info.location.lat, lng: info.location.lng })
    );
  }

  return (
    <div
      className="w-28 h-28 rounded flex bg-zinc-800 p-1 hover:brightness-75 cursor-pointer"
      onClick={() => handleClick()}
    >
      <img
        className="w-full h-full rounded object-cover"
        src={info.image}
        alt="pet"
      />
    </div>
  );
}

export default Card;
