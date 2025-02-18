import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleBook from "../SingleBook/SingleBook";

const Books = () => {
  const books = useLoaderData();
 
  return (
    <div className="container mx-auto mt-4 ">
      <section className="py-6 sm:py-12 dark:bg-gray-100 dark:text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Book</h2>
            <p className="font-serif text-xl dark:text-gray-600">
              Reading is more than a passion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <SingleBook key={book.bookId} book={book}></SingleBook>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
