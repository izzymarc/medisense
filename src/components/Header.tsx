import { Activity } from 'lucide-react';
    import { NavLink } from './NavLink';
    import { useAuth } from '../contexts/AuthContext';

    export function Header() {
      const { logout, user, isAuthenticated } = useAuth();

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
                  {isAuthenticated && (
                    <>
                      <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                      </li>
                      <li>
                        <NavLink to="/history">History</NavLink>
                      </li>
                      <li>
                        <NavLink to="/profile">Profile</NavLink>
                      </li>
                    </>
                  )}
                  {user && (
                    <li>
                      <button onClick={logout} className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                        Logout
                      </button>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </header>
      );
    }
