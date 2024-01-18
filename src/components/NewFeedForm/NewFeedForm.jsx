import styles from './NewFeedForm.module.css';

const NewFeedForm = ({ onFormSubmit }) => {
  return (
    <>
      <form className={styles.form} onSubmit={onFormSubmit}>
        <label className={styles.label}>
          *Title
          <input
            className={styles.input}
            type='text'
            name='title'
            placeholder='Enter feed tittle'
          />
        </label>

        <label className={styles.label}>
          *Description
          <input
            className={styles.input}
            type='text'
            name='description'
            placeholder='Enter feed description'
          />
        </label>
        <button className={styles.button}>Add new feed</button>
      </form>
    </>
  );
};

export default NewFeedForm;
