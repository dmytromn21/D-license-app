import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useGetUsersQuery } from '../../graphql/generated/graphql';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  layout: {
    padding: 20,
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
      },
      suggestedMin: 30,
      suggestedMax: 80,
      ticks: {
        maxTicksLimit: 5,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        autoSkipPadding: 48,
        maxRotation: 0,
      },
    },
  },
  responsive: true,
  plugins: {
    filler: {
      propagate: false,
    },
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
  },
  maintainAspectRatio: false,
};

const data = {
  labels: [0],
  datasets: [
    {
      data: [0],
      fill: true,
      backgroundColor: '#f0f5feb8',
      borderColor: '#4f46e5',
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: '#4338ca',
      clip: 20,
      tension: 0,
    },
  ],
};

export const DashboardCard1 = () => {
  const { data: UsersByDay, loading } = useGetUsersQuery();

  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (!loading) {
      const labels = UsersByDay.countUsersByDay.map(({ _id }) => _id);
      const data = UsersByDay.countUsersByDay.map(({ count }) => count);
      const c = {
        labels,
        datasets: [
          {
            data,
            fill: true,
            backgroundColor: '#f0f5feb8',
            borderColor: '#4f46e5',
            borderWidth: 2,
            pointRadius: 0,
            pointHoverRadius: 3,
            pointBackgroundColor: '#4338ca',
            clip: 20,
            tension: 0,
          },
        ],
      };
      setChartData(c);
    }
  }, [loading]);

  return (
    <div className='col-span-full xl:col-span-6 bg-white rounded-lg border'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-slate-800'>Users per Day</h2>
      </header>
      <div className='px-5 py-3'>
        <div className='flex items-start'>
          <div className='text-3xl font-bold text-slate-800 mr-2'>449</div>
          <div className='text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full'>
            -22%
          </div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className='grow'>
        {chartData && (
          <Line options={options} data={chartData} width={595} height={248} />
        )}
      </div>
    </div>
  );
};

const chartData = {
  labels: [
    '12-01-2020',
    '01-01-2021',
    '02-01-2021',
    '03-01-2021',
    '04-01-2021',
    '05-01-2021',
    '06-01-2021',
    '07-01-2021',
    '08-01-2021',
    '09-01-2021',
    '10-01-2021',
    '11-01-2021',
    '12-01-2021',
    '01-01-2022',
    '02-01-2022',
    '03-01-2022',
    '04-01-2022',
    '05-01-2022',
    '06-01-2022',
    '07-01-2022',
    '08-01-2022',
    '09-01-2022',
    '10-01-2022',
    '11-01-2022',
    '12-01-2022',
    '01-01-2023',
  ],
  datasets: [
    // Indigo line
    {
      label: 'Current',
      data: [
        73, 64, 73, 69, 104, 104, 164, 164, 120, 120, 120, 148, 142, 104, 122,
        110, 104, 152, 166, 233, 268, 252, 284, 284, 333, 323,
      ],
      borderColor: '#22c55e',
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: '#16a34a',
    },
    // Blue line
    {
      label: 'Previous',
      data: [
        184, 86, 42, 378, 42, 243, 38, 120, 0, 0, 42, 0, 84, 0, 276, 0, 124, 42,
        124, 88, 88, 215, 156, 88, 124, 64,
      ],
      borderColor: '#ef4444',
      fill: false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: '#dc2626',
    },
  ],
};

export const DashboardCard2 = () => {
  return (
    <div className='flex flex-col col-span-full sm:col-span-6 bg-white rounded-lg border'>
      <header className='px-5 py-4 border-b border-slate-100 flex items-center'>
        <h2 className='font-semibold text-slate-800'>Test Chart</h2>
      </header>
      <div className='grow'>
        <Line options={options} data={chartData} width={595} height={248} />
      </div>
    </div>
  );
};

