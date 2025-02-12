import Home from './pages/Home';
import WhoIsNice from './pages/WhoIsNice';
import Illustration from './pages/Illustration';
import Animation from './pages/Animation';
import Live2D from './pages/Live2D';
import GameProj from './pages/GameProj';
import World from './pages/World';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/WhoIsNice' element={<WhoIsNice />} />
          <Route path='/Illustration' element={<Illustration />} />
          <Route path='/Animation' element={<Animation />} />
          <Route path='/Live2D' element={<Live2D />} />
          <Route path='/GameProjects' element={<GameProj />} />
          <Route path='/World' element={<World />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
