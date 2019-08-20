import axios from 'axios';

const userName = process.env.USER_NAME;
export const getGists = (page = 1) => {
  const config = {
    // Accept: 'application/vnd.github.v3+json',
    baseURL: 'https://api.github.com',
    params: { page, per_page: 20 },
    // headers: {
    //   Authorization: 'token 3cb476c3b0281ee28bb50f4e7e5dd0d75f4d165f',
    // },
  };
  return axios.get(`/users/${userName}/gists`, config);
};


export const getGist = (id) => {
  const config = {
    baseURL: 'https://api.github.com',
  };
  return axios.get(`/gists/${id}`, config);
};
