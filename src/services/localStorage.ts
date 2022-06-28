export const Storage = {
  setReview,
  getItem,
  setTheme,
  getTheme
} as any;

function setReview(review: any) {
  const feedback = getItem('feedback') || [];
  feedback.push(review);

  setItem('feedback', feedback);
}

function setItem(name: string, item: any) {
  return localStorage.setItem(name, JSON.stringify(item));
}

function getItem(name: any) {
  return JSON.parse(localStorage.getItem(name));
}

function setTheme(theme: any) {
  return setItem('isDarkTheme', theme);
}

function getTheme() {
  return getItem('isDarkTheme');
}
