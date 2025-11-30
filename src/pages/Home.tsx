import { motion } from 'framer-motion';
import { Smartphone, Code, Zap, ChevronRight, Github, Mail, MapPin, ExternalLink, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <img 
              src="/assets/images/logo.svg" 
              alt="ByteLand Logo" 
              className="h-8 w-auto transition-transform duration-200 group-hover:scale-110" 
            />
            <span className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">ByteLand</span>
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#products" className="hover:text-slate-900 transition-colors">Products</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          
          {/* Animated Tri-color Background Blobs */}
          <div className="absolute -z-20 top-0 left-1/4 w-72 h-72 bg-rgb-red/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite]"></div>
          <div className="absolute -z-20 top-0 right-1/4 w-72 h-72 bg-rgb-green/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite_2s]"></div>
          <div className="absolute -z-20 -bottom-8 left-1/3 w-72 h-72 bg-rgb-blue/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite_4s]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
                Smart Apps for
                <div className="mt-2">
                  <span className="inline-block text-gradient-tri">Everyday Life</span>
                </div>
              </h1>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                ByteLand Technology Limited creates innovative cross-platform applications for mobile and web. From developer tools to daily utilities, we build experiences that matter.
              </p>
              <div className="flex justify-center gap-4">
                <a href="#products" className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-tri text-white font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30">
                  Explore Products
                  <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">About ByteLand</h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Established in August 2024 in Hong Kong, ByteLand Technology Limited is dedicated to crafting practical, high-quality applications.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  We specialize in Cross-platform Mobile and Progressive Web Apps (PWA) that integrate seamlessly into your daily life. Whether it's checking the weather, catching a bus, or coding on the go, our tools are designed to be there when you need them.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <Smartphone className="w-8 h-8 mx-auto text-rgb-blue mb-3" />
                  <h3 className="font-bold text-slate-900">Mobile First</h3>
                  <p className="text-sm text-slate-500">Optimized for your pocket</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <Zap className="w-8 h-8 mx-auto text-rgb-green mb-3" />
                  <h3 className="font-bold text-slate-900">Fast & Secure</h3>
                  <p className="text-sm text-slate-500">Privacy by design</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <Code className="w-8 h-8 mx-auto text-rgb-red mb-3" />
                  <h3 className="font-bold text-slate-900">Dev Focused</h3>
                  <p className="text-sm text-slate-500">Built for coders</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                  <Bot className="w-8 h-8 mx-auto text-rgb-blue mb-3" />
                  <h3 className="font-bold text-slate-900">AI Powered</h3>
                  <p className="text-sm text-slate-500">Next-gen intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Products</h2>
              <p className="text-slate-600">Innovations we are bringing to the world.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* JulesGo Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col relative group"
              >
                {/* Tri-color Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-tri"></div>
                <div className="h-48 relative overflow-hidden flex items-center justify-center">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  {/* Animated Blobs */}
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-rgb-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite]"></div>
                  <div className="absolute top-0 right-1/4 w-32 h-32 bg-rgb-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite_2s]"></div>
                  {/* JulesGo Animated Icon */}
                  <img src="/assets/images/julesgo-icon.svg" alt="Jules GO Ghost" className="w-24 h-24 drop-shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">Jules GO</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-rgb-green/20 text-slate-900 text-xs font-bold">Available Now</span>
                  </div>
                  <p className="text-slate-600 mb-6 flex-1">
                    Your intelligent pair programmer on the go. A mobile client for Google's Jules API that lets you chat with your code, manage coding sessions, and secure your API keys locally.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-green"></div>
                      AI Collaboration with Google Jules API
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-green"></div>
                      Secure Local Storage
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-green"></div>
                      Cross-platform (Android & iOS)
                    </li>
                  </ul>
                  <Link 
                    to="/jules-go" 
                    className="block w-full py-3 rounded-lg border-2 border-rgb-red text-rgb-red font-bold hover:bg-rgb-red hover:text-white transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>

              {/* SeeList Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col relative group"
              >
                {/* Tri-color Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-tri"></div>
                <div className="h-48 relative overflow-hidden flex items-center justify-center">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  {/* Animated Blobs */}
                  <div className="absolute -bottom-8 left-1/3 w-32 h-32 bg-rgb-blue/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite_4s]"></div>
                  <div className="absolute top-0 right-1/4 w-32 h-32 bg-rgb-red/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite]"></div>
                  {/* SeeList Icon */}
                  <img src="/assets/images/seelist-icon.svg" alt="SeeList Icon" className="w-24 h-24 drop-shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">SeeList</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">Coming Soon</span>
                  </div>
                  <p className="text-slate-600 mb-6 flex-1">
                    Your personal movie and TV show tracker. Browse the TMDB library, watch trailers, and manage your watchlist with your own API key.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-blue"></div>
                      Powered by TMDB API
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-blue"></div>
                      Watch Trailers
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-blue"></div>
                      Local Favorites Collection
                    </li>
                  </ul>
                  <Link 
                    to="/seelist" 
                    className="block w-full py-3 rounded-lg border-2 border-slate-200 text-slate-600 font-bold hover:border-rgb-blue hover:text-rgb-blue transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>

              {/* JoyDex Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 flex flex-col relative group"
              >
                {/* Tri-color Accent Border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-tri"></div>
                <div className="h-48 relative overflow-hidden flex items-center justify-center">
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                  {/* Animated Blobs */}
                  <div className="absolute top-0 left-1/4 w-32 h-32 bg-rgb-red/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite]"></div>
                  <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-rgb-green/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_10s_infinite_2s]"></div>
                  {/* JoyDex Icon */}
                  <img src="/assets/images/joydex-icon.svg" alt="JoyDex Icon" className="w-24 h-24 drop-shadow-lg relative z-10 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">JoyDex</h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-600 text-xs font-bold">New</span>
                  </div>
                  <p className="text-slate-600 mb-6 flex-1">
                    The ultimate companion for Pokémon trainers. Comprehensive database, team builder, and a joyful interface to track your journey.
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-red"></div>
                      Gen 1-9 Complete Data
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-rgb-red"></div>
                      Smart Team Builder
                    </li>

                  </ul>
                  <Link 
                    to="/joydex" 
                    className="block w-full py-3 rounded-lg border-2 border-rgb-red text-rgb-red font-bold hover:bg-rgb-red hover:text-white transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="relative h-[600px] w-full overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
             <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.570491328963!2d114.19606437623197!3d22.338353979659676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340406c6072345b7%3A0x2e669208952238e0!2sLuk%20Hop%20Industrial%20Building%2C%208%20Luk%20Hop%20St%2C%20San%20Po%20Kong!5e0!3m2!1sen!2shk!4v1701490000000!5m2!1sen!2shk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Floating Info Card */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center md:justify-start md:px-20">
            <div className="pointer-events-auto bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl max-w-md border border-slate-100 mx-4 md:mx-0">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rgb-blue/10 text-rgb-blue mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2 font-brand">Visit Our HQ</h2>
              <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider font-semibold">Hong Kong</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rgb-red mt-2 shrink-0"></div>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    ROOM 25, 15/F, BLOCK E,<br/>
                    LUK HOP INDUSTRIAL BUILDING<br/>
                    8 LUK HOP STREET, SAN PO KONG
                  </p>
                </div>
              </div>

              <a 
                href="https://maps.app.goo.gl/qTiNuqkwA14SgHvc6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-rgb-blue transition-colors group"
              >
                Open in Google Maps
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact/Footer */}
        <footer id="contact" className="bg-slate-900 text-slate-400 py-12 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-tri"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-4 font-brand text-gradient-tri">ByteLand Technology Limited</h4>
                <p className="text-sm max-w-xs">
                  Innovating for your everyday life.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#home" className="hover:text-white">Home</a></li>
                  <li><a href="#products" className="hover:text-white">Products</a></li>
                  <li><a href="#location" className="hover:text-white">Location</a></li>
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/ByteLandTechnology" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Github className="w-5 h-5" /></a>
                  <a href="mailto:info@byteland.app" className="hover:text-white"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center text-xs">
              &copy; {new Date().getFullYear()} ByteLand Technology Limited. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
