import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Modal from "../Modal/Modal";

import request from "../../helpers/request";

import "./styles.scss";

const LoginForm = ({ handleOnClose, isModalOpen }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [validateMessage, setValidateMessage] = useState("");

  const { setUser } = useContext(StoreContext);

  const handleOnChangeLogin = ({ target: { value } }) => setLogin(value);
  const handleOnChangePassword = ({ target: { value } }) => setPassword(value);
  const handleOnCloseModal = (event) => {
    event.preventDefault();
    handleOnClose();
  };

  const resetStateOfInput = () => {
    setLogin("");
    setPassword("");
    setValidateMessage("");
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const { data, status } = await request.post("/users", { login, password });

    if (status === 200) {
      setUser(data.user);
      resetStateOfInput();
      handleOnClose();
    } else {
      setValidateMessage(data.message);
    }
  };

  useEffect(() => {
      if(isModalOpen) {
      resetStateOfInput()
    }
  }, [isModalOpen])

  const validateMessageComponent = validateMessage.length ? (
    <p className="validate-message">{validateMessage}</p>
  ) : null;

  return (
    <Modal
      handleOnClose={handleOnClose}
      isOpen={isModalOpen}
      shouldBeClosedOutsideClick={true}
    >
      {validateMessageComponent}
      <form className="form" method="post" onSubmit={handleOnSubmit}>
        <div className="row">
          <label>
            Loginasd
            <input onChange={handleOnChangeLogin} type="text" value={login} />
          </label>
        </div>
        <div className="row">
          <label>
            Hasło
            <input
              onChange={handleOnChangePassword}
              type="password"
              value={password}
            />
          </label>
        </div>
        <div className="row">
          <button type="submit">Zaloguj</button>
          <button onClick={handleOnCloseModal} type="button">
            Anuluj
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;
