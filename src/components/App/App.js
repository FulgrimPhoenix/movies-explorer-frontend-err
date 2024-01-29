import { Route, Routes } from "react-router-dom";
import "../../vendor/fonts/fonts.css";
import "../../vendor/normalize.css";
import "./App.css";
import React from "react";

import { Header } from "../Header/Header";
import { Movies } from "../Movies/Movies.js";
import { Main } from "../Main/Main";
import { projectConstants } from "../../utils/constants";
import { Footer } from "../Footer/Footer";
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MovieCardList } from "../MovieCardList/MovieCardList.js";
import { Register } from "../Register/Register";
import { LogRegForm } from "../LogRegForm/LogRegForm";


function App() {

  return (
    <div className="page">

      <Routes>
        <Route path="movies" element={<Movies />}>
          <Route
            index
            element={
              <>
                <Header navigationButtons={["Фильмы", "Сохраненные фильмы"]} />
                <SearchForm
                  formSearchUtils={projectConstants.formSearchUtils}
                />
                <MovieCardList
                  cardCellData={projectConstants.moviesData.staticData}
                  movieList={projectConstants.moviesData.movieList}
                />
                <Footer footerData={projectConstants.footerData} />
              </>
            }
          />
        </Route>
        <Route path="/saved-movis" />
        <Route
          path="/"
          element={
            <>
              <Header navigationButtons={["Фильмы", "Сохраненные фильмы"]} />
              <Main projectConstants={projectConstants} />
              <Footer footerData={projectConstants.footerData} />
            </>
          }
        />
        <Route path="/profile" />
        <Route path="signin" element={<Register />}>
          <Route index element={<LogRegForm formData={projectConstants.registerFormData} />} />
        </Route>
        <Route path="signup" element={<Register />}>
          <Route index element={<LogRegForm formData={projectConstants.registerFormData} />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
