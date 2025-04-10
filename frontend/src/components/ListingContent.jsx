// src/components/Content.js
import React from "react";
import AllListings from "../pages/Listing/AllListings";
import SearchProduct from "../pages/Listing/SearchProduct";

function ListingContent({ activeView }) {
  switch (activeView) {
    case "allListings":
      return <AllListings />;
    case "searchListing":
      return <SearchProduct />;
    default:
      return <div>Select a view from the sidebar</div>;
  }
}

export default ListingContent;
