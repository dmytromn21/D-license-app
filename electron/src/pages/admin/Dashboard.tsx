import { Outlet } from 'react-router-dom';
import { SideBar } from '../../components/Dashboard/SideBar';
import { Header } from '../../components/Dashboard/DashboardHeader';

export const Dashboard = () => {
  return (
    <div className='flex h-screen bg-gray-50'>
      <SideBar />
      <div className='flex flex-col flex-1'>
        <Header />
        <main className='h-full overflow-y-auto bg-white scrollbar-hide'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
