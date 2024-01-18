import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { STORAGE_KEY } from '../../constants/storage';

import { getFromLocalStorage } from '../../services/api/localStorage';
import {
  addNewFeed,
  deleteFeedById,
  fetchFeeds,
} from '../../services/api/jsonplaceholder/feed';

import FeedList from '../../components/FeedList/FeedList';
import Modal from '../../components/Modal/Modal';
import NewFeedForm from '../../components/NewFeedForm/NewFeedForm';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const userId = getFromLocalStorage(STORAGE_KEY.user);
  const [allFeeds, setAllFeeds] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openNewFeedModal = () => {
    setIsModalOpen(true);
  };

  const closeNewFeedModal = () => {
    setIsModalOpen(false);
  };

  const deleteFeed = async (id) => {
    try {
      setIsLoading(true);
      await deleteFeedById(id);
      const filteredFeeds = allFeeds.filter((feed) => feed.id !== id);
      setAllFeeds(filteredFeeds);
      toast.success('Feed was deleted');
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.elements.title?.value;
    const description = form.elements.description?.value;

    if (title && description) {
      const data = {
        title,
        body: description,
        userId: 1,
      };

      try {
        setIsLoading(true);
        const newFeed = await addNewFeed(data);
        if (newFeed?.data) {
          setAllFeeds([...allFeeds, newFeed.data]);
          closeNewFeedModal();
          toast.success('New feed was added successfully');
        }
      } catch (error) {
        toast.error('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    } else {
      toast.info('Please enter all fields');
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data } = await fetchFeeds(userId);
        const standardFeeds = data.length > 3 ? data.slice(0, 3) : allFeeds;
        setAllFeeds(standardFeeds);
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
      <h1>Feed</h1>
      <div>
        <FeedList allFeeds={allFeeds} deleteFeed={deleteFeed} />
        <button onClick={openNewFeedModal}>Add new feed</button>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeNewFeedModal}>
          <NewFeedForm onFormSubmit={onFormSubmit} />
        </Modal>
      )}
    </>
  );
};

export default Home;
