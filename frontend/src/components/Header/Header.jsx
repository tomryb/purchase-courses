import React, { useContext, useState } from "react";

import { StoreContext } from "../../store/StoreProvider";
import LoginForm from "../LoginForm/LoginForm";

import "./styles.scss";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, setUser } = useContext(StoreContext);

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  const setProperlyLabel = Boolean(user) ? "Wyloguj się" : "Zaloguj się";

  const handleOnClick = () => {
    if (Boolean(user)) {
      setUser(null);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <header>
      <div className="logo"></div>
      <h1>Kursy dla programistów</h1>
      <button onClick={handleOnClick} className="logged">{setProperlyLabel}</button>
      <LoginForm
        handleOnClose={handleOnClose}
        isModalOpen={isModalOpen}
      ></LoginForm>
    </header>
  );
};

export default Header;
