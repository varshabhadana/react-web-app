import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {};

const homepage = (props: Props) => {
  return (
    <div className="bg-blue-600 ">
      <Header />
      <div className=" h-[600px] relative text-white text-bold ">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col flex-wrap justify-center items-center  p-8">
            <div>
              {' '}
              <h1 className="text-6xl">ABCDEF</h1>
            </div>
            <div>
              {' '}
              <p className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate voluptas qui ipsa culpa, labore vel omnis doloremque
                eligendi maxime nam.
              </p>
            </div>
          </div>
          <div className="mr-5 w-2/12 flex justify-between">
            <ul>
              <li className="border-2 border-white p-2 font-medium text-md leading-tight uppercase rounded transition duration-500 ease-in-out hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110">
                <a href="#">Learn More</a>
              </li>
            </ul>

            <button className="border-2 border-white p-2 font-medium text-md leading-tight uppercase rounded transition duration-500 ease-in-out hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110 ">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default homepage;
