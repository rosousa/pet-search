import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUp } from '../../api/index';
import logo from '../../assets/charity-dog.svg';

const signInSchema = z.object({
  username: z
    .string()
    .trim()
    .min(4, 'Username must have a minimum of 4 characters')
    .max(20),
  email: z.string().min(10).max(50).nonempty(),
  password: z
    .string()
    .nonempty()
    .min(4, 'Password must have a minimum of 4 characters')
    .max(50),
});

type signInForm = z.infer<typeof signInSchema>;

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signInForm>({
    resolver: zodResolver(signInSchema),
  });

  const navigate = useNavigate();

  function handleSignUp(data: any) {
    const body = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    signUp('/api/sign-up', body).then(() => navigate('/sign-in'));
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-14 bg-zinc-900 text-white">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="font-bold text-lg text-purple-500">PETSEARCH</h1>
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="flex flex-col gap-y-8"
      >
        <div className="flex flex-col items-center gap-y-2">
          <label className="text-md font-bold">Username</label>
          <input
            type="text"
            className="rounded w-64 h-8 px-2 text-lg bg-zinc-800 focus:outline-none"
            {...register('username')}
          />
          {errors.username && (
            <span className="text-xs font-bold text-red-400">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <label className="text-md font-bold">E-mail</label>
          <input
            type="email"
            className="rounded w-64 h-8 px-2 text-lg bg-zinc-800 focus:outline-none"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-xs font-bold text-red-400">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <label className="text-md font-bold">Password</label>
          <input
            type="password"
            className="rounded w-64 h-8 px-2 text-lg bg-zinc-800 focus:outline-none"
            {...register('password')}
          />
          {errors.password && (
            <span className="text-xs font-bold text-red-400">
              {errors.password.message}
            </span>
          )}
        </div>
        <button className="font-bold bg-emerald-600 h-12 text-sm rounded mt-4 hover:brightness-75">
          SIGNUP
        </button>
      </form>
    </div>
  );
}

export default SignUp;
