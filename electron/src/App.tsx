import { Thankyou } from './pages/thankyou';
import Final from './pages/Final';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Quiz } from './pages/Quiz';
import { Landing } from './pages/Landing';
import { Dashboard, Chart, LoginAdmin, Users } from './pages';
import { IndexDashboard } from './components/Dashboard/IndexDashboard';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';

declare global {
  interface Window {
    electron: {
      notification: {
        show: (options: any) => void;
      };
    };
  }
}

const Button = () => {
  const handle = () => {
    console.log(window.electron.notification.show('aaaa'));
  };

  return (
    <div>
      <button onClick={handle}>click</button>
    </div>
  );
};

const App = () => {
  return <Button />;

  const { pathname } = useLocation();
  const [offline, setOffline] = useState(true);

  const path = pathname.replace('/index', '') || '/';

  const updateOnlineStatus = () => {
    setOffline(navigator.onLine);
    !navigator.onLine
      ? toast((t) => (
          <span>
            <b>YOU ARE OFFLINE</b>
            <button
              className='px-2 ml-10 rounded-lg bg-red-300'
              onClick={() => toast.dismiss(t.id)}>
              close
            </button>
          </span>
        ))
      : toast.dismiss();
  };

  useEffect(() => {
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
  }, []);

  return (
    <div className={!offline ? `grayscale` : ''}>
      <Routes location={path}>
        <Route path='/' element={<Landing />} />
        <Route path='/admin' element={<Dashboard />}>
          <Route index element={<IndexDashboard />} />
          <Route path='login' element={<LoginAdmin />} />
          <Route path='home' element={<IndexDashboard />} />
          <Route path='charts' element={<Chart />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='/quiz' element={<Quiz />} />
        <Route path='submit' element={<Final />} />
        <Route path='/thankyou' element={<Thankyou />} />
      </Routes>
      {!offline && (
        <div className='absolute top-0 left-0 w-screen h-screen'></div>
      )}
      <Toaster
        toastOptions={{
          // Define default options
          duration: 30000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
        position='bottom-center'
        reverseOrder={false}
      />
    </div>
  );
};

export default App;
