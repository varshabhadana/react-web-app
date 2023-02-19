import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export type UserDetail = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Profile = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState<UserDetail>();

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((json) => setUserDetails(json));
  }, [id]);

  return (
    <div className="bg-gray-200 h-screen p-8 ">
      <div>
        <Header />
        <div className="bg-white shadow-lg rounded-lg h-[500px] p-2  mb-6">
          <div className="text-xl text-gray-600 mb-4 p-4 border-b-2 border-gray-200">
            User Details
          </div>
          {userDetails && (
            <div className="flex p-8">
              <div className="flex flex-col my-2 mx-6">
                <div className="mb-4 border-b-2 p-1 ">
                  <img src="/youngboy.svg" alt="young boy avatar"></img>
                </div>
                <div className="flex justify-between text-sm text-gray-600 ">
                  {' '}
                  <div>
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-2 text-sm text-gray-600 mb-5">
                    San Francisco
                  </div>
                </div>
              </div>
              <div className="w-10/12">
                <div className="ml-8 ">
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      First Name
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {userDetails.firstName}
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Last Name
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {userDetails.lastName}
                    </div>
                  </div>

                  <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <div className="text-sm font-medium text-gray-500">
                      Email Address
                    </div>
                    <div className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {userDetails.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