export const DashboardCard3 = () => {
  return (
    <div className='col-span-full xl:col-span-6 bg-white rounded-lg border'>
      <header className='px-5 py-4 border-b border-slate-100'>
        <h2 className='font-semibold text-slate-800'>Recent Activity</h2>
      </header>
      <div className='p-3'>
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2'>
            Today
          </header>
          <ul className='my-1'>
            {/* Item */}
            <li className='flex px-2'>
              <div className='w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3'>
                <svg
                  className='w-9 h-9 fill-current text-indigo-50'
                  viewBox='0 0 36 36'>
                  <path d='M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z' />
                </svg>
              </div>
              <div className='grow flex items-center border-b border-slate-100 text-sm py-2'>
                <div className='grow flex justify-between'>
                  <div className='self-center'>
                    <a
                      className='font-medium text-slate-800 hover:text-slate-900'
                      href='#0'>
                      Nick Mark
                    </a>{' '}
                    mentioned{' '}
                    <a className='font-medium text-slate-800' href='#0'>
                      Sara Smith
                    </a>{' '}
                    in a new post
                  </div>
                  <div className='shrink-0 self-end ml-2'>
                    <a
                      className='font-medium text-indigo-500 hover:text-indigo-600'
                      href='#0'>
                      View<span className='hidden sm:inline'> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className='flex px-2'>
              <div className='w-9 h-9 rounded-full shrink-0 bg-rose-500 my-2 mr-3'>
                <svg
                  className='w-9 h-9 fill-current text-rose-50'
                  viewBox='0 0 36 36'>
                  <path d='M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z' />
                </svg>
              </div>
              <div className='grow flex items-center border-b border-slate-100 text-sm py-2'>
                <div className='grow flex justify-between'>
                  <div className='self-center'>
                    The post{' '}
                    <a className='font-medium text-slate-800' href='#0'>
                      Post Name
                    </a>{' '}
                    was removed by{' '}
                    <a
                      className='font-medium text-slate-800 hover:text-slate-900'
                      href='#0'>
                      Nick Mark
                    </a>
                  </div>
                  <div className='shrink-0 self-end ml-2'>
                    <a
                      className='font-medium text-indigo-500 hover:text-indigo-600'
                      href='#0'>
                      View<span className='hidden sm:inline'> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className='flex px-2'>
              <div className='w-9 h-9 rounded-full shrink-0 bg-green-500 my-2 mr-3'>
                <svg
                  className='w-9 h-9 fill-current text-green-50'
                  viewBox='0 0 36 36'>
                  <path d='M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z' />
                </svg>
              </div>
              <div className='grow flex items-center text-sm py-2'>
                <div className='grow flex justify-between'>
                  <div className='self-center'>
                    <a
                      className='font-medium text-slate-800 hover:text-slate-900'
                      href='#0'>
                      Patrick Sullivan
                    </a>{' '}
                    published a new{' '}
                    <a className='font-medium text-slate-800' href='#0'>
                      post
                    </a>
                  </div>
                  <div className='shrink-0 self-end ml-2'>
                    <a
                      className='font-medium text-indigo-500 hover:text-indigo-600'
                      href='#0'>
                      View<span className='hidden sm:inline'> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* "Yesterday" group */}
        <div>
          <header className='text-xs uppercase text-slate-400 bg-slate-50 rounded-sm font-semibold p-2'>
            Yesterday
          </header>
          <ul className='my-1'>
            {/* Item */}
            <li className='flex px-2'>
              <div className='w-9 h-9 rounded-full shrink-0 bg-sky-500 my-2 mr-3'>
                <svg
                  className='w-9 h-9 fill-current text-sky-50'
                  viewBox='0 0 36 36'>
                  <path d='M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z' />
                </svg>
              </div>
              <div className='grow flex items-center border-b border-slate-100 text-sm py-2'>
                <div className='grow flex justify-between'>
                  <div className='self-center'>
                    <a
                      className='font-medium text-slate-800 hover:text-slate-900'
                      href='#0'>
                      240+
                    </a>{' '}
                    users have subscribed to{' '}
                    <a className='font-medium text-slate-800' href='#0'>
                      Newsletter #1
                    </a>
                  </div>
                  <div className='shrink-0 self-end ml-2'>
                    <a
                      className='font-medium text-indigo-500 hover:text-indigo-600'
                      href='#0'>
                      View<span className='hidden sm:inline'> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className='flex px-2'>
              <div className='w-9 h-9 rounded-full shrink-0 bg-indigo-500 my-2 mr-3'>
                <svg
                  className='w-9 h-9 fill-current text-indigo-50'
                  viewBox='0 0 36 36'>
                  <path d='M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z' />
                </svg>
              </div>
              <div className='grow flex items-center text-sm py-2'>
                <div className='grow flex justify-between'>
                  <div className='self-center'>
                    The post{' '}
                    <a className='font-medium text-slate-800' href='#0'>
                      Post Name
                    </a>{' '}
                    was suspended by{' '}
                    <a
                      className='font-medium text-slate-800 hover:text-slate-900'
                      href='#0'>
                      Nick Mark
                    </a>
                  </div>
                  <div className='shrink-0 self-end ml-2'>
                    <a
                      className='font-medium text-indigo-500 hover:text-indigo-600'
                      href='#0'>
                      View<span className='hidden sm:inline'> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
