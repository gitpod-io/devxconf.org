export const isEurope = () => {
  const offset = new Date().getTimezoneOffset();
  return offset <= 0 && offset >= -180;
};

export const setIsLoggedIn = () => {
  localStorage.setItem('isLoggedIn', 'true');
};

export const getIsLoggedIn = () => {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    console.log()
    return true;
  }
};
