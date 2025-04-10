import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllListings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios
      .get("/api/listing")
      .then((res) => setListings(res.data))
      .catch((err) => console.error("Error fetching listings:", err));
  }, []);

  return (
    <Container className="my-4">
      <h3>All Listings</h3>
      <Row>
        {listings.map((listing, i) => (
          <Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Link
              to={`/product/${listing._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="h-100 shadow-sm">
                {listing.imageName && (
                  <Card.Img
                    variant="top"
                    src={listing.imageName}
                    alt={listing.itemName}
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                )}
                <Card.Body>
                  <Card.Title>{listing.itemName}</Card.Title>
                  <Card.Text style={{ height: "60px", overflow: "hidden" }}>
                    {listing.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">${listing.price}</small>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllListings;
