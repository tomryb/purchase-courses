import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "./subcomponents/Course";

import "./styles.scss";


const Courses = () => {
  const { courses } = useContext(StoreContext);

  const coursesElements = courses.map((course) => (
    <Course key={course.id} {...course}></Course>
  ));

  return (
    <section className="courses">
      <h2 className="title"></h2>
      <ul className="list">{coursesElements}</ul>
    </section>
  );
};

export default Courses;
