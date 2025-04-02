import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainLayout from "./layout/Mainlayout";
import Home from "./pages/Home";
import Person from "./components/Person";
import ToggleMessage from "./components/ToggleMessage";
import UserGreeting from "./components/UserGreeting";
import PasswordToggle from "./components/PasswordToggle";
import ThemeSwitcher from "./components/ThemeSwitcher";
import TodoApp from "./components/TodoApp";
import UserList from "./components/UserList";

// Create the router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Wrap the layout with the Navbar and Footer
    children: [
      { path: "/", element: <Home /> },
      { path: "/person", element: <Person name="John" age={25} /> },
      { path: "/toggle-message", element: <ToggleMessage /> },
      { path: "/user-greeting", element: <UserGreeting /> },
      { path: "/password-toggle", element: <PasswordToggle /> },
      { path: "/theme-switcher", element: <ThemeSwitcher /> },
      { path: "/todo-app", element: <TodoApp /> },
      { path: "/users", element: <UserList /> },
    ],
  },
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;
