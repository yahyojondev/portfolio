const Loading = () => {
  return setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
  }, 1000);
};

export default Loading;
