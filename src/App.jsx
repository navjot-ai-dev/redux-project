import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import HomePage from './HomePage';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('media-theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('media-theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const themeVars = isDark
    ? {
        '--accent': '#22c55e',
        '--accent-strong': '#16a34a',
        '--accent-soft': '#4ade80',
        '--surface': 'rgba(10, 16, 10, 0.88)',
        '--surface-2': 'rgba(20, 28, 20, 0.95)',
        '--border': 'rgba(74, 222, 128, 0.25)',
        '--text': '#f5fff6',
        '--page-bg': '#030703',
      }
    : {
        '--accent': '#38bdf8',
        '--accent-strong': '#10b981',
        '--accent-soft': '#facc15',
        '--surface': 'rgba(255, 255, 255, 0.9)',
        '--surface-2': 'rgba(255, 250, 235, 0.95)',
        '--border': 'rgba(14, 116, 144, 0.2)',
        '--text': '#16312a',
        '--page-bg': '#f7f8ec',
      };

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${isDark ? 'theme-dark' : 'theme-light'}`}
      style={themeVars}
    >
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute left-[-5%] top-0 h-40 w-40 rounded-full bg-green-500/10 blur-3xl animate-float'></div>
        <div className='absolute right-[-3%] top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl animate-float' style={{ animationDelay: '2s' }}></div>
      </div>

      <div className='relative z-10' style={{ backgroundColor: 'var(--page-bg)', color: 'var(--text)' }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path='/' element={<HomePage theme={theme} />} />
          <Route path='/collection' element={<CollectionPage theme={theme} />} />
        </Routes>
        <ToastContainer theme={isDark ? 'dark' : 'light'} />
      </div>
    </div>
  );
};

export default App