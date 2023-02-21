import { UserIcon } from '@heroicons/react/20/solid';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const id = localStorage.getItem('userId');
  const navigate = useNavigate();
  return (
    <div className="flex justify-between h-[10px] w-auto p-8 mb-4 ">
      <div className="flex justify-between text-blue-600">
        <Link to={'/'}>
          <h1>COMPANY NAME</h1>
        </Link>
      </div>
      {id ? (
        <div className="flex gap-4">
          {' '}
          <button
            onClick={() => {
              localStorage.removeItem('userId');
              navigate('/');
              console.log('logout');
            }}
            type="button"
            className="inline-block px-8 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-[40px]"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Logout
          </button>
          <div>
            <Link to={'/profile'}>
              <button
                type="button"
                className="inline-block px-8 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-[40px]"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Profile
              </button>
            </Link>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default Header;
