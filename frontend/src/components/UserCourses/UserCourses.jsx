import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Course from "../Course/Course";

import "./styles.scss";

const UserCourses = () => {
  const { user, courses } = useContext(StoreContext);

  const boughtCourses = courses
    .filter((course) => user.courses.includes(course.id))
    .map((course) => <Course key={course.id} {...course}></Course>);

  return (
    <section className="user-courses">
      <h2 className="title">Twoje wykupione kursy</h2>
      <ul className="list">{boughtCourses}</ul>
    </section>
  );
};

export default UserCourses;
