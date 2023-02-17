import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex justify-between h-[10px] w-auto p-8 mb-4 ">
      <div className="flex justify-between text-white">
        <div>
          <h1>COMPANY NAME</h1>
        </div>
      </div>
      <div>
        {' '}
        <Link to={'/login'}>
          {' '}
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            LOGIN
          </button>
        </Link>
        <Link to={'/register'}>
          {' '}
          <button
            type="button"
            className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-2"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
