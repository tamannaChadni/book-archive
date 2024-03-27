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
import BookDetails from "./component/BookDetails/BookDetails";
// import SortedBook from "../component/Home";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Home />,
  // },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        // loader: () => fetch("book.json"),
        loader: () => fetch('https://tamannachadni.github.io/book-json-hosting/book.json'),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        // loader: () => fetch("book.json"),
        loader: () => fetch('https://tamannachadni.github.io/book-json-hosting/book.json'),
        // loader: ({params}) => fetch(`https://tamannachadni.github.io/book-json-hosting/book.json/${params.bookId}`),
      },
      {
        path: "/listed-book",
        element: <SortedBook></SortedBook>,
      },
      {
        path: "/page-to-read",
        element: <Graph></Graph>,
      },
      {
        path: "/quotes",
        element: <Quotes></Quotes>,
        loader: () => fetch("book.json"),
      },
      {
        path: "/review",
        element: <Review></Review>,
        loader: () => fetch("book.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
);
