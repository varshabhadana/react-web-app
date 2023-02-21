import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import EditInput from '../components/EditInput';
import Footer from '../components/Footer';
import Header from '../components/Header';

export type UserDetail = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Profile = () => {
  const [userDetails, setUserDetails] = useState<UserDetail>();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editUserDetails, seteditUserDetails] = useState<UserDetail>();
  const navigate = useNavigate();

  const id = localStorage.getItem('userId');

  function handleEdit(event: React.ChangeEvent<HTMLInputElement>) {
    if (editUserDetails) {
      seteditUserDetails({
        ...editUserDetails,
        [event.currentTarget.id]: event.currentTarget.value,
      });
    }
  }

  function handleCancelEdit() {
    seteditUserDetails(userDetails);
  }

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/users/${id}`)
        .then((response) => response.json())
        .then((json) => {
          setUserDetails(json);
          seteditUserDetails(json);
        });
    } else {
      navigate('/login');
    }
  }, [id]);

  async function updateUserDetail(id: string) {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(editUserDetails),
    });
    const data = await response.json();
    setUserDetails(data);
  }

  return (
    <div className="bg-[#f8edeb] h-screen p-8 ">
      <div>
        <Header />
        <div className="flex justify-center mt-8">
          <div className="bg-[#ffff] shadow-lg rounded-lg h-[500px] w-[1200px] p-8  mb-6   ">
            <div className="text-xl  font-nanumMyeongjo text-gray-600 mb-4 p-4 border-b-2 border-gray-200">
              User Details
            </div>
            {userDetails && (
              <div className="flex p-8 ">
                <div className="flex flex-col my-2 mx-6">
                  <div className="mb-6 p-1 w-[180px] h-auto ">
                    <img src="/youngboy.svg" alt="young boy avatar"></img>
                  </div>
                </div>
                <div className="w-11/12 ">
                  <div className="ml-8  ">
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <div className="text-sm font-medium text-gray-500 font-nanumMyeongjo">
                        First Name
                      </div>

                      <EditInput
                        id={'firstName'}
                        value={editUserDetails?.firstName}
                        editMode={editMode}
                        handleEdit={handleEdit}
                      />
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <div className="text-sm font-medium text-gray-500 font-nanumMyeongjo">
                        Last Name
                      </div>
                      <EditInput
                        id={'lastName'}
                        value={editUserDetails?.lastName}
                        editMode={editMode}
                        handleEdit={handleEdit}
                      />
                    </div>

                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <div className="text-sm font-medium text-gray-500 font-nanumMyeongjo">
                        Email Address
                      </div>
                      <EditInput
                        id={'email'}
                        value={editUserDetails?.email}
                        editMode={editMode}
                        handleEdit={handleEdit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className=" flex justify-end p-5">
              {editMode ? (
                <div className="flex justify-between gap-4">
                  {' '}
                  <Button
                    text={'Cancel'}
                    handleClick={() => {
                      handleCancelEdit();
                      setEditMode(false);
                    }}
                  />
                  <Button
                    text={'Save'}
                    handleClick={() => {
                      setEditMode(false);
                      updateUserDetail(editUserDetails?.id as string);
                    }}
                  />
                </div>
              ) : (
                <div>
                  <Button text={'Edit'} handleClick={() => setEditMode(true)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
