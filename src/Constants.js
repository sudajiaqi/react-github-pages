const host = window.location.hostname;
let user = process.env.USER_NAME;
if (host.trim().endsWith('.github.io')) {
  [user] = host.toString().split('.');
}
const userName = user;

const baseURL = 'https://api.github.com';
const userAvatar = process.env.AVATAR;

export { baseURL, userName, userAvatar };
