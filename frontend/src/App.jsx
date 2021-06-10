import "./App.scss";

import StoreProvider from "./store/StoreProvider";

function App() {
  return (
    <StoreProvider>
      <div className="App">Hello</div>
    </StoreProvider>
  );
}

export default App;
