import { Link } from 'react-router-dom';
import styles from './FeedArticles.module.css';

const FeedArticles = ({ allFeedArticles = [] }) => {
  if (!allFeedArticles.length) {
    return <p>There aren`t any articles yet</p>;
  }

  return (
    <ul className={styles.list}>
      {allFeedArticles.map((article) => (
        <li className={styles.item} key={article.id}>
          <Link className={styles.link} to={`/article-detail/${article.id}`}>
            <p>{article.name}</p>
          </Link>
          <span className={styles.date}>{new Date().getFullYear()}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeedArticles;
