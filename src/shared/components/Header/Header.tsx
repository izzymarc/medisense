import React from 'react';
import { NavLink } from '../NavLink';
import { useAuth } from '../../../presentation/contexts/AuthContext';
import { Button } from '../Button';
import { useTranslation } from '../../hooks/useTranslation';

export function Header() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();

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
                    <NavLink to="/dashboard" aria-label={t('dashboard')}>
                      {t('dashboard')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/history" aria-label={t('history')}>
                      {t('history')}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile" aria-label={t('profile')}>
                      {t('profile')}
                    </NavLink>
                  </li>
                  <li>
                    <Button
                      onClick={logout}
                      aria-label={t('logout')}
                      className="bg-white text-blue-600 hover:bg-blue-50"
                    >
                      {t('logout')}
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
