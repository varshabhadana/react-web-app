import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import Video from '../components/Video';
import Media from '../components/Visuals';
import { UserDetail } from './Profile';

const Content = () => {
  const [userDetails, setUserDetails] = useState<UserDetail>();
  const id = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/users/${id}`)
        .then((response) => response.json())
        .then((json) => setUserDetails(json));
    } else {
      navigate('/login');
    }
    console.log('userDetails', userDetails);
  }, [id]);

  return (
    <AppLayout>
      <div className="bg-[#f8edeb] font-nanumMyeongjo text-2xl h-full">
        <div className=" text-[#1b4332] text-3xl text-left p-4">
          Hey {userDetails?.firstName}!
        </div>
        <Video />
        <Media />
      </div>
    </AppLayout>
  );
};

export default Content;
