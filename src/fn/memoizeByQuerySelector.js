const memoizeByQuerySelector = (querySelector) => {
  let element;
  return () => {
    if (!element) {
      element = document.querySelector(querySelector);
    }
    return element;
  };
};

export default memoizeByQuerySelector;
