import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
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
    <div className="bg-blue-600 h-screen">
      <Header />
      <div className="text-xl">Hey {userDetails?.firstName} !</div>
    </div>
  );
};

export default Content;
