import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchArticleDetailsById } from '../../services/api/jsonplaceholder/feed';
import Article from '../../components/Article/Article';

import styles from './ArticleDetails.module.css';
import Loader from '../../components/Loader/Loader';

const ArticleDetails = () => {
  let { articleId } = useParams();
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await fetchArticleDetailsById(articleId);
        setArticle(data);
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Article №{articleId}</h1>
      <div className={styles.articleWrapper}>
        <Article article={article} />
      </div>
    </>
  );
};

export default ArticleDetails;
