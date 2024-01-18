import styles from './Modal.module.css';

const Modal = ({ children, closeModal }) => {
  return (
    <>
      <div className={styles.overlay} onClick={closeModal} />
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>
          ✖
        </button>
        {children}
      </div>
    </>
  );
};

export default Modal;
