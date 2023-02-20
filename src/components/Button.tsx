import React from 'react';

type Props = { text: string; handleClick: any };

const Button = ({ text, handleClick }: Props) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-block px-8 py-2 border-2 border-black text-black font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out h-[40px]"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
    >
      {text}
    </button>
  );
};

export default Button;
