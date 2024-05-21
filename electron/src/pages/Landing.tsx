import { useNavigate } from "react-router-dom";
import { setLicenseType } from "../app/slices";
import { useAppDispatch } from "../app/hooks";

export const Landing = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const setLicense = (value: "A" | "B" | null) => {
    console.log(value);
    dispatch(setLicenseType(value));
    navigate("/quiz");
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Driver License Exam is Here
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
          <div className="w-full sm:w-1/2 lg:w-1/3 bg-gray-800 rounded-lg sm:rounded-r-none p-6 sm:p-8">
            <div className="mb-4">
              <h3 className="text-gray-100 text-2xl sm:text-3xl font-semibold">
                Type B
              </h3>
              <p className="text-gray-300">Camion</p>
            </div>

            <div className="space-x-2 mb-4">
              <span className="text-gray-100 text-4xl font-bold">$29</span>
              <span className="text-gray-300 text-2xl line-through">$49</span>
            </div>

            <ul className="text-gray-300 space-y-2 mb-6">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Code</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>how are you</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Tdwira</span>
              </li>
            </ul>

            <a
              onClick={() => setLicense("B")}
              className="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Start B Exam
            </a>
          </div>

          <div className="w-full sm:w-1/2 bg-gradient-to-tr from-indigo-500 to-violet-400 rounded-lg shadow-xl p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                  Type A
                </h3>
                <p className="text-indigo-100">Cars + Motocycles</p>
              </div>

              <span className="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                Best Match
              </span>
            </div>

            <div className="space-x-2 mb-4">
              <span className="text-white text-4xl font-bold">$49</span>
              <span className="text-indigo-100 text-2xl line-through">$89</span>
            </div>

            <ul className="text-indigo-100 space-y-2 mb-6">
              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Code</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>How are you </span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>try Again</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>Tdwira bro</span>
              </li>

              <li className="flex items-center gap-1.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span>bak sa7bi</span>
              </li>
            </ul>

            <a
              onClick={() => setLicense("A")}
              className="block bg-indigo-200 bg-opacity-50 hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
            >
              Yala mab9ach
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
