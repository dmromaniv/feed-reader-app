import { axiosInstance } from '..';

export async function fetchFeeds(id) {
  const response = await axiosInstance.get('/posts', {params: {
    userId: id,
  }});

  return response;
}

export async function addNewFeed(data) {
  const response = await axiosInstance.post('/posts', data);

  return response;
}

export async function deleteFeedById(id) {
  const response = await axiosInstance.delete(`/posts/${id}`);

  return response;
}

export async function fetchArticlesByFeedId(id) {
  const response = await axiosInstance.get(`posts/${id}/comments`);

  return response;
}

export async function fetchArticleDetailsById(id) {
  const response = await axiosInstance.get(`/comments/${id}`);

  return response;
}
