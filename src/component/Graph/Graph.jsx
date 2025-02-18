import React from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const Graph = () => {
  const books = [
    {
      bookId: 1,
      bookName: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://i.ibb.co/Z8TvV3R/the-great-gatsby.jpg",
      review:
        "A compelling story of love, ambition, and tragedy set in the roaring twenties.",
      totalPages: 180,
      rating: 4.5,
      category: "Classic Literature",
      tags: ["Romance", "Drama", "Historical"],
      publisher: "Scribner",
      yearOfPublishing: 1925,
      quote:
        "So we beat on, boats against the current, borne back ceaselessly into the past.",
    },
    {
      bookId: 2,
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "https://i.ibb.co/bm65DxY/images.jpg",
      review:
        "A poignant exploration of racial injustice and moral growth in the American South.",
      totalPages: 324,
      rating: 4.8,
      category: "Fiction",
      tags: ["Social Justice", "Coming of Age"],
      publisher: "J. B. Lippincott & Co.",
      yearOfPublishing: 1960,
      quote:
        "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
    },
    {
      bookId: 3,
      bookName: "1984",
      author: "George Orwell",
      image: "https://i.ibb.co/TTCjtXj/images-1.jpg",
      review:
        "A chilling dystopian novel that remains relevant in its warnings about surveillance and authoritarianism.",
      totalPages: 328,
      rating: 4.7,
      category: "Science Fiction",
      tags: ["Dystopian", "Political"],
      publisher: "Secker & Warburg",
      yearOfPublishing: 1949,
      quote: "Big Brother is watching you.",
    },
    {
      bookId: 4,
      bookName: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://i.ibb.co/Pxw8KxG/images-2.jpg",
      review:
        "A timeless romance that explores themes of social class and personal growth.",
      totalPages: 432,
      rating: 4.6,
      category: "Romance",
      tags: ["Classic", "Regency"],
      publisher: "T. Egerton, Whitehall",
      yearOfPublishing: 1813,
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    },
    {
      bookId: 5,
      bookName: "The Catcher in the Rye",
      author: "J.D. Salinger",
      image: "https://i.ibb.co/RcdVDbd/images-3.jpg",
      review:
        "An iconic portrayal of teenage angst and alienation in post-war America.",
      totalPages: 224,
      rating: 4.4,
      category: "Fiction",
      tags: ["Coming of Age", "Literary"],
      publisher: "Little, Brown and Company",
      yearOfPublishing: 1951,
      quote:
        "Don't ever tell anybody anything. If you do, you start missing everybody.",
    },
    {
      bookId: 6,
      bookName: "The Hobbit",
      author: "J.R.R. Tolkien",
      image: "https://i.ibb.co/71KTmpW/images-4.jpg",
      review:
        "A delightful adventure tale set in Middle-earth, perfect for readers of all ages.",
      totalPages: 320,
      rating: 4.9,
      category: "Fantasy",
      tags: ["Adventure", "Quest"],
      publisher: "George Allen & Unwin",
      yearOfPublishing: 1937,
      quote: "In a hole in the ground there lived a hobbit.",
    },
  ];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="container mx-auto mt-4">
      
     
<BarChart
      width={1300}
      height={600}
      data={books}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >


<CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {books.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
     
    </div>
  );
};

export default Graph;
