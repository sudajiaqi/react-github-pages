import Cookies from 'js-cookie';

const tokenName = 'gist-token';

export const setToken = (token) => {
  Cookies.set(tokenName, token, { expires: 30 });
};

export const getToken = () => Cookies.get(tokenName);

export const removeToken = () => Cookies.remove(tokenName);
