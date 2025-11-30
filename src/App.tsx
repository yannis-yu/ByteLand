import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JulesGo from './pages/JulesGo';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jules-go" element={<JulesGo />} />
      </Routes>
    </>
  );
}

export default App;