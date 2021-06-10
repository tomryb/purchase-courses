import "./App.scss";
import Header from './components/Header/Header'
import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <Header></Header>
    </StoreProvider>
  );
}

export default App;
