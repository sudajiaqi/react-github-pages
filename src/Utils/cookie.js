import Cookies from 'js-cookie';

const tokenName = 'gist-token';

const setToken = (token) => {
  Cookies.set(tokenName, token, { expires: 30 });
};

const getToken = () => Cookies.get(tokenName);

const removeToken = () => Cookies.remove(tokenName);

const cookies = {
  setToken,
  getToken,
  removeToken,
};
export default cookies;
