import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

type UserInput = {
  tel: string;
  description: string;
};

function CreateMarkup() {
  const [userInput, setUserInput] = useState<UserInput>();

  const markup = useSelector((state: RootState) => state.markup);

  return (
    <div
      className={`w-5/12 h-full ${
        markup.selectedLocation.selected ? '' : 'hidden'
      } flex flex-col items-center `}
    >
      <div className="w-5/6 h-full flex flex-col items-center border-2 border-zinc-700 bg-zinc-800 rounded text-white text-center">
        <form className="flex flex-col items-center gap-y-5 p-3">
          <div className="flex flex-col gap-y-2">
            <label htmlFor="" className="text-md font-bold">
              Name
            </label>
            <input
              type="text"
              className="h-10 rounded text-xl bg-zinc-900 px-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="text-md font-bold">
              Tel
            </label>
            <input
              type="text"
              className="h-10 rounded text-xl bg-zinc-900 px-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="text-md font-bold">
              Image URL
            </label>
            <input
              type="text"
              className="h-10 rounded text-xl bg-zinc-900 px-2 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="text-md font-bold">
              Description
            </label>
            <textarea className="h-40 rounded text-xl bg-zinc-900 p-2 resize-none focus:outline-none" />
          </div>
          <button className="bg-blue-600 w-40 h-10 rounded font-bold text-sm hover:brightness-75">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMarkup;
