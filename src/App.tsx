import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JulesGo from './pages/JulesGo';
import SeeList from './pages/SeeList';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jules-go" element={<JulesGo />} />
        <Route path="/seelist" element={<SeeList />} />
      </Routes>
    </>
  );
}

export default App;