import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleGoogleAuth, refreshUser } from 'store/auth/authOperations';

const HandleAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(handleGoogleAuth());
        await dispatch(refreshUser());

        navigate('/home');
      } catch (error) {
        console.error('Error handling Google authentication:', error);
      }
    };

    fetchData();
  }, [dispatch, navigate]);
  return null;
};

export default HandleAuth;
