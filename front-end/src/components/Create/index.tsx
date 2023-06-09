import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateSelectedLocation } from '../../store/MarkupReducer';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import validator from 'validator';
import { createMarkup, removeSession } from '../../api';

const createMarkupFormSchema = z.object({
  tel: z.string().min(11).max(11).refine(validator.isMobilePhone),
  description: z.string().trim().min(20, 'Description is too short').max(200),
  imageURL: z
    .string()
    .trim()
    .url('Invalid image URL')
    .min(20, 'URL must be at least 20 characters long')
    .max(300),
});

type createMarkupForm = z.infer<typeof createMarkupFormSchema>;

function CreateMarkup() {
  const markup = useSelector((state: RootState) => state.markup);
  const user = useSelector((state: RootState) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createMarkupForm>({
    resolver: zodResolver(createMarkupFormSchema),
  });

  function create(data: any) {
    createMarkup('/api/markup', {
      name: user.username,
      lat: markup.selectedLocation.lat,
      lng: markup.selectedLocation.lng,
      tel: data.tel,
      description: data.description,
      imageUrl: data.imageURL,
    })
      .then(() => {
        dispatch(updateSelectedLocation({ selected: false }));
      })
      .catch(() => {
        removeSession('./api/logout');
        navigate('/sign-in');
      });
  }

  return (
    <div
      className={`w-5/12 h-full ${
        markup.selectedLocation.selected ? '' : 'hidden'
      } flex flex-col items-center `}
    >
      <div className="w-5/6 h-full flex flex-col items-center border-2 border-zinc-700 bg-zinc-800 rounded text-white text-center">
        <form
          onSubmit={handleSubmit(create)}
          className="flex flex-col items-center gap-y-5 p-3"
        >
          <div className="flex flex-col items-center gap-y-1">
            <label htmlFor="" className="text-md font-bold">
              Phone
            </label>
            <input
              type="text"
              className="h-10 w-11/12 rounded text-xl bg-zinc-900 px-2 focus:outline-none"
              {...register('tel')}
            />
            {errors.tel && (
              <span className="text-red-400">Invalid phone number.</span>
            )}
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <label htmlFor="" className="text-md font-bold">
              Image URL
            </label>
            <input
              type="url"
              className="h-10 w-11/12 rounded text-xl bg-zinc-900 px-2 focus:outline-none"
              {...register('imageURL')}
            />
            {errors.imageURL && (
              <span className="text-red-400">{errors.imageURL.message}</span>
            )}
          </div>
          <div className="flex flex-col items-center gap-y-1">
            <label htmlFor="" className="text-md font-bold">
              Description
            </label>
            <input
              type="text"
              className="h-10 w-11/12 rounded text-xl bg-zinc-900 px-2 focus:outline-none"
              {...register('description')}
            />
            {errors.description && (
              <span className="text-red-400">{errors.description.message}</span>
            )}
          </div>
          <button className="bg-blue-600 w-1/2 h-10 rounded font-bold text-sm hover:brightness-75">
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateMarkup;
