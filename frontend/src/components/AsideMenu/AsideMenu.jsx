import React, { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import "./styles.scss";
import AdminMenu from "./subcomponents/AdminMenu";
import UserMenu from "./subcomponents/UserMenu";

const ADMIN_TYPE = 1;

const AsideMenu = () => {
  const { user } = useContext(StoreContext);

  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu></AdminMenu> : null;

  return (
    <section className="aside-menu">
      <div className="nav-wrapper">
        <UserMenu isUserLogged={Boolean(user)}></UserMenu>
        {adminMenuComponent}
      </div>
    </section>
  );
};

export default AsideMenu;
