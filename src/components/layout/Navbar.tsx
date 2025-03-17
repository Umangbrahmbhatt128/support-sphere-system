
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser } from '@/utils/mock-data';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentUser = getCurrentUser();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Desktop Navigation */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-primary font-bold text-xl mr-1">Support</span>
                <span className="text-gray-700 font-medium text-xl">Sphere</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link 
                to="/dashboard" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Dashboard
              </Link>
              <Link 
                to="/tickets" 
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              >
                Tickets
              </Link>
            </div>
          </div>

          {/* User Profile and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="relative mr-2">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
              
              <Link to="/profile" className="ml-2 flex items-center">
                <span className="hidden md:block mr-2 text-sm font-medium text-gray-700">
                  {currentUser.name}
                </span>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="ml-2 flex items-center sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 animate-fade-in">
          <Link
            to="/dashboard"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            to="/tickets"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tickets
          </Link>
          <Link
            to="/profile"
            className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
