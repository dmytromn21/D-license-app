import { DocumentDownloadIcon } from '@heroicons/react/outline';
import { useGetUsersQuery } from '../../graphql/generated/graphql';
import { RowTable } from '../../components/Dashboard/Table';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

export const Users = () => {
  const { data, loading } = useGetUsersQuery();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!loading) {
      setUsers(data?.getUsers);
    }
  }, [loading]);

  const handleInput = debounce((e: any) => {
    // filter users by name
    const filter = e.target.value;

    if (filter) {
      const filteredUsers = data?.getUsers.filter((user) => {
        return (
          user.name.toLowerCase().includes(filter.toLowerCase()) ||
          user.email.toLowerCase().includes(filter.toLowerCase())
        );
      });
      setUsers(filteredUsers);
    } else {
      setUsers(data?.getUsers);
    }
  }, 500);

  const exportUsers = () => {
    console.log('export users');
    // ipcRenderer
  };

  return (
    <>
      <div className='px-6 mx-auto my-6'>
        <div className='sm:flex'>
          <div className='hidden sm:flex items-center sm:divide-x sm:divide-gray-100 mb-3 sm:mb-0'>
            <form className='lg:pr-3' action='#' method='GET'>
              <label htmlFor='users-search' className='sr-only'>
                Search
              </label>
              <div className='mt-1 relative lg:w-64 xl:w-96'>
                <input
                  onInput={handleInput}
                  type='text'
                  name='email'
                  id='users-search'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5'
                  placeholder='Search for users'
                />
              </div>
            </form>
          </div>
          <div className='flex items-center space-x-2 sm:space-x-3 ml-auto'>
            <button
              onClick={exportUsers}
              className='text-gray-900 bg-white transition border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-400 font-medium flex gap-2 items-center justify-center rounded-lg text-sm px-3 py-2 '>
              <DocumentDownloadIcon className='w-5 h-5' />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full mt-4'>
        <div className='flex justify-between px-6 py-2'>
          <h2 className='font-bold text-lg'>Latest users</h2>
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
              {users.map((user) => (
                <RowTable key={user.id} {...user} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
