import React from "react";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const SingleBook = ({ book }) => {
  const { bookId, bookName, author, image, category, rating, tags } = book;
  return (
    <article className="flex flex-col dark:bg-gray-50">
      <Link to={bookId}>
        <img
          alt=""
          className="object-cover w-full h-52 dark:bg-gray-500"
          src={image}
        />
      </Link>
      <div className="flex flex-col flex-1 p-6">
        <Link to={bookId}></Link>
        <div className=" flex justify-between gap-2">
          {tags.map((tag, idx) => (
            <span className="text-lime-500 font-medium " key={idx}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
          {bookName}
        </h3>
        <p>By: {author}</p>
        <hr />
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>{category}</span>
          <div className="flex gap-1 items-center">
            <span>
              <FaRegStar />
            </span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleBook;
