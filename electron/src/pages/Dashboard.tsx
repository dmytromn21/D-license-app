import {
  SearchIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  StarIcon,
} from "@heroicons/react/solid";
import {
  ChartSquareBarIcon,
  HomeIcon,
  ClipboardListIcon,
} from "@heroicons/react/outline";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ProfileSideBar = () => {
  return (
    <div className="flex space-x-4 items-center ml-6 mt-4">
      <img
        src="https://pbs.twimg.com/profile_images/1413609823359410183/lhlXgJoL_400x400.jpg"
        className="shadow-sm ring-2 ring-blue-500 w-10 h-10 p-1 rounded-full object-cover"
      />
      <div className="flex flex-col space-y-1">
        <p className="font-bold text-slate-900 text-xs">Ryan Florence</p>
        <p className="font-bold text-slate-500 text-xs">@RyanFlorence</p>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <button className="flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:shadow-outline-purple">
      <div className="flex items-center">
        <StarIcon className="w-5 h-5 mr-2" />
        <span>some cta here baby</span>
      </div>
      <ArrowRightIcon className="w-5 h-5 mr-2" />
    </button>
  );
};

const StatCard = ({ icon, color, title, value }: any) => {
  return (
    <div className="flex items-center border p-4 bg-slate-50 rounded-lg shadow-sm">
      <div
        className={`p-3 mr-4 text-white bg-orange-100 rounded-full ${color}`}
      >
        {icon}
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  );
};

const RowTable = ({ title, value }: any) => {
  const isPassed = true;

  return (
    <tr className="text-gray-700">
      <td className="px-4 py-3">
        <div className="flex items-center text-sm">
          <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              loading="lazy"
            />
          </div>
          <div>
            <p className="font-semibold">Hans Burger</p>
            <p className="text-xs text-gray-600">10x Developer</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-sm">$ 863.45</td>
      <td className="px-4 py-3 text-xs">
        <span
          className={`px-3 py-1 text-xs font-semibold rounded-full ${
            isPassed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {isPassed ? "Passed" : "Failed"}
        </span>
      </td>
      <td className="px-4 py-3 text-sm">6/10/2020</td>
    </tr>
  );
};

const Table = () => {
  return (
    <div className="w-full overflow-hidden mt-4">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead>
            <tr className="text-xs font-semibold text-left text-gray-500 uppercase border-y shadow bg-slate-50">
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            <RowTable />
            <RowTable />
            <RowTable />
            <RowTable />
            <RowTable />
            <RowTable />
          </tbody>
        </table>
      </div>
      <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t bg-slate-50 sm:grid-cols-9">
        <span className="flex items-center col-span-3">
          Showing 21-30 of 100
        </span>
        <span className="col-span-2"></span>

        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
          <nav aria-label="Table navigation">
            <ul className="inline-flex items-center">
              <li>
                <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple">
                  <ArrowLeftIcon className="w-4 h-4 fill-current" />
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  1
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  2
                </button>
              </li>
              <li>
                <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                  3
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  4
                </button>
              </li>
              <li>
                <span className="px-3 py-1">...</span>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  8
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                  9
                </button>
              </li>
              <li>
                <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple">
                  <ArrowRightIcon className="w-4 h-4 fill-current" />
                </button>
              </li>
            </ul>
          </nav>
        </span>
      </div>
    </div>
  );
};

const StatsCards = () => {
  const [stats, setStats] = useState([
    {
      title: "Total clients",
      value: "6389",
      icon: <UserGroupIcon className="w-5 h-5" />,
      color: "bg-orange-500",
    },
    {
      title: "Total pass tests",
      value: "6389",
      icon: <ChartSquareBarIcon className="w-5 h-5" />,
      color: "bg-green-500",
    },
    {
      title: "Total fail in tests",
      value: "6389",
      icon: <ClipboardListIcon className="w-5 h-5" />,
      color: "bg-blue-500",
    },
  ]);

  return (
    <div className="space-y-2 ">
      <h2 className="font-bold text-lg">Overview</h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="h-full overflow-y-auto bg-white scrollbar-hide">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <>
      <div className="container px-6 mx-auto grid">
        <h2 className="my-6 text-2xl font-semibold text-gray-700">Dashboard</h2>
        <CTA />
        <StatsCards />
      </div>
      <Table />
    </>
  );
};

const SideBar = () => {
  return (
    <aside className="z-20 hidden w-64 overflow-y-auto bg-zinc-100 border md:block flex-shrink-0">
      <div className="py-4 text-gray-500 ">
        <span className="ml-6 text-lg font-bold text-gray-800">Workflow</span>
        <ProfileSideBar />
        <ul className="mt-6">
          <li className="relative px-6 py-3">
            <Link
              to="home"
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800"
            >
              <HomeIcon className="w-5 h-5" />
              <span className="ml-4">Dashboard</span>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="relative px-6 py-3">
            <Link
              to="forms"
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
            >
              <ClipboardListIcon className="w-5 h-5" />
              <span className="ml-4">Forms</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link
              to="charts"
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
            >
              <ChartSquareBarIcon className="w-5 h-5" />
              <span className="ml-4">Charts</span>
            </Link>
          </li>
          <li className="relative px-6 py-3">
            <Link
              to="/"
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 "
            >
              <ChartSquareBarIcon className="w-5 h-5" />
              <span className="ml-4">Landing</span>
            </Link>
          </li>
        </ul>
        <div className="px-6 my-6"></div>
      </div>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="z-10 py-4 bg-white border-b">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 ">
        <div className="flex justify-center flex-1">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="w-5 h-5 text-slate-300" />
            </div>

            <input
              className="transition shadow-sm focus:ring-2 focus:ring-blue-500 border-none appearance-none w-full text-slate-900 placeholder-slate-400  rounded-lg py-2 pl-10 ring-1 ring-slate-900/10"
              type="text"
              placeholder="Filter projects..."
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Page;
