import { Link } from 'react-router-dom';
import { useGetUsersQuery, User } from '../../graphql/generated/graphql';

export const RowTable = ({ name, cin, score, email, createdAt }: User) => {
  const isPassed = true;

  return (
    <tr className='text-gray-700'>
      <td className='px-4 py-3'>
        <div className='flex items-center text-sm'>
          <div className='relative hidden w-8 h-8 mr-3 rounded-full md:block'>
            <img
              className='object-cover w-full h-full rounded-full'
              src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              loading='lazy'
            />
          </div>
          <div>
            <p className='font-semibold'>{name}</p>
            <p className='text-xs text-gray-600'>{cin}</p>
          </div>
        </div>
      </td>
      <td className='px-4 py-3 text-sm'>{email}</td>
      <td className='px-4 py-3 text-sm'>{score}</td>
      <td className='px-4 py-3 text-xs'>
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            isPassed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
          {isPassed ? 'Passed' : 'Failed'}
        </span>
      </td>
      <td className='px-4 py-3 text-sm'>
        {new Intl.DateTimeFormat('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(+createdAt))}
      </td>
    </tr>
  );
};

export const Table = () => {
  const { data } = useGetUsersQuery();

  return (
    <div className='w-full mt-4'>
      <div className='flex justify-between px-6 py-2'>
        <h2 className='font-bold text-lg'>Latest users</h2>
        <span className='cursor-pointer text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2'>
          <Link to='/admin/users'>View all</Link>
        </span>
      </div>
      <div className='w-full overflow-x-auto'>
        <table className='w-full whitespace-no-wrap'>
          <thead>
            <tr className='text-xs font-semibold text-left text-gray-500 uppercase border-y shadow bg-slate-50'>
              <th className='px-4 py-3'>Client</th>
              <th className='px-4 py-3'>Email</th>
              <th className='px-4 py-3'>Score</th>
              <th className='px-4 py-3'>Status</th>
              <th className='px-4 py-3'>Date</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y'>
            {data?.getUsers.map((user) => (
              <RowTable key={user.id} {...user} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
