import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SignupSchema } from '@/schemas';
import { signup } from '@/api/index';
import logo from '@/assets/charity-dog.svg';

type SignupForm = z.infer<typeof SignupSchema>;

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(SignupSchema),
  });

  const navigate = useNavigate();

  function handleSignup(data: any) {
    const body = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    signup('/api/sign-up', body).then(() => navigate('/sign-in'));
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-y-14 bg-zinc-900 text-white">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="font-bold text-lg text-purple-500">PETSEARCH</h1>
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col items-center gap-y-8"
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
        <button className="font-bold w-full bg-emerald-600 h-12 text-sm rounded mt-4 hover:brightness-75">
          SIGNUP
        </button>
        <span className="text-sm">
          Already have an account?{' '}
          <a href="/sign-in" className="underline font-bold">
            Sign In
          </a>
        </span>
      </form>
    </div>
  );
}

export default Signup;
