import { generateRegex } from './functions';

export const Cookie = {
  getToken,
  setToken
};

function setToken(token: string) {
  setCookie('token', token);
}

function getToken() {
  return getCookie('token');
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}`;
}

function getCookie(name: string) {
  const cookies = document.cookie;
  const regExp = generateRegex(name);
  const token = cookies.match(regExp);
  return token ? decodeURIComponent(token[1]) : undefined;
}
