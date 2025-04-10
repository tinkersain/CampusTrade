import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ListingSidebar from "./ListingSidebar";
import ListingContent from "./ListingContent";

function ListingView() {
  // Default view is set to show all listings
  const [activeView, setActiveView] = React.useState("allListings");

  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          md={3}
          lg={2}
          className="bg-dark text-white p-0 min-vh-100"
        >
          <ListingSidebar
            activeView={activeView}
            setActiveView={setActiveView}
          />
        </Col>
        <Col xs={12} md={9} lg={10} className="p-4 bg-light min-vh-100">
          <ListingContent activeView={activeView} />
        </Col>
      </Row>
    </Container>
  );
}

export default ListingView;
