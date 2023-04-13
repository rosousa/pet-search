import { useSelector } from 'react-redux';
import Card from '.';
import { RootState } from '../../store';

function Cards() {
  const markups = useSelector((state: RootState) => state.markup);

  return (
    <div className="h-full w-full py-3 gap-y-3 flex flex-col items-center overflow-x-hidden">
      {markups.value.map((markup) => {
        return (
          <Card
            info={{
              name: markup.name,
              tel: markup.tel,
              description: markup.description,
              image: markup.imageUrl,
              location: {
                lat: markup.lat,
                lng: markup.lng,
              },
            }}
            key={markup.id}
          />
        );
      })}
    </div>
  );
}

export default Cards;
