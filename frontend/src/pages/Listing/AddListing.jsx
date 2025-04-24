import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const { name, token } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    function isAuthenticated() {
      if (
        name === null ||
        token === null ||
        name.length === 0 ||
        token.length === 0
      ) {
        navigate("/auth");
      }
    }

    isAuthenticated();
  }, [name, token]);

  const [formData, setFormData] = useState({
    itemName: "",
    category: "",
    description: "",
    condition: "",
    price: "",
    status: "Available",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }
      if (image) {
        data.append("image", image);
      }

      await axios.post("/api/listing", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Listing added successfully");

      setFormData({
        itemName: "",
        category: "",
        description: "",
        condition: "",
        price: "",
        status: "Available",
      });

      setImage(null);

      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Error adding listing");
    }
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Add New Listing</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Item Name</label>
          <input
            type="text"
            name="itemName"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select
            name="category"
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>Book</option>
            <option>Engineering Equipment</option>
            <option>Stationery</option>
            <option>Electronics</option>
            <option>Sports Equipment</option>
            <option>Clothing</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="col-md-6">
          <label className="form-label">Condition</label>
          <select
            name="condition"
            className="form-select"
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option>As New</option>
            <option>Good</option>
            <option>Poor</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label">Price</label>
          <input
            type="number"
            name="price"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Status</label>
          <select
            name="status"
            className="form-select"
            onChange={handleChange}
            required
            disabled
          >
            <option value="">Select</option>
            <option value="Available" selected>
              Available
            </option>
            <option value="Sold">Sold</option>
          </select>
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-5">
            Add Listing
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddListing;
