import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, FileText, Database, Beaker, BarChart2, Users, FileCode } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', text: 'Home', icon: <FileText size={18} /> },
    { to: '/dataset', text: 'Dataset', icon: <Database size={18} /> },
    { to: '/methodology', text: 'Methodology', icon: <Beaker size={18} /> },
    { to: '/results', text: 'Results', icon: <BarChart2 size={18} /> },
    { to: '/team', text: 'Team', icon: <Users size={18} /> },
    { to: '/report', text: 'Report', icon: <FileCode size={18} /> },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:justify-center">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `nav-link flex items-center ${isActive ? 'active' : ''}`
                }
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.text}
              </NavLink>
            ))}
          </div>
          
          <div className="md:hidden">
            {/* Empty div to maintain flex spacing */}
            <div className="w-6"></div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 py-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => 
                  `nav-link flex items-center px-4 py-2 ${isActive ? 'active bg-blue-50 rounded' : ''}`
                }
              >
                <span className="mr-2">{link.icon}</span>
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;