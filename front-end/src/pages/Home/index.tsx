import { Provider } from 'react-redux';
import Cards from '../../components/Card/Cards';
import Map from '../../components/Map';
import store from '../../store';
import Title from '../../components/Title';
import Description from '../../components/Description';
import CharityDog from '../../assets/charity-dog.svg';
import CreateMarkup from '../../components/Create';

function Home() {
  return (
    <Provider store={store}>
      <div className="w-screen h-screen flex flex-col items-center bg-zinc-900">
        <header className="w-4/6 flex justify-between items-center mt-2">
          <div className="flex items-center gap-x-5">
            <img src={CharityDog} alt="" width={56} />
            <Title>PETSEARCH</Title>
          </div>
          <div className="flex gap-x-4 items-center">
            <span className="text-zinc-500 font-bold text-xs">GUEST</span>
            <button className="w-20 h-8 bg-zinc-800 hover:brightness-125 rounded text-white text-xs font-bold">
              SIGN-IN
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
    </Provider>
  );
}

export default Home;
