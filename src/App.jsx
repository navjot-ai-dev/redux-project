import { Routes, Route } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import HomePage from './HomePage';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-[#030703] text-[#f5fff6]'>
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute left-[-5%] top-0 h-56 w-56 rounded-full bg-green-500/10 blur-3xl animate-float'></div>
        <div className='absolute right-[-3%] top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl animate-float' style={{ animationDelay: '2s' }}></div>
      </div>

      <div className='relative z-10'>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/collection' element={<CollectionPage />} />
        </Routes>
        <ToastContainer theme='dark' />
      </div>
    </div>
  );
};

export default App