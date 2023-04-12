import { Provider } from 'react-redux';
import Cards from '../../components/Card/Cards';
import Map from '../../components/Map';
import store from '../../store';

function Home() {
  return (
    <Provider store={store}>
      <main className="w-screen h-screen flex justify-center items-center relative">
        <div className="h-full w-2/6 bg-zinc-900">
          <Cards />
        </div>
        <div className="w-full h-full z-0">
          <Map />
        </div>
      </main>
    </Provider>
  );
}

export default Home;
