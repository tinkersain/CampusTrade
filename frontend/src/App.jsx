import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/Mainlayout";
import axios from "axios";
import ListingView from "./components/ListingView";
import ProductDetails from "./components/ProductDetails";
import SearchProduct from "./pages/Listing/SearchProduct";
axios.defaults.baseURL = "http://localhost:5000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrap the layout with the Navbar and Footer
    children: [
      { path: "/", element: <ListingView /> },
      { path: "/product/:id", element: <ProductDetails /> },
      { path: "/search", element: <SearchProduct /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
