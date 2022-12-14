import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const AddService = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [shortDes, setShortDes] = useState("");
  const [longDes, setLongDes] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://server-gamma-ochre.vercel.app/api/food", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img,
        title,
        shortDes,
        longDes,
        rating,
        price,
        time: new Date(),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        toast(data.msg);
      });
    setImg("");
    setTitle("");
    setShortDes("");
    setLongDes("");
    setRating("");
    setPrice("");
  };
  useEffect(() => {
    window.document.title = "FoodGhor-Add";
  }, []);
  return (
    <div className="container my-5">
      <div>
        <h3>Add service</h3>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            placeholder="Add picture"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            className="form-control"
          />
          <input
            type="text"
            onChange={(e) => setShortDes(e.target.value)}
            value={shortDes}
            placeholder="Short description"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setLongDes(e.target.value)}
            value={longDes}
            placeholder="Long description"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setRating(e.target.value)}
            value={rating}
            placeholder="Rationg"
            className="form-control my-2"
          />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="Price"
            className="form-control my-1"
          />
          <button className="btn btn-dark form-control my-1">
            Add service
          </button>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default AddService;
