export const ProfileSideBar = () => {
  return (
    <div className='flex space-x-4 items-center ml-6 my-4'>
      <img
        src='https://pbs.twimg.com/profile_images/1413609823359410183/lhlXgJoL_400x400.jpg'
        className='shadow-sm ring-2 ring-blue-500 w-10 h-10 p-1 rounded-full object-cover'
      />
      <div className='flex flex-col space-y-1'>
        <p className='font-bold text-slate-900 text-xs'>Ryan Florence</p>
        <p className='font-bold text-slate-500 text-xs'>@RyanFlorence</p>
      </div>
    </div>
  );
};
