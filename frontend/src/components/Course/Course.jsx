import React from "react";

import "./styles.scss";

const Course = ({ authors, img, price, title }) => {
  const allAuthors = authors.join(", ");

  return (
    <li>
      <article className="course-card">
        <h3 className="title">{title}</h3>
        <img className="img" src={img} alt={title} />
        <p className="price">{`Koszt kursu ${price}zł`}</p>
        <p className="authors">{`Autorzy kursu ${allAuthors}`}</p>
      </article>
    </li>
  );
};

export default Course;
