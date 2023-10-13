import Link from "next/link";
import * as React from "react";

interface Props {
  title: String;
  formState: "LOGIN" | "REGISTER";
}

const formLogin = () => {
  return (
    <form action="#" method="POST">
      <div className="overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 ">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 ">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Link href="/dashboard">Login</Link>
          </button>
        </div>
      </div>
    </form>
  );
};

const formRegister = () => {
  return (
    <form action="#" method="POST">
      <div className="overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

const auth = ({ title = "Login", formState = "LOGIN" }: Props) => {
  const [activeForm, setactiveForm] = React.useState(formState);

  return (
    <div className="w-full h-screen md:flex flex-row">
      <div className="hidden md:flex w-full h-screen bg-gradient-to-r from-green-400 to-blue-500"></div>
      <div className={`sm:w-full h-screen flex items-center p-4`}>
        <div className="w-full flex-col">
          <div className="w-full flex flex-row bg-sky-900 bg-opacity-5 p-1 rounded-2xl">
            <button
              onClick={() => setactiveForm("LOGIN")}
              className={`flex-grow`}
            >
              <div
                className={` items-center justify-center rounded-lg m-1 p-2 cursor-pointer hover:bg-white ${
                  activeForm === "LOGIN"
                    ? "text-black bg-white shadow"
                    : "text-gray-500"
                }`}
              >
                Login
              </div>
            </button>
            <button
              onClick={() => setactiveForm("REGISTER")}
              className={`flex-grow`}
            >
              <div
                className={` items-center justify-center rounded-lg m-1 p-2 cursor-pointer hover:bg-white ${
                  activeForm === "REGISTER"
                    ? "text-black bg-white shadow"
                    : "text-gray-500"
                }`}
              >
                Register
              </div>
            </button>
          </div>
          <div className="w-full">
            <div className={`divide-y divide-gray-200`}>
              {activeForm === "LOGIN" && formLogin()}
              {activeForm === "REGISTER" && formRegister()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default auth;
