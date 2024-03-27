import React from "react";

const SortedBook = () => {
  return (
    <div className="container mt-4">
      <div className="texy-center bg-slate-400 h-">
        <h1>Books</h1>

        <button className="mt-5">Sort By</button>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortedBook;
