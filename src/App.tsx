import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { usePageTracking } from "./hooks/usePageTracking";

// Lazy load page components for route-based code splitting
const Home = lazy(() => import("./pages/Home"));
const JulesGo = lazy(() => import("./pages/JulesGo"));
const SeeList = lazy(() => import("./pages/SeeList"));
const JoyDex = lazy(() => import("./pages/JoyDex"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const About = lazy(() => import("./pages/About"));
const OpenLand = lazy(() => import("./pages/OpenLand"));
const OpenLandProject = lazy(() => import("./pages/OpenLandProject"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        <span className="text-slate-500 text-sm">Loading...</span>
      </div>
    </div>
  );
}

function App() {
  usePageTracking();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jules-go" element={<JulesGo />} />
          <Route path="/seelist" element={<SeeList />} />
          <Route path="/joydex" element={<JoyDex />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/opensource" element={<OpenLand />} />
          <Route
            path="/opensource/:projectId/*"
            element={<OpenLandProject />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
