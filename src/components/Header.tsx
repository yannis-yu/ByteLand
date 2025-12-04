import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PAGE_CONFIG: Record<
  string,
  { title: string; icon: string; color: string; id: string }
> = {
  "/jules-go": {
    title: "Jules GO",
    icon: "/assets/images/julesgo-icon.svg",
    color: "text-gradient-tri",
    id: "jules-go",
  },
  "/seelist": {
    title: "SeeList",
    icon: "/assets/images/seelist-icon.svg",
    color: "text-gradient-tri",
    id: "seelist",
  },
  "/joydex": {
    title: "JoyDex",
    icon: "/assets/images/joydex-icon.svg",
    color: "text-gradient-tri",
    id: "joydex",
  },
  "/blog": {
    title: "ByteLog",
    icon: "/assets/images/bytelog-icon.svg",
    color: "text-gradient-tri",
    id: "bytelog",
  },
};

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const pageData =
    PAGE_CONFIG[location.pathname] ||
    (location.pathname.startsWith("/blog") ? PAGE_CONFIG["/blog"] : null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#products", label: "Products" },
    { to: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 pointer-events-auto">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-2 min-w-[200px]">
          {isHome && (
            // HOME STATE: ByteLand Logo & Title
            <Link
              to="/"
              className="flex items-center gap-2 group"
              key="home-logo"
            >
              <motion.div
                layoutId="byteland-group"
                className="flex items-center gap-2"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                <img
                  src="/assets/images/logo.svg"
                  alt="ByteLand Logo"
                  className="h-8 w-auto"
                />
                <motion.span
                  layoutId="byteland-title"
                  className="text-2xl font-extrabold tracking-tight font-brand text-gradient-tri whitespace-nowrap overflow-hidden"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  transition={{
                    layout: { type: "spring", bounce: 0.2, duration: 0.6 },
                    width: {
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    },
                    opacity: { delay: 0.5, duration: 0.4 },
                  }}
                >
                  ByteLand
                </motion.span>
              </motion.div>
            </Link>
          )}

          <AnimatePresence mode="popLayout">
            {!isHome && (
              // OTHER PAGE STATE: Page Icon & Title
              <motion.div
                className="flex items-center gap-2"
                key="page-logo"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                {pageData && (
                  <>
                    <motion.img
                      layoutId={`icon-${pageData.id}`}
                      src={pageData.icon}
                      alt={`${pageData.title} Icon`}
                      className="h-8 w-auto"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                    <motion.span
                      layoutId={`title-${pageData.id}`}
                      className={`text-2xl font-extrabold tracking-tight font-brand ${pageData.color}`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -50, opacity: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    >
                      {pageData.title}
                    </motion.span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* ByteLand Icon on non-home pages */}
          {!isHome && (
            <Link
              to="/"
              className="flex items-center gap-2 group"
              title="Back to ByteLand"
              key="right-logo"
            >
              <motion.div
                layoutId="byteland-group"
                className="flex items-center gap-2"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              >
                <img
                  src="/assets/images/logo.svg"
                  alt="ByteLand Logo"
                  className="h-8 w-auto"
                />
                <motion.span
                  layoutId="byteland-title"
                  className="text-xl font-extrabold tracking-tight font-brand text-gradient-tri whitespace-nowrap overflow-hidden"
                  initial={{ opacity: 1, width: "auto" }}
                  animate={{ opacity: 0, width: 0 }}
                  exit={{ opacity: 1, width: "auto" }}
                  transition={{
                    layout: { type: "spring", bounce: 0.2, duration: 0.6 },
                    width: {
                      delay: 0.5,
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    },
                    opacity: { delay: 0.5, duration: 0.4 },
                  }}
                >
                  ByteLand
                </motion.span>
              </motion.div>
            </Link>
          )}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-slate-900 transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  {/* X icon with theme colors */}
                  <line x1="18" y1="6" x2="6" y2="18" stroke="#007AFF" />
                  <line x1="6" y1="6" x2="18" y2="18" stroke="#FF3B30" />
                </>
              ) : (
                <>
                  {/* Hamburger with BGR lines */}
                  <line x1="3" y1="6" x2="21" y2="6" stroke="#007AFF" />
                  <line x1="3" y1="12" x2="21" y2="12" stroke="#34C759" />
                  <line x1="3" y1="18" x2="21" y2="18" stroke="#FF3B30" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 pointer-events-auto overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3 text-sm font-medium text-slate-600">
              {navLinks.map((link) =>
                link.to ? (
                  <Link
                    key={link.label}
                    to={link.to}
                    className="py-2 px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="py-2 px-3 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
