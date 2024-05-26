import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { FcServices } from "react-icons/fc";
const App = React.lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="loading">
          <FcServices />
        </div>
      }
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
