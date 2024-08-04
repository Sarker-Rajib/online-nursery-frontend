import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { GeneralRouter } from "./router/Routes/Routes.tsx";
import { Provider } from "react-redux";
import { myNurseryStore } from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={myNurseryStore}>
      <RouterProvider router={GeneralRouter} />
    </Provider>
  </React.StrictMode>
);
