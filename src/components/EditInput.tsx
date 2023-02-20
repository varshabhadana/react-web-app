import React from 'react';

type Props = {
  editMode: boolean;
  id: string;
  value: string | undefined;
  handleEdit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function EditInput({ editMode, id, value, handleEdit }: Props) {
  return (
    <div>
      {editMode ? (
        <input
          id={id}
          className="w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={value}
          onChange={handleEdit}
        />
      ) : (
        <label> {value}</label>
      )}
    </div>
  );
}

export default EditInput;
