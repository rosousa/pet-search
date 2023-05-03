import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Cards from '@/components/Card/Cards';
import Map from '@/components/Map';
import Title from '@/components/Title';
import Description from '@/components/Description';
import CharityDog from '@/assets/charity-dog.svg';
import CreateMarkup from '@/components/Create';
import { checkSession, removeSession } from '@/api';
import { updateUser } from '@/store/UserReducer';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    checkSession('/api/session')
      .then(({ user }) => {
        dispatch(
          updateUser({
            userId: user.id,
            username: user.username,
            email: user.email,
          })
        );
      })
      .catch(() => {
        navigate('/sign-in');
      });
  }, []);

  function logout() {
    removeSession('/api/logout').then(() => {
      navigate('/sign-in');
    });
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-zinc-900">
      <header className="w-4/6 flex justify-between items-center mt-2">
        <div className="flex items-center gap-x-5">
          <img src={CharityDog} alt="" width={56} />
          <Title>PETSEARCH</Title>
        </div>
        <div className="flex gap-x-4 items-center">
          <span className="text-white font-bold text-xs">{user.username}</span>
          <button
            className="w-20 h-8 bg-zinc-800 hover:brightness-125 rounded text-white text-xs font-bold"
            onClick={() => {
              logout();
            }}
          >
            LOGOUT
          </button>
        </div>
      </header>
      <main className="w-full h-full flex flex-col items-center mt-16">
        <div className="h-32 w-4/6 flex items-center gap-x-2">
          <Cards />
        </div>
        <div className="w-4/6 h-4/6 flex z-0 rounded overflow-hidden">
          <Map />
          <Description />
          <CreateMarkup />
        </div>
      </main>
    </div>
  );
}

export default Home;
