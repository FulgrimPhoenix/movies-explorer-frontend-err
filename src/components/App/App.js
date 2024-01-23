import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "../Header/Header";
import { Movies } from "../Movies/Movies";
import { Main } from "../Main/Main";
import { projectConstants } from "../../utils/constants";

function App() {

  return (
    <div className="page">
      <Header
        navigationButtons={['Фильмы', 'Сохраненные фильмы']}
      />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movis" />
        <Route
          path="/"
          element={
            <>
              <Main projectConstants={projectConstants}/>
            </>
          }
        />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
    </div>
  );
}

export default App;
