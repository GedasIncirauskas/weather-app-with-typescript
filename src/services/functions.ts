export const generateRegex = (name: string) =>
  new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)');
export const getWeatherIcon = (symbol: string) =>
  `https://developer.foreca.com/static/images/symbols/${symbol}.png`;
export const formatDate = (date: Date) => new Date(date).toString().slice(4, 21);
