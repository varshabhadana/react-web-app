import React from 'react';

function Visuals() {
  return (
    <>
      <div className="flex justify-center items-center gap-8 px-6 py-8  ">
        <div>
          {' '}
          <img
            src="/dog-1.jpg"
            alt="dog with owner"
            width="580px"
            height="500px"
          ></img>
        </div>

        <div className="w-4/12 text-[#1b4332] font-nanumMyeongjo leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          cupiditate maiores tenetur eius delectus aut eligendi quibusdam? Iure,
          sapiente porro.
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 px-6 py-4">
        <div className="w-4/12 text-[#1b4332] font-nanumMyeongjo leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt,
          cupiditate maiores tenetur eius delectus aut eligendi quibusdam? Iure,
          sapiente porro.
        </div>
        <div>
          {' '}
          <img
            src="/dog-3.jpg"
            width="580px"
            height="500px"
            alt="dog with owner"
          ></img>
        </div>
      </div>
    </>
  );
}

export default Visuals;
