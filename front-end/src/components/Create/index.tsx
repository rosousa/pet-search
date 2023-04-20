import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function CreateMarkup() {
  const markup = useSelector((state: RootState) => state.markup);

  return (
    <div
      className={`w-5/12 h-full ${
        markup.selectedLocation.selected ? '' : 'hidden'
      } flex flex-col items-center `}
    >
      <div className="w-5/6 flex flex-col items-center border-2 border-zinc-700 bg-zinc-800 rounded pt-10 pb-10 text-white text-center"></div>
    </div>
  );
}

export default CreateMarkup;
