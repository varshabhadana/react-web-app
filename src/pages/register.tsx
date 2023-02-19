import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

type Form = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
const initialFormValues = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function Register() {
  const navigate = useNavigate();
  const [form, setFormValues] = useState<Form>(initialFormValues);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...form,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }
  async function registerHandle() {
    await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        id: uuidv4(),
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
      }),
    });
    navigate('/Content');
  }
  return (
    <div className="flex h-full md:h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-200  ">
      <div className="overflow-hidden bg-white shadow-lg rounded-lg space-y-8 w-9/12 h-full ">
        <div className="p-2 ">
          {' '}
          <button
            onClick={() => navigate('/')}
            className="w-auto h-full p-2 flex  justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
          </button>
        </div>
        <div className='flex justify-center items-center py-12 px-6  "'>
          <div className="xl:w-10/12 ">
            <div className="flex justify-center items-center">
              <div className="w-8/12 flex justify-center items-center px-6 py-12 ">
                <form
                  className="flex flex-col w-full flex space-y-3 "
                  onSubmit={(event) => {
                    event.preventDefault();
                    setFormValues(initialFormValues);
                  }}
                >
                  <h1 className=" text-xl font-semibold mt-1 mb-12 pb-1 text-center tracking-tight text-gray-900">
                    Create Account
                  </h1>

                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-blue-500"
                    type="submit"
                    onClick={registerHandle}
                  >
                    Register
                  </button>

                  <h3 className="mt-4">
                    Already have an account ?{' '}
                    <Link to={'/login'}>
                      <button className="font-medium text-blue-600 hover:text-blue-800 ml-2">
                        Login
                      </button>
                    </Link>{' '}
                  </h3>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
