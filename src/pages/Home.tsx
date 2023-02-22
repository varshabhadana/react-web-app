import React from 'react';
import AppLayout from '../components/AppLayout';

type TButtonProps = {
  text: string;
};

function StyledButton({ text }: TButtonProps) {
  return (
    <button className="border-2 text-[#1b4332] border-[#84a59d] p-2 font-medium text-md leading-tight uppercase rounded transition duration-500 ease-in-out hover:bg-[#84a59d] hover:text-white transform hover:-translate-y-1 hover:scale-110">
      {text}
    </button>
  );
}

const homepage = () => {
  return (
    <AppLayout>
      <div className="bg-[#f8edeb] h-screen ">
        <div className="flex flex-col gap-8 ">
          <div className="w-full h-full text-blue-600 text-bold p-4 mt-12 ">
            <div className="flex flex-row justify-center items-center px-12 py-6 gap-12 ">
              <div className="bg-[#cce3de] rounded-full w-4/12">
                {' '}
                <img
                  src="/heroImage.svg"
                  alt="dog"
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
                  <StyledButton text=" Learn More" />
                  <StyledButton text="Get Started" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default homepage;
