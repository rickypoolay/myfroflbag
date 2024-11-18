import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Discs from './pages/Discs';
import Bags from './pages/Bags';
import { useEffect } from 'react';
import { ThemeProvider } from './components/ThemeProvider';

function App() {
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '') {
      location.pathname = '/bags';
    }
  }, [location.href]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/bags' element={<Bags />} />
        <Route path='discs' element={<Discs />} />
      </>
    )
  );

  return (
    <ThemeProvider defaultTheme='dark' storageKey='mydiscbag-ui-theme'>
      <div className='text-white'>
        <div className='flex max-w-7xl mx-auto pt-10'>
          <Navbar />
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
