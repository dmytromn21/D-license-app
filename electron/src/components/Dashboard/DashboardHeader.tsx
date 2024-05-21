import { SearchIcon } from '@heroicons/react/solid';
export const Header = () => {
  return (
    <header className='z-10 py-4 bg-white border-b'>
      <div className='container flex items-center justify-between h-full px-6 mx-auto text-purple-600 '>
        <div className='flex justify-center flex-1'>
          <div className='relative w-full max-w-xl mr-6 focus-within:text-purple-500'>
            <div className='absolute inset-y-0 flex items-center pl-3'>
              <SearchIcon className='w-5 h-5 text-slate-300' />
            </div>

            <input
              className='transition shadow-sm focus:ring-2 focus:ring-blue-500 border-none appearance-none w-full text-slate-900 placeholder-slate-400  rounded-lg py-2 pl-10 ring-1 ring-slate-900/10'
              type='text'
              placeholder='Filter projects...'
            />
          </div>
        </div>
      </div>
    </header>
  );
};
