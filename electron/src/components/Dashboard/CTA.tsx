import { ArrowRightIcon, StarIcon } from '@heroicons/react/solid';

export const CTA = () => {
  return (
    <button className='flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple'>
      <div className='flex items-center'>
        <StarIcon className='w-5 h-5 mr-2' />
        <span>some cta here baby</span>
      </div>
      <ArrowRightIcon className='w-5 h-5 mr-2' />
    </button>
  );
};
