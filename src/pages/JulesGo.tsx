import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Brain, Network, MessageSquare, Shield, 
  ChevronRight, Github, Mail, Moon, Sun, Key, Code, GitBranch, 
  Plus, FileCode
} from 'lucide-react';

// Feature Data mapping to screens
const FEATURES = [
  {
    id: 'setup',
    label: 'Easy Setup',
    icon: Key,
    screen: 'setup',
    description: 'Get started in seconds with your API key.'
  },
  {
    id: 'sources',
    label: 'Repository',
    icon: GitBranch,
    screen: 'sources',
    description: 'Browse your repositories and branches.'
  },
  {
    id: 'new-session',
    label: 'New Session',
    icon: Plus,
    screen: 'new-session',
    description: 'Start a new coding task with ease.'
  },
  {
    id: 'sessions',
    label: 'Session History',
    icon: Network,
    screen: 'sessions',
    description: 'Track and resume your coding sessions.'
  },
  {
    id: 'chat',
    label: 'AI Assistant',
    icon: MessageSquare,
    screen: 'chat',
    description: 'Chat naturally with context-aware AI.'
  },
  {
    id: 'changes',
    label: 'Track Changes',
    icon: FileCode,
    screen: 'changes',
    description: 'Review file modifications in real-time.'
  },
  {
    id: 'code',
    label: 'Code Review',
    icon: Code,
    screen: 'code',
    description: 'Track and review AI-generated code changes.'
  }
];

