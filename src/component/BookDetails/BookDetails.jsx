import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  console.log(books);
  const { bookId } = useParams();
  console.log(useParams);
  console.log(bookId);

  const perBooks = books.find((b) => b.bookId == bookId);
  console.log("-----------" + useLoaderData());
  console.log("---------prebook--" + perBooks);

  const {
    image,
    author,
    bookName,
    review,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = perBooks;

  // ------------------------------------
  // const {
  //   image,
  //   author,
  //   bookName,
  //   review,
  //   category,
  //   tags,
  //   totalPages,
  //   publisher,
  //   yearOfPublishing,
  //   rating,
  // } = book;
  return (
    <div className="container mx-auto mt-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            alt=""
            className="object-cover w-full h-52 dark:bg-gray-500"
            src={image}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>{author}</p>
          <p>{category}</p>
          <p>{review}</p>
          <div className="gap-3">
            {tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <hr />
          <p>Number of Pages: {totalPages}</p>
          <p>Publisher:{publisher}</p>
          <p>year of publish :{yearOfPublishing}</p>
          <p>Rating: {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Read</button>
            <button className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
