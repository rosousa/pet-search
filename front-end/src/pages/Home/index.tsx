import Cards from '../../components/Card/Cards';
import Map from '../../components/Map';

function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center relative">
      <div className="h-full w-2/6 bg-zinc-900">
        <Cards />
      </div>
      <div className="w-full h-full z-0">
        <Map />
      </div>
    </main>
  );
}

export default Home;
