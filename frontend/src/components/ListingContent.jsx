// src/components/Content.js
import React, { useEffect } from "react";
import AllListings from "../pages/Listing/AllListings";
import SearchProduct from "../pages/Listing/SearchProduct";
import AddListing from "../pages/Listing/AddListing";
import UpdateListing from "../pages/Listing/UpdateListing";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function ListingContent({ activeView }) {
  switch (activeView) {
    case "allListings":
      return <AllListings />;
    case "searchListing":
      return <SearchProduct />;
    case "addListing":
      return <AddListing />;
    case "updateListing":
      return <UpdateListing />;
    default:
      return <div>Select a view from the sidebar</div>;
  }
}

export default ListingContent;
