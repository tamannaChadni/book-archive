import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SortedBook from "./component/SortedBook/SortedBook";
import Graph from "./component/Graph/Graph";
import Quotes from "./component/Quotes/Quotes";
import Review from "./component/Review/Review";
import MainLayout from "./component/Layout/MainLayout";
import Home from "./Pages/Home";
import BookDetails from "./component/BookDetails/BookDetails";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import Wishlist from "./component/Wishlist/Wishlist";
import ReadBook from "./component/ReadBook/ReadBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () =>
          fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
      },
      {
        path: "/book/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () =>
          fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
      },
      {
        path: "/listed-book",
        element: <SortedBook></SortedBook>,
        loader: () =>
          fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
        children: [
          {
            path: "/listed-book/readbook",
            element: <ReadBook></ReadBook>,
            loader: () =>
              fetch(
                "https://tamannachadni.github.io/book-json-hosting/book.json"
              ),
          },
          {
            path: "/listed-book/wishlist",
            element: <Wishlist></Wishlist>,
            loader: () =>
              fetch(
                "https://tamannachadni.github.io/book-json-hosting/book.json"
              ),
          },
        ],
      },
      {
        path: "/listed-book/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/page-to-read",
        element: <Graph></Graph>,
      },
      {
        path: "/quotes",
        element: <Quotes></Quotes>,
        loader: () =>
          fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
      },
      {
        path: "/review",
        element: <Review></Review>,
        loader: () =>
          fetch("https://tamannachadni.github.io/book-json-hosting/book.json"),
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
