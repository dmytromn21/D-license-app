import {
  ChartSquareBarIcon,
  HomeIcon,
  LoginIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { ProfileSideBar } from './ProfileSideBar';

const links = [
  {
    name: 'Home',
    icon: <HomeIcon className='w-5 h-5' />,
    to: 'home',
  },
  {
    name: 'Charts',
    icon: <ChartSquareBarIcon className='w-5 h-5' />,
    to: 'charts',
  },
  {
    name: 'Users',
    icon: <UsersIcon className='w-5 h-5' />,
    to: 'users',
  },
  {
    name: 'Page',
    icon: <LoginIcon className='w-5 h-5' />,
    to: 'login',
  },
];

export const SideBar = () => {
  return (
    <aside className='z-20 hidden w-64 overflow-y-auto bg-zinc-100 border md:block flex-shrink-0'>
      <div className='py-4 text-gray-500 '>
        <ProfileSideBar />
        {links.map((link) => (
          <ul key={link.name}>
            <li className='relative px-6 py-3'>
              <Link
                to={link.to}
                className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800'>
                {link.icon}
                <span className='ml-4'>{link.name}</span>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </aside>
  );
};
