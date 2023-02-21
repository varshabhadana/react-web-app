import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {};

const homepage = (props: Props) => {
  return (
    <div className="bg-[#f8edeb] h-screen">
      <Header />
      <div className="w-full h-full text-blue-600 text-bold p-4 ">
        <div className="flex flex-row justify-center items-center px-12 py-6 gap-12">
          <div className="bg-[#cce3de] rounded-full w-4/12">
            {' '}
            <img
              src="/heroImage.svg"
              alt="dog picture"
              width="700px"
              height="200px"
            />
          </div>
          <div className="w-6/12 flex flex-col justify-center items-center gap-8 ">
            {' '}
            <h1 className="mt-8 text-[#f28482] text-center text-6xl text-bold font-nanumMyeongjo">
              Share Your Pet Life
            </h1>
            <div className="mr-5 w-2/12 flex justify-center items-center gap-4 w-6/12 px-4 py-6">
              <ul>
                <li className="border-2 text-[#1b4332] border-green-light p-2 font-medium text-md leading-tight uppercase rounded transition duration-500 ease-in-out hover:bg-blue-900 transform hover:-translate-y-1 hover:scale-110">
                  <a href="#">Learn More</a>
                </li>
              </ul>

              <button className="border-2 text-[#1b4332] border-green-light p-2 font-medium text-md leading-tight uppercase rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default homepage;
