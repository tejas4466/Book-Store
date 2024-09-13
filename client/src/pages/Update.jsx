import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error, setError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Update the Book</h1>
      <input
        type="text"
        placeholder="Book title"
        name="title"
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Book description"
        name="desc"
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Book price"
        name="price"
        className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Book cover URL"
        name="cover"
        className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        Update
      </button>
      {error && <p className="text-red-500 mt-4">Something went wrong!</p>}
      <div className="mt-6 text-center">
        <Link to="/" className="text-blue-500 hover:underline">
          See all books
        </Link>
      </div>
    </div>
  );
};

export default Update;



