import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "../../vendor/fonts/fonts.css";
import "../../vendor/normalize.css";
import "./App.css";
import React, { useEffect } from "react";

import { Header } from "../Header/Header";
import { Movies } from "../Movies/Movies.js";
import { Main } from "../Main/Main";
import { projectConstants } from "../../utils/constants";
import { Footer } from "../Footer/Footer";
import { SearchForm } from "../SearchForm/SearchForm.js";
import { MovieCardList } from "../MovieCardList/MovieCardList.js";
import { Register } from "../Register/Register";
import { CurrentUserContext } from "../../context/CurrentUserContext.js";
import { Profile } from "../Profile/Profile.js";
import { Login } from "../Login/Login.js";
import { Page } from "../Page/Page.js";

function App() {
  const [email, setEmail] = React.useState("");
  const [logStatus, setLogStatus] = React.useState(true);
  const [likedMovies, setLikedMovies] = React.useState([])

  const navigate =useNavigate();

  function logOut(){
    setLogStatus(false);
    navigate("/", { replace: true });
  }

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
          <Route
            path="/"
            element={
              <>
                <Header headerData={projectConstants.headerData} isLoggedIn={logStatus} />
                <Page />
                <Footer footerData={projectConstants.footerData} />
              </>
            }
          >
            <Route
              index
              element={<Main projectConstants={projectConstants} />}
            />
            <Route
              path="movies"
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
            <Route
              path="saved-movies"
              element={
                <SearchForm
                  formSearchUtils={projectConstants.formSearchUtils}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile profileData={projectConstants.profileData} logOut={logOut} />}
            />
          </Route>
          <Route
            path="/signin"
            element={<Login loginFormData={projectConstants.loginFormData} />}
          ></Route>
          <Route
            path="/signup"
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
