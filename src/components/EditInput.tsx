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
          className="bg-red-200"
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
