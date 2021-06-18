import React from "react";
import "../styles.scss";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <>
      <p className="title">Panel administratora</p>
      <nav>
        <ul>
          <li className="link">
            <Link to="/manage-courses">Zarządzanie kursami</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default AdminMenu;
