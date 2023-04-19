import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Description() {
  const markup = useSelector((state: RootState) => state.markup);

  return (
    <div
      className={`w-5/12 h-full ${
        markup.selectedPet.id !== 0 ? '' : 'hidden'
      } flex flex-col items-center border border-zinc-800 pt-10 pb-10 bg-zinc-900 text-white`}
    >
      <div className="w-32 h-32 object-cover">
        <img
          className="w-full h-full object-cover rounded-full"
          src={markup.selectedPet.imageUrl}
          alt="animal image"
        />
      </div>
      <h2 className="font-bold text-xl pt-5">{markup.selectedPet.name}</h2>
      <span className="text-zinc-400 pt-2">{markup.selectedPet.tel}</span>
      <div className="w-5/6 pt-10">
        <p>{markup.selectedPet.description}</p>
      </div>
    </div>
  );
}

export default Description;
