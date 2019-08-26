const host = window.location.hostname;
let user = process.env.USER_NAME;
if (host.trim()
  .endsWith('.github.io')) {
  [user] = host.toString()
    .split('.');
}
const USER_NAME = user;

const PAGE_SIZE = 20;
const BASE_URL = 'https://api.github.com';
const USER_AVATAR = process.env.AVATAR;

export {
  BASE_URL, USER_NAME, USER_AVATAR, PAGE_SIZE,
};
