import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
const App = React.lazy(() => import("./App"));
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
