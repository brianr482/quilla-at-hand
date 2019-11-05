import { useContext } from 'react';
import userContext from '../contexts/userContext';

const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export default useSession;
