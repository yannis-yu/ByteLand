import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JulesGo from "./pages/JulesGo";
import SeeList from "./pages/SeeList";
import JoyDex from "./pages/JoyDex";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jules-go" element={<JulesGo />} />
        <Route path="/seelist" element={<SeeList />} />
        <Route path="/joydex" element={<JoyDex />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
