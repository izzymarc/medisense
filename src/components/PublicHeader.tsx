import { Activity } from 'lucide-react';
    import { NavLink } from './NavLink';

    export function PublicHeader() {
      return (
        <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <NavLink to="/" variant="default">
                <div className="flex items-center space-x-3">
                  <Activity className="h-8 w-8" />
                  <h1 className="text-2xl font-bold">MediSense AI</h1>
                </div>
              </NavLink>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signin" variant="button">Sign In</NavLink>
                  </li>
                  <li>
                    <NavLink to="/register" variant="button">Register</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
    }
