import React from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const homepage = (props: Props) => {
  return (
    <div>
      <Link to={'/login'}>
        {' '}
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
          className="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
        >
          Register
        </button>
      </Link>
    </div>
  );
};

export default homepage;
