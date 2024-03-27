import React from "react";
import QuoteCard from "../QuoteCard/QuoteCard";
import { useLoaderData } from "react-router-dom";

const Quotes = () => {
  const books = useLoaderData();
  return (
    <div className="container lg:mx-auto mt-4 grid grid-cols-1 lg:grid-cols-3 ">
      {books.map((book) => (
        <QuoteCard key={book.id} book={book}></QuoteCard>
      ))}
    </div>
  );
};

export default Quotes;
