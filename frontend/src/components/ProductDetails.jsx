import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`/api/listing/${id}`)
      .then((res) => setListing(res.data))
      .catch((err) => setError("Error fetching product details"));
  }, [id]);

  if (error) return <p className="text-danger">{error}</p>;
  if (!listing) return <p>Loading...</p>;

  return (
    <Container className="my-4">
      <Row>
        {/* Product Image */}
        <Col md={6}>
          <Card>
            {listing.imageName && (
              <Card.Img
                variant="top"
                src={listing.imageName}
                alt={listing.itemName}
                style={{ objectFit: "cover", height: "300px" }}
              />
            )}
          </Card>
        </Col>
        {/* Product Details */}
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{listing.itemName}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {listing.category}
              </Card.Subtitle>
              <Card.Text>{listing.description}</Card.Text>
              <Card.Text>
                <strong>Condition:</strong> {listing.condition}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> ${listing.price}
              </Card.Text>
              <Card.Text>
                <strong>Status:</strong> {listing.status}
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Owner Details */}
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>Owner Details</Card.Title>
              {listing.owner ? (
                <>
                  <Card.Text>
                    <strong>Name:</strong> {listing.owner.name}
                  </Card.Text>
                  <Card.Text>
                    <strong>Email:</strong> {listing.owner.email}
                  </Card.Text>
                  <Card.Text>
                    <strong>Mobile:</strong> {listing.owner.mobile}
                  </Card.Text>
                </>
              ) : (
                <p>No owner details available</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
