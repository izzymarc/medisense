import React from 'react';
import { NavLink } from '../NavLink';
import { useAuth } from '../../../presentation/contexts/AuthContext';
import { Button } from '../Button';

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <NavLink to="/" variant="default">
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold">MediSense AI</h1>
            </div>
          </NavLink>
          <nav>
            <ul className="flex space-x-6">
              {user && (
                <>
                  <li>
                    <NavLink to="/dashboard" aria-label="Dashboard">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/history" aria-label="History">
                      History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" aria-label="Profile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <Button
                      onClick={logout}
                      aria-label="Logout"
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      Logout
                    </Button>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
