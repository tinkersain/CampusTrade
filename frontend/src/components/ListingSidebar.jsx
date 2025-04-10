import React from "react";
import { Nav } from "react-bootstrap";

function ListingSidebar({ setActiveView, activeView }) {
  const items = [
    { key: "allListings", label: "All Listings" },
    { key: "searchListing", label: "Search Listing" },
  ];

  return (
    <Nav className="flex-column p-3 bg-dark text-white">
      <h4 className="text-center mb-4">Listings Panel</h4>
      {items.map((item) => (
        <Nav.Link
          key={item.key}
          onClick={() => setActiveView(item.key)}
          className={`text-white ${
            activeView === item.key ? "bg-secondary" : ""
          }`}
          style={{ cursor: "pointer" }}
        >
          {item.label}
        </Nav.Link>
      ))}
    </Nav>
  );
}

export default ListingSidebar;
