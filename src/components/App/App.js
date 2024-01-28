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


function App() {

  return (
    <div className="page">
      <Header navigationButtons={["Фильмы", "Сохраненные фильмы"]} />
      <Routes>
        <Route path="movies" element={<Movies />}>
          <Route
            index
            element={
              <>
                <SearchForm
                  formSearchUtils={projectConstants.formSearchUtils}
                />
                <MovieCardList
                  cardCellData={projectConstants.moviesData.staticData}
                  movieList={projectConstants.moviesData.movieList}
                />
              </>
            }
          />
        </Route>
        <Route path="/saved-movis" />
        <Route
          path="/"
          element={
            <>
              <Main projectConstants={projectConstants} />
            </>
          }
        />
        <Route path="/profile" />
        <Route path="/signin" />
        <Route path="/signup" />
      </Routes>
      <Footer footerData={projectConstants.footerData} />
    </div>
  );
}

export default App;
