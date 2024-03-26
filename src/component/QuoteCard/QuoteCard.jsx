import React from "react";

const QuoteCard = ({ book }) => {
  const { author, quote } = book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-4 ">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-rounded btn-sm">
            <p className=" text-xl  font-bold bg-gradient-to-r from-lime-500 via-yellow-500 to-green-400 text-transparent bg-clip-text animate-gradient">{author}</p>
          </button>
        </div>

        <p>{quote}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
