import React, { useEffect, useState } from "react";
import ReadBook from "../ReadBook/ReadBook";
// import { Link } from "react-router-dom";
import Wishlist from "../Wishlist/Wishlist";

const SortedBook = () => {
  const [readBooked, setReadBooked] = useState([]);
  const [wishListBookes, setWishListBookes] = useState([]);

  // console.log(readBooked,wishListBookes);

  // const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const getReadBook = JSON.parse(localStorage.getItem("readBooks")) || [];
    setReadBooked(getReadBook);

    const getWishListBook =
      JSON.parse(localStorage.getItem("wishListBooks")) || [];
    setWishListBookes(getWishListBook);
  }, []);

  // sorting
  const handleRatingSort = () => {
    setReadBooked([...readBooked].sort((a, b) => b.rating - a.rating));
  };
  const handleNumOfPagesSort = () => {
    setReadBooked([...readBooked].sort((a, b) => b.totalPages - a.totalPages));
  };
  const handlePubYearSort = () => {
    setReadBooked(
      [...readBooked].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
    );
  };

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
              <a onClick={handleRatingSort}>Rating</a>
            </li>
            <li>
              <a onClick={handleNumOfPagesSort}>Number of pages</a>
            </li>
            <li>
              <a onClick={handlePubYearSort}>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>
      {/* button */}
      {/* tab */}
      {/* readbook */}

      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="ReadBook"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-b-base-300 rounded-box p-6"
        >
          {readBooked.map((read, idx) => (
            <ReadBook key={idx} read={read}></ReadBook>
          ))}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Wishlist"
          checked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-b-base-300 rounded-box p-6"
        >
          {wishListBookes.map((wish, idx) => (
            <Wishlist key={idx} wish={wish}></Wishlist>
          ))}
        </div>
      </div>

      
      
      {/* tab */}
    </div>
  );
};

export default SortedBook;
