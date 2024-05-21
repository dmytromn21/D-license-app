import { UserGroupIcon } from '@heroicons/react/solid';
import {
  ChartSquareBarIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import { useState } from 'react';
import { useGetUsersQuery } from '../../graphql/generated/graphql';

const StatCard = ({ icon, color, title, value }: any) => {
  return (
    <div className='flex items-center border p-4 bg-slate-50 rounded-lg shadow-sm'>
      <div
        className={`p-3 mr-4 text-white bg-orange-100 rounded-full ${color}`}>
        {icon}
      </div>
      <div>
        <p className='mb-2 text-sm font-medium text-gray-600'>{title}</p>
        {value ? (
          <p className='text-lg font-semibold text-gray-700'>{value}</p>
        ) : (
          <p className='text-lg font-semibold text-gray-700'>loading ...</p>
        )}
      </div>
    </div>
  );
};

export const StatsCards = () => {
  const { loading, data } = useGetUsersQuery();
  const [stats, setStats] = useState([
    {
      title: 'Total clients',
      icon: <UserGroupIcon className='w-5 h-5' />,
      color: 'bg-orange-500',
    },
    {
      title: 'Total pass tests',
      icon: <ChartSquareBarIcon className='w-5 h-5' />,
      color: 'bg-green-500',
    },
    {
      title: 'Total fail in tests',
      icon: <ClipboardListIcon className='w-5 h-5' />,
      color: 'bg-blue-500',
    },
  ]);

  return (
    <div className='space-y-2'>
      <h2 className='font-bold text-lg'>Overview</h2>
      <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} value={data?.countUsers} />
        ))}
      </div>
    </div>
  );
};
