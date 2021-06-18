import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { StoreContext } from "../../store/StoreProvider";
import AdminPanel from "../AdminPanel/AdminPanel";
import Courses from "../Courses/Courses";
import UserCourses from "../UserCourses/UserCourses";

import "./styles.scss";

const ADMIN_TYPE = 1;

const Content = () => {
  const { user } = useContext(StoreContext);
  const isUserLogged = Boolean(user);
  const isAdmin = user?.accessLevel === ADMIN_TYPE;
  return (
    <main className="content">
      <Switch>
        <Route exact path="/" render={() => <Courses></Courses>}></Route>
        {isUserLogged && (
          <Route
            exact
            path="/my-courses"
            render={() => <UserCourses></UserCourses>}
          ></Route>
        )}
        {isAdmin && (
          <Route
            exact
            path="/manage-courses"
            render={() => <AdminPanel></AdminPanel>}
          ></Route>
        )}
        <Redirect to="/"></Redirect>
      </Switch>
    </main>
  );
};

export default Content;
