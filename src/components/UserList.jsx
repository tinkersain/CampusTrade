import React, { useEffect, useState } from "react";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="user-cards-container">
      {loading
        ? Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="user-card skeleton"></div>
          ))
        : users.map((user) => (
            <div key={user.id} className="user-card">
              <img
                className="user-avatar"
                src={user.image}
                alt={user.firstName}
              />
              <h2>
                {user.firstName} {user.lastName}
              </h2>
              <p className="user-info">
                {user.address.address}, {user.address.city},{" "}
                {user.address.state}, {user.address.postalCode}
              </p>
              <p className="user-contact">📞 {user.phone}</p>
              <p className="user-contact">✉️ {user.email}</p>
            </div>
          ))}
    </div>
  );
};

export default UserList;
