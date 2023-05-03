import { useDispatch, useSelector } from 'react-redux';
import {
  updateSelectedPet,
  updateSelectedLocation,
} from '../../store/MarkupReducer';
import { RootState } from '../../store';
import { Markup } from '../../types';

function Card({ markup }: { markup: Markup }) {
  const markupState = useSelector((state: RootState) => state.markup);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(updateSelectedPet({ ...markup }));
    dispatch(updateSelectedLocation({ selected: false }));
  }

  return (
    <div
      className={`w-28 h-28 rounded flex ${
        markupState.selectedPet.id === markup.id ? 'bg-blue-600' : 'bg-zinc-800'
      } hover:bg-blue-500 p-1 hover:brightness-110 cursor-pointer`}
      onClick={() => handleClick()}
    >
      <img
        className="w-full h-full rounded object-cover"
        src={markup.imageUrl}
        alt="pet"
      />
    </div>
  );
}

export default Card;
