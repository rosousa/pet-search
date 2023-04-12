import { useSelector } from 'react-redux';
import Card from '.';
import { RootState } from '../../store';

function Cards() {
  const markups = useSelector((state: RootState) => state.markup);

  console.log(markups.value);

  return (
    <div className="h-full w-full py-3 gap-y-3 flex flex-col items-center overflow-x-hidden">
      {markups.value.map((markup) => {
        return (
          <Card
            info={{
              name: markup.name,
              tel: markup.tel,
              image: markup.imageUrl,
            }}
            key={markup.id}
          />
        );
      })}
    </div>
  );
}

export default Cards;
