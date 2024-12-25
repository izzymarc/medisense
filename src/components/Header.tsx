import React, { useState } from 'react';
import { Activity, Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isAuthenticated = false; // TODO: Replace with actual auth state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink href="/" className="flex items-center space-x-3">
            <Activity className="h-8 w-8" />
            <h1 className="text-2xl font-bold">MediSense AI</h1>
          </NavLink>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <NavLink href="/about">About</NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                  </li>
                  <li>
                    <NavLink href="/history">History</NavLink>
                  </li>
                  <li>
                    <NavLink href="/profile" variant="button">Profile</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink href="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink href="/signin">Sign In</NavLink>
                  </li>
                  <li>
                    <NavLink href="/register" variant="button">Get Started</NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="space-y-4">
              <li>
                <NavLink href="/about" onClick={() => setIsMenuOpen(false)}>
                  About
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <NavLink href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/history" onClick={() => setIsMenuOpen(false)}>
                      History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/profile" onClick={() => setIsMenuOpen(false)}>
                      Profile
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Contact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/signin" onClick={() => setIsMenuOpen(false)}>
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/register" onClick={() => setIsMenuOpen(false)}>
                      Get Started
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