export default function JulesGo() {
  const [isDark, setIsDark] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // null = no selection
  const [showTextOverlay, setShowTextOverlay] = useState(false);

  // Trigger text overlay animation when activeIndex changes (only on mobile)
  useEffect(() => {
    if (activeIndex !== null) {
      setShowTextOverlay(true);
      const timer = setTimeout(() => {
        setShowTextOverlay(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen font-sans bg-slate-50">
      {/* Header (Fixed) */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group"
          >
            <img 
              src="/assets/images/julesgo-icon.svg" 
              alt="JulesGo Icon" 
              className="h-8 w-auto transition-transform duration-200 group-hover:scale-110" 
            />
            <span className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri">Jules GO</span>
          </button>
          <div className="flex items-center gap-4">
            <Link 
              to="/" 
              className="group"
              title="Back to ByteLand"
            >
              <img 
                src="/assets/images/logo.svg" 
                alt="ByteLand Logo" 
                className="h-8 w-auto transition-transform duration-200 group-hover:scale-110" 
              />
            </Link>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <a 
                href="https://jules.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 hover:bg-blue-100 transition-colors"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Powered by Google Jules
              </a>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                Code Smarter,
                <span className="block text-gradient-tri mt-2">Anywhere.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                Your AI pair programmer on the go. Seamlessly integrate planning, reasoning, and execution directly from your mobile device.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="https://jules-go.byteland.app" 
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-tri text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl shadow-blue-500/30"
                >
                  Start Coding Now
                  <ChevronRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Power Section (Moved to Second Position) */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 mb-8 backdrop-blur-md border border-white/10 shadow-xl">
                <Brain className="w-10 h-10 text-purple-300" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">Built on Google Jules API</h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
                Experience the power of Google's advanced AI model designed specifically for coding. 
                Jules GO brings this capability to your fingertips.
              </p>
              <a 
                href="https://jules-go.byteland.app" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Everything You Need</h2>
              <p className="text-lg text-slate-600">A complete development environment in your pocket.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Context Aware */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                  <Network className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Context Aware</h3>
                <p className="text-slate-600 leading-relaxed">Deep understanding of your entire repository structure and logic. Jules knows your code better than you do.</p>
              </motion.div>

              {/* Smart Chat */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Chat</h3>
                <p className="text-slate-600 leading-relaxed">Ask anything about your code. Get instant, accurate answers and suggestions based on your codebase.</p>
              </motion.div>

              {/* Secure & Private */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6 text-green-600">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Secure & Private</h3>
                <p className="text-slate-600 leading-relaxed">Your code stays safe with local storage and secure API transmission. We prioritize your privacy at every step.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Experience Section */}
        <section className="py-12 lg:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8 lg:mb-12">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Experience Jules GO</h2>
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-xs md:text-sm font-medium text-slate-700"
                >
                  {isDark ? <Moon className="w-3 h-3 md:w-4 md:h-4" /> : <Sun className="w-3 h-3 md:w-4 md:h-4" />}
                  <span className="hidden sm:inline">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>
            </div>

            {/* Mobile: Horizontal Scrollable Tabs Above Phone */}
            <div className="lg:hidden w-full mb-8">
              <div className="flex gap-3 overflow-x-auto py-3 px-2 justify-center scrollbar-hide">
                {FEATURES.map((feature, index) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveIndex(index)}
                    className={`flex-shrink-0 p-3 rounded-xl transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-gradient-tri text-white shadow-lg shadow-blue-500/20 scale-110' 
                        : 'bg-white text-slate-400 border border-slate-100 hover:bg-slate-50'
                    }`}
                    title={feature.label}
                  >
                    <feature.icon className="w-6 h-6" />
                  </button>
                ))}
              </div>
            </div>

            {/* Desktop & Mobile Content Container */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
              
              {/* Desktop: Vertical Tabs on Left */}
              <div className="hidden lg:flex flex-none z-10">
                <div className="flex flex-col gap-3">
                  {FEATURES.map((feature, index) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveIndex(index)}
                      className={`group flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 border ${
                        index === activeIndex
                          ? 'bg-white border-blue-200 shadow-lg shadow-blue-500/10 scale-105'
                          : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50'
                      }`}
                      title={feature.label}
                    >
                      <div className={`p-3 rounded-xl transition-colors duration-300 shrink-0 ${
                        index === activeIndex 
                          ? 'bg-gradient-tri text-white' 
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                      }`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      
                      <div className="w-64">
                        <div className={`font-bold text-lg transition-colors duration-300 ${index === activeIndex ? 'text-slate-900' : 'text-slate-500'}`}>
                          {feature.label}
                        </div>
                        <div className={`text-sm text-slate-500 mt-1 transition-all duration-300 overflow-hidden ${index === activeIndex ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                          {feature.description}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Phone Frame - Centered */}
              <div className="w-full lg:flex-1 flex justify-center relative px-4">
                {/* Background Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-[60px] lg:blur-[80px] -z-10"></div>
                
                <motion.div 
                  className="relative w-full max-w-[420px] lg:max-w-[350px] aspect-[430/932]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Phone Frame */}
                  <div className={`absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] border-[6px] md:border-[8px] shadow-2xl overflow-hidden z-20 transition-colors duration-500 ${
                    isDark ? 'border-slate-900 bg-slate-950' : 'border-white bg-slate-50 ring-1 ring-slate-200'
                  }`}>
                    {/* Safe Area Container */}
                    <div className="absolute inset-0 pt-12 pb-8 px-1 flex flex-col">
                      <div className={`relative flex-1 w-full h-full rounded-2xl overflow-hidden transition-colors duration-300 ${
                        activeIndex === null ? (isDark ? 'bg-black' : 'bg-white') : 'bg-transparent'
                      }`}>
                        {/* Dynamic Screen Content - Only show when activeIndex is not null */}
                        {activeIndex !== null && (
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={`${FEATURES[activeIndex].screen}-${isDark}`}
                              src={`/assets/images/jules-${FEATURES[activeIndex].screen}-${isDark ? 'dark' : 'light'}.svg`}
                              alt={FEATURES[activeIndex].label}
                              className="w-full h-full object-contain"
                              initial={{ opacity: 0, scale: 1.05 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                          </AnimatePresence>
                        )}

                        {/* Text Overlay - Shows on tab click on MOBILE ONLY, then fades out */}
                        {activeIndex !== null && (
                          <AnimatePresence>
                            {showTextOverlay && (
                              <motion.div
                                className={`lg:hidden absolute inset-0 flex flex-col items-center justify-center px-8 backdrop-blur-xl ${
                                  isDark ? 'bg-slate-950/95' : 'bg-white/95'
                                }`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="text-center space-y-4">
                                  <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                                    isDark ? 'bg-white/10' : 'bg-slate-900/10'
                                  }`}>
                                    {(() => {
                                      const Icon = FEATURES[activeIndex].icon;
                                      return <Icon className={`w-12 h-12 ${isDark ? 'text-white' : 'text-slate-900'}`} />;
                                    })()}
                                  </div>
                                  <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    {FEATURES[activeIndex].label}
                                  </h3>
                                  <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                    {FEATURES[activeIndex].description}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        )}
                      </div>
                    </div>

                    {/* Status Bar Overlay (Mock) */}
                    <div className={`absolute top-0 left-0 right-0 h-10 md:h-12 z-30 flex justify-between px-6 items-center ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <span className="text-[10px] md:text-xs font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 md:w-4 h-2 md:h-2.5 rounded-[1px] border border-current opacity-80"></div>
                        <div className="w-0.5 h-2 md:h-2.5 bg-current opacity-80"></div>
                      </div>
                    </div>
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 md:w-32 h-1 bg-slate-500/50 rounded-full z-30"></div>
                  </div>

                  {/* Reflection/Glare */}
                  <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] ring-1 ring-white/20 z-40 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent"></div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 relative border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <img src="/assets/images/julesgo-icon.svg" alt="JulesGo Icon" className="h-10 w-auto opacity-80" />
                <span className="text-2xl font-bold text-white tracking-tight">Jules GO</span>
              </div>
              
              <div className="flex gap-8 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Licenses</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
              
              <div className="flex gap-4">
                <a href="https://github.com/ByteLandTechnology" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"><Github className="w-5 h-5" /></a>
                <a href="mailto:info@byteland.app" className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-colors"><Mail className="w-5 h-5" /></a>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
              &copy; 2025 ByteLand Technology Limited. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
