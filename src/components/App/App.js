import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";

function App() {
  return (
    <div className="page">
      <Header>
        <Routes>
          <Route path="/movies" element={}/>
          <Route path="/saved-movis" />
        </Routes>
      </Header>
      <Routes>
        <Route path="/" />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
