import React from "react";

const Loading = () => {
  return setTimeout(() => {
    document.querySelector("iframe").style.display = "none";
  }, 2000);
};

export default Loading;
