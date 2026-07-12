import { Routes,Route } from 'react-router-dom';
import CollectionPage from './pages/CollectionPage';
import HomePage from './HomePage';
import Navbar from './components/Navbar';
 import { ToastContainer } from 'react-toastify';

const App = () => {
  
  

  return (
    <div className='min-h-screen w-full bg-gray-950 text-white '>
        
        <Navbar />

    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/collection' element={<CollectionPage />}/>
    </Routes>
     
     <ToastContainer 
      
     />
      </div>
  )
}

export default App