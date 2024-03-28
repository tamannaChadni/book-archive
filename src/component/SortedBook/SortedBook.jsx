import React, { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const SortedBook = () => {
  const books = useLoaderData();
  const bookDescending = [...books].sort((a, b) => b.bookIdd - a.bookId);
  console.log("kkkk", bookDescending);

  const [readBooked, setReadBooked] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const getReadBook = JSON.parse(localStorage.getItem("books")) || [];
    setReadBooked(getReadBook);
  }, []);

  
  return (
    <div className="container mx-auto mt-4">
      <div className=" text-center bg-slate-200 h-10  rounded-lg p-2">
        <h1 className="font-bold text-xl">Books</h1>
        <p>Search the {`world's`} most comprehensive index </p>
      </div>
      {/* button */}
      <div className="mt-8 mx-auto text-center">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-lime-500 text-white"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of pages</a>
            </li>
            <li>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* button */}
      {/* tab */}
      <div className="mt-7">
        <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap ">
          <Link
            to='/listed-book'
            onClick={() => setTabIndex(0)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            }  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Read Book</span>
          </Link>
          <Link
            to={`wishList`}
            onClick={() => setTabIndex(1)}
            className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            }  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <span>Wishlist</span>
          </Link>
        </div>
      </div>
      {/* tab */}
      <div className="mt-4">
        {readBooked.map((read, idx) => (
          <ReadBook key={idx} read={read}></ReadBook>
        ))}
      </div>
    </div>
  );
};

export default SortedBook;
