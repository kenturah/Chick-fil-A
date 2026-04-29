import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Locations', href: '#locations' },
    { name: 'Rewards', href: '#rewards' },
    { name: 'Careers', href: '#careers' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300 h-16 flex items-center border-b",
      isScrolled ? "bg-white border-gray-100 shadow-sm" : "bg-white/90 backdrop-blur-md border-transparent"
    )}>
      <div className="max-w-7xl w-full mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-10">
          <a href="#" className="text-2xl font-bold italic text-[#E51636] tracking-tighter">Chick-fil-A</a>
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#E51636] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-[10px] font-bold text-[#E51636] uppercase tracking-widest bg-red-50 px-3 py-1 rounded">
            Closed Sundays
          </span>
          <Button size="sm" className="hidden sm:flex">Order Now</Button>
          
          <button className="lg:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-gray-600 font-semibold hover:text-[#E51636] py-2 border-b border-gray-50 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="mt-4">Order Now</Button>
        </div>
      )}
    </nav>
  );
};
