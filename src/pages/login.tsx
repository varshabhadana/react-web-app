import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type LoginForm = {
  email: string;
  password: string;
};
const initialValues = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginForm>(initialValues);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLoginForm({
      ...loginForm,
      [event.currentTarget.id]: event.currentTarget.value,
    });
  }

  /*  async function loginHandle() {
    const loginResponse = await fetch('https://jsonplaceholder.typicode.com/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(loginForm),
    })
      .then((loginResponse) => loginResponse.json())
      .then((json) => console.log(json));
  } */

  return (
    <div>
      <section className="h-full flex justify-center items-center bg-gray-200 ">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg ">
                <div className="p-2">
                  {' '}
                  <button
                    onClick={() => navigate('/')}
                    className="w-auto h-full p-2 flex justify-center"
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
                <div className="lg:flex justify-center items-center g-0">
                  <div className="lg:w-8/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          We are The Lotus Team
                        </h4>
                      </div>
                      <form
                        onSubmit={(event) => {
                          event.preventDefault();
                          setLoginForm(initialValues);
                        }}
                      >
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="text"
                            id="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Email"
                            value={loginForm.email}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="password"
                            placeholder="Password"
                            value={loginForm.password}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-blue-500"
                            type="submit"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link to={'/register'}>
                            {' '}
                            <button
                              type="button"
                              className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                              data-mdb-ripple="true"
                              data-mdb-ripple-color="light"
                            >
                              Register
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
