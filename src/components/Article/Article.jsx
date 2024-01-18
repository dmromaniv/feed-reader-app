import styles from './Article.module.css';

const Article = ({ article }) => {
  return (
    <div className={styles.articleWrapper}>
      <h2>Name</h2>
      <p>{article?.name || 'No available information'}</p>
      <h2>Data</h2>
      <p>{article?.body || ''}</p>
    </div>
  );
};

export default Article;
