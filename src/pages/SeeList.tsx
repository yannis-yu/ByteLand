import { motion } from 'framer-motion';
import { Film, Heart, Play, Github, Mail, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SeeList() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/images/seelist-icon.svg" alt="SeeList Icon" className="h-8 w-auto group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">SeeList</span>
          </Link>
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center px-5 py-2 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-sm"
            >
              Coming Soon
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-medium mb-8">
                <Film className="w-4 h-4 mr-2" />
                Your Personal Movie Database
              </div>

              <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
                Discover, Watch,
                <div className="text-gradient-tri">Collect.</div>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Browse the entire library of movies and TV shows using your own TMDB API Key. Watch trailers, track what you want to see, and build your personal collection locally.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  disabled
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-200 text-slate-500 font-bold text-lg cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Cinematic Experience</h2>
              <p className="text-slate-600 mt-4">Everything you need to manage your watchlist.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* TMDB Integration */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Powered by TMDB</h3>
                <p className="text-slate-600">
                  Connect with your own TMDB API Key to access millions of movies and TV shows with up-to-date metadata.
                </p>
              </div>

              {/* Trailers */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-pink-200 transition-colors">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-6 text-pink-600">
                  <Play className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Watch Trailers</h3>
                <p className="text-slate-600">
                  Instantly watch the latest trailers and teasers for upcoming releases and classics alike.
                </p>
              </div>

              {/* Local Collection */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:border-green-200 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Local Favorites</h3>
                <p className="text-slate-600">
                  Save your favorite titles and "to-watch" list locally on your device. Private and offline-ready.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-tri"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
            <div className="flex justify-center gap-6 mb-8">
              <a href="https://github.com/ByteLandTechnology" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
              <a href="mailto:info@byteland.app" className="hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
            <div className="text-xs text-slate-600">
              &copy; 2025 ByteLand Technology Limited. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
