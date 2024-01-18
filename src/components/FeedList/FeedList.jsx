import { Link } from 'react-router-dom';

import styles from './FeedList.module.css';

const FeedList = ({ allFeeds = [], deleteFeed }) => {
  if (!allFeeds.length) {
    return <p>There aren`t any feeds yet</p>;
  }
  return (
    <ul className={styles.list}>
      {allFeeds.map((feed) => (
        <li key={feed.id} className={styles.item}>
          <Link className={styles.link} to={`/articles/${feed.id}`}>
            <p className={styles.title}>{feed.title}</p>
          </Link>
          <button
            className={styles.button}
            type='button'
            onClick={() => {
              deleteFeed(feed.id);
            }}
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedList;
