import { Provider } from 'react-redux';
import Cards from '../../components/Card/Cards';
import Map from '../../components/Map';
import store from '../../store';

function Home() {
  return (
    <Provider store={store}>
      <main className="w-screen h-screen flex flex-col items-center bg-zinc-900">
        <div className="h-1/5 w-4/6">
          <Cards />
        </div>
        <div className="w-4/6 h-4/6 z-0">
          <Map />
        </div>
      </main>
    </Provider>
  );
}

export default Home;
