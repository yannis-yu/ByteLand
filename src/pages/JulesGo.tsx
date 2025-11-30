import { motion } from 'framer-motion';
import { Sparkles, Brain, Network, MessageSquare, Rocket, Shield, ChevronRight, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function JulesGo() {
  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/assets/images/julesgo-icon.svg" alt="JulesGo Icon" className="h-8 w-auto group-hover:scale-110 transition-transform" />
            <span className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">Jules GO</span>
          </Link>
          <div className="flex items-center gap-4">
            <a 
              href="https://jules-go.byteland.app" 
              className="inline-flex items-center px-5 py-2 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors text-sm"
            >
              Get Started
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
              {/* Powered By Badge */}
              <a 
                href="https://jules.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 hover:bg-blue-100 transition-colors"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Powered by Google Jules
              </a>

              <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
                Code Smarter,
                <div className="text-gradient-tri">Anywhere.</div>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Your AI pair programmer on the go. Seamlessly integrate planning, reasoning, and execution directly from your mobile device.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://jules-go.byteland.app" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-tri text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/30"
                >
                  Start Coding Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
              
              <p className="mt-6 text-xs text-slate-400">
                Functionality provided by Google's Jules. Product built using Jules API.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Jules Power Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-center p-10 sm:p-16 shadow-2xl">
              {/* Background Glows */}
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-8 backdrop-blur-sm">
                  <Brain className="w-8 h-8 text-purple-300" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Built on Google Jules API</h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Experience the power of Google's advanced AI model designed specifically for coding. 
                  Jules GO brings this capability to your fingertips.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (Bento Grid) */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">Everything You Need</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Context Aware - Large */}
              <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  <Network className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Context Aware</h3>
                <p className="text-slate-600">Deep understanding of your entire repository structure and logic.</p>
              </div>

              {/* Smart Chat */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-purple-100 transition-colors">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Chat</h3>
                <p className="text-slate-600">Ask anything about your code.</p>
              </div>

              {/* Plan & Execute */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-green-100 transition-colors">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-green-600">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Plan & Execute</h3>
                <p className="text-slate-600">Turn ideas into working code.</p>
              </div>

              {/* Secure & Private - Large */}
              <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-cyan-100 transition-colors">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6 text-cyan-600">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Private</h3>
                <p className="text-slate-600">Your code stays safe with local storage and secure API transmission.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-tri"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center gap-8 mb-8 text-sm font-medium">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <button className="hover:text-white transition-colors">Licenses</button>
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
