import axios from 'axios';
import { getToken } from './cookie';

const token = getToken();
const baseURL = 'https://api.github.com';
const userName = process.env.USER_NAME;

const instance = axios.create({
  baseURL,
});

export const getGists = (page = 1) => {
  const config = {
    params: { page, per_page: 20 },
  };
  return instance.get(`/users/${userName}/gists`, config);
};


export const getGist = (id) => {
  return instance.get(`/gists/${id}`);
};

export const updateGist = (id, title, description, content) => {
  const data = {
    public: true,
    description,
    files: {
      [title]: { content },
    },
  };
  const config = {
    headers: {
      Authorization: 'token 7511b53cde97b30c992118f75c57cd4d2ab65b5d',
    },
  };
  return instance.patch(`/gists/${id}`, data, config);
};

export const createGist = (title, description, content) => {
  const data = {
    public: true,
    description,
    files: {
      [title]: { content },
    },
  };
  const config = {
    // headers: {
    //   Authorization: 'token 3cb476c3b0281ee28bb50f4e7e5dd0d75f4d165f',
    // },
  };
  return instance.put('/gists', data, config);
};
