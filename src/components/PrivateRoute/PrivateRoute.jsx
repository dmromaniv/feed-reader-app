import { Navigate } from 'react-router-dom';

import { getFromLocalStorage } from '../../services/api/localStorage';
import { STORAGE_KEY } from '../../constants/storage';

const PrivateRoute = ({ component: Component }) => {
  const isLoggedIn = getFromLocalStorage(STORAGE_KEY.user);

  return isLoggedIn ? <Component /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
