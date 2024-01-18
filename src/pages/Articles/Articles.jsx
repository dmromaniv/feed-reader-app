import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { fetchArticlesByFeedId } from '../../services/api/jsonplaceholder/feed';

import FeedArticles from '../../components/FeedArticles/FeedArticles';
import Loader from '../../components/Loader/Loader';

const Articles = () => {
  let { feedId } = useParams();
  const [feedArticles, setFeedArticles] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await fetchArticlesByFeedId(feedId);
        setFeedArticles(data);
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [feedId]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <h1>Articles</h1>
      <FeedArticles allFeedArticles={feedArticles} />
    </>
  );
};

export default Articles;
