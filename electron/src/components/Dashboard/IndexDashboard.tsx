import { StatsCards } from './Cards';
import { CTA } from './CTA';
import { Table } from './Table';

export const IndexDashboard = () => {
  return (
    <>
      <div className='container px-6 mx-auto grid'>
        <h2 className='my-6 text-2xl font-semibold text-gray-700'>Dashboard</h2>
        <CTA />
        <StatsCards />
      </div>
      <Table />
    </>
  );
};
