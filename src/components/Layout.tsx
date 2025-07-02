import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, FileText, Shield, Users, Mail } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/termsandconditions', label: 'Terms & Conditions', icon: FileText },
    { path: '/privacypolicy', label: 'Privacy Policy', icon: Shield },
    { path: '/codeofconduct', label: 'Code of Conduct', icon: Users },
    { path: '/support', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-2xl font-bold text-slate-800 hover:text-yellow-600 transition-colors duration-200"
            >
              <img 
                src="/src/assets/Otanu Logo No Background.png" 
                alt="Otanu Logo" 
                className="w-8 h-8 object-contain"
              />
              <span>Otanu</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map(({ path, label, icon: Icon }) => (
                <Link
                  key={path}
                  to={path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === path
                      ? 'bg-yellow-50 text-yellow-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <select 
                className="bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm"
                value={location.pathname}
                onChange={(e) => window.location.href = e.target.value}
              >
                {navItems.map(({ path, label }) => (
                  <option key={path} value={path}>{label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/src/assets/Otanu Logo No Background.png" 
                  alt="Otanu Logo" 
                  className="w-8 h-8 object-contain"
                />
                <span className="text-xl font-bold text-white">Otanu</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                Building the future of digital experiences. Stay tuned for something amazing.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                {navItems.slice(1, -1).map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className="block text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-slate-400">
                <Link
                  to="/support"
                  className="block hover:text-white transition-colors duration-200"
                >
                  Get in Touch
                </Link>
                <p>info@otanuapp.com</p>
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 mt-8 text-center text-slate-400">
            <p>&copy; 2025 Otanu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;