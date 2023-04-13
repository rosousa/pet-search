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
      className="w-11/12 h-44 rounded flex gap-x-3 bg-slate-200 p-2 cursor-pointer"
      onClick={() => handleClick()}
    >
      <img
        className="w-20 h-20 rounded-lg object-cover"
        src={info.image}
        alt="pet"
      />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xl">{info.name}</p>
          <p className="text-zinc-500">{info.tel}</p>
        </div>
        <p className="line-clamp-5">{info.description}</p>
      </div>
    </div>
  );
}

export default Card;
