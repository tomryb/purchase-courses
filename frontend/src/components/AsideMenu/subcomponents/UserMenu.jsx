import React from "react";
import "../styles.scss";
import { Link } from "react-router-dom";

const UserMenu = ({ isUserLogged }) => {
  return (
    <>
      <p className="title">Panel użytkownika</p>
      <nav>
        <ul>
          <li className="link">
            <Link to="/">Kursy w sprzedaży</Link>
          </li>
          {isUserLogged && (
            <li className="link">
              <Link to="/my-courses">Moje zakupione kursy</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default UserMenu;
