import { useNavigate } from 'react-router-dom';

import { STORAGE_KEY } from '../../constants/storage';
import { clearLocalStorage } from '../../services/api/localStorage';

import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const onClickHandler = () => {
    clearLocalStorage(STORAGE_KEY.user);
    navigate('/login');
  };

  return (
    <header className={styles.header}>
      <p className={styles.name}>Feed-reader</p>
      <button type='button' onClick={onClickHandler}>
        Logout
      </button>
    </header>
  );
};

export default Header;
