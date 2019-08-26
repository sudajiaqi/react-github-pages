import axios from 'axios';
import cookies from './cookie';
import { BASE_URL, PAGE_SIZE, USER_NAME as userName } from '../Constants';

const token = cookies.getToken();
const configWithToken = {
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${token}`,
  },
};

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getAuthentication = (newToken) => {
  const config = {
    headers: {
      Authorization: `token ${newToken}`,
    },
  };
  return instance.get('/', config);
};


export const getUser = () => instance.get(`/users/${userName}`);

export const getGists = (page = 1) => {
  const config = {
    params: {
      page,
      per_page: PAGE_SIZE,
    },
  };
  return instance.get(`/users/${userName}/gists`, config);
};


export const getGist = (id) => instance.get(`/gists/${id}`);

export const updateGist = (id, title, description, content) => {
  const data = {
    public: true,
    description,
    files: {
      [title]: { content },
    },
  };

  return instance.patch(`/gists/${id}`, data, configWithToken);
};

export const createGist = (title, description, content) => {
  const data = {
    public: true,
    description,
    files: {
      [title]: { content },
    },
  };

  return instance.put('/gists', data, configWithToken);
};


export const deleteGist = (id) => instance.delete(`/gists/${id}`, configWithToken);
