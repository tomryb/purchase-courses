import axios from "axios";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import CoursePopup from "./CoursePopup";

const CourseDetails = (props) => {
  const { title, id } = props;
  const { setCourses } = useContext(StoreContext);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const showPopup = () => setIsOpenPopup(true);
  const hidePopup = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsOpenPopup(false);
  };

  const handleDeleteCourse = async () => {
    try {
      const { status } = await axios.delete(`/courses/${id}`);
      if (status === 200) {
        setCourses((prev) => prev.filter((course) => course.id !== id));
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <details>
      <summary>{title}</summary>
      <button onClick={showPopup}>Edytuj</button>
      <button onClick={handleDeleteCourse}>Usuń</button>
      <CoursePopup
        hidePopup={hidePopup}
        isOpenPopup={isOpenPopup}
        {...props}
      ></CoursePopup>
    </details>
  );
};

export default CourseDetails;
