import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const id = localStorage.getItem('userId');
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <div className="bg-[#f8edeb] flex justify-between h-[10px] w-auto p-8  ">
      <div className="flex justify-between text-2xl text-bold text-[#f28482]">
        <Link to={'/'}>
          <h1>Woophy</h1>
        </Link>
      </div>
      {id ? (
        <div className="flex gap-4">
          {' '}
          <button
            onClick={() => {
              localStorage.removeItem('userId');
              navigate('/');
            }}
            type="button"
            className="inline-block px-8 py-2 border-2 text-[#1b4332] border-[#84a59d]  font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-[40px]"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            Logout
          </button>
          <div>
            <Link
              to={location.pathname === '/profile' ? '/content' : '/profile'}
            >
              <button
                type="button"
                className="inline-block px-8 py-2 border-2 text-[#1b4332] border-[#84a59d] font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-[40px]"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {location.pathname === '/profile' ? 'Content' : 'Profile'}
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
              className="inline-block px-6 py-2 border-2 text-[#1b4332] border-[#84a59d]  font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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
              className="inline-block px-6 py-2 border-2 text-[#1b4332] border-[#84a59d] font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ml-2"
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
