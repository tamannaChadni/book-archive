import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { MdOutlineContactPage } from "react-icons/md";
import { SiAffinitypublisher } from "react-icons/si";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePeopleOutline } from "react-icons/md";

const ReadBook = ({ read }) => {
  
  const {
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    publisher,
    yearOfPublishing,
  } = read;
  // console.log(books);
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-5">
        <figure>
          <img src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">
            Title : <span className=" text-lime-400">{bookName}</span>{" "}
          </h2>
          <div className=" font-medium flex gap-2 items-center">
            <MdOutlinePeopleOutline />
            Author : <span className=" text-lime-400">{author}</span>{" "}
          </div>
          {/* <p>Tag : </p> */}
          <div className="font-medium flex gap-2 items-center">
            {" "}
            <LuMapPin />
            Year : <span className=" text-lime-400">{yearOfPublishing}</span>
          </div>
          <div className="font-medium flex gap-2 items-center">
            <SiAffinitypublisher />
            Publisher :<span className=" text-lime-400">{publisher}</span>{" "}
          </div>
          <div className="font-medium flex gap-2 items-center">
            <MdOutlineContactPage />
            Page :<span className=" text-lime-400">{totalPages}</span>{" "}
          </div>

          <div className="card-actions justify- start">
            <button className="btn  bg-blue-300 text-white">
              Category:{category}
            </button>
            <button className="btn  bg-orange-300 text-white">
              Rating : {rating}
            </button>
            <Link to="/book/:bookId" className="btn bg-lime-300 text-white ">
              View Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
ReadBook.propTypes = {
  read: PropTypes.object,
};

export default ReadBook;
