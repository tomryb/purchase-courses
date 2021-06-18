import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";

import "./styles.scss";

const Course = ({ authors, id, img, isUserContext = false, price, title }) => {
  const { user, setUser } = useContext(StoreContext);
  const history = useHistory();

  const allAuthors = authors.join(", ");
  const isUserLogged = Boolean(user);

  const handleOnClick = async () => {
    try {
      const { data, status } = await axios.patch("/users", {
        login: user.login,
        courseId: id,
      });

      if (status === 202) {
        setUser(data.user);
        history.push("/my-courses");
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const shouldBeBuyButtonVisible = isUserLogged && !isUserContext;

  return (
    <li>
      <article className="course-card">
        <h3 className="title">{title}</h3>
        <img className="img" src={img} alt={title} />
        <p className="price">{`Koszt kursu ${price}zł`}</p>
        <p className="authors">{`Autorzy kursu ${allAuthors}`}</p>
        {shouldBeBuyButtonVisible && (
          <button onClick={handleOnClick}>Zakup ten kurs</button>
        )}
      </article>
    </li>
  );
};

export default Course;
