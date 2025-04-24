import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function SearchProduct() {
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

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`/api/listing/search?query=${query}`)
      .then((res) => {
        setResults(res.data);
        setError("");
      })
      .catch((err) => {
        setError("Error performing search");
        setResults([]);
      });
  };

  return (
    <Container className="my-4">
      <h3>Search Products</h3>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="query">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Search
        </Button>
      </Form>
      {error && <p className="text-danger mt-2">{error}</p>}
      <Row className="mt-4">
        {results.length > 0 ? (
          results.map((product, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Card className="h-100 shadow-sm">
                  {product.imageName && (
                    <Card.Img
                      variant="top"
                      src={product.imageName}
                      alt={product.itemName}
                      style={{ objectFit: "cover", height: "200px" }}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{product.itemName}</Card.Title>
                    <Card.Text style={{ height: "60px", overflow: "hidden" }}>
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">${product.price}</small>
                  </Card.Footer>
                </Card>
              </Link>
            </Col>
          ))
        ) : (
          <p className="mt-4">No results found.</p>
        )}
      </Row>
    </Container>
  );
}

export default SearchProduct;
