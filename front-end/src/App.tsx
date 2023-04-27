import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';
import Home from './pages/Home';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
