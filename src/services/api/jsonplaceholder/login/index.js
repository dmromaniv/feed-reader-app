import { axiosInstance } from '..';

export const login = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);

  return response;
}


