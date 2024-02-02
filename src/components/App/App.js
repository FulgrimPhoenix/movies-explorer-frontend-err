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
import { LogRegInput } from "../LogRegInput/LogRegInput.js";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { Profile } from "../Profile/Profile.js";
import { Login } from "../Login/Login.js";

function App() {
  const [email, setEmail] = React.useState("");

  function changeEmail(e) {
    setEmail(e.target.value);
    console.log(email);
  }

  return (
    <CurrentUserContext.Provider
      value={{ profileName: "Dick", profileEmail: "test@mail.ru" }}
    >
      <div className="page">
        <Routes>
          <Route path="movies" element={<Movies />}>
            <Route
              index
              element={
                <>
                  <Header
                    navigationButtons={["Фильмы", "Сохраненные фильмы"]}
                  />
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
          <Route
            path="/profile"
            element={<Profile profileData={projectConstants.profileData} />}
          />
          <Route
            path="/signin"
            element={<Login loginFormData={projectConstants.loginFormData} />}
          ></Route>
          <Route
            path="signup"
            element={
              <Register registerFormData={projectConstants.registerFormData} />
            }
          ></Route>
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
