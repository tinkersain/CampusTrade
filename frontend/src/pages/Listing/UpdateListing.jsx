import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UpdateListing = () => {
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

  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const fetchListings = async () => {
    const response = await axios.get("/api/listing");
    setListings(response.data);
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?"))
      return;
    await axios.delete(`/api/listing/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchListings();
  };

  const handleEditClick = (listing) => {
    setSelectedListing(listing);
    setShowEditModal(true);
  };

  const handleImageClick = (listing) => {
    setSelectedListing(listing);
    setShowImageModal(true);
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setSelectedListing((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setSelectedImageFile(e.target.files[0]);
  };

  const handleEditSubmit = async () => {
    await axios.put(`/api/listing/${selectedListing._id}`, selectedListing, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setShowEditModal(false);
    fetchListings();
  };

  const handleImageSubmit = async () => {
    if (!selectedImageFile) return;
    const formData = new FormData();
    formData.append("image", selectedImageFile);
    await axios.put(`/api/listing/image/${selectedListing._id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    setShowImageModal(false);
    setSelectedImageFile(null);
    fetchListings();
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Listings</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Condition</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing) => (
              <tr key={listing._id}>
                <td>{listing.itemName}</td>
                <td>{listing.category}</td>
                <td>{listing.condition}</td>
                <td>${listing.price}</td>
                <td>{listing.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => handleEditClick(listing)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => handleImageClick(listing)}
                  >
                    Update Image
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(listing._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedListing && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  name="itemName"
                  value={selectedListing.itemName}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={selectedListing.category}
                  onChange={handleEditChange}
                >
                  <option>Book</option>
                  <option>Engineering Equipment</option>
                  <option>Stationery</option>
                  <option>Electronics</option>
                  <option>Sports Equipment</option>
                  <option>Clothing</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={selectedListing.description}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Condition</Form.Label>
                <Form.Control
                  as="select"
                  name="condition"
                  value={selectedListing.condition}
                  onChange={handleEditChange}
                >
                  <option>As New</option>
                  <option>Good</option>
                  <option>Poor</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={selectedListing.price}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Status</Form.Label>
                <Form.Control
                  as="select"
                  name="status"
                  value={selectedListing.status}
                  onChange={handleEditChange}
                >
                  <option>Available</option>
                  <option>Sold</option>
                </Form.Control>
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleEditSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showImageModal} onHide={() => setShowImageModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Listing Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Select Image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowImageModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleImageSubmit}>
            Update Image
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateListing;
