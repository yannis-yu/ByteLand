import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JulesGo from './pages/JulesGo';
import SeeList from './pages/SeeList';
import JoyDex from './pages/JoyDex';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jules-go" element={<JulesGo />} />
        <Route path="/seelist" element={<SeeList />} />
        <Route path="/joydex" element={<JoyDex />} />
      </Routes>
    </>
  );
}

export default App;