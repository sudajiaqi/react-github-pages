import axios from 'axios';
import { getToken } from './cookie';

const token = getToken();
const baseURL = 'https://api.github.com';
const userName = process.env.USER_NAME;
export const getGists = (page = 1) => {
  const config = {
    // Accept: 'application/vnd.github.v3+json',
    baseURL,
    params: { page, per_page: 20 },
    // headers: {
    //   Authorization: 'token 3cb476c3b0281ee28bb50f4e7e5dd0d75f4d165f',
    // },
  };
  return axios.get(`/users/${userName}/gists`, config);
};


export const getGist = (id) => {
  const config = {
    baseURL,
  };
  return axios.get(`/gists/${id}`, config);
};

export const updateGist = (id, title, description, content) => {
  const data = {
    public: true,
    description,
    files: {
      [title]: { content, filename: title },
    },
  };
  const config = {
    baseURL,
    // headers: {
    //   Authorization: 'token 3cb476c3b0281ee28bb50f4e7e5dd0d75f4d165f',
    // },
  };
  return axios.patch(`/gists/${id}`, data, config);
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
    baseURL,
    // headers: {
    //   Authorization: 'token 3cb476c3b0281ee28bb50f4e7e5dd0d75f4d165f',
    // },
  };
  return axios.put('/gists', data, config);
};
