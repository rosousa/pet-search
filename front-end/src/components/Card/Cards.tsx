import { useSelector } from 'react-redux';
import Card from '.';
import { RootState } from '@/store';

function Cards() {
  const markups = useSelector((state: RootState) => state.markup);

  return (
    <>
      {markups.value.map((markup) => {
        return <Card key={markup.id} markup={markup} />;
      })}
    </>
  );
}

export default Cards;
