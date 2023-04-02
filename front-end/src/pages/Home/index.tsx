import { ModalProvider } from 'styled-react-modal';
import Map from '../../components/Map';

function Home() {
  return (
    <ModalProvider>
      <Map />
    </ModalProvider>
  );
}

export default Home;
