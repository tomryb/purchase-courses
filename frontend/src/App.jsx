import "./App.scss";
import Header from "./components/Header/Header";
import StoreProvider from "./store/StoreProvider";
import { HashRouter as Router } from "react-router-dom";
import AsideMenu from "./components/AsideMenu/AsideMenu";

function App() {
  return (
    <StoreProvider>
      <Header></Header>
      <Router>
        <div className="content-wrapper">
          <AsideMenu></AsideMenu>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
