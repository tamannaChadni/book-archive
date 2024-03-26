import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
const Review = () => {
  const books = useLoaderData();

  return (
    <div className="container mx-auto mt-4 ">
     {books.map((book) => (
                 <Card key={book.id} book={book}></Card>
                 ))}
    </div>

    
  );
};

export default Review;
