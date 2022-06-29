import { ReviewProps } from '../ts/interfaces';

export const Storage = {
  setReview,
  getItem,
  setTheme,
  getTheme
};

function setReview(review: ReviewProps) {
  const feedback = getItem('feedback') || [];
  feedback.push(review);
  setItem('feedback', feedback);
}

function setItem(name: string, item: boolean) {
  return localStorage.setItem(name, JSON.stringify(item));
}

function getItem(name: string) {
  return JSON.parse(localStorage.getItem(name));
}

function setTheme(theme: boolean) {
  return setItem('isDarkTheme', theme);
}

function getTheme() {
  return getItem('isDarkTheme');
}
