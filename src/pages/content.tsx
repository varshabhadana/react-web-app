import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
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
    <div className="bg-white h-full">
      <Header />
      <div className="text-xl p-4">Hey {userDetails?.firstName} !</div>
      <Video />
      <Media />

      <Footer />
    </div>
  );
};

export default Content;
