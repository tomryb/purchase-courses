import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "../Course/Course";

import "./styles.scss";

const Courses = () => {
  const { courses } = useContext(StoreContext);

  const coursesElements = courses.map((course) => (
    <Course key={course.id} {...course}></Course>
  ));

  return (
    <section className="courses">
      <ul className="list">{coursesElements}</ul>
    </section>
  );
};

export default Courses;
