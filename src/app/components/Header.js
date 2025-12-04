'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCurrency, CURRENCIES } from "../context/CurrencyContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currency, setCurrency } = useCurrency();
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Tour Packages", href: "/#packages" },
    { name: "Transfer Services", href: "/#transfer" },
    { name: "Activities", href: "/#activities" },
    { name: "Transportation", href: "/transportation" },
    
  ];

  const smoothScrollToHash = (hash) => {
    const id = (hash || '').replace('#', '');
    const el = typeof document !== 'undefined' ? document.getElementById(id) : null;
    if (!el) return;
    const headerEl = typeof document !== 'undefined' ? document.querySelector('header') : null;
    const headerHeight = headerEl?.offsetHeight || 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8; // small padding
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const handleNavClick = (href, isMobile = false) => {
    const perform = () => {
      if (href.startsWith('/#')) {
        const hash = href.substring(href.indexOf('#'));
        if (pathname === '/') {
          smoothScrollToHash(hash);
        } else {
          router.push(href);
          setTimeout(() => smoothScrollToHash(hash), 80);
        }
      } else {
        router.push(href);
      }
    };

    if (isMobile) {
      setIsMobileMenuOpen(false);
      setTimeout(perform, 150); // wait for menu close animation
    } else {
      perform();
    }
  };

  // When landing on home with a hash in URL, ensure smooth scroll after render
  useEffect(() => {
    if (pathname === '/' && typeof window !== 'undefined') {
      const { hash } = window.location;
      if (hash) {
        setTimeout(() => smoothScrollToHash(hash), 80);
      }
    }
  }, [pathname]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "62895421657803"; // Replace with your WhatsApp number
    const message = "Hi, I'm interested in booking a Bali tour package. Can you help me with more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed w-full z-50 bg-white/90 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" aria-label="Go to home" className="flex items-center gap-2 text-white">
            <Image className="rounded-full" src="/EXTS.webp" alt="Travel Logo" width={36} height={36} />
            <span className="text-2xl font-bold text-slate-700">EXTS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 font-medium hover:text-slate-900 transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-2">
              {/* <label htmlFor="currency" className="text-slate-600 text-sm">Currency</label> */}
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="border border-slate-300 rounded-sm px-3 py-3 text-sm text-slate-600"
              >
                <option value={CURRENCIES.IDR}>IDR</option>
                <option value={CURRENCIES.USD}>USD</option>
                <option value={CURRENCIES.AUD}>AUD</option>
              </select>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-5 py-2 rounded-full shadow hover:bg-green-600 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consult on WhatsApp
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href, true);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-2 px-3">
                {/* <label htmlFor="currency-mobile" className="text-slate-600 text-sm">Currency</label> */}
                <select
                  id="currency-mobile"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="border border-slate-300 rounded-md px-3 py-3 text-sm text-slate-600"
                >
                  <option value={CURRENCIES.IDR}>IDR</option>
                  <option value={CURRENCIES.USD}>USD</option>
                  <option value={CURRENCIES.AUD}>AUD</option>
                </select>
              </div>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full mt-4 bg-green-500 text-white px-5 py-2 rounded-full shadow hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consult on WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
