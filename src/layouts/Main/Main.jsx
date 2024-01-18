import Header from '../../components/Header/Header';

import styles from './Main.module.css';

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
    </>
  );
};

export default Main;
