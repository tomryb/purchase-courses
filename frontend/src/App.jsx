import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Header from "./components/Header/Header";
import StoreProvider from "./store/StoreProvider";
import AsideMenu from "./components/AsideMenu/AsideMenu";
import Content from "./components/Content/Content"

import "./App.scss";

function App() {
  return (
    <StoreProvider>
      <Header></Header>
      <Router>
        <div className="content-wrapper">
          <AsideMenu></AsideMenu>
          <Content></Content>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
