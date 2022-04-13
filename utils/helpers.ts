export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

export const setIsLoggedIn = () => {
  localStorage.setItem('isLoggedIn', 'true');
};

export const getIsLoggedIn = () => {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    return true;
  }
};

export const stringToBeautifiedFragment = (str = "") =>
  str
    .toLocaleLowerCase()
    .replace(/\s/g, "-")
    .replace(/\?/g, "")
    .replace(/,/g, "");
