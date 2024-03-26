import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./Pages/Home";
import SortedBook from "./component/SortedBook/SortedBook";
import Graph from "./component/Graph/Graph";
import Quotes from "./component/Quotes/Quotes";
import Review from "./component/Review/Review";
import MainLayout from "./component/Layout/MainLayout";
// import Books from "./component/Books/Books";
import Home from "./Pages/Home";
// import SortedBook from "../component/Home";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path: "/",
    element: <MainLayout>
    </MainLayout>,
    children:[
       {
        index: true,
        element:<Home></Home>
       },
       {
        path: "/listed-book",
        element: <SortedBook></SortedBook>
      },
      {
        path: "/page-to-read",
        element:<Graph></Graph>,
      },
      {
        path: "/quotes",
        element:<Quotes></Quotes> ,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
    ]
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
