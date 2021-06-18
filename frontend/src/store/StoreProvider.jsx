import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    const { data } = await axios.get("/courses");

    setCourses(data.courses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StoreContext.Provider value={{courses, setCourses, user, setUser}}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
